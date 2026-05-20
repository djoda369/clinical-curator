import type { IconKey } from "@/content/verticals/types";

type LandingIconProps = {
  name: IconKey;
  className?: string;
};

export function LandingIcon({
  name,
  className = "h-6 w-6",
}: LandingIconProps) {
  switch (name) {
    case "inactive":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21a4 4 0 0 0-8 0" />
          <circle cx="12" cy="8" r="4" />
          <path d="M4 4l16 16" />
        </svg>
      );
    case "noShow":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M3 10h18" />
          <path d="M9 14l6 6" />
          <path d="M15 14l-6 6" />
        </svg>
      );
    case "calendar":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
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
    case "manual":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
          <path d="M5 4l14 16" />
        </svg>
      );
    case "workflow":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3.5" y="9.5" width="5" height="5" rx="1.2" />
          <rect x="15.5" y="4.5" width="5" height="5" rx="1.2" />
          <rect x="15.5" y="14.5" width="5" height="5" rx="1.2" />
          <path d="M8.5 12h4" />
          <path d="M12.5 12V7h3" />
          <path d="M12.5 12v5h3" />
        </svg>
      );
    case "growth":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 18.5h15" />
          <path d="M7.5 15.5V10" />
          <path d="M12 15.5V6.5" />
          <path d="M16.5 15.5V12" />
          <circle cx="12" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "slot":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 4c2.9.4 5.6 3.1 6 6-3.6.9-6.9 4.2-7.8 7.8-2.9-.4-5.6-3.1-6-6C7.1 8.2 10.4 4.9 14 4Z" />
          <path d="M10.5 13.5 6 18" />
          <path d="M8 20H4v-4" />
        </svg>
      );
    case "staff":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M3.5 18a5.5 5.5 0 0 1 11 0" />
          <path d="M14 18a4 4 0 0 1 6.5-3.1" />
        </svg>
      );
    case "visibility":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 4.5a4 4 0 0 1 5 5L10 19l-5 1 1-5 8.5-8.5Z" />
          <path d="m13 6 5 5" />
        </svg>
      );
    case "coordination":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3.75 18.5 6v5.5c0 4.12-2.63 7.9-6.5 9-3.87-1.1-6.5-4.88-6.5-9V6L12 3.75Z" />
          <path d="M9.5 11.5V10a2.5 2.5 0 1 1 5 0v1.5" />
          <rect x="8.5" y="11.5" width="7" height="5" rx="1.2" />
        </svg>
      );
    case "treatment":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4.25 14.2 9l5.05.55-3.75 3.45 1 5-4.5-2.55L7.5 18l1-5-3.75-3.45L9.8 9 12 4.25Z" />
          <path d="M7.5 20.25h9" />
        </svg>
      );
    case "heart":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20.25c4.5-2.8 7.5-6.1 7.5-10.2A4.3 4.3 0 0 0 12 7.3a4.3 4.3 0 0 0-7.5 2.75c0 4.1 3 7.4 7.5 10.2Z" />
        </svg>
      );
    case "checklist":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5.5 4.75h13A1.75 1.75 0 0 1 20.25 6.5v11A1.75 1.75 0 0 1 18.5 19.25h-13A1.75 1.75 0 0 1 3.75 17.5v-11A1.75 1.75 0 0 1 5.5 4.75Z" />
          <path d="M8 8.5h8" />
          <path d="M8 12h5" />
          <path d="m8 15.25 1.2 1.2 2.55-3" />
        </svg>
      );
  }
}
