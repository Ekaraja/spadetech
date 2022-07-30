import React from 'react'
import { members } from '../../../utils/contents/about-members/memberContents'
import './team.css'

const Team = () => {
    return (
        <section className='container team-section'>
            <div className="content__left">
                <h3 className='about-section__title'>Meet Our Team</h3>
                <div className="about-section__desc">
                    <p>
                        Our team consists of passionate, highly skilled individuals who are dedicated to helping our clients succeed.
                    </p>
                    <p>
                        From developers to blockchain consultants and security advisors, our team has the expertise you need to take your project to the next level.
                    </p>
                </div>
            </div>
            <div className="team-member">
                {members.map(member => {
                    return (
                        <div key={member.id} className="member">
                            <div>
                                <img className="member-avatar" src={member.avatar} alt={member.name} />
                            </div>
                            <div className="member-info">
                                <p className='member-name'>{member.name}</p>
                                <small className='member-position'>{member.position}</small>
                            </div>
                        </div>)
                })}
            </div>
        </section>
    )
}

export default Team


/*


HOME PAGE :


    header

    section1 : Our solution for your business
    section2 : Our services

    footer




SERVICES PAGES : Consultancy / Security / Development

    header

    section1 : solutions
    section2 : What we offer => text center
    section3 : The Spade Tech Difference

    footer

    Style

    header title : 48px 58px 700
    header desc : 20px 32px 400

    section title : 42px 56px 700
    section desc : 16px 26px 400
    section content : 16px 24px 600

    card : br4px 
        card title : 22px 40px 700
        card text : 16px 26px 600
        card icon : #FCEBED 
    
    card II : br4px 
        card title : 28px 32px 700
        card text : 16px 24px 600
        card icon


     HEADER
        .container .about-header
        .about-header__left => img
        .about-header__right => h2 & p // flex

    SECTION
        .container .sevices-section .services-solutions  // services-works // services-differences


 container services-section general-section1
 container services-section general-section2
 container services-section general-section3
 general-section3__container





//  KEEP
 .services-section p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
}



ABOUT PAGE STRUCTURE

    header

    section 1 : Our Mission
    section 2 : How We Work
    section 3 : Meet Our Team

    footer

    Style 

    header title , section title : 42px 56px 700
    header desc : 16px 29ox 500
    section desc : 20px 32px 400

    card : br4px #FCEBED
        text 20px 36px 500 poppins #4B4A4A
        number 64px 56px 500 poppins #EF798A
    steps : 
        step count : 16px 29px 500 poppins #999999 // active #EF798A
        content    : 32px 48px 500  #000000 // highlight #EF798A






    


    HEADER
        .container .about-header
        .about-header__left => img
        .about-header__right => h2 & p // flex


    SECTION1 
        .container .mission__section
        SAME BEHAVIOR
        .about-header__left => h2 & p & p // flex
        .about-header__right => img

    SECTION2 
        .container .work__section
        h2 & small => flex
        .steps__container
            .step__count flex
            .step__text
            img
        
    SECTION3 
        .container .team__section

    .--gray-bg 
    .--text-center







    //CARDS

    HOME 
        card: br4px
        card title : 22px 40px 700 #08375B
        card text : 14px 25px 500 #4B4A4A

    
    SERVICES
        card : br4px 
        card title : 22px 40px 700 #08375B
        card text : 16px 26px 600 #4B4A4A
        card icon : #FCEBED 
    
    card II : br4px 
        card title : 28px 32px 700 #08375B
        card text : 16px 24px 600 #4B4A4A
        card icon
*/



