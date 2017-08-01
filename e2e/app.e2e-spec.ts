import { AppTiendaSEOPage } from './app.po';

describe('app-tienda-seo App', () => {
  let page: AppTiendaSEOPage;

  beforeEach(() => {
    page = new AppTiendaSEOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
