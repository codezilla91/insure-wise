"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth/useAuth";
import {
  HomeIcon,
  DocumentTextIcon,
  BellIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  ChevronRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const menuItems = [
    {
      title: "Dashboard Overview",
      icon: <HomeIcon className="h-6 w-6 text-gray-600" />,
      href: "/dashboard",
    },
    {
      title: "My Quotes",
      icon: <DocumentTextIcon className="h-6 w-6 text-gray-600" />,
      href: "/dashboard/quotes",
    },
    {
      title: "Profile Settings",
      icon: <UserCircleIcon className="h-6 w-6 text-gray-600" />,
      href: "/dashboard/profile",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm p-8"
        >
          <div className="flex items-center space-x-4 mb-8">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <UserCircleIcon className="h-12 w-12 text-gray-400" />
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {user.displayName || "User"}
              </h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.icon}
                <span className="ml-3 text-gray-900">{item.title}</span>
                <ChevronRightIcon className="h-5 w-5 ml-auto text-gray-400" />
              </Link>
            ))}

            <button
              onClick={signOut}
              className="flex items-center p-4 hover:bg-red-50 rounded-lg text-red-600 transition-colors"
            >
              <ArrowRightOnRectangleIcon className="h-6 w-6" />
              <span className="ml-3">Sign Out</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
