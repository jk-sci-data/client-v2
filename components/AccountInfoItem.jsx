import React from 'react';

const AccountInfoItem = ({ title, name, linkText, linkHref }) => (
  <div className="account-info-item">
    <div className="title">{title}</div>
    <div className="name">{name}</div>
    <a href={linkHref}>{linkText}</a>
  </div>
);

export default AccountInfoItem;
