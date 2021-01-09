import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/01/img17/prime/other/1053033_us_prime_dex_vxd-1060_DEX_LP_Banner_DT_v1.png"
					alt=""
				/>
				<div>
					<h2 className="checkout__title">Your shopping Basket</h2>
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;