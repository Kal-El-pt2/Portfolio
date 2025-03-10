import '../styles/Experience.css';

export default function Experience() {
    return (
        <div className="experience-container">
            <div className="experience-list">

                {/* MyEasyPharma Experience */}
                <div className="experience-item">
                    <h3 className="experience-title">MyEasyPharma - Front End Developer Intern</h3>
                    <p className="experience-date">May 2024 - July 2024</p>
                    <ul className="experience-details">
                        <li>Developed a website for tracking and analyzing daily diet and physical activity habits of users.</li>
                        <li>Appointed as the head of the front-end team by the company’s tech lead.</li>
                        <li>The website serves as the company’s first official online presence and the primary platform for business and client engagement.</li>
                    </ul>
                </div>

                {/* SAGIN Experience */}
                <div className="experience-item">
                    <h3 className="experience-title">SAGIN - Module Development</h3>
                    <p className="experience-date">Aug 2024 - Dec 2024</p>
                    <ul className="experience-details">
                        <li>Designed and implemented a DTN system with LoRa devices for long-range communication across space, aerial, and ground nodes.</li>
                        <li>Developed a robust and scalable network simulation in NS3 with a custom-made script to simulate actions of all nodes.</li>
                    </ul>
                </div>

                {/* ACM Experience */}
                <div className="experience-item">
                    <h3 className="experience-title">ACM - Web Development</h3>
                    <p className="experience-date">2022-2025</p>
                    <ul className="experience-details">
                        <li>Developed multiple full-stack websites as part of the ACM Tech Team.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}