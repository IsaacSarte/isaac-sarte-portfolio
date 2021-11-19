import React from "react";
import {Canvas} from "react-three-fiber";
import {OrbitControls, Stars} from "drei";

// CSS
import './App.css';

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Arrow from "./components/arrow/Arrow";
import Home from "./components/home/Home";

export default function App() {
    return (
        <>
            <Header />
                <Canvas>
                    <OrbitControls />
                    <Stars 
                        depth={50}
                        count={2500}
                        fade
                    />
                </Canvas>
                <Home />
                <Arrow />
            <Footer />
        </>
    );
}