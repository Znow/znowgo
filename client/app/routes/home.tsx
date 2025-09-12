import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Znow.dk" },
    { name: "description", content: "Welcome to Znow.dk!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
