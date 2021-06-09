import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        rel="icon"
                        type="image/png"
                        href="icon-196x196.png"
                        sizes="196x196"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="icon-96x96.png"
                        sizes="96x96"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="icon-32x32.png"
                        sizes="32x32"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="icon-16x16.png"
                        sizes="16x16"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="icon-128.png"
                        sizes="128x128"
                    />
                </Head>
                <body className="bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-dark-500 dark:to-dark-700 dark:text-gray-50">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
