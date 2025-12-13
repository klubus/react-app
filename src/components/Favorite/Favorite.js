import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <div className={styles.favorite}>
      <PageTitle title={'FAVORITE'} />
      <div className={styles.favoriteWrapper}>
        <article className={styles.favoriteSection}>
          <ul className={styles.cards}>
            {favoriteCards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                isFavorite={card.isFavorite}
              />
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Favorite;
