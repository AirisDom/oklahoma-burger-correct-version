import { useLanguage } from '../contexts/LanguageContext'
import studentsDiscountImage from '/students-discount.jpg'

function StudentDiscountBanner() {
  const { t } = useLanguage()

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-golden-yellow rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 md:h-full">
              <img
                src={studentsDiscountImage}
                alt="Student Discount"
                className="w-full h-auto md:h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 p-6 md:p-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {t.studentDiscount.title}
                </h3>
              </div>
              <p className="text-white text-base md:text-lg mb-4">
                {t.studentDiscount.description}
              </p>
              <p className="text-white text-sm">
                {t.studentDiscount.terms}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentDiscountBanner
