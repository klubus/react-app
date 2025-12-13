import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store.js';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(toggleCardFavorite(id));
  }

  return (
    <li className={styles.card}>
      {title}
      <button
        className={clsx(
          'fa fa-star-o',
          styles.favoriteBtn,
          isFavorite && styles.active
        )}
        onClick={handleClick}
      ></button>
    </li>
  );
};

export default Card;
