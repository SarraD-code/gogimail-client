import './AIScoring.scss';

const AIScoring = ({ scores }) => {
  return (
    <div className="scoring-card">
      <div className="card-header">AI Scoring</div>
      <div className="card-body">
        {scores.map((item, index) => (
          <div key={index} className="scoring-row">
            <span className="scoring-label">{item.label}</span>
            <div className="progress-bg">
              <div 
                className="progress-fill" 
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIScoring;