import { getInfo } from '../redux/mainSite/mainSite';
import company from '../redux/mainSite/company';

jest.mock('../redux/mainSite/company');

it('returns an object with the companies info', () => {
  const trial = {
    type: 'financial-metrics/mainSite/COMPANIES',
    payload: company,
  };
  expect(getInfo()).toEqual(trial);
});
