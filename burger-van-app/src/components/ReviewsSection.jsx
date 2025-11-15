import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import review1 from '/review1.jpg'
import review2 from '/review2.jpg'
import review3 from '/review3.jpg'
import review5 from '/review5.jpg'

function ReviewsSection() {
  const { t } = useLanguage()
  const reviews = [
    { id: 1, image: review1 },
    { id: 2, image: review2 },
    { id: 3, image: review3 },
    { id: 5, image: review5 }
  ]

  const scrollContainerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Create multiple copies for truly infinite scroll
  const infiniteReviews = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews]

  const scroll = (direction) => {
    if (direction === 'right') {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  // Reset to middle when reaching boundaries for seamless infinite scroll
  useEffect(() => {
    const totalReviews = infiniteReviews.length
    const middleStart = reviews.length * 2

    if (currentIndex >= totalReviews - reviews.length) {
      setTimeout(() => {
        setCurrentIndex(middleStart)
      }, 500)
    } else if (currentIndex < 0) {
      setTimeout(() => {
        setCurrentIndex(middleStart - 1)
      }, 500)
    }
  }, [currentIndex, reviews.length, infiniteReviews.length])

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-3">
            {t.reviews.title}
          </h2>
          <div className="w-24 h-1 bg-golden-yellow mx-auto"></div>
        </div>

        {/* Carousel */}
        <div className="relative px-4 md:px-16">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-midnight-blue hover:bg-golden-yellow text-white p-2 md:p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Previous review"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-3 md:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (window.innerWidth >= 768 ? (100 / 4) : (100 / 2))}%)`
              }}
            >
              {infiniteReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0 w-[calc(50%-0.375rem)] md:w-[calc(25%-1.125rem)]"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/50 via-transparent to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={review.image}
                      alt={`Customer Review ${review.id}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-midnight-blue hover:bg-golden-yellow text-white p-2 md:p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Next review"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <p className="text-midnight-blue text-lg mb-4">
            {t.reviews.cta}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
