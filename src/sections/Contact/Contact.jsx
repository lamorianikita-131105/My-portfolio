import "./Contact.css";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "Download résumé",
    href: "/resume.pdf",
    download: true,
  },
];

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact__container">
        <p className="section-label">07 / Contact</p>

        <h2>
          Have an opportunity or an idea?
          <span> Let&apos;s build something meaningful.</span>
        </h2>

        <p className="contact__description">
          I&apos;m open to software engineering internships, collaborative
          projects and opportunities where I can learn, contribute and build
          useful products.
        </p>

        <a
          className="contact__email"
          href="mailto:your-email@gmail.com"
        >
          your-email@gmail.com
          <span aria-hidden="true"> ↗</span>
        </a>

        <div className="contact__links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download}
            >
              {link.label}
              {!link.download && <span aria-hidden="true"> ↗</span>}
            </a>
          ))}
        </div>

        <div className="contact__availability">
          <span></span>

          <p>
            Currently open to internship opportunities
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;