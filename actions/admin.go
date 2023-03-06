package actions

import (
	"net/http"

	"github.com/gobuffalo/buffalo"
)

// AdminIndex default implementation.
func AdminIndex(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.HTML("admin/index.html"))
}

