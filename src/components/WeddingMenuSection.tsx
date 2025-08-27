import { Card, CardContent } from "@/components/ui/card";

const WeddingMenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Appetizers",
      description: "Elegant starters to begin our celebration",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop",
      items: ["Stuffed Mushrooms", "Shrimp Cocktail", "Bruschetta"]
    },
    {
      id: 2,
      name: "Main Course",
      description: "Exquisite dishes crafted with love",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      items: ["Grilled Salmon", "Beef Tenderloin", "Vegetarian Pasta"]
    },
    {
      id: 3,
      name: "Desserts",
      description: "Sweet endings to our perfect day",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      items: ["Wedding Cake", "Chocolate Fountain", "Fruit Tarts"]
    },
    {
      id: 4,
      name: "Beverages",
      description: "Refreshing drinks for every moment",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
      items: ["Signature Cocktails", "Fine Wines", "Fresh Juices"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
            <span className="mx-4 text-primary">✦</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our Wedding Menu
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            A Feast of Flavors for Our Special Day
          </p>
          
          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-32"></div>
            <span className="mx-4 text-primary/70">♥</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-32"></div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-primary/20 hover:border-primary/40 bg-card/80 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Menu Items */}
                  <div className="space-y-2">
                    {item.items.map((menuItem, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center text-sm text-muted-foreground/80"
                      >
                        <span className="w-2 h-2 bg-primary/60 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="group-hover:text-foreground transition-colors duration-300">
                          {menuItem}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-primary text-2xl">❀</span>
              <div className="mx-4 h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 w-24"></div>
              <span className="text-primary text-2xl">❀</span>
            </div>
            <p className="text-muted-foreground/80 italic text-lg">
              Our Story in the Light of the Qur'an
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingMenuSection;