package actions

import (
	"net/http"

	"github.com/gobuffalo/buffalo"

	"znowgo/models"
)

// HomeHandler is a default handler to serve up
// a home page.
func HomeHandler(c buffalo.Context) error {
	c.Set("current_user_id", c.Session().Get("current_user_id"))
	c.Set("user", models.User{})

	return c.Render(http.StatusOK, r.HTML("home/index.plush.html"))
}
