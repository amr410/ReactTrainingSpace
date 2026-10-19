import { Button, Link } from "@heroui/react";
import NavLinks from "./NavLinks";

function MobileMenu({ onClose }) {
  return (
    <div className="mt-4 border-t border-default-200/50 pt-4 md:hidden text-white">
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {NavLinks.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              color="foreground"
              onPress={onClose}
              className="block rounded-2xl p-2.5 text-sm font-medium transition-colors hover:bg-indigo-900 text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-col gap-2 border-t border-default-200/50 pt-3 sm:hidden">
        <Button
          variant="light"
          size="sm"
          radius="full"
          onPress={onClose}
          className="w-full font-medium text-default-600 hover:bg-indigo-900 hover:text-foreground"
        >
          Log In
        </Button>

        <Button
          size="sm"
          radius="full"
          onPress={onClose}
          className="w-full font-medium hover:bg-indigo-900 bg-slate-900 "
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
export default MobileMenu;
