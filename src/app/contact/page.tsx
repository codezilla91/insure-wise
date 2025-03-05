"use client";

import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <>
      {/* Full-width hero section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-full">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
              Have questions about insurance or loans in Namibia? Our team is
              here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact information and form section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Contact Information
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form or contact us directly using the information
                below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Office</p>
                  <p className="text-gray-600">
                    Independence Avenue, Windhoek, Namibia
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+264 61 123 4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">info@comparewise.com.na</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Working Hours</p>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Insurance Inquiry</option>
                  <option>Loan Inquiry</option>
                  <option>General Question</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59857.88091370088!2d17.0657184!3d-22.5695829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b5cb30c01ed%3A0xe4b84940cc445d3b!2sWindhoek%2C%20Namibia!5e0!3m2!1sen!2s!4v1635959876543!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </>
  );
}
