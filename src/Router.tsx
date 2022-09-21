import {
    Routes,
    Route,
} from "react-router-dom";
import { Constructor } from "./Pages/Constructor/Constructor";
import { Home } from "./Pages/Home/Home";

export const Router = () => {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/constructor' element={<Constructor />} />

            {/* </Route> */}
        </Routes>
    );
};