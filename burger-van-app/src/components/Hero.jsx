import backgroundImage from '/background-main.jpg'
import { useLanguage } from '../contexts/LanguageContext'

function Hero() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-opacity-20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4">
              <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">{t.hero.title.split(' ')[0]} </span>
              <span className="text-yellow-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">{t.hero.title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero

