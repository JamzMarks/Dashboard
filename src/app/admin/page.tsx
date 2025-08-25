'use client'
import { useSession } from 'next-auth/react';
import {useTranslations} from 'next-intl'; 

const Dashboard = () => {
  const t = useTranslations('HomePage');
  const session = useSession()
  return (
      <section>
        <h1>{t('title')}</h1>
        <div><p>a</p></div>
        {Array.from({ length: 1 }).map((_, i) => (
          <p key={i} className="w-full h-60">Item {i + 1}</p>
        ))}
        <p>{session.data?.user?.name}</p>
        <p>{session.data?.user?.id}</p>
      </section>
  );
}

export default Dashboard;
