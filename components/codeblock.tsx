import { ReactElement } from "react";
const Codeblock = ({ children }: { children: ReactElement }) => {
  return (
    <div className={`bg-zinc-900 text-white px-2 py-3 rounded`}>{children}</div>
  );
};

export default Codeblock;
