import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
  }

  getAdButton(): Locator {
    return this.page.getByText('FECHAR PUBLICIDADE');
  }

  getMoviesButton(): Locator {
    return this.page.getByLabel('Navegar para a página de Filmes');
  }

  getMovie(): Locator {
    const firstItem = this.page.locator(
      '[data-testid="event-item"]:first-of-type'
    );

    return firstItem!;
  }

  getLocalizationButton(): Locator {
    return this.page.getByLabel(
      'Abrir tooltip para trocar a localização atual'
    );
  }

  getStateSelect() {
    return this.page.locator('select[name="state"]');
  }

  getCitySelect() {
    return this.page.locator('select[name="city"]');
  }

  getSubmitLocalizationButton() {
    return this.page.locator('button[type="submit"]');
  }
}
