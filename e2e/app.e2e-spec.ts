import { SoApiDemoPage } from './app.po';

describe('so-api-demo App', function() {
  let page: SoApiDemoPage;

  beforeEach(() => {
    page = new SoApiDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
