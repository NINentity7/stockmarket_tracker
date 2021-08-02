import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import star from '../assets/star2.svg';
import graphUp from '../assets/graph-up.svg';
import graphDown from '../assets/graph-down.svg';
import { useDispatch } from 'react-redux';
import { addCompany } from '../store/actions/companies';

function DashboardGraph({ data, result, search }) {
  const dispatch = useDispatch();

  const [symbol, setSymbol] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [changePercent, setChangePercent] = useState('');
  const [latestPrice, setLatestPrice] = useState('');

  const insertDollar = (ticker) => {
    const dollarInsert = `$${ticker}`;
    return dollarInsert;
  };

  useEffect(() => {
    if (result && result.length > 0) {
      setSymbol(result[0].company.symbol);
      setCompanyName(result[0].company.companyName);
      setChangePercent((result[0].quote.changePercent * 100).toFixed(3));
      setLatestPrice(result[0].quote.latestPrice);
    }
  }, [result]);

  return (
    <>
      {search !== 'zyxi' ? (
        <>
          <div className="graph">
            <div className="graph-title">
              <div className="logos">
                <img
                  className="star"
                  src={star}
                  alt="star"
                  title="Adicionar aos favoritos"
                  onClick={() => {
                    dispatch(addCompany(result));
                  }}
                />
              </div>
              <div className="company">
                <h4>{symbol}</h4>
                <p>{companyName}</p>
              </div>
              <div className="percent latest-price">
                <h1>${latestPrice}</h1>
                {changePercent > 0 ? (
                  <>
                    <p
                      style={{ color: '#79C300', fontWeight: 'bolder' }}
                    >{`${changePercent}%`}</p>
                    <img
                      className="latest-graph"
                      src={graphUp}
                      alt="graph-up"
                    />
                  </>
                ) : (
                  <>
                    <p
                      style={{ color: '#D64B45', fontWeight: 'bolder' }}
                    >{`${changePercent}%`}</p>
                    <img
                      className="latest-graph"
                      src={graphDown}
                      alt="graph-down"
                    />
                  </>
                )}
              </div>
            </div>
            <LineChart width={740} height={380} data={data.companies}>
              <CartesianGrid vertical="true" stroke="#eee" />
              <Line
                type="monotone"
                stroke="#8884d8"
                name="Preço"
                dataKey="average"
                connectNulls={true}
                dot={false}
              />
              <Tooltip cursor={{ cursor: 'pointer' }} />
              <XAxis
                interval={29}
                type="category"
                dataKey="minute"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                type="number"
                domain={['auto', 'auto']}
                style={{ fontSize: '12px' }}
                tickFormatter={insertDollar}
              />
            </LineChart>
          </div>
        </>
      ) : (
        <>
          <div className="graph">
            <h1>SEM INFORMACÕES PARA EXIBIR</h1>
          </div>
        </>
      )}
    </>
  );
}

export default DashboardGraph;
