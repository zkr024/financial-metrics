import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Aos from 'aos';
import { BiChevronLeft } from 'react-icons/bi';
import TopInfo from './TopInfo';

const Details = () => {
  const { id } = useParams();

  const dataFinancial = useSelector((state) => state.financial.data);
  const dataDate = useSelector((state) => state.date);

  const infoSelected = dataFinancial.filter((value) => value.date === dataDate);
  const arrayDate = infoSelected[0];

  const allData = Object.entries(arrayDate).map((entry) => {
    const [key, value] = entry;
    return { key, value };
  });

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="mainContainer">
      <Link to={`/dates/${id}`}>
        <BiChevronLeft className="backBtn" />
      </Link>
      <TopInfo id={id} />
      <div className="detailsContainer">
        <ul className="dataList">
          {allData.map((data) => (
            <li
              key={uuidv4()}
              className="financialDetails"
              data-aos="fade-right"
            >
              <div className="key">
                {data.key}
              </div>
              <div className="value">
                {data.value}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
