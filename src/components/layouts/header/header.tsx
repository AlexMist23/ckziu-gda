import { cn } from "@/lib/utils";
import Link from "next/link";
import AMLogo from "../../icons/am-logo";
import NavLinks from "./nav-links";
import ThemeButton from "../../theme/theme-button";
import DropButton from "./drop-button";
import UserButton from "../../auth/user-button";
import AdminPanelButton from "../../auth/admin-panel-button";

export default function Header() {
  return (
    <>
      <header
        className={cn(
          "z-10 fixed w-full bg-background/80 backdrop-blur border-b shadow-sm"
        )}
      >
        <div className="flex items-center h-16 gap-4 px-4 mx-auto text-sm xl:container">
          <DropButton className="md:hidden" />
          <Link href={"/"} className="w-8">
            <AMLogo />
          </Link>
          <NavLinks className="hidden gap-4 md:flex" />
          <div className="flex items-center gap-4 ml-auto">
            <AdminPanelButton />
            <ThemeButton className="hidden md:flex" />
            <UserButton />
          </div>
        </div>
      </header>
      <div className="h-16" />
    </>
  );
}
