import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import "./tailwind.css";
import BatmanWelcome from "./components/BatmanWelcome";
import IntroText from "./components/IntroText";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Academics from "./components/Academics";
import Socials from "./components/Socials";
import AboutHim from "./components/AboutHim";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/batman-logo.ico" />
        <title>Aariv Walia - Portfolio</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [clickDetected, setClickDetected] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const handleClick = () => {
      setClickDetected(true);
      console.log("Screen clicked!");
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "academics":
        return <Academics />;
      case "socials":
        return <Socials />;
      case "about":
        return <AboutHim/>
      default:
        return <AboutHim />;
    }
  };

  return (
    <div className="min-h-screen bg-[#8B0000] relative">
      <div
        className={`batman-container ${clickDetected ? "move-top-left" : ""}`}
      >
        <BatmanWelcome />
      </div>

      {!clickDetected && <IntroText />}

      {clickDetected && (
        <div className={`header-fade-in ${clickDetected ? "header-visible" : ""}`}>
          <Header setActiveTab={setActiveTab} />
          <div className="content margin-top-0">
            {renderActiveTab()}
          </div>
        </div>
      )}
    </div>
  );
}