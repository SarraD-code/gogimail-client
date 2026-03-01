import "./LinkButton.scss";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import rigthArrow from "../../assets/icons/Arrow right.png";
import leftArrow from "../../assets/icons/Arrow left.png";

const LinkButton = ({ type, id }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleGoBack = () => {
        if (window.history.length > 1 || location.key !== 'default') {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    };

    return (
        type === "review" ?
            <Link to={`/review/${id}`} className="link-button" >
                SEND TO REVIEW <img src={rigthArrow} alt="Right Arrow" />
            </Link>
            : type === "back" ? 
            <button className="link-button link-button__back-button" type="button" onClick={handleGoBack} >
                BACK TO PROMPT <img src={leftArrow} alt="Left Arrow" />
            </button>
            : ""
    );
}
export default LinkButton;