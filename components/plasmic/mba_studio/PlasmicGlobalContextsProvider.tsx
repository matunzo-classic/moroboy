// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6SzcxggN8P6BLB5iyzSEVs

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, embedCssProps } = props;

  return (
    <EmbedCss
      {...embedCssProps}
      css={
        embedCssProps && "css" in embedCssProps
          ? embedCssProps.css!
          : "/* CSS snippet */\n\n.rotate {\n    animation-name: rotator;\n    animation-duration: 60s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n}\n\n@keyframes rotator {\n    from {\n        transform: rotate(0);\n    }\n    to {\n        transform: rotate(359deg);\n    }\n}"
      }
    >
      {children}
    </EmbedCss>
  );
}
