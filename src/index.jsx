import React from "react";
import ReactDOMClient from "react-dom/client";
import { EncabezadoScreen } from "./screens/EncabezadoScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<EncabezadoScreen />);
