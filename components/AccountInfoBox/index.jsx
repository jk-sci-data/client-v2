

import React from 'react';
import styles from './styles.module.css'; // Import the CSS module
import React from 'react';
import styles from './styles.module.css'; // Import your CSS module

const IconRegular1Image = "";
const IconRegular2Image = "";

function AccountInfoBox() {
  return (
    <div className={styles.AccountInfoBox1}>
      <Q>您好！</Q>
      <Username141>Username141...</Username141>
      <Btn />
      <Line8 />
      <Frame436 />
      <DropdownItem />
      <IconRegular />
      <OptionBoxContianer>
        <OptionBox>
          <OptionBox1>
            <Q1>切换账号</Q1>
            <IconRegular1 src={IconRegular1Image} loading='lazy' alt="icon_regular" />
          </OptionBox1>
          <ExpandInfo>
            <IconRegular2 src={IconRegular2Image} loading='lazy' alt="icon_regular" />
          </ExpandInfo>
        </OptionBox>
        <AccountBox>
          <CompanyAccount>
            <CompanyName>Company Name</CompanyName>
            <AccountName>Account Name</AccountName>
          </CompanyAccount>
          <Btn1 />
        </AccountBox>
        <AccountBox1>
          <CompanyAccount1>
            <JK>J&K</JK>
            <UserName13541>UserName13541</UserName13541>
          </CompanyAccount1>
          <Btn2 />
        </AccountBox1>
      </OptionBoxContianer>
    </div>
  );
}

function Q({ children }) {
  return <div className={styles.Q}>{children}</div>;
}

function Username141({ children }) {
  return <div className={styles.Username141}>{children}</div>;
}

function Btn() {
  return <div className={styles.Btn} />;
}

function Line8() {
  return <div className={styles.Line8} />;
}

function Frame436() {
  return <div className={styles.Frame436} />;
}

function DropdownItem() {
  return <div className={styles.DropdownItem} />;
}

function IconRegular() {
  return <div className={styles.IconRegular} />;
}

function OptionBoxContianer({ children }) {
  return <div className={styles.OptionBoxContianer}>{children}</div>;
}

function OptionBox({ children }) {
  return <div className={styles.OptionBox}>{children}</div>;
}

function OptionBox1({ children }) {
  return <div className={styles.OptionBox1}>{children}</div>;
}

function Q1({ children }) {
  return <div className={styles.Q1}>{children}</div>;
}

function ExpandInfo({ children }) {
  return <div className={styles.ExpandInfo}>{children}</div>;
}

function IconRegular1({ src, loading, alt }) {
  return <img src={src} loading={loading} alt={alt} className={styles.IconRegular1} />;
}

function IconRegular2({ src, loading, alt }) {
  return <img src={src} loading={loading} alt={alt} className={styles.IconRegular2} />;
}

function AccountBox({ children }) {
  return <div className={styles.AccountBox}>{children}</div>;
}

function CompanyAccount({ children }) {
  return <div className={styles.CompanyAccount}>{children}</div>;
}

function CompanyName({ children }) {
  return <div className={styles.CompanyName}>{children}</div>;
}

function AccountName({ children }) {
  return <div className={styles.AccountName}>{children}</div>;
}

function Btn1() {
  return <div className={styles.Btn1} />;
}

function AccountBox1({ children }) {
  return <div className={styles.AccountBox1}>{children}</div>;
}

function CompanyAccount1({ children }) {
  return <div className={styles.CompanyAccount1}>{children}</div>;
}

function JK({ children }) {
  return <div className={styles.JK}>{children}</div>;
}

function UserName13541({ children }) {
  return <div className={styles.UserName13541}>{children}</div>;
}

function Btn2() {
  return <div className={styles.Btn2} />;
}

export default AccountInfoBox;

