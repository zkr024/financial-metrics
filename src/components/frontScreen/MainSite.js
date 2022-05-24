import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getInfo } from '../../redux/mainSite/mainSite';
import SearchArea from './SearchArea';
import CompData from './ComData';

import './style/mainSite.css';

const companyList = (data) => {
  const comps = (
    <CompData
      name={data.name}
      id={data.symbol}
      key={data.symbol}
      image={data.image}
      alt={data.alt}
    />
  );
  return comps;
};

const MainSite = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.company);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getInfo());
    }
  }, []);

  const [searchComp, setSearchComp] = useState('');
  const [inputData, setInputData] = useState('');

  const getData = (e) => {
    const data = e.target.value;
    setSearchComp(data);
    setInputData(data);
  };

  const clearInput = () => {
    setSearchComp('');
    setInputData('');
  };

  return (
    <div className="container">
      <SearchArea
        inputData={inputData}
        getData={getData}
        searchComp={searchComp}
        clearInput={clearInput}
      />
      <h3 className="accessInfo">Tap a card to check the financial statements</h3>
      <ul className="companyList">
        {data.filter((value) => {
          let result = '';
          if (searchComp === '') {
            result = value;
          } if (value.name.toLowerCase().includes(searchComp.toLowerCase())) {
            result = value;
          }
          return result;
        }).map((info) => companyList(info))}
      </ul>
    </div>
  );
};

export default MainSite;
