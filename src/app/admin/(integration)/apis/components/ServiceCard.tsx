import Link from "next/link";

type CardProps = {
    title: string;
    description: string;
    href: string;
};

export function ServiceCard({title, description, href}: CardProps) {
  return (
    <Link href={href} target="_blank">
      <div className="cursor-pointer p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
        <span className="inline-block mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
          Abrir →
        </span>
      </div>
    </Link>
  );
}