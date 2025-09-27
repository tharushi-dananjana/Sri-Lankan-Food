import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useCart } from "../../context/CartContext";
import { Button } from "../ui/Button";
import type { Product } from "../../context/CartContext";
import { ShoppingCartIcon } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart(product);
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-subtle hover:shadow-md transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pt-[100%]">
          <img
            src={product.image}
            alt={language === "en" ? product.name : product.nameJa || product.name}
            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2 bg-maroon-700 text-white text-xs px-2 py-1 rounded-full">
            {product.category}
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
            {language === "en" ? product.name : product.nameJa || product.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
            {language === "en"
              ? product.description
              : product.descriptionJa || product.description}
          </p>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-lg text-maroon-700 dark:text-yellow-400">
            LKR {product.price.toLocaleString()}
          </span>
          <Button variant="primary" size="sm" onClick={handleAddToCart} isLoading={isAdding}>
            <ShoppingCartIcon
              size={16}
              className="mr-1 text-black dark:text-yellow-400" // <--- updated color
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
