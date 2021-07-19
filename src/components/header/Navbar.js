import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<nav>
			<ul class="nav-links">
				<li>
					<a href="">Home</a>
				</li>
				<li class="menu">
					<a href="#2">Destinations</a>
				</li>

				<li>
					<a href="#4">About Us</a>
				</li>
				<li>
					<a href="#3">Contact Us</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
