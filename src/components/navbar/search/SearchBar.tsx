import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="w-full px-4 flex items-center">
      <label className="flex items-center gap-3 w-full h-1/2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-900 shadow-sm">
        <Search className="text-gray-400 dark:text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          aria-invalid={false}
          className="w-full bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
      </label>
    </div>
  );
};
