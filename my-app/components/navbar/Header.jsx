'use client'

import React from 'react'
import { Badge } from "@nextui-org/react";
import Image from 'next/image';
import Logo from '../../public/images/logo.svg'
import SearchModal from '../searchModal/SearchModal';
import { ShoppingCart, ChevronDown } from 'lucide-react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";

const Header = () => {
  return (
    <div>
      <div className="bg-white shadow py-4 mb-6 hidden">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Link href='/'>
              <Image src={Logo} alt="پیکودوز" width={180} />
            </Link>
            <SearchModal />
            <div className="flex items-center gap-4">
              <Link href='/cart' className="flex border p-2 rounded-xl border-slate-200">
                <Badge content="5" color="danger" placement="bottom-right">
                  <ShoppingCart className="text-slate-900" />
                </Badge>
              </Link>
              <Link href='/login' className="flex border py-2 px-4 rounded-xl border-slate-200 text-slate-900 hover:border-slate-300">
                ورود / ثبت نام
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Navbar className="py-3 shadow">
          <NavbarBrand>
            <Image src={Logo} alt="پیکودوز" />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ChevronDown width='18' />}
                    radius="sm"
                    variant="light"
                  >
                    Features
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps to meet user demand, automagically, based on load."
                >
                  Autoscaling
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                >
                  Usage Metrics
                </DropdownItem>
                <DropdownItem
                  key="production_ready"
                  description="ACME runs on ACME, join us and others serving requests at web scale."
                >
                  Production Ready
                </DropdownItem>
                <DropdownItem
                  key="99_uptime"
                  description="Applications stay on the grid with high availability and high uptime guarantees."
                >
                  +99% Uptime
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Overcome any challenge with a supporting team ready to respond."
                >
                  +Supreme Support
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavbarItem>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </div>

  )
}

export default Header