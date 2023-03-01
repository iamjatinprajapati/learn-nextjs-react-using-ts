import Link from "next/link";
import {ReactElement} from "react";
import {ArrowLongRightIcon} from "@heroicons/react/24/outline";
import PrimaryLink from "@components/primarylink";

const NextLink = ({
                      href,
                      title,
                      className,
                      children,
                  }: {
    href: string;
    title: string;
    className?: string;
    children: ReactElement;
}) => {
    return (
        <PrimaryLink href={href} title={title}>
            <div className="flex flex-row font-normal space-x-5 items-center">
                {children}
                <ArrowLongRightIcon className="w-5 h-5 text-indigo-500"/>
            </div>
        </PrimaryLink>
    );
};

export default NextLink;
