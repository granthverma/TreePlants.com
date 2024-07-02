import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonisl/Testimonial'
import { useDispatch  , useSelector} from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  const addCart =()=> {
    dispatch(addToCart("iphone"));
}

  const deleteCart = ()=> {
    dispatch(deleteFromCart("iphone"))
  }
  return (
    <Layout>

     
     <HeroSection/>
     <Filter/>
     <ProductCard/>
     <Track/>
     <Testimonial />

    </Layout>
  )
}

export default Home