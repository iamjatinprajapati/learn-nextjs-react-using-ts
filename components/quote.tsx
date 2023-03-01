import clsx from "clsx";
import { ReactElement } from "react";

const Quote = ({
  children,
  className,
}: {
  children: ReactElement | string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        `px-8 py-4 bg-blue-200 text-slate-900 border-l-8 border-blue-900`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Quote;
