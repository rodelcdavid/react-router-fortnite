import { useEffect, useState } from "react"
import './Shop.css'
import { Link } from "react-router-dom"
import fidget from './fidget.gif'

const Shop = () => {

    //api key: 3912d2dd-ce03ee0a-bb990f89-adf62c09
    //url: https://fortniteapi.io/v2/items/upcoming?lang=en

    const [items, setItems] = useState([])

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        fetch('https://fortniteapi.io/v2/items/upcoming?lang=en', {
            method: 'GET',
            headers: {
                'Authorization': '3912d2dd-ce03ee0a-bb990f89-adf62c09'
            }
        })
        .then(response => response.json())
        .then(itemList => setItems(itemList.items))
        

      
        
    }

    if (!items.length){
        return (
            <div className = 'center-page'>
        <img src={fidget} alt=''/>
            </div>
        )
    } else {
        return (
            <>
            <h1 className='page-title'>Shop</h1>
         

            <div className ='item-container'>
            {items.map(item => {
                return (
                <div className= 'card' key={item.id}>
                <h2>
                <Link className ='links' to={`/shop/${item.id}`}>{item.name}</Link>
                </h2>
                </div>
            )
            }
            )}
            </div>
            
            
            </>
        )
    }

   
}

export default Shop;