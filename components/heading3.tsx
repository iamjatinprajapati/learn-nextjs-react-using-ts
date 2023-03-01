import clsx from "clsx";
import { ReactElement } from "react";

const Heading3 = ({
  children,
  className,
}: {
  children: ReactElement | string;
  className?: string;
}) => {
  return (
    <h3
      className={clsx(
        `text-2xl font-semibold border-b border-zinc-200 pb-1 mb-3`,
        className
      )}
    >
      {children}
    </h3>
  );
};

export default Heading3;
