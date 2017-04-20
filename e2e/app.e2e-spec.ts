import { ClienteBethaPage } from './app.po';

describe('cliente-betha App', () => {
  let page: ClienteBethaPage;

  beforeEach(() => {
    page = new ClienteBethaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
