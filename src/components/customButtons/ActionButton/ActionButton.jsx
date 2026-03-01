import "./ActionButton.scss";

const ActionButton = ({ label, icon, variant, onClick }) => {
  return (
    <button 
      className={`action-btn ${variant}`} 
      onClick={onClick}
      type="button"
    >
      <span>{label}</span> {icon && <img src={icon} alt="Action Button Icon" />}
    </button>
  );
};

export default ActionButton;