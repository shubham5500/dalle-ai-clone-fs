import React from "react";
import {logo} from './assets';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CreatePost, Home } from "./pages";

const App = () => {
  return <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white
    sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to={"/"}>
        <img src={logo} className="w-28 object-contain"></img>
      </Link>
      <Link to={'/create-post'} className="font-inter font-medium bg-purple text-white
      px-4 py-2 rounded-md">
        Create
      </Link>
    </header>
    <main className="w-full h-[calc(100%-73px)] bg-[#f9fafe] p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>;
};

export default App;
