import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { deleteCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  function handleFavoriteClick() {
    dispatch(toggleCardFavorite(id));
  }

  function handleDeleteClick() {
    dispatch(deleteCard(id));
  }

  return (
    <li className={styles.card}>
      {title}
      <div>
        <button
          className={clsx(
            'fa fa-star-o',
            styles.favoriteBtn,
            isFavorite && styles.active
          )}
          onClick={handleFavoriteClick}
        ></button>
        <button
          className={clsx(
            'fa-solid fa-trash',
            styles.favoriteBtn,
            isFavorite && styles.active
          )}
          onClick={handleDeleteClick}
        ></button>
      </div>
    </li>
  );
};

export default Card;
