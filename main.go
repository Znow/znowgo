package main

import (
	"fmt"
	"log"
	"os"
	"strings"
	"znowgo/server/controller"
	"znowgo/server/database"
	"znowgo/server/middleware"
	"znowgo/server/model"

	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	loadEnv()
	loadDatabase()
	serveApplication()
}

func loadDatabase() {
	database.Connect()
	database.Database.AutoMigrate(&model.User{})
	database.Database.AutoMigrate(&model.Entry{})
}

func loadEnv() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Println("No .env.local file found, using environment variables")
	}
}

func serveApplication() {
	router := gin.Default()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	publicRoutes := router.Group("/auth")
	publicRoutes.POST("/register", controller.Register)
	publicRoutes.POST("/login", controller.Login)

	protectedRoutes := router.Group("/api")
	protectedRoutes.Use(middleware.JWTAuthMiddleware())
	protectedRoutes.POST("/entry", controller.AddEntry)
	protectedRoutes.GET("/entries", controller.GetAllEntries)

	config := cors.DefaultConfig()
	corsOrigins := os.Getenv("CORS_ORIGINS")
	if corsOrigins == "" || corsOrigins == "*" {
		config.AllowAllOrigins = true
	} else {
		config.AllowOrigins = strings.Split(corsOrigins, ",")
		config.AllowCredentials = true
	}

	router.Use(cors.New(config))

	router.Run(":" + port)

	fmt.Println("Server running on port " + port)
}
