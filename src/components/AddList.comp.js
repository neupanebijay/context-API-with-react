import React, { useContext, useState } from 'react';
import { ItemContext } from './ItemContext.comp';




export const AddList = () => {
    const [items, setItems] = useContext(ItemContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');


    const updateName = e => {
        setName(e.target.value);
    }
    const updatePrice = e => {
        setPrice(e.target.value);
    }


    const addList = e =>{
        e.preventDefault();
        if(!name ){
            alert('please enter name');
        
            return;
        }
        
        setItems(movies=>[...movies, {name:name, price:price}]);
        setName('');
        setPrice('');
    }

        return (
        <form onSubmit={addList}>
            <p>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={updateName}/>
                </label>
            </p>
            <p>
                <label>
                    Price:
                    <input type="text" name="price" value={price} onChange={updatePrice}/>
                </label>
            </p>
            <button>Add</button>
        </form>
    )

}
