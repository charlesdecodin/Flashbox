import React, {useContext, useEffect} from 'react'
import Header from '../Header.jsx'
import Context from '../../context/context'
import  UpdateCategoriesContent from './UpdateCategoriesContent.jsx'

export default function UpdateCategoriesPage() {
    return (
        <div>
            <Header/>
            <UpdateCategoriesContent/>
        </div>
    )
}
