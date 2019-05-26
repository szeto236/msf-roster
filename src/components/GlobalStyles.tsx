import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: Ultimus;
      font-weight: 300;
      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/a2bf336aff03d67fc55372e083f073c4.woff)
  }

  @font-face {
      font-family: Ultimus;
      font-weight: 400;
      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/a01615b5087744969beadbbd784e1295.woff)
  }

  @font-face {
      font-family: Ultimus;
      font-weight: 500;
      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/389705037732e181a25966e6185b0f57.woff)
  }

  @font-face {
      font-family: Ultimus;
      font-weight: 700;
      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/9d703ae86e98db0253a254b96016f116.woff)
  }

  @font-face {
      font-family: Teko;
      font-weight: 300;
      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/05d811b921da083e601eee1219c3734f.woff)
  }

  @font-face {
      font-family: Teko;
      font-weight: 400;
      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/ba74f5ca0bebce1385b10579c15b95c5.woff)
  }

  @font-face {
      font-family: Teko;
      font-weight: 500;
      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/0e74be7d7f5087002d8b1efe9fcdfe19.woff)
  }

  @font-face {
      font-family: Teko;
      font-weight: 700;
      src: url(https://s3.amazonaws.com/marvelstrikeforce-assets/prod2/9c1f8d196285181b5313a2146a5453d6.woff)
  }

  body {
    background: #282828;
    line-height: 1.4;
    color: #fff;
    font-family: Ultimus,Arial,Helvetica,sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
`;
