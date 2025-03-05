"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  TruckIcon,
  HomeIcon,
  HeartIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

// Using the same insurance types from the home page
// Reference: apps/web-revised/src/app/page.tsx
// startLine: 36
// endLine: 62

const insuranceTypes = [
  {
    name: "Car Insurance",
    description: "Get comprehensive cover for your vehicle",
    icon: TruckIcon,
    href: "/get-quote/car",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-200",
  },
  {
    name: "Home Insurance",
    description: "Protect your property and belongings",
    icon: HomeIcon,
    href: "/get-quote/home",
    color: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "hover:border-green-200",
  },
  {
    name: "Life Insurance",
    description: "Secure your family's financial future",
    icon: HeartIcon,
    href: "/get-quote/life",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    borderColor: "hover:border-pink-200",
  },
  {
    name: "Business Insurance",
    description: "Comprehensive coverage for your business",
    icon: BuildingOffice2Icon,
    href: "/get-quote/business",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "hover:border-purple-200",
  },
];

export default function GetQuote() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            What would you like to insure?
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose an insurance type to get started with your quote
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insuranceTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={type.href}>
                <div
                  className={`
                    p-8 rounded-2xl border-2 border-gray-100 bg-white
                    ${type.borderColor} transition-all duration-300
                    hover:shadow-lg hover:-translate-y-1
                  `}
                >
                  <div className={`p-4 ${type.color} rounded-xl w-fit`}>
                    <type.icon className={`h-8 w-8 ${type.iconColor}`} />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-gray-900">
                    {type.name}
                  </h2>
                  <p className="mt-2 text-gray-600">{type.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
