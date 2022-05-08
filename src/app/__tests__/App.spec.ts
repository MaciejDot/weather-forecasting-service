import stubNavigator from '../__stubs__/navigatorStub';
import renderApp from './renderApp';

describe('<App/>', () => {
  stubNavigator();
  it('menu has app title with href', async () => {
    renderApp().getMenu().expectHeading({ name: 'Weather forecast', href: '#/' });
  });
});
