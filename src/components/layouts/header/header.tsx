import { cn } from "@/lib/utils";
import Link from "next/link";
import AMLogo from "../../icons/am-logo";
import NavLinks from "./nav-links";
import ThemeButton from "./theme-button";
import DropButton from "./drop-button";
import UserButton from "../../auth/user-button";
import AdminPanelButton from "../../auth/admin-panel-button";

export default async function Header() {
  return (
    <>
      <header
        className={cn(
          "z-10 fixed w-full bg-background/80 backdrop-blur border-b shadow-sm"
        )}
      >
        <div className="flex items-center h-16 gap-8 px-4 mx-auto text-sm xl:container">
          <Link href={"/"} className="w-8">
            <AMLogo />
          </Link>
          <NavLinks className="hidden md:flex gap-4" />
          <AdminPanelButton />
          <div className="ml-auto flex gap-4">
            <ThemeButton className="hidden md:flex ml-auto" />
            <DropButton className="ml-auto md:hidden" />
            <UserButton />
          </div>
        </div>
      </header>
      <div className="h-16" />
    </>
  );
}
