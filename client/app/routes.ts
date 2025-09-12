import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("blog", "routes/blog.tsx"),

  layout("./admin/layout.tsx", [
    route("dashboard", "./admin/dashboard.tsx"),
  ]),
] satisfies RouteConfig;
