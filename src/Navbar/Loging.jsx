import { Button } from "@heroui/react";

function Loging() {
  return (
    <div className="hidden items-center gap-4 sm:flex text-white">
      <Button
        variant="light"
        size="sm"
        radius="full"
        className="p-1.5 font-medium text-default-600 hover:cursor-pointer hover:rounded-3xl hover:bg-indigo-900 hover:text-foreground"
      >
        Log In
      </Button>

      <Button
        size="sm"
        radius="full"
        className="p-1.5 font-medium hover:rounded-3xl hover:bg-indigo-900 hover:text-black bg-slate-800"
      >
        Sign Up
      </Button>
    </div>
  );
}

export default Loging;
