import menuImage from '/menu.jpg'
import { useLanguage } from '../contexts/LanguageContext'

function Menu() {
  const { t } = useLanguage()

  return (
    <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-2 md:px-4 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-6 md:mb-12 px-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight-blue mb-3 md:mb-4">
            {t.menuPage.title}
          </h1>
          <div className="w-24 md:w-32 h-1 bg-golden-yellow mx-auto mb-3 md:mb-4"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 px-4">
            {t.menuPage.subtitle}
          </p>
        </div>

        {/* Menu Image */}
        <div className="mb-8 md:mb-12">
          <div className="bg-white p-2 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-2xl border-2 md:border-4 border-golden-yellow">
            <img
              src={menuImage}
              alt="Oklahoma Burger Menu"
              className="w-full h-auto rounded-lg min-h-[600px] md:min-h-0 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
