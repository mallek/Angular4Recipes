import { AngularRecipesPage } from './app.po';

describe('angular-recipes App', () => {
  let page: AngularRecipesPage;

  beforeEach(() => {
    page = new AngularRecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
