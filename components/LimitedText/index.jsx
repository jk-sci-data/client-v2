import React from 'react';

const LimitedText = ({ text, maxLength }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div style={{ width: '220px' }}>
      <div className="date valign-text-middle">
        {truncateText(text, maxLength)}
      </div>
    </div>
  );
};

export default LimitedText;
