import React from 'react'
import update from '../../images/update.svg'
import DeleteCategories from './DeleteCategories.jsx'
import {Link} from "react-router-dom"

export default function UpdateDelete({toggleUpdate, item, index, state, property, path}) {
    return (
        <div style={toggleUpdate[item.noun] ? { display: "block" } : { display: "none" }} >
            <DeleteCategories
                index={index}
                state={state}
                property={property}
                path={path}
            />
            <Link onClick={() => { test(index) }} to="/add">
                <img src={update} alt="" />
            </Link>

        </div>
    )
}
