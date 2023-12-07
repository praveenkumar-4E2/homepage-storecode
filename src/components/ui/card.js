import React from 'react'
import Input from './Input'

const card = () => {
    return (
        <div className='outer-card'>
            <div className='card gradient-border2'>
                <div className='inner-card col gradient-border1'>

                    <div>
                        <h3>Get a code for your link</h3>
                    </div>
                    <div className=' card gradient-border1'>


                        <div className='code-bar row'>

                            <Input type='text' placeholder='Paste your link here..' />
                            <span className='button-type gradient-border2'><p>GET CODE</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card