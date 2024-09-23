import Link from "next/link";
import React from "react";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      className={`dropdown ${
        dropdown ? "flex flex-col absolute space-y-3" : "hidden"
      }`}
    >
      {submenus.map((submenu, index) => (
        <li className="mt-4" key={index}>
          <Link href={"#"}>{submenu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
