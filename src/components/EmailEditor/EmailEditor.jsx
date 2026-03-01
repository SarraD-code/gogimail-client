import './EmailEditor.scss';

const EmailEditor = ({ email }) => {
  return (
    <div className="editor-container">
      {/* Header Toolbar */}
      <div className="editor-header">
        <div className="toolbar-left">
          <button className="btn edit-btn">Edit</button>
          <button className="btn accept-btn">Accept all edits</button>
        </div>
        <div className="toolbar-right">
          <span className="status">• Read-only</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="editor-content">
        <h2 className="email-subject">{email.subject}</h2>
        <p className="email-body">
          {email.body}
        </p>
      </div>

      {/* Footer Status */}
      <div className="editor-footer">
        <span className="status-text">• 2 suggestions - 1 flag</span>
      </div>
    </div>
  );
};

export default EmailEditor;