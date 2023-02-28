import { ReactElement, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  dracula,
  docco,
  a11yDark,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Codeblock = ({ children }: { children: string }) => {
  return (
    <div>
      <SyntaxHighlighter
        id="syntax_highlighter"
        showLineNumbers={true}
        language="javascript"
        style={a11yDark}
        className="rounded"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
