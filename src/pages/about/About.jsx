import React from 'react'
import Header from '../../components/header/Header'
import './about.css'

import { aboutHeader } from '../../utils/contents/headers-contents/headerContents'
import Team from '../../components/about/team/Team'

const About = () => {
    return (
        <>
            <Header header={aboutHeader} />
            <Team/>
        </>
    )
}

export default About