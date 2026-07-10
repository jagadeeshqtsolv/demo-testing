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

export class TaskDetailedPage {
  private static readonly L = {
    start: { strategy: 'role' as const, value: 'Start', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    edit: { strategy: 'role' as const, value: 'Edit', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    delete: { strategy: 'role' as const, value: 'Delete', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    clone: { strategy: 'role' as const, value: 'Clone', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    complete: { strategy: 'role' as const, value: 'Complete', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    status: { strategy: 'text' as const, value: 'Planned', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickStart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TaskDetailedPage.L.start));
  }

  async doubleClickStart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TaskDetailedPage.L.start));
  }

  async expectStartVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TaskDetailedPage.L.start), timeoutMs, soft);
  }

  async clickEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TaskDetailedPage.L.edit));
  }

  async doubleClickEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TaskDetailedPage.L.edit));
  }

  async expectEditVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TaskDetailedPage.L.edit), timeoutMs, soft);
  }

  async clickDelete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TaskDetailedPage.L.delete));
  }

  async doubleClickDelete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TaskDetailedPage.L.delete));
  }

  async expectDeleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TaskDetailedPage.L.delete), timeoutMs, soft);
  }

  async clickClone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TaskDetailedPage.L.clone));
  }

  async doubleClickClone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TaskDetailedPage.L.clone));
  }

  async expectCloneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TaskDetailedPage.L.clone), timeoutMs, soft);
  }

  async clickComplete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TaskDetailedPage.L.complete));
  }

  async doubleClickComplete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TaskDetailedPage.L.complete));
  }

  async expectCompleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TaskDetailedPage.L.complete), timeoutMs, soft);
  }

  async getInnerTextStatus(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, TaskDetailedPage.L.status));
  }

  async expectStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TaskDetailedPage.L.status), timeoutMs, soft);
  }


  async longPressStart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TaskDetailedPage.L.start));
  }

  async expectStartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TaskDetailedPage.L.start), timeoutMs);
  }

  async expectStartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TaskDetailedPage.L.start), expected, timeoutMs);
  }

  async expectStartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TaskDetailedPage.L.start), substring, timeoutMs);
  }

  async expectStartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TaskDetailedPage.L.start), value, timeoutMs);
  }

  async expectStartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TaskDetailedPage.L.start), timeoutMs);
  }

  async expectStartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TaskDetailedPage.L.start), timeoutMs);
  }

  async expectStartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TaskDetailedPage.L.start), timeoutMs);
  }

  async expectStartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TaskDetailedPage.L.start), timeoutMs);
  }

  async expectStartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TaskDetailedPage.L.start), timeoutMs);
  }

  async expectStartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TaskDetailedPage.L.start), count, timeoutMs);
  }

  async scrollStartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TaskDetailedPage.L.start));
  }

  async longPressEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TaskDetailedPage.L.edit));
  }

  async expectEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TaskDetailedPage.L.edit), timeoutMs);
  }

  async expectEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TaskDetailedPage.L.edit), expected, timeoutMs);
  }

  async expectEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TaskDetailedPage.L.edit), substring, timeoutMs);
  }

  async expectEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TaskDetailedPage.L.edit), value, timeoutMs);
  }

  async expectEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TaskDetailedPage.L.edit), timeoutMs);
  }

  async expectEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TaskDetailedPage.L.edit), timeoutMs);
  }

  async expectEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TaskDetailedPage.L.edit), timeoutMs);
  }

  async expectEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TaskDetailedPage.L.edit), timeoutMs);
  }

  async expectEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TaskDetailedPage.L.edit), timeoutMs);
  }

  async expectEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TaskDetailedPage.L.edit), count, timeoutMs);
  }

  async scrollEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TaskDetailedPage.L.edit));
  }

  async longPressDelete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TaskDetailedPage.L.delete));
  }

  async expectDeleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TaskDetailedPage.L.delete), timeoutMs);
  }

  async expectDeleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TaskDetailedPage.L.delete), expected, timeoutMs);
  }

  async expectDeleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TaskDetailedPage.L.delete), substring, timeoutMs);
  }

  async expectDeleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TaskDetailedPage.L.delete), value, timeoutMs);
  }

  async expectDeleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TaskDetailedPage.L.delete), timeoutMs);
  }

  async expectDeleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TaskDetailedPage.L.delete), timeoutMs);
  }

  async expectDeleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TaskDetailedPage.L.delete), timeoutMs);
  }

  async expectDeleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TaskDetailedPage.L.delete), timeoutMs);
  }

  async expectDeleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TaskDetailedPage.L.delete), timeoutMs);
  }

  async expectDeleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TaskDetailedPage.L.delete), count, timeoutMs);
  }

  async scrollDeleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TaskDetailedPage.L.delete));
  }

  async longPressClone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TaskDetailedPage.L.clone));
  }

  async expectCloneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TaskDetailedPage.L.clone), timeoutMs);
  }

  async expectCloneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TaskDetailedPage.L.clone), expected, timeoutMs);
  }

  async expectCloneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TaskDetailedPage.L.clone), substring, timeoutMs);
  }

  async expectCloneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TaskDetailedPage.L.clone), value, timeoutMs);
  }

  async expectCloneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TaskDetailedPage.L.clone), timeoutMs);
  }

  async expectCloneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TaskDetailedPage.L.clone), timeoutMs);
  }

  async expectCloneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TaskDetailedPage.L.clone), timeoutMs);
  }

  async expectCloneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TaskDetailedPage.L.clone), timeoutMs);
  }

  async expectCloneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TaskDetailedPage.L.clone), timeoutMs);
  }

  async expectCloneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TaskDetailedPage.L.clone), count, timeoutMs);
  }

  async scrollCloneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TaskDetailedPage.L.clone));
  }

  async longPressComplete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TaskDetailedPage.L.complete));
  }

  async expectCompleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TaskDetailedPage.L.complete), timeoutMs);
  }

  async expectCompleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TaskDetailedPage.L.complete), expected, timeoutMs);
  }

  async expectCompleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TaskDetailedPage.L.complete), substring, timeoutMs);
  }

  async expectCompleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TaskDetailedPage.L.complete), value, timeoutMs);
  }

  async expectCompleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TaskDetailedPage.L.complete), timeoutMs);
  }

  async expectCompleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TaskDetailedPage.L.complete), timeoutMs);
  }

  async expectCompleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TaskDetailedPage.L.complete), timeoutMs);
  }

  async expectCompleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TaskDetailedPage.L.complete), timeoutMs);
  }

  async expectCompleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TaskDetailedPage.L.complete), timeoutMs);
  }

  async expectCompleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TaskDetailedPage.L.complete), count, timeoutMs);
  }

  async scrollCompleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TaskDetailedPage.L.complete));
  }

  async clickStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TaskDetailedPage.L.status));
  }

  async doubleClickStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TaskDetailedPage.L.status));
  }

  async longPressStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TaskDetailedPage.L.status));
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, TaskDetailedPage.L.status), timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, TaskDetailedPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, TaskDetailedPage.L.status), substring, timeoutMs);
  }

  async expectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TaskDetailedPage.L.status), value, timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TaskDetailedPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TaskDetailedPage.L.status), timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TaskDetailedPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TaskDetailedPage.L.status), timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TaskDetailedPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TaskDetailedPage.L.status), count, timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TaskDetailedPage.L.status));
  }

}
