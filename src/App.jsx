import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About, Blogs, Contact, Facilitator, Galleries, Home, Ministry } from "./layout/index";
import { Appointment, SignIn, SignUp } from "./components/index";
import 'animate.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/gallery" element={<Galleries />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilitators" element={<Facilitator />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}
