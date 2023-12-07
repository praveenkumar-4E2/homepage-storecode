import React from 'react'
import './ProfileCard.css'

const ProfileCard = ({name,src}) => {
    return (
        <div className='gradient-border1 profile'>
            <div className='profile-details'>
                <div>
                    <img src={src} alt={name} />
                </div>
                <h6>{name}</h6>
            </div>

        </div>
    )
}

export default ProfileCard