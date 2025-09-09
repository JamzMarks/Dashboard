"use client";
import { User as UserIcon } from "lucide-react";
import Image from "next/image";
import { UserButtonsActions } from "./UserButtonsActions";
import { useEffect, useState } from "react";
import { UsersClient } from "@/services/users.service";
import { User } from "@/types/user/user.type";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";



const StatusBadge = ({ status }: { status: boolean }) => {
  const colors = {
    true: "bg-green-100 text-green-600",
    false: "bg-red-100 text-red-600",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${status ? colors.true : colors.false}`}
    >
      {status ? 'Active' : 'Inactive'}
    </span>
  );
};

export default function UsersTable() {
  const t = useTranslations("UsersPage");
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await UsersClient.GetUsers();

        setUsers(res.data);
      } catch (err) {
        console.error("Erro ao buscar usuários:", err);
      }
    };

    fetchData();
  }, []);

  //   {
  //     avatar: "https://picsum.photos/50/50",
  //     firstName: "Lindsey",
  //     lastName: "Curtis",
  //     role: "Web Designer",
  //     email: "lindsey@example.com",
  //     status: "Active",
  //   },
  //   {
  //     avatar: "https://picsum.photos/50/50",
  //     firstName: "Kaiya",
  //     lastName: "George",
  //     role: "Project Manager",
  //     email: "kaiya@example.com",
  //     status: "Pending",
  //   },
  //   {
  //     avatar: "https://picsum.photos/50/50",
  //     firstName: "Zain",
  //     lastName: "Geidt",
  //     role: "Content Writer",
  //     email: "zain@example.com",
  //     status: "Active",
  //   },
  //   {
  //     avatar: "https://picsum.photos/50/50",
  //     firstName: "Abram",
  //     lastName: "Schleifer",
  //     role: "Digital Marketer",
  //     email: "abram@example.com",
  //     status: "Cancel",
  //   },
  //   {
  //     // avatar: "https://picsum.photos/50/50",
  //     firstName: "Carla",
  //     lastName: "George",
  //     role: "Front-end Developer",
  //     email: "carla@example.com",
  //     status: "Active",
  //   },
  // ];
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-neutral-800">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-sm text-gray-500 dark:text-gray-400">
            <th className="p-4">{t('UserTable.user')}</th>
            <th className="p-4">{t('UserTable.role')}</th>
            <th className="p-4">{t('UserTable.email')}</th>
            <th className="p-4">{t('UserTable.status')}</th>
            <th className="p-4">{t('UserTable.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr
              key={i}
              className="border-t border-gray-100 dark:border-neutral-800"
            >
              {/* Avatar + Nome */}
              <td className="p-4 flex items-center gap-3">
                {u.avatar ? (
                  <Image
                    src={u.avatar}
                    alt={u.firstName}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                    <UserIcon />
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {u.firstName} {u.lastName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t(`Roles.${u.role}`)}
                    </p>
                </div>
              </td>

              {/* Role */}
              <td className="p-4 text-gray-700 dark:text-gray-300">
                {t(`Roles.${u.role}`)}
              </td>

              {/* Email */}
              <td className="p-4 text-gray-700 dark:text-gray-300">
                {u.email}
              </td>

              {/* Status */}
              <td className="p-4">
                <StatusBadge status={u.isActive} />
              </td>

              {/* Status */}
              <td className="p-4">
                <UserButtonsActions userEmail={u.email} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
