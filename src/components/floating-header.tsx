import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/north-east-yoga-logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function FloatingHeader() {
  const [open, setOpen] = useState(false);

  // Close the menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-center px-4 pt-4 sm:pt-6">
      <div className="pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:px-5">
        {/* Floating logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group relative -my-1 flex items-center"
          aria-label="North East Yoga and Meditation Centre — home"
        >
          <span className="absolute inset-0 -m-1 rounded-full bg-white/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <img
            src={logoImg}
            alt="North East Yoga and Meditation Centre logo"
            className="relative h-12 w-12 rounded-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-14 sm:w-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-white/90 transition-colors hover:bg-white/15 hover:text-white"
              activeProps={{ className: "bg-white/20 text-white" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger / kebab toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="pointer-events-auto absolute left-4 right-4 top-[calc(100%+0.5rem)] z-40 origin-top rounded-2xl border border-white/20 bg-white/10 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white"
              activeProps={{ className: "bg-white/20 text-white" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
