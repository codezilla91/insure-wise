"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  UserIcon,
  ChatBubbleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { BlogPost } from "@/types/blog";

const ITEMS_PER_PAGE = 6;

// Mock data - we'll replace this with Strapi data later
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Choose the Right Car Insurance in Namibia",
    excerpt:
      "A comprehensive guide to help you navigate through various car insurance options in Namibia...",
    content: "Full content here...",
    author: {
      name: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe",
    },
    publishedAt: "2024-01-10",
    readTime: 5,
    slug: "choose-right-car-insurance-namibia",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
    category: "Insurance Guides",
    comments: 12,
    date: "2024-01-10",
  },
  {
    id: "2",
    title: "First-Time Home Buyer's Guide to Mortgages",
    excerpt:
      "Everything you need to know about getting your first mortgage in Namibia...",
    content: "Full content here...",
    author: {
      name: "Jane Smith",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith",
    },
    publishedAt: "2024-01-08",
    readTime: 8,
    slug: "first-time-home-buyer-guide",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    category: "Personal Finance",
    comments: 8,
    date: "2024-01-08",
  },
  {
    id: "3",
    title: "Understanding Life Insurance Benefits",
    excerpt:
      "A detailed look at life insurance benefits and how they protect your family...",
    content: "Full content here...",
    author: {
      name: "Mike Johnson",
      avatar: "https://ui-avatars.com/api/?name=Mike+Johnson",
    },
    publishedAt: "2024-01-05",
    readTime: 6,
    slug: "understanding-life-insurance-benefits",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
    category: "Insurance Guides",
    comments: 15,
    date: "2024-01-05",
  },
  {
    id: "4",
    title: "Top 5 Business Insurance Mistakes to Avoid",
    excerpt:
      "Learn about common pitfalls when choosing business insurance and how to avoid them...",
    content: "Full content here...",
    author: {
      name: "Sarah Williams",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Williams",
    },
    publishedAt: "2024-01-03",
    readTime: 7,
    slug: "business-insurance-mistakes",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    category: "Business Insurance",
    comments: 9,
    date: "2024-01-03",
  },
  {
    id: "5",
    title: "Understanding Vehicle Insurance Excess",
    excerpt:
      "A detailed guide to understanding how vehicle insurance excess works in Namibia...",
    content: "Full content here...",
    author: {
      name: "David Brown",
      avatar: "https://ui-avatars.com/api/?name=David+Brown",
    },
    publishedAt: "2024-01-01",
    readTime: 6,
    slug: "vehicle-insurance-excess-guide",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
    category: "Insurance Guides",
    comments: 11,
    date: "2024-01-01",
  },
  {
    id: "6",
    title: "Home Insurance: What You Need to Know",
    excerpt:
      "Essential information about protecting your home with the right insurance coverage...",
    content: "Full content here...",
    author: {
      name: "Emma Davis",
      avatar: "https://ui-avatars.com/api/?name=Emma+Davis",
    },
    publishedAt: "2023-12-28",
    readTime: 8,
    slug: "home-insurance-essentials",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    category: "Insurance Guides",
    comments: 7,
    date: "2023-12-28",
  },
  {
    id: "7",
    title: "Investment Tips for Insurance Policies",
    excerpt:
      "Smart strategies for maximizing returns on insurance investments...",
    content: "Full content here...",
    author: {
      name: "Robert Chen",
      avatar: "https://ui-avatars.com/api/?name=Robert+Chen",
    },
    publishedAt: "2023-12-25",
    readTime: 5,
    slug: "insurance-investment-tips",
    image:
      "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80",
    category: "Financial Planning",
    comments: 13,
    date: "2023-12-25",
  },
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPosts = mockPosts.length;
  const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);

  const currentPosts = mockPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-200 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Financial Wisdom Hub
        </h1>
        <p className="text-xl text-gray-600">
          Expert insights on insurance, loans, and personal finance in Namibia
        </p>
      </div>

      <div className="grid gap-12">
        {currentPosts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-x-4 text-sm">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500">
                  <CalendarIcon className="h-4 w-4 inline mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="text-gray-500">{post.readTime} min read</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 text-gray-600 line-clamp-3">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="flex items-center gap-x-2">
                  <UserIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">
                    {post.author.name}
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <ChatBubbleLeftIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">
                    {post.comments} comments
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
