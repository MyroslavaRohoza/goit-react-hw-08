import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  function setFilter(evt) {
    dispatch(changeFilter(evt.target.value));
  }
  return (
    <div className={css.searchContainer}>
      <input
        type="text"
        className={css.searchInput}
        value={filter}
        onChange={setFilter}
      />
    </div>
  );
};

export default SearchBox;
