import React from "react";
import { Page } from "rakkasjs";

const HomePage: Page = function HomePage() {
	return (
		<main>
			<h1>Hello serverless!</h1>
			<p>Welcome to Rakkas.JS serverless demo page.</p>
			<p>
				Check the little <a href="/todo">TODO application</a> to learn about API
				endpoints and data fetching.
			</p>
		</main>
	);
};

export default HomePage;
