import React,{ useContext } from 'react'
import Context from '../../context/context'
import "../../style/manage/validationMessage.css"

export default function ValidationMessage() {

    const { validationMessage, toggleValidation} = useContext(Context)

    return (
        <div className="validation-message" style={toggleValidation ? {display: "block"}: {display:"none"}}>
            <p>
                 {validationMessage}
            </p>
        </div>
    )
}
