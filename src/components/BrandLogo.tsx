import logoMarkup from "@/assets/logo_arrobacode.svg?raw";

type BrandLogoProps = {
  className?: string;
};

export const BrandLogo = ({ className = "" }: BrandLogoProps) => (
  <span
    aria-label="ArrobaCode"
    className={`brand-logo block ${className}`}
    dangerouslySetInnerHTML={{ __html: logoMarkup }}
  />
);
