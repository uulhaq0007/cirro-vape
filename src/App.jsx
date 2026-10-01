import AgeGate from './components/layout/AgeGate'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Categories from './components/sections/Categories'
import Featured from './components/sections/Featured'
import Guide from './components/sections/Guide'
import Testimonials from './components/sections/Testimonials'
import Journal from './components/sections/Journal'
import Team from './components/sections/Team'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <AgeGate />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Categories />
        <Featured />
        <Guide />
        <Testimonials />
        <Journal />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
