import "./App.sass";
import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/Login";
import InquiryHistory from "./components/InquiryHistory";
import ProductCertificateUpload from "./components/ProductCertificateUpload";
import InquiryInquieyItem from "./components/InquiryInquieyItem";
import Inquiry from "./components/Inquiry";
import History from "./components/History";
import UploadMultiples from "./components/UploadMultiples";
import ProductInfoEditaddProduct from "./components/ProductInfoEditaddProduct";
import ProductInfo from "./components/ProductInfo";
import Certificate from "./components/Certificate";
import VenderInfo from "./components/VenderInfo";
import AccountInfo from "./components/AccountInfo";
import { ProductEditProvider, AppContext, AppProvider, FormProvider } from "./contexts";

//import ProductSearch from "./components/ProductSearch"

function AppRouter() {
    const ctx = useContext(AppContext);
    return ( ctx &&
        <Router>
            <Switch>
                <Route path="/login">
                    <FormProvider>
                        <Login {...ctx.loginData} />
                    </FormProvider>
                </Route>
                <Route path="/inquiry-history">
                    <InquiryHistory {...ctx.inquiryHistoryData} />
                </Route>
                <Route path="/product-certificate-upload">
                    <ProductCertificateUpload {...ctx.productCertificateUploadData} />
                </Route>
                <Route path="/inquiry-item">
                    <FormProvider>
                        <InquiryInquieyItem {...ctx.inquiryInquieyItemData} />
                    </FormProvider>
                </Route>
                <Route path="/inquiry">
                    <Inquiry {...ctx.inquiryData} />
                </Route>
                <Route path="/history">
                    <History {...ctx.historyData} />
                </Route>
                <Route path="/upload-multiples">
                    <UploadMultiples {...ctx.uploadMultiplesData} />
                </Route>
                <Route path="/product-info-edit-add-product">
                    <FormProvider>
                        <ProductInfoEditaddProduct {...ctx.productInfoEditaddProductData} />
                    </FormProvider>
                </Route>
                <Route path="/product-info">
                    <ProductInfo {...ctx.productInfoData} />
                </Route>
                <Route path="/certificate">
                    <Certificate {...ctx.certificateData} />
                </Route>
                <Route path="/vendor-info">
                    <FormProvider>
                        <VenderInfo {...ctx.venderInfoData} />
                    </FormProvider>
                </Route>{
                    // <Route path="/product-search">
                    //     <ProductSearch />
                    // </Route>
                }
                <Route path="/:path(|account-info)">
                    <AccountInfo {...ctx.accountInfoData} />
                </Route>
            </Switch>
        </Router>
    );
}

function App() {

    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    );
}

export default App;
