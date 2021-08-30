import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    const fetchData = async () => {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(res => {
            // console.log(res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    },[idFromButtonClick])

    return (
        <div>
            <input type="text" name="ID" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Data</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
