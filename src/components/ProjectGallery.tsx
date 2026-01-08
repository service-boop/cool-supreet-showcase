interface ProjectGalleryProps {
  images: string[];
  city: string;
}

const ProjectGallery = ({ images, city }: ProjectGalleryProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Projects in {city}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image}
                alt={`${city} project ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-background"> */}
                  {/* <p className="font-semibold">Project {index + 1}</p> */}
                 {/* <p className="font-semibold leading-normal">Project {index + 1}</p>

                  <p className="text-sm text-background/80">{city}</p>
                </div>
              </div> */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <div className="absolute bottom-6 left-4 text-background pb-1">
    <p className="font-semibold leading-relaxed">Project {index + 1}</p>
    <p className="text-sm text-background/80"> {city} </p>
  </div>
</div> */}
<div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
  <div className="text-background pb-1">
    <p className="font-semibold leading-normal">Project {index + 1}</p>
    <p className="text-sm text-background/80">{city}</p>
  </div>
</div>



            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
