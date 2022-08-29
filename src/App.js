import {BrowserRouter} from "react-router-dom";
import RoutesModule from "./components/routes/RoutesModule";

function App() {

    return (
        <BrowserRouter>
            <RoutesModule/>
        </BrowserRouter>
    );
}

export default App;
