"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Platform", href: "/" },
  { label: "Operations", href: "/operations" },
];

function linkClassName(active: boolean) {
  return active
    ? "border-b-2 border-primary py-1 text-sm font-semibold tracking-wide text-primary"
    : "py-1 text-sm tracking-wide text-slate-600 transition-colors hover:text-primary";
}

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHomePage = pathname === "/";
  const isBuildMyAppPage = pathname?.startsWith("/build-my-app");
  const isOperationsPage = pathname?.startsWith("/operations");

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <nav className="glass-surface fixed top-0 z-50 w-full border-b border-white/60 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 4.75h6.5a2.75 2.75 0 0 1 2.75 2.75v9.25a2.5 2.5 0 0 1-2.5 2.5H8.5A2.75 2.75 0 0 1 5.75 16.5V8A3.25 3.25 0 0 1 9 4.75Z" />
                <path d="M8.5 8.75h7" />
                <path d="M8.5 12h7" />
                <path d="M8.5 15.25h4.25" />
              </svg>
            </div>

            <Link
              href="/"
              className="bg-linear-to-br from-primary to-primary-container bg-clip-text font-display text-xl font-bold tracking-tight text-transparent"
              onClick={() => setMobileOpen(false)}
            >
              Clinical Curator
            </Link>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={linkClassName(
                  (isHomePage && item.label === "Platform") ||
                    (isOperationsPage && item.label === "Operations")
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/build-my-app"
              className={
                isBuildMyAppPage
                  ? "rounded-full bg-primary-container px-6 py-2.5 font-medium text-primary-foreground ring-2 ring-primary/20 transition-all duration-200"
                  : "rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-all duration-200 hover:opacity-90 active:scale-95"
              }
            >
              Build my app
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen ? (
          <div className="relative border-t border-white/60 bg-surface-container-lowest/95 backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-lg px-3 py-3 ${
                    (isHomePage && item.label === "Platform") ||
                    (isOperationsPage && item.label === "Operations")
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-slate-600 hover:bg-surface-container"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/build-my-app"
                className={
                  isBuildMyAppPage
                    ? "mt-2 rounded-full bg-primary-container px-6 py-3 text-center font-medium text-primary-foreground ring-2 ring-primary/20"
                    : "mt-2 rounded-full bg-primary px-6 py-3 text-center font-medium text-primary-foreground"
                }
                onClick={() => setMobileOpen(false)}
              >
                Build my app
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
}
