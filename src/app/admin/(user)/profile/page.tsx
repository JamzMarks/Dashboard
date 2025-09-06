import Image from "next/image";
import { ProfileConnections } from "./components/ProfileConnections";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfilePlan } from "./components/ProfilePlan";
import { SimpleSection } from "@/components/ui/sections/SimpleSection";


const mockUser = {
  name: "James Marques",
  avatar_url: "https://picsum.photos/200/300",
  email: "jamzmarks@gmail.com",
};

const ProfilePage = () => {
  return (
    <div className="space-y-6 grid">
      <ProfileHeader />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfilePersonalInfo
          motherName="..."
          cpf="431.713.278-80"
          email="jamzmarks@gmail.com"
          phone="11997960292"
        />

        <ProfileCompanyInfo
          companyName="Papirus"
          cnpj="00.000.000/0000-00"
          site="https://papirus.com"
          status="CREATED"
        />
      </div> */}
      <SimpleSection className="flex gap-4 justify-between">
        <div className="flex gap-4">
          <div className="relative w-24 h-24 ">
            <Image
              src={mockUser.avatar_url}
              alt="profile image"
              fill
              className="rounded-full object-center"
            />
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">{mockUser.name}</p>
            <p className="text-gray-500">{mockUser.email}</p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly">
          <button className="cursor-pointer bg-primary text-white px-2 py-1 rounded-lg text-sm">
            Update account
          </button>
        </div>
      </SimpleSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProfileConnections googleConnected={false} githubConnected={true} />
      </div>
    </div>
  );
}

export default ProfilePage;