import React from "react";
import Place from "./Place";
import "./Destinations.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

function Destinations(props) {
	const { assignPlace, data } = props;

	return (
		<div id="2">
			<div className="destination-header">
				<h2>Must Visit Destinations</h2>
				<p>
					From historical cities to natural splendours, come see the best of
					India
				</p>
			</div>
			<div className="carousel-wrapper">
				<Carousel
					breakPoints={breakPoints}
					enableAutoPlay={true}
					autoPlaySpeed={4000}
				>
					{data.map((place, index) => (
						<Place key={index} place={place} assignPlace={assignPlace} />
					))}
				</Carousel>
			</div>
		</div>
	);
}

export default Destinations;
