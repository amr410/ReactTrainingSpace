import { Link } from "@heroui/react";
import { FaceRobot } from "@gravity-ui/icons";

export default function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3  text-white">
      <FaceRobot className="size-6" />

      <span className="whitespace-nowrap text-base font-semibold tracking-tight">
        training site
      </span>
    </Link>
  );
}
