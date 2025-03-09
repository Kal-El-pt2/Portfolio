export default function Socials() {
    return (
        <div className="p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Socials</h2>
            <ul className="space-y-2">
                <li>
                    <a 
                        href="https://www.linkedin.com/in/aariv-walia" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 hover:underline"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/aariv-walia" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 hover:underline"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a 
                        href="https://twitter.com/aariv-walia" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 hover:underline"
                    >
                        Twitter
                    </a>
                </li>
            </ul>
        </div>
    );
}
