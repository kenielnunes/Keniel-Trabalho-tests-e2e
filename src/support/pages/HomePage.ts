import { Page } from '@playwright/test';
import BasePage from './BasePage';
import HomeElements from '../elements/HomeElements';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.homeElements = new HomeElements(page);
  }

  async closeAd() {
    await this.homeElements.getAdButton().click();
  }

  async setMoviesPage() {
    await this.homeElements.getMoviesButton().click();
  }

  async setFirstMovie() {
    await this.homeElements.getMovie().click();
  }

  async openLocalizationDropdown() {
    await this.homeElements.getLocalizationButton().click();
  }

  async setState(state: string) {
    await this.homeElements.getStateSelect().selectOption({ label: state });
  }

  async setCity(city: string) {
    await this.homeElements.getCitySelect().selectOption({ label: city });
  }

  async submitLocalizationForm() {
    await this.homeElements.getSubmitLocalizationButton().click();
  }
}
