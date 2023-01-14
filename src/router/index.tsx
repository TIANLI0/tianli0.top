import Home from "../pages/index";
import Error from "../pages/error";
import PrivacyPolicy from "../pages/privacy-policy";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
    }
]);

export default router