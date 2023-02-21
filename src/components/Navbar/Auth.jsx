import React from "react";
import { Menu } from "@headlessui/react";
import { AiOutlineUser, AiFillCaretDown } from "react-icons/ai";
import {BiLinkExternal} from 'react-icons/bi'

function Auth() {
  const user = {
    name: "Kubilay Çalkan",
    avatar: "<AiOutlineUser />",
  };

  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl pr-2 bg-black hover:bg-active ${
              open ? "bg-active" : "bg-black"
            }`}
          >
            <AiOutlineUser className="w-8 h-8 rounded-full p-0.5 mr-2 " />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open ? 'rotate-180' : "" }>
              <AiFillCaretDown size={16} />
            </span>
          </Menu.Button>

          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded  ${active && "bg-white bg-opacity-10"}`}
                  href="#"
                >
                  Hesap
                  <BiLinkExternal size={16}/>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded  ${active && "bg-white bg-opacity-10"}`}
                  href="#"
                >
                  Profil
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded  ${active && "bg-white bg-opacity-10"}`}
                  href="#"
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
