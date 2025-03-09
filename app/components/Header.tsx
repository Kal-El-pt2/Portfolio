import "../styles/Header.css";

export default function Header({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
    return (
        <header>
            <img src="batman.png" alt="batman" className="logo-icon" />
            <h1>Aariv Walia</h1>
            <nav>
                <ul>
                    <li>
                        <button
                            className="tab-button"
                            onClick={() => setActiveTab("experience")}
                        >
                            Experience
                        </button>
                    </li>
                    <li>
                        <button
                            className="tab-button"
                            onClick={() => setActiveTab("projects")}
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            className="tab-button"
                            onClick={() => setActiveTab("academics")}
                        >
                            Academics
                        </button>
                    </li>
                    <li>
                        <button
                            className="tab-button"
                            onClick={() => setActiveTab("socials")}
                        >
                            Socials
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
