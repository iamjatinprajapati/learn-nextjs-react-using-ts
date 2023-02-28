import Link from "next/link";
import { ReactElement } from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import PrimaryLink from "@components/primarylink";

const BackLink = ({
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
    <PrimaryLink href={href} title={title}>
      <p className="flex flex-row space-x-4 items-center">
        <ArrowLongLeftIcon className="w-5 h-5 text-indigo-500" />
        {children}
      </p>
    </PrimaryLink>
  );
};

export default BackLink;
