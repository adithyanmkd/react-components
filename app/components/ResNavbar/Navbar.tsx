import React from "react";
import menuData from "@/app/datas/menuItemData";
import Link from "next/link";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8">
        {menuData.map((item, index) => (
          <MenuItems items={item} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
