import Container from '../components/Container'
import Filters from '../components/Filters'
import Grid from '../components/Grid'
import Layout from '../components/Layout'
import { getAllRestaurants, getAllRestaurantTypes } from '../lib/api'
import Showcase from '../components/Showcase'
import { useState } from 'react'

export async function getStaticProps() {
  const restaurants = await getAllRestaurants();
  const restaurantTypes = await getAllRestaurantTypes();
  return {
    props: {
      restaurants,
      restaurantTypes
    }, // will be passed to the page component as props
  }
}

const HomePage = ({ restaurants, restaurantTypes }) => {
  const [activeCategory, setActiveCategory] = useState("All")
  const filteredRestaurants = restaurants.filter((resturant) => {
    if (activeCategory === 'All') {
      return resturant;
    }
    if (resturant.node.restaurantTypes.edges.length > 0) {
      return resturant.node.restaurantTypes.edges[0].node.name === activeCategory ? resturant: false;
    }
  });
  return <Layout>
    <Showcase
      title="A guide to the best eating spots in Syracuse."
      description="With hundreds of restaurants located within the 315, there really is a little something for all tastes."
      btnLabel="View Restaurants"
    />
    <section id='main'>
      <Container>
        <Filters 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={restaurantTypes}
        />
        <Grid data={filteredRestaurants} />
      </Container>
    </section>
  </Layout>
}
export default HomePage