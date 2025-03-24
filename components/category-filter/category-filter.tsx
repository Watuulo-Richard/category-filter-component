// /* eslint-disable @typescript-eslint/no-explicit-any */

// "use client"

// // We need to use React to make our component work
// import { useState } from "react"
// // These are special buttons and icons we'll use
// import { ChevronDown, ChevronRight } from "lucide-react"
// // This helps us make our component look nice
// import { cn } from "@/lib/utils"

// // This is our main component - it's like a box that holds everything
// export default function CategoryFilter() {
//   // This helps us remember which categories are open
//   const [openCategories, setOpenCategories] = useState({
//     electronics: true,
//     laptop: true,
//     samsung: true,
//     mobile: false,
//     gaming: false,
//     homeAppliances: false,
//     accessories: false,
//     audioVideo: false,
//     homeAppliances2: false,
//   })

//   // This function helps us open and close categories when we click them
//   // Option 1: Using a simple if/else approach
//   const toggleCategory = (category: string) => {
//     // Make a new copy of our openCategories
//     const newOpenCategories = { ...openCategories as any }

//     // If the category is open, close it. If it's closed, open it!
//     if (newOpenCategories[category]) {
//       newOpenCategories[category] = false
//     } else {
//       newOpenCategories[category] = true
//     }

//     // Save our changes
//     setOpenCategories(newOpenCategories)
//   }

//   // Option 2: Using a direct assignment with NOT operator
//   // const toggleCategory = (category: string) => {
//   //   // Make a new copy of our openCategories
//   //   const newOpenCategories = {...openCategories};

//   //   // Flip the value (like a light switch!)
//   //   newOpenCategories[category] = !newOpenCategories[category];

//   //   // Save our changes
//   //   setOpenCategories(newOpenCategories);
//   // }

//   // Option 3: Using Object.assign for a one-liner
//   // const toggleCategory = (category: string) => {
//   //   // Create a new object with the changed value
//   //   setOpenCategories(Object.assign(
//   //     {},
//   //     openCategories,
//   //     {[category]: !openCategories[category]}
//   //   ));
//   // }

//   // Option 4: Using a map function (if categories were an array)
//   // const toggleCategory = (category: string) => {
//   //   // This would work if we stored categories as an array of objects
//   //   // with id and isOpen properties
//   //   const newCategories = categories.map(cat =>
//   //     cat.id === category
//   //       ? {...cat, isOpen: !cat.isOpen}
//   //       : cat
//   //   );
//   //   setCategories(newCategories);
//   // }

//   // This is our list of categories and subcategories
//   const categories = [
//     {
//       id: "electronics",
//       name: "Electronics",
//       subcategories: [
//         {
//           id: "laptop",
//           name: "Laptop",
//           subcategories: [
//             {
//               id: "samsung",
//               name: "Samsung",
//               items: ["Galaxy Book4", "Galaxy Book3", "Galaxy Book2"],
//             },
//             { id: "hp", name: "HP", items: [] },
//             { id: "oppo", name: "Oppo", items: [] },
//             { id: "vivo", name: "Vivo", items: [] },
//             { id: "apple", name: "Apple", items: [] },
//           ],
//         },
//       ],
//     },
//     { id: "mobile", name: "Mobile", subcategories: [] },
//     { id: "gaming", name: "Gaming", subcategories: [] },
//     { id: "homeAppliances", name: "Home Appliances", subcategories: [] },
//     { id: "accessories", name: "Accessories", subcategories: [] },
//     { id: "audioVideo", name: "Audio & Video", subcategories: [] },
//     { id: "homeAppliances2", name: "Home Appliances", subcategories: [] },
//   ]

//   // This is what our component will look like
//   return (
//     <div className="w-full max-w-[280px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//       {/* This is the title at the top */}
//       <div className="p-4 border-b flex items-center gap-2 bg-gray-50">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <line x1="8" y1="6" x2="21" y2="6" />
//           <line x1="8" y1="12" x2="21" y2="12" />
//           <line x1="8" y1="18" x2="21" y2="18" />
//           <line x1="3" y1="6" x2="3.01" y2="6" />
//           <line x1="3" y1="12" x2="3.01" y2="12" />
//           <line x1="3" y1="18" x2="3.01" y2="18" />
//         </svg>
//         <h2 className="font-bold text-lg">Categories</h2>
//       </div>

//       {/* This is the list of categories */}
//       <div className="p-2">
//         {categories.map((category) => (
//           <div key={category.id} className="mb-1">
//             {/* This is each main category button */}
//             <button
//               onClick={() => toggleCategory(category.id)}
//               className={cn(
//                 "w-full flex items-center justify-between p-3 rounded-md text-left transition-all duration-300",
//                 "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",
//                 openCategories[category.id as keyof typeof openCategories] && "bg-gray-50",
//               )}
//             >
//               <span className="font-medium">{category.name}</span>
//               {/* This is the arrow that points down or right */}
//               {openCategories[category.id as keyof typeof openCategories] ? (
//                 <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-300" />
//               ) : (
//                 <ChevronRight className="h-4 w-4 text-gray-500 transition-transform duration-300" />
//               )}
//             </button>

