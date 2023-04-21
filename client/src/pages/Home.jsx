import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {

  const posts = [
    {
      id: 1,
      title:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://i.pinimg.com/564x/46/79/dd/4679dd3bfbc6d93d95229cf283257974.jpg'
    },
    {
      id: 2,
      title:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://i.pinimg.com/736x/77/09/2e/77092ea0188aff2a777f5f01b510a0cb.jpg'
    },
    {
      id: 3,
      title:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://i.pinimg.com/564x/46/79/dd/4679dd3bfbc6d93d95229cf283257974.jpg'
    },
    {
      id: 4,
      title:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s ',
      desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://i.pinimg.com/736x/77/09/2e/77092ea0188aff2a777f5f01b510a0cb.jpg'
    },
  ]

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
