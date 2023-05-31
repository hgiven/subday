import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'; 
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import Image from 'next/image'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
  <div className={utilStyles.container}>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome, take a look.</p>
      </section>

      <section className={'${utilStyles.headingMd} ${utilStyles.Styles.padding1px}'}>
        <h2 className={utilStyles.headingLg}>Recent Work</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, image}) => (
            <li className={utilStyles.listItem} key={id}>
            <Image
              src={`${image}`}
              width="350px"
              height="350px"
            />
            <br />
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>

      <section>
         <div className={utilStyles.grid}>
           <a href="https://dribbble.com/hgiven" className={utilStyles.card}>
             <h3>Dribbble &rarr;</h3>
             <p>Latest and greatest.</p>
           </a>

           <a href="https://www.linkedin.com/in/harrison-given-a88b40a6/" className={utilStyles.card}>
             <h3>LinkedIn &rarr;</h3>
             <p>Previous hits.</p>
           </a>
        </div>
      </section>
    </Layout>
  </div>
  );
}
