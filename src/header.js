import React from 'react';
import 'tachyons';

const Header = () => {
    return (
        <div>
            <header className="tc pv4 pv5-ns">
                <img src="https://digitaliz.in/wp-content/uploads/2019/02/naman.jpg" className="br3 ba b--black-10 h3 w3" alt="avatar" />
                    <h1 className="f5 f4-ns fw6 black-70">Naman Modi</h1>
                    <h2 className="f6 black-70 fw2 ttu tracked">A Simple Tic Tac Toe App</h2>
                    <a href='https://github.com/imnamanmodi1/tic-tac-toe'>See Full Code Here</a>
            </header>
        </div>
    );
}

export default Header;