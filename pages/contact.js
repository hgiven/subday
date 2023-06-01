import utilStyles from '../styles/utils.module.css';


export default function Contact() {
  return (
    <div className={utilStyles.container}>
      <section className={utilStyles.headingXl}>
        <p>Contact</p>
      </section>

      <section>
        <div className={utilStyles.grid}>
          <div>
            <h1>Hello</h1>
            <p>Take a look</p>
          </div>

          <div>
            <h1>Hello</h1>
            <p>Take a look</p>
          </div>

          <div>
            <h1>Hello</h1>
            <p>Take a look</p>
          </div>

          <div>
            <h1>Hello</h1>
            <p>Take a look</p>
          </div>
        </div>
      </section>
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