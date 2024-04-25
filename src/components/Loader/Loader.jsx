import { ThreeCircles } from "react-loader-spinner";
import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.loader}> 
      <ThreeCircles
        visible={true}
        height="60"
        width="60"
        color="#8374DA"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
