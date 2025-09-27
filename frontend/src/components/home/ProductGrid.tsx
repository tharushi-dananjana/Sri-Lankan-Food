import React from 'react'
import { ProductCard } from './ProductCard'
import type { Product } from '../../context/CartContext'

// Sample products data
const products: Product[] = [
  {
    id: '1',
    name: 'Egg Hopper',
    nameJa: 'エッグホッパー',
    description:
      'Traditional Sri Lankan hopper with a perfectly cooked egg in the center',
    descriptionJa:
      '中央に完璧に調理された卵が入った伝統的なスリランカのホッパー',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1627894466322-b456b675f754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    category: 'Breakfast',
  },
  {
    id: '2',
    name: 'Chicken Kottu',
    nameJa: 'チキンコットゥ',
    description:
      'Stir-fried chopped roti with chicken, vegetables and aromatic spices',
    descriptionJa: '鶏肉、野菜、香り高いスパイスと一緒に炒めた刻んだロティ',
    price: 750,
    image:
      'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    category: 'Main',
  },
  {
    id: '3',
    name: 'Pol Sambol',
    nameJa: 'ポル・サンボル',
    description:
      'Spicy coconut relish, a perfect side dish for any Sri Lankan meal',
    descriptionJa:
      'スパイシーなココナッツのレリッシュ、スリランカ料理の完璧なサイドディッシュ',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    category: 'Side',
  },
  {
    id: '4',
    name: 'Fish Ambul Thiyal',
    nameJa: '魚のアンブル・ティヤル',
    description:
      'Sour fish curry made with goraka, a tamarind-like fruit that gives it a unique flavor',
    descriptionJa:
      'ゴラカというタマリンドに似た果物で作られた酸味のある魚のカレー',
    price: 850,
    image:
      'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    category: 'Main',
  },
  {
    id: '5',
    name: 'Parippu (Dahl Curry)',
    nameJa: 'パリップ（ダールカレー）',
    description: 'Creamy red lentil curry cooked with coconut milk and spices',
    descriptionJa:
      'ココナッツミルクとスパイスで調理されたクリーミーな赤レンズ豆のカレー',
    price: 450,
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    category: 'Side',
  },
  {
    id: '6',
    name: 'Watalappan',
    nameJa: 'ワタラッパン',
    description:
      'Traditional Sri Lankan custard dessert made with coconut milk, jaggery, and spices',
    descriptionJa:
      'ココナッツミルク、ジャガリー、スパイスで作られた伝統的なスリランカのカスタードデザート',
    price: 400,
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    category: 'Dessert',
  },
]

interface ProductGridProps {
  title?: string
}

export const ProductGrid: React.FC<ProductGridProps> = ({ title }) => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
