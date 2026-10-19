import { useState } from "react";
import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";

import Brand from "./Brand";
import NavBtns from "./NavBtns";
import Loging from "./Loging";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 ">
      <nav
        aria-label="Main Navigation"
        className="w-full sm:w-4xl lg:w-2/3 rounded-2xl border border-default-200/50 bg-transparent px-6 py-3 shadow-lg shadow-blue-950 backdrop-blur-md"
      >
        <div className="flex items-center justify-between">
          <Brand />

          <NavBtns />

          <div className="flex items-center gap-3">
            <Loging />

            <Button
              isIconOnly
              variant="light"
              size="sm"
              radius="full"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onPress={() => setIsMenuOpen((prev) => !prev)}
              className=" md:hidden text-white"
            >
              {isMenuOpen ? (
                <Xmark className="size-6" />
              ) : (
                <Bars className="size-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </nav>
    </header>
  );
}
