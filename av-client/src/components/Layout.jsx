import React from "react"
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = () => {
  const [openSideNav, setOpenSideNav] = React.useState(false);

  return (
    <>
      <Header toggleDrawer={() => setOpenSideNav(true)}/>
      <SideNav open={openSideNav} toggleDrawer={() => setOpenSideNav(false)} />
    </>
  )
};

export default Layout;

