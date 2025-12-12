import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(title));
  };

  return (
    <form className={styles.searchForm}>
      <TextInput
        placeholder="Search..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleClick}>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
