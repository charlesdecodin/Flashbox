import React, {useContext, useEffect} from 'react'
import Context from '../../context/context'
import '../../style/update/updateCategoriesContent.css'
import UpdateDelete from "./UpdateDelete.jsx"
import ButtonUpdateDelete from './ButtonUpdateDelete.jsx'

export default function UpdateCardContent() {

    const { server, card, cards, setCards, validationMessage, toggleUpdate, setCard}= useContext(Context)
    console.log(card);

    useEffect(()=>{
        const getCards = async () =>{

            const config = {
                headers : {
                    'content-type': 'application/json',
                },
                method: 'get'
            }
            const promise = await fetch(`${server}/card/${card.parent.squad_id}`, config)
            const content = await promise.json()
            console.log(content);
            setCards(content);
        }

        if(card && card.parent && card.parent.squad_id){
         getCards()   
        }
        
    },[card, server, validationMessage])

    return (
        <div className="container-categories" >
           {cards.map((item, index)=>{
               return(
                   <div className="container-category" key={index}>
                     <p>{item.recto}</p>   
                     <ButtonUpdateDelete
                        item={item}
                        />
                       <UpdateDelete
                       toggleUpdate={toggleUpdate}
                       item={item}
                       index={index}
                       state={cards}
                       setState={setCard}
                       property="card_id"
                       path="card"
                       link="/addCard"
                       />
                   </div>
                  
               )
           })}
        </div>
    )
}
