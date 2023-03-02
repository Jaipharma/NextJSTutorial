import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Css() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
        สร้าง folder components ที่ top root แล้วสร้าง 2 ไฟล์ข้างล่างนี้<br></br>
        layout.js<br></br>
        layout.module.css ต้องเป็น *.module.css เท่านั้น<br></br>
      </p>
      <br></br>
      <h2>
        <Link href="/css/full-styles">Polishing Layout</Link>
      </h2>
      <br></br>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}