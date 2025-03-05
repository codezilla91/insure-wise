"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { useAuth } from "@/lib/auth/useAuth";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const insuranceProducts = [
  { name: "Car Insurance", href: "/insurance/car" },
  { name: "Home Insurance", href: "/insurance/home" },
  { name: "Life Insurance", href: "/insurance/life" },
  { name: "Business Insurance", href: "/insurance/business" },
];

const menuItems = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { user, loading, signOut } = useAuth();
  const userPhotoURL = user?.photoURL;

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-600">CompareWise</h1>
            </Link>

            <div className="hidden md:ml-8 md:flex md:items-center md:space-x-4">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="group inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Insurance
                      <ChevronDownIcon
                        className={`
                        ml-1 h-4 w-4 transition-transform
                        ${open ? "transform rotate-180" : ""}
                      `}
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 w-48 transform">
                        <div className="overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-1 p-2">
                            {insuranceProducts.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            {loading ? (
              <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
            ) : user ? (
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="flex items-center space-x-2 text-sm focus:outline-none">
                      <span className="text-gray-700">
                        {user.displayName || user.email}
                      </span>
                      {userPhotoURL ? (
                        <Image
                          src={userPhotoURL}
                          alt="Profile"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      ) : (
                        <UserCircleIcon className="h-8 w-8 text-gray-400" />
                      )}
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute right-0 z-10 mt-3 w-48 transform">
                        <div className="overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-1 p-2">
                            <Link
                              href="/dashboard"
                              className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              Dashboard
                            </Link>
                            <button
                              onClick={signOut}
                              className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                            >
                              Sign Out
                            </button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/signin"
                  className="text-blue-600 hover:text-blue-700 px-4 py-2 text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
