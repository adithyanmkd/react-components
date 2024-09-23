"use client";

import React from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { useState } from "react";

const MenuItems = ({ items }: any) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li>
      {items.subMenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.subMenu} dropdown={dropdown} />
        </>
      ) : (
        <Link href={"#"}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
