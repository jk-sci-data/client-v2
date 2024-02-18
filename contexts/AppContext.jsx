import { createContext, useState, useEffect } from "react";
import { SideNavProvider } from "./SideNavContext";
import useLogin from "hooks/useLogin";

const AppContext = createContext();

/**
 * 
 * Stores global app data, intended to be visible at all levels of the Component tree
 * @returns 
 */
function AppProvider({ children }) {

    //holds an Object exported from AnimaApp. This needs to be cleaned up.
    let constants = (() => {
        const logoContainer1Data = {
            jK: "/img/j-k-1@2x.png",
        };

        const header22Data = {
            logoContainerProps: logoContainer1Data,
        };

        const inputBoxRegular421Data = {
            icon_Regular: "/img/component-1@2x.png",
            inputPlaceholder: "请输入邮箱",
        };

        const inputBoxRegular422Data = {
            icon_Regular: "/img/component-1-5@2x.png",
            inputPlaceholder: "请输入密码",
        };

        const btnTextData = {
            children: "记住密码",
        };

        const btn82Data = {
            children: "登录",
        };

        const btnText2Data = {
            children: "创建账户",
        };

        const loginWiondowData = {
            text7: "登录",
            text8: "加入百灵威供应商平台",
            text10: "忘记密码？",
            ofjfkpofghh4Esmwcdjkd0Nj1: "/img/ofjfkpofghh4esmwcdjkd0nj-1.png",
            inputBoxRegular421Props: inputBoxRegular421Data,
            inputBoxRegular422Props: inputBoxRegular422Data,
            btnTextProps: btnTextData,
            btn82Props: btn82Data,
            btnText2Props: btnText2Data,
        };

        const qrcodeContainer1Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText221Data = {
            children: "公司简介",
        };

        const btnText222Data = {
            children: "企业承诺",
        };

        const btnText223Data = {
            children: "合作品牌",
        };

        const btnText224Data = {
            children: "招贤纳士",
        };

        const jkInfo1Data = {
            btnText21Props: btnText221Data,
            btnText22Props: btnText222Data,
            btnText23Props: btnText223Data,
            btnText24Props: btnText224Data,
        };

        const btnText225Data = {
            children: "资讯中心",
        };

        const btnText226Data = {
            children: "安全说明书(SDS)",
        };

        const btnText227Data = {
            children: "产品",
        };

        const readmoreInfo1Data = {
            btnText21Props: btnText225Data,
            btnText22Props: btnText226Data,
            btnText23Props: btnText227Data,
        };

        const btnText228Data = {
            children: "百灵威资源中心",
        };

        const btnText229Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText2210Data = {
            children: "电话：010-80795999",
        };

        const btnText2211Data = {
            children: "传真：010-80793233",
        };

        const footer1Data = {
            qrcodeContainerProps: qrcodeContainer1Data,
            jkInfoProps: jkInfo1Data,
            readmoreInfoProps: readmoreInfo1Data,
            btnText21Props: btnText228Data,
            btnText22Props: btnText229Data,
            btnText23Props: btnText2210Data,
            btnText24Props: btnText2211Data,
        };

        const loginData = {
            header22Props: header22Data,
            loginWiondowProps: loginWiondowData,
            footerProps: footer1Data,
        };

        const logoContainer2Data = {
            jK: "/img/j-k-logo-8@2x.png",
            className: "logo_container-1",
        };

        const header31Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer2Data,
        };

        const navItem1Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const navItem2Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item",
        };

        const clipboardDarkGrey1Data = {
            src: "/img/subtract@2x.png",
        };

        const component11Data = {
            clipboardDarkGreyProps: clipboardDarkGrey1Data,
        };

        const navItem22Data = {
            component1Props: component11Data,
        };

        const subnavContainer1Data = {
            line4: "/img/line-4@2x.png",
            navItem1Props: navItem1Data,
            navItem2Props: navItem2Data,
            navItem2Props2: navItem22Data,
        };

        const component121Data = {
            overlapGroup: "/img/rectangle-2@2x.png",
            subtract: "/img/subtract-45@2x.png",
        };

        const navItem31Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const component131Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem1021Data = {
            component13Props: component131Data,
        };

        const iconRegular41Data = {
            src: "/img/subtract-47@2x.png",
            className: "",
        };

        const navItem521Data = {
            component14Props: iconRegular41Data,
        };

        const subnavContainer321Data = {
            navItem3Props: navItem31Data,
            navItem102Props: navItem1021Data,
            navItem52Props: navItem521Data,
        };

        const iconRegular51Data = {
            vector11: "/img/vector-11@2x.png",
            subtract: "/img/subtract-4@2x.png",
            vector12: "/img/vector-12@2x.png",
        };

        const navItem61Data = {
            iconRegular5Props: iconRegular51Data,
        };

        const iconRegular61Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem71Data = {
            iconRegular6Props: iconRegular61Data,
        };

        const iconRegular71Data = {
            vector109: "/img/vector-109-4@2x.png",
            subtract: "/img/subtract-36@2x.png",
        };

        const navItem1323Data = {
            text_Label: "询报价记录查询",
            component17Props: iconRegular71Data,
        };

        const menu52Data = {
            text134: "产品询价",
            line5: "/img/line-4@2x.png",
            frame279Props: subnavContainer1Data,
            frame280Props: subnavContainer321Data,
            navItem6Props: navItem61Data,
            navItem7Props: navItem71Data,
            navItem13Props: navItem1323Data,
        };

        const titleContainer1Data = {
            children: "报价记录",
        };

        const button621Data = {
            text_Label: "最近3个月",
            component1: "/img/component-1-6@2x.png",
        };

        const btn221Data = {
            children: "搜索",
        };

        const searchBar221Data = {
            component1: "/img/component-1-7@2x.png",
            text_Label: "输入单号或产品名称进行搜索",
            button2Props: btn221Data,
        };

        const frame4371Data = {
            buttonProps: button621Data,
            searchBar2Props: searchBar221Data,
        };

        const btnFrameless1Data = {
            children: "已完成",
        };

        const framelessButton421Data = {
            children: "已放弃",
        };

        const btn41Data = {
            text_Label: "按时间顺序排列",
        };

        const historySubNav1Data = {
            number: "8",
            button32Props: btn41Data,
        };

        const categoryTitle3231Data = {
            text5: "12",
        };

        const categoryTitle221Data = {
            categoryTitle3Props: categoryTitle3231Data,
        };

        const textButton421Data = {
            children: "45135151531",
        };

        const textButton521Data = {
            children: "2023/6/27",
        };

        const textButton422Data = {
            children: "351351351",
            className: "btn_text-15",
        };

        const textButton522Data = {
            children: "351351351",
        };

        const textButton523Data = {
            children: "南圆圆",
        };

        const textButton524Data = {
            children: "齐姝燕",
        };

        const inquiryHistoryItem1Data = {
            btnText521Props: textButton421Data,
            textButton1Props: textButton521Data,
            btnText522Props: textButton422Data,
            textButton2Props: textButton522Data,
            textButton3Props: textButton523Data,
            textButton4Props: textButton524Data,
        };

        const textButton423Data = {
            children: "45135151531",
        };

        const textButton525Data = {
            children: "2023/6/27",
        };

        const textButton424Data = {
            children: "351351351",
            className: "btn_text-15",
        };

        const textButton526Data = {
            children: "351351351",
        };

        const textButton527Data = {
            children: "南圆圆",
        };

        const textButton528Data = {
            children: "齐姝燕",
        };

        const inquiryHistoryItem2Data = {
            btnText521Props: textButton423Data,
            textButton1Props: textButton525Data,
            btnText522Props: textButton424Data,
            textButton2Props: textButton526Data,
            textButton3Props: textButton527Data,
            textButton4Props: textButton528Data,
        };

        const textButton425Data = {
            children: "45135151531",
        };

        const textButton529Data = {
            children: "2023/6/27",
        };

        const textButton426Data = {
            children: "351351351",
            className: "btn_text-15",
        };

        const textButton5210Data = {
            children: "351351351",
        };

        const textButton5211Data = {
            children: "南圆圆",
        };

        const textButton5212Data = {
            children: "齐姝燕",
        };

        const inquiryHistoryItem3Data = {
            btnText521Props: textButton425Data,
            textButton1Props: textButton529Data,
            btnText522Props: textButton426Data,
            textButton2Props: textButton5210Data,
            textButton3Props: textButton5211Data,
            textButton4Props: textButton5212Data,
        };

        const textButton427Data = {
            children: "45135151531",
        };

        const textButton5213Data = {
            children: "2023/6/27",
        };

        const textButton428Data = {
            children: "351351351",
            className: "btn_text-15",
        };

        const textButton5214Data = {
            children: "351351351",
        };

        const textButton5215Data = {
            children: "南圆圆",
        };

        const textButton5216Data = {
            children: "齐姝燕",
        };

        const inquiryHistoryItem4Data = {
            btnText521Props: textButton427Data,
            textButton1Props: textButton5213Data,
            btnText522Props: textButton428Data,
            textButton2Props: textButton5214Data,
            textButton3Props: textButton5215Data,
            textButton4Props: textButton5216Data,
        };

        const inquiryHistoryColumn1Data = {
            inquiryHistoryItem1Props: inquiryHistoryItem1Data,
            inquiryHistoryItem2Props: inquiryHistoryItem2Data,
            inquiryHistoryItem3Props: inquiryHistoryItem3Data,
            inquiryHistoryItem4Props: inquiryHistoryItem4Data,
        };

        const categoryTitle3232Data = {
            text5: "12",
        };

        const categoryTitle222Data = {
            categoryTitle3Props: categoryTitle3232Data,
        };

        const textButton429Data = {
            children: "45135151531",
        };

        const textButton5217Data = {
            children: "2023/6/27",
        };

        const textButton4210Data = {
            children: "351351351",
            className: "btn_text-15",
        };

        const textButton5218Data = {
            children: "351351351",
        };

        const textButton5219Data = {
            children: "南圆圆",
        };

        const textButton5220Data = {
            children: "齐姝燕",
        };

        const inquiryHistoryItem5Data = {
            btnText521Props: textButton429Data,
            textButton1Props: textButton5217Data,
            btnText522Props: textButton4210Data,
            textButton2Props: textButton5218Data,
            textButton3Props: textButton5219Data,
            textButton4Props: textButton5220Data,
        };

        const textButton4211Data = {
            children: "45135151531",
        };

        const textButton5221Data = {
            children: "2023/6/27",
        };

        const textButton4212Data = {
            children: "351351351",
            className: "btn_text-15",
        };

        const textButton5222Data = {
            children: "351351351",
        };

        const textButton5223Data = {
            children: "南圆圆",
        };

        const textButton5224Data = {
            children: "齐姝燕",
        };

        const inquiryHistoryItem6Data = {
            btnText521Props: textButton4211Data,
            textButton1Props: textButton5221Data,
            btnText522Props: textButton4212Data,
            textButton2Props: textButton5222Data,
            textButton3Props: textButton5223Data,
            textButton4Props: textButton5224Data,
        };

        const textButton4213Data = {
            children: "45135151531",
        };

        const textButton5225Data = {
            children: "2023/6/27",
        };

        const textButton4214Data = {
            children: "351351351",
            className: "btn_text-15",
        };

        const textButton5226Data = {
            children: "351351351",
        };

        const textButton5227Data = {
            children: "南圆圆",
        };

        const textButton5228Data = {
            children: "齐姝燕",
        };

        const inquiryHistoryItem7Data = {
            btnText521Props: textButton4213Data,
            textButton1Props: textButton5225Data,
            btnText522Props: textButton4214Data,
            textButton2Props: textButton5226Data,
            textButton3Props: textButton5227Data,
            textButton4Props: textButton5228Data,
        };

        const textButton4215Data = {
            children: "45135151531",
        };

        const textButton5229Data = {
            children: "2023/6/27",
        };

        const textButton4216Data = {
            children: "351351351",
            className: "btn_text-15",
        };

        const textButton5230Data = {
            children: "351351351",
        };

        const textButton5231Data = {
            children: "南圆圆",
        };

        const textButton5232Data = {
            children: "齐姝燕",
        };

        const inquiryHistoryItem8Data = {
            btnText521Props: textButton4215Data,
            textButton1Props: textButton5229Data,
            btnText522Props: textButton4216Data,
            textButton2Props: textButton5230Data,
            textButton3Props: textButton5231Data,
            textButton4Props: textButton5232Data,
        };

        const inquiryHistoryColumn2Data = {
            inquiryHistoryItem1Props: inquiryHistoryItem5Data,
            inquiryHistoryItem2Props: inquiryHistoryItem6Data,
            inquiryHistoryItem3Props: inquiryHistoryItem7Data,
            inquiryHistoryItem4Props: inquiryHistoryItem8Data,
        };

        const btn521Data = {
            children: "1",
        };

        const btn522Data = {
            children: "2",
        };

        const btn523Data = {
            children: "3",
        };

        const btn524Data = {
            children: "...",
        };

        const btn525Data = {
            children: "11",
        };

        const btn526Data = {
            children: "12",
        };

        const navPagenumber1Data = {
            btn51Props: btn521Data,
            btn52Props: btn522Data,
            btn53Props: btn523Data,
            btn54Props: btn524Data,
            btn55Props: btn525Data,
            btn56Props: btn526Data,
        };

        const qrcodeContainer2Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText2212Data = {
            children: "公司简介",
        };

        const btnText2213Data = {
            children: "企业承诺",
        };

        const btnText2214Data = {
            children: "合作品牌",
        };

        const btnText2215Data = {
            children: "招贤纳士",
        };

        const jkInfo2Data = {
            btnText21Props: btnText2212Data,
            btnText22Props: btnText2213Data,
            btnText23Props: btnText2214Data,
            btnText24Props: btnText2215Data,
        };

        const btnText2216Data = {
            children: "资讯中心",
        };

        const btnText2217Data = {
            children: "安全说明书(SDS)",
        };

        const btnText2218Data = {
            children: "产品",
        };

        const readmoreInfo2Data = {
            btnText21Props: btnText2216Data,
            btnText22Props: btnText2217Data,
            btnText23Props: btnText2218Data,
        };

        const btnText2219Data = {
            children: "百灵威资源中心",
        };

        const btnText2220Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText2221Data = {
            children: "电话：010-80795999",
        };

        const btnText2222Data = {
            children: "传真：010-80793233",
        };

        const footer2Data = {
            className: "footer-1",
            qrcodeContainerProps: qrcodeContainer2Data,
            jkInfoProps: jkInfo2Data,
            readmoreInfoProps: readmoreInfo2Data,
            btnText21Props: btnText2219Data,
            btnText22Props: btnText2220Data,
            btnText23Props: btnText2221Data,
            btnText24Props: btnText2222Data,
        };

        const inquiryHistoryData = {
            line6: "/img/line-6.png",
            text17: "询价单号",
            text13: "到达时间",
            text12: "项目号",
            cas: "CAS",
            text15: "报价人",
            text16: "销售",
            text14: "处理状态",
            header3Props: header31Data,
            nav72Props: menu52Data,
            titleContainerProps: titleContainer1Data,
            frame437Props: frame4371Data,
            btnFramelessProps: btnFrameless1Data,
            framelessButton42Props: framelessButton421Data,
            historySubNavProps: historySubNav1Data,
            categoryTitle221Props: categoryTitle221Data,
            inquiryHistoryColumn1Props: inquiryHistoryColumn1Data,
            categoryTitle222Props: categoryTitle222Data,
            inquiryHistoryColumn2Props: inquiryHistoryColumn2Data,
            navPagenumberProps: navPagenumber1Data,
            footerProps: footer2Data,
        };

        const logoContainer3Data = {
            jK: "/img/j-k-logo-8@2x.png",
            className: "logo_container-2",
        };

        const header32Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer3Data,
        };

        const navItem4Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const navItem5Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item-1",
        };

        const clipboardDarkGrey2Data = {
            src: "/img/subtract@2x.png",
        };

        const component14Data = {
            clipboardDarkGreyProps: clipboardDarkGrey2Data,
        };

        const navItem23Data = {
            component1Props: component14Data,
        };

        const subnavContainer2Data = {
            line4: "/img/line-4@2x.png",
            navItem1Props: navItem4Data,
            navItem2Props: navItem5Data,
            navItem2Props2: navItem23Data,
        };

        const component122Data = {
            overlapGroup: "/img/rectangle-2@2x.png",
            subtract: "/img/subtract-45@2x.png",
        };

        const navItem32Data = {
            component12Props: component122Data,
        };

        const component132Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem1022Data = {
            component13Props: component132Data,
        };

        const iconRegular42Data = {
            src: "/img/subtract-47@2x.png",
            className: "",
        };

        const navItem522Data = {
            component14Props: iconRegular42Data,
        };

        const subnavContainer322Data = {
            navItem3Props: navItem32Data,
            navItem102Props: navItem1022Data,
            navItem52Props: navItem522Data,
        };

        const iconRegular52Data = {
            vector11: "/img/vector-11@2x.png",
            subtract: "/img/subtract-4@2x.png",
            vector12: "/img/vector-12@2x.png",
        };

        const navItem62Data = {
            iconRegular5Props: iconRegular52Data,
        };

        const iconRegular62Data = {
            src: "/img/subtract-42@2x.png",
        };

        const navItem162Data = {
            text_Label: "产品证书上传",
            iconRegular6Props: iconRegular62Data,
        };

        const iconRegular72Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-65",
        };

        const navItem81Data = {
            iconRegular7Props: iconRegular72Data,
        };

        const nav92Data = {
            text178: "产品询价",
            line5: "/img/line-4@2x.png",
            subnavContainerProps: subnavContainer2Data,
            subnavContainer3Props: subnavContainer322Data,
            navItem6Props: navItem62Data,
            navItem16Props: navItem162Data,
            navItem8Props: navItem81Data,
        };

        const titleContainer2Data = {
            children: "产品证书上传",
            className: "title_container-1",
        };

        const categoryTitle31Data = {
            categorytitle: "上传产品证书以补充报价需求",
        };

        const qrcodeContainer3Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText2223Data = {
            children: "公司简介",
        };

        const btnText2224Data = {
            children: "企业承诺",
        };

        const btnText2225Data = {
            children: "合作品牌",
        };

        const btnText2226Data = {
            children: "招贤纳士",
        };

        const jkInfo3Data = {
            btnText21Props: btnText2223Data,
            btnText22Props: btnText2224Data,
            btnText23Props: btnText2225Data,
            btnText24Props: btnText2226Data,
        };

        const btnText2227Data = {
            children: "资讯中心",
        };

        const btnText2228Data = {
            children: "安全说明书(SDS)",
        };

        const btnText2229Data = {
            children: "产品",
        };

        const readmoreInfo3Data = {
            btnText21Props: btnText2227Data,
            btnText22Props: btnText2228Data,
            btnText23Props: btnText2229Data,
        };

        const btnText2230Data = {
            children: "百灵威资源中心",
        };

        const btnText2231Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText2232Data = {
            children: "电话：010-80795999",
        };

        const btnText2233Data = {
            children: "传真：010-80793233",
        };

        const footer3Data = {
            className: "footer-2",
            qrcodeContainerProps: qrcodeContainer3Data,
            jkInfoProps: jkInfo3Data,
            readmoreInfoProps: readmoreInfo3Data,
            btnText21Props: btnText2230Data,
            btnText22Props: btnText2231Data,
            btnText23Props: btnText2232Data,
            btnText24Props: btnText2233Data,
        };

        const productCertificateUploadData = {
            header3Props: header32Data,
            nav92Props: nav92Data,
            titleContainerProps: titleContainer2Data,
            categoryTitle3Props: categoryTitle31Data,
            footerProps: footer3Data,
        };

        const logoContainer4Data = {
            jK: "/img/j-k@2x.png",
            className: "logo_container-3",
        };

        const header33Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer4Data,
        };

        const navItem9Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const navItem10Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item-2",
        };

        const clipboardDarkGrey3Data = {
            src: "/img/subtract@2x.png",
        };

        const component15Data = {
            clipboardDarkGreyProps: clipboardDarkGrey3Data,
        };

        const navItem24Data = {
            component1Props: component15Data,
        };

        const subnavContainer3Data = {
            line4: "/img/line-4@2x.png",
            navItem1Props: navItem9Data,
            navItem2Props: navItem10Data,
            navItem2Props2: navItem24Data,
        };

        const component123Data = {
            overlapGroup: "/img/rectangle-2@2x.png",
            subtract: "/img/subtract-45@2x.png",
        };

        const navItem33Data = {
            component12Props: component123Data,
        };

        const component133Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem1023Data = {
            component13Props: component133Data,
        };

        const iconRegular43Data = {
            src: "/img/subtract-47@2x.png",
            className: "",
        };

        const navItem523Data = {
            component14Props: iconRegular43Data,
        };

        const subnavContainer323Data = {
            navItem3Props: navItem33Data,
            navItem102Props: navItem1023Data,
            navItem52Props: navItem523Data,
        };

        const iconRegular53Data = {
            vector11: "/img/vector-11-2@2x.png",
            subtract: "/img/subtract-18@2x.png",
            vector12: "/img/vector-12-2@2x.png",
        };

        const navItem1521Data = {
            iconRegular5Props: iconRegular53Data,
        };

        const iconRegular63Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem72Data = {
            iconRegular6Props: iconRegular63Data,
        };

        const iconRegular73Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-66",
        };

        const navItem82Data = {
            iconRegular7Props: iconRegular73Data,
        };

        const nav821Data = {
            subnavContainerProps: subnavContainer3Data,
            subnavContainer3Props: subnavContainer323Data,
            navItem15Props: navItem1521Data,
            navItem7Props: navItem72Data,
            navItem8Props: navItem82Data,
        };

        const titleContainer3Data = {
            children: "在线报价",
        };

        const categoryTitle41Data = {
            categorytitle: "报价基本信息",
        };

        const inputSubtitleContainer1Data = {
            children: "询价单号",
        };

        const btnText621Data = {
            children: "57571356153",
        };

        const inputGivenInfoSmall1Data = {
            inputSubtitleContainerProps: inputSubtitleContainer1Data,
            btnText6Props: btnText621Data,
        };

        const inputSubtitleContainer421Data = {
            children: "项目号",
        };

        const btnText622Data = {
            children: "6135715715",
        };

        const inputGivenInfoSmall2Data = {
            inputSubtitleContainer4Props: inputSubtitleContainer421Data,
            btnText6Props: btnText622Data,
        };

        const btnText623Data = {
            children: "62461461",
        };

        const inputGivenInfoSmall3Data = {
            subtitle: "Chemid",
            btnText6Props: btnText623Data,
        };

        const inputSubtitleContainer2Data = {
            children: "到达时间",
        };

        const btnText721Data = {
            children: "2021/5/9",
        };

        const inputGivenInfoSmall41Data = {
            inputSubtitleContainerProps: inputSubtitleContainer2Data,
            btnText7Props: btnText721Data,
        };

        const inputSubtitleContainer3Data = {
            children: "项目状态",
        };

        const btnText722Data = {
            children: "项目需求",
        };

        const inputGivenInfoSmall42Data = {
            inputSubtitleContainerProps: inputSubtitleContainer3Data,
            btnText7Props: btnText722Data,
        };

        const btnText723Data = {
            children: "357467356-46",
        };

        const inputGivenInfoSmall5Data = {
            btnText7Props: btnText723Data,
        };

        const inputSubtitleContainer4Data = {
            children: "英文名称",
        };

        const btnText724Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc,fawrgtqfgasdfasdffafddf, 96%",
            className: "btn_text-20-1",
        };

        const inputGivenInfoLarge1Data = {
            inputSubtitleContainerProps: inputSubtitleContainer4Data,
            btnText7Props: btnText724Data,
        };

        const inputSubtitleContainer5Data = {
            children: "中文名称",
        };

        const btnText725Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-20",
        };

        const inputGivenInfoLarge2Data = {
            inputSubtitleContainerProps: inputSubtitleContainer5Data,
            btnText7Props: btnText725Data,
        };

        const inputSubtitleContainer6Data = {
            children: "发布类型",
        };

        const btnText726Data = {
            children: "项目需求",
        };

        const inputGivenInfoSmall43Data = {
            inputSubtitleContainerProps: inputSubtitleContainer6Data,
            btnText7Props: btnText726Data,
        };

        const inputSubtitleContainer7Data = {
            children: "营销编号",
        };

        const btnText727Data = {
            children: "246461",
        };

        const inputGivenInfoSmall44Data = {
            inputSubtitleContainerProps: inputSubtitleContainer7Data,
            btnText7Props: btnText727Data,
        };

        const inputSubtitleContainer8Data = {
            children: "产品包装",
        };

        const btnText728Data = {
            children: "53135135",
        };

        const inputGivenInfoSmall45Data = {
            inputSubtitleContainerProps: inputSubtitleContainer8Data,
            btnText7Props: btnText728Data,
        };

        const inputSubtitleContainer22Data = {
            children: "数量",
        };

        const btnText729Data = {
            children: "16",
        };

        const inputGivenInfoSmall61Data = {
            inputSubtitleContainer2Props: inputSubtitleContainer22Data,
            btnText7Props: btnText729Data,
        };

        const inputSubtitleContainer422Data = {
            children: "目标价",
        };

        const btnText7210Data = {
            children: "16",
        };

        const inputGivenInfoSmall71Data = {
            inputSubtitleContainer4Props: inputSubtitleContainer422Data,
            btnText7Props: btnText7210Data,
        };

        const inputSubtitleContainer423Data = {
            children: "竞争价",
        };

        const btnText7211Data = {
            children: "14",
        };

        const inputGivenInfoSmall72Data = {
            inputSubtitleContainer4Props: inputSubtitleContainer423Data,
            btnText7Props: btnText7211Data,
        };

        const inputSubtitleContainer9Data = {
            children: "竞争公司",
        };

        const btnText7212Data = {
            children: "XXX",
        };

        const inputGivenInfoSmall46Data = {
            inputSubtitleContainerProps: inputSubtitleContainer9Data,
            btnText7Props: btnText7212Data,
        };

        const inputSubtitleContainer32Data = {
            children: "特殊指标要求",
        };

        const btnText7213Data = {
            children: "无",
        };

        const inputGivenInfoSmall8Data = {
            inputSubtitleContainer3Props: inputSubtitleContainer32Data,
            btnText7Props: btnText7213Data,
        };

        const inputSubtitleContainer10Data = {
            children: "纯度要求",
        };

        const btnText7214Data = {
            children: "99%-99.999%",
        };

        const inputGivenInfoSmall47Data = {
            inputSubtitleContainerProps: inputSubtitleContainer10Data,
            btnText7Props: btnText7214Data,
        };

        const inputSubtitleContainer11Data = {
            children: "是否定制",
        };

        const btnText7215Data = {
            children: "否",
        };

        const inputGivenInfoSmall48Data = {
            inputSubtitleContainerProps: inputSubtitleContainer11Data,
            btnText7Props: btnText7215Data,
        };

        const btnText7216Data = {
            children: "不需要",
        };

        const inputGivenInfoSmall9Data = {
            subtitle: "Specification",
            btnText7Props: btnText7216Data,
        };

        const inputSubtitleContainer62Data = {
            children: "MSDS",
        };

        const btnText7217Data = {
            children: "不需要",
        };

        const inputGivenInfoSmall10Data = {
            inputSubtitleContainer6Props: inputSubtitleContainer62Data,
            btnText7Props: btnText7217Data,
        };

        const inputSubtitleContainer12Data = {
            children: "小样需求",
        };

        const btnText7218Data = {
            children: "无",
        };

        const inputGivenInfoSmall49Data = {
            inputSubtitleContainerProps: inputSubtitleContainer12Data,
            btnText7Props: btnText7218Data,
        };

        const inputSubtitleContainer23Data = {
            children: "回单",
        };

        const btnText7219Data = {
            children: "否",
        };

        const inputGivenInfoSmall62Data = {
            inputSubtitleContainer2Props: inputSubtitleContainer23Data,
            btnText7Props: btnText7219Data,
        };

        const inputSubtitleContainer424Data = {
            children: "报价人",
        };

        const btnText7220Data = {
            children: "张三",
        };

        const inputGivenInfoSmall73Data = {
            inputSubtitleContainer4Props: inputSubtitleContainer424Data,
            btnText7Props: btnText7220Data,
        };

        const inputSubtitleContainer24Data = {
            children: "销售",
        };

        const btnText7221Data = {
            children: "李四",
        };

        const inputGivenInfoSmall63Data = {
            inputSubtitleContainer2Props: inputSubtitleContainer24Data,
            btnText7Props: btnText7221Data,
        };

        const inputSubtitleContainer13Data = {
            children: "处理状态",
        };

        const btnText624Data = {
            children: "待研发报价",
        };

        const inputGivenInfoSmall11Data = {
            inputSubtitleContainerProps: inputSubtitleContainer13Data,
            btnText6Props: btnText624Data,
        };

        const inputSubtitleContainer25Data = {
            children: "备注",
        };

        const btnText7222Data = {
            children: "请联系客服",
            className: "btn_text-20",
        };

        const categoryTitle42Data = {
            categorytitle: "其他纯度",
        };

        const inputSubtitleContainer14Data = {
            children: "其他纯度",
        };

        const inputSmall1Data = {
            inputSubtitleContainerProps: inputSubtitleContainer14Data,
        };

        const inputSubtitleContainer26Data = {
            children: "价格",
        };

        const inputSmall21Data = {
            inputSubtitleContainer2Props: inputSubtitleContainer26Data,
        };

        const uploadWindowSmall1Data = {
            text_Label: "增加其他浓度选项",
        };

        const uploadWindowMedium1Data = {
            uploadWindowSmallProps: uploadWindowSmall1Data,
        };

        const categoryTitle43Data = {
            categorytitle: "其他产品信息",
        };

        const uploadWindowLarge2Data = {
            className: "upload_window_large-1",
        };

        const categoryContainer1Data = {
            categoryTitle4Props: categoryTitle43Data,
            uploadWindowLargeProps: uploadWindowLarge2Data,
        };

        const btn222Data = {
            children: "保存",
        };

        const btnContainer1Data = {
            btn2Props: btn222Data,
        };

        const qrcodeContainer4Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText2234Data = {
            children: "公司简介",
        };

        const btnText2235Data = {
            children: "企业承诺",
        };

        const btnText2236Data = {
            children: "合作品牌",
        };

        const btnText2237Data = {
            children: "招贤纳士",
        };

        const jkInfo4Data = {
            btnText21Props: btnText2234Data,
            btnText22Props: btnText2235Data,
            btnText23Props: btnText2236Data,
            btnText24Props: btnText2237Data,
        };

        const btnText2238Data = {
            children: "资讯中心",
        };

        const btnText2239Data = {
            children: "安全说明书(SDS)",
        };

        const btnText2240Data = {
            children: "产品",
        };

        const readmoreInfo4Data = {
            btnText21Props: btnText2238Data,
            btnText22Props: btnText2239Data,
            btnText23Props: btnText2240Data,
        };

        const btnText2241Data = {
            children: "百灵威资源中心",
        };

        const btnText2242Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText2243Data = {
            children: "电话：010-80795999",
        };

        const btnText2244Data = {
            children: "传真：010-80793233",
        };

        const footer4Data = {
            className: "footer-3",
            qrcodeContainerProps: qrcodeContainer4Data,
            jkInfoProps: jkInfo4Data,
            readmoreInfoProps: readmoreInfo4Data,
            btnText21Props: btnText2241Data,
            btnText22Props: btnText2242Data,
            btnText23Props: btnText2243Data,
            btnText24Props: btnText2244Data,
        };

        const inquiryInquieyItemData = {
            header3Props: header33Data,
            nav82Props: nav821Data,
            titleContainerProps: titleContainer3Data,
            categoryTitle41Props: categoryTitle41Data,
            inputGivenInfoSmall1Props: inputGivenInfoSmall1Data,
            inputGivenInfoSmall2Props: inputGivenInfoSmall2Data,
            inputGivenInfoSmall3Props: inputGivenInfoSmall3Data,
            inputGivenInfoSmall41Props: inputGivenInfoSmall41Data,
            inputGivenInfoSmall42Props: inputGivenInfoSmall42Data,
            inputGivenInfoSmall5Props: inputGivenInfoSmall5Data,
            inputGivenInfoLarge1Props: inputGivenInfoLarge1Data,
            inputGivenInfoLarge2Props: inputGivenInfoLarge2Data,
            inputGivenInfoSmall43Props: inputGivenInfoSmall43Data,
            inputGivenInfoSmall44Props: inputGivenInfoSmall44Data,
            inputGivenInfoSmall45Props: inputGivenInfoSmall45Data,
            inputGivenInfoSmall61Props: inputGivenInfoSmall61Data,
            inputGivenInfoSmall71Props: inputGivenInfoSmall71Data,
            inputGivenInfoSmall72Props: inputGivenInfoSmall72Data,
            inputGivenInfoSmall46Props: inputGivenInfoSmall46Data,
            inputGivenInfoSmall8Props: inputGivenInfoSmall8Data,
            inputGivenInfoSmall47Props: inputGivenInfoSmall47Data,
            inputGivenInfoSmall48Props: inputGivenInfoSmall48Data,
            inputGivenInfoSmall9Props: inputGivenInfoSmall9Data,
            inputGivenInfoSmall10Props: inputGivenInfoSmall10Data,
            inputGivenInfoSmall49Props: inputGivenInfoSmall49Data,
            inputGivenInfoSmall62Props: inputGivenInfoSmall62Data,
            inputGivenInfoSmall73Props: inputGivenInfoSmall73Data,
            inputGivenInfoSmall63Props: inputGivenInfoSmall63Data,
            inputGivenInfoSmall2Props2: inputGivenInfoSmall11Data,
            inputSubtitleContainer2Props: inputSubtitleContainer25Data,
            btnText72Props: btnText7222Data,
            categoryTitle42Props: categoryTitle42Data,
            inputSmallProps: inputSmall1Data,
            inputSmall2Props: inputSmall21Data,
            uploadWindowMediumProps: uploadWindowMedium1Data,
            categoryContainerProps: categoryContainer1Data,
            btnContainerProps: btnContainer1Data,
            footerProps: footer4Data,
        };

        const logoContainer5Data = {
            jK: "/img/j-k@2x.png",
            className: "logo_container-4",
        };

        const header34Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer5Data,
        };

        const navItem11Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const navItem12Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item-3",
        };

        const clipboardDarkGrey4Data = {
            src: "/img/subtract@2x.png",
        };

        const component16Data = {
            clipboardDarkGreyProps: clipboardDarkGrey4Data,
        };

        const navItem25Data = {
            component1Props: component16Data,
        };

        const subnavContainer4Data = {
            line4: "/img/line-4@2x.png",
            navItem1Props: navItem11Data,
            navItem2Props: navItem12Data,
            navItem2Props2: navItem25Data,
        };

        const component124Data = {
            overlapGroup: "/img/rectangle-2@2x.png",
            subtract: "/img/subtract-45@2x.png",
        };

        const navItem34Data = {
            component12Props: component124Data,
        };

        const component134Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem1024Data = {
            component13Props: component134Data,
        };

        const iconRegular44Data = {
            src: "/img/subtract-47@2x.png",
            className: "",
        };

        const navItem524Data = {
            component14Props: iconRegular44Data,
        };

        const subnavContainer324Data = {
            navItem3Props: navItem34Data,
            navItem102Props: navItem1024Data,
            navItem52Props: navItem524Data,
        };

        const iconRegular54Data = {
            vector11: "/img/vector-11-2@2x.png",
            subtract: "/img/subtract-18@2x.png",
            vector12: "/img/vector-12-2@2x.png",
        };

        const navItem1522Data = {
            iconRegular5Props: iconRegular54Data,
        };

        const iconRegular64Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem73Data = {
            iconRegular6Props: iconRegular64Data,
        };

        const iconRegular74Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-67",
        };

        const navItem83Data = {
            iconRegular7Props: iconRegular74Data,
        };

        const nav822Data = {
            subnavContainerProps: subnavContainer4Data,
            subnavContainer3Props: subnavContainer324Data,
            navItem15Props: navItem1522Data,
            navItem7Props: navItem73Data,
            navItem8Props: navItem83Data,
        };

        const titleContainer4Data = {
            children: "在线报价",
        };

        const textItemContainer1Data = {
            number: "2",
            text59: "个询价",
        };

        const categoryTitle51Data = {
            text: "报价未通过，请联系客服",
        };

        const btnCheckbox223Data = {
            className: "btn_checkbox",
        };

        const textButton4217Data = {
            children: "45135151531",
        };

        const textButton5233Data = {
            children: "2023/6/27",
        };

        const textButton4218Data = {
            children: "351351351",
            className: "btn_text-17",
        };

        const textButton5234Data = {
            children: "351351351",
        };

        const textButton5235Data = {
            children: "南圆圆",
        };

        const textButton5236Data = {
            children: "齐姝燕",
        };

        const inquiryItem1Data = {
            btnCheckbox2Props: btnCheckbox223Data,
            btnText51Props: textButton4217Data,
            textButton1Props: textButton5233Data,
            btnText52Props: textButton4218Data,
            textButton2Props: textButton5234Data,
            textButton3Props: textButton5235Data,
            textButton4Props: textButton5236Data,
        };

        const btnCheckbox224Data = {
            className: "btn_checkbox",
        };

        const textButton4219Data = {
            children: "45135151531",
        };

        const textButton5237Data = {
            children: "2023/6/27",
        };

        const textButton4220Data = {
            children: "351351351",
            className: "btn_text-17",
        };

        const textButton5238Data = {
            children: "351351351",
        };

        const textButton5239Data = {
            children: "南圆圆",
        };

        const textButton5240Data = {
            children: "齐姝燕",
        };

        const inquiryItem2Data = {
            btnCheckbox2Props: btnCheckbox224Data,
            btnText51Props: textButton4219Data,
            textButton1Props: textButton5237Data,
            btnText52Props: textButton4220Data,
            textButton2Props: textButton5238Data,
            textButton3Props: textButton5239Data,
            textButton4Props: textButton5240Data,
        };

        const categoryTitle61Data = {
            children: "进行中",
        };

        const btnCheckbox225Data = {
            className: "btn_checkbox",
        };

        const textButton4221Data = {
            children: "45135151531",
        };

        const textButton5241Data = {
            children: "2023/6/27",
        };

        const textButton4222Data = {
            children: "351351351",
            className: "btn_text-17",
        };

        const textButton5242Data = {
            children: "351351351",
        };

        const textButton5243Data = {
            children: "南圆圆",
        };

        const textButton5244Data = {
            children: "齐姝燕",
        };

        const inquiryItem3Data = {
            btnCheckbox2Props: btnCheckbox225Data,
            btnText51Props: textButton4221Data,
            textButton1Props: textButton5241Data,
            btnText52Props: textButton4222Data,
            textButton2Props: textButton5242Data,
            textButton3Props: textButton5243Data,
            textButton4Props: textButton5244Data,
        };

        const btnCheckbox226Data = {
            className: "btn_checkbox",
        };

        const textButton4223Data = {
            children: "45135151531",
        };

        const textButton5245Data = {
            children: "2023/6/27",
        };

        const textButton4224Data = {
            children: "351351351",
            className: "btn_text-17",
        };

        const textButton5246Data = {
            children: "351351351",
        };

        const textButton5247Data = {
            children: "南圆圆",
        };

        const textButton5248Data = {
            children: "齐姝燕",
        };

        const inquiryItem4Data = {
            btnCheckbox2Props: btnCheckbox226Data,
            btnText51Props: textButton4223Data,
            textButton1Props: textButton5245Data,
            btnText52Props: textButton4224Data,
            textButton2Props: textButton5246Data,
            textButton3Props: textButton5247Data,
            textButton4Props: textButton5248Data,
        };

        const btnCheckbox227Data = {
            className: "btn_checkbox",
        };

        const textButton4225Data = {
            children: "45135151531",
        };

        const textButton5249Data = {
            children: "2023/6/27",
        };

        const textButton4226Data = {
            children: "351351351",
            className: "btn_text-17",
        };

        const textButton5250Data = {
            children: "351351351",
        };

        const textButton5251Data = {
            children: "南圆圆",
        };

        const textButton5252Data = {
            children: "齐姝燕",
        };

        const inquiryItem5Data = {
            btnCheckbox2Props: btnCheckbox227Data,
            btnText51Props: textButton4225Data,
            textButton1Props: textButton5249Data,
            btnText52Props: textButton4226Data,
            textButton2Props: textButton5250Data,
            textButton3Props: textButton5251Data,
            textButton4Props: textButton5252Data,
        };

        const btnCheckbox228Data = {
            className: "btn_checkbox",
        };

        const textButton4227Data = {
            children: "45135151531",
        };

        const textButton5253Data = {
            children: "2023/6/27",
        };

        const textButton4228Data = {
            children: "351351351",
            className: "btn_text-17",
        };

        const textButton5254Data = {
            children: "351351351",
        };

        const textButton5255Data = {
            children: "南圆圆",
        };

        const textButton5256Data = {
            children: "齐姝燕",
        };

        const inquiryItem6Data = {
            btnCheckbox2Props: btnCheckbox228Data,
            btnText51Props: textButton4227Data,
            textButton1Props: textButton5253Data,
            btnText52Props: textButton4228Data,
            textButton2Props: textButton5254Data,
            textButton3Props: textButton5255Data,
            textButton4Props: textButton5256Data,
        };

        const btn527Data = {
            children: "1",
        };

        const btn528Data = {
            children: "2",
        };

        const btn529Data = {
            children: "3",
        };

        const btn5210Data = {
            children: "...",
        };

        const btn5211Data = {
            children: "11",
        };

        const btn5212Data = {
            children: "12",
        };

        const navPagenumber2Data = {
            btn51Props: btn527Data,
            btn52Props: btn528Data,
            btn53Props: btn529Data,
            btn54Props: btn5210Data,
            btn55Props: btn5211Data,
            btn56Props: btn5212Data,
        };

        const qrcodeContainer5Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText2245Data = {
            children: "公司简介",
        };

        const btnText2246Data = {
            children: "企业承诺",
        };

        const btnText2247Data = {
            children: "合作品牌",
        };

        const btnText2248Data = {
            children: "招贤纳士",
        };

        const jkInfo5Data = {
            btnText21Props: btnText2245Data,
            btnText22Props: btnText2246Data,
            btnText23Props: btnText2247Data,
            btnText24Props: btnText2248Data,
        };

        const btnText2249Data = {
            children: "资讯中心",
        };

        const btnText2250Data = {
            children: "安全说明书(SDS)",
        };

        const btnText2251Data = {
            children: "产品",
        };

        const readmoreInfo5Data = {
            btnText21Props: btnText2249Data,
            btnText22Props: btnText2250Data,
            btnText23Props: btnText2251Data,
        };

        const btnText2252Data = {
            children: "百灵威资源中心",
        };

        const btnText2253Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText2254Data = {
            children: "电话：010-80795999",
        };

        const btnText2255Data = {
            children: "传真：010-80793233",
        };

        const footer5Data = {
            className: "footer-4",
            qrcodeContainerProps: qrcodeContainer5Data,
            jkInfoProps: jkInfo5Data,
            readmoreInfoProps: readmoreInfo5Data,
            btnText21Props: btnText2252Data,
            btnText22Props: btnText2253Data,
            btnText23Props: btnText2254Data,
            btnText24Props: btnText2255Data,
        };

        const inquiryData = {
            text74: "询价单号",
            text70: "到达时间",
            text69: "项目号",
            cas: "CAS",
            text72: "报价人",
            text73: "销售",
            text71: "处理状态",
            header3Props: header34Data,
            nav82Props: nav822Data,
            titleContainerProps: titleContainer4Data,
            textItemContainerProps: textItemContainer1Data,
            categoryTitle5Props: categoryTitle51Data,
            inquiryItem1Props: inquiryItem1Data,
            inquiryItem2Props: inquiryItem2Data,
            categoryTitle6Props: categoryTitle61Data,
            inquiryItem3Props: inquiryItem3Data,
            inquiryItem4Props: inquiryItem4Data,
            inquiryItem5Props: inquiryItem5Data,
            inquiryItem6Props: inquiryItem6Data,
            navPagenumberProps: navPagenumber2Data,
            footerProps: footer5Data,
        };

        const logoContainer6Data = {
            jK: "/img/j-k@2x.png",
            className: "logo_container-5",
        };

        const header35Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer6Data,
        };

        const navItem13Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const navItem14Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item-4",
        };

        const clipboardDarkGrey5Data = {
            src: "/img/subtract@2x.png",
        };

        const component17Data = {
            clipboardDarkGreyProps: clipboardDarkGrey5Data,
        };

        const navItem26Data = {
            component1Props: component17Data,
        };

        const subnavContainer5Data = {
            line4: "/img/line-4@2x.png",
            navItem1Props: navItem13Data,
            navItem2Props: navItem14Data,
            navItem2Props2: navItem26Data,
        };

        const component125Data = {
            overlapGroup: "/img/rectangle-2@2x.png",
            subtract: "/img/subtract-1@2x.png",
        };

        const navItem35Data = {
            component12Props: component125Data,
        };

        const component135Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem1025Data = {
            component13Props: component135Data,
        };

        const iconRegular45Data = {
            src: "/img/subtract-10@2x.png",
        };

        const navItem153Data = {
            text_Label: "历史记录",
            component14Props: iconRegular45Data,
        };

        const iconRegular55Data = {
            vector11: "/img/vector-11@2x.png",
            subtract: "/img/subtract-4@2x.png",
            vector12: "/img/vector-12@2x.png",
        };

        const navItem63Data = {
            iconRegular5Props: iconRegular55Data,
        };

        const iconRegular65Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem74Data = {
            iconRegular6Props: iconRegular65Data,
        };

        const iconRegular75Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-68",
        };

        const navItem84Data = {
            iconRegular7Props: iconRegular75Data,
        };

        const subnavContainer22Data = {
            navItem6Props: navItem63Data,
            navItem7Props: navItem74Data,
            navItem8Props: navItem84Data,
        };

        const nav83Data = {
            text178: "产品管理",
            line4: "/img/line-4@2x.png",
            subnavContainerProps: subnavContainer5Data,
            navItem3Props: navItem35Data,
            navItem102Props: navItem1025Data,
            navItem15Props: navItem153Data,
            frame281Props: subnavContainer22Data,
        };

        const titleContainer5Data = {
            children: "历史记录",
        };

        const button622Data = {
            text_Label: "最近3个月",
            component1: "/img/component-1-6@2x.png",
        };

        const btn223Data = {
            children: "搜索",
        };

        const searchBar222Data = {
            component1: "/img/component-1-7@2x.png",
            text_Label: "输入产品名称进行搜索",
            button2Props: btn223Data,
        };

        const frame4372Data = {
            buttonProps: button622Data,
            searchBar2Props: searchBar222Data,
        };

        const btnFrameless2Data = {
            children: "最新添加",
        };

        const framelessButton422Data = {
            children: "已删除",
        };

        const framelessButton423Data = {
            children: "最近修改",
        };

        const btn42Data = {
            text_Label: "按时间顺序排列",
        };

        const historySubNav2Data = {
            number: "4",
            button32Props: btn42Data,
        };

        const categoryTitle3233Data = {
            text5: "12",
        };

        const categoryTitle223Data = {
            categoryTitle3Props: categoryTitle3233Data,
        };

        const btnText101Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText102Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-21-2",
        };

        const productName1Data = {
            btnText1Props: btnText101Data,
            btnText2Props: btnText102Data,
        };

        const btnText103Data = {
            children: "351351351",
            className: "btn_text-22-1",
        };

        const rightItem1Data = {
            text182: "产品编号",
            textButton22Props: btnText103Data,
        };

        const btnText104Data = {
            children: "1543516-1",
            className: "btn_text-22-2",
        };

        const rightItem2Data = {
            text182: "CAS",
            textButton22Props: btnText104Data,
        };

        const btnText105Data = {
            children: "1L",
            className: "btn_text-22-3",
        };

        const rightItem3Data = {
            text182: "包装",
            textButton22Props: btnText105Data,
        };

        const dataContainer1Data = {
            rightItem1Props: rightItem1Data,
            rightItem2Props: rightItem2Data,
            rightItem3Props: rightItem3Data,
        };

        const productHistoryItem1Data = {
            productNameProps: productName1Data,
            dataContainerProps: dataContainer1Data,
        };

        const btnText106Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText107Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-21-4",
        };

        const productName2Data = {
            btnText1Props: btnText106Data,
            btnText2Props: btnText107Data,
        };

        const btnText108Data = {
            children: "351351351",
            className: "btn_text-22-4",
        };

        const rightItem4Data = {
            text182: "产品编号",
            textButton22Props: btnText108Data,
        };

        const btnText109Data = {
            children: "1543516-1",
            className: "btn_text-22-5",
        };

        const rightItem5Data = {
            text182: "CAS",
            textButton22Props: btnText109Data,
        };

        const btnText1010Data = {
            children: "1L",
            className: "btn_text-22-6",
        };

        const rightItem6Data = {
            text182: "包装",
            textButton22Props: btnText1010Data,
        };

        const dataContainer2Data = {
            rightItem1Props: rightItem4Data,
            rightItem2Props: rightItem5Data,
            rightItem3Props: rightItem6Data,
        };

        const productHistoryItem2Data = {
            className: "product-history-item-2",
            productNameProps: productName2Data,
            dataContainerProps: dataContainer2Data,
        };

        const categoryTitle3234Data = {
            text5: "09",
        };

        const categoryTitle224Data = {
            categoryTitle3Props: categoryTitle3234Data,
        };

        const btnText1011Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1012Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-21-5",
        };

        const productName3Data = {
            btnText1Props: btnText1011Data,
            btnText2Props: btnText1012Data,
        };

        const btnText1013Data = {
            children: "351351351",
            className: "btn_text-22-7",
        };

        const rightItem7Data = {
            text182: "产品编号",
            textButton22Props: btnText1013Data,
        };

        const btnText1014Data = {
            children: "1543516-1",
            className: "btn_text-22-8",
        };

        const rightItem8Data = {
            text182: "CAS",
            textButton22Props: btnText1014Data,
        };

        const btnText1015Data = {
            children: "1L",
            className: "btn_text-22-9",
        };

        const rightItem9Data = {
            text182: "包装",
            textButton22Props: btnText1015Data,
        };

        const dataContainer3Data = {
            rightItem1Props: rightItem7Data,
            rightItem2Props: rightItem8Data,
            rightItem3Props: rightItem9Data,
        };

        const productHistoryItem3Data = {
            className: "product-history-item-3",
            productNameProps: productName3Data,
            dataContainerProps: dataContainer3Data,
        };

        const btnText1016Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1017Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-21",
        };

        const productName4Data = {
            btnText1Props: btnText1016Data,
            btnText2Props: btnText1017Data,
        };

        const btnText1018Data = {
            children: "351351351",
            className: "btn_text-22-10",
        };

        const rightItem10Data = {
            text182: "产品编号",
            textButton22Props: btnText1018Data,
        };

        const btnText1019Data = {
            children: "1543516-1",
            className: "btn_text-22-11",
        };

        const rightItem11Data = {
            text182: "CAS",
            textButton22Props: btnText1019Data,
        };

        const btnText1020Data = {
            children: "1L",
            className: "btn_text-22",
        };

        const rightItem12Data = {
            text182: "包装",
            textButton22Props: btnText1020Data,
        };

        const dataContainer4Data = {
            rightItem1Props: rightItem10Data,
            rightItem2Props: rightItem11Data,
            rightItem3Props: rightItem12Data,
        };

        const productHistoryItem4Data = {
            className: "product-history-item",
            productNameProps: productName4Data,
            dataContainerProps: dataContainer4Data,
        };

        const btn5213Data = {
            children: "1",
        };

        const btn5214Data = {
            children: "2",
        };

        const btn5215Data = {
            children: "3",
        };

        const btn5216Data = {
            children: "...",
        };

        const btn5217Data = {
            children: "11",
        };

        const btn5218Data = {
            children: "12",
        };

        const navPagenumber3Data = {
            btn51Props: btn5213Data,
            btn52Props: btn5214Data,
            btn53Props: btn5215Data,
            btn54Props: btn5216Data,
            btn55Props: btn5217Data,
            btn56Props: btn5218Data,
        };

        const qrcodeContainer6Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText2256Data = {
            children: "公司简介",
        };

        const btnText2257Data = {
            children: "企业承诺",
        };

        const btnText2258Data = {
            children: "合作品牌",
        };

        const btnText2259Data = {
            children: "招贤纳士",
        };

        const jkInfo6Data = {
            btnText21Props: btnText2256Data,
            btnText22Props: btnText2257Data,
            btnText23Props: btnText2258Data,
            btnText24Props: btnText2259Data,
        };

        const btnText2260Data = {
            children: "资讯中心",
        };

        const btnText2261Data = {
            children: "安全说明书(SDS)",
        };

        const btnText2262Data = {
            children: "产品",
        };

        const readmoreInfo6Data = {
            btnText21Props: btnText2260Data,
            btnText22Props: btnText2261Data,
            btnText23Props: btnText2262Data,
        };

        const btnText2263Data = {
            children: "百灵威资源中心",
        };

        const btnText2264Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText2265Data = {
            children: "电话：010-80795999",
        };

        const btnText2266Data = {
            children: "传真：010-80793233",
        };

        const footer6Data = {
            className: "footer-5",
            qrcodeContainerProps: qrcodeContainer6Data,
            jkInfoProps: jkInfo6Data,
            readmoreInfoProps: readmoreInfo6Data,
            btnText21Props: btnText2263Data,
            btnText22Props: btnText2264Data,
            btnText23Props: btnText2265Data,
            btnText24Props: btnText2266Data,
        };

        const historyData = {
            line6: "/img/line-6.png",
            header3Props: header35Data,
            navProps: nav83Data,
            titleContainerProps: titleContainer5Data,
            searchContainerProps: frame4372Data,
            btnFramelessProps: btnFrameless2Data,
            btnFrameless21Props: framelessButton422Data,
            btnFrameless22Props: framelessButton423Data,
            historySubNavProps: historySubNav2Data,
            categoryTitle1Props: categoryTitle223Data,
            productHistoryItem1Props: productHistoryItem1Data,
            productHistoryItem2Props: productHistoryItem2Data,
            categoryTitle2Props: categoryTitle224Data,
            productHistoryItem3Props: productHistoryItem3Data,
            productHistoryItem4Props: productHistoryItem4Data,
            navPagenumberProps: navPagenumber3Data,
            footerProps: footer6Data,
        };

        const logoContainer7Data = {
            jK: "/img/j-k@2x.png",
            className: "logo_container-6",
        };

        const header36Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer7Data,
        };

        const navItem15Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const navItem16Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item-5",
        };

        const clipboardDarkGrey6Data = {
            src: "/img/subtract@2x.png",
        };

        const component18Data = {
            clipboardDarkGreyProps: clipboardDarkGrey6Data,
        };

        const navItem27Data = {
            component1Props: component18Data,
        };

        const subnavContainer6Data = {
            line4: "/img/line-4@2x.png",
            navItem1Props: navItem15Data,
            navItem2Props: navItem16Data,
            navItem2Props2: navItem27Data,
        };

        const component126Data = {
            overlapGroup: "/img/rectangle-2@2x.png",
            subtract: "/img/subtract-1@2x.png",
        };

        const navItem36Data = {
            component12Props: component126Data,
        };

        const component136Data = {
            subtract: "/img/subtract-2@2x.png",
            vector54: "/img/vector-54@2x.png",
            vector55: "/img/vector-55@2x.png",
        };

        const navItem163Data = {
            text_Label: "产品批量上传",
            component13Props: component136Data,
        };

        const iconRegular46Data = {
            src: "/img/subtract-3@2x.png",
            className: "",
        };

        const navItem525Data = {
            component14Props: iconRegular46Data,
        };

        const iconRegular56Data = {
            vector11: "/img/vector-11@2x.png",
            subtract: "/img/subtract-4@2x.png",
            vector12: "/img/vector-12@2x.png",
        };

        const navItem64Data = {
            iconRegular5Props: iconRegular56Data,
        };

        const iconRegular66Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem75Data = {
            iconRegular6Props: iconRegular66Data,
        };

        const iconRegular76Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-69",
        };

        const navItem85Data = {
            iconRegular7Props: iconRegular76Data,
        };

        const subnavContainer23Data = {
            navItem6Props: navItem64Data,
            navItem7Props: navItem75Data,
            navItem8Props: navItem85Data,
        };

        const nav93Data = {
            text198: "产品管理",
            line4: "/img/line-4@2x.png",
            subnavContainerProps: subnavContainer6Data,
            navItem3Props: navItem36Data,
            navItem16Props: navItem163Data,
            navItem5Props: navItem525Data,
            frame281Props: subnavContainer23Data,
        };

        const titleContainer6Data = {
            children: "产品批量上传",
            className: "title_container-5",
        };

        const button623Data = {
            text_Label: "下载Excel模板",
            component1: "/img/component-1-2@2x.png",
        };

        const categoryTitle2Data = {
            categorytitle: "填写Excel模板，上传以新建产品或更新产品信息",
            btnProps: button623Data,
        };

        const btnText31Data = {
            children: "标准填写格式",
        };

        const adviceContainer1Data = {
            text30: "了解更多关于",
            btnText3Props: btnText31Data,
        };

        const qrcodeContainer7Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText2267Data = {
            children: "公司简介",
        };

        const btnText2268Data = {
            children: "企业承诺",
        };

        const btnText2269Data = {
            children: "合作品牌",
        };

        const btnText2270Data = {
            children: "招贤纳士",
        };

        const jkInfo7Data = {
            btnText21Props: btnText2267Data,
            btnText22Props: btnText2268Data,
            btnText23Props: btnText2269Data,
            btnText24Props: btnText2270Data,
        };

        const btnText2271Data = {
            children: "资讯中心",
        };

        const btnText2272Data = {
            children: "安全说明书(SDS)",
        };

        const btnText2273Data = {
            children: "产品",
        };

        const readmoreInfo7Data = {
            btnText21Props: btnText2271Data,
            btnText22Props: btnText2272Data,
            btnText23Props: btnText2273Data,
        };

        const btnText2274Data = {
            children: "百灵威资源中心",
        };

        const btnText2275Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText2276Data = {
            children: "电话：010-80795999",
        };

        const btnText2277Data = {
            children: "传真：010-80793233",
        };

        const footer7Data = {
            className: "footer-6",
            qrcodeContainerProps: qrcodeContainer7Data,
            jkInfoProps: jkInfo7Data,
            readmoreInfoProps: readmoreInfo7Data,
            btnText21Props: btnText2274Data,
            btnText22Props: btnText2275Data,
            btnText23Props: btnText2276Data,
            btnText24Props: btnText2277Data,
        };

        const uploadMultiplesData = {
            header3Props: header36Data,
            nav2Props: nav93Data,
            titleContainerProps: titleContainer6Data,
            categoryTitle2Props: categoryTitle2Data,
            adviceContainerProps: adviceContainer1Data,
            footerProps: footer7Data,
        };

        const logoContainer8Data = {
            jK: "/img/j-k-logo-9@2x.png",
            className: "logo_container-7",
        };

        const header37Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer8Data,
        };

        const navItem17Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const navItem18Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item-6",
        };

        const clipboardDarkGrey7Data = {
            src: "/img/subtract@2x.png",
        };

        const component19Data = {
            clipboardDarkGreyProps: clipboardDarkGrey7Data,
        };

        const navItem28Data = {
            component1Props: component19Data,
        };

        const subnavContainer7Data = {
            line4: "/img/line-4@2x.png",
            navItem1Props: navItem17Data,
            navItem2Props: navItem18Data,
            navItem2Props2: navItem28Data,
        };

        const component127Data = {
            overlapGroup: "/img/rectangle-2-2@2x.png",
            subtract: "/img/subtract-17@2x.png",
            className: "icon_regular-24",
        };

        const navItem921Data = {
            component12Props: component127Data,
        };

        const component137Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem1026Data = {
            component13Props: component137Data,
        };

        const iconRegular47Data = {
            src: "/img/subtract-3@2x.png",
            className: "icon_regular-42",
        };

        const navItem526Data = {
            component14Props: iconRegular47Data,
        };

        const iconRegular57Data = {
            vector11: "/img/vector-11@2x.png",
            subtract: "/img/subtract-4@2x.png",
            vector12: "/img/vector-12@2x.png",
        };

        const navItem65Data = {
            iconRegular5Props: iconRegular57Data,
        };

        const iconRegular67Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem76Data = {
            iconRegular6Props: iconRegular67Data,
        };

        const iconRegular77Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-70",
        };

        const navItem86Data = {
            iconRegular7Props: iconRegular77Data,
        };

        const subnavContainer24Data = {
            navItem6Props: navItem65Data,
            navItem7Props: navItem76Data,
            navItem8Props: navItem86Data,
        };

        const menu81Data = {
            line4: "/img/line-4@2x.png",
            frame279Props: subnavContainer7Data,
            navItem3Props: navItem921Data,
            navItem102Props: navItem1026Data,
            navItem5Props: navItem526Data,
            frame281Props: subnavContainer24Data,
        };

        const titleContainer7Data = {
            children: "单个产品修改",
            className: "title_container-6",
        };

        const btnText32Data = {
            children: "标准填写格式",
        };

        const adviceContainer2Data = {
            text30: "了解关于",
            btnText3Props: btnText32Data,
        };

        const alertContainer1Data = {
            adviceContainerProps: adviceContainer2Data,
        };

        const categoryTitle32Data = {
            categorytitle: "基本信息",
            className: "category-title-5",
        };

        const inputSubtitleContainer15Data = {
            children: "英文名称",
        };

        const inputBoxSmall3Data = {
            className: "input-box_small-2",
        };

        const inputLargeData = {
            inputSubtitleContainerProps: inputSubtitleContainer15Data,
            inputSubtitleContainerProps2: inputBoxSmall3Data,
        };

        const inputSubtitleContainer16Data = {
            children: "产品编号",
        };

        const inputSmall3Data = {
            className: "btn_checkbox-4",
            inputSubtitleContainerProps: inputSubtitleContainer16Data,
        };

        const inputSubtitleContainer27Data = {
            children: "纯度",
        };

        const inputSmall22Data = {
            className: "btn_checkbox-4",
            inputSubtitleContainer2Props: inputSubtitleContainer27Data,
        };

        const inputSubtitleContainer33Data = {
            children: "保质期（月）",
        };

        const inputSmall32Data = {
            inputSubtitleContainer3Props: inputSubtitleContainer33Data,
        };

        const inputSubtitleContainer17Data = {
            children: "储存条件",
        };

        const inputSmall4Data = {
            className: "input_small",
            inputSubtitleContainerProps: inputSubtitleContainer17Data,
        };

        const inputSubtitleContainer28Data = {
            children: "包装",
        };

        const inputSmall23Data = {
            className: "input_small-2",
            inputSubtitleContainer2Props: inputSubtitleContainer28Data,
        };

        const inputSubtitleContainer18Data = {
            children: "其他纯度",
        };

        const inputSmall5Data = {
            className: "input_small",
            inputSubtitleContainerProps: inputSubtitleContainer18Data,
        };

        const categoryTitle44Data = {
            categorytitle: "其他信息",
        };

        const inputSubtitleContainer19Data = {
            children: "中文名称",
        };

        const inputSmall6Data = {
            className: "input_small",
            inputSubtitleContainerProps: inputSubtitleContainer19Data,
        };

        const inputSubtitleContainer425Data = {
            children: "分子量",
        };

        const inputSmall42Data = {
            inputSubtitleContainer4Props: inputSubtitleContainer425Data,
        };

        const inputSubtitleContainer29Data = {
            children: "闪点",
        };

        const inputSmall24Data = {
            className: "input_small-2",
            inputSubtitleContainer2Props: inputSubtitleContainer29Data,
        };

        const inputSubtitleContainer210Data = {
            children: "沸点",
        };

        const inputSmall25Data = {
            className: "input_small-2",
            inputSubtitleContainer2Props: inputSubtitleContainer210Data,
        };

        const inputSubtitleContainer20Data = {
            children: "标准包装",
        };

        const btnOption1Data = {
            option1: "是",
        };

        const btnOption2Data = {
            option1: "否",
        };

        const btnOptionCombination1Data = {
            btnOption1Props: btnOption1Data,
            btnOption2Props: btnOption2Data,
        };

        const inputOption1Data = {
            inputSubtitleContainerProps: inputSubtitleContainer20Data,
            btnOptionCombinationProps: btnOptionCombination1Data,
        };

        const inputSubtitleContainer426Data = {
            children: "分子式",
        };

        const inputSmall43Data = {
            inputSubtitleContainer4Props: inputSubtitleContainer426Data,
        };

        const inputSubtitleContainer211Data = {
            children: "熔点",
        };

        const inputSmall26Data = {
            className: "input_small-2",
            inputSubtitleContainer2Props: inputSubtitleContainer211Data,
        };

        const inputSubtitleContainer63Data = {
            children: "MFCD",
        };

        const inputSmall62Data = {
            inputSubtitleContainer6Props: inputSubtitleContainer63Data,
        };

        const categoryTitle45Data = {
            categorytitle: "价格相关",
        };

        const inputSubtitleContainer21Data = {
            children: "目录价格",
        };

        const inputSmall7Data = {
            className: "input_small",
            inputSubtitleContainerProps: inputSubtitleContainer21Data,
        };

        const inputSubtitleContainer30Data = {
            children: "结算价格",
        };

        const inputSmall8Data = {
            className: "input_small",
            inputSubtitleContainerProps: inputSubtitleContainer30Data,
        };

        const inputSubtitleContainer31Data = {
            children: "发票类型",
        };

        const btnOption3Data = {
            option1: "商业发票",
        };

        const btnOption4Data = {
            option1: "个人发票",
        };

        const btnOptionCombination2Data = {
            btnOption1Props: btnOption3Data,
            btnOption2Props: btnOption4Data,
        };

        const inputOption2Data = {
            inputSubtitleContainerProps: inputSubtitleContainer31Data,
            btnOptionCombinationProps: btnOptionCombination2Data,
        };

        const inputSubtitleContainer72Data = {
            children: "是否含运费",
        };

        const btnOption5Data = {
            option1: "是",
        };

        const btnOption6Data = {
            option1: "否",
        };

        const btnOptionCombination3Data = {
            btnOption1Props: btnOption5Data,
            btnOption2Props: btnOption6Data,
        };

        const inputOption22Data = {
            inputSubtitleContainer7Props: inputSubtitleContainer72Data,
            btnOptionCombinationProps: btnOptionCombination3Data,
        };

        const inputSubtitleContainer34Data = {
            children: "是否含税",
        };

        const btnOption7Data = {
            option1: "是",
        };

        const btnOption8Data = {
            option1: "否",
        };

        const btnOptionCombination4Data = {
            btnOption1Props: btnOption7Data,
            btnOption2Props: btnOption8Data,
        };

        const inputOption3Data = {
            inputSubtitleContainerProps: inputSubtitleContainer34Data,
            btnOptionCombinationProps: btnOptionCombination4Data,
        };

        const inputSubtitleContainer73Data = {
            children: "是否危险品",
        };

        const btnOption9Data = {
            option1: "是",
        };

        const btnOption10Data = {
            option1: "否",
        };

        const btnOptionCombination5Data = {
            btnOption1Props: btnOption9Data,
            btnOption2Props: btnOption10Data,
        };

        const inputOption23Data = {
            inputSubtitleContainer7Props: inputSubtitleContainer73Data,
            btnOptionCombinationProps: btnOptionCombination5Data,
        };

        const inputSubtitleContainer35Data = {
            children: "是否主营产品",
        };

        const btnOption11Data = {
            option1: "是",
        };

        const btnOption12Data = {
            option1: "否",
        };

        const btnOptionCombination6Data = {
            btnOption1Props: btnOption11Data,
            btnOption2Props: btnOption12Data,
        };

        const inputOption32Data = {
            inputSubtitleContainer3Props: inputSubtitleContainer35Data,
            btnOptionCombinationProps: btnOptionCombination6Data,
        };

        const inputSubtitleContainer36Data = {
            children: "是否优势产品",
        };

        const btnOption13Data = {
            option1: "是",
        };

        const btnOption14Data = {
            option1: "否",
        };

        const btnOptionCombination7Data = {
            btnOption1Props: btnOption13Data,
            btnOption2Props: btnOption14Data,
        };

        const inputOption33Data = {
            inputSubtitleContainer3Props: inputSubtitleContainer36Data,
            btnOptionCombinationProps: btnOptionCombination7Data,
        };

        const inputSubtitleContainer74Data = {
            children: "现货或定制",
        };

        const btnOption15Data = {
            option1: "现货",
        };

        const btnOption16Data = {
            option1: "定制",
        };

        const btnOptionCombination8Data = {
            btnOption1Props: btnOption15Data,
            btnOption2Props: btnOption16Data,
        };

        const inputOption24Data = {
            inputSubtitleContainer7Props: inputSubtitleContainer74Data,
            btnOptionCombinationProps: btnOptionCombination8Data,
        };

        const inputSubtitleContainer37Data = {
            children: "其他费用数量",
        };

        const inputSmall33Data = {
            inputSubtitleContainer3Props: inputSubtitleContainer37Data,
        };

        const inputSubtitleContainer38Data = {
            children: "目录币种",
        };

        const inputSmall9Data = {
            className: "input_small",
            inputSubtitleContainerProps: inputSubtitleContainer38Data,
        };

        const inputSubtitleContainer39Data = {
            children: "结算币种",
        };

        const inputSmall10Data = {
            className: "input_small",
            inputSubtitleContainerProps: inputSubtitleContainer39Data,
        };

        const inputSubtitleContainer40Data = {
            children: "销售价格",
        };

        const inputSmall11Data = {
            className: "input_small",
            inputSubtitleContainerProps: inputSubtitleContainer40Data,
        };

        const inputSubtitleContainer212Data = {
            children: "运费",
        };

        const inputSmall27Data = {
            className: "input_small-2",
            inputSubtitleContainer2Props: inputSubtitleContainer212Data,
        };

        const inputSubtitleContainer213Data = {
            children: "税率",
        };

        const inputSmall28Data = {
            className: "input_small-2",
            inputSubtitleContainer2Props: inputSubtitleContainer213Data,
        };

        const inputSubtitleContainer75Data = {
            children: "价格有效期",
        };

        const inputSmall72Data = {
            inputSubtitleContainer7Props: inputSubtitleContainer75Data,
        };

        const inputSubtitleContainer76Data = {
            children: "限制性标记",
        };

        const inputSmall73Data = {
            inputSubtitleContainer7Props: inputSubtitleContainer76Data,
        };

        const inputSubtitleContainer427Data = {
            children: "包装费",
        };

        const inputSmall44Data = {
            inputSubtitleContainer4Props: inputSubtitleContainer427Data,
        };

        const inputSubtitleContainer41Data = {
            children: "其他费用",
        };

        const inputSmall12Data = {
            className: "input_small",
            inputSubtitleContainerProps: inputSubtitleContainer41Data,
        };

        const inputSubtitleContainer214Data = {
            children: "备注",
        };

        const inputBoxSmall30Data = {
            className: "input-box_small-2",
        };

        const inputLarge2Data = {
            inputSubtitleContainer2Props: inputSubtitleContainer214Data,
            inputSubtitleContainer2Props2: inputBoxSmall30Data,
        };

        const categoryTitle46Data = {
            categorytitle: "产品证书",
        };

        const uploadWindowLarge4Data = {
            className: "upload_window_large-3",
        };

        const categoryContainer2Data = {
            className: "category_container-3",
            categoryTitle4Props: categoryTitle46Data,
            uploadWindowLargeProps: uploadWindowLarge4Data,
        };

        const btnText33Data = {
            children: "标准填写格式",
        };

        const adviceContainer3Data = {
            text30: "了解关于",
            btnText3Props: btnText33Data,
        };

        const alertContainer2Data = {
            adviceContainerProps: adviceContainer3Data,
        };

        const btn224Data = {
            children: "保存",
        };

        const btnContainer2Data = {
            btn2Props: btn224Data,
        };

        const qrcodeContainer8Data = {
            rectangle: "/img/rectangle-26@2x.png",
        };

        const btnText2278Data = {
            children: "公司简介",
        };

        const btnText2279Data = {
            children: "企业承诺",
        };

        const btnText2280Data = {
            children: "合作品牌",
        };

        const btnText2281Data = {
            children: "招贤纳士",
        };

        const jkInfo8Data = {
            btnText21Props: btnText2278Data,
            btnText22Props: btnText2279Data,
            btnText23Props: btnText2280Data,
            btnText24Props: btnText2281Data,
        };

        const btnText2282Data = {
            children: "资讯中心",
        };

        const btnText2283Data = {
            children: "安全说明书(SDS)",
        };

        const btnText2284Data = {
            children: "产品",
        };

        const readmoreInfo8Data = {
            btnText21Props: btnText2282Data,
            btnText22Props: btnText2283Data,
            btnText23Props: btnText2284Data,
        };

        const btnOption23Data = {
            children: "北京",
        };

        const btnOption32Data = {
            children: "上海",
        };

        const frame1491Data = {
            btnOption3Props: btnOption32Data,
        };

        const btnOption33Data = {
            children: "广州",
        };

        const frame1492Data = {
            btnOption3Props: btnOption33Data,
        };

        const btnOption34Data = {
            children: "香港",
        };

        const frame1493Data = {
            btnOption3Props: btnOption34Data,
        };

        const productInfoEditaddProductData = {
            prompt_Text: "您可以正常上传与保存产品信息，我们的客服会联系您XXXXXXXX",
            text12: "联系我们",
            text14: "|",
            text15: "|",
            text16: "|",
            x69A5100029: "北京市朝阳区北辰西路69号峻峰华亭A座5层 100029",
            qq4006667788: "电话(QQ): 400 666 7788",
            phone1: "电话：+86 10 59309000",
            phone2: "传真：+86 10 8284 9933",
            text17: "电子邮件：",
            jkinfoJkchemicalCom: "jkinfo@jkchemical.com",
            jkinfoJkSciCom: "jkinfo@jk-sci.com",
            header3Props: header37Data,
            menu8Props: menu81Data,
            frame381Props: titleContainer7Data,
            alertContainer1Props: alertContainer1Data,
            categoryTitle32Props: categoryTitle32Data,
            inputInformationLongProps: inputLargeData,
            inputInformation21Props: inputSmall3Data,
            inputInformation221Props: inputSmall22Data,
            inputInformation31Props: inputSmall32Data,
            inputInformation22Props: inputSmall4Data,
            inputInformation222Props: inputSmall23Data,
            inputInformation23Props: inputSmall5Data,
            categoryTitle421Props: categoryTitle44Data,
            inputInformation24Props: inputSmall6Data,
            inputInformation41Props: inputSmall42Data,
            inputInformation223Props: inputSmall24Data,
            inputInformation224Props: inputSmall25Data,
            inputOption1Props: inputOption1Data,
            inputInformation42Props: inputSmall43Data,
            inputInformation225Props: inputSmall26Data,
            inputSmall6Props: inputSmall62Data,
            categoryTitle422Props: categoryTitle45Data,
            inputInformation25Props: inputSmall7Data,
            inputInformation26Props: inputSmall8Data,
            inputOption2Props: inputOption2Data,
            inputOption21Props: inputOption22Data,
            inputOption3Props: inputOption3Data,
            inputOption22Props: inputOption23Data,
            inputOption31Props: inputOption32Data,
            inputOption32Props: inputOption33Data,
            inputOption23Props: inputOption24Data,
            inputInformation32Props: inputSmall33Data,
            inputInformation27Props: inputSmall9Data,
            inputInformation28Props: inputSmall10Data,
            inputInformation29Props: inputSmall11Data,
            inputInformation226Props: inputSmall27Data,
            inputInformation227Props: inputSmall28Data,
            inputInformation71Props: inputSmall72Data,
            inputInformation72Props: inputSmall73Data,
            inputInformation43Props: inputSmall44Data,
            inputInformation210Props: inputSmall12Data,
            inputInformationLong2Props: inputLarge2Data,
            frame382Props: categoryContainer2Data,
            alertContainer2Props: alertContainer2Data,
            frame382Props2: btnContainer2Data,
            qrcodeContainerProps: qrcodeContainer8Data,
            select3Props: jkInfo8Data,
            frame1493Props: readmoreInfo8Data,
            select3Props2: btnOption23Data,
            frame1491Props: frame1491Data,
            frame1492Props: frame1492Data,
            frame1493Props2: frame1493Data,
        };

        const logoContainer9Data = {
            jK: "/img/j-k-logo-4@2x.png",
            className: "logo_container-8",
        };

        const header38Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer9Data,
        };

        const navItem19Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const navItem20Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item-7",
        };

        const clipboardDarkGrey8Data = {
            src: "/img/subtract@2x.png",
        };

        const component110Data = {
            clipboardDarkGreyProps: clipboardDarkGrey8Data,
        };

        const navItem29Data = {
            component1Props: component110Data,
        };

        const subnavContainer8Data = {
            line4: "/img/line-4@2x.png",
            navItem1Props: navItem19Data,
            navItem2Props: navItem20Data,
            navItem2Props2: navItem29Data,
        };

        const component128Data = {
            overlapGroup: "/img/rectangle-2-2@2x.png",
            subtract: "/img/subtract-17@2x.png",
            className: "icon_regular-24",
        };

        const navItem922Data = {
            component12Props: component128Data,
        };

        const component138Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem1027Data = {
            component13Props: component138Data,
        };

        const iconRegular48Data = {
            src: "/img/subtract-3@2x.png",
            className: "",
        };

        const navItem527Data = {
            component14Props: iconRegular48Data,
        };

        const iconRegular58Data = {
            vector11: "/img/vector-11@2x.png",
            subtract: "/img/subtract-4@2x.png",
            vector12: "/img/vector-12@2x.png",
        };

        const navItem66Data = {
            iconRegular5Props: iconRegular58Data,
        };

        const iconRegular68Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem77Data = {
            iconRegular6Props: iconRegular68Data,
        };

        const iconRegular78Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-71",
        };

        const navItem87Data = {
            iconRegular7Props: iconRegular78Data,
        };

        const subnavContainer25Data = {
            navItem6Props: navItem66Data,
            navItem7Props: navItem77Data,
            navItem8Props: navItem87Data,
        };

        const menu82Data = {
            line4: "/img/line-4@2x.png",
            frame279Props: subnavContainer8Data,
            navItem3Props: navItem922Data,
            navItem102Props: navItem1027Data,
            navItem5Props: navItem527Data,
            frame281Props: subnavContainer25Data,
        };

        const titleContainer8Data = {
            children: "产品列表",
        };

        const textItemContainer2Data = {
            number: "0",
            text59: "件产品",
        };

        const btn225Data = {
            children: "新建产品",
        };

        const btn43Data = {
            text_Label: "按字母顺序排列",
        };

        const searchbar2Data = {
            text_Label: "输入产品名称进行搜索",
            icon_Regular: "/img/component-1-7@2x.png",
        };

        const categoryTitle52Data = {
            text: "信息错误",
        };

        const btnText1021Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1022Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23-2",
        };

        const productName5Data = {
            btnText1Props: btnText1021Data,
            btnText2Props: btnText1022Data,
        };

        const btnText1023Data = {
            children: "351351351",
            className: "btn_text-24-1",
        };

        const btnText1024Data = {
            children: "1543516-1",
            className: "btn_text-24-2",
        };

        const btnText1025Data = {
            children: "1L",
            className: "btn_text-25-1",
        };

        const rightContainer1Data = {
            btnText1Props: btnText1023Data,
            btnText2Props: btnText1024Data,
            btnText3Props: btnText1025Data,
        };

        const productItem1Data = {
            productNameProps: productName5Data,
            rightContainerProps: rightContainer1Data,
        };

        const btnText1026Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1027Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23-3",
        };

        const productName6Data = {
            btnText1Props: btnText1026Data,
            btnText2Props: btnText1027Data,
        };

        const btnText1028Data = {
            children: "351351351",
            className: "btn_text-24-3",
        };

        const btnText1029Data = {
            children: "1543516-1",
            className: "btn_text-24-4",
        };

        const btnText1030Data = {
            children: "1L",
            className: "btn_text-25-2",
        };

        const rightContainer2Data = {
            btnText1Props: btnText1028Data,
            btnText2Props: btnText1029Data,
            btnText3Props: btnText1030Data,
        };

        const productItem2Data = {
            className: "product-item-2",
            productNameProps: productName6Data,
            rightContainerProps: rightContainer2Data,
        };

        const categoryTitle62Data = {
            children: "上传成功",
            className: "category-title-23",
        };

        const btnText1031Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1032Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23-4",
        };

        const productName7Data = {
            btnText1Props: btnText1031Data,
            btnText2Props: btnText1032Data,
        };

        const btnText1033Data = {
            children: "351351351",
            className: "btn_text-24-5",
        };

        const btnText1034Data = {
            children: "1543516-1",
            className: "btn_text-24-6",
        };

        const btnText1035Data = {
            children: "1L",
            className: "btn_text-25-3",
        };

        const rightContainer3Data = {
            btnText1Props: btnText1033Data,
            btnText2Props: btnText1034Data,
            btnText3Props: btnText1035Data,
        };

        const productItem3Data = {
            className: "product-item-3",
            productNameProps: productName7Data,
            rightContainerProps: rightContainer3Data,
        };

        const btnText1036Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1037Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23-5",
        };

        const productName8Data = {
            btnText1Props: btnText1036Data,
            btnText2Props: btnText1037Data,
        };

        const btnText1038Data = {
            children: "351351351",
            className: "btn_text-24-7",
        };

        const btnText1039Data = {
            children: "1543516-1",
            className: "btn_text-24-8",
        };

        const btnText1040Data = {
            children: "1L",
            className: "btn_text-25-4",
        };

        const rightContainer4Data = {
            btnText1Props: btnText1038Data,
            btnText2Props: btnText1039Data,
            btnText3Props: btnText1040Data,
        };

        const productItem4Data = {
            className: "product-item-4",
            productNameProps: productName8Data,
            rightContainerProps: rightContainer4Data,
        };

        const btnText1041Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1042Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23-6",
        };

        const productName9Data = {
            btnText1Props: btnText1041Data,
            btnText2Props: btnText1042Data,
        };

        const btnText1043Data = {
            children: "351351351",
            className: "btn_text-24-9",
        };

        const btnText1044Data = {
            children: "1543516-1",
            className: "btn_text-24-10",
        };

        const btnText1045Data = {
            children: "1L",
            className: "btn_text-25-5",
        };

        const rightContainer5Data = {
            btnText1Props: btnText1043Data,
            btnText2Props: btnText1044Data,
            btnText3Props: btnText1045Data,
        };

        const productItem5Data = {
            className: "product-item-5",
            productNameProps: productName9Data,
            rightContainerProps: rightContainer5Data,
        };

        const btnText1046Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1047Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23-7",
        };

        const productName10Data = {
            btnText1Props: btnText1046Data,
            btnText2Props: btnText1047Data,
        };

        const btnText1048Data = {
            children: "351351351",
            className: "btn_text-24-11",
        };

        const btnText1049Data = {
            children: "1543516-1",
            className: "btn_text-24-12",
        };

        const btnText1050Data = {
            children: "1L",
            className: "btn_text-25-6",
        };

        const rightContainer6Data = {
            btnText1Props: btnText1048Data,
            btnText2Props: btnText1049Data,
            btnText3Props: btnText1050Data,
        };

        const productItem6Data = {
            className: "product-item-6",
            productNameProps: productName10Data,
            rightContainerProps: rightContainer6Data,
        };

        const btnText1051Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1052Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23-8",
        };

        const productName11Data = {
            btnText1Props: btnText1051Data,
            btnText2Props: btnText1052Data,
        };

        const btnText1053Data = {
            children: "351351351",
            className: "btn_text-24-13",
        };

        const btnText1054Data = {
            children: "1543516-1",
            className: "btn_text-24-14",
        };

        const btnText1055Data = {
            children: "1L",
            className: "btn_text-25-7",
        };

        const rightContainer7Data = {
            btnText1Props: btnText1053Data,
            btnText2Props: btnText1054Data,
            btnText3Props: btnText1055Data,
        };

        const productItem7Data = {
            className: "product-item-7",
            productNameProps: productName11Data,
            rightContainerProps: rightContainer7Data,
        };

        const btnText1056Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1057Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23-9",
        };

        const productName12Data = {
            btnText1Props: btnText1056Data,
            btnText2Props: btnText1057Data,
        };

        const btnText1058Data = {
            children: "351351351",
            className: "btn_text-24-15",
        };

        const btnText1059Data = {
            children: "1543516-1",
            className: "btn_text-24-16",
        };

        const btnText1060Data = {
            children: "1L",
            className: "btn_text-25-8",
        };

        const rightContainer8Data = {
            btnText1Props: btnText1058Data,
            btnText2Props: btnText1059Data,
            btnText3Props: btnText1060Data,
        };

        const productItem8Data = {
            className: "product-item-8",
            productNameProps: productName12Data,
            rightContainerProps: rightContainer8Data,
        };

        const btnText1061Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1062Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23-10",
        };

        const productName13Data = {
            btnText1Props: btnText1061Data,
            btnText2Props: btnText1062Data,
        };

        const btnText1063Data = {
            children: "351351351",
            className: "btn_text-24-17",
        };

        const btnText1064Data = {
            children: "1543516-1",
            className: "btn_text-24-18",
        };

        const btnText1065Data = {
            children: "1L",
            className: "btn_text-25-9",
        };

        const rightContainer9Data = {
            btnText1Props: btnText1063Data,
            btnText2Props: btnText1064Data,
            btnText3Props: btnText1065Data,
        };

        const productItem9Data = {
            className: "product-item-9",
            productNameProps: productName13Data,
            rightContainerProps: rightContainer9Data,
        };

        const btnText1066Data = {
            children: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        };

        const btnText1067Data = {
            children: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
            className: "btn_text-23",
        };

        const productName14Data = {
            btnText1Props: btnText1066Data,
            btnText2Props: btnText1067Data,
        };

        const btnText1068Data = {
            children: "351351351",
            className: "btn_text-24-19",
        };

        const btnText1069Data = {
            children: "1543516-1",
            className: "btn_text-24",
        };

        const btnText1070Data = {
            children: "1L",
            className: "btn_text-25",
        };

        const rightContainer10Data = {
            btnText1Props: btnText1068Data,
            btnText2Props: btnText1069Data,
            btnText3Props: btnText1070Data,
        };

        const productItem10Data = {
            className: "product-item",
            productNameProps: productName14Data,
            rightContainerProps: rightContainer10Data,
        };

        const btn5219Data = {
            children: "1",
        };

        const btn5220Data = {
            children: "2",
        };

        const btn5221Data = {
            children: "3",
        };

        const btn5222Data = {
            children: "...",
        };

        const btn5223Data = {
            children: "11",
        };

        const btn5224Data = {
            children: "12",
        };

        const navPagenumber4Data = {
            btn51Props: btn5219Data,
            btn52Props: btn5220Data,
            btn53Props: btn5221Data,
            btn54Props: btn5222Data,
            btn55Props: btn5223Data,
            btn56Props: btn5224Data,
        };

        const qrcodeContainer9Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText2285Data = {
            children: "公司简介",
        };

        const btnText2286Data = {
            children: "企业承诺",
        };

        const btnText2287Data = {
            children: "合作品牌",
        };

        const btnText2288Data = {
            children: "招贤纳士",
        };

        const jkInfo9Data = {
            btnText21Props: btnText2285Data,
            btnText22Props: btnText2286Data,
            btnText23Props: btnText2287Data,
            btnText24Props: btnText2288Data,
        };

        const btnText2289Data = {
            children: "资讯中心",
        };

        const btnText2290Data = {
            children: "安全说明书(SDS)",
        };

        const btnText2291Data = {
            children: "产品",
        };

        const readmoreInfo9Data = {
            btnText21Props: btnText2289Data,
            btnText22Props: btnText2290Data,
            btnText23Props: btnText2291Data,
        };

        const btnText2292Data = {
            children: "百灵威资源中心",
        };

        const btnText2293Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText2294Data = {
            children: "电话：010-80795999",
        };

        const btnText2295Data = {
            children: "传真：010-80793233",
        };

        const footer8Data = {
            className: "footer-7",
            qrcodeContainerProps: qrcodeContainer9Data,
            jkInfoProps: jkInfo9Data,
            readmoreInfoProps: readmoreInfo9Data,
            btnText21Props: btnText2292Data,
            btnText22Props: btnText2293Data,
            btnText23Props: btnText2294Data,
            btnText24Props: btnText2295Data,
        };

        const productInfoData = {
            text63: "产品名称",
            text61: "产品编号",
            cas: "CAS号",
            text62: "包装",
            header3Props: header38Data,
            menu8Props: menu82Data,
            titleContainerProps: titleContainer8Data,
            textItemContainerProps: textItemContainer2Data,
            btn2Props: btn225Data,
            btn4Props: btn43Data,
            searchbar2Props: searchbar2Data,
            categoryTitle5Props: categoryTitle52Data,
            productItem1Props: productItem1Data,
            productItem2Props: productItem2Data,
            categoryTitle6Props: categoryTitle62Data,
            productItem3Props: productItem3Data,
            productItem4Props: productItem4Data,
            productItem5Props: productItem5Data,
            productItem6Props: productItem6Data,
            productItem7Props: productItem7Data,
            productItem8Props: productItem8Data,
            productItem9Props: productItem9Data,
            productItem10Props: productItem10Data,
            navPagenumberProps: navPagenumber4Data,
            footerProps: footer8Data,
        };

        const logoContainer10Data = {
            jK: "/img/j-k-2@2x.png",
            className: "logo_container-9",
        };

        const header39Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer10Data,
        };

        const navItem21Data = {
            component1: "/img/component-1@2x.png",
            text_Label: "账户信息",
        };

        const navItem30Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item-8",
        };

        const clipboardDarkGrey9Data = {
            src: "/img/subtract-7@2x.png",
        };

        const component111Data = {
            clipboardDarkGreyProps: clipboardDarkGrey9Data,
        };

        const navItem122Data = {
            text_Label: "资质证照",
            component1Props: component111Data,
        };

        const component129Data = {
            overlapGroup: "/img/rectangle-2@2x.png",
            subtract: "/img/subtract-1@2x.png",
        };

        const navItem37Data = {
            component12Props: component129Data,
        };

        const component139Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem1028Data = {
            component13Props: component139Data,
        };

        const iconRegular49Data = {
            src: "/img/subtract-3@2x.png",
            className: "icon_regular-44",
        };

        const navItem528Data = {
            component14Props: iconRegular49Data,
        };

        const subnavContainer325Data = {
            navItem3Props: navItem37Data,
            navItem102Props: navItem1028Data,
            navItem52Props: navItem528Data,
        };

        const iconRegular59Data = {
            vector11: "/img/vector-11@2x.png",
            subtract: "/img/subtract-4@2x.png",
            vector12: "/img/vector-12@2x.png",
        };

        const navItem67Data = {
            iconRegular5Props: iconRegular59Data,
        };

        const iconRegular69Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem78Data = {
            iconRegular6Props: iconRegular69Data,
        };

        const iconRegular79Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-72",
        };

        const navItem88Data = {
            iconRegular7Props: iconRegular79Data,
        };

        const subnavContainer26Data = {
            navItem6Props: navItem67Data,
            navItem7Props: navItem78Data,
            navItem8Props: navItem88Data,
        };

        const nav4Data = {
            text65: "账户设置",
            line4: "/img/line-4@2x.png",
            navItem1Props: navItem21Data,
            navItem2Props: navItem30Data,
            navItem12Props: navItem122Data,
            subnavContainer3Props: subnavContainer325Data,
            subnavContainer2Props: subnavContainer26Data,
        };

        const titleContainer9Data = {
            children: "资质证照",
        };

        const inputSubtitleContainer82Data = {
            spanText2: "经营资质类型",
        };

        const inputBoxRegular1Data = {
            children: "必填",
        };

        const inputRegularData = {
            inputSubtitleContainer8Props: inputSubtitleContainer82Data,
            inputBoxRegularProps: inputBoxRegular1Data,
        };

        const inputSubtitleContainer92Data = {
            spanText2: "成立时间",
        };

        const inputBoxRegular31Data = {
            placeholder: "DD/MM/YYYY",
        };

        const inputRegular2Data = {
            inputSubtitleContainer9Props: inputSubtitleContainer92Data,
            inputBoxRegular2Props: inputBoxRegular31Data,
        };

        const inputSubtitleContainer93Data = {
            spanText2: "注册资本",
        };

        const inputBoxRegular41Data = {
            text_Label: "元",
        };

        const inputRegular31Data = {
            inputSubtitleContainer9Props: inputSubtitleContainer93Data,
            inputBoxRegular4Props: inputBoxRegular41Data,
        };

        const inputSubtitleContainer94Data = {
            spanText2: "员工总数",
        };

        const inputBoxRegular43Data = {
            text_Label: "人",
        };

        const inputRegular32Data = {
            inputSubtitleContainer9Props: inputSubtitleContainer94Data,
            inputBoxRegular4Props: inputBoxRegular43Data,
        };

        const inputSubtitleContainer83Data = {
            spanText2: "公司占地面积",
        };

        const inputBoxRegular44Data = {
            text_Label: "平方米",
        };

        const inputRegular4Data = {
            inputSubtitleContainer8Props: inputSubtitleContainer83Data,
            inputBoxRegular4Props: inputBoxRegular44Data,
        };

        const categoryTitle33Data = {
            categorytitle: "营业执照副本",
            className: "category-title-6",
        };

        const word1Data = {
            className: "",
        };

        const uploadedItem1Data = {
            wordProps: word1Data,
        };

        const categoryTitle47Data = {
            categorytitle: "安全生产许可证",
        };

        const uploadWindowSmall2Data = {
            text_Label: "增加其他浓度选项",
        };

        const uploadWindowMedium2Data = {
            uploadWindowSmallProps: uploadWindowSmall2Data,
        };

        const categoryContainer22Data = {
            categoryTitle4Props: categoryTitle47Data,
            uploadWindowMediumProps: uploadWindowMedium2Data,
        };

        const categoryTitle48Data = {
            categorytitle: "危险品生产或经营许可证",
        };

        const uploadWindowSmall3Data = {
            text_Label: "增加其他浓度选项",
        };

        const uploadWindowMedium3Data = {
            uploadWindowSmallProps: uploadWindowSmall3Data,
        };

        const categoryContainer23Data = {
            categoryTitle4Props: categoryTitle48Data,
            uploadWindowMediumProps: uploadWindowMedium3Data,
        };

        const categoryTitle49Data = {
            categorytitle: "其他",
        };

        const word2Data = {
            className: "word",
        };

        const uploadedItem2Data = {
            wordProps: word2Data,
        };

        const uploadWindowSmall4Data = {
            text_Label: "增加其他浓度选项",
        };

        const uploadWindowMedium4Data = {
            uploadWindowSmallProps: uploadWindowSmall4Data,
        };

        const qrcodeContainer10Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText2296Data = {
            children: "公司简介",
        };

        const btnText2297Data = {
            children: "企业承诺",
        };

        const btnText2298Data = {
            children: "合作品牌",
        };

        const btnText2299Data = {
            children: "招贤纳士",
        };

        const jkInfo10Data = {
            btnText21Props: btnText2296Data,
            btnText22Props: btnText2297Data,
            btnText23Props: btnText2298Data,
            btnText24Props: btnText2299Data,
        };

        const btnText22100Data = {
            children: "资讯中心",
        };

        const btnText22101Data = {
            children: "安全说明书(SDS)",
        };

        const btnText22102Data = {
            children: "产品",
        };

        const readmoreInfo10Data = {
            btnText21Props: btnText22100Data,
            btnText22Props: btnText22101Data,
            btnText23Props: btnText22102Data,
        };

        const btnText22103Data = {
            children: "百灵威资源中心",
        };

        const btnText22104Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText22105Data = {
            children: "电话：010-80795999",
        };

        const btnText22106Data = {
            children: "传真：010-80793233",
        };

        const footer9Data = {
            className: "footer-8",
            qrcodeContainerProps: qrcodeContainer10Data,
            jkInfoProps: jkInfo10Data,
            readmoreInfoProps: readmoreInfo10Data,
            btnText21Props: btnText22103Data,
            btnText22Props: btnText22104Data,
            btnText23Props: btnText22105Data,
            btnText24Props: btnText22106Data,
        };

        const certificateData = {
            header3Props: header39Data,
            nav4Props: nav4Data,
            titleContainerProps: titleContainer9Data,
            inputRegularProps: inputRegularData,
            inputRegular2Props: inputRegular2Data,
            inputRegular31Props: inputRegular31Data,
            inputRegular32Props: inputRegular32Data,
            inputRegular4Props: inputRegular4Data,
            categoryTitle3Props: categoryTitle33Data,
            uploadedItem1Props: uploadedItem1Data,
            categoryContainer1Props: categoryContainer22Data,
            categoryContainer2Props: categoryContainer23Data,
            categoryTitle4Props: categoryTitle49Data,
            uploadedItem2Props: uploadedItem2Data,
            uploadWindowMediumProps: uploadWindowMedium4Data,
            footerProps: footer9Data,
        };

        const logoContainer11Data = {
            jK: "/img/j-k-logo-1@2x.png",
            className: "logo_container-10",
        };

        const header310Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer11Data,
        };

        const navItem164Data = {
            icon_Regular: "/img/icon-regular-5@2x.png",
            text_Label: "供应商信息",
        };

        const clipboardDarkGrey10Data = {
            src: "/img/subtract@2x.png",
        };

        const component112Data = {
            clipboardDarkGreyProps: clipboardDarkGrey10Data,
        };

        const navItem210Data = {
            component1Props: component112Data,
        };

        const component1210Data = {
            overlapGroup: "/img/rectangle-2@2x.png",
            subtract: "/img/subtract-1@2x.png",
        };

        const navItem38Data = {
            component12Props: component1210Data,
        };

        const component1310Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem1029Data = {
            component13Props: component1310Data,
        };

        const iconRegular410Data = {
            src: "/img/subtract-3@2x.png",
            className: "icon_regular-45",
        };

        const navItem529Data = {
            component14Props: iconRegular410Data,
        };

        const subnavContainer326Data = {
            navItem3Props: navItem38Data,
            navItem102Props: navItem1029Data,
            navItem52Props: navItem529Data,
        };

        const iconRegular510Data = {
            vector11: "/img/vector-11@2x.png",
            subtract: "/img/subtract-4@2x.png",
            vector12: "/img/vector-12@2x.png",
        };

        const navItem68Data = {
            iconRegular5Props: iconRegular510Data,
        };

        const iconRegular610Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem79Data = {
            iconRegular6Props: iconRegular610Data,
        };

        const iconRegular710Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-73",
        };

        const navItem89Data = {
            iconRegular7Props: iconRegular710Data,
        };

        const subnavContainer27Data = {
            navItem6Props: navItem68Data,
            navItem7Props: navItem79Data,
            navItem8Props: navItem89Data,
        };

        const nav8Data = {
            text169: "账户设置",
            line4: "/img/line-4@2x.png",
            navItemProps: navItem31Data,
            navItem16Props: navItem164Data,
            navItem2Props: navItem210Data,
            subnavContainer32Props: subnavContainer326Data,
            subnavContainer2Props: subnavContainer27Data,
        };

        const titleContainer10Data = {
            children: "供应商信息",
            className: "title_container-9",
        };

        const inputSubtitleContainer95Data = {
            spanText2: "公司名称",
        };

        const inputBoxRegular2Data = {
            children: "必填",
        };

        const inputRegular51Data = {
            inputSubtitleContainer9Props: inputSubtitleContainer95Data,
            inputBoxRegularProps: inputBoxRegular2Data,
        };

        const inputBoxRegular5Data = {
            children: "请输入全名",
        };

        const btnOption52Data = {
            text174: "默认联系人",
        };

        const btnCheckbox2220Data = {
            className: "btn_checkbox-2",
        };

        const btnOption62Data = {
            btnCheckbox22Props: btnCheckbox2220Data,
        };

        const textOption1Data = {
            btnOption6Props: btnOption62Data,
        };

        const btnCheckbox2221Data = {
            className: "btn_checkbox-2",
        };

        const btnOption63Data = {
            btnCheckbox22Props: btnCheckbox2221Data,
        };

        const textOption2Data = {
            btnOption6Props: btnOption63Data,
        };

        const inputSubtitleContainer96Data = {
            spanText2: "联系电话",
        };

        const inputBoxRegular6Data = {
            children: "必填",
        };

        const inputRegular52Data = {
            inputSubtitleContainer9Props: inputSubtitleContainer96Data,
            inputBoxRegularProps: inputBoxRegular6Data,
        };

        const inputSubtitleContainer215Data = {
            children: "手机",
        };

        const inputBoxRegular7Data = {
            children: "必填",
        };

        const inputRegular6Data = {
            inputSubtitleContainer2Props: inputSubtitleContainer215Data,
            inputBoxRegularProps: inputBoxRegular7Data,
        };

        const inputSubtitleContainer102Data = {
            spanText2: "国家",
        };

        const inputBoxRegular32Data = {
            placeholder: "必填",
        };

        const inputRegular7Data = {
            inputSubtitleContainer10Props: inputSubtitleContainer102Data,
            inputBoxRegular3Props: inputBoxRegular32Data,
        };

        const inputBoxRegular33Data = {
            placeholder: "必填",
        };

        const inputRegular81Data = {
            spanText2: "省",
            inputBoxRegular3Props: inputBoxRegular33Data,
        };

        const inputBoxRegular34Data = {
            placeholder: "必填",
        };

        const inputRegular82Data = {
            spanText2: "市",
            inputBoxRegular3Props: inputBoxRegular34Data,
        };

        const inputBoxRegular35Data = {
            placeholder: "必填",
        };

        const inputRegular83Data = {
            spanText2: "区",
            inputBoxRegular3Props: inputBoxRegular35Data,
        };

        const inputSubtitleContainer97Data = {
            spanText2: "座机号码",
        };

        const inputBoxRegular8Data = {
            children: "必填",
        };

        const inputRegular53Data = {
            inputSubtitleContainer9Props: inputSubtitleContainer97Data,
            inputBoxRegularProps: inputBoxRegular8Data,
        };

        const inputBoxRegular9Data = {
            children: "必填",
        };

        const inputRegular9Data = {
            spanText1: "*",
            spanText2: "传真号",
            inputBoxRegularProps: inputBoxRegular9Data,
        };

        const inputSubtitleContainer103Data = {
            spanText2: "邮箱",
        };

        const inputBoxRegular10Data = {
            children: "必填",
        };

        const inputRegular101Data = {
            inputSubtitleContainer10Props: inputSubtitleContainer103Data,
            inputBoxRegularProps: inputBoxRegular10Data,
        };

        const btn226Data = {
            children: "保存",
        };

        const qrcodeContainer11Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText22107Data = {
            children: "公司简介",
        };

        const btnText22108Data = {
            children: "企业承诺",
        };

        const btnText22109Data = {
            children: "合作品牌",
        };

        const btnText22110Data = {
            children: "招贤纳士",
        };

        const jkInfo11Data = {
            btnText21Props: btnText22107Data,
            btnText22Props: btnText22108Data,
            btnText23Props: btnText22109Data,
            btnText24Props: btnText22110Data,
        };

        const btnText22111Data = {
            children: "资讯中心",
        };

        const btnText22112Data = {
            children: "安全说明书(SDS)",
        };

        const btnText22113Data = {
            children: "产品",
        };

        const readmoreInfo11Data = {
            btnText21Props: btnText22111Data,
            btnText22Props: btnText22112Data,
            btnText23Props: btnText22113Data,
        };

        const btnText22114Data = {
            children: "百灵威资源中心",
        };

        const btnText22115Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText22116Data = {
            children: "电话：010-80795999",
        };

        const btnText22117Data = {
            children: "传真：010-80793233",
        };

        const footer10Data = {
            className: "footer-9",
            qrcodeContainerProps: qrcodeContainer11Data,
            jkInfoProps: jkInfo11Data,
            readmoreInfoProps: readmoreInfo11Data,
            btnText21Props: btnText22114Data,
            btnText22Props: btnText22115Data,
            btnText23Props: btnText22116Data,
            btnText24Props: btnText22117Data,
        };

        const venderInfoData = {
            spanText1: "*",
            spanText2: "负责人姓名",
            btn: "/img/btn@2x.png",
            text173: "一二三",
            header3Props: header310Data,
            nav8Props: nav8Data,
            titleContainerProps: titleContainer10Data,
            inputRegular51Props: inputRegular51Data,
            inputBoxRegularProps: inputBoxRegular5Data,
            btnOption5Props: btnOption52Data,
            textOption1Props: textOption1Data,
            textOption2Props: textOption2Data,
            inputRegular52Props: inputRegular52Data,
            inputRegular6Props: inputRegular6Data,
            inputRegular7Props: inputRegular7Data,
            inputRegular81Props: inputRegular81Data,
            inputRegular82Props: inputRegular82Data,
            inputRegular83Props: inputRegular83Data,
            inputRegular53Props: inputRegular53Data,
            inputRegular9Props: inputRegular9Data,
            inputRegular10Props: inputRegular101Data,
            btn22Props: btn226Data,
            footerProps: footer10Data,
        };

        const logoContainer12Data = {
            jK: "/img/j-k-logo-1@2x.png",
            className: "logo_container-11",
        };

        const header311Data = {
            username141: "Username141...",
            logoContainerProps: logoContainer12Data,
        };

        const navItem165Data = {
            icon_Regular: "/img/icon-regular-2@2x.png",
            text_Label: "账户信息",
            className: "nav_item-90",
        };

        const navItem39Data = {
            component1: "/img/component-1-1@2x.png",
            text_Label: "供应商信息",
            className: "nav_item-10",
        };

        const clipboardDarkGrey11Data = {
            src: "/img/subtract@2x.png",
        };

        const component113Data = {
            clipboardDarkGreyProps: clipboardDarkGrey11Data,
        };

        const navItem211Data = {
            component1Props: component113Data,
        };

        const component1211Data = {
            overlapGroup: "/img/rectangle-2@2x.png",
            subtract: "/img/subtract-1@2x.png",
        };

        const navItem310Data = {
            component12Props: component1211Data,
        };

        const component1311Data = {
            subtract: "/img/subtract-9@2x.png",
            vector54: "/img/vector-54-1@2x.png",
            vector55: "/img/vector-55-1@2x.png",
        };

        const navItem10210Data = {
            component13Props: component1311Data,
        };

        const iconRegular411Data = {
            src: "/img/subtract-3@2x.png",
            className: "icon_regular-46",
        };

        const navItem5210Data = {
            component14Props: iconRegular411Data,
        };

        const subnavContainer327Data = {
            navItem3Props: navItem310Data,
            navItem102Props: navItem10210Data,
            navItem52Props: navItem5210Data,
        };

        const iconRegular511Data = {
            vector11: "/img/vector-11@2x.png",
            subtract: "/img/subtract-4@2x.png",
            vector12: "/img/vector-12@2x.png",
        };

        const navItem69Data = {
            iconRegular5Props: iconRegular511Data,
        };

        const iconRegular611Data = {
            src: "/img/subtract-5@2x.png",
        };

        const navItem710Data = {
            iconRegular6Props: iconRegular611Data,
        };

        const iconRegular711Data = {
            vector109: "/img/vector-109@2x.png",
            subtract: "/img/subtract-6@2x.png",
            className: "icon_regular-74",
        };

        const navItem810Data = {
            iconRegular7Props: iconRegular711Data,
        };

        const subnavContainer28Data = {
            navItem6Props: navItem69Data,
            navItem7Props: navItem710Data,
            navItem8Props: navItem810Data,
        };

        const nav9Data = {
            text184: "账户设置",
            line4: "/img/line-4@2x.png",
            navItem16Props: navItem165Data,
            navItemProps: navItem39Data,
            navItem2Props: navItem211Data,
            subnavContainer32Props: subnavContainer327Data,
            subnavContainer2Props: subnavContainer28Data,
        };

        const titleContainer11Data = {
            children: "账户信息",
        };

        const inputSubtitleContainer98Data = {
            spanText2: "账号名称",
        };

        const inputBoxRegular11Data = {
            children: "必填",
        };

        const inputRegular54Data = {
            inputSubtitleContainer9Props: inputSubtitleContainer98Data,
            inputBoxRegularProps: inputBoxRegular11Data,
        };

        const inputSubtitleContainer104Data = {
            spanText2: "密码",
        };

        const inputBoxRegular12Data = {
            children: "***********",
        };

        const inputRegular102Data = {
            inputSubtitleContainer10Props: inputSubtitleContainer104Data,
            inputBoxRegularProps: inputBoxRegular12Data,
        };

        const btn227Data = {
            children: "保存",
        };

        const btnText9Data = {
            children: "修改密码",
        };

        const qrcodeContainer12Data = {
            rectangle: "/img/rectangle@2x.png",
        };

        const btnText22118Data = {
            children: "公司简介",
        };

        const btnText22119Data = {
            children: "企业承诺",
        };

        const btnText22120Data = {
            children: "合作品牌",
        };

        const btnText22121Data = {
            children: "招贤纳士",
        };

        const jkInfo12Data = {
            btnText21Props: btnText22118Data,
            btnText22Props: btnText22119Data,
            btnText23Props: btnText22120Data,
            btnText24Props: btnText22121Data,
        };

        const btnText22122Data = {
            children: "资讯中心",
        };

        const btnText22123Data = {
            children: "安全说明书(SDS)",
        };

        const btnText22124Data = {
            children: "产品",
        };

        const readmoreInfo12Data = {
            btnText21Props: btnText22122Data,
            btnText22Props: btnText22123Data,
            btnText23Props: btnText22124Data,
        };

        const btnText22125Data = {
            children: "百灵威资源中心",
        };

        const btnText22126Data = {
            children: "邮箱：sourcing6@jkchemical.com",
        };

        const btnText22127Data = {
            children: "电话：010-80795999",
        };

        const btnText22128Data = {
            children: "传真：010-80793233",
        };

        const footer11Data = {
            className: "footer-10",
            qrcodeContainerProps: qrcodeContainer12Data,
            jkInfoProps: jkInfo12Data,
            readmoreInfoProps: readmoreInfo12Data,
            btnText21Props: btnText22125Data,
            btnText22Props: btnText22126Data,
            btnText23Props: btnText22127Data,
            btnText24Props: btnText22128Data,
        };

        const accountInfoData = {
            header3Props: header311Data,
            nav9Props: nav9Data,
            titleContainerProps: titleContainer11Data,
            inputRegular5Props: inputRegular54Data,
            inputRegular10Props: inputRegular102Data,
            btn22Props: btn227Data,
            btnText9Props: btnText9Data,
            footerProps: footer11Data,
        };

        return {
            logoContainer1Data,
            header22Data,
            inputBoxRegular421Data,
            inputBoxRegular422Data,
            btnTextData,
            btn82Data,
            btnText2Data,
            loginWiondowData,
            qrcodeContainer1Data,
            btnText221Data,
            btnText222Data,
            btnText223Data,
            btnText224Data,
            jkInfo1Data,
            btnText225Data,
            btnText226Data,
            btnText227Data,
            readmoreInfo1Data,
            btnText228Data,
            btnText229Data,
            btnText2210Data,
            btnText2211Data,
            footer1Data,
            loginData,
            logoContainer2Data,
            header31Data,
            navItem1Data,
            navItem2Data,
            clipboardDarkGrey1Data,
            component11Data,
            navItem22Data,
            subnavContainer1Data,
            component121Data,
            navItem31Data,
            component131Data,
            navItem1021Data,
            iconRegular41Data,
            navItem521Data,
            subnavContainer321Data,
            iconRegular51Data,
            navItem61Data,
            iconRegular61Data,
            navItem71Data,
            iconRegular71Data,
            navItem1323Data,
            menu52Data,
            titleContainer1Data,
            button621Data,
            btn221Data,
            searchBar221Data,
            frame4371Data,
            btnFrameless1Data,
            framelessButton421Data,
            btn41Data,
            historySubNav1Data,
            categoryTitle3231Data,
            categoryTitle221Data,
            textButton421Data,
            textButton521Data,
            textButton422Data,
            textButton522Data,
            textButton523Data,
            textButton524Data,
            inquiryHistoryItem1Data,
            textButton423Data,
            textButton525Data,
            textButton424Data,
            textButton526Data,
            textButton527Data,
            textButton528Data,
            inquiryHistoryItem2Data,
            textButton425Data,
            textButton529Data,
            textButton426Data,
            textButton5210Data,
            textButton5211Data,
            textButton5212Data,
            inquiryHistoryItem3Data,
            textButton427Data,
            textButton5213Data,
            textButton428Data,
            textButton5214Data,
            textButton5215Data,
            textButton5216Data,
            inquiryHistoryItem4Data,
            inquiryHistoryColumn1Data,
            categoryTitle3232Data,
            categoryTitle222Data,
            textButton429Data,
            textButton5217Data,
            textButton4210Data,
            textButton5218Data,
            textButton5219Data,
            textButton5220Data,
            inquiryHistoryItem5Data,
            textButton4211Data,
            textButton5221Data,
            textButton4212Data,
            textButton5222Data,
            textButton5223Data,
            textButton5224Data,
            inquiryHistoryItem6Data,
            textButton4213Data,
            textButton5225Data,
            textButton4214Data,
            textButton5226Data,
            textButton5227Data,
            textButton5228Data,
            inquiryHistoryItem7Data,
            textButton4215Data,
            textButton5229Data,
            textButton4216Data,
            textButton5230Data,
            textButton5231Data,
            textButton5232Data,
            inquiryHistoryItem8Data,
            inquiryHistoryColumn2Data,
            btn521Data,
            btn522Data,
            btn523Data,
            btn524Data,
            btn525Data,
            btn526Data,
            navPagenumber1Data,
            qrcodeContainer2Data,
            btnText2212Data,
            btnText2213Data,
            btnText2214Data,
            btnText2215Data,
            jkInfo2Data,
            btnText2216Data,
            btnText2217Data,
            btnText2218Data,
            readmoreInfo2Data,
            btnText2219Data,
            btnText2220Data,
            btnText2221Data,
            btnText2222Data,
            footer2Data,
            inquiryHistoryData,
            logoContainer3Data,
            header32Data,
            navItem4Data,
            navItem5Data,
            clipboardDarkGrey2Data,
            component14Data,
            navItem23Data,
            subnavContainer2Data,
            component122Data,
            navItem32Data,
            component132Data,
            navItem1022Data,
            iconRegular42Data,
            navItem522Data,
            subnavContainer322Data,
            iconRegular52Data,
            navItem62Data,
            iconRegular62Data,
            navItem162Data,
            iconRegular72Data,
            navItem81Data,
            nav92Data,
            titleContainer2Data,
            categoryTitle31Data,
            qrcodeContainer3Data,
            btnText2223Data,
            btnText2224Data,
            btnText2225Data,
            btnText2226Data,
            jkInfo3Data,
            btnText2227Data,
            btnText2228Data,
            btnText2229Data,
            readmoreInfo3Data,
            btnText2230Data,
            btnText2231Data,
            btnText2232Data,
            btnText2233Data,
            footer3Data,
            productCertificateUploadData,
            logoContainer4Data,
            header33Data,
            navItem9Data,
            navItem10Data,
            clipboardDarkGrey3Data,
            component15Data,
            navItem24Data,
            subnavContainer3Data,
            component123Data,
            navItem33Data,
            component133Data,
            navItem1023Data,
            iconRegular43Data,
            navItem523Data,
            subnavContainer323Data,
            iconRegular53Data,
            navItem1521Data,
            iconRegular63Data,
            navItem72Data,
            iconRegular73Data,
            navItem82Data,
            nav821Data,
            titleContainer3Data,
            categoryTitle41Data,
            inputSubtitleContainer1Data,
            btnText621Data,
            inputGivenInfoSmall1Data,
            inputSubtitleContainer421Data,
            btnText622Data,
            inputGivenInfoSmall2Data,
            btnText623Data,
            inputGivenInfoSmall3Data,
            inputSubtitleContainer2Data,
            btnText721Data,
            inputGivenInfoSmall41Data,
            inputSubtitleContainer3Data,
            btnText722Data,
            inputGivenInfoSmall42Data,
            btnText723Data,
            inputGivenInfoSmall5Data,
            inputSubtitleContainer4Data,
            btnText724Data,
            inputGivenInfoLarge1Data,
            inputSubtitleContainer5Data,
            btnText725Data,
            inputGivenInfoLarge2Data,
            inputSubtitleContainer6Data,
            btnText726Data,
            inputGivenInfoSmall43Data,
            inputSubtitleContainer7Data,
            btnText727Data,
            inputGivenInfoSmall44Data,
            inputSubtitleContainer8Data,
            btnText728Data,
            inputGivenInfoSmall45Data,
            inputSubtitleContainer22Data,
            btnText729Data,
            inputGivenInfoSmall61Data,
            inputSubtitleContainer422Data,
            btnText7210Data,
            inputGivenInfoSmall71Data,
            inputSubtitleContainer423Data,
            btnText7211Data,
            inputGivenInfoSmall72Data,
            inputSubtitleContainer9Data,
            btnText7212Data,
            inputGivenInfoSmall46Data,
            inputSubtitleContainer32Data,
            btnText7213Data,
            inputGivenInfoSmall8Data,
            inputSubtitleContainer10Data,
            btnText7214Data,
            inputGivenInfoSmall47Data,
            inputSubtitleContainer11Data,
            btnText7215Data,
            inputGivenInfoSmall48Data,
            btnText7216Data,
            inputGivenInfoSmall9Data,
            inputSubtitleContainer62Data,
            btnText7217Data,
            inputGivenInfoSmall10Data,
            inputSubtitleContainer12Data,
            btnText7218Data,
            inputGivenInfoSmall49Data,
            inputSubtitleContainer23Data,
            btnText7219Data,
            inputGivenInfoSmall62Data,
            inputSubtitleContainer424Data,
            btnText7220Data,
            inputGivenInfoSmall73Data,
            inputSubtitleContainer24Data,
            btnText7221Data,
            inputGivenInfoSmall63Data,
            inputSubtitleContainer13Data,
            btnText624Data,
            inputGivenInfoSmall11Data,
            inputSubtitleContainer25Data,
            btnText7222Data,
            categoryTitle42Data,
            inputSubtitleContainer14Data,
            inputSmall1Data,
            inputSubtitleContainer26Data,
            inputSmall21Data,
            uploadWindowSmall1Data,
            uploadWindowMedium1Data,
            categoryTitle43Data,
            uploadWindowLarge2Data,
            categoryContainer1Data,
            btn222Data,
            btnContainer1Data,
            qrcodeContainer4Data,
            btnText2234Data,
            btnText2235Data,
            btnText2236Data,
            btnText2237Data,
            jkInfo4Data,
            btnText2238Data,
            btnText2239Data,
            btnText2240Data,
            readmoreInfo4Data,
            btnText2241Data,
            btnText2242Data,
            btnText2243Data,
            btnText2244Data,
            footer4Data,
            inquiryInquieyItemData,
            logoContainer5Data,
            header34Data,
            navItem11Data,
            navItem12Data,
            clipboardDarkGrey4Data,
            component16Data,
            navItem25Data,
            subnavContainer4Data,
            component124Data,
            navItem34Data,
            component134Data,
            navItem1024Data,
            iconRegular44Data,
            navItem524Data,
            subnavContainer324Data,
            iconRegular54Data,
            navItem1522Data,
            iconRegular64Data,
            navItem73Data,
            iconRegular74Data,
            navItem83Data,
            nav822Data,
            titleContainer4Data,
            textItemContainer1Data,
            categoryTitle51Data,
            btnCheckbox223Data,
            textButton4217Data,
            textButton5233Data,
            textButton4218Data,
            textButton5234Data,
            textButton5235Data,
            textButton5236Data,
            inquiryItem1Data,
            btnCheckbox224Data,
            textButton4219Data,
            textButton5237Data,
            textButton4220Data,
            textButton5238Data,
            textButton5239Data,
            textButton5240Data,
            inquiryItem2Data,
            categoryTitle61Data,
            btnCheckbox225Data,
            textButton4221Data,
            textButton5241Data,
            textButton4222Data,
            textButton5242Data,
            textButton5243Data,
            textButton5244Data,
            inquiryItem3Data,
            btnCheckbox226Data,
            textButton4223Data,
            textButton5245Data,
            textButton4224Data,
            textButton5246Data,
            textButton5247Data,
            textButton5248Data,
            inquiryItem4Data,
            btnCheckbox227Data,
            textButton4225Data,
            textButton5249Data,
            textButton4226Data,
            textButton5250Data,
            textButton5251Data,
            textButton5252Data,
            inquiryItem5Data,
            btnCheckbox228Data,
            textButton4227Data,
            textButton5253Data,
            textButton4228Data,
            textButton5254Data,
            textButton5255Data,
            textButton5256Data,
            inquiryItem6Data,
            btn527Data,
            btn528Data,
            btn529Data,
            btn5210Data,
            btn5211Data,
            btn5212Data,
            navPagenumber2Data,
            qrcodeContainer5Data,
            btnText2245Data,
            btnText2246Data,
            btnText2247Data,
            btnText2248Data,
            jkInfo5Data,
            btnText2249Data,
            btnText2250Data,
            btnText2251Data,
            readmoreInfo5Data,
            btnText2252Data,
            btnText2253Data,
            btnText2254Data,
            btnText2255Data,
            footer5Data,
            inquiryData,
            logoContainer6Data,
            header35Data,
            navItem13Data,
            navItem14Data,
            clipboardDarkGrey5Data,
            component17Data,
            navItem26Data,
            subnavContainer5Data,
            component125Data,
            navItem35Data,
            component135Data,
            navItem1025Data,
            iconRegular45Data,
            navItem153Data,
            iconRegular55Data,
            navItem63Data,
            iconRegular65Data,
            navItem74Data,
            iconRegular75Data,
            navItem84Data,
            subnavContainer22Data,
            nav83Data,
            titleContainer5Data,
            button622Data,
            btn223Data,
            searchBar222Data,
            frame4372Data,
            btnFrameless2Data,
            framelessButton422Data,
            framelessButton423Data,
            btn42Data,
            historySubNav2Data,
            categoryTitle3233Data,
            categoryTitle223Data,
            btnText101Data,
            btnText102Data,
            productName1Data,
            btnText103Data,
            rightItem1Data,
            btnText104Data,
            rightItem2Data,
            btnText105Data,
            rightItem3Data,
            dataContainer1Data,
            productHistoryItem1Data,
            btnText106Data,
            btnText107Data,
            productName2Data,
            btnText108Data,
            rightItem4Data,
            btnText109Data,
            rightItem5Data,
            btnText1010Data,
            rightItem6Data,
            dataContainer2Data,
            productHistoryItem2Data,
            categoryTitle3234Data,
            categoryTitle224Data,
            btnText1011Data,
            btnText1012Data,
            productName3Data,
            btnText1013Data,
            rightItem7Data,
            btnText1014Data,
            rightItem8Data,
            btnText1015Data,
            rightItem9Data,
            dataContainer3Data,
            productHistoryItem3Data,
            btnText1016Data,
            btnText1017Data,
            productName4Data,
            btnText1018Data,
            rightItem10Data,
            btnText1019Data,
            rightItem11Data,
            btnText1020Data,
            rightItem12Data,
            dataContainer4Data,
            productHistoryItem4Data,
            btn5213Data,
            btn5214Data,
            btn5215Data,
            btn5216Data,
            btn5217Data,
            btn5218Data,
            navPagenumber3Data,
            qrcodeContainer6Data,
            btnText2256Data,
            btnText2257Data,
            btnText2258Data,
            btnText2259Data,
            jkInfo6Data,
            btnText2260Data,
            btnText2261Data,
            btnText2262Data,
            readmoreInfo6Data,
            btnText2263Data,
            btnText2264Data,
            btnText2265Data,
            btnText2266Data,
            footer6Data,
            historyData,
            logoContainer7Data,
            header36Data,
            navItem15Data,
            navItem16Data,
            clipboardDarkGrey6Data,
            component18Data,
            navItem27Data,
            subnavContainer6Data,
            component126Data,
            navItem36Data,
            component136Data,
            navItem163Data,
            iconRegular46Data,
            navItem525Data,
            iconRegular56Data,
            navItem64Data,
            iconRegular66Data,
            navItem75Data,
            iconRegular76Data,
            navItem85Data,
            subnavContainer23Data,
            nav93Data,
            titleContainer6Data,
            button623Data,
            categoryTitle2Data,
            btnText31Data,
            adviceContainer1Data,
            qrcodeContainer7Data,
            btnText2267Data,
            btnText2268Data,
            btnText2269Data,
            btnText2270Data,
            jkInfo7Data,
            btnText2271Data,
            btnText2272Data,
            btnText2273Data,
            readmoreInfo7Data,
            btnText2274Data,
            btnText2275Data,
            btnText2276Data,
            btnText2277Data,
            footer7Data,
            uploadMultiplesData,
            logoContainer8Data,
            header37Data,
            navItem17Data,
            navItem18Data,
            clipboardDarkGrey7Data,
            component19Data,
            navItem28Data,
            subnavContainer7Data,
            component127Data,
            navItem921Data,
            component137Data,
            navItem1026Data,
            iconRegular47Data,
            navItem526Data,
            iconRegular57Data,
            navItem65Data,
            iconRegular67Data,
            navItem76Data,
            iconRegular77Data,
            navItem86Data,
            subnavContainer24Data,
            menu81Data,
            titleContainer7Data,
            btnText32Data,
            adviceContainer2Data,
            alertContainer1Data,
            categoryTitle32Data,
            inputSubtitleContainer15Data,
            inputBoxSmall3Data,
            inputLargeData,
            inputSubtitleContainer16Data,
            inputSmall3Data,
            inputSubtitleContainer27Data,
            inputSmall22Data,
            inputSubtitleContainer33Data,
            inputSmall32Data,
            inputSubtitleContainer17Data,
            inputSmall4Data,
            inputSubtitleContainer28Data,
            inputSmall23Data,
            inputSubtitleContainer18Data,
            inputSmall5Data,
            categoryTitle44Data,
            inputSubtitleContainer19Data,
            inputSmall6Data,
            inputSubtitleContainer425Data,
            inputSmall42Data,
            inputSubtitleContainer29Data,
            inputSmall24Data,
            inputSubtitleContainer210Data,
            inputSmall25Data,
            inputSubtitleContainer20Data,
            btnOption1Data,
            btnOption2Data,
            btnOptionCombination1Data,
            inputOption1Data,
            inputSubtitleContainer426Data,
            inputSmall43Data,
            inputSubtitleContainer211Data,
            inputSmall26Data,
            inputSubtitleContainer63Data,
            inputSmall62Data,
            categoryTitle45Data,
            inputSubtitleContainer21Data,
            inputSmall7Data,
            inputSubtitleContainer30Data,
            inputSmall8Data,
            inputSubtitleContainer31Data,
            btnOption3Data,
            btnOption4Data,
            btnOptionCombination2Data,
            inputOption2Data,
            inputSubtitleContainer72Data,
            btnOption5Data,
            btnOption6Data,
            btnOptionCombination3Data,
            inputOption22Data,
            inputSubtitleContainer34Data,
            btnOption7Data,
            btnOption8Data,
            btnOptionCombination4Data,
            inputOption3Data,
            inputSubtitleContainer73Data,
            btnOption9Data,
            btnOption10Data,
            btnOptionCombination5Data,
            inputOption23Data,
            inputSubtitleContainer35Data,
            btnOption11Data,
            btnOption12Data,
            btnOptionCombination6Data,
            inputOption32Data,
            inputSubtitleContainer36Data,
            btnOption13Data,
            btnOption14Data,
            btnOptionCombination7Data,
            inputOption33Data,
            inputSubtitleContainer74Data,
            btnOption15Data,
            btnOption16Data,
            btnOptionCombination8Data,
            inputOption24Data,
            inputSubtitleContainer37Data,
            inputSmall33Data,
            inputSubtitleContainer38Data,
            inputSmall9Data,
            inputSubtitleContainer39Data,
            inputSmall10Data,
            inputSubtitleContainer40Data,
            inputSmall11Data,
            inputSubtitleContainer212Data,
            inputSmall27Data,
            inputSubtitleContainer213Data,
            inputSmall28Data,
            inputSubtitleContainer75Data,
            inputSmall72Data,
            inputSubtitleContainer76Data,
            inputSmall73Data,
            inputSubtitleContainer427Data,
            inputSmall44Data,
            inputSubtitleContainer41Data,
            inputSmall12Data,
            inputSubtitleContainer214Data,
            inputBoxSmall30Data,
            inputLarge2Data,
            categoryTitle46Data,
            uploadWindowLarge4Data,
            categoryContainer2Data,
            btnText33Data,
            adviceContainer3Data,
            alertContainer2Data,
            btn224Data,
            btnContainer2Data,
            qrcodeContainer8Data,
            btnText2278Data,
            btnText2279Data,
            btnText2280Data,
            btnText2281Data,
            jkInfo8Data,
            btnText2282Data,
            btnText2283Data,
            btnText2284Data,
            readmoreInfo8Data,
            btnOption23Data,
            btnOption32Data,
            frame1491Data,
            btnOption33Data,
            frame1492Data,
            btnOption34Data,
            frame1493Data,
            productInfoEditaddProductData,
            logoContainer9Data,
            header38Data,
            navItem19Data,
            navItem20Data,
            clipboardDarkGrey8Data,
            component110Data,
            navItem29Data,
            subnavContainer8Data,
            component128Data,
            navItem922Data,
            component138Data,
            navItem1027Data,
            iconRegular48Data,
            navItem527Data,
            iconRegular58Data,
            navItem66Data,
            iconRegular68Data,
            navItem77Data,
            iconRegular78Data,
            navItem87Data,
            subnavContainer25Data,
            menu82Data,
            titleContainer8Data,
            textItemContainer2Data,
            btn225Data,
            btn43Data,
            searchbar2Data,
            categoryTitle52Data,
            btnText1021Data,
            btnText1022Data,
            productName5Data,
            btnText1023Data,
            btnText1024Data,
            btnText1025Data,
            rightContainer1Data,
            productItem1Data,
            btnText1026Data,
            btnText1027Data,
            productName6Data,
            btnText1028Data,
            btnText1029Data,
            btnText1030Data,
            rightContainer2Data,
            productItem2Data,
            categoryTitle62Data,
            btnText1031Data,
            btnText1032Data,
            productName7Data,
            btnText1033Data,
            btnText1034Data,
            btnText1035Data,
            rightContainer3Data,
            productItem3Data,
            btnText1036Data,
            btnText1037Data,
            productName8Data,
            btnText1038Data,
            btnText1039Data,
            btnText1040Data,
            rightContainer4Data,
            productItem4Data,
            btnText1041Data,
            btnText1042Data,
            productName9Data,
            btnText1043Data,
            btnText1044Data,
            btnText1045Data,
            rightContainer5Data,
            productItem5Data,
            btnText1046Data,
            btnText1047Data,
            productName10Data,
            btnText1048Data,
            btnText1049Data,
            btnText1050Data,
            rightContainer6Data,
            productItem6Data,
            btnText1051Data,
            btnText1052Data,
            productName11Data,
            btnText1053Data,
            btnText1054Data,
            btnText1055Data,
            rightContainer7Data,
            productItem7Data,
            btnText1056Data,
            btnText1057Data,
            productName12Data,
            btnText1058Data,
            btnText1059Data,
            btnText1060Data,
            rightContainer8Data,
            productItem8Data,
            btnText1061Data,
            btnText1062Data,
            productName13Data,
            btnText1063Data,
            btnText1064Data,
            btnText1065Data,
            rightContainer9Data,
            productItem9Data,
            btnText1066Data,
            btnText1067Data,
            productName14Data,
            btnText1068Data,
            btnText1069Data,
            btnText1070Data,
            rightContainer10Data,
            productItem10Data,
            btn5219Data,
            btn5220Data,
            btn5221Data,
            btn5222Data,
            btn5223Data,
            btn5224Data,
            navPagenumber4Data,
            qrcodeContainer9Data,
            btnText2285Data,
            btnText2286Data,
            btnText2287Data,
            btnText2288Data,
            jkInfo9Data,
            btnText2289Data,
            btnText2290Data,
            btnText2291Data,
            readmoreInfo9Data,
            btnText2292Data,
            btnText2293Data,
            btnText2294Data,
            btnText2295Data,
            footer8Data,
            productInfoData,
            logoContainer10Data,
            header39Data,
            navItem21Data,
            navItem30Data,
            clipboardDarkGrey9Data,
            component111Data,
            navItem122Data,
            component129Data,
            navItem37Data,
            component139Data,
            navItem1028Data,
            iconRegular49Data,
            navItem528Data,
            subnavContainer325Data,
            iconRegular59Data,
            navItem67Data,
            iconRegular69Data,
            navItem78Data,
            iconRegular79Data,
            navItem88Data,
            subnavContainer26Data,
            nav4Data,
            titleContainer9Data,
            inputSubtitleContainer82Data,
            inputBoxRegular1Data,
            inputRegularData,
            inputSubtitleContainer92Data,
            inputBoxRegular31Data,
            inputRegular2Data,
            inputSubtitleContainer93Data,
            inputBoxRegular41Data,
            inputRegular31Data,
            inputSubtitleContainer94Data,
            inputBoxRegular43Data,
            inputRegular32Data,
            inputSubtitleContainer83Data,
            inputBoxRegular44Data,
            inputRegular4Data,
            categoryTitle33Data,
            word1Data,
            uploadedItem1Data,
            categoryTitle47Data,
            uploadWindowSmall2Data,
            uploadWindowMedium2Data,
            categoryContainer22Data,
            categoryTitle48Data,
            uploadWindowSmall3Data,
            uploadWindowMedium3Data,
            categoryContainer23Data,
            categoryTitle49Data,
            word2Data,
            uploadedItem2Data,
            uploadWindowSmall4Data,
            uploadWindowMedium4Data,
            qrcodeContainer10Data,
            btnText2296Data,
            btnText2297Data,
            btnText2298Data,
            btnText2299Data,
            jkInfo10Data,
            btnText22100Data,
            btnText22101Data,
            btnText22102Data,
            readmoreInfo10Data,
            btnText22103Data,
            btnText22104Data,
            btnText22105Data,
            btnText22106Data,
            footer9Data,
            certificateData,
            logoContainer11Data,
            header310Data,
            navItem164Data,
            clipboardDarkGrey10Data,
            component112Data,
            navItem210Data,
            component1210Data,
            navItem38Data,
            component1310Data,
            navItem1029Data,
            iconRegular410Data,
            navItem529Data,
            subnavContainer326Data,
            iconRegular510Data,
            navItem68Data,
            iconRegular610Data,
            navItem79Data,
            iconRegular710Data,
            navItem89Data,
            subnavContainer27Data,
            nav8Data,
            titleContainer10Data,
            inputSubtitleContainer95Data,
            inputBoxRegular2Data,
            inputRegular51Data,
            inputBoxRegular5Data,
            btnOption52Data,
            btnCheckbox2220Data,
            btnOption62Data,
            textOption1Data,
            btnCheckbox2221Data,
            btnOption63Data,
            textOption2Data,
            inputSubtitleContainer96Data,
            inputBoxRegular6Data,
            inputRegular52Data,
            inputSubtitleContainer215Data,
            inputBoxRegular7Data,
            inputRegular6Data,
            inputSubtitleContainer102Data,
            inputBoxRegular32Data,
            inputRegular7Data,
            inputBoxRegular33Data,
            inputRegular81Data,
            inputBoxRegular34Data,
            inputRegular82Data,
            inputBoxRegular35Data,
            inputRegular83Data,
            inputSubtitleContainer97Data,
            inputBoxRegular8Data,
            inputRegular53Data,
            inputBoxRegular9Data,
            inputRegular9Data,
            inputSubtitleContainer103Data,
            inputBoxRegular10Data,
            inputRegular101Data,
            btn226Data,
            qrcodeContainer11Data,
            btnText22107Data,
            btnText22108Data,
            btnText22109Data,
            btnText22110Data,
            jkInfo11Data,
            btnText22111Data,
            btnText22112Data,
            btnText22113Data,
            readmoreInfo11Data,
            btnText22114Data,
            btnText22115Data,
            btnText22116Data,
            btnText22117Data,
            footer10Data,
            venderInfoData,
            logoContainer12Data,
            header311Data,
            navItem165Data,
            navItem39Data,
            clipboardDarkGrey11Data,
            component113Data,
            navItem211Data,
            component1211Data,
            navItem310Data,
            component1311Data,
            navItem10210Data,
            iconRegular411Data,
            navItem5210Data,
            subnavContainer327Data,
            iconRegular511Data,
            navItem69Data,
            iconRegular611Data,
            navItem710Data,
            iconRegular711Data,
            navItem810Data,
            subnavContainer28Data,
            nav9Data,
            titleContainer11Data,
            inputSubtitleContainer98Data,
            inputBoxRegular11Data,
            inputRegular54Data,
            inputSubtitleContainer104Data,
            inputBoxRegular12Data,
            inputRegular102Data,
            btn227Data,
            btnText9Data,
            qrcodeContainer12Data,
            btnText22118Data,
            btnText22119Data,
            btnText22120Data,
            btnText22121Data,
            jkInfo12Data,
            btnText22122Data,
            btnText22123Data,
            btnText22124Data,
            readmoreInfo12Data,
            btnText22125Data,
            btnText22126Data,
            btnText22127Data,
            btnText22128Data,
            footer11Data,
            accountInfoData,

        }
    })();

    const loginInfo = useLogin({
        doAuthorize: false
    });

    const value = {
        constants,
        loginInfo,
    }

    return (
        <AppContext.Provider value={value}>
            <SideNavProvider>{children}</SideNavProvider>
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };