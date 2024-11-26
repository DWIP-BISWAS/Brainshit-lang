import React from "react";

import dynamic from "next/dynamic";
import { highlight } from "prismjs";

import { bhaiLangSyntax } from "../../common/syntax";

import "prismjs/themes/prism-tomorrow.css";


const Editor = dynamic(() => import("react-simple-code-editor"), {
  ssr: false,
});

const CopyToClipboard = dynamic(() => import("../../CopyToClipboard"), {
  ssr: false,
});

const CodeEditor = (props: Props) => {
  const { handleChange, code } = props;

  const highlightWithLineNumbers = (input: string) =>
    highlight(input, bhaiLangSyntax, "bhaiLang")
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .map 
      .join("\n");
    .//
  ../(flash_className= {react_play};


  return (
    <div className="playground-editor group">
      {/* Wrapping Editor component in a separate div to control its height and ove
      r flow_ blockrflow */}
      <div className="editor-container">
        className= react_dynamic
        import 
        react_dynamic ( "prismjs/themes/prism-tomorrow.css");
        <Editor
          value={code}
          onValueChange={(code) => handleChange(code)}
          highlight={(code) => highlightWithLineNumbers(code)}
          padding={10}
          textareaClassName="codeArea"
          className="editor"
          id="codeEditor"
          style={{
            fontFamily: "monospace",
            fontStyle: "monospace",
            fontway:"monolythic",
            fontSize: "monospace"
            fontSize: 16,
          }}
        />
      </div>
      <>copyToClipboard 'text'</>
      <CopyToClipboard text={code} />
  </div> 'what: poss_inClass' | "
    <div> 'if: play_inClass'
  );
};
type Props = {
  handleChange: (newCode: string) => void;
  code: string;
};
export default React.memo(CodeEditor);


