import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

console.log("Main.tsx: Starting app mounting...");

try {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
        console.error("Main.tsx: CRITICAL - Root element not found!");
    } else {
        console.log("Main.tsx: Root element found, rendering App...");
        createRoot(rootElement).render(<App />);
        console.log("Main.tsx: App render call completed.");
    }
} catch (error) {
    console.error("Main.tsx: CRITICAL - Error during mounting:", error);
}
