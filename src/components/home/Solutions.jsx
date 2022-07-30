import { cardContent } from "../../utils/contents/cards-contents/solutionCard"
import Card from "../card/Card";

const Solutions = () => {
	return (
		<section className="container solutions gray-card ">
			<h3 className="section__title">Our solution for your business</h3>
			<p className="section__desc">
				We make it easy for users to use our platform, that’s why we provide the
				benefit.
			</p>
			<div className="solutions__container">
				{cardContent.map(card => {
					return <Card key={card.id} card={card} />
				})}
			</div>
		</section>
	);
}

export default Solutions;
