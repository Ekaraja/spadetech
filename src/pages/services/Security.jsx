import React from "react";
import Header from "../../components/header/Header";
import Offers from "../../components/services/Offers";
import ServicesSolutions from "../../components/services/ServicesSolutions";
import ServicesDifferences from "../../components/services/ServicesDifferences";
import WorkSteps from "../../components/services/WorkSteps";

// DATA
import { securityHeader } from "../../utils/contents/headers-contents/headerContents";
import { securityOffers } from '../../utils/contents/offers-list/offersContents'
import { securityCard } from "../../utils/contents/cards-contents/securityAuditCard";

const Security = () => {

	return (
		<>
			<Header header={securityHeader} />

			{/* <h1>Card section's font size need to be improved</h1> */}
			<ServicesSolutions card={securityCard} />
			<Offers page={securityOffers} />
			<WorkSteps />
			<ServicesDifferences cards={securityCard.section_3} />
		</>
	);
};

export default Security;
