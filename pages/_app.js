import Navbar from '../components/Navbar'
import '../styles/global.css';
// import Image from 'next/image'

export default function App({ Component, pageProps }) {
    return (
    <>
        <Navbar />
        <Component {...pageProps} />
        {/* <Image /> */}
    </>
    )
}