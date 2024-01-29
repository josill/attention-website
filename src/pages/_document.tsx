import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/three@0.143/build/three.min.js"
          async
        />
      </body>
    </Html>
  );
}
