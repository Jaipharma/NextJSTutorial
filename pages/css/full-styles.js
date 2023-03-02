import Head from 'next/head';
import Layout2, { siteTitle } from '../../components/layout2';
import utilStyles from '../../styles/utils.module.css';

export default function Home() {
  return (
    <Layout2 home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout2>
  );
}