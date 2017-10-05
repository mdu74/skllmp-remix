import { SkllmpRemixPage } from './app.po';

describe('skllmp-remix App', () => {
  let page: SkllmpRemixPage;

  beforeEach(() => {
    page = new SkllmpRemixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
