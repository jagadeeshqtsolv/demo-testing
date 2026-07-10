import { test, expect } from '@support/fixtures';
import env from '@support/env';


test('Start a Planned Project Task and verify Status, Started, and Actual Start Date update', { tag: ["@e2e","@regression","@P0","@start-planned-task-success"] }, async ({ page, homePage, commonPage, projectTaskPage, taskDetailedPage }) => {
  await test.step('Open — Open Salesforce Home page', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Search input visible', async () => {
    await homePage.expectSearchVisible();
  });

  await test.step('Fill — Type full project name in Search', async () => {
    await homePage.fillSearch(testData.startAPlannedProjectTaskAndVerifyStatusStartedAndActualStartDateUpdate.typeFullProjectNameInSearch);
  });

  await test.step('Assert visible — Search result for the exact Project appears', async () => {
    await homePage.expectSelectedprojectValue();
  });

  await test.step('Click — Select the Project from search results', async () => {
    await homePage.clickSelectedproject();
  });

  await test.step('Scroll — Scroll to Related Lists section', async () => {
    await commonPage.scrollScrollToRelatedListsSectionIntoView();
  });

  await test.step('Click — Click Show All in Related Lists', async () => {
    await commonPage.clickClickShowAllInRelatedLists();
  });

  await test.step('Assert visible — Related Lists page loaded', async () => {
    await commonPage.expectRelatedListsPageLoadedVisible();
  });

  await test.step('Click — Open Project Tasks related list', async () => {
    await commonPage.clickOpenProjectTasksRelatedList();
  });

  await test.step('Assert visible — Project Tasks list rendered', async () => {
    await commonPage.expectProjectTasksListRenderedVisible();
  });

  await test.step('Click — Open a task where Status = Planned', async () => {
    await projectTaskPage.clickPlannedProject();
  });

  await test.step('Assert visible — Project Task details page header visible', async () => {
    await commonPage.expectProjectTaskDetailsPageHeaderVisibleVisible();
  });

  await test.step('Assert contains — Verify Status field shows Planned', async () => {
    await taskDetailedPage.expectStatusContainsText('Planned');
  });

  await test.step('Assert visible — Verify Started field is present', async () => {
    await taskDetailedPage.expectStartedVisible();
  });

  await test.step('Assert visible — Verify Actual Start Date field is present', async () => {
    await taskDetailedPage.expectActualStartDateVisible();
  });

  await test.step('Assert visible — Verify Start button is visible', async () => {
    await taskDetailedPage.expectStartVisible();
  });

  await test.step('Assert enabled — Verify Start button is enabled', async () => {
    await taskDetailedPage.expectStartEnabled();
  });

  await test.step('Click — Click Start to begin the task', async () => {
    await taskDetailedPage.clickStart();
  });

  await test.step('Assert visible — Wait for Status to update to Started', async () => {
    await taskDetailedPage.expectStatusVisible();
  });

  await test.step('Assert contains — Confirm Status changed to Started', async () => {
    await taskDetailedPage.expectStatusContainsText('Started');
  });

  await test.step('Assert contains — Confirm Started field indicates Checked/selected', async () => {
    await taskDetailedPage.expectStartedContainsText('Checked');
  });

  await test.step('Assert contains — Confirm Actual Start Date is set to current date', async () => {
    const expectedDate = new Date().toLocaleDateString('en-GB');
    await taskDetailedPage.expectActualStartDateContainsText(expectedDate);
  });

  await test.step('Assert hidden — Verify Start button no longer visible after starting', async () => {
    await taskDetailedPage.expectStartHidden();
  });
});
