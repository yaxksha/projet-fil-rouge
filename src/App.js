import "./styles/styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Weapons from "./components/Weapons";
import { BrowserRouter, data, Link, Route, Routes } from "react-router-dom";
import Weapon from "./components/Weapon";

import Monsters from "./components/Monsters";
import Monster from "./components/Monster";
import Events from "./components/Events";
import EditEvents from "./components/EditEvents";
import Contact from "./components/Contact";
import Envoye from "./components/Envoye";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/armes" element={<Weapons />}></Route>
          <Route path={`/armes/:id`} element={<Weapon />}></Route>
          <Route path="/monstres" element={<Monsters />}></Route>
          <Route path={`/monstres/:id`} element={<Monster />}></Route>
          <Route path="/events" element={<Events />} />
          <Route path="/events/edit" element={<EditEvents />} />
          <Route path="/events/edit/:id" element={<EditEvents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sent" element={<Envoye />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
