import { useState } from 'react';
import './PromptContext.scss';

const PromptContext = () => {
  const [context, setContext] = useState({
    brief: '',
    include: '',
    avoid: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContext(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="prompt-context__container">
      <h3>Prompt Context</h3>
      
      {/* Key Messages / Brief */}
      <div className="prompt-context__input-group">
        <label>Key Messages/Brief</label>
        <textarea 
          name="brief"
          value={context.brief}
          onChange={handleChange}
          className="prompt-context__full-width"
        />
      </div>
      
      {/* Do Include / Avoid Side-by-Side */}
      <div className="prompt-context__flex-row">
        <div className="prompt-context__input-group prompt-context__flex-1">
          <label>Do Include</label>
          <textarea 
            name="include"
            value={context.include}
            onChange={handleChange}
            className="prompt-context__half-width"
          />
        </div>
        <div className="prompt-context__input-group prompt-context__flex-1">
          <label>Avoid</label>
          <textarea 
            name="avoid"
            value={context.avoid}
            onChange={handleChange}
            className="prompt-context__half-width"
          />
        </div>
      </div>
    </div>
  );
};

export default PromptContext;