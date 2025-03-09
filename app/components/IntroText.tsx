import "../styles/IntroText.css"

export default function IntroText(){
    return (
        <div className="text-center mt-6 custom-text">
                <h2 className="text-2xl font-bold text-white">
                    I am Batman and I am here to tell you about
                    <br />
                </h2>
                <h2 className="text-2xl font-bold text-white">
                    <span className="name-border">Aariv Walia</span>  {/* Apply the animated border here */}
                </h2>
                <h3 className="text-1xl font-bold text-white">
                    <span>...Click anywhere to continue...</span>
                </h3>
            </div>
    );
}