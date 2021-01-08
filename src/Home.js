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
					<Product
						id="1"
						title="The lean startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={4}
					/>
					<Product
						id="2"
						title="Kenwood KMix Stand Mixer For Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						price={299}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="Wyze Cam 1080p HD Indoor WiFi Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, White, 1-Pack"
						price={25.97}
						rating={4}
						image="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY327_FMwebp_QL65_.jpg"
					/>

					<Product
						id="6"
						title="Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
						price={40.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY327_FMwebp_QL65_.jpg"
					/>

					<Product
						id="5"
						title="Oculus Rift S PC-Powered VR Gaming Headset"
						price={414.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71URNvzoWqL._AC_UY327_FMwebp_QL65_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="4"
						title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort"
						price={164.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
