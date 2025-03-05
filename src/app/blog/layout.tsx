"use client";

import { motion } from "framer-motion";
import {
  RssIcon,
  BookmarkIcon,
  HashtagIcon,
} from "@heroicons/react/24/outline";

const categories = [
  { name: "Insurance Guides", count: 12 },
  { name: "Personal Finance", count: 8 },
  { name: "Loan Advice", count: 10 },
  { name: "Market Updates", count: 6 },
  { name: "Financial Planning", count: 9 },
];

const popularPosts = [
  {
    title: "How to Choose the Right Car Insurance in Namibia",
    date: "2024-01-10",
    slug: "choose-right-car-insurance-namibia",
  },
  {
    title: "First-Time Home Buyer's Guide to Mortgages",
    date: "2024-01-08",
    slug: "first-time-home-buyer-guide",
  },
  {
    title: "Understanding Life Insurance Benefits",
    date: "2024-01-05",
    slug: "understanding-life-insurance-benefits",
  },
];

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">{children}</div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Search */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Search</h3>
              <input
                type="search"
                placeholder="Search articles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Popular Posts */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BookmarkIcon className="h-5 w-5 mr-2" />
                Popular Posts
              </h3>
              <ul className="space-y-4">
                {popularPosts.map((post) => (
                  <li key={post.slug}>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-sm hover:text-blue-600"
                    >
                      {post.title}
                    </a>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <HashtagIcon className="h-5 w-5 mr-2" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="flex justify-between items-center"
                  >
                    <a href="#" className="text-sm hover:text-blue-600">
                      {category.name}
                    </a>
                    <span className="text-xs text-gray-500">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <RssIcon className="h-5 w-5 mr-2" />
                Newsletter
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest financial tips and insights delivered to your
                inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
