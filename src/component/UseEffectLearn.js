import React, { useState, useEffect } from 'react'

// useEffectLearn is used for run specific content
// in the following example when the resourceType is clicked only the statement inside useEffect will be execute
// For further video https://www.youtube.com/watch?v=0ZJgIjIuY7U

const UseEffectLearn = () => {
	const [resourceType, setResourceType] = useState('posts');
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then(response => response.json())
			.then(json => setItems(json))
	}, [resourceType])

	return (
		<>
			<div>
				<button onClick={() => setResourceType('posts')}>Posts</button>
				<button onClick={() => setResourceType('users')}>Users</button>
				<button onClick={() => setResourceType('comments')}>Comments</button>
			</div>
			{resourceType}
			{items.map((item) => {
				return <pre>
					{JSON.stringify(item)}
				</pre>
			})
			}
		</>
	);
}

export default UseEffectLearn;