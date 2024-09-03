import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import landingPageData from './constant/webData'
import { data } from 'autoprefixer'
import Header from './components/Header'
import Hero from './components/hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  console.log(landingPageData);

  const { header, hero, features, testimonials } = landingPageData;

  const user = {
    isLogin: true,
  }

  return (
    <>


      <Header header={header} user={user} />
      <h1>Welcome to My Webpage</h1>
      <Hero hero={hero} />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer header={header} />

    </>


  );
}

export default App;
