import { Link } from 'react-router-dom'
import mainDishImage from '/main-dish.jpg'
import { useLanguage } from '../contexts/LanguageContext'

function HomeSectionOne() {
  const { t } = useLanguage()

  return (
    <section className="bg-midnight-blue py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image on the left */}
          <div className="order-1">
            <img
              src={mainDishImage}
              alt="Our Signature Burger"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>

          {/* Text on the right */}
          <div className="order-2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.homeSectionOne.title}
            </h2>
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              {t.homeSectionOne.paragraph1}
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              {t.homeSectionOne.paragraph2}
            </p>
            <Link
              to="/menu"
              className="inline-block bg-golden-yellow text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 text-base shadow-lg"
            >
              {t.homeSectionOne.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSectionOne
