import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Testes E2E Ingresso.com', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');

  let homePage: HomePage;

  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.ingresso_QA')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Altera o local de pesquisa dos ingressos', async () => {
    // clica no botão para abrir o dropdown com os selects de estado e cidade
    await homePage.openLocalizationDropdown();

    // seleciona o estado
    await homePage.setState('Santa Catarina');

    // seleciona a cidade
    await homePage.setCity('Criciúma');

    await homePage.submitLocalizationForm();
  });

  test('Abre a pagina de um filme', async () => {
    // fecha o modal de anúncio inicial

    await homePage.closeAd();

    // vai para a página de filmes
    await homePage.setMoviesPage();

    // seleciona o primeiro filme da lista
    await homePage.setFirstMovie();
  });
});
