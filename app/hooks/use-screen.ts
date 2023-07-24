"use client";
import { useMediaQuery } from "react-responsive";
import tailwindConfig from "../../tailwind.config.mjs";

export const useScreen = () => {
  const isTablet = useMediaQuery({
    query: `(min-width: ${tailwindConfig.theme.screens.md})`,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${tailwindConfig.theme.screens.lg})`,
  });
  const isMobile = !isTablet && !isDesktop;
  return { isMobile, isTablet, isDesktop };
};
