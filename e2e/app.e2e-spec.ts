import { Angular2TohPage } from './app.po';

describe('angular-2-toh App', function() {
  let page: Angular2TohPage;

  beforeEach(() => {
    page = new Angular2TohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
