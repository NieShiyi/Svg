import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import "./index.css";

const CopySvgICon = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          transform="translate(-370.000000, -155.000000)"
          fill="currentColor"
          fill-rule="nonzero"
        >
          <g transform="translate(360.000000, 147.000000)">
            <g id="复制" transform="translate(10.000000, 8.000000)">
              <path
                d="M4.97368421,0 L12.7105263,0 C13.422683,0 14,0.577317032 14,1.28947367 L14,9.02631579 C14,9.73847243 13.422683,10.3157895 12.7105263,10.3157895 L4.97368421,10.3157895 C4.26152756,10.3157895 3.68421052,9.73847244 3.68421052,9.02631579 L3.68421052,1.28947367 C3.68421052,0.577317026 4.26152757,0 4.97368421,0 Z M4.97368421,1.10526316 C4.87194755,1.10526316 4.78947368,1.18773701 4.78947368,1.28947367 L4.78947368,9.02631579 C4.78947368,9.12805245 4.87194755,9.21052632 4.97368421,9.21052632 L12.7105263,9.21052632 C12.812263,9.21052632 12.8947368,9.12805245 12.8947368,9.02631579 L12.8947368,1.28947367 C12.8947368,1.18773702 12.812263,1.10526316 12.7105263,1.10526316 L4.97368421,1.10526316 Z M9.21052632,11.4210526 C9.21052632,11.1158426 9.4579479,10.8684211 9.7631579,10.8684211 C10.0683679,10.8684211 10.3157895,11.1158426 10.3157895,11.4210526 L10.3157895,12.7105263 C10.3157895,13.422683 9.73847243,14 9.02631579,14 L1.28947367,14 C0.577317032,14 0,13.422683 0,12.7105263 L0,4.97368421 C0,4.26152757 0.577317026,3.68421052 1.28947367,3.68421052 L2.57894736,3.68421052 C2.88415736,3.68421052 3.13157894,3.93163211 3.13157894,4.2368421 C3.13157894,4.5420521 2.88415736,4.78947368 2.57894736,4.78947368 L1.28947367,4.78947368 C1.18773701,4.78947369 1.10526316,4.87194755 1.10526316,4.97368421 L1.10526316,12.7105263 C1.10526317,12.812263 1.18773702,12.8947368 1.28947367,12.8947368 L9.02631579,12.8947368 C9.12805245,12.8947368 9.21052631,12.812263 9.21052632,12.7105263 L9.21052632,11.4210526 Z"
                id="形状"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const CodeRender = ({ code, language = "jsx" }) => {
  console.log("code", code);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="wrapper">
      <i onClick={handleCopy} className="copy">
        <CopySvgICon />
      </i>

      <Highlight code={code.trim()} language={language} theme={themes.oneLight}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeRender;
