// This is the main page where we show our category filter

import CategoryFilterTwo from "@/components/category-filter-two/category-filter-two";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-4">
      {/* We put our category filter here */}
      <CategoryFilterTwo />
    </main>
  )
}

