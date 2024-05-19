import "./App.sass";
import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
import Signup from "pages/Signup";

//todo: remove FormProvider
function LoginWrapper(props) {
    return (
        <FormProvider>
            <Login {...props} />
        </FormProvider>
    );
}

function SignupWrapper(props) {
    return (
        <FormProvider>
            <Signup {...props} />
        </FormProvider>
    );
}

function InquiryInquieyItemWrapper(props) {
    return (
        <FormProvider>
            <InquiryInquieyItem {...props} />
        </FormProvider>
    );
}

function ProductInfoEditaddProductWrapper(props) {
    return (
        <FormProvider>
            <ProductInfoEditaddProduct {...props} />
        </FormProvider>
    );
}

function VenderInfoWrapper(props) {
    return (
        <FormProvider>
            <VenderInfo {...props} />
        </FormProvider>
    );
}

function AppRouter() {
    const globals = useContext(AppContext) || {};
    const ctx = globals.constants;
    return (ctx &&
        <Router>
            <Routes>
                <Route path="/login" element={<LoginWrapper {...ctx.loginData} />} />
                <Route path="/signup" element={<SignupWrapper {...ctx.loginData} />} />
                <Route path="/inquiry-history" element={<InquiryHistory {...ctx.inquiryHistoryData} />} />
                <Route path="/product-certificate-upload" element={<ProductCertificateUpload {...ctx.productCertificateUploadData} />} />
                <Route path="/inquiry-item" element={<InquiryInquieyItemWrapper {...ctx.inquiryInquieyItemData} />} />
                <Route path="/inquiry" element={<Inquiry {...ctx.inquiryData} />} />
                <Route path="/history" element={<History {...ctx.historyData} />} />
                <Route path="/upload-multiples" element={<UploadMultiples {...ctx.uploadMultiplesData} />} />
                <Route path="/product-info-edit-add-product" element={<ProductInfoEditaddProductWrapper {...ctx.productInfoEditaddProductData} />} />
                <Route path="/product-info" element={<ProductInfo {...ctx.productInfoData} />} />
                <Route path="/certificate" element={<Certificate {...ctx.certificateData} />} />
                <Route path="/vendor-info" element={<VenderInfoWrapper {...ctx.venderInfoData} />} />
                <Route path="/:path(|account-info)" element={<AccountInfo {...ctx.accountInfoData} />} />
            </Routes>
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