// // This is our main page that shows the category filter
"use client"
import { CategoryFilter } from "@/components/category-filter/category-filter"

// import CategoryFilter from "@/components/category-filter";


// export default function Home() {
//   return (
//     <main className="min-h-screen p-4 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
//       {/* This is the breadcrumb navigation at the top */}
//       <div className="text-white mb-4 flex items-center gap-2">
//         <span className="cursor-pointer hover:underline">All</span>
//         <span>›</span>
//         <span className="cursor-pointer hover:underline">Electronic</span>
//         <span>›</span>
//         <span className="cursor-pointer hover:underline">Laptop</span>
//       </div>

//       {/* This is where we show our category filter */}
//       <div className="flex flex-col md:flex-row gap-4">
//         <CategoryFilter />

//         {/* This is a placeholder for the product list */}
//         <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
//           <div className="text-center text-gray-500">Product list would go here</div>
//         </div>
//       </div>
//     </main>
//   )
// }

// This is an example of how to use the CategoryFilter component
// import { CategoryFilter } from "@/components/category-filter/category-filter"

// This is example data - you would normally get this from an API
const exampleCategories = [
  {
    id: "electronics",
    name: "Electronics",
    subcategories: [
      {
        id: "laptop",
        name: "Laptop",
        subcategories: [
          {
            id: "samsung",
            name: "Samsung",
            items: ["Galaxy Book4", "Galaxy Book3", "Galaxy Book2"],
          },
          { id: "hp", name: "HP", items: [] },
          { id: "oppo", name: "Oppo", items: [] },
          { id: "vivo", name: "Vivo", items: [] },
          { id: "apple", name: "Apple", items: [] },
        ],
      },
    ],
  },
  { id: "mobile", name: "Mobile", subcategories: [] },
  { id: "gaming", name: "Gaming", subcategories: [] },
  { id: "homeAppliances", name: "Home Appliances", subcategories: [] },
  { id: "accessories", name: "Accessories", subcategories: [] },
  { id: "audioVideo", name: "Audio & Video", subcategories: [] },
]

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
      {/* This is the breadcrumb navigation at the top */}
      <div className="text-white mb-4 flex items-center gap-2">
        <span className="cursor-pointer hover:underline">All</span>
        <span>›</span>
        <span className="cursor-pointer hover:underline">Electronic</span>
        <span>›</span>
        <span className="cursor-pointer hover:underline">Laptop</span>
      </div>

      {/* This is where we use our CategoryFilter component */}
      <div className="flex flex-col md:flex-row gap-4">
        <CategoryFilter
          categories={exampleCategories}
          title="Shop by Category"
          defaultOpenCategories={["electronics", "laptop"]}
          onSelectItem={(item, path) => {
            console.log(`Selected ${item} from path: ${path.join(" > ")}`)
            // You can do something when an item is clicked, like navigate to a product page
          }}
        />

        {/* This is a placeholder for the product list */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
          <div className="text-center text-gray-500">Product list would go here</div>
        </div>
      </div>
    </main>
  )
}

