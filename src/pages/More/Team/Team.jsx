import React from 'react'
import Footer from '../../../components/Footer/Footer'
import TeamCards from '../../../Container/More/Team/TeamCards/TeamCards'
import TeamNavbar from '../../../Container/More/Team/TeamNavbar/TeamNavbar'

const Team = () => {
  return (
    <div>
        <TeamNavbar />
        <TeamCards />
        <Footer />
    </div>
  )
}

export default Team