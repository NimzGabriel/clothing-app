import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/Home";
import Navbar from "./routes/navbar/Navbar";
import SignIn from "./routes/sign-in/SignIn";

const Shop = () => {
  return <h1>Shop page</h1>;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
