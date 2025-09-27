import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Button } from '../components/ui/Button'
import { UploadIcon } from 'lucide-react'

export const AdminPage: React.FC = () => {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setImagePreview(null)
      ;(e.target as HTMLFormElement).reset()
      alert('Product added successfully!')
    }, 1500)
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t('admin.title')}
        </h1>
        <div className="bg-white dark:bg-gray-800 shadow-subtle rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t('admin.addProduct')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {t('admin.productName')} (English)
              </label>
              <input
                type="text"
                id="productName"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="productNameJa"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {t('admin.productName')} (日本語)
              </label>
              <input
                type="text"
                id="productNameJa"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="productDescription"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {t('admin.productDesc')} (English)
              </label>
              <textarea
                id="productDescription"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="productDescriptionJa"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {t('admin.productDesc')} (日本語)
              </label>
              <textarea
                id="productDescriptionJa"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="productPrice"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {t('admin.productPrice')} (LKR)
              </label>
              <input
                type="number"
                id="productPrice"
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="productCategory"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Category
              </label>
              <select
                id="productCategory"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="">Select a category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Main">Main</option>
                <option value="Side">Side</option>
                <option value="Dessert">Dessert</option>
                <option value="Beverage">Beverage</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('admin.productImage')}
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-32 w-32 mx-auto object-cover rounded-full"
                      />
                      <button
                        type="button"
                        onClick={() => setImagePreview(null)}
                        className="absolute top-0 right-0 bg-maroon-700 text-white rounded-full p-1 transform translate-x-1/4 -translate-y-1/4"
                        aria-label="Remove image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 dark:text-gray-400">
                        <label
                          htmlFor="productImage"
                          className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-maroon-600 dark:text-maroon-400 hover:text-maroon-500 focus-within:outline-none"
                        >
                          <span>Upload a file</span>
                          <input
                            id="productImage"
                            name="productImage"
                            type="file"
                            className="sr-only"
                            onChange={handleImageChange}
                            accept="image/*"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isLoading}
            >
              {t('admin.submit')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
