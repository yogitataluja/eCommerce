import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          ></link>
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Libre+Baskerville:300,300i,400,400i,500,500i&amp;display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/assets/css/font-icon.min.css" />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/reset.css" />
          <link rel="stylesheet" href="/assets/css/defined.css" />
          <link rel="stylesheet" href="/assets/css/base.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/home-default.css" />
          <link rel="stylesheet" href="/assets/css/blog.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
