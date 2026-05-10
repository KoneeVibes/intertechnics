import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppContextProvider } from "./context/provider.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/index.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppContextProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</AppContextProvider>
	</StrictMode>,
);
