'use server';

import Link from "next/link";
import Markdown, {type ExtraProps} from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import {Prism as Code} from "react-syntax-highlighter";
import {Children, type JSX} from "react";
import React from "react";
import Script from "next/script";

export default async function MarkdownTest() {
    const markdown = await (await fetch('https://raw.githubusercontent.com/JelteF/derive_more/refs/heads/master/README.md')).text();
    return <main className="markdown max-w-screen-sm mx-auto bg-white bg-opacity-80 p-8">

        <Markdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
                a: Link,
                pre: Pre,
            }}
            children={markdown}
            />
    </main>;
};

const Pre = (props: React.PropsWithoutRef<JSX.IntrinsicElements['pre']> & ExtraProps) => {
    const {node: _, children, style: __, ...withoutExtraProps} = props;
    const [child, ...restChildren] = Children.toArray(props.children);
    if (restChildren.length > 0 || !React.isValidElement(child) || child.type !== 'code') {
        return <pre {...withoutExtraProps}>{children}</pre>;
    }

    const {key, props: codeProps} = child; // here, child is <code />
    const {children: code, className, style: ___, ...restCodeProps}
        = codeProps as React.PropsWithoutRef<JSX.IntrinsicElements['code']>;
    const lang = /language-(\w+)/.exec(className || '');

    return <>
        {/* coy, duotone, ghcolors, one-light */}
        {/* <Script stylesheets={['https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-coy-without-shadows.min.css']} /> */}
        {/* <Script stylesheets={['https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-duotone-light.min.css']} /> */}
        <Script stylesheets={['https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-one-light.min.css']} />

        <Code {...withoutExtraProps} {...restCodeProps}
            key={key}
            children={String(code).replace(/\n$/, '')}
            language={lang ? lang[1] : 'text'}
            className={`${className} overflow-auto !bg-white`}
            codeTagProps={{}}

            useInlineStyles={false}
            showLineNumbers={true}
            wrapLines={true}
            />
        </>;
};
