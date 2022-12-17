import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import * as React from 'react';

export const CodeHighlight: React.FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <ReactMarkdown
      children={markdown}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              style={undefined}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};
