import React, {useContext} from "react";
import QrcodeContainer from "../QrcodeContainer";
import JkInfo from "../JkInfo";
import ReadmoreInfo from "../ReadmoreInfo";
import BtnText22 from "../BtnText22";
import "./Footer.sass";
import { AppContext } from "../../contexts";

function Footer(props) {
  const { footer8Data } = useContext(AppContext);
  const {
    className,
    qrcodeContainerProps,
    jkInfoProps,
    readmoreInfoProps,
    btnText21Props,
    btnText22Props,
    btnText23Props,
    btnText24Props,
  } = footer8Data;

  return (
    <footer className={`footer ${className || ""}`} style={{width:"100%"}}>
      <div className="footer_container">
        <div className="footer_content">
          <QrcodeContainer rectangle={qrcodeContainerProps.rectangle} />
          <div className="content_container">
            <JkInfo
              btnText21Props={jkInfoProps.btnText21Props}
              btnText22Props={jkInfoProps.btnText22Props}
              btnText23Props={jkInfoProps.btnText23Props}
              btnText24Props={jkInfoProps.btnText24Props}
            />
            <ReadmoreInfo
              btnText21Props={readmoreInfoProps.btnText21Props}
              btnText22Props={readmoreInfoProps.btnText22Props}
              btnText23Props={readmoreInfoProps.btnText23Props}
            />
            <div className="contact_info">
              <div className="text-6 valign-text-middle notosanssc-normal-shark-16px">联系我们</div>
              <div className="contact_nav">
                <BtnText22>{btnText21Props.children}</BtnText22>
                <BtnText22>{btnText22Props.children}</BtnText22>
                <BtnText22>{btnText23Props.children}</BtnText22>
                <BtnText22>{btnText24Props.children}</BtnText22>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
