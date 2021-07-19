import React from "react";
import "./Features.css";

function Features() {
	return (
		<div className="feature-container-fluid">
			<div className="row">
				<div className="feature-box col-lg-4">
					<i className="fas fa-check-circle fa-6x feature-icons"></i>
					<h3>Culture of India</h3>
					<p>So Powerful and One of the ancient Among.</p>
				</div>
				<div className="feature-box col-lg-4">
					<i className="fas fa-bullseye fa-6x feature-icons"></i>
					<h3>Simplicity</h3>
					<p>Simple , Sorted And Loved Among The World</p>
				</div>
				<div className="feature-box col-lg-4">
					<i className="fas fa-heart fa-6x feature-icons"></i>
					<h3>Caring & Loving</h3>
					<p>Loved Everywhere With respect And Care</p>
				</div>
			</div>
		</div>
	);
}

export default Features;
