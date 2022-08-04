import React from "react";
import { members } from "../../../utils/contents/about-members/memberContents";
import Story from "../story/Story";
import "./team.css";

const Team = () => {
	return (
		<>
			<Story />
			<section className="container team-section --white-bg ">
				<div className="team__container">
					<div className="content__left">
						<h3 className="about-section__title">Meet Our Team</h3>
						<div className="about-section__desc">
							<p>
								Our team consists of passionate, highly skilled individuals who
								are dedicated to helping our clients succeed.
							</p>
							<p>
								From developers to blockchain consultants and security advisors,
								our team has the expertise you need to take your project to the
								next level.
							</p>
						</div>
					</div>
					<div className="team-member">
						{members.map((member) => {
							return (
								<div key={member.id} className="member">
									<div>
										<img
											className="member-avatar"
											src={member.avatar}
											alt={member.name}
										/>
									</div>
									<div className="member-info">
										<p className="member-name">{member.name}</p>
										<small className="member-position">{member.position}</small>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Team;
