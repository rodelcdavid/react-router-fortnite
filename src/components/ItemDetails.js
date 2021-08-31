import { useEffect, useState } from "react"
import fidget from './fidget.gif'

const ItemDetails = ({match}) => {
  

    //api key: 3912d2dd-ce03ee0a-bb990f89-adf62c09
    //url: https://fortniteapi.io/v2/items/upcoming?lang=en

    const [item, setItem] = useState({
        images: {}
    })

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        fetch(`https://fortniteapi.io/v2/items/get?id=${match.params.id}`, {
            method: 'GET',
            headers: {
                'Authorization': '3912d2dd-ce03ee0a-bb990f89-adf62c09'
            }
        })
        .then(response => response.json())
        // .then(item => console.log(item))
        .then(item => setItem(item.item))
     
    }



    if (!item.name){
        return (
            <div className = 'center-page'>
        <img src={fidget} alt=''/>
            </div>
        )
    } else {

        return (
            <div className ='center-page'>
            <h1>{item.name}</h1>
            <img style={{width: '200px', height: '200px', boxShadow: '0 0 10px grey', border:'solid 2px black'}} src={item.images.background} alt={item.name}/>
            </div>
        )
    }
}

export default ItemDetails;