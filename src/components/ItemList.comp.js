import React, { useContext } from 'react';
import { ItemContext } from './ItemContext.comp';
import { Items } from './Items.com';

export const ItemList = () => {
    const [items, setItems] = useContext(ItemContext);
    return (
        <div className='book-list'>
            {items.map((item)=>(
                   <Items name={item.name} price={item.price}/>
            ))}
        </div>
    )
}
