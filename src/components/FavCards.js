import React from 'react';
import graphUp from '../assets/graph-up.svg';
import graphDown from '../assets/graph-down.svg';
import trash from '../assets/Trash.svg';
import { useSelector } from 'react-redux';
import { removeCompany } from '../store/actions/companies';
import { useDispatch } from 'react-redux';

function FavCards() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.companies);
  const filteredArray = favorites.filter(
    (item, index) => favorites.indexOf(item) === index
  );

  const reverseArray = filteredArray.reverse();

  return (
    <div>
      <div className="card">
        {reverseArray.map((item) => {
          const { company, quote, logo } = item;
          const fixedPercent = (quote.changePercent * 100).toFixed(3);
          return (
            <div className="fav-cards" key={company.symbol}>
              <div className="logos">
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
              <img
                className="trash"
                src={trash}
                alt="trash"
                title="Remover dos favoritos"
                onClick={() => dispatch(removeCompany(item))}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavCards;
