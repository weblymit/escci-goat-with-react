import React from "react";

export default function TableBody({ users }) {
	console.log("users:", users);
	return (
		<tbody>
			{users.map((item) => (
				<tr key={item.id}>
					<td>{item.id}</td>
					<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
					<td>Malcolm Lockyer</td>
					<td>1961</td>
				</tr>
			))}
		</tbody>
	);
}
