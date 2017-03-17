import { FoodcarouselPage } from './app.po';

describe('foodcarousel App', () => {
  let page: FoodcarouselPage;

  beforeEach(() => {
    page = new FoodcarouselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
