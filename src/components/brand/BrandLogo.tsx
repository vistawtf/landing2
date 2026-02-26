import Image from "next/image";

export type BrandLogoVariant = "lockup" | "wordmark" | "mark";
export type BrandLogoTheme = "light" | "dark";

export interface BrandLogoProps {
  variant: BrandLogoVariant;
  theme: BrandLogoTheme;
  className?: string;
  priority?: boolean;
}

const BRAND_ASSETS = {
  lockup: {
    light: { src: "/brand/vista-lockup-light.svg", width: 513, height: 236 },
    dark: { src: "/brand/vista-lockup-dark.svg", width: 513, height: 236 },
  },
  wordmark: {
    light: { src: "/brand/vista-wordmark-light.svg", width: 309, height: 120 },
    dark: { src: "/brand/vista-wordmark-dark.svg", width: 309, height: 120 },
  },
  mark: {
    light: { src: "/brand/vista-mark-light.svg", width: 151, height: 132 },
    dark: { src: "/brand/vista-mark-dark.svg", width: 151, height: 132 },
  },
} as const;

function getAlt(variant: BrandLogoVariant) {
  if (variant === "mark") return "Vista mark";
  if (variant === "wordmark") return "Vista wordmark";
  return "Vista logo";
}

export function BrandLogo({ variant, theme, className, priority = false }: BrandLogoProps) {
  const asset = BRAND_ASSETS[variant][theme];

  return (
    <Image
      src={asset.src}
      alt={getAlt(variant)}
      width={asset.width}
      height={asset.height}
      className={className}
      priority={priority}
    />
  );
}
