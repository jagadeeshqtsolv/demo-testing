import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class ProjectTaskPage {
  private static readonly L = {
    showAll: { strategy: 'role' as const, value: 'Show All (35)', role: 'link', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'link' as const },
    projectTasks10Preview: { strategy: 'text' as const, value: 'Project Tasks (10+)', shadowHost: 'lst-related-list-quick-link', actionKind: 'generic' as const },
    plannedProject: { strategy: 'text' as const, value: 'Audit EE Data', shadowHost: 'force-lookup', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickShowAll(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskPage.L.showAll));
  }

  async expectShowAllVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs, soft);
  }

  async clickProjectTasks10Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview));
  }

  async expectProjectTasks10PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), timeoutMs, soft);
  }

  async clickPlannedProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskPage.L.plannedProject));
  }

  async expectPlannedProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskPage.L.plannedProject), timeoutMs, soft);
  }


  async doubleClickShowAll(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskPage.L.showAll));
  }

  async longPressShowAll(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskPage.L.showAll));
  }

  async expectShowAllHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskPage.L.showAll), expected, timeoutMs);
  }

  async expectShowAllContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskPage.L.showAll), substring, timeoutMs);
  }

  async expectShowAllValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskPage.L.showAll), value, timeoutMs);
  }

  async expectShowAllEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskPage.L.showAll), count, timeoutMs);
  }

  async scrollShowAllIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskPage.L.showAll));
  }

  async doubleClickProjectTasks10Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview));
  }

  async longPressProjectTasks10Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview));
  }

  async expectProjectTasks10PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), expected, timeoutMs);
  }

  async expectProjectTasks10PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), substring, timeoutMs);
  }

  async expectProjectTasks10PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), value, timeoutMs);
  }

  async expectProjectTasks10PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), timeoutMs);
  }

  async expectProjectTasks10PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview), count, timeoutMs);
  }

  async scrollProjectTasks10PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks10Preview));
  }

  async doubleClickPlannedProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskPage.L.plannedProject));
  }

  async longPressPlannedProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskPage.L.plannedProject));
  }

  async expectPlannedProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskPage.L.plannedProject), timeoutMs);
  }

  async expectPlannedProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskPage.L.plannedProject), expected, timeoutMs);
  }

  async expectPlannedProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskPage.L.plannedProject), substring, timeoutMs);
  }

  async expectPlannedProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskPage.L.plannedProject), value, timeoutMs);
  }

  async expectPlannedProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskPage.L.plannedProject), timeoutMs);
  }

  async expectPlannedProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskPage.L.plannedProject), timeoutMs);
  }

  async expectPlannedProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskPage.L.plannedProject), timeoutMs);
  }

  async expectPlannedProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskPage.L.plannedProject), timeoutMs);
  }

  async expectPlannedProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskPage.L.plannedProject), timeoutMs);
  }

  async expectPlannedProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskPage.L.plannedProject), count, timeoutMs);
  }

  async scrollPlannedProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskPage.L.plannedProject));
  }

}
