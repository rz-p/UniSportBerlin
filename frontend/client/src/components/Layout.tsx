import React, {FC, ReactNode} from "react";
import Header from "./Header";
import NavBar from "./NavBar";

// to define the expected props for the Layout
interface LayoutProps {
    children: ReactNode;
  }

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
        <Header/>
        <div>
        <NavBar/>
        {children}
        </div>
        </>
    )
}

export default Layout;
 