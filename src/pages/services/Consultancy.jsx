import React from "react";
import './services.css'

import Header from "../../components/header/Header";
import ServicesSolutions from "../../components/services/ServicesSolutions";
import Offers from "../../components/services/Offers";
import ServicesDifferences from "../../components/services/ServicesDifferences";

// DATA
import { consultancyHeader } from "../../utils/contents/headers-contents/headerContents";
import { consultancyCard } from "../../utils/contents/cards-contents/consultancyCard";
import { consultancyOffers } from "../../utils/contents/offers-list/offersContents";

const Consultancy = () => {

	return (
		<>
			<Header header={consultancyHeader} />
			{/* <h1>Card section's font size need to be improved</h1> */}
			<ServicesSolutions card={consultancyCard} extra={true} />
			<Offers page={consultancyOffers} />
			<ServicesDifferences cards={consultancyCard.section_3} contact={true} />
		</>
	);
};

export default Consultancy;
