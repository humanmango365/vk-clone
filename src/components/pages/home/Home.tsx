
import { Box } from '@mui/system'
import React, { FC, useState } from 'react'
import { IPost } from '../../../types'
import AddPost from './AddPost'
import Posts from './Posts'
import userLogo from './../../../images/user.png'

const Home:FC = () => {

  const [posts, setPosts] = useState<IPost[]>([
    {
      author: {
        avatar: userLogo,
        name: 'Max Payne',
        isOnline: true,
        id: '1'
      },
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim labore necessitatibus eum veniam adipisci doloremque deleniti aut reprehenderit. Eveniet deleniti, facilis nobis ex voluptatum tempore nihil quaerat nulla iure.',
      createdAt: '02.11.2012',
      images: ['https://get.wallhere.com/photo/sunlight-landscape-hill-nature-grass-sky-field-green-morning-farm-horizon-plateau-cloud-tree-flower-grassland-plant-pasture-agriculture-meadow-plantation-plain-lawn-2560x1600-px-prairie-crop-rural-area-grass-family-paddy-field-General-551245.jpg',
      'https://cdn.pixabay.com/photo/2021/09/04/22/22/road-6598587_960_720.jpg',
      'https://w-dog.ru/wallpapers/9/17/322057789001671/zakat-nebo-solnce-luchi-oblaka-tuchi-pole-kolosya-zelenye-trava.jpg',
      'https://im0-tub-ru.yandex.net/i?id=313fd02b6ed0aa3ad94c078146b52eb2&ref=rim&n=33&w=225&h=150'
      ]
    }
  ])

  return (
    <Box>
      <AddPost setPosts={setPosts}/>
      <Posts posts={posts} />
    </Box>
  )
}

export default Home
