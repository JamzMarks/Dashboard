import { AccountSection } from "./components/AccountSection";
import { PreferencesSection } from "./components/PreferencesSection";

const SettingsPage = () => {

  return (
    <div className=" space-y-4">
    <PreferencesSection/>
      <AccountSection/>

    </div>
  );
}

export default SettingsPage;
