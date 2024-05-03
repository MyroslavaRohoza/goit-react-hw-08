import { ColorRing } from "react-loader-spinner";
import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.loader}><ColorRing
  visible={true}
  height="50"
  width="50"
  ariaLabel="color-ring-loading"
  
  wrapperClass="color-ring-wrapper"
  colors={['#8d03ff', '#8d03ff', '#8d03ff', '#8d03ff', '#8d03ff']}
  /></div>
    
  );
};

export default Loader;
