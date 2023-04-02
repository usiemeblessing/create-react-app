/** @format */

function AboutAndServices() {
	const country = "Nigeria";

	return (
		<main>
			<section className="about">
				<h2 className="about-us">About Us</h2>
				<p className="about-text">
					We are a small Team of web developers based in {country}. We
					specialize in creating modern and responsive websites for
					businesses and individuals.
				</p>
			</section>
			<section className="services">
				<h2 className="our-services">Our Services</h2>
				<ul className="services-list-container">
					<li className="services-list-item">Web Design</li>
					<li className="services-list-item">Web Development</li>
					<li className="services-list-item">E-Commerce Solution</li>
					<li className="services-list-item">
						Search Engine Optimization
					</li>
				</ul>
			</section>
		</main>
	);
}

export default AboutAndServices;
