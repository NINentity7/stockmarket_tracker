import React from 'react';
import star2 from '../assets/star2.svg';
import graphUp from '../assets/graph-up.svg';
import graphDown from '../assets/graph-down.svg';
import { addCompany } from '../store/actions/companies';
import { useDispatch } from 'react-redux';

function RecentCards({ recentArray }) {
  const dispatch = useDispatch();

  const filteredArray = recentArray.filter(
    (item, index) => recentArray.indexOf(item) === index
  );

  const reverseArray = filteredArray.reverse();

  return (
    <>
      <div>
        <div className="cards">
          {reverseArray.map((item) => {
            const { company, quote, logo } = item;
            const fixedPercent = (quote.changePercent * 100).toFixed(3);
            return (
              <div className="recent-cards" key={company.symbol}>
                <div className="logos">
                  <img
                    id="fav"
                    className="fav-star"
                    src={star2}
                    alt="star"
                    title="Adicionar aos favoritos"
                    onClick={() => {
                      dispatch(addCompany(item));
                    }}
                  />
                  <img
                    className="company-logo"
                    src={logo.url}
                    alt={company.companyName}
                  />
                </div>
                <div className="company">
                  <h4>{company.symbol}</h4>
                  <p>{company.companyName}</p>
                </div>
                <div className="percent">
                  {fixedPercent > 0 ? (
                    <>
                      <p
                        style={{ color: '#79C300', fontWeight: 'bolder' }}
                      >{`${fixedPercent}%`}</p>
                      <img src={graphUp} alt="graph-up" />
                    </>
                  ) : (
                    <>
                      <p
                        style={{ color: '#D64B45', fontWeight: 'bolder' }}
                      >{`${fixedPercent}%`}</p>
                      <img src={graphDown} alt="graph-down" />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RecentCards;
