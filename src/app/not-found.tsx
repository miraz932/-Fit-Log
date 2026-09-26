import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      
      <h1 className="text-7xl sm:text-8xl font-bold text-[#C2F800]">
        404
      </h1>

      <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-2 text-sm sm:text-base text-[#9CA3AF]">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-[#C2F800] px-6 py-2.5 font-semibold text-black hover:bg-[#d0ff35]"
      >
        Go Back Home
      </Link>

    </div>
  );
}