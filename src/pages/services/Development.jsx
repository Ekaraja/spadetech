import React from "react";
import Header from "../../components/header/Header";
import ServicesSolutions from "../../components/services/ServicesSolutions";
import ServicesDifferences from "../../components/services/ServicesDifferences";
import Offers from "../../components/services/Offers";

// DATA
import { developmentHeader } from "../../utils/contents/headers-contents/headerContents";
import { developmentCard } from "../../utils/contents/cards-contents/developmentCard";
import { developmentOffers } from "../../utils/contents/offers-list/offersContents";

const Development = () => {

	return (
		<>
			<Header header={developmentHeader} />
			{/* <h1>Card section's font size need to be improved</h1> */}
			<ServicesSolutions card={developmentCard} />
			<Offers page={developmentOffers}/>
			<ServicesDifferences cards={developmentCard.section_3} />
		</>
	);
};

export default Development;
