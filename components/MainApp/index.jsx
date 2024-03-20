import { useContext } from "react";
import Header3 from "components/Header3";
import SideNavMenu from "components/SideNavMenu";
import Footer from "components/Footer";
import { AppContext, FormProvider } from "contexts";
import LoginWiondow from "components/LoginWiondow";


export default function MainApp({ children, requireLogin = true }) {
    const { constants, loginInfo } = useContext(AppContext);
    const { productInfoData, loginWiondowData } = constants;
    //const { loggedIn } = loginInfo;
    const loggedIn = true;
    const { header3Props } = productInfoData;

    console.log("mainapp loginInfo", loginInfo);
    return (
        <div style={{ display: "flex", flexFlow: "column nowrap", width: "100%" }}>
            <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
            { (requireLogin && !loggedIn)
                ? loginWiondowData && <FormProvider>{"NOT LOGGED IN"}<LoginWiondow {...loginWiondowData} /></FormProvider>
                :
                <div className="container" style={{ display: "flex", flexFlow: "row nowrap" }}>
                    <div className="col-lg-3" style={{ padding: "1.2em", width: "fit-content" }}>
                        <SideNavMenu />
                    </div>
                    <div className="col-lg-9" style={{ flexGrow: "1", display: "flex", flexFlow: "row nowrap", padding: "1.2em" }}>
                        {children}
                    </div>
                </div>
            }
            <div className="footer_-container" style={{ width: "100%", display: "flex", flexFlow: "column nowrap", justifyContent: "end" }}>
                <Footer />
            </div>
        </div>
    );
}
