import React, { useState } from "react";
import { Locations } from "./Locations.jsx";
import { MdSearch } from "react-icons/md";
import "../css/style.css";
import logo from "../img/logo.png";
import myData from "./stays.json";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Search = () => {

	const [places, setPlaces] = useState(myData);
	const [filtro, setFiltro] = useState("");
	const [guests, setGuess] = useState(0);
	const count = places.length

	const filter = (e) => {
		e.preventDefault();
		const ciudades = myData.filter(
			(item) => item.city === filtro && item.maxGuests >= guests
		);
		const onlyGuests = myData.filter((item) => item.maxGuests >= guests)
		console.log(filtro.length)
		if (filtro.length === 0) {
			setPlaces(onlyGuests);
		} else {
			setPlaces(ciudades);
		}
	};

	const addGuests = () => {
		if (guests >= 0) setGuess(guests + 1);
	};
	const subGuests = () => {
		if (guests >= 1) setGuess(guests - 1);
	};

	return (
		<div>
			<div className="container-search">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<div className="input-group buscador">
					<form className="input-group" onSubmit={filter}>
						<select
							onChange={(e) => {
								
								setFiltro(e.target.value);
							}}
							className="form-select select"
							value={filtro}
						>
							<optgroup label="Cities" />
							<option value="">Show All</option>
							<option value="Vaasa">Vaasa, Finland</option>
							<option value="Turku">Turku, Finland</option>
							<option value="Helsinki">Helsinki, Finland</option>
							<option value="Oulu">Oulu, Finland</option>
						</select>
						<div className="addGuests">
							<span className="addGuests">Add Guests</span>
							<button onClick={subGuests} className="btn-guests">
								<FaMinusCircle />
							</button>
							<span className="guests">{guests}</span>
							<button onClick={addGuests} className="btn-guests">
								<FaPlusCircle />
							</button>
						</div>
						<button type="submit" className="btn btn-danger search">
							<MdSearch className="mdsearch" />
						</button>
					</form>
				</div>
			</div>
			<div className="titleAndStays">
			<h3 className="titleFin">Stays in Finland</h3>
			<span className="titleFin">{count} Stays</span>
			</div>
			
			<Locations data={places} />
		</div>
	);
};

export default Search;
