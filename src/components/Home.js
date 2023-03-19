import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

const Home = () => {
  return (
    <div className='home'>
      <Banner />

      <div className='home__section'>
        <Card 
        src="https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/c5282c79-8d6c-48f9-8d2c-68e80234e12b.jpeg?im_w=720"
        title="Online Experience"
        description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
        src="https://a0.muscache.com/im/pictures/db7ba129-d159-4984-bb29-c9e8f4c0a64c.jpg?im_w=720"
        title="Unique stays"
        description="Spaces that are more than just a place to sleep."
        />
        <Card 
        src="https://a0.muscache.com/im/pictures/miso/Hosting-44400573/original/41c4cd08-6e55-424f-a695-e102708f54d6.jpeg?im_w=720"
        title="Entire Homes"
        description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className='home__section'>
      <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
      />
      <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
      />
      <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
      />
      </div>
      
    </div>
  )
}

export default Home
