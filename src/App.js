/** @format */

import ReturnJSXVersion2 from "./Main.js";
import "./index.css";

function ReturnJSXVersion() {
	return (
		<>
			<header className="header">
				<h1>Welcome to my Website!</h1>
				<nav className="navbar">
					<ul>
						<li>
							<a className="header-link" href="#">
								Home
							</a>
						</li>
						<li>
							<a className="header-link" href="#">
								About
							</a>
						</li>
						<li>
							<a className="header-link" href="#">
								Services
							</a>
						</li>
						<li>
							<a className="header-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<ReturnJSXVersion2 />
		</>
	);
}

export default ReturnJSXVersion;
