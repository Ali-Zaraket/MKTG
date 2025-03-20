import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import RootLayout from "./components/layouts/root";
import TraineeDiscount from "./pages/trainee-discount";
import UserGuide from "./pages/user-guide";
import TermsOfService from "./pages/terms-of-service";
import PrivacyPolicy from "./pages/privacy-policy";

// const TraineeDiscount = React.lazy(() => import("./pages/trainee-discount"));
// const UserGuide = React.lazy(() => import("./pages/user-guide"));
// const TermsOfService = React.lazy(() => import("./pages/terms-of-service"));
// const PrivacyPolicy = React.lazy(() => import("./pages/privacy-policy"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RootLayout />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/trainee-discount" element={<TraineeDiscount />} />
            <Route path="/userguide" element={<UserGuide />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
