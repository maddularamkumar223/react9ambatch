import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
import { RouterProvider } from "react-router-dom";
import RouteData from "./routes/RouteData";
import { Provider } from "react-redux";
import Store from "./store/Store";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={RouteData}>
      <App />
    </RouterProvider>
    ,
  </Provider>,
);
