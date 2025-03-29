
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Running",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 124
    },
    {
      id: 2,
      name: "Casual",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 157
    },
    {
      id: 3,
      name: "Sports",
      image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 98
    },
    {
      id: 4,
      name: "Formal",
      image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 64
    },
    {
      id: 5,
      name: "Sandals",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 81
    },
    {
      id: 6,
      name: "Boots",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      count: 72
    }
  ];

  return (
    <section className="py-6 md:py-10 bg-white rounded-md shadow-sm my-4">
      <div className="flex justify-between items-center px-4 mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#131921]">Shop by Category</h2>
        <Button variant="link" className="text-[#007185] hover:text-[#c7511f] hover:underline">
          See all categories
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 px-4">
        {categories.map((category) => (
          <Card key={category.id} className="group cursor-pointer overflow-hidden border-transparent hover:border-[#febd69] transition-all">
            <CardContent className="p-0">
              <div className="relative h-[100px] sm:h-[120px] md:h-[140px] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all" />
              </div>
              
              <div className="p-2 sm:p-3 text-center">
                <h3 className="font-medium text-sm sm:text-base text-[#131921]">{category.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{category.count} products</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
