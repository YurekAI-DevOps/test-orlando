import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "cnQcx6hKEeYiBMa55qZxZ8",
      token: "Q2lLfrAQ2owDwet4JGDGWl0qjZ1gYKElNXhK2zqvcGqFE3RW9joxdtB5UEblRNKpNJ9j7cBjvfPr0DUvG6QA",
    },
  ],
  host: "https://builder.yurekai.com",
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
