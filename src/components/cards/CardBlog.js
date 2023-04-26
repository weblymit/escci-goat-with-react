import React from "react";
import { Link } from "react-router-dom";

export default function CardBlog({ title, content, id }) {
	return (
		<div className='max-w-xs shadow-xl bg-gray-100'>
			<Link to={`/post/${id}`}>
				<img
					src='https://images.unsplash.com/photo-1586805608485-add336722759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
					alt={`Goat ${title}`}
				/>
				<div className='p-4'>
					<h3 className='font-bold text-xl  pb-2'>{title}</h3>
					<p>{content}</p>
				</div>
			</Link>
		</div>
	);
}
