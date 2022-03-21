import React from 'react';
import Footer from '../../../components/Footer/Footer'
import TeamCards from '../../../Container/MorePage/Team/TeamCards/TeamCards'
import TeamNavbar from '../../../Container/MorePage/Team/TeamNavbar/TeamNavbar'
const TeamPage = () =>{
    return(
<div>
        <TeamNavbar />
        <TeamCards />
        <Footer />
    </div>
    )
}

export default TeamPage;