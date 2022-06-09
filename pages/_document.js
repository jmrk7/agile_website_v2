import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ boxSizing: "content-box" }} className="responsejs">
        <Head>
          {/* Favicons */}
          <link rel="shortcut icon" href={"/favicon.ico"} />
          <link rel="apple-touch-icon" href={"/apple-touch-icon.png"} />
          <link rel="apple-touch-icon" sizes="72x72" href={"/apple-touch-icon-72x72.png"} />
          <link rel="apple-touch-icon" sizes="114x114" href={"/apple-touch-icon-114x114.png"} />
          {/* Google Font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
          {/* Font Awesome */}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
          {/* Style Sheet */}
          <link href={"/styles/agiletestware-allcss.css?v=1.7"} rel="stylesheet" />
          <link href={"/styles/w3.css"} rel="stylesheet" />
          <link href={"/styles/spinner.css"} rel="stylesheet" />
          <link href={"/styles/app.css"} rel="stylesheet" />
          {/* JavaScript */}
          <script type="text/javascript" src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          <script type="text/javascript" src={"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"} />
          <script type="text/javascript" src={"/js/agiletestware-alljs.js"} />
          <script type="text/javascript" src={"/js/script-home.js"} />
          <script type="text/javascript" src={"/js/isotope.pkgd.min.js"} />
          <script type="text/javascript" src={"/js/jquery.validate.min.js?1.0"} />          
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            key="chatlio"
            dangerouslySetInnerHTML={{
              __html: `
          window._chatlio = window._chatlio||[];
          !function(){ var t=document.getElementById("chatlio-widget-embed");if(t&&window.ChatlioReact&&_chatlio.init)return void _chatlio.init(t,ChatlioReact);for(var e=function(t){return function(){_chatlio.push([t].concat(arguments)) }},i=["configure","identify","track","show","hide","isShown","isOnline", "page", "open", "showOrHide"],a=0;a<i.length;a++)_chatlio[i[a]]||(_chatlio[i[a]]=e(i[a]));var n=document.createElement("script"),c=document.getElementsByTagName("script")[0];n.id="chatlio-widget-embed",n.src="https://w.chatlio.com/w.chatlio-widget.js",n.async=!0,n.setAttribute("data-embed-version","2.3");
            n.setAttribute('data-widget-id','76e10e85-fcbd-4bb1-69d9-433d77176bc8');
            c.parentNode.insertBefore(n,c);
          }();`,
            }}
          />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
  };
};
