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

export class HomePage {
  private static readonly L = {
    globalsearch: { strategy: 'role' as const, value: 'Search', role: 'button', actionKind: 'button' as const },
    search: { strategy: 'placeholder' as const, value: 'Search...', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    selectedproject: { strategy: 'text' as const, value: 'Perry\'s', shadowHost: 'lightning-formatted-rich-text', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickGlobalsearch(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.globalsearch));
  }

  async expectGlobalsearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.globalsearch), timeoutMs, soft);
  }

  async fillSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.search), value);
  }

  async clearSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async getSearchValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.search), timeoutMs, soft);
  }

  async clickSelectedproject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.selectedproject));
  }

  async expectSelectedprojectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.selectedproject), timeoutMs, soft);
  }


  async doubleClickGlobalsearch(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.globalsearch));
  }

  async longPressGlobalsearch(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.globalsearch));
  }

  async expectGlobalsearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.globalsearch), timeoutMs);
  }

  async expectGlobalsearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.globalsearch), expected, timeoutMs);
  }

  async expectGlobalsearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.globalsearch), substring, timeoutMs);
  }

  async expectGlobalsearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.globalsearch), value, timeoutMs);
  }

  async expectGlobalsearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.globalsearch), timeoutMs);
  }

  async expectGlobalsearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.globalsearch), timeoutMs);
  }

  async expectGlobalsearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.globalsearch), timeoutMs);
  }

  async expectGlobalsearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.globalsearch), timeoutMs);
  }

  async expectGlobalsearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.globalsearch), timeoutMs);
  }

  async expectGlobalsearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.globalsearch), count, timeoutMs);
  }

  async scrollGlobalsearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.globalsearch));
  }

  async typeTextSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.search), value);
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.search), substring, timeoutMs);
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.search), value, timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.search), count, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async doubleClickSelectedproject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.selectedproject));
  }

  async longPressSelectedproject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.selectedproject));
  }

  async expectSelectedprojectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.selectedproject), timeoutMs);
  }

  async expectSelectedprojectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.selectedproject), expected, timeoutMs);
  }

  async expectSelectedprojectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.selectedproject), substring, timeoutMs);
  }

  async expectSelectedprojectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.selectedproject), value, timeoutMs);
  }

  async expectSelectedprojectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.selectedproject), timeoutMs);
  }

  async expectSelectedprojectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.selectedproject), timeoutMs);
  }

  async expectSelectedprojectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.selectedproject), timeoutMs);
  }

  async expectSelectedprojectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.selectedproject), timeoutMs);
  }

  async expectSelectedprojectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.selectedproject), timeoutMs);
  }

  async expectSelectedprojectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.selectedproject), count, timeoutMs);
  }

  async scrollSelectedprojectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.selectedproject));
  }

}
