// import React from 'react'
import Intro from '../Components/Home/Intro'
import PastSponsors from '../Components/Home/PastSponsors'
import EventCaraousel from '../Components/Home/EventCaraousel.tsx'
import Lannding from '../Components/Home/Landing.tsx'

function Home() {
    return (
        <div>
            <Lannding />
            <Intro/>
            <PastSponsors/>            
            <EventCaraousel />
        </div>
    )
}

export default Home