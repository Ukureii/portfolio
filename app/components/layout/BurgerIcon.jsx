import React from 'react';

function BurgerIcon() {
    return (
        <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" />
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
}

export default BurgerIcon;
