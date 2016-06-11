export class HelloWorldPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hello-world-app h1')).getText();
  }
}
