import { useState, createContext } from "react";
import {Route, Routes} from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

import './scss/app.scss';

export const SearchContext = createContext()

const App = ()  => {
  const [searchText, setSearchText] = useState('')
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchText, setSearchText }}>
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      </SearchContext.Provider>
      
    </div>
  );
}

export default App;
