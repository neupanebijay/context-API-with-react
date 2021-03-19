import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = (props) => {
    const [items, setItems] = useState([
            {
                name:'Romeo Julliet',
                id: 101,
                price: '$10'

            },
            {
                name:'There is something in Mary',
                id: 105,
                price: '$10'

            },
            
            {
                name:'Shadow in the clouds',
                id : 106,
                price : '$12'

            },
            
            {
                name:'Terminator, the man with heart of Steel',
                id: 109,
                price: '$20'

            }

        ]);

    return (
        <ItemContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemContext.Provider>
    )
}
