import React, { useState } from "react";
import TitleContainer from "components/TitleContainer";
import InputRegular5 from "components/InputRegular5";
import InputBoxRegular from "components/InputBoxRegular";
import BtnOption5 from "components/BtnOption5";
import TextOption from "components/TextOption";
import InputRegular6 from "components/InputRegular6";
import InputRegular7 from "components/InputRegular7";
import InputRegular8 from "components/InputRegular8";
import InputRegular9 from "components/InputRegular9";
import InputRegular10 from "components/InputRegular10";
import Btn22 from "components/Btn22";
import Note from "components/Note";
import MainApp from "components/MainApp";
import "./VenderInfo.sass";
import bubble from "../../dist/img/bubble.png";
function VenderInfo(props) {
  const {
    spanText1,
    spanText2,
    btn,
    titleContainerProps,
    inputRegular51Props,
    inputRegular52Props,
    inputRegular6Props,
    inputRegular53Props,
    inputRegular9Props,
    inputRegular10Props,
    btn22Props
  } = props;

  const [inputText, setInputText] = useState(''); 
  const [radioOptions, setRadioOptions] = useState([]); 
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleAddOption = () => {
    if (inputText.trim() !== '' && !radioOptions.find(option => option.label === inputText)) {
      const newOption = {
        id: `option${radioOptions.length + 1}`,
        label: inputText,
      };
      setRadioOptions([...radioOptions, newOption]); 
      setInputText(''); 
    }
  };
  const [selectedOption, setSelectedOption] = useState('');
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <MainApp>
      <div className="main_container" style={{width:'100%'}}>
        <div className="cont-2  mb-3">
          <TitleContainer className={titleContainerProps.className}>{titleContainerProps.children}</TitleContainer>
          <Note content="基本信息" />
          <div className="cont-2">
            <InputRegular5
              inputSubtitleContainer9Props={inputRegular51Props.inputSubtitleContainer9Props}
              inputBoxRegularProps={inputRegular51Props.inputBoxRegularProps}
            />
            <div class="input_regular-7">
              <div class="input_subtitle_container-20">
                <div class="subtitle-32 notosanssc-normal-white-20px">
                  <span class="notosanssc-normal-well-read-20px">*</span>
                  <span class="notosanssc-normal-shark-20px">经营性质</span>
                 
                </div>
              </div>
              <select>
                <option value="">必填</option>
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
              </select>
            </div>

            <div className="input_container_regular">
              <div className="input_title_container">
                <div className="text-172 notosanssc-normal-white-20px">
                  <span className="notosanssc-normal-well-read-20px">{spanText1}</span>
                  <span className="notosanssc-normal-shark-20px">{spanText2}</span>
                  <div className="bubble-box">
                      <img src={bubble} alt="bubble" />
                      <div className="bubble-content">负责人姓名介绍</div>
                  </div>
                </div>
              </div>
              <div className="t_column">
                <div className="input_container-1">
                  <div className="input-box_regular-3">
                    <input
                      className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
                      style={{ border: "none", backgroundColor: "transparent", color: "#303030" }}
                      placeholder="请输入全名"
                      value={inputText}
                      onChange={handleInputChange}
                      // You can also add an onKeyDown handler to submit on Enter key press
                      onKeyDown={(e) => e.key === 'Enter' && handleAddOption()}
                    />
                  </div>
                  <img className="btn-31" src={btn} alt="btn"  onClick={handleAddOption} style={{ cursor: 'pointer' }} />
                  
                </div>
                {radioOptions.map((option, index) => (
                  <div key={option.id}>
                    <label>
                      {option.label}
                      <input
                        type="radio"
                        name="options"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={handleRadioChange}
                      />
                    </label>
                    {selectedOption === option.id && <span> 默认联系人</span>}
                    </div>
                ))}
              </div> 
            </div>
            <InputRegular5
              inputSubtitleContainer9Props={inputRegular52Props.inputSubtitleContainer9Props}
              inputBoxRegularProps={inputRegular52Props.inputBoxRegularProps}
            />
            <InputRegular6
              inputSubtitleContainer2Props={inputRegular6Props.inputSubtitleContainer2Props}
              inputBoxRegularProps={inputRegular6Props.inputBoxRegularProps}
            />
            <div class="input_regular-7">
              <div class="input_subtitle_container-20">
                <div class="subtitle-32 notosanssc-normal-white-20px">
                  <span class="notosanssc-normal-well-read-20px">*</span>
                  <span class="notosanssc-normal-shark-20px">国家</span>
                </div>
              </div>
              <select>
                <option value="">必填</option>
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
              </select>
            </div>
            <div class="input_regular-7">
              <div class="input_subtitle_container-20">
                <div class="subtitle-32 notosanssc-normal-white-20px">
                  <span class="notosanssc-normal-well-read-20px">*</span>
                  <span class="notosanssc-normal-shark-20px">省</span>
                </div>
              </div>
              <select>
                <option value="">必填</option>
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
              </select>
            </div>
            <div class="input_regular-7">
              <div class="input_subtitle_container-20">
                <div class="subtitle-32 notosanssc-normal-white-20px">
                  <span class="notosanssc-normal-well-read-20px">*</span>
                  <span class="notosanssc-normal-shark-20px">市</span>
                </div>
              </div>
              <select>
                <option value="">必填</option>
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
              </select>
            </div>
            <div class="input_regular-7">
              <div class="input_subtitle_container-20">
                <div class="subtitle-32 notosanssc-normal-white-20px">
                  <span class="notosanssc-normal-well-read-20px">*</span>
                  <span class="notosanssc-normal-shark-20px">区</span>
                </div>
              </div>
              <select >
                <option value="">必填</option>
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
              </select>
            </div>
           
            <InputRegular5
              inputSubtitleContainer9Props={inputRegular53Props.inputSubtitleContainer9Props}
              inputBoxRegularProps={inputRegular53Props.inputBoxRegularProps}
            />
            <InputRegular9
              spanText1={inputRegular9Props.spanText1}
              spanText2={inputRegular9Props.spanText2}
              inputBoxRegularProps={inputRegular9Props.inputBoxRegularProps}
            />
            <InputRegular10
              inputSubtitleContainer10Props={inputRegular10Props.inputSubtitleContainer10Props}
              inputBoxRegularProps={inputRegular10Props.inputBoxRegularProps}
            />
          </div>
          <Note content="银行信息" />
            <div className="input_regular-10">
              <div className="input_subtitle_container-20">
                <div className="subtitle-32 notosanssc-normal-white-20px">
                  <span className="notosanssc-normal-well-read-20px">*</span>
                  <span className="notosanssc-normal-shark-20px">受益人</span>
                </div>
                <div className="bubble-box">
                      <img src={bubble} alt="bubble" />
                      <div className="bubble-content">受益人介绍</div>
                </div>
              </div>
              <div className="input-box_regular-3">
                <input className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
                  style={{ border: "none", backgroundColor: "trasnparent", color:"#303030"}} placeholder="必填"
                />
              </div>
            </div>
            <div className="input_regular-10">
              <div className="input_subtitle_container-20">
                <div className="subtitle-32 notosanssc-normal-white-20px">
                  <span className="notosanssc-normal-well-read-20px">*</span>
                  <span className="notosanssc-normal-shark-20px">开户银行</span>
                  <div className="bubble-box">
                      <img src={bubble} alt="bubble" />
                      <div className="bubble-content">开户银行介绍</div>
                </div>
                </div>
              </div>
              <div className="input-box_regular-3">
                <input className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
                  style={{ border: "none", backgroundColor: "trasnparent", color:"#303030"}} placeholder="必填"
                />
              </div>
            </div>
            <div className="input_regular-10">
              <div className="input_subtitle_container-20">
                <div className="subtitle-32 notosanssc-normal-white-20px">
                  <span className="notosanssc-normal-well-read-20px">*</span>
                  <span className="notosanssc-normal-shark-20px">银行账号</span>
                  <div className="bubble-box">
                      <img src={bubble} alt="bubble" />
                      <div className="bubble-content">银行账号介绍</div>
                </div>
                </div>
              </div>
              <div className="input-box_regular-3">
                <input className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
                  style={{ border: "none", backgroundColor: "trasnparent", color:"#303030"}} placeholder="必填"
                />
              </div>
            </div>
        </div>
        
        <Btn22 onClick={() => console.log("click successful")}>{btn22Props.children}</Btn22>
      </div>
    </MainApp>
  );
}

export default VenderInfo;
