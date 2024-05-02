import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { PiMagnifyingGlassFill } from "react-icons/pi";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  function setFilter(evt) {
    dispatch(changeFilter(evt.target.value));
  }
  return (
    <div className={css.searchContainer}>
      <Input
        htmlType="text"
        value={filter}
        onChange={setFilter}
        className={css.searchInput}
        prefix={<PiMagnifyingGlassFill 
        className={css.searchIcon}
        size={24}
        />}
        placeholder="Enter name or number..."
      />
    </div>
  );
};

export default SearchBox;
