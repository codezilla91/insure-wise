"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth/useAuth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Profile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });
      toast.success("Profile updated successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm p-8"
      >
        <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

        <div className="mb-8">
          <div className="flex items-center space-x-4">
            {user?.photoURL ? (
              <Image
                src={user.photoURL}
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              <UserCircleIcon className="h-24 w-24 text-gray-400" />
            )}
            <div>
              <h2 className="text-xl font-semibold">
                {user?.displayName || "User"}
              </h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Display Name
            </label>
            <Input
              type="text"
              value={formData.displayName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  displayName: e.target.value,
                }))
              }
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Picture URL
            </label>
            <Input
              type="url"
              value={formData.photoURL}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, photoURL: e.target.value }))
              }
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <Button type="submit" loading={loading}>
            Update Profile
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
