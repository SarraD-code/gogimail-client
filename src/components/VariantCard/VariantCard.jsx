import "./VariantCard.scss";

const VariantCard = ({ title, metrics, email, type="", onClick }) => {
  return (
    <article className="variant-card" tabIndex={0} onClick={onClick} >
      <div className={`variant-card__card-header ${type}`}>{title}</div>
      <div className="variant-card__card-body">
        <h4 className="variant-card__card-title">{email.subject}</h4>
        <p className="variant-card__card-content">{email.body}</p>
        
        <div className="variant-card__metrics-group">
          {metrics.map((m, index) => (
            <span 
              key={index} 
              className={`variant-card__metric-badge ${m.type}`}
            >
              {m.label}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default VariantCard;