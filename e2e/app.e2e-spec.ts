import { DiseaseDiaryPage } from './app.po';

describe('-disease-diary App', function() {
  let page: DiseaseDiaryPage;

  beforeEach(() => {
    page = new DiseaseDiaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('disease-diary works!');
  });
});
