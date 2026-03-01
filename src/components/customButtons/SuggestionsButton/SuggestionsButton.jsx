import { useState } from 'react';
import './SuggestionsButton.scss';
import chevron from "../../../assets/icons/white-chevron-down.png";

const SuggestionsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button 
        className={`suggestions-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>SUGGESTIONS & FLAGS</span>
        <img src={chevron} alt="Down Chevron" />
      </button>
      
      {/* {isOpen && (
        <div className="dropdown-content">
          <p>Display your suggestions and flags list here...</p>
        </div>
      )} */}
    </div>
  );
};

export default SuggestionsButton;