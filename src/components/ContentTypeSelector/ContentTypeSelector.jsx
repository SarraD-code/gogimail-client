import { useState } from 'react';
import './ContentTypeSelector.scss';

const ContentTypeSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('Re-activate');

  const templates = ['Product Announcement Email', 'Re-activation Email', 'Sales Outreach Email - Cold', 'Customer Success Email - Upsell'];
  const goals = ['Re-activate', 'Upsell', 'Awareness', 'Retention'];

  return (
    <div className="content-type-selector__container">
      {/* Audience Dropdown */}
      <div className="content-type-selector__section">
        <label className="content-type-selector__label">Content Type</label>
        <div className="content-type-selector__dropdown-wrapper">
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className={`content-type-selector__dropdown ${selectedTemplate ? 'selected' : ''}`}
          >
            <option value="" disabled>Choose a template here</option>
            {templates.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Goal Profile Buttons */}
      <div className="content-type-selector__section">
        <label className="content-type-selector__label">Primary Goal</label>
        <div className="content-type-selector__button-group">
          {goals.map(goal => (
            <button
              type="button"
              key={goal}
              className={`content-type-selector__goal-btn ${selectedGoal === goal ? 'active' : ''}`}
              onClick={() => setSelectedGoal(goal)}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentTypeSelector;