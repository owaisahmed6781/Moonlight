import { Outlet } from "react-router-dom";
import Header from "./Header";
import TopHeader from "./Topheader";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
