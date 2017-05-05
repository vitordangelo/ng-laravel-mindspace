import { NgLaravelMindspacePage } from './app.po';

describe('ng-laravel-mindspace App', () => {
  let page: NgLaravelMindspacePage;

  beforeEach(() => {
    page = new NgLaravelMindspacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
