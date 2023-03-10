import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import Form from './Form';
import ListItmes from './ListItmes';

const BoxTodo = () => {

    const [itemText, setItemtext] = useState('');
    const [listItmes, setlistItems] = useState([]);
    const [isUpdating, setIsUpdating] = useState('')
    const [updateItemText, setUpdatingItemsText] = useState('')




    const addItem = async (event) => {
        event.preventDefault();
        if (!itemText) {
            return;
        }


        try {
            const res = await axios.post('http://localhost:5000/api/item', { item: itemText });

            setlistItems(prev => [...prev, res.data])
            setItemtext('')

        } catch (erorr) {
            console.log(erorr);
        }
    }


    useEffect(() => {

        const getItemList = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/items')
                setlistItems(res.data);
                console.log('render');
            }
            catch (erorr) {
                console.log(erorr);
            }
        }
        getItemList()

    }, [])


    const deletItem = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/item/${id}`)
            console.log(res.data);
            const newListItems = listItmes.filter(item => item._id !== id);
            setlistItems(newListItems)
        }
        catch (erorr) {
            console.log(erorr)
        }
    }



    const updateItems = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5000/api/item/${isUpdating}`, { items: updateItemText });
            console.log(res.data);

            const updateItemIndex = listItmes.findIndex(item => item._id === isUpdating);
            const updatedItem = listItmes[updateItemIndex].item = updateItemText;
            setUpdatingItemsText('');
            setIsUpdating('');
        }
        catch (erorr) {
            console.log(erorr);
        }
    }


    const Update = () => (

        <form className='Update-item' onSubmit={(e) => { updateItems(e) }}>
            <input className='input-update' type='text' placeholder='New Item' onChange={e => { setUpdatingItemsText(e.target.value) }} value={updateItemText}></input>
            <button className='btn-update' type='submit'>Update</button>
        </form>

    )





    return (
        <section className='my-box'>

            <Form itemText={itemText} setItemtext={setItemtext} onSubmit={addItem} />

            <ListItmes listItmes={listItmes} deletItem={deletItem} isUpdating={isUpdating} setIsUpdating={setIsUpdating} Update={Update} />

        </section>
    )
}

export default BoxTodo