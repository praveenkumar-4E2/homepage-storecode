import React from 'react'
import Card from '../ui/card'
import Searchbar from '../common/Searchbar'



const Hero = () => {
    const styledComponent = {
        width:'100%'
    }

    return (
        <div className='col' style={styledComponent}>
            <Searchbar/>
            <Card/>
        </div>
    )
}

export default Hero