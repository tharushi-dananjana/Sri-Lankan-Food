import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { Button } from '../ui/Button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1627894466322-b456b675f754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800&q=80',
    title: 'Authentic Hoppers',
    titleJa: '本格的なホッパー',
    description:
      'Traditional Sri Lankan bowl-shaped pancakes with crispy edges and soft centers',
    descriptionJa:
      'カリカリの縁と柔らかい中心を持つスリランカの伝統的なボウル型パンケーキ',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800&q=80',
    title: 'Flavorful Kottu',
    titleJa: '風味豊かなコットゥ',
    description:
      'Stir-fried chopped roti with spices, vegetables, eggs and your choice of meat',
    descriptionJa: 'スパイス、野菜、卵、お好みの肉と一緒に炒めた刻んだロティ',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=800&q=80',
    title: 'Spicy Pol Sambol',
    titleJa: 'スパイシーなポル・サンボル',
    description:
      'Coconut relish made with freshly grated coconut, chili peppers, lime, and onions',
    descriptionJa:
      '新鮮なすりおろしココナッツ、唐辛子、ライム、玉ねぎで作られたココナッツのレリッシュ',
  },
]
export const Hero: React.FC = () => {
  const { language, t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="relative w-full overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40" />
          <img
            src={slide.image}
            alt={language === 'en' ? slide.title : slide.titleJa}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              {language === 'en' ? slide.title : slide.titleJa}
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-lg">
              {language === 'en' ? slide.description : slide.descriptionJa}
            </p>
            <Button variant="secondary" size="lg">
              {t('hero.orderNow')}
            </Button>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRightIcon size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full focus:outline-none ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
