import Link from "next/link";

const footerLinks = [
  { label: "Platform", href: "/" },
  { label: "Operations", href: "/operations" },
  { label: "Privacy", href: "#" },
];

function BrandIcon() {
  return (
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
  );
}

function ShareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.3 10.9 7.4-4.2" />
      <path d="m8.3 13.1 7.4 4.2" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19.25a7.25 7.25 0 1 0-7.25-7.25" />
      <path d="M4.75 15.5v-2.75A2.75 2.75 0 0 1 7.5 10h1.25v8H7.5a2.75 2.75 0 0 1-2.75-2.5Z" />
      <path d="M19.25 15.5v-2.75A2.75 2.75 0 0 0 16.5 10h-1.25v8h1.25a2.75 2.75 0 0 0 2.75-2.5Z" />
      <path d="M12 19.5c0 1.1-.9 2-2 2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200/50 bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-primary">
              <BrandIcon />
            </span>
            <Link
              href="/"
              className="font-display text-lg font-bold tracking-tight text-slate-900"
            >
              Clinical Curator
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide text-slate-500 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/50 pt-8 md:flex-row">
          <p className="text-sm tracking-wide text-slate-500">
            © 2026 Clinical Curator. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="mailto:?subject=Clinical%20Curator"
              className="text-slate-400 transition-colors hover:text-blue-500"
            >
              <ShareIcon />
            </a>
            <Link
              href="/build-my-app#booking"
              className="text-slate-400 transition-colors hover:text-blue-500"
            >
              <SupportIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
