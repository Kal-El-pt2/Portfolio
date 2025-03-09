import {
  Links,
  Meta,
  Outlet,
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
import Projects from "./components/Academics";
import Academics from "./components/Projects";
import Socials from "./components/Socials";

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
  const [activeTab, setActiveTab] = useState("experience"); // 🟢 State for active tab

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

  // 🟢 Function to render content based on the active tab
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
      default:
        return <Experience />;
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
        <div
          className={`header-fade-in ${clickDetected ? "header-visible" : ""}`}
        >
          <Header setActiveTab={setActiveTab} activeTab={activeTab} /> {/* 🟢 Pass props to Header */}
          <div className="mt-4">{renderActiveTab()}</div> {/* 🟢 Render tab content */}
        </div>
      )}
    </div>
  );
}
