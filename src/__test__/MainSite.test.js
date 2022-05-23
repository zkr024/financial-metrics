import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import MainSite from '../components/frontScreen/MainSite';

const Container = () => {
  <BrowserRouter>
    <MainSite />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
