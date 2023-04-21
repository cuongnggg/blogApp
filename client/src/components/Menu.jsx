import React from 'react'

const Menu = () => {

    const posts = [
        {
            id: 1,
            title: 'Keanu Reeves Is The New Face For Saint Laurent Mens Range And People Online Are Loving It',
            desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            img: 'https://i.pinimg.com/564x/50/8f/2e/508f2ede2d45acd12ebae4eaaee75d81.jpg'
        },
        {
            id: 2,
            title: 'The Legend of Keanu Reeves',
            desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            img: 'https://i.pinimg.com/564x/21/91/68/21916897fa57f360391c10e868963be0.jpg'
        },
        {
            id: 3,
            title: 'Keanu Reeves Saint Laurent Fall 2019 Mens Campaign',
            desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            img: 'https://i.pinimg.com/564x/dd/fd/19/ddfd19ca8f124ad773c774a79b686a41.jpg'
        },
        {
            id: 4,
            title: 'Keanu Reeves Black and White Moodboard ',
            desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            img: 'https://i.pinimg.com/564x/6d/8e/96/6d8e96923981ddf387ce16e05aba1e52.jpg'
        },
    ]

    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post => (
                <div className='post' key={post.id}>
                    <img src={post.img} alt="" />
                    <h3>{post.title}</h3>
                    <button>Read more</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
