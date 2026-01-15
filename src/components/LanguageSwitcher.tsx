"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { motion } from "framer-motion";

const locales = [
  { code: "en", label: "EN", flag: "🇺🇸", fullName: "English" },
  { code: "lo", label: "ລາວ", flag: "🇱🇦", fullName: "ລາວ" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <motion.button
          key={loc.code}
          onClick={() => handleChange(loc.code)}
          disabled={isPending}
          className={`relative px-3 py-1 font-heading text-xs tracking-wider transition-all ${
            locale === loc.code
              ? "text-pagani-gold"
              : "text-white/50 hover:text-white/80"
          } ${isPending ? "opacity-50 cursor-wait" : ""}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Active indicator */}
          {locale === loc.code && (
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-pagani-gold"
              layoutId="activeLocale"
              transition={{ duration: 0.2 }}
            />
          )}
          <span className="mr-1">{loc.flag}</span>
          {loc.label}
        </motion.button>
      ))}
    </div>
  );
}
