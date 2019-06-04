import React from 'react';
import ReactDOM from "react-dom";
import './styles/themeColors.scss';
import Game from './game';
import Header from './header'

ReactDOM.render(
    <div>
        <Header />
        <Game />
    </div>
, document.getElementById("root"));
