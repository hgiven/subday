import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const name= null
export const siteTitle = 'SubDay';

export default function Layout({ children, home }) {
    return (
      
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Previous page</Link>
          </div>
        )}
      </div>
    );
  }