package model

type AuthenticationInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type AuthenticationInputJson struct {
	Username string `form:"username" binding:"required"`
	Password string `form:"password" binding:"required"`
}
