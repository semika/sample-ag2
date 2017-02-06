import { SampleAg2Page } from './app.po';

describe('sample-ag2 App', function() {
  let page: SampleAg2Page;

  beforeEach(() => {
    page = new SampleAg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
