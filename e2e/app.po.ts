import { browser, element, by } from 'protractor';

export class DiseaseDiaryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('disease-diary-root h1')).getText();
  }
}
