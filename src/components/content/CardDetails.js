// import React from "react";
// import "./CardDetails.css";

// function CardDetails(props) {
// 	const { place } = props;
// 	console.log("place", place);
// 	return (
// 		<div className="Page">
// 			<div className="PagesHead">
// 				<div className="ImageAndName">
// 					<h1>{place.site.places.name}</h1>
// 					<img src={place.site.places.url} alt="description" />
// 					<h3>{place.site.places.description}</h3>
// 				</div>
// 			</div>
// 			<div className="content">
// 				<br />
// 				<h3>{place.site.places.p1}</h3>
// 				<h3>{place.site.places.p2}</h3>
// 				<h3>{place.site.places.p3}</h3>
// 			</div>
// 			<div className="Ender">
// 				<h1>nearByResturants</h1>

// 				<div className="HotelAndRestaurent">
// 					<div className="card" style={{ width: "18rem" }}>
// 						<img
// 							src={`${place.site.places.nearByResturants[0].imgUrl}`}
// 							class="card-img-top"
// 							alt="..."
// 						/>
// 						<div className="card-body">
// 							<h5 className="card-title">
// 								{place.site.places.nearByResturants[0].name}
// 							</h5>
// 							<p className="card-text">
// 								{place.site.places.nearByResturants[0].address}
// 							</p>
// 							<a
// 								href={place.site.places.nearByResturants[0].url}
// 								className="btn btn-primary"
// 							>
// 								Visit
// 							</a>
// 						</div>
// 					</div>

// 					<div className="card" style={{ width: "18rem" }}>
// 						<img
// 							src={`${place.site.places.nearByResturants[1].imgUrl}`}
// 							class="card-img-top"
// 							alt="..."
// 						/>
// 						<div className="card-body">
// 							<h5 className="card-title">
// 								{place.site.places.nearByResturants[1].name}
// 							</h5>
// 							<p className="card-text">
// 								{place.site.places.nearByResturants[1].address}
// 							</p>
// 							<a
// 								href={place.site.places.nearByResturants[1].url}
// 								className="btn btn-primary"
// 							>
// 								Visit
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="Ender">
// 				<h1>Near by Hotels</h1>

// 				<div className="HotelAndRestaurent">
// 					<div className="card" style={{ width: "18rem" }}>
// 						<img
// 							src={`${place.site.places.nearByHotels[0].imgUrl}`}
// 							class="card-img-top"
// 							alt="..."
// 						/>
// 						<div className="card-body">
// 							<h5 className="card-title">
// 								{place.site.places.nearByHotels[0].name}
// 							</h5>
// 							<p className="card-text">
// 								{place.site.places.nearByHotels[0].address}
// 							</p>
// 							<a
// 								href={place.site.places.nearByHotels[0].url}
// 								className="btn btn-primary"
// 							>
// 								Visit
// 							</a>
// 						</div>
// 					</div>

// 					<div className="card" style={{ width: "18rem" }}>
// 						<img
// 							src={`${place.site.places.nearByHotels[1].imgUrl}`}
// 							class="card-img-top"
// 							alt="..."
// 						/>
// 						<div className="card-body">
// 							<h5 className="card-title">
// 								{place.site.places.nearByHotels[1].name}
// 							</h5>
// 							<p className="card-text">
// 								{place.site.places.nearByHotels[1].address}
// 							</p>
// 							<a
// 								href={place.site.places.nearByHotels[1].url}
// 								className="btn btn-primary"
// 							>
// 								Visit
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default CardDetails;
import React from "react";
import "./CardDetails.css";

function CardDetails(props) {
	const { place } = props;
	console.log("place", place);
	return (
		<div className="Page">
			<div className="PagesHead elegantshadow">
				<div className="ImageAndName frame">
					<h1>{place.site.places.name}</h1>
					<img src={place.site.places.url} alt="description" />
					<h3 class="details">{place.site.places.description}</h3>
				</div>
			</div>
			<div className="content">
				<br />
				<h3>{place.site.places.p1}</h3>
				<h3>{place.site.places.p2}</h3>
				<h3>{place.site.places.p3}</h3>
			</div>
			<div className="Ender">
				<h1 className="deepshadow">NEARBY RESTRAUNTS</h1>

				<div className="HotelAndRestaurent">
					<div className="card" style={{ width: "18rem" }}>
						<img
							src={`${place.site.places.nearByResturants[0].imgUrl}`}
							class="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">
								{place.site.places.nearByResturants[0].name}
							</h5>
							<p className="card-text">
								{place.site.places.nearByResturants[0].address}
							</p>
							<a
								href={place.site.places.nearByResturants[0].url}
								className="btn btn-primary"
							>
								Visit
							</a>
						</div>
					</div>

					<div className="card" style={{ width: "18rem" }}>
						<img
							src={`${place.site.places.nearByResturants[1].imgUrl}`}
							class="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">
								{place.site.places.nearByResturants[1].name}
							</h5>
							<p className="card-text">
								{place.site.places.nearByResturants[1].address}
							</p>
							<a
								href={place.site.places.nearByResturants[1].url}
								className="btn btn-primary"
							>
								Visit
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="Ender">
				<h1 className="insetshadow">NEARBY HOTELS</h1>

				<div className="HotelAndRestaurent">
					<div className="card" style={{ width: "18rem" }}>
						<img
							src={`${place.site.places.nearByHotels[0].imgUrl}`}
							class="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">
								{place.site.places.nearByHotels[0].name}
							</h5>
							<p className="card-text">
								{place.site.places.nearByHotels[0].address}
							</p>
							<a
								href={place.site.places.nearByHotels[0].url}
								className="btn btn-primary"
							>
								Visit
							</a>
						</div>
					</div>

					<div
						className="card"
						style={({ width: "18rem" }, { marginRight: "50px" })}
					>
						<img
							src={`${place.site.places.nearByHotels[1].imgUrl}`}
							class="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">
								{place.site.places.nearByHotels[1].name}
							</h5>
							<p className="card-text">
								{place.site.places.nearByHotels[1].address}
							</p>
							<a
								href={place.site.places.nearByHotels[1].url}
								className="btn btn-primary"
							>
								Visit
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardDetails;
