import React from 'react'
import Header from './components/Hero/Index'
import AboutUs from './components/About/Index'
import SermonAbout from './components/Sermon/Index'
import WhyUs from './components/Information/Index'
import Testimonials from './components/Testimonials/Index'
import Services from './components/Services/Index'
import Footer from './components/Footer/Index'
import BackToTop from './components/FixedButton'

const Home = () => {

  return (
    <React.Fragment>
      {/* HEADER. */}
      <header>
        {/* NavigationBar and header image */}
        <Header />
        {/* Fixed button  */}
        <BackToTop />
      </header>
      {/* main */}
      <main>
        {/* Some information the Gospel */}
        <AboutUs />
        {/* Sermon About card */}
        <SermonAbout />
        {/* Why us information and grid */}
        <WhyUs />
        {/* Testimonial carousel and card */}
        <Testimonials />
        {/* Services Card and icons */}
        <Services />
      </main>
      {/*  **** */}

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  )
}

export default Home
