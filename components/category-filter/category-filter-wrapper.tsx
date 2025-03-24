"use client"

import { CategoryFilter, type CategoryFilterProps } from "@/components/category-filter/category-filter"

export const CategoryFilterWrapper = ({ categories, title, defaultOpenCategories }: CategoryFilterProps) => {
  return (
    <CategoryFilter
      categories={categories}
      title={title}
      defaultOpenCategories={defaultOpenCategories}
      onSelectItem={(item, categoryPath) => {
        console.log(`Selected item: ${item} in category path: ${categoryPath.join(" > ")}`)
      }}
    />
  )
}

