import { EditUserEastsPage } from './app.po';

describe('edit-user-easts App', () => {
  let page: EditUserEastsPage;

  beforeEach(() => {
    page = new EditUserEastsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
