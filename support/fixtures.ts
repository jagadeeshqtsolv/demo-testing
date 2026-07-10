import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pageobjects/HomePage";
import { ProjectTaskPage } from "../pageobjects/ProjectTaskPage";
import { TaskDetailedPage } from "../pageobjects/TaskDetailedPage";

type AppFixtures = {
  homePage: HomePage;
  projectTaskPage: ProjectTaskPage;
  taskDetailedPage: TaskDetailedPage;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  projectTaskPage: async ({ page }, use) => {
    await use(new ProjectTaskPage(page));
  },
  taskDetailedPage: async ({ page }, use) => {
    await use(new TaskDetailedPage(page));
  },
});

export { expect };
