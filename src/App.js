import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import RecentArticles from "./components/RecentArticles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<RecentArticles />} />
      </Routes>
    </div>
  );
}

export default App;
