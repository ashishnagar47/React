import React from 'react'
import './ListItem.css'


function ListItems(props) {
    const items=props.items;
    const listItems=items.map(item=>{
        return <div className="list" key={item.key}>
            <p>{item.text}
            <span className="basket" onClick={()=> props.deleteItem(item.key)}>🗑️</span></p>
            
        </div>
    })
    return(
    <div>{listItems}</div>
    )
}

export default ListItems;
