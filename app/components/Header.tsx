import { useState } from "react";
import "../styles/Header.css";

export default function Header({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
    const [activeTab, setTab] = useState("about");

    const handleTabClick = (tab: string) => {
        setTab(tab);
        setActiveTab(tab);
    };

    return (
        <header>
            <img src="batman.png" alt="batman" className="logo-icon" />
            <h1>Aariv Walia</h1>
            <nav>
                <ul>
                    <li>
                        <button
                            className={`tab-button ${activeTab === "about" ? "active" : ""}`}
                            onClick={() => handleTabClick("about")}
                        >
                            About Him
                        </button>
                    </li>
                    <li>
                        <button
                            className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
                            onClick={() => handleTabClick("experience")}
                        >
                            Experience
                        </button>
                    </li>
                    <li>
                        <button
                            className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
                            onClick={() => handleTabClick("projects")}
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            className={`tab-button ${activeTab === "academics" ? "active" : ""}`}
                            onClick={() => handleTabClick("academics")}
                        >
                            Academics
                        </button>
                    </li>
                    <li>
                        <button
                            className={`tab-button ${activeTab === "socials" ? "active" : ""}`}
                            onClick={() => handleTabClick("socials")}
                        >
                            Socials
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
