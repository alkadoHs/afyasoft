import ProfileDropdown from "@/components/ProfileDropdown";
import SelectUi from "@/components/SelectUi";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Button</Button>
      <SelectUi />
      <ProfileDropdown />
      <Link href={"dashboard"}>Dashboard</Link>
    </main>
  );
}
