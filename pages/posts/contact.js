import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'; 
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import Image from 'next/image'

export default function Contact() {
  return (
    <div className={utilStyles.container}>
      <h1>Contact</h1>;
    </div>
  )
}

// export default function Contact() {
//     return (
//       <>
//         <div style={{
//           backgroundImage: `url("https://hgiven.github.io/portfolio/images/bg.png")`,
//           height: '100vh',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           zIndex: -1,
//         }}/>
//         <h1>Contact</h1>
//       </>
//   )
// }