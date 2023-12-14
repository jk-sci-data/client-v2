import React from 'react'


import AccountSettingItem from "components/AccountSettingList";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import Note from "components/Note";

import "./AccountSetting.sass";
import MainApp from "components/MainApp";


const accountSettingItems = [
  { title: '修改供应商信息', isOpen: true },
  { title: '提交产品信息', isOpen: true },
  { title: '提交产品信息', isOpen: true },
  { title: '提交产品信息', isOpen: true },
  { title: '提交产品信息', isOpen: true },
  { title: '编辑XXX', isOpen: false },
];



function AccountSetting() {
  return (
    <div>
       <MainApp>
        <div className="main_container" style={{ width: "100%", alignItems: "unset" }}>
          <TitleWithBubbleBox
            title="账号权限"
            bubbleContent="Bubble Content for 账号权限"
            />  
            <Note content="修改权限，请联系账户管理员" />
            <div>
              {accountSettingItems.map((item, index) => (
                <AccountSettingItem
                  key={index}
                  title={item.title}
                  isOpen={item.isOpen}
                />
              ))}
            </div>
        </div>
      </MainApp>
      
    </div>
  )
}

export default AccountSetting
