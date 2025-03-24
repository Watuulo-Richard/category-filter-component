// import { BackgroundBeams } from '@/components/background-beam'
// import React from 'react'

// export default function page() {
//   return (
//     <div>
//       <BackgroundBeams />
//     </div>
//   )
// }
// This is our main page that shows the category filter

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

import { redirect } from 'next/navigation'
import React from 'react'

export default function Page() {
  redirect("/category-filter-page")
  return (
    <div>page</div>
  )
}


