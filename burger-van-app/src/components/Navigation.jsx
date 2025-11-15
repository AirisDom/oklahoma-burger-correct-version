import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

function Navigation() {
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' }
  ]

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-midnight-blue text-white shadow-lg sticky top-0 z-50 border-b-4 border-golden-yellow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity z-50">
            <img src="/logo.jpg" alt="Oklahoma Burger" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" />
            <span className="text-lg md:text-xl font-bold">Oklahoma Burger</span>
          </Link>

          {/* Burger Menu Button (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 p-2 hover:text-golden-yellow transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // X icon when menu is open
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Burger icon when menu is closed
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation Links and Language Dropdown */}
          <div className="hidden md:flex items-center space-x-3 md:space-x-6">
            <Link
              to="/menu"
              className={`relative text-sm md:text-base font-medium transition-all duration-300 hover:text-golden-yellow pb-1 ${
                isActive('/menu') ? 'text-golden-yellow' : ''
              }`}
            >
              {t.nav.menu}
              {isActive('/menu') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-golden-yellow animate-slideIn"></span>
              )}
            </Link>
            <Link
              to="/about"
              className={`relative text-sm md:text-base font-medium transition-all duration-300 hover:text-golden-yellow pb-1 ${
                isActive('/about') ? 'text-golden-yellow' : ''
              }`}
            >
              {t.nav.about}
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-golden-yellow animate-slideIn"></span>
              )}
            </Link>
            <Link
              to="/faq"
              className={`relative text-sm md:text-base font-medium transition-all duration-300 hover:text-golden-yellow pb-1 ${
                isActive('/faq') ? 'text-golden-yellow' : ''
              }`}
            >
              {t.nav.faq}
              {isActive('/faq') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-golden-yellow animate-slideIn"></span>
              )}
            </Link>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base font-medium hover:text-golden-yellow transition-all duration-300 px-2 md:px-3 py-1.5 rounded"
              >
                <span className="text-lg md:text-xl">
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
                <span className="hidden md:inline">{languages.find(lang => lang.code === language)?.name}</span>
                <svg
                  className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-golden-yellow hover:text-white transition-all duration-200 ${
                        language === lang.code ? 'bg-yellow-100' : ''
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-midnight-blue border-t border-golden-yellow shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <Link
              to="/menu"
              onClick={closeMobileMenu}
              className={`block text-base font-medium transition-all duration-300 hover:text-golden-yellow py-3 border-b border-gray-700 ${
                isActive('/menu') ? 'text-golden-yellow' : ''
              }`}
            >
              {t.nav.menu}
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`block text-base font-medium transition-all duration-300 hover:text-golden-yellow py-3 border-b border-gray-700 ${
                isActive('/about') ? 'text-golden-yellow' : ''
              }`}
            >
              {t.nav.about}
            </Link>
            <Link
              to="/faq"
              onClick={closeMobileMenu}
              className={`block text-base font-medium transition-all duration-300 hover:text-golden-yellow py-3 border-b border-gray-700 ${
                isActive('/faq') ? 'text-golden-yellow' : ''
              }`}
            >
              {t.nav.faq}
            </Link>

            {/* Mobile Language Selector */}
            <div className="py-3">
              <p className="text-sm text-gray-400 mb-2">Language / Język</p>
              <div className="flex gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      closeMobileMenu()
                    }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      language === lang.code
                        ? 'bg-golden-yellow text-white'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
