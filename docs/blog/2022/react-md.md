---
title: react-markdown库
date: 2022-09-12
---
## react-markdown-editor-lite
1. 编辑: [react-markdown-editor-lite](https://github.com/HarryChen0506/react-markdown-editor-lite)
2. 展示: 
    * `dangerouslySetInnerHTML` + `markdown-it`
    * [react-markdown](https://github.com/remarkjs/react-markdown)
```shell
npm i react-markdown-editor-lite
npm i markdown-it
npm install react-markdown
npm i remark-gfm
```

```tsx
import React,{ useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

const mdParser = new MarkdownIt(/* Markdown-it options */);

const Md = () => {
    const [ text, setText ] = useState("");
    const handleEditorChange = ({ html, text: md }: any ) => {
      setText(md);
    }
  return (
    <>
        <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />

        <div dangerouslySetInnerHTML={{__html: mdParser.render(text)}}></div>
        <hr />

        <ReactMarkdown
          children={text}
          remarkPlugins={[remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
    </>
  );
};

export default Md;
```