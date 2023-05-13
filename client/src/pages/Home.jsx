import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  },[cat])
  // const posts = [
  //   {
  //     id: 1,
  //     title:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  //     desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  //     img: 'https://i.pinimg.com/564x/46/79/dd/4679dd3bfbc6d93d95229cf283257974.jpg'
  //   },
  //   {
  //     id: 2,
  //     title:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  //     desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  //     img: 'https://i.pinimg.com/736x/77/09/2e/77092ea0188aff2a777f5f01b510a0cb.jpg'
  //   },
  //   {
  //     id: 3,
  //     title:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  //     desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  //     img: 'https://i.pinimg.com/564x/46/79/dd/4679dd3bfbc6d93d95229cf283257974.jpg'
  //   },
  //   {
  //     id: 4,
  //     title:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s ',
  //     desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  //     img: 'https://i.pinimg.com/736x/77/09/2e/77092ea0188aff2a777f5f01b510a0cb.jpg'
  //   },
  // ]
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className="img">
            <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
