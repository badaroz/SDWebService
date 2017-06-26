import { FrotaPage } from './app.po';

describe('frota App', () => {
  let page: FrotaPage;

  beforeEach(() => {
    page = new FrotaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
