import React from "react";
import "./InquiryInquieyItem.sass";
import MainApp from "components/MainApp";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import YListContent from "components/YListContent";
import Note from "components/Note";
import AddList from 'components/AddList';
import bubble from "../../dist/img/bubble.png";
import add from "../../dist/img/add.png";
function InquiryInquieyItem() {

  return (
    <MainApp>
       <div className="main_container inquiryitem-wrap" style={{ width: '100%' }}>
          <div className="cont-main">
            <TitleWithBubbleBox title="报价单信息" bubbleContent="Bubble Content for 报价单信息"/>  
            <div className="main-content-2 pt-4">
              <Note content="基本信息" />
              <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="56356735735"
                      subtitleText="询价单号"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="56356735735"
                      subtitleText="到达时间"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="3583573563"
                      subtitleText="产品编号"
                      label="3583573563"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="6943673"
                      subtitleText="CAS"
                      label="6943673"
                    />
                    </div>
                    <div className="col-lg-12 mb-4">
                    <YListContent
                      bubbleContent="Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc,fawrgtqfgasdfasdffafddf, 96%"
                      subtitleText="英文名称"
                      label="Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc,fawrgtqfgasdfasdffafddf, 96%"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="3583573563"
                      subtitleText="产品编号"
                      label="3583573563"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="6943673"
                      subtitleText="CAS"
                      label="6943673"
                    />
                    </div>
                    <div className="col-lg-12 mb-4">
                    <YListContent
                      bubbleContent="双[1-(叔丁基过氧)-1-甲基乙基]苯"
                      subtitleText="中文名称"
                      label="双[1-(叔丁基过氧)-1-甲基乙基]苯"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="指标要求"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="实际指标"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="无"
                      subtitleText="特殊指标要求"
                      label="无"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="数量"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="包装数量"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="规格"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="包装单位"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="无"
                      subtitleText="小样需求"
                      label="无"
                    />
                    </div>
                    <div className="col-lg-12 mb-4">
                    <YListContent
                      bubbleContent="无"
                      subtitleText="小样需求"
                      label="无"
                    />
                    </div>
                </div>
              </div>
              <Note content="报价" />
              <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="其他纯度"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="价格"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="单价"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="总价"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="运费"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="增值税"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="其他费用"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="交货周期"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="是否定制"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="项目需求"
                      subtitleText="处理状态"
                      label="项目需求"
                    />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <YListContent
                      bubbleContent="rfqerqrq"
                      subtitleText="备注"
                      label="rfqerqrq"
                    />
                    </div>
                    
                    
                  </div>
              </div>
              <Note content="其他纯度" />
              <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="d-flex">
                        <div className="right-align-flex ">
                          <div style={{ color: '#686868' }} className="subtitle notosanssc-normal-shark-20px mr-1">其他纯度</div>
                        </div>
                        <div className="text_label-123 valign-text-middle notosanssc-normal-shark-20px ml-3">
                          <input></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="d-flex">
                        <div className="right-align-flex ">
                          <div style={{ color: '#686868' }} className="subtitle notosanssc-normal-shark-20px mr-1">价格</div>
                        </div>
                        <div className="text_label-123 valign-text-middle notosanssc-normal-shark-20px ml-3">
                          <input></input>
                        </div>
                      </div>
                    </div>
                      <div className="pl-3"><AddList label="增加其他浓度选项" /></div>
                  </div>
              </div>
              <Note content="产品证书: SP（Specification sheet）" />
              <div className="col-lg-12">
                <div className="d-flex">
                  <p>格式案例：“3513513_SP.PDF”</p>
                  <div className="bubble-box">
                    <img src={bubble} alt="bubble" />
                    <div className="bubble-content">111</div>
                  </div>
                </div>
                <AddList label="上传文档" />  
                </div>
               
                <Note content="产品证书: COA ; SDS; 图片" />
                <div className="col-lg-12">
                  <div className="d-flex">
                    <p>格式案例：“3513513_COA.DOCX”，“75555_COA.pdf”</p>
                    <div className="bubble-box">
                      <img src={bubble} alt="bubble" />
                      <div className="bubble-content">123</div>
                    </div>
                  </div>
                  <AddList label="上传文档" />
                </div>  
                
                <div className="col-lg-12">
                  <p>了解更多关于<a href="#">产品证书命名格式</a></p>
                </div>
                <div className="btn_container" style={{ width: '100%',  justifyContent: 'center', display: 'flex',  }}>
                </div>
                <div className="btn_container">
                  <button className="btn-4">
                    <div className="text_label-87 valign-text-middle notosanssc-medium-white-16px">保存</div>
                  </button>
                  <button className="btn-29">
                    <div className="text_label-128 valign-text-middle notosanssc-medium-granite-gray-16px">返回</div>
                  </button>
                </div>
              </div>
          </div>
      </div>
    </MainApp>
  );
}

export default InquiryInquieyItem;
