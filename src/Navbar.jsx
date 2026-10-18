import { Button, Link } from "@heroui/react";
import { FaceRobot } from "@gravity-ui/icons";

function Navbar() {
  return (
    <div className="fixed top-4  inset-x-0 z-50 flex justify-center px-4 text-white ">
      <nav
        aria-label="Main Navigation"
        className="flex items-center bg-transparent justify-between w-full max-w-4/6 px-6 py-3 rounded-2xl backdrop-blur-md border border-default-200/50 shadow-lg shadow-blue-950"
      >
        {/* Section 1: Logo and Title */}
        <div className="flex items-center gap-5">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">
            <FaceRobot className="size-6 hover:cursor-pointer" />
          </div>
          <span className="font-semibold text-foreground text-base tracking-tight hover:cursor-pointer">
            training site
          </span>
        </div>

        {/* Section 2: Navigation Links */}
        <ul className="hidden md:flex items-center gap-5 list-none m-0 p-0">
          <li>
            <Link
              href="/"
              color="foreground"
              className="text-sm font-medium  transition-colors  rounded-3xl hover:bg-indigo-900 hover:rounded-3xl p-1.5"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              color="foreground"
              className="text-sm font-medium  transition-colors rounded-3xl hover:bg-indigo-900 hover:rounded-3xl p-1.5"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              color="foreground"
              className="text-sm font-medium  transition-colors rounded-3xl hover:bg-indigo-900 hover:rounded-3xl p-1.5"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Section 3: Login and Sign Up */}
        <div className="flex items-center gap-4">
          <Button
            variant="light"
            size="sm"
            radius="full"
            className="font-medium hover:bg-indigo-900 hover:rounded-3xl p-1.5 hover:cursor-pointer text-default-600 hover:text-foreground"
          >
            Log In
          </Button>
          <Button
            color="primary"
            size="sm"
            radius="full"
            className="font-medium hover:bg-indigo-900 hover:rounded-3xl p-1.5 "
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
