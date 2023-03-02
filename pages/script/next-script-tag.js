import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
        <Head>
            <title>Load script</title>
            <link rel="icon" href="/favicon.ico" />            
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>Load script next Script tag</h1>
        <p>
        Notice that a few additional properties have been defined in the Script component:
        </p>
        <ul>
          <li>
          strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
          </li>
          <li>
          onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly
          </li>
        </ul>
        <h2>
            <Link href="/script">Back</Link>
        </h2>
    </>
  );
}