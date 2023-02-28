const Variablebadge = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex items-center rounded bg-indigo-100 px-1 py-0 font-medium text-indigo-80">
      {text}
    </span>
  );
};

export default Variablebadge;
