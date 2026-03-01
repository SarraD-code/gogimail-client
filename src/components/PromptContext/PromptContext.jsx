import { useState } from 'react';
import './PromptContext.scss';

const PromptContext = ({ onChange, values }) => {

  return (
    <div className="prompt-context__container">
      <h3>Prompt Context</h3>
      
      {/* Key Messages / Brief */}
      <div className="prompt-context__input-group">
        <label>Key Messages/Brief</label>
        <textarea 
          name="brief"
          value={values.brief}
          onChange={onChange}
          className="prompt-context__full-width"
          placeholder='Write your prompt here'
        />
      </div>
      
      {/* Do Include / Avoid Side-by-Side */}
      <div className="prompt-context__flex-row">
        <div className="prompt-context__input-group prompt-context__flex-1">
          <label>Do Include</label>
          <textarea 
            name="include"
            value={values.include}
            onChange={onChange}
            className="prompt-context__half-width"
            placeholder='Add notes here'
          />
        </div>
        <div className="prompt-context__input-group prompt-context__flex-1">
          <label>Avoid</label>
          <textarea 
            name="avoid"
            value={values.avoid}
            onChange={onChange}
            className="prompt-context__half-width"
            placeholder='Add notes here'
          />
        </div>
      </div>
    </div>
  );
};

export default PromptContext;