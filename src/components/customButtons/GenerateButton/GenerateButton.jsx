import './GenerateButton.scss';
import arrow from "../../../assets/icons/Arrow right.png";

const GenerateButton = ({ onClick }) => {
  return (
    <button className="generate-btn" onClick={onClick} type="submit">
      GENERATE VARIANTS <img src={arrow} alt="Right Arrow" />
    </button>
  );
};

export default GenerateButton;