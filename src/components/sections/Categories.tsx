
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Running",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1c1?width=200&height=200",
      count: 124
    },
    {
      id: 2,
      name: "Casual",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2c2c2?width=200&height=200",
      count: 157
    },
    {
      id: 3,
      name: "Sports",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3c3c3?width=200&height=200",
      count: 98
    },
    {
      id: 4,
      name: "Formal",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4c4c4?width=200&height=200",
      count: 64
    },
    {
      id: 5,
      name: "Sandals",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5c5c5?width=200&height=200",
      count: 81
    },
    {
      id: 6,
      name: "Boots",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6c6c6?width=200&height=200",
      count: 72
    }
  ];

  return (
    <section className="py-16 px-[132px] max-xl:px-16 max-md:px-8 max-sm:px-4 bg-[#f8f9fa]">
      <h2 className="text-3xl font-bold text-center text-[#171A1F] mb-10">Shop by Category</h2>
      
      <div className="grid grid-cols-6 gap-4 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {categories.map((category) => (
          <Card key={category.id} className="group cursor-pointer overflow-hidden border-transparent hover:border-[#1E88E5] transition-all">
            <CardContent className="p-0">
              <div className="relative h-[160px] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all"></div>
              </div>
              
              <div className="p-4 text-center">
                <h3 className="font-medium text-[#171A1F]">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} products</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-10 flex justify-center">
        <Button variant="outline" className="border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white">
          All Categories
        </Button>
      </div>
    </section>
  );
};
