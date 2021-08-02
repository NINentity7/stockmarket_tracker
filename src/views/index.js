import React, { useState } from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import UserFavorites from './UserFavorites';
import FetchServices from '../api/FetchServices';

const API_KEY = 'pk_dcc2bfbd0e1744feb8ee8e5732c236ab';

function Setup() {
  const [search, setSearch] = useState('zyxi');

  const data = FetchServices(
    `https://cloud.iexapis.com/stable/stock/${search}/intraday-prices?token=${API_KEY}`
  );

  const listOfSymbols = FetchServices(
    `https://cloud.iexapis.com/beta/ref-data/symbols?token=${API_KEY}`
  );

  const myList = Object.values(listOfSymbols.companies);
  const symbolsArray = [];
  for (let i = 0; i < myList.length; i++) {
    symbolsArray.push(myList[i].symbol);
  }

  const companyData = FetchServices(
    `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${search}&types=company,logo,quote&token=${API_KEY}`
  );
  const company = companyData.companies;
  const result = Object.values(company);

  return (
    <>
      <Home />
      <Dashboard
        symbolsArray={symbolsArray}
        data={data}
        result={result}
        search={search}
        setSearch={setSearch}
      />
      <UserFavorites />
    </>
  );
}

export default Setup;
