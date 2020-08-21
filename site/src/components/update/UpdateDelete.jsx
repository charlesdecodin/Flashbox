import React from 'react'
import update from '../../images/update.svg'
import Delete from './Delete.jsx'
import {Link} from "react-router-dom"

export default function UpdateDelete({toggleUpdate, item, index, state, property, path, link, setState}) {

    const updateMethod = (index) => {
        setState({...state[index], method:"PUT"})
    }

    return (
        <div style={toggleUpdate[item.noun] ? { display: "block" } : { display: "none" }} >
            <Delete
                index={index}
                state={state}
                property={property}
                path={path}
            />
            <Link onClick={() => { updateMethod(index) }} to={link}>
                <img src={update} alt="" />
            </Link>

        </div>
    )
}
