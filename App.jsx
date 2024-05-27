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
import { AppContext, AppProvider } from "contexts";
import Signup from "pages/Signup";

function AppRouter() {
    const globals = useContext(AppContext) || {};
    const ctx = globals.constants;
    return (ctx &&
        <Router>
            <Routes>
                <Route path="/login" element={<Login {...ctx.loginData} />} />
                <Route path="/signup" element={<Signup {...ctx.loginData} />} />
                <Route path="/inquiry-history" element={<InquiryHistory {...ctx.inquiryHistoryData} />} />
                <Route path="/product-certificate-upload" element={<ProductCertificateUpload {...ctx.productCertificateUploadData} />} />
                <Route path="/inquiry-item" element={<InquiryInquieyItem {...ctx.inquiryInquieyItemData} />} />
                <Route path="/inquiry" element={<Inquiry {...ctx.inquiryData} />} />
                <Route path="/history" element={<History {...ctx.historyData} />} />
                <Route path="/upload-multiples" element={<UploadMultiples {...ctx.uploadMultiplesData} />} />
                <Route path="/product-info-edit-add-product" element={<ProductInfoEditaddProduct {...ctx.productInfoEditaddProductData} />} />
                <Route path="/product-info" element={<ProductInfo {...ctx.productInfoData} />} />
                <Route path="/certificate" element={<Certificate {...ctx.certificateData} />} />
                <Route path="/vendor-info" element={<VenderInfo {...ctx.venderInfoData} />} />
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