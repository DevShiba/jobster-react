import React from "react";
import { BigSidebar, SmallSidebar, Navbar } from "../../components";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper className="container">
      <main className="">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
