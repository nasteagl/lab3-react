import './App.css'
import HomePage from '@pages/Homepage.jsx';
import AboutPage from '@pages/AboutUs.jsx';
import OurPeople from '@pages/OurPeople.jsx';
import LatestNews from "@pages/LatestNews.jsx";
import {Route, Router, Routes} from "@components/navigation/index.js";

function App() {
    return (
        <>
            {/*<HomePage />*/}
            {/*<AboutPage />*/}
            {/*<OurPeople />*/}
            {/*<LatestNews/>*/}

            <Router>
                <Routes>
                    <Route path="/">
                        <HomePage />
                    </Route>
                    <Route path="/AboutUs">
                        <AboutPage />
                    </Route>
                    <Route path="/OurPeople">
                        <OurPeople />
                    </Route>
                    <Route path="/LatestNews">
                        <LatestNews />
                    </Route>
                </Routes>
            </Router>

        </>
    )
}

export default App;


