import { useContext } from "react";
import Header3 from "components/Header3";
import SideNavMenu from "components/SideNavMenu";
import Footer from "components/Footer";
import { AppContext } from "contexts";
import LoginWiondow from "components/LoginWiondow";


export default function MainApp({ children, requireLogin = true }) {
    const { constants, auth } = useContext(AppContext);
    const { productInfoData, loginWiondowData } = constants;
    const loggedIn = true;
    const { header3Props } = productInfoData;

    return (
        <div style={{ display: "flex", flexFlow: "column nowrap", width: "100%" }}>
            <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
            { (requireLogin && !loggedIn)
                ? loginWiondowData && <>{"NOT LOGGED IN"}<LoginWiondow {...loginWiondowData} /></>
                :
                <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                    <div /*className="col-lg-3"*/ style={{ padding: "1.2em", width: "fit-content" }}>
                        <SideNavMenu />
                    </div>
                    <div /*className="col-lg-9"*/ style={{ flexGrow: "1", display: "flex", flexFlow: "row nowrap", padding: "1.2em" }}>
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
