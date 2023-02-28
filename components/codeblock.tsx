import { ReactElement } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Codeblock = ({ children }: { children: string }) => {
  return (
    <div>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={dracula}
        className="rounded"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
