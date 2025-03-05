"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChevronRightIcon,
  BuildingOffice2Icon,
  HomeIcon,
  TruckIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Trusted Providers",
    description: "Compare quotes from Namibia's leading insurance providers",
    icon: ShieldCheckIcon,
  },
  {
    name: "Quick & Easy",
    description:
      "Get your insurance quote in minutes, tailored to Namibian requirements",
    icon: ClockIcon,
  },
  {
    name: "Save Money",
    description: "Save up to N$3,500 annually by comparing insurance rates",
    icon: CurrencyDollarIcon,
  },
];

const insuranceTypes = [
  {
    name: "Car Insurance",
    description: "Comprehensive cover for your vehicle on Namibian roads",
    icon: TruckIcon,
    href: "/get-quote/car",
  },
  {
    name: "Home Insurance",
    description:
      "Protect your property against theft, fire, and natural disasters",
    icon: HomeIcon,
    href: "/get-quote/home",
  },
  {
    name: "Life Insurance",
    description: "Secure your family's future with comprehensive life coverage",
    icon: HeartIcon,
    href: "/get-quote/life",
  },
  {
    name: "Business Insurance",
    description: "Tailored coverage for Namibian businesses, big and small",
    icon: BuildingOffice2Icon,
    href: "/get-quote/business",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Compare Insurance in Namibia
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get quotes from Namibia's leading insurers like Old Mutual,
              Hollard, and Santam. Save up to N$3,500 on your insurance. Quick,
              easy, and free.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/get-quote">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Your Free Quote
                </Button>
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {insuranceTypes.map((type) => (
              <motion.div
                key={type.name}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-blue-600 mb-4">
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">{type.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{type.description}</p>
                <Link
                  href={type.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600"
                >
                  Compare quotes
                  <ChevronRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600" />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
