import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StevePage from "./pages/StevePage";
import MarkPage from "./pages/MarkPage";
import ElonPage from "./pages/ElonPage";
import JackPage from "./pages/JackPage";
import ErrorPage from "./pages/ErrorPage";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import BillPage from "./pages/BillPage";
import ContactPage from "./pages/ContactPage";
import StagiairePage from "./pages/StagiairePage";
import BlogPage from "./pages/BlogPage";
import { useState } from "react";
import ShowPost from "./pages/ShowPost";
import ShowStagiaire from "./pages/ShowStagiaire";

function App() {
	// const [color, setColor] = useState("bg-blue-500");
	const [company, setCompany] = useState("Apple");

	return (
		<Router>
			{/* <Navigation /> */}
			<Routes>
				<Route path='/' element=<StevePage company={company} /> />
				<Route path='/mark' element=<MarkPage /> />
				<Route path='/elon' element=<ElonPage /> />
				<Route path='/jack' element=<JackPage /> />
				<Route path='/bill' element=<BillPage /> />
				<Route path='/blog' element=<BlogPage /> />
				<Route path='/stagiaire' element=<StagiairePage /> />
				<Route path='/contact' element=<ContactPage /> />
				<Route path='/post/:id' element=<ShowPost /> />
				<Route path='/user/:id' element=<ShowStagiaire /> />
				<Route path='*' element=<ErrorPage /> />
				<Route />
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
