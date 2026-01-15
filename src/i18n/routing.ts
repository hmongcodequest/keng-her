import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "lo"],
  defaultLocale: "en",
  localePrefix: "as-needed", // Only show prefix for non-default locale
});

// Export navigation helpers
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
