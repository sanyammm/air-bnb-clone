import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
  return (
    <div className='home'>
      <Banner/>

      <div className='home__section'>
          <Card
              src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
              title="Online experiences"
              description="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."    
          />
          <Card
              src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
              title="Unique stays"
              description="Praesent sapien massa, convallis a pellentesque nec,."    
          />
          <Card
              src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
              title="Entire homes"
              description="Spaces that are more than just a place to sleep"    
          />
      </div>

      <div className='home__section'>
      <Card
              src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
              title="Online experiences"
              description="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."  
              price="$130/night"  
          />
          <Card
              src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
              title="Unique stays"
              description="Praesent sapien massa, convallis a pellentesque nec,."
              price="$100/night"    
          />
          <Card
              src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
              title="Entire homes"
              description="Spaces that are more than just a place to sleep"
              price="$110/night"    
          />
      </div>
    </div>
  )
}

export default Home

