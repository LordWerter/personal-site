/* eslint-disable */
/// <reference types="node" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}

declare module '*.avif' {
    const src: string;
    // @ts-ignore
    export default src;
}

declare module '*.bmp' {
    const src: string;
    // @ts-ignore
    export default src;
}

declare module '*.gif' {
    const src: string;
    // @ts-ignore
    export default src;
}

declare module '*.jpg' {
    const src: string;
    // @ts-ignore
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    // @ts-ignore
    export default src;
}

declare module '*.png' {
    const src: string;
    // @ts-ignore
    export default src;
}

declare module '*.webp' {
    const src: string;
    // @ts-ignore
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    // @ts-ignore
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    // @ts-ignore
    export default src;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    // @ts-ignore
    export default classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    // @ts-ignore
    export default classes;
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    // @ts-ignore
    export default classes;
}
