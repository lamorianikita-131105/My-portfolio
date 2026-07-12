import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p>
          © {currentYear} Nikita Lamoria
        </p>

        <p>
          Designed and developed with React.
        </p>

        <a href="#home">
          Back to top
          <span aria-hidden="true"> ↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;