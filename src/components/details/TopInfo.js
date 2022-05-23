import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import './style/topInfo.css';

const TopInfo = (props) => {
  const { id } = props;

  const dataCompany = useSelector((state) => state.company);
  const companyInfo = dataCompany.filter((company) => company.symbol === id);
  const data = companyInfo[0];
  const symbol = 'Company Symbol: ';

  return (
    <div className="topContainer">
      <h2 className="companyTitle">{data.name}</h2>
      <div className="companyImageContainer">
        <img
          src={data.image}
          alt={data.alt}
        />
      </div>
      <div className="companySymbol">
        {symbol}
        {data.symbol}
      </div>
    </div>
  );
};

TopInfo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TopInfo;
