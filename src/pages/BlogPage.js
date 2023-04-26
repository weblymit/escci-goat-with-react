import React, { useState } from "react";
import { dataBlog } from "../data/datas";
import CardBlog from "../components/cards/CardBlog";
import Layout from "../components/layouts/Layout";
import { useEffect } from "react";

export default function BlogPage() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

	//1- utilise hook useEffect pour fetcher data de l'API
	//2- fetch me renvoir une promesse
	//3- Ensuite je transforme la reponse en json
	//4- Ensuite je recupère le resultat en json et je stocks dans mon state posts
	// 5- je passe isLoadind a true
	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoading(true);
					setPosts(result);
				},
				// Capture the error
				(error) => {
					setIsLoading(true);
					setError(error.message);
				}
			);
	}, []);

	if (!isLoading) {
		return (
			<Layout>
				<p className='text-gray-600 text-center text-2xl py-24'>
					En chargement je recupère la data 😂 ...
				</p>
			</Layout>
		);
	} else if (error) {
		return (
			<Layout>
				<p className='text-red-500 text-center text-2xl py-24'>
					Erreur : {error}
				</p>
			</Layout>
		);
	} else {
		return (
			<Layout>
				<div className='px-24 py-20 '>
					<h1 className='text-center text-4xl font-bold text-blue-600 pb-6'>
						Bienvenue sur le Blog
					</h1>
					<div className='flex flex-wrap gap-4'>
						{posts.map((item) => (
							<CardBlog
								key={item.id}
								title={item.title}
								id={item.id}
								content={item.body}
							/>
						))}
					</div>
				</div>
			</Layout>
		);
	}
}
