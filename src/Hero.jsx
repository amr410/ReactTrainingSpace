import { Button, Chip } from "@heroui/react";
function Hero() {
  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-linear-to-r from-slate-950 via-slate-950 to-indigo-950 px-6 py-24 text-white lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/15 blur-2xl"
      />{" "}
      <div className="container mx-auto">
        <div className="flex max-w-2xl flex-col items-start text-left">
          <Chip
            variant="soft"
            color="secondary"
            size="sm"
            className="mb-6 font-medium text-purple-200"
          >
            Exclusive Access
          </Chip>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to my{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              training space
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            Since you’re here, you have claimed access to my training and
            personalized material not available to everyone you should
            appreciate 😉
          </p>
        </div>
        <Button
          className={
            "my-8 mx-3 bg-indigo-800 py-3 px-3.5 border shadow-indigo-800 border-indigo-900 rounded-2xl hover:bg-transparent "
          }
        >
          See more
        </Button>
      </div>
    </div>
  );
}

export default Hero;
