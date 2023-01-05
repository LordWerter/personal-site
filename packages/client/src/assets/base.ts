import { css } from '@emotion/react';

const BaseStyle = css`
  html {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    justify-content: center;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: #3f89fc;
    background: linear-gradient(90deg, #3a6cff 0%, #407afa 23%, #3f89fc 50%, #4a9dfc 77%, #4aa2fa 85%, #4ca4fe 100%);
    overflow: hidden;
  }

  #modal-content .ScrollbarsCustom-TrackY {
    width: 6px !important;
    height: 100% !important;
    top: 0 !important;
    right: -6px !important;
  }

  .mono {
    font-family: 'SF Mono', 'JetBrains Mono', 'Hack', monospace;
  }

  /* классы .мессенджера --> */
  body.udm--remove #usedesk-messenger {
    display: none !important;
  }
  body #usedesk-messenger {
    z-index: 19 !important;
  }
  /* <-- конец классов мессенджера */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    line-height: 1.26;
  }
`;

export default BaseStyle;
