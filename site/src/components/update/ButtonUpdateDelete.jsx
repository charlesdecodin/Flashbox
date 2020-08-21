import React, {useContext} from 'react'
import cog from '../../images/cog.svg'
import Context from '../../context/context'

export default function ButtonUpdateDelete({item}) {

    const { toggleUpdate, setToggleUpdate } = useContext(Context)

    const showUpdateBtn = (e, item) => {
        e.stopPropagation(); 
        setToggleUpdate({
            ...toggleUpdate,
            [item.noun] : true,
        })
    }

    return (
   
        <img style={toggleUpdate[item.noun]?{display: "none"}:{display: "block"}} src={cog} alt="" onClick={(e)=>{showUpdateBtn(e, item)}}/>
    )
}
