import "./App.sass";
import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Login from "pages/Login";
import InquiryHistory from "pages/InquiryHistory";
import ProductCertificateUpload from "pages/ProductCertificateUpload";
import InquiryInquieyItem from "pages/InquiryInquieyItem";
import Inquiry from "pages/Inquiry";
import History from "pages/History";
import UploadMultiples from "pages/UploadMultiples";
import ProductInfoEditaddProduct from "pages/ProductInfoEditaddProduct";
import ProductInfo from "pages/ProductInfo";
import Certificate from "pages/Certificate";
import VenderInfo from "pages/VenderInfo";
import AccountInfo from "pages/AccountInfo";
import { AppContext, AppProvider, FormProvider } from "contexts";

function AppRouter() {
    const globals = useContext(AppContext) || {};
    const ctx = globals.constants;
    return (ctx &&
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
                </Route>
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
