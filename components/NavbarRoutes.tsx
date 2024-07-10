"use client";

import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import CheckTeacher from "./CheckTeacher";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {
        isSearchPage && (
          <div className="hidden md:block">
            <SearchInput/>
          </div>
        )
      }

      <div className="flex gap-x-2 ml-auto ">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : 
      <CheckTeacher/>
      }
      <div>
      <SignedIn>
      <UserButton afterSignOutUrl="/sign-in" />
      </SignedIn>
      <SignedOut>
         <SignUpButton />
      </SignedOut>
    </div>
    </div>
    </>
  );
};

export default NavbarRoutes;
