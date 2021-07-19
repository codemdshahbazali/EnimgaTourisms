import React from "react";
import "./FormSection.css";

function FormSection() {
	return (
		<div id="4" className="form">
			<div className="form-background">
				<div className="form-container">
					<div className="form-screen">
						<div className="screen-header">
							<div className="screen-header-left">
								<div className="screen-header-button Close"></div>
								<div className="screen-header-button maximize"></div>
								<div className="screen-header-button minimize"></div>
							</div>
							<div className="screen-header-right">
								<div className="screen-header-ellipsis"></div>
								<div className="screen-header-ellipsis"></div>
								<div className="screen-header-ellipsis"></div>
							</div>
						</div>
						<div className="screen-body">
							<div className="screen-body-item left">
								<div className="app-title">
									<span>CONTACT</span>
									<span>US</span>
								</div>
								<div className="app-contact">
									CONTACT INFO : +91 82314928595
								</div>
							</div>
							<div className="screen-body-item">
								<div className="app-form">
									<div className="app-form-group">
										<input
											className="app-form-control text-empty"
											placeholder="NAME"
										/>
									</div>
									<div className="app-form-group">
										<input
											className="app-form-control text-empty"
											placeholder="EMAIL"
										/>
									</div>
									<div className="app-form-group">
										<input
											className="app-form-control text-empty"
											placeholder="CONTACT NO"
										/>
									</div>
									<div className="app-form-group message">
										<input
											className="app-form-control text-empty"
											placeholder="MESSAGE"
										/>
									</div>
									<div className="app-form-group buttons">
										<a title="mailto" href="mailto:arihantdaga100@gmail.com">
											<button className="app-form-button">SEND</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FormSection;
