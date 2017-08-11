import { YccmsappPage } from './app.po';

describe('yccmsapp App', () => {
  let page: YccmsappPage;

  beforeEach(() => {
    page = new YccmsappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
