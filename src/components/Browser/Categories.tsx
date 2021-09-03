import React, { useEffect, useState } from 'react'
import { CATEGORIES_URL, FEATURE_PLAYLIST_URL } from '../../utils/constants'
import { get } from '../../utils/functions'
import { CategoriesProps } from '../../utils/interfaces'
import Card from '../Card'
import CardList from '../CardList'
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
      <CardList type="Thể loại">
        {categories.categories.items.map((category, index) => (
          <Card
            key={index}
            thumbnail={category.icons[0].url}
            title={category.name}
          />
        ))}
      </CardList>
    </>
  ) : (
    <div></div>
  )
}
export default Categories
