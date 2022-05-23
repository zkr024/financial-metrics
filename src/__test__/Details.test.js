import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Details from '../components/details/Details';

const Container = () => {
  <BrowserRouter>
    <Details />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
