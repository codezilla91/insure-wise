"use client";

import { motion } from "framer-motion";
import {
  TruckIcon,
  HomeIcon,
  HeartIcon,
  BuildingOffice2Icon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Referencing insurance types from home page
// Reference: apps/web-revised/src/app/page.tsx (lines 36-62)

const mockQuotes = [
  {
    id: 1,
    type: "Car Insurance",
    icon: TruckIcon,
    provider: "Old Mutual",
    premium: "N$850",
    coverage: "Comprehensive",
    vehicle: "2020 Toyota Hilux",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: 2,
    type: "Home Insurance",
    icon: HomeIcon,
    provider: "Hollard",
    premium: "N$1,200",
    coverage: "Building & Contents",
    property: "Residential House",
    status: "active",
    date: "2024-01-10",
  },
  {
    id: 3,
    type: "Life Insurance",
    icon: HeartIcon,
    provider: "Santam",
    premium: "N$450",
    coverage: "Term Life",
    amount: "N$1,000,000",
    status: "expired",
    date: "2023-12-20",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  active: "bg-green-100 text-green-800",
  expired: "bg-red-100 text-red-800",
};

export default function Quotes() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/dashboard"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">My Quotes</h1>
          <p className="mt-2 text-gray-600">
            View and compare your insurance quotes
          </p>
        </div>
        <Link href="/get-quote">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Get New Quote
          </motion.button>
        </Link>
      </div>

      <div className="space-y-6">
        {mockQuotes.map((quote, index) => (
          <motion.div
            key={quote.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <quote.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {quote.type}
                  </h3>
                  <p className="text-sm text-gray-500">{quote.provider}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  statusColors[quote.status as keyof typeof statusColors]
                }`}
              >
                {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Monthly Premium</p>
                <p className="text-lg font-semibold">{quote.premium}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Coverage Type</p>
                <p className="text-lg font-semibold">{quote.coverage}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date Generated</p>
                <p className="text-lg font-semibold">{quote.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  {quote.vehicle || quote.property || "Coverage Amount"}
                </p>
                <p className="text-lg font-semibold">
                  {quote.vehicle || quote.property || quote.amount}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                Download PDF
              </button>
              <button className="text-blue-600 hover:text-blue-700">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
