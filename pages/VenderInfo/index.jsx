import React from 'react'
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import InputName from "components/InputName";
import InputNameWithBubble from "components/InputNameWithBubble";
import InputNameWithNoRed from "components/InputNameWithNoRed";
import Note from "components/Note";
import SelectDropdown from "components/SelectDropdown";
import InputDynamicRadioBoxes from "components/InputDynamicRadioBoxes";
import BtnContainer from "components/BtnContainer";
import MainApp from "components/MainApp";
import "./VenderInfo.sass";



function VederInfo() {
  return (
    <MainApp>
  
      <div className="main_container">
            <div className="cont-2">
              <TitleWithBubbleBox
                title="供应商信息"
                bubbleContent="Bubble Content for 供应商信息"
                />  
                <Note content="基本信息" />
            
                <div className="form-list-wrap">
                    <InputNameWithBubble Name="公司名称" bubbleContent="Bubble Content for" />
                    <input type="text" name="必填" placeholder="必填"></input>
                </div>
                <div className="form-list-wrap">
                    <InputNameWithNoRed Name="经营性质" bubbleContent="Bubble Content for 2" />
                    <SelectDropdown options={['Option 1', 'Option 2', 'Option 3']} />
                </div>
                <div className="form-list-wrap">
                  <InputNameWithBubble Name="负责人姓名" bubbleContent="Bubble Content for" />
                  <InputDynamicRadioBoxes />
                </div>
                <div className="form-list-wrap">
                  <InputNameWithBubble Name="联系电话" bubbleContent="Bubble Content for" />
                  <input type="text" name="必填" placeholder="必填"></input>
                </div>
                <div className="form-list-wrap">
                  <InputName Name="联系电话" bubbleContent="Bubble Content for" />
                  <input type="text" name="必填" placeholder="必填"></input>
                </div>
                <div className="form-list-wrap">
                    <InputNameWithNoRed Name="国家" bubbleContent="Bubble Content for 2" />
                    <SelectDropdown options={['Option 1', 'Option 2', 'Option 3']} />
                </div>
                <div className="form-list-wrap">
                    <InputNameWithNoRed Name="省" bubbleContent="Bubble Content for 2" />
                    <SelectDropdown options={['Option 1', 'Option 2', 'Option 3']} />
                </div>
                <div className="form-list-wrap">
                    <InputNameWithNoRed Name="市" bubbleContent="Bubble Content for 2" />
                    <SelectDropdown options={['Option 1', 'Option 2', 'Option 3']} />
                </div>
                <div className="form-list-wrap">
                    <InputNameWithNoRed Name="区" bubbleContent="Bubble Content for 2" />
                    <SelectDropdown options={['Option 1', 'Option 2', 'Option 3']} />
                </div>
                <div className="form-list-wrap">
                  <InputNameWithBubble Name="座机号码" bubbleContent="Bubble Content for" />
                  <input type="text" name="必填" placeholder="必填"></input>
                </div>
                <div className="form-list-wrap">
                  <InputNameWithBubble Name="传真号" bubbleContent="Bubble Content for" />
                  <input type="text" name="必填" placeholder="必填"></input>
                </div>
                <div className="form-list-wrap">
                  <InputNameWithBubble Name="邮箱" bubbleContent="Bubble Content for" />
                  <input type="text" name="必填" placeholder="必填"></input>
                </div>
                <Note content="银行信息" />
                <div className="form-list-wrap">
                  <InputNameWithBubble Name="受益人" bubbleContent="Bubble Content for" />
                  <input type="text" name="必填" placeholder="必填"></input>
                </div>
                <div className="form-list-wrap">
                  <InputNameWithBubble Name="开户银行" bubbleContent="Bubble Content for" />
                  <input type="text" name="必填" placeholder="必填"></input>
                </div>
                <div className="form-list-wrap">
                  <InputNameWithBubble Name="银行账号" bubbleContent="Bubble Content for" />
                  <input type="text" name="必填" placeholder="必填"></input>
                </div>
                </div>
                <div className="cont-center">
                  <button className="btn-4">
                  <div className="text_label-87 valign-text-middle notosanssc-medium-white-16px">
                    保存
                  </div>
                  </button>
                </div>
            
      </div>

    </MainApp>
  )
}

export default VederInfo




