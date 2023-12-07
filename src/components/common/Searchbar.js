import React from 'react'
import './Searchbar.css'
import mic from '../../Assests/mic.png'
import Search from '../../Assests/Search.png'

const Searchbar = () => {
    return (
        <div className='search'>

            <div className='gradient-border1 search-border'>
                <div className='search-box'>
                    <img src={Search} alt='search' />
                    <input type='text' placeholder='Search your StoreCode' />
                    <img src={mic} alt="mic" />
                </div>
            </div>

        </div>
    )
}

export default Searchbar