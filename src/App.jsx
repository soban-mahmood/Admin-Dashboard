import BlogManagement from "./component/BlogManagement";

import Dashboard from "./component/Dashboard";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-900 h-[100vh] w-full sm:h-[1800px]">
      <Router>
        <Header />
        <Routes>
          <Route path="/dashed" element={<Dashboard />} />
          <Route path="/user" element={<BlogManagement />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;