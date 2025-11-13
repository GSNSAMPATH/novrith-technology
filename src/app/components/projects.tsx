"use client";

export default function Home() {
  return (
    <button
      className="
      relative group
      px-6 py-2 border-2 border-emerald-500
      font-semibold uppercase tracking-wide text-sm
      text-emerald-500
      overflow-hidden
      transition-all duration-300 ease-in-out
      hover:text-white
      dark:border-emerald-400 dark:text-emerald-400
      dark:hover:text-black
    "
    >
      {/* Background pseudo-element */}
      <span
        className="
        absolute inset-0
        bg-emerald-500
        dark:bg-emerald-400
        transition-all duration-300 ease-in-out
        z-0
        -translate-x-full group-hover:translate-x-0
        [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%)]
      "
      ></span>

      {/* Button content */}
      <span className="relative z-10 flex items-center space-x-2">
        <span>Watch Our Story</span>
        {/* Icon goes here */}
      </span>
    </button>
  );
}