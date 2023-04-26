import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function TableComponent({ users }) {
	return (
		<div>
			<table className='table-auto w-full'>
				<TableHead />
				<TableBody users={users} />
			</table>
		</div>
	);
}
