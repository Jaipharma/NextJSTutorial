import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function FirstPost() {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Head>
                <title>First Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>First Post</h1>
            <h2>your id is {id}</h2>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}