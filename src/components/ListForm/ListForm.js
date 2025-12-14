import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = (props) => {
  const dispatch = useDispatch();
  const listId = props.listId;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description, listId }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <div className={styles.listWrapper}>
        <span className={styles.listFieldName}>Title:</span>
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.listWrapper}>
        <span className={styles.listFieldName}>Description:</span>
        <TextInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
