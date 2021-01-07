import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://static.amazon.jobs/global_images/2/images/Jobs_thumbnailV2.jpg?1554491962"
					alt="amazon"
				/>
				<div className="home__row">
					<Product />
					<Product />
					{/*Product*/}
				</div>
				<div className="home__row">
					<Product />
					<Product />
					<Product />
					{/*Product*/}
					{/*Product*/}
					{/*Product*/}
				</div>
				<div className="home__row">
					<Product />
					{/*Product*/}
				</div>
			</div>
		</div>
	);
}

export default Home;
