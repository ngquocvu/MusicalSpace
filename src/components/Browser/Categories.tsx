import React, { useEffect, useState } from 'react'
import { CATEGORIES_URL, FEATURE_PLAYLIST_URL } from '../../utils/constants'
import { get } from '../../utils/functions'
import { CategoriesProps } from '../../utils/interfaces'
import Card from './Card'
interface Props {}

const Categories = ({}: Props) => {
  const [categories, setCategories] = useState<CategoriesProps>({
    categories: {
      items: [
        {
          name: '',
          icons: [{ url: '' }],
        },
      ],
    },
  })

  const getFeaturedPlayLists = async () => {
    try {
      const response = await get(CATEGORIES_URL)
      setCategories(response)
      console.log(response)
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    getFeaturedPlayLists()
  }, [])

  return !!categories.categories.items[0].icons[0].url ? (
    <>
      <div className="font-bold text-gray-100 sm:text-2xl text-xl pt-2 px-2 md:mb-1 rounded-md">
        Thể loại
      </div>
      <div className="sm:grid flex sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 sm:overflow-auto overflow-scroll sm:place-items-center ">
        {categories.categories.items.map((category, index) => (
          <Card
            key={index}
            thumbnail={category.icons[0].url}
            title={category.name}
          />
        ))}
      </div>
    </>
  ) : (
    <div></div>
  )
}
export default Categories
