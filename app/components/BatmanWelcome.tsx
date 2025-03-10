import "../styles/BatmanWelcome.css";
type BatmanWelcomeProps = {
    moveToTopLeft: boolean; // Define the expected prop type
};

export default function BatmanWelcome({ moveToTopLeft }: BatmanWelcomeProps) {
    return (
        <div
      className={`batman-container ${
        moveToTopLeft ? "move-top-left" : ""
      } bg-[#8B0000] min-h-screen flex flex-col items-center justify-center`}
    >
            <div id="body">
                <div id="animate">
                    <ol>
                        <li className="run time">
                            <div className="stage">
                                <div id="head-1"></div>
                                <div id="head-2"></div>
                                <div id="headear"></div>
                                <div id="headear-radius"></div>
                                <div id="white-square"></div>
                                <div id="face-left"></div>
                                <div id="face-right"></div>
                                <div id="face"></div>
                                <div id="brow-right"></div>
                                <div id="eye-left"></div>
                                <div id="eye-right"></div>
                                <div id="brow-left"></div>
                                <div id="back_mouse"></div>
                                <div id="circle1"></div>
                                <div id="circle2"></div>
                                <div id="circle3"></div>
                                <div id="circle4"></div>
                                <div id="ear"></div>
                                <div id="ear-square"></div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
