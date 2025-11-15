import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-midnight-blue py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white drop-shadow-lg">{t.faq.title.split(' ')[0]} </span>
            <span className="text-golden-yellow drop-shadow-lg">{t.faq.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-white text-lg md:text-xl">{t.faq.subtitle}</p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {t.faq.questions.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800 text-lg pr-4">{faq.question}</span>
                  <span className="text-golden-yellow text-3xl font-light shrink-0 transition-transform duration-200" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default FAQ
