"use client"

// This is where we import the tools we need to make our component work
import { useState } from "react"
import { Plus, Minus, ChevronDown, LayoutGrid } from "lucide-react"

// This is our main component - it's like a toy box that holds all our filter toys!
export default function CategoryFilterTwo() {
  // These are like on/off switches for our filter sections
  const [colorOpen, setColorOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [sizeOpen, setSizeOpen] = useState(false)

  // These are the colors we can choose from
  const colors = ["White", "Beige", "Blue", "Brown", "Green", "Purple"]

  // This keeps track of which colors we've picked
  const [selectedColors, setSelectedColors] = useState<string[]>(["Blue"])

  // These are the types of bags we can choose from
  const categories = ["Totes", "Backpacks", "Travel Bags", "Hip Bags", "Laptop Sleeves"]

  // This function helps us pick or unpick a color
  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      // If the color is already picked, we remove it
      setSelectedColors(selectedColors.filter((c) => c !== color))
    } else {
      // If the color is not picked, we add it
      setSelectedColors([...selectedColors, color])
    }
  }

  return (
    // This is the big box that holds everything
    <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* This is the left side with all our filters */}
      <div className="w-full md:w-1/4 space-y-4">
        {/* This is the title at the top */}
        <h1 className="text-2xl font-bold mb-6">New Arrivals</h1>

        {/* These are the bag types you can click on */}
        <div className="space-y-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className="block text-left w-full hover:text-blue-600 transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* This is the divider line */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* This is the color filter section */}
        <div>
          <button
            className="flex items-center justify-between w-full py-2 text-left"
            onClick={() => setColorOpen(!colorOpen)}
          >
            <span className="font-medium">Color</span>
            <span className="transform transition-transform duration-300">
              {colorOpen ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>

          {/* This is where the color options appear when we click */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${colorOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
            `}
          >
            <div className="space-y-2 pl-2">
              {colors.map((color) => (
                <label key={color} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleColor(color)}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200"
                  />
                  <span className="hover:text-blue-600 transition-colors duration-200">{color}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* This is the divider line */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* This is the category filter section */}
        <div>
          <button
            className="flex items-center justify-between w-full py-2 text-left"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <span className="font-medium">Category</span>
            <span className="transform transition-transform duration-300">
              {categoryOpen ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>

          {/* This is where more options would appear */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${categoryOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
            `}
          >
            <div className="space-y-2 pl-2">
              {/* We would put category options here */}
              <p className="text-gray-500">More categories would go here</p>
            </div>
          </div>
        </div>

        {/* This is the divider line */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* This is the size filter section */}
        <div>
          <button
            className="flex items-center justify-between w-full py-2 text-left"
            onClick={() => setSizeOpen(!sizeOpen)}
          >
            <span className="font-medium">Size</span>
            <span className="transform transition-transform duration-300">
              {sizeOpen ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>

          {/* This is where size options would appear */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${sizeOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
            `}
          >
            <div className="space-y-2 pl-2">
              {/* We would put size options here */}
              <p className="text-gray-500">Size options would go here</p>
            </div>
          </div>
        </div>
      </div>

      {/* This is the right side where products would show */}
      <div className="w-full md:w-3/4">
        {/* This is the top bar with sort options */}
        <div className="flex justify-end items-center mb-4">
          <button className="flex items-center mr-4 hover:text-blue-600 transition-colors duration-200">
            <span className="mr-1">Sort</span>
            <ChevronDown size={16} />
          </button>
          <button className="hover:text-blue-600 transition-colors duration-200">
            <LayoutGrid size={20} />
          </button>
        </div>

        {/* This is where products would go */}
        <div className="border border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
          <p className="text-gray-400">Products would appear here</p>
        </div>
      </div>
    </div>
  )
}

