import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./sanity/schemas";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "lj42884w",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-05-08",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
