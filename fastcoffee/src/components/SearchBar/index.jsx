import React from "react";
import "./Searchbar.css";
import { icons } from "../../assets/index";

const Searchbar = () => {
	/*const handdleSubmit = (e) => e.preventDefault()

    const handdleSearchChange = (e) => {
        if (!e.target.value) return searchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value))
    }*/

	return (
		<div className="search">
			<input
				className="search_term"
				type="text"
				placeholder="Search"
			/>
			<button className="search_button">
				<img src={icons[7].icon} alt="search icon" />
			</button>
		</div>
	);
};

export default Searchbar;
