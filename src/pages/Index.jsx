import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatFacts from "./CatFacts";

const CatBreed = ({ name, description, image }) => (
  <Card className="mb-4 overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const [currentBreedIndex, setCurrentBreedIndex] = useState(0);
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and vocal nature.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "Large, gentle giants with long, fluffy coats.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious fur.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Wild-looking cats with distinctive spotted or marbled coats.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Sphynx", description: "Hairless cats known for their wrinkled skin and large ears.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBreedIndex((prevIndex) => (prevIndex + 1) % catBreeds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-purple-800">Feline Fascination</h1>
        <Slider {...sliderSettings} className="mb-12">
          {catBreeds.map((breed, index) => (
            <div key={index}>
              <img src={breed.image} alt={breed.name} className="mx-auto object-cover w-full h-[500px] rounded-lg" />
            </div>
          ))}
        </Slider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-purple-700">About Cats</h2>
            <p className="text-xl text-gray-700 mb-8">
              Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
              independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
              characteristics and personalities.
            </p>
          </div>
          <CatFacts />
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">Featured Cat Breed</h2>
        <CatBreed {...catBreeds[currentBreedIndex]} />
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => setCurrentBreedIndex((prevIndex) => (prevIndex - 1 + catBreeds.length) % catBreeds.length)}
            className="mr-2"
          >
            Previous Breed
          </Button>
          <Button
            onClick={() => setCurrentBreedIndex((prevIndex) => (prevIndex + 1) % catBreeds.length)}
          >
            Next Breed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
