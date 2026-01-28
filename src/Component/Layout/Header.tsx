

// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { NavLink } from "react-router-dom";
// // import logo from "../../assets/logo.png"

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Our Expertise", path: "/Expertise" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
//         scrolled
//           ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm"
//           : "bg-white/90"
//       }`}
//     >
//       {/* <div className="flex items-center justify-between gap-10 px-6 md:px-12 py-4 text-slate-900">
      
//         <div className="text-2xl md:text-3xl font-extrabold tracking-tight cursor-pointer">
//           <img
//             src={logo}
//             alt="logo"
//             style={{ height: "48px", width: "auto" }}
//           />
//           Moonlight <span className="text-slate-600">Overseas</span>
//         </div>

//         <nav className="hidden md:flex gap-10 text-sm font-medium">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               end={item.path === "/"}
//               className={({ isActive }) =>
//                 `relative group transition-colors ${
//                   isActive
//                     ? "text-slate-900"
//                     : "text-slate-600 hover:text-slate-900"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <span className="relative">{item.name}</span>

//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-slate-900 transition-all duration-300 ease-out
//                     ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
//                   />
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-slate-900 focus:outline-none"
//         >
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div> */}


// <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
//   <div className="flex items-center justify-between gap-10 px-6 md:px-12 py-4 text-slate-900">

//     {/* Logo */}
//     <div className="flex items-center gap-3 cursor-pointer   ">
//       {/* <img
//         src={logo}
//         alt="logo"
//         className="h-12 w-auto object-contain   rounded-full bg-cover  "
//       /> */}
//         <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
//           <a href="/"> Moonlight <span className="text-slate-600">Overseas</span></a>
//         </span>
//     </div>

//     {/* Desktop Nav */}
//     <nav className="hidden md:flex gap-10 text-sm font-medium">
//       {navItems.map((item) => (
//         <NavLink
//           key={item.name}
//           to={item.path}
//           end={item.path === "/"}
//           className={({ isActive }) =>
//             `relative group transition-colors ${
//               isActive
//                 ? "text-slate-900"
//                 : "text-slate-600 hover:text-slate-900"
//             }`
//           }
//         >
//           {({ isActive }) => (
//             <>
//               <span className="relative">{item.name}</span>
//               <span
//                 className={`absolute left-0 -bottom-1 h-[2px] bg-slate-900 transition-all duration-300
//                 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
//               />
//             </>
//           )}
//         </NavLink>
//       ))}
//     </nav>

//     {/* Mobile Toggle */}
//     <button
//       onClick={() => setOpen(!open)}
//       className="md:hidden text-slate-900 focus:outline-none"
//     >
//       {open ? <X size={26} /> : <Menu size={26} />}
//     </button>

//   </div>
// </div>

    
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden ${
//           open
//             ? "max-h-96 bg-white/90 backdrop-blur-md border-t border-slate-200"
//             : "max-h-0"
//         }`}
//       >
//         <nav className="flex flex-col items-center gap-6 py-6 text-slate-700 text-base font-medium">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               end={item.path === "/"}
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `relative transition-colors ${
//                   isActive
//                     ? "text-slate-900 font-semibold"
//                     : "hover:text-slate-900"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <span className="relative">{item.name}</span>

//                   {/* Mobile underline for active */}
//                   {isActive && (
//                     <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-slate-900" />
//                   )}
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png"

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Expertise", path: "/Expertise" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-11 left-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between gap-10 px-6 md:px-12 py-4 text-slate-900">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* <img src={logo} alt="logo" className="h-12 w-auto object-contain" /> */}
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
           <Link to="/">
              Moonlight <span className="text-slate-600">Overseas</span>
            </Link>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative group transition-colors ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative">{item.name}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-slate-900 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-900 focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open
            ? "max-h-96 bg-white border-t border-slate-200"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6 text-slate-700 text-base font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `relative transition-colors ${
                  isActive
                    ? "text-slate-900 font-semibold"
                    : "hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative">{item.name}</span>
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-slate-900" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
