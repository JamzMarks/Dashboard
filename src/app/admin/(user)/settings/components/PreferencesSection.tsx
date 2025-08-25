"use client";

import { SimpleSection } from "@/components/ui/sections/SimpleSection";
import { useState } from "react";

export const PreferencesSection = () => {
  const [language, setLanguage] = useState("en");

  return (
    <SimpleSection>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Settings</h1>

      {/* Language */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Language</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-xs"
        >
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
          <option value="es">Spanish</option>
        </select>
      </div>


      {/* Debug output */}
      <div className="text-sm text-gray-500">
        <p>
          Selected language: <strong>{language}</strong>
        </p>
      </div>
    </SimpleSection>
  );
};
