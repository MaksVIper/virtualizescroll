import React, {useEffect, useState} from 'react';
import '../styles/_general.scss';
import List from "./List/List";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./About/About";

function App() {
    const [scrollEnd, setScrollEnd] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                setScrollEnd(!scrollEnd);
                return;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
      <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<List
                    scrollEnd={scrollEnd}
                    setScroll={setScrollEnd}
                />}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
