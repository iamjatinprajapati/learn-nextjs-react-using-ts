import clsx from "clsx";
import { ReactElement } from "react";

const Heading1 = ({
  children,
  className,
}: {
  children: ReactElement | string;
  className?: string;
}) => {
  return (
    <h1 className={clsx("text-4xl font-semibold", className)}>{children}</h1>
  );
};

export default Heading1;
