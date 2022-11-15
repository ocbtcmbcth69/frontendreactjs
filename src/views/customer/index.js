import { useState } from "react";
import Footer from "../../components/master/Footer";
import Header from "../../components/master/Header";
import Home from "../../components/master/Home";

export default function TrangChu() {
    const [cartNumber, setCartNumber] = useState(0);

    return (
        <div className="App">
            <Header cartNumber = {cartNumber}/>
            <Home setCartNumber = {setCartNumber}/>
            <Footer />
        </div>
    );
}