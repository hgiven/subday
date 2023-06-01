import utilStyles from '../styles/utils.module.css';


export default function Contact() {
  return (
    <div className={utilStyles.container}>
      <h1>Contact</h1>

      <section>
        <div className={utilStyles.grid}>
        {allPostsData.map(({ id, date, title, image}) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>
                <Image
                  src={`${image}`}
                />
              </a>
            </Link>
            <br />
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
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