'use client'

import React from 'react'
import { Badge } from "@nextui-org/react";
import Image from 'next/image';
import Logo from '../../public/images/logo.svg'
import Link from 'next/link';
import SearchModal from '../searchModal/SearchModal';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { TabletSmartphone, Headset, Tablet, Watch, Gamepad2, Newspaper, Laptop ,ShoppingCart, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
      <div className="shadow pb-2 mb-5">
        <div className="container px-4 mx-auto">
          <Navbar className="py-4 w-full mb-5">
            <NavbarBrand>
              <Link href='/'>
              <Image src={Logo} alt="پیکودوز" />
              </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <SearchModal />
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href='/cart' className="flex border p-2 rounded-xl border-slate-200">
                  <Badge content="5" color="danger" placement="bottom-right">
                    <ShoppingCart className="text-slate-900" />
                  </Badge>
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href='/login' className="flex border py-2 px-4 rounded-xl border-slate-200 text-slate-900 hover:border-slate-300">
                  ورود / ثبت نام
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <div className="flex items-center gap-4">
            <Dropdown>
              <DropdownTrigger>
                <Button className="shadow-none text-lg font-medium bg-white hover:bg-white">
                  <div className="flex items-center gap-2">
                    <Tablet className="text-slate-800" />
                    <span className="text-slate-800">موبایل</span>
                    <ChevronDown width={18}/>
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>New file</DropdownItem>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button className="shadow-none text-lg text-slate-800 font-medium bg-white hover:bg-white">
                  <div className="flex items-center gap-2">
                    <Headset className="text-slate-800" />
                    <span className="text-slate-800">هدفون</span>
                    <ChevronDown width={18}/>
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>New file</DropdownItem>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button className="shadow-none text-lg font-medium bg-white hover:bg-white">
                  <div className="flex items-center gap-2">
                    <TabletSmartphone className="text-slate-800" />
                    <span className="text-slate-800">تبلت</span>
                    <ChevronDown width={18}/>
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>New file</DropdownItem>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button className="shadow-none text-lg font-medium bg-white hover:bg-white">
                  <div className="flex items-center gap-2">
                    <Watch className="text-slate-800" />
                    <span className="text-slate-800">ساعت</span>
                    <ChevronDown width={18}/>
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>New file</DropdownItem>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button className="shadow-none text-lg font-medium bg-white hover:bg-white">
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="text-slate-800" />
                    <span className="text-slate-800">گیمینگ</span>
                    <ChevronDown width={18}/>
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>New file</DropdownItem>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button className="shadow-none text-lg font-medium bg-white hover:bg-white">
                  <div className="flex items-center gap-2">
                    <Newspaper className="text-slate-800" />
                    <span className="text-slate-800">لوازم خانگی</span>
                    <ChevronDown width={18}/>
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>New file</DropdownItem>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button className="shadow-none text-lg font-medium bg-white hover:bg-white">
                  <div className="flex items-center gap-2">
                    <Laptop className="text-slate-800" />
                    <span className="text-slate-800">لپ تاپ</span>
                    <ChevronDown width={18}/>
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>New file</DropdownItem>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
  )
}

export default Header