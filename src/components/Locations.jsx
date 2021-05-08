import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "../css/style.css";
import uniqid from 'uniqid'

const Locations = (props) => {
	
	const {data} = props
	
	return (
		<div className="">
			<div className="location-container">
				{data.map((item) => (
					<div key={uniqid()} className="tarjeta mx-3 my-2">
						<div className="div-photo">
							<img
								className="location-card"
								src={item.photo}
								alt=""
							/>
						</div>
						<div className="items-info">
							{item.superHost === true ? (
								<button className="item-host">
									SUPER HOST
								</button>
							) : (
								<span></span>
							)}
							<span className="item-type">{item.type}</span>
							<span className="item-rating">
								<BsFillStarFill className="item-star" />
								{item.rating}
							</span>
							<h4 className="item-title">{item.title}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};


export { Locations };
