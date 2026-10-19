import { Link } from "@heroui/react";
import NavLinks from "./NavLinks";

function NavBtns() {
  return (
    <ul className="m-0 hidden list-none items-center gap-5 p-0 md:flex ">
      {NavLinks.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            color="foreground"
            className="rounded-3xl p-1.5 text-sm font-medium transition-colors text-white hover:bg-indigo-900"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default NavBtns;
