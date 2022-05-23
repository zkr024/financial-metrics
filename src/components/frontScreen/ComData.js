import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';

import 'aos/dist/aos.css';

const CompData = (props) => {
  const {
    name, id, image, alt,
  } = props;

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <li
      key={id}
      className="companyName"
      data-aos="fade-up"
    >
      <Link
        to={`/dates/${id}`}
        className="companyContainer"
      >
        <div className="name">{name}</div>
        <div className="imgContainer">
          <img src={image} alt={alt} />
        </div>
      </Link>
    </li>
  );
};

CompData.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CompData;
