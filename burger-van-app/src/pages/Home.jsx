import Hero from '../components/Hero'
import StudentDiscountBanner from '../components/StudentDiscountBanner'
import HomeSectionOne from '../components/HomeSectionOne'
import LocationMap from '../components/LocationMap'
import ReviewsSection from '../components/ReviewsSection'

function Home() {
  return (
    <div>
      <Hero />
      <HomeSectionOne />
      <StudentDiscountBanner />
      <LocationMap />
      <ReviewsSection />
    </div>
  )
}

export default Home
