import "./styles/App.css";
import "./styles/animations.css";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const companies = [
  {
    name: "ALFA Engineering Solutions",
    logo: "/logos/alfa-engineering-logo.jpg",
    website: "https://www.alfaenggsolutions.com/",
    phone: "+91 9324782735",

    youtube: "https://www.youtube.com/channel/UCM7uPObrrNFMXntSfvsGuKw",
    facebook: "https://www.facebook.com/alfaengineeringsolutions/",
    instagram:
      "https://www.instagram.com/alfa__engineering_?igsh=aGlsYjgxbDAxNmht",
    whatsapp: "https://wa.me/919324782735",
    linkedin:
      "https://www.linkedin.com/in/sajid-shaikh-419a8022/?isSelfProfile=false",
  },

  {
    name: "ALFA Industrial Solutions",
    logo: "/logos/alfa-industrial-logo.png",
    website: "https://www.alfaindustrialsolutions.com/",
    phone: "+91 9967372119",

    youtube: "https://www.youtube.com/@AlfaIndustrialSolutions",
    instagram:
      "https://www.instagram.com/alfaindustrialsolutions?igsh=Yjd1d3YwanlnMnA2",
    whatsapp: "https://wa.me/919967372119",
    linkedin:
      "https://www.linkedin.com/in/alfa-industrial-solutions-343214276/?isSelfProfile=false",
  },

  {
    name: "ALFA IT Solutions",
    logo: "/logos/alfa-it-logo.PNG",
    website: "https://www.alfaitsolutions.com/",
    phone: "+91 8356963847",

    whatsapp: "https://wa.me/918356963847",
    linkedin:
      "https://www.linkedin.com/in/alfa-it-solutions-undefined-b60046413/",
  },
];

function App() {
  return (
    <div className="hero">
      <div className="overlay">
        {/* ALFA Supply Chaion Solution logo */}
        <img src="/logos/alfa-supply.jpeg" alt="logo" className="main-logo" />

        <h1 className="coming-soon">Coming Soon</h1>

        <p className="subtitle">ALFA Group Companies</p>

        <div className="companies">
          {companies.map((company, index) => (
            <div
              className="company-card fade-up"
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
              key={index}
            >
              <div className="card-top">
                <img src={company.logo} alt="" className="company-logo" />

                <h3 className="company-title">{company.name}</h3>
              </div>

              <div className="company-details">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-link"
                >
                  {company.website}
                </a>

                <p>{company.phone}</p>
              </div>

              <div className="card-socials">
                {company.youtube && (
                  <a
                    href={company.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="youtube-icon" />
                  </a>
                )}

                {company.facebook && (
                  <a
                    href={company.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="facebook-icon" />
                  </a>
                )}

                {company.instagram && (
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="instagram-icon" />
                  </a>
                )}

                {company.whatsapp && (
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="whatsapp-icon" />
                  </a>
                )}

                {company.linkedin && (
                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="linkedin-icon" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
