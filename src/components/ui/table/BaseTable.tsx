/* eslint-disable @typescript-eslint/no-explicit-any */
type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

type BaseTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
};

export function BaseTable<T>({
  columns,
  data,
  emptyMessage = "Nenhum dado encontrado",
}: BaseTableProps<T>) {
  if (data.length === 0) {
    return <p className="p-4 text-gray-500">{emptyMessage}</p>;
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-neutral-800">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-sm text-gray-500 dark:text-gray-400">
            {columns.map((col, i) => (
              <th key={i} className="p-4">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t border-gray-100 dark:border-neutral-800"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="p-4">
                  {col.render ? col.render(row) : (row as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
