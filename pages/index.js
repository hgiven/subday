import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'; 
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

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
        <p>Hello, I'm Harriosn an instructional and user experience designer. I hope we get to meet and work on a project together soon.</p>
      </section>

      <section className={'${utilStyles.headingMd} ${utilStyles.Styles.padding1px}'}>
        <h2 className={utilStyles.headingLg}>Recent Work</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
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
