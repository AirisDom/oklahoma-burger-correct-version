import { useLanguage } from '../contexts/LanguageContext'

function LocationMap() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-3">
            {t.locationMap.title}
          </h2>
          <div className="w-24 h-1 bg-golden-yellow mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-700">
            {t.locationMap.subtitle}
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-golden-yellow">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Oklahoma+Burger,Aleja+Juliusza+Słowackiego+3,33-332+Kraków+Poland"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Oklahoma Burger Location"
            className="w-full h-[300px] md:h-[450px]"
          ></iframe>
        </div>

        {/* Address Info */}
        <div className="text-center mt-8">
          <p className="text-base md:text-lg text-midnight-blue font-semibold mb-2">
            {t.locationMap.name}
          </p>
          <p className="text-sm md:text-base text-gray-600">
            {t.locationMap.address1}
          </p>
          <p className="text-sm md:text-base text-gray-600">
            {t.locationMap.address2}
          </p>
        </div>
      </div>
    </section>
  )
}

export default LocationMap
