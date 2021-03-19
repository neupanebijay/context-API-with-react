import React, { useContext } from 'react';
import { ItemContext } from './ItemContext.comp';

export const Navbar = () => {
    const [items, setItems] = useContext(ItemContext);

    // const 
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>List<b>({items.length})</b></li>
            </ul>
        </nav>
    )
}
