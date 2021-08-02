import React, { useState } from 'react';
import dashboardIcon from '../assets/icon-dashboard.svg';
import searchIcon from '../assets/search.svg';
import stats from '../assets/stats.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import RecentCards from '../components/RecentCards';
import DashboardGraph from '../components/DashboardGraph';

function Dashboard({ search, setSearch, data, result, symbolsArray }) {
  const [recentArray, setRecentArray] = useState([]);

  const handleChange = (e) => {
    if (symbolsArray.includes(e.target.value.toUpperCase())) {
      setSearch(e.target.value);
    } else {
      setSearch('zyxi');
    }
  };

  const handleClick = () => {
    if (search !== 'zyxi') setRecentArray(recentArray.concat(result));
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-top">
          <img
            className="dashboard-icon"
            src={dashboardIcon}
            alt="dashboard-icon"
          />
          <h1>Dashboard</h1>
        </div>
        <form className="search-box">
          <input
            placeholder="Buscar empresa"
            type="text"
            onChange={handleChange}
          />
          <button className="search-btn" type="button" onClick={handleClick}>
            <img src={searchIcon} alt="search-icon" />
          </button>
        </form>
        <div className="dashboard-graph">
          <DashboardGraph data={data} result={result} search={search} />
        </div>
        <div className="dashboard-recent">
          <div className="recent-left">
            <img src={stats} alt="stats" />
            <h3>Empresas recentes</h3>
          </div>
          <div className="recent-right">
            <img src={left} alt="left" />
            <img src={right} alt="right" />
          </div>
        </div>
        <RecentCards result={result} recentArray={recentArray} />
      </div>
    </>
  );
}

export default Dashboard;
