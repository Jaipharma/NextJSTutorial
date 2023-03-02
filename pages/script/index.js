import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
        <Head>
            <title>Load Script</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Load Script</h1>
        <h2>
            <Link href="/script/normal">Normal load</Link>
        </h2>
        <h2>
            <Link href="/script/next-script-tag">Script tag</Link>
        </h2>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
    </>
  );
}