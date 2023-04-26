import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useParams } from "react-router-dom";

export default function ShowStagiaire() {
	const { id } = useParams();
	const [user, setUser] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoading(true);
					setUser(result);
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
					<p>Nom: {user.name}</p>
					<p>Téléphone: {user.phone}</p>
					<p>Pseudo: {user.username}</p>
					<p>Site: {user.website}</p>
					<p>email: {user.email}</p>
					<div>
						<p>Adresse:</p>
						<p>Ville: {user.address.city}</p>
						<p>Rue: {user.address.street}</p>
						<p>Code Postal: {user.address.zipcode}</p>
					</div>
				</div>
			</Layout>
		);
	}
}
