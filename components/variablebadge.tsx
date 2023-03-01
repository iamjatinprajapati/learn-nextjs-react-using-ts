import clsx from "clsx";

const Variablebadge = ({text, className}: { text: string, className?: string }) => {
    return (
        <span
            className={clsx(`inline-flex items-center rounded bg-indigo-100 px-1 py-0 font-semibold text-indigo-800`, className)}>
      {text}
    </span>
    );
};

export default Variablebadge;
