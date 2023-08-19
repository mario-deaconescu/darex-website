import Navbar from "./nav/Navbar.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./home/Home.tsx";
import {CssVarsProvider} from "@mui/joy";
import {theme} from "./theme.ts";
import ScrollProvider from "./contexts/ScrollProvider.tsx";
import NameProvider from "./contexts/NameProvider.tsx";

const base = import.meta.env.BASE_URL;

function App() {

    return (
        <Router>
            <CssVarsProvider theme={theme} defaultMode='dark'>
                <NameProvider>
                    <ScrollProvider>
                        <Navbar/>
                        <Routes>
                            <Route path={base}>
                                <Route index={true} element={<Home/>}/>
                            </Route>
                        </Routes>
                    </ScrollProvider>
                </NameProvider>
            </CssVarsProvider>
        </Router>
    )
}

export default App
