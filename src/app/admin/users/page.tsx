import { SectionWithHeader, SimpleSection } from "@/components/ui/sections/SimpleSection";

import { PageTitle } from "@/components/ui/elements/PageTitle";
import UsersTable from "./components/UsersTable";
import { useTranslations } from "next-intl";


const UsersPage = () => {
  const t = useTranslations('UsersPage')

  return (
    <div className="space-y-4">
      <PageTitle>{t('title')}</PageTitle>
      <SectionWithHeader title={t('header')}>
        <div>
          <p className="text-gray-600">{t('description')}</p>
        </div>
      </SectionWithHeader>

      <SectionWithHeader title={t('UsersList.userList')}>
        <div className="space-y-4">
          
          <UsersTable/>
        </div>
      </SectionWithHeader>
    </div>
  );
};

export default UsersPage;
