import React, { useEffect, useContext, useState } from 'react'
import Context from '../../context/context'

export default function PlayContent() {

    const { server, setValidationMessage, validationMessage } = useContext(Context)
    const [toggleResult, setToggleResult] = useState(false)
    const [cardPlay, setCardPlay] = useState({})

    const today = new Date()

    const addDays = (date, days) => {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days)
        return copy
    }

    const convertDate = (date) => {
        let dd = date.getDate()
        const mm = date.getMonth() + 1
        const yyyy = date.getFullYear()
        const dateFormat = `${dd}-${mm}-${yyyy}`
        return dateFormat
    }



    useEffect(() => {
        const getCards = async () => {
            const config = {
                headers: {
                    'content-type': 'application/json',
                },
                method: 'get',
            }
            const promise = await fetch(`${server}/cardDate/${convertDate(today)}`, config)
            const content = await promise.json()
            console.log(content);
            setCardPlay(...content)
        }

        getCards()

    }, [validationMessage])

    const handleResult = () => {
        setToggleResult(!toggleResult)
    }

    const incrementCard = async () => {
        let nextDate;
        switch (cardPlay.card_rank) {

            case 1 || 2:
                nextDate = addDays(today, 2);
                break;
            case 3 || 4:
                nextDate = addDays(today, 4);
                break;
            case 5 || 6:
                nextDate = addDays(today, 8);
                break;
            case 7 || 8:
                nextDate = addDays(today, 15);
                break;
            case 9 || 10:
                nextDate = addDays(today, 30);
                break;
            case 11 || 12:
                nextDate = addDays(today, 60);
                break;
            case 13 || 14:
                nextDate = addDays(today, 120);
                break;
        }
        sendResult({ ...cardPlay, card_rank: cardPlay.card_rank + 1, last_update: convertDate(nextDate) })
    }

    const resetCard = () => { 
        sendResult({ ...cardPlay, card_rank: 1, last_update: convertDate(today) })
    }

       const sendResult = async (card)=> {
           console.log(card);
        const config = { 
            headers : {
                "Content-Type":"application/json"
            },
            method: "put",
            body: JSON.stringify(card)
        }
        const promise = await fetch(`${server}/card`, config)
        const content = await promise.json()

        console.log(content);
        if(content.message === "Carte modifiée"){
            setValidationMessage({
            message : "Validé"
        })
        }
        

    
    }


    

    console.log(cardPlay);

    return (
        <div>
            {toggleResult ? cardPlay && cardPlay.verso : cardPlay && cardPlay.recto}
            {
                toggleResult ?
                    <div>
                        <button onClick={incrementCard}>true</button>
                        <button onClick={resetCard}>false</button>
                    </div>
                    : <button onClick={handleResult}>result</button>
            }

        </div>
    )
}
