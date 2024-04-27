import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DriftPage from "./pages/DriftPage/DriftPage";
import ForzaPage from "./pages/ForzaPage/ForzaPage";
import TimeAttackPage from "./pages/TimeAttackPage/TimeAttackPage";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Route>
      </Routes>
    </>
  );
}