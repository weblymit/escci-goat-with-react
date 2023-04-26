import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useParams } from "react-router-dom";

export default function ShowPost() {
	const { id } = useParams();
	const [post, setPost] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoading(true);
					setPost(result);
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
					<div className=''>
						<h1 className='font-bold text-3xl pb-5'>{post.title}</h1>
						<div className=''>
							<img
								src='https://images.unsplash.com/photo-1586805608485-add336722759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
								alt={post.title}
							/>
						</div>
						<p>{post.body}</p>
					</div>
				</div>
			</Layout>
		);
	}
}
