// src/app/Footer.tsx


export default function Footer() {
    return (
      <footer>
        <div className="container mx-auto">
          <p>Copyright &copy; Sohaib Amir</p>
          <br></br>
          <p>Follow us on</p>
          <div className="flex justify-center space-x-4 mt-2">
          <a href="https://x.com/Sohaib844590610" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.png" alt="Twitter" style={{ width: "24px", height: "24px" }} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.png" alt="Instagram" style={{ width: "24px", height: "24px" }} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-sohaib-8bba7a230/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
          </a>

          
          </div>
          <br></br>
          <p>Contact us on: <a href="mailto:afzalsohaib59@gmail.com" className="email-link">afzalsohaib59@gmail.com</a></p>
        </div>
      </footer>
    );
}
  