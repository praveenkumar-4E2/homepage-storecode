import React from 'react'
import v1 from '../../Assests/v1.png'
import v2 from '../../Assests/v2.png'
import v3 from '../../Assests/v3.png'
import TextCard from '../ui/TextCard'

const InfoSection = () => {

    const infos = [
        {
            id: 1,
            url: v1,
            title: "Earn Reward",
            text: "Earn from every purchase made through your unique codes."

        },
        {
            id: 2,
            url: v2,
            title: "Your Personal Store",
            text: "Have your personal stores powered by your influence."
        },
        {
            id: 3,
            url: v3,
            title: "Exclusive Codes",
            text: "Keep your recommended sites a secret under your unique code."
        }
    ]
    return (
        <div className='info-outer '>
            <h4 className='text-gradient'>KEY BENEFITS</h4>

            <h5 className='text-gradient'>Guide your followers</h5>
            <div className=' gradient-border1 info-inner'>

                <div className='info-section'>

                    {infos.map((info) => (
                        <TextCard key={info.id} url={info.url} title={info.title} text={info.text} />
                    ))}
                </div>

            </div>



        </div>
    )
}

export default InfoSection