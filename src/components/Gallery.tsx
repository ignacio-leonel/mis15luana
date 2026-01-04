interface GalleryProps {
  images?: string[];
}

export default function Gallery({
  images = [
    "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1721342/pexels-photo-1721342.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2072179/pexels-photo-2072179.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
  ]
}: GalleryProps) {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Galería</h2>
          <p className="text-gray-600">Momentos especiales</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 duration-300"
            >
              <img
                src={image}
                alt={`Galería ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
