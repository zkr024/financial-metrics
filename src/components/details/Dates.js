import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { loadInfo } from '../../redux/quarters/quartes';
import { getDate } from '../../redux/details/details';
import TopInfo from './TopInfo';

const Dates = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const dataFinancial = useSelector((state) => state.financial);

  useEffect(() => {
    if (dataFinancial.length === 0) {
      dispatch(loadInfo(id));
    } else {
      const idTag = dataFinancial.data[0].symbol;
      if (idTag !== id) {
        dispatch(loadInfo(id));
      }
    }
  }, []);

  const dateSelected = (e) => {
    const data = e.target.innerHTML;
    dispatch(getDate(data));
  };

  return (
    <>
      <TopInfo id={id} />
      <h4 className="accessInfo">Tap a date to check information from that year</h4>
      { dataFinancial.length === 0
        ? (
          <h2>Loading...</h2>
        )
        : (
          <ul className="lastFive">
            {dataFinancial.data.map((value) => (
              <li
                key={uuidv4()}
                className="dates"
              >
                <Link
                  onClick={dateSelected}
                  className="dateLink"
                  to={`/details/${id}`}
                >
                  {value.date}
                </Link>
              </li>
            ))}
          </ul>
        )}
    </>
  );
};

export default Dates;
