
// import { Outlet, } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import TopHeader from "./Topheader";

// import HomePage from "../SlideSection/HomePage";


// const Layout = () => {
//   return (
//     <div className="flex flex-col min-h-screen w-full sticky m-0">
//       <TopHeader />
//       <Header />
    
//       <main className="flex-1 w-full ">
//         <HomePage />
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TopHeader from "./Topheader";
import HomePage from "../SlideSection/HomePage";
import ScrollToTop from "./Topheader";

const Layout = () => {
  const location = useLocation();
  

  const hideSliderRoutes = ["/about", "/contact"];
  const shouldShowSlider = !hideSliderRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen w-full m-0">
      <ScrollToTop />
      <TopHeader />
      <Header />

      <main className="flex-1 w-full">
        {shouldShowSlider && <HomePage />}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
