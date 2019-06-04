import React from 'react';
import './styles/themeColors.scss';



function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}


export default Square;