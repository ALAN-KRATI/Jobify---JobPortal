import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./components/pages/Home";
import JobList from "./components/pages/JobList";
import PostJob from "./components/pages/PostJob";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<JobList />} />
        <Route path="post-job" element={<PostJob />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
