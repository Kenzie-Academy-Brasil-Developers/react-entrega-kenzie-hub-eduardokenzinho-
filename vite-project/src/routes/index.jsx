import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<HomePage />} />
            </Route>
            <Route path="/" element={<PublicRoutes />}>
                <Route index element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
        </Routes>
    );
};