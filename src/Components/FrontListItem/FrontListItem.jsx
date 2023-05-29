import { forwardRef, useContext } from 'react';
import './FrontListItem.scss';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';


const FrontListItem = forwardRef((props, ref) => {

  const {darkModeOn} = useContext(ThemeContext);

  return (
    <Link to={`/detail/${props.alpha3Code}`} className={`front-list-item ${darkModeOn?'dark':''}`} ref={ref}>
      <div className="front-list-item__img">
        <img src={props.image} alt="avatar"/>
      </div>
      <div className="front-list-item__description">
        <div className="front-list-item__description__title">
            <h2>{props.country}</h2>
        </div>
        <div className="front-list-item__description__info">
            <p>Population: <span>{props.population}</span></p>
            <p>Region: <span>{props.region}</span></p>
            <p>Capital: <span>{props.capital}</span></p>
        </div>
      </div>
    </Link>
  )
})

export default FrontListItem;