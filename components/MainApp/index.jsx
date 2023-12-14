import { useContext } from "react";
import Header3 from "components/Header3";
import SideNavMenu from "components/SideNavMenu";
import Footer from "components/Footer";
import { AppContext, FormProvider } from "contexts";
import LoginWiondow from "components/LoginWiondow";


export default function MainApp({ children, requireLogin = true }) {
    const { productInfoData, loggedIn, loginWiondowData } = useContext(AppContext);
    const { header3Props } = productInfoData;

    console.log("loginwindowdata", loginWiondowData)
    return (
        <div style={{ display: "flex", flexFlow: "column nowrap", width: "100%" }}>
            <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
            <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                <div style={{ padding: "1.2em", width: "fit-content" }}>
                    <SideNavMenu />
                </div>
                <div style={{ flexGrow: "1", display: "flex", flexFlow: "row nowrap", justifyContent: "center", padding: "1.2em" }}>
                    {(requireLogin && !loggedIn)
                        ?children
                        : children
                    }
                </div>
            </div>
            <div className="footer_-container" style={{ width: "100%", display: "flex", flexFlow: "column nowrap", justifyContent: "end" }}>
                <Footer />
            </div>
        </div>
    );
}
