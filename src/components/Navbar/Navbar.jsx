import React from "react";
import NavbarLink from "../NavbarLink/NavbarLink";
import {Dashboard} from "../../assets/images/Icons"

import Logo from "../../assets/images/LogoE.svg";
import { navItems } from "../../constants";
import { useParams } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-col">
        <div className="flex justify-center mt-[26px] pb-[40px] border-b border-[#BDBDBD]">
          <div>
            <img
              className="flex justify-center mb-[22px] mx-[70px]"
              src={Logo}
              alt="Logo image"
            />
            <p className="text-white text-center text-[14px] font-semibold">
              Udemy Inter. school
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-[16px] text-white mx-8">
          {navItems.map(navItem => (
            <NavbarLink url={navItem.url} title={navItem.title}>
            <Dashboard />
          </NavbarLink>
          ))}
          {/* <NavbarLink url={"/dashboard"} title={"Dashboard"}>
            <Dashboard />
          </NavbarLink>
          <NavbarLink url={"/teachers"} title={"Teachers"}>
            <Dashboard />
          </NavbarLink>
          <NavbarLink url={"/students"} title={"Students"}>
            <Dashboard />
          </NavbarLink>
          <NavbarLink url={"/billing"} title={"Billing"}>
            <Dashboard />
          </NavbarLink>       
          <NavbarLink url={"/settings"} title={"Settings and Profile"}>
            <Dashboard />
          </NavbarLink>
          <NavbarLink url={"/exams"} title={"Exams"}>
            <Dashboard />
          </NavbarLink> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
