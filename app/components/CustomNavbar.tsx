"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

const links = [
  {
    name: "Home",
    isActive: false,
  },
  {
    name: "About Us",
    isActive: false,
    subLink: "About Us",
  },
  {
    name: "Services",
    isActive: false,
    subLink: "Custom Software Development",
  },
  {
    name: "Product",
    isActive: false,
    subLink: "Android Based Order System",
  },
  {
    name: "Our Team",
    isActive: false,
  },
  {
    name: "Career",
    isActive: false,
  },
];

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between px-3 items-center h-[7vh]">
        <div>
          <p>logo</p>
        </div>
        <div>
          <Image
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer"
            src={"/icons/menu-icon.svg"}
            width={24}
            height={24}
            alt="menu icon"
          ></Image>
          <ul className="hidden px-3 space-y-2 py-1 md:space-y-0 md:space-x-5 md:flex">
            {links.map((value) => (
              <li
                className="select-none cursor-pointer"
                onClick={() => setIsActive((value.isActive = !isActive))}
              >
                <div className="flex justify-between items-center">
                  <div>{value.name}</div>
                  {value.subLink && (
                    <div>
                      <Image
                        src={"/icons/down-arrow-black.svg"}
                        width={16}
                        height={16}
                        alt="down arrow"
                      ></Image>
                    </div>
                  )}
                </div>
                <div>
                  <ul className="my-2 md:my-0 md:mt-4 absolute">
                    {value.subLink && value.isActive && (
                      <li className="mt-2 text-right md:mt-0 text-gray-700">
                        {value.subLink}
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? (
        <div className="h-[93vh] rounded-t-xl py-4 px-2  bg-gray-600 text-white md:hidden">
          <ul className="px-3 space-y-2 py-1 md:space-y-0 md:space-x-5 md:flex">
            {isOpen &&
              links.map((value) => (
                <li
                  className="select-none cursor-pointer"
                  onClick={() => setIsActive((value.isActive = !isActive))}
                >
                  <div className="flex justify-between items-center">
                    <div>{value.name}</div>
                    {value.subLink && (
                      <div>
                        <Image
                          src={"/icons/down-arrow.svg"}
                          width={16}
                          height={16}
                          alt="down arrow"
                        ></Image>
                      </div>
                    )}
                  </div>
                  <div>
                    {value.subLink && value.isActive && (
                      <ul className="my-2">
                        <li className="mt-2 text-right text-gray-300">
                          {value.subLink}
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default CustomNavbar;
