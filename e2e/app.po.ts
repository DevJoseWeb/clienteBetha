import { browser, element, by } from 'protractor';
export class ClienteBethaPage {
  navigateTo() {
    return browser.get('/');
  }
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
