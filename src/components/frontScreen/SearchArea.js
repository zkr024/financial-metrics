import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import './style/searchArea.css';

const SearchArea = (props) => {
  const {
    inputData, getData, searchComp, clearInput,
  } = props;
  return (
    <div className="top">
      <h1 className="title">
        30 of the most largest Companies according to Forbes
      </h1>
      <div className="search">
        <input
          type="text"
          className="searchArea"
          placeholder="Search..."
          value={inputData}
          onChange={getData}
        />
        <div className="searchIcon">
          {searchComp === ''
            ? <FaSearch />
            : (
              <AiOutlineClose
                id="clearBtn"
                onClick={clearInput}
              />
            )}
        </div>
      </div>
    </div>
  );
};

SearchArea.propTypes = {
  inputData: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  searchComp: PropTypes.string.isRequired,
  clearInput: PropTypes.func.isRequired,
};

export default SearchArea;
