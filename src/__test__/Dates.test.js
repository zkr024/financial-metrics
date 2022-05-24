import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Dates from '../components/details/Dates';

const Container = () => {
  <BrowserRouter>
    <Dates />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
