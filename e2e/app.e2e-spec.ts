import { SimpleShopAngularAppPage } from './app.po';

describe('simple-shop-angular-app App', function() {
  let page: SimpleShopAngularAppPage;

  beforeEach(() => {
    page = new SimpleShopAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
