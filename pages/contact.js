import utilStyles from '../styles/utils.module.css';


export default function Contact() {
  return (
    <div className={utilStyles.container}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingXl}>
          <p>Contact</p>
        </section>

        <section>
          <div className={utilStyles.grid}>
            <>
              <h1>Hello</h1>
              <p>Take a look</p>
            </>

            <>
              <h1>Hello</h1>
              <p>Take a look</p>
            </>

            <>
              <h1>Hello</h1>
              <p>Take a look</p>
            </>

            <>
              <h1>Hello</h1>
              <p>Take a look</p>
            </>
          </div>
        </section>
      </Layout>
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