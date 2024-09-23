import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="h-[5vh] items-center flex px-4 bg-red-200">
        <Link className="w-1/3" href={"#"}>
          Header
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
