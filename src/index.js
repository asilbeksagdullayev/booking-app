import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./assets/style.css";
// import { Routes } from "./routes/routes";
// import { MainAdmin } from "./pages/app/admin/mainAdmin/index.jsx";
import { EditProfile } from "./pages/app/profile/editProfile/EditProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<EditProfile />
	</BrowserRouter>
);