//             {/* This shows the subcategories when the category is open */}
//             {openCategories[category.id as keyof typeof openCategories] && category.subcategories.length > 0 && (
//               <div className="ml-2 pl-2 border-l border-gray-200 animate-slideDown">
//                 {category.subcategories.map((subcategory) => (
//                   <div key={subcategory.id} className="mt-1">
//                     {/* This is each subcategory button */}
//                     <button
//                       onClick={() => toggleCategory(subcategory.id)}
//                       className={cn(
//                         "w-full flex items-center justify-between p-2 rounded-md text-left transition-all duration-300",
//                         "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",
//                         openCategories[subcategory.id as keyof typeof openCategories] && "bg-gray-50",
//                       )}
//                     >
//                       <span>{subcategory.name}</span>
//                       {/* This is the arrow for subcategories */}
//                       {subcategory.subcategories &&
//                         subcategory.subcategories.length > 0 &&
//                         (openCategories[subcategory.id as keyof typeof openCategories] ? (
//                           <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-300" />
//                         ) : (
//                           <ChevronRight className="h-4 w-4 text-gray-500 transition-transform duration-300" />
//                         ))}
//                     </button>

//                     {/* This shows the items in a subcategory */}
//                     {openCategories[subcategory.id as keyof typeof openCategories] &&
//                       subcategory.subcategories &&
//                       subcategory.subcategories.length > 0 && (
//                         <div className="ml-2 pl-2 border-l border-gray-200 animate-slideDown">
//                           {subcategory.subcategories.map((item) => (
//                             <div key={item.id} className="mt-1">
//                               {/* This is each sub-subcategory button */}
//                               <button
//                                 onClick={() => toggleCategory(item.id)}
//                                 className={cn(
//                                   "w-full flex items-center justify-between p-2 rounded-md text-left transition-all duration-300",
//                                   "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",
//                                   openCategories[item.id as keyof typeof openCategories] && "bg-gray-50",
//                                 )}
//                               >
//                                 <span>{item.name}</span>
//                                 {item.items &&
//                                   item.items.length > 0 &&
//                                   (openCategories[item.id as keyof typeof openCategories] ? (
//                                     <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-300" />
//                                   ) : (
//                                     <ChevronRight className="h-4 w-4 text-gray-500 transition-transform duration-300" />
//                                   ))}
//                               </button>

//                               {/* This shows the items in a sub-subcategory */}
//                               {openCategories[item.id as keyof typeof openCategories] && item.items && (
//                                 <div className="ml-2 pl-2 border-l border-gray-200 animate-slideDown">
//                                   {item.items.map((subItem) => (
//                                     <button
//                                       key={subItem}
//                                       className="w-full text-left p-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-gray-50 rounded-md transition-all duration-300"
//                                     >
//                                       {subItem}
//                                     </button>
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// These are the types that help us understand what data we need
export type CategoryItem = {
  id: string
  name: string
  items?: string[]
  subcategories?: CategoryItem[]
}

// These are the options you can change when using this component
export type CategoryFilterProps = {
  // The list of categories to display
  categories: CategoryItem[]
  // The title shown at the top (optional)
  title?: string
  // Which categories should be open when the page loads (optional)
  defaultOpenCategories?: string[]
  // What happens when someone clicks on an end item (optional)
  onSelectItem?: (item: string, categoryPath: string[]) => void
  // Custom styles for the container (optional)
  className?: string
}

// This is our main component that shows the categories
export function CategoryFilter({
  categories,
  title = "Categories",
  defaultOpenCategories = [],
  onSelectItem,
  className,
}: CategoryFilterProps) {
  // Create an object to track which categories are open
  const createInitialOpenState = () => {
    const state: Record<string, boolean> = {}
    // Set all categories to closed by default
    defaultOpenCategories.forEach((id) => {
      state[id] = true
    })
    return state
  }

  // Keep track of which categories are open
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(createInitialOpenState())

  // This function opens or closes a category when clicked
  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  // This function is called when an end item is clicked
  const handleSelectItem = (item: string, categoryPath: string[]) => {
    if (onSelectItem) {
      onSelectItem(item, categoryPath)
    }
  }

  // This function renders a category and its subcategories
  const renderCategory = (category: CategoryItem, path: string[] = []) => {
    const currentPath = [...path, category.id]
    const isOpen = openCategories[category.id] || false

    return (
      <div key={category.id} className="mb-1">
        {/* The category button */}
        <button
          onClick={() => toggleCategory(category.id)}
          className={cn(
            "w-full flex items-center justify-between p-3 rounded-md text-left transition-all duration-300",
            "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",
            isOpen && "bg-gray-50",
          )}
        >
          <span className="font-medium">{category.name}</span>
          {/* Show arrow only if there are subcategories or items */}
          {category.subcategories?.length || category.items?.length ? (
            isOpen ? (
              <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-300" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-500 transition-transform duration-300" />
            )
          ) : null}
        </button>

        {/* Show subcategories if this category is open */}
        {isOpen && (
          <div className="ml-2 pl-2 border-l border-gray-200 animate-slideDown">
            {/* Render subcategories if any */}
            {category.subcategories?.map((subcategory) => renderCategory(subcategory, currentPath))}

            {/* Render items if any */}
            {category.items?.map((item) => (
              <button
                key={item}
                onClick={() => handleSelectItem(item, currentPath)}
                className="w-full text-left p-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-gray-50 rounded-md transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  // This is what our component looks like
  return (
    <div
      className={cn(
        "w-full max-w-[280px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",
        className,
      )}
    >
      {/* The title at the top */}
      <div className="p-4 border-b flex items-center gap-2 bg-gray-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      {/* The list of categories */}
      <div className="p-2">{categories.map((category) => renderCategory(category))}</div>
    </div>
  )
}

