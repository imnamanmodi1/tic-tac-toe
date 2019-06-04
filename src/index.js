import React from 'react';
import ReactDOM from "react-dom";
import './styles/themeColors.scss';
import Game from './game';
import Header from './header';
import Footer from './footer';

ReactDOM.render(
    <div>
        <Header />
        <Game />
        <Footer />
    </div>
, document.getElementById("root"));
