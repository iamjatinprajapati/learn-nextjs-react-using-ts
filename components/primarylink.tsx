import Link from "next/link";
import { ReactElement } from "react";
const PrimaryLink = ({
  href,
  title,
  className,
  children,
}: {
  href: string;
  title: string;
  className: string;
  children: ReactElement;
}) => {
  return (
    <Link
      className={`font-medium text-l text-indigo-500 ${className}`}
      href={href}
      title={title}
    >
      {children}
    </Link>
  );
};

export default PrimaryLink;
