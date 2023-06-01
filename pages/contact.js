import utilStyles from '../styles/utils.module.css';
import React from 'react';

export default function Contact() {
  return (
    <form className="container">
    <h1>Get in touch</h1>
    <div className="email block">
      <label htmlFor="frm-email">Email</label>
      <input
        id="frm-email"
        type="email"
        name="email"
        autoComplete="email"
        required
      />
    </div>
    <div className="block phone">
      <label htmlFor="frm-phone">Phone</label>
      <input
        id="frm-phone"
        type="text"
        name="phone"
        autoComplete="tel"
        required
      />
    </div>
    <div className="name block">
      <label htmlFor="frm-first">First Name</label>
      <input
          id="frm-first"
          type="text"
          name="first"
          autoComplete="given-name"
          required
        />
    </div>
    <div className="name block">
      <div>
        <label htmlFor="frm-last">Last Name</label>
        <input
          id="frm-last"
          type="text"
          name="last"
          autoComplete="family-name"
          required
        />
      </div>
    </div>
    <div className="message block">
      <label htmlFor="frm-message">Message</label>
      <textarea id="frm-message" rows="6" name="message"></textarea>
    </div>
    <div className="button block">
      <button type="submit">Submit</button>
    </div>
  </form>

  );
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