"use client";


import { SimpleSection } from "@/components/ui/sections/SimpleSection";
import { useState } from "react";

export const AccountSection = () => {
  const [email, setEmail] = useState("user@example.com"); // Mock
  const createdAt = "2024-01-15"; // Mock
  const loginMethod = "Google"; // ou 'Credentials'
  const userId = "usr_1234567890"; // opcional

  const handleDelete = () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      // Implement delete logic
      alert("Account deleted (mock)");
    }
  };

  return (
    <SimpleSection>
      <h2 className="text-2xl font-bold text-gray-800">Account</h2>

      {/* Email */}
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Your email
        </label>
        <div className="flex space-x-4">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:outline-none max-w-xs"
          />
          <button className="bg-primary p-2 rounded-lg text-white cursor-pointer text-sm">
            Change email
          </button>
        </div>

        <p className="text-xs text-gray-500">
          We’ll use this email to contact you.
        </p>
      </div>

      {/* Account Metadata */}
      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-semibold">User ID:</span> {userId}
        </p>
        <p>
          <span className="font-semibold">Created At:</span> {createdAt}
        </p>
        <p>
          <span className="font-semibold">Login Method:</span> {loginMethod}
        </p>
      </div>

      {/* Delete Account */}
      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={handleDelete}
          className="text-red-600 text-sm hover:underline font-medium cursor-pointer"
        >
          Delete Account
        </button>
        <p className="text-xs text-gray-500 mt-1">
          This will permanently delete your account and all associated data.
        </p>
      </div>
    </SimpleSection>
  );
};
