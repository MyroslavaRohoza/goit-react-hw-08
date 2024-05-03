import { ThreeCircles } from "react-loader-spinner";
import css from './Loader.module.css';
const CotactsLoader = () => {
  return (
    <div className={css.loader}> 
      <ThreeCircles
        visible={true}
        height="60"
        width="60"
        color="#3f36ff"
        ariaLabel="three-circles-loading"
      />
    </div>
  );
};

export default CotactsLoader;
