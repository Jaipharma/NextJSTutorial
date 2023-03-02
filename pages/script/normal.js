import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
        <Head>
            <title>Load script</title>
            <link rel="icon" href="/favicon.ico" />
            <script src="https://connect.facebook.net/en_US/sdk.js" />
        </Head>
        <h1>Load script normal</h1>
        <p>
        This script contains the Facebook SDK which is commonly used to introduce Facebook social plugins and other functionality. Although this approach works, including scripts in this manner does not give a clear idea of when it would load with respect to the other JavaScript code fetched on the same page. If a particular script is render-blocking and can delay page content from loading, this can significantly impact performance.
        </p>
        <h2>
            <Link href="/script">Back</Link>
        </h2>
    </>
  );
}