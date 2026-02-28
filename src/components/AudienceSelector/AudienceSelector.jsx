import { useState } from 'react';
import './AudienceSelector.scss';

const AudienceSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedTone, setSelectedTone] = useState('Brand Voice');

  const templates = ['Mid-Market. SaaS. Churned 90 days.', 'All Users. Product Update.', 'SMB. New User Sign-up.'];
  const tones = ['Brand Voice', 'Urgent', 'Formal'];

  return (
    <div className="audience-selector__container">
      {/* Audience Dropdown */}
      <div className="audience-selector__section">
        <label className="audience-selector__label">Audience</label>
        <div className="audience-selector__dropdown-wrapper">
          <select 
            value={selectedTemplate} 
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className={`audience-selector__dropdown ${selectedTemplate ? 'selected' : ''}`}
          >
            <option value="" disabled>Choose a template here</option>
            {templates.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Tone Profile Buttons */}
      <div className="audience-selector__section">
        <label className="audience-selector__label">Tone Profile</label>
        <div className="audience-selector__button-group">
          {tones.map(tone => (
            <button
              key={tone}
              className={`audience-selector__tone-btn ${selectedTone === tone ? 'active' : ''}`}
              onClick={() => setSelectedTone(tone)}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudienceSelector;