import bannerImage from '/banner1.jpg'
import mainDishImage from '/main-dish.jpg'
import { useLanguage } from '../contexts/LanguageContext'

function About() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-midnight-blue py-3 md:py-4">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-1">
            <span className="text-white drop-shadow-lg">{t.aboutPage.title.split(' ')[0]} </span>
            <span className="text-golden-yellow drop-shadow-lg">{t.aboutPage.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-white text-base md:text-lg">{t.aboutPage.subtitle}</p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            {/* Image */}
            <div className="order-1">
              <img
                src={bannerImage}
                alt="Owner"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t.aboutPage.ownerTitle}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t.aboutPage.ownerParagraph1}
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t.aboutPage.ownerParagraph2}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.aboutPage.ownerParagraph3}
              </p>
            </div>
          </div>

          {/* Passion Section - Reversed */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t.aboutPage.passionTitle}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t.aboutPage.passionParagraph1}
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t.aboutPage.passionParagraph2}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.aboutPage.passionParagraph3}
              </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
              <img
                src={mainDishImage}
                alt="Our Passion"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
