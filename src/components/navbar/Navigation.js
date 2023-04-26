import React from "react";
import { Link, useLocation } from "react-router-dom";
import { dataNav } from "../../data/datas";

export default function Navigation() {
	let route = useLocation().pathname;
	let activeStyle = "bg-yellow-500  shadow px-2 py-1 text-xl rounded-lg ";

	// const handleChangecolor = () => {
	// 	setColor("bg-red-600");
	// };
	return (
		<ul className='bg-red-500 text-white flex justify-between px-24 py-6 items-center'>
			<Link to='/'>
				<li className='font-black text-3xl'>Goat</li>
			</Link>
			<div className='flex items-center space-x-5'>
				{dataNav.map((item) => (
					<Link to={item.url} key={item.id}>
						<li className={route === item.url ? activeStyle : ""}>
							{item.name}
						</li>
					</Link>
				))}
				<button
					// onClick={handleChangecolor}
					className='bg-gray-50 p-2 rounded-lg text-black shadow-lg font-semibold'
				>
					Change color
				</button>
			</div>
		</ul>
	);
}
