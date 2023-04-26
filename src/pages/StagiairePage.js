import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import TableComponent from "../components/table/TableComponent";
import { Link } from "react-router-dom";

export default function StagiairePage() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const API_URL = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoading(true);
					setUsers(result);
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
					<table className='table-auto'>
						<thead>
							<tr>
								<th className=''>id</th>
								<th className=''>Nom</th>
								<th className=''>Email</th>
								<th className=''>Phone</th>
								<th className=''>voir</th>
							</tr>
						</thead>
						<tbody>
							{users.map((item) => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
									<td>
										<Link to={`/user/${item.id}`}>voir</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Layout>
		);
	}
}
