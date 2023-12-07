import React from 'react'
import Hero from '../components/section/Hero'
import ProfilesSection from '../components/section/ProfilesSection'
import InfoSection from '../components/section/InfoSection'

const HomePage = () => {
  const styledComponent = {
    minHeight: '100vh'
  }
  return (
    <div className='home' style={styledComponent}>
      <Hero />
      <ProfilesSection />
      <InfoSection/>
    </div>
  )
}

export default HomePage