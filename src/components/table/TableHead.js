import React from "react";

export default function TableHead() {
	return (
		<thead className='w-full bg-gray-200'>
			<tr>
				<th>Id</th>
				<th className='w-1/4'>Nom</th>
				<th className='w-1/4'>Email</th>
				<th className='w-1/4'>Phone</th>
			</tr>
		</thead>
	);
}
