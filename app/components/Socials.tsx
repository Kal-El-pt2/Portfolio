// Socials.jsx
import '../styles/Socials.css';

export default function Socials() {
    const handleNavigation = (url:string, newTab = true) => {
        if (newTab) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = url;
        }
    };

    return (
        <div className="socials-container">
            <div className="socials-grid">
                <div className="socials-item">
                    <button
                        type="button"
                        onClick={() => handleNavigation('https://www.linkedin.com/in/aariv-walia-ab3b1a201/')}
                        className="socials-button"
                    >
                        LinkedIn
                    </button>
                </div>
                <div className="socials-item">
                    <button
                        type="button"
                        onClick={() => handleNavigation('https://github.com/Kal-El-pt2/')}
                        className="socials-button"
                    >
                        Github
                    </button>
                </div>
                <div className="socials-item">
                    <button
                        type="button"
                        onClick={() => handleNavigation('mailto:f20220052@hyderabad.bits-pilani.ac.in', false)}
                        className="socials-button"
                    >
                        Email
                    </button>
                </div>
                <div className="socials-item">
                    <button
                        type="button"
                        onClick={() => handleNavigation('https://www.instagram.com/aarivwalia/')}
                        className="socials-button"
                    >
                        Instagram
                    </button>
                </div>
            </div>
        </div>
    );
}