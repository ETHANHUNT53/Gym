import React, {useState} from 'react'
import axios from 'axios';
function Sample() {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })
    const handleInput = (e) => {
        setPost({...post, [e.target.name]: e.target.e});
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(post)
        axios.post('https://jsonplaceholder.typicode.com/posts', {post})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Title: <input type='text' onChange={handleInput} name="title"></input><br></br>
        Body: <input type='text' onChange={handleInput} name='post'></input><br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Sample
