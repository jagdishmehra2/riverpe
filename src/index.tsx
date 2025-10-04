import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { Signup } from "./screens/Signup";
import { AccountType } from "./screens/AccountType";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account-type" element={<AccountType />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
