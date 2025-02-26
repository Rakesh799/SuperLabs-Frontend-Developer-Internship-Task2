import './App.css'
import Banner from './components/Banner'
import BannerHeading from './components/BannerHeading'
import Check from './components/Check'
import FooterBanner from './components/FooterBanner'
import MenuBar from './components/MenuBar'
import Slider from './components/Slider'
import Tabs from './components/Tabs'
import TopSection from './components/TopSection'
import FooterSection from './components/FooterSection'
import Copyright from './components/Copyright'

function App() {

  return (
    <>
      <TopSection />
      <MenuBar />
      <Banner />
      <BannerHeading />
      <Check />
      <Tabs />
      <Slider/>
      <FooterBanner/>
      <FooterSection/>
      <Copyright/>

    </>
  )
}

export default App
