import "./App.css";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { Home } from "./page/home";
import { Contact } from "./page/contact";
import { About } from "./page/about";
import { Resources } from "./page/resources";
import { OilWellOperations } from "./page/services/oilwelloperations";
import { AssetIntegrityManagement } from "./page/services/assetintegritymanagement";
import { TrainingAndManpower } from "./page/services/trainingandmanpower";
import { Consulting } from "./page/services/consulting";
import { PipelineIntegrity } from "./page/services/pipelineintegrity";
import { PressureVessels } from "./page/services/pressurevessels";
import { BlogPost } from "./page/blogpost";

function App() {
	return (
		<BrowserRouter>
			<Router>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/insights-resources" element={<Resources />} />
				<Route
					path="/services/oil-well-operation"
					element={<OilWellOperations />}
				/>
				<Route
					path="/services/asset-integrity-management"
					element={<AssetIntegrityManagement />}
				/>
				<Route
					path="/services/training-and-manpower"
					element={<TrainingAndManpower />}
				/>
				<Route path="/services/consulting-services" element={<Consulting />} />
				<Route
					path="/services/pipeline-integrity"
					element={<PipelineIntegrity />}
				/>
				<Route
					path="/services/pressure-vessels"
					element={<PressureVessels />}
				/>
				<Route path="/blog/:id" element={<BlogPost />} />
			</Router>
		</BrowserRouter>
	);
}

export default App;
