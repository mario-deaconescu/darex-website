import Navbar from "./nav/Navbar.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./home/Home.tsx";
import {CssVarsProvider} from "@mui/joy";
import {theme} from "./theme.ts";
import ScrollProvider from "./contexts/ScrollProvider.tsx";
import NameProvider from "./contexts/NameProvider.tsx";

function App() {

    return (
        <Router>
            <CssVarsProvider theme={theme} defaultMode='dark'>
                <NameProvider>
                    <ScrollProvider>
                        <Navbar/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                        </Routes>
                    </ScrollProvider>
                </NameProvider>
            </CssVarsProvider>
        </Router>
    )
}

export default App
