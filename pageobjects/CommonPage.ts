import type { Locator, Page } from "@playwright/test";
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

export class CommonPage {
  private static readonly L = {
    scrollToRelatedListsSection: { strategy: 'css' as const, value: 'div.slds-card__header-title:has-text(\'Related Lists\')', actionKind: 'generic' as const },
    clickShowAllInRelatedLists: { strategy: 'css' as const, value: 'a[title=\'Show All\']', actionKind: 'button' as const },
    relatedListsPageLoaded: { strategy: 'css' as const, value: 'h1:has-text(\'Related Lists\')', actionKind: 'generic' as const },
    openProjectTasksRelatedList: { strategy: 'css' as const, value: 'a[title=\'Project Tasks\']', actionKind: 'button' as const },
    projectTasksListRendered: { strategy: 'css' as const, value: 'table[role=\'grid\']', actionKind: 'generic' as const },
    projectTaskDetailsPageHeaderVisible: { strategy: 'css' as const, value: 'records-lwc-detail-panel h1[title=\'Project Task\']', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}


  async clickScrollToRelatedListsSection(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection));
  }

  async doubleClickScrollToRelatedListsSection(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection));
  }

  async longPressScrollToRelatedListsSection(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection));
  }

  async expectScrollToRelatedListsSectionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), timeoutMs);
  }

  async expectScrollToRelatedListsSectionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), timeoutMs);
  }

  async expectScrollToRelatedListsSectionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), expected, timeoutMs);
  }

  async expectScrollToRelatedListsSectionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), substring, timeoutMs);
  }

  async expectScrollToRelatedListsSectionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), value, timeoutMs);
  }

  async expectScrollToRelatedListsSectionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), timeoutMs);
  }

  async expectScrollToRelatedListsSectionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), timeoutMs);
  }

  async expectScrollToRelatedListsSectionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), timeoutMs);
  }

  async expectScrollToRelatedListsSectionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), timeoutMs);
  }

  async expectScrollToRelatedListsSectionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), timeoutMs);
  }

  async expectScrollToRelatedListsSectionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection), count, timeoutMs);
  }

  async scrollScrollToRelatedListsSectionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.scrollToRelatedListsSection));
  }


  async clickClickShowAllInRelatedLists(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists));
  }

  async doubleClickClickShowAllInRelatedLists(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists));
  }

  async longPressClickShowAllInRelatedLists(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists));
  }

  async expectClickShowAllInRelatedListsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), timeoutMs);
  }

  async expectClickShowAllInRelatedListsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), timeoutMs);
  }

  async expectClickShowAllInRelatedListsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), expected, timeoutMs);
  }

  async expectClickShowAllInRelatedListsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), substring, timeoutMs);
  }

  async expectClickShowAllInRelatedListsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), value, timeoutMs);
  }

  async expectClickShowAllInRelatedListsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), timeoutMs);
  }

  async expectClickShowAllInRelatedListsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), timeoutMs);
  }

  async expectClickShowAllInRelatedListsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), timeoutMs);
  }

  async expectClickShowAllInRelatedListsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), timeoutMs);
  }

  async expectClickShowAllInRelatedListsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), timeoutMs);
  }

  async expectClickShowAllInRelatedListsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists), count, timeoutMs);
  }

  async scrollClickShowAllInRelatedListsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.clickShowAllInRelatedLists));
  }


  async clickRelatedListsPageLoaded(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.relatedListsPageLoaded));
  }

  async doubleClickRelatedListsPageLoaded(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.relatedListsPageLoaded));
  }

  async longPressRelatedListsPageLoaded(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.relatedListsPageLoaded));
  }

  async expectRelatedListsPageLoadedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), timeoutMs);
  }

  async expectRelatedListsPageLoadedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), timeoutMs);
  }

  async expectRelatedListsPageLoadedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), expected, timeoutMs);
  }

  async expectRelatedListsPageLoadedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), substring, timeoutMs);
  }

  async expectRelatedListsPageLoadedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), value, timeoutMs);
  }

  async expectRelatedListsPageLoadedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), timeoutMs);
  }

  async expectRelatedListsPageLoadedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), timeoutMs);
  }

  async expectRelatedListsPageLoadedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), timeoutMs);
  }

  async expectRelatedListsPageLoadedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), timeoutMs);
  }

  async expectRelatedListsPageLoadedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), timeoutMs);
  }

  async expectRelatedListsPageLoadedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.relatedListsPageLoaded), count, timeoutMs);
  }

  async scrollRelatedListsPageLoadedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.relatedListsPageLoaded));
  }


  async clickOpenProjectTasksRelatedList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList));
  }

  async doubleClickOpenProjectTasksRelatedList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList));
  }

  async longPressOpenProjectTasksRelatedList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList));
  }

  async expectOpenProjectTasksRelatedListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), timeoutMs);
  }

  async expectOpenProjectTasksRelatedListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), timeoutMs);
  }

  async expectOpenProjectTasksRelatedListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), expected, timeoutMs);
  }

  async expectOpenProjectTasksRelatedListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), substring, timeoutMs);
  }

  async expectOpenProjectTasksRelatedListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), value, timeoutMs);
  }

  async expectOpenProjectTasksRelatedListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), timeoutMs);
  }

  async expectOpenProjectTasksRelatedListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), timeoutMs);
  }

  async expectOpenProjectTasksRelatedListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), timeoutMs);
  }

  async expectOpenProjectTasksRelatedListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), timeoutMs);
  }

  async expectOpenProjectTasksRelatedListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), timeoutMs);
  }

  async expectOpenProjectTasksRelatedListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList), count, timeoutMs);
  }

  async scrollOpenProjectTasksRelatedListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.openProjectTasksRelatedList));
  }


  async clickProjectTasksListRendered(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.projectTasksListRendered));
  }

  async doubleClickProjectTasksListRendered(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.projectTasksListRendered));
  }

  async longPressProjectTasksListRendered(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.projectTasksListRendered));
  }

  async expectProjectTasksListRenderedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.projectTasksListRendered), timeoutMs);
  }

  async expectProjectTasksListRenderedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.projectTasksListRendered), timeoutMs);
  }

  async expectProjectTasksListRenderedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.projectTasksListRendered), expected, timeoutMs);
  }

  async expectProjectTasksListRenderedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.projectTasksListRendered), substring, timeoutMs);
  }

  async expectProjectTasksListRenderedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.projectTasksListRendered), value, timeoutMs);
  }

  async expectProjectTasksListRenderedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.projectTasksListRendered), timeoutMs);
  }

  async expectProjectTasksListRenderedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.projectTasksListRendered), timeoutMs);
  }

  async expectProjectTasksListRenderedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.projectTasksListRendered), timeoutMs);
  }

  async expectProjectTasksListRenderedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.projectTasksListRendered), timeoutMs);
  }

  async expectProjectTasksListRenderedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.projectTasksListRendered), timeoutMs);
  }

  async expectProjectTasksListRenderedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.projectTasksListRendered), count, timeoutMs);
  }

  async scrollProjectTasksListRenderedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.projectTasksListRendered));
  }


  async clickProjectTaskDetailsPageHeaderVisible(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible));
  }

  async doubleClickProjectTaskDetailsPageHeaderVisible(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible));
  }

  async longPressProjectTaskDetailsPageHeaderVisible(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible));
  }

  async expectProjectTaskDetailsPageHeaderVisibleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), expected, timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), substring, timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), value, timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), timeoutMs);
  }

  async expectProjectTaskDetailsPageHeaderVisibleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible), count, timeoutMs);
  }

  async scrollProjectTaskDetailsPageHeaderVisibleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.projectTaskDetailsPageHeaderVisible));
  }

}
