import React from 'react'
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import BubbleBox from "components/BubbleBox/";
import Note from "components/Note";
import SelectDropdown from "components/SelectDropdown";
import InputDynamicRadioBoxes from "components/InputDynamicRadioBoxes";
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
                <label for="password"><span>*</span>经营性质
                <BubbleBox  bubbleContent="Bubble Content for 经营性质"/>
                </label>
                <input type="text" name="必填" placeholder="必填"></input>
            </div>
            <div className="form-list-wrap">
                <label for="password"><span>*</span>经营性质
                <BubbleBox  bubbleContent="Bubble Content for 供应商信息"/>
                </label>
                <SelectDropdown options={['Option 1', 'Option 2', 'Option 3']} />

            </div>
            <div className="form-list-wrap">
              <div className="list-left">
                <label for="password"><span>*</span>负责人姓名
                <BubbleBox  bubbleContent="Bubble Content for 供应商信息"/>
                </label>
                </div>
                <InputDynamicRadioBoxes />

            </div>
            </div>
      </div>

    </MainApp>
  )
}

export default VederInfo




