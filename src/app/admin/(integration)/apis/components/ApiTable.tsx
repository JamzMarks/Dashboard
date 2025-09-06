
import { SimpleSkeletonLoading } from "@/components/ui/table/SimpleSkeletonLoading";
import { SimpleTable, SimpleTableCell, SimpleTableHeader, SimpleTableRow } from "@/components/ui/table/SimpleTable";
import { useTranslations } from "next-intl";

export const ApiTable = () => {
  const t = useTranslations("ApiPage.ApiTable");
  const ApiTableHead = [t("key"), t("notes"), t("createdAt"), t("actions")];
  return (
    <SimpleTable
      head={
        <>
          {ApiTableHead.map((header) => (
            <SimpleTableHeader key={header}>{header}</SimpleTableHeader>
          ))}
        </>
      }
      body={
        <>
          <SimpleTableRow>
            <SimpleTableCell>Chave 1</SimpleTableCell>
            <SimpleTableCell>Nota 1</SimpleTableCell>
            <SimpleTableCell>01/01/2022</SimpleTableCell>
            <SimpleTableCell>Ação 1</SimpleTableCell>
          </SimpleTableRow>
          {<SimpleSkeletonLoading cellsLength={ApiTableHead.length} />}
          {ApiTableHead.length !== 0 && (
            <SimpleTableRow>
              <td className="w-full text-center" colSpan={ApiTableHead.length}>
                No keys found
              </td>
            </SimpleTableRow>
          )}
        </>
      }
    />
  );
};
