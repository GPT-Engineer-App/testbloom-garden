import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatFacts from "./CatFacts";
import { motion } from "framer-motion";
import { Cat, Heart } from "lucide-react";

const CatBreed = ({ name, description, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="mb-4 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <CardHeader>
        <CardTitle className="flex items-center">
          <Cat className="mr-2 h-6 w-6 text-purple-600" />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
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
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-8 text-center text-purple-800 flex items-center justify-center"
        >
          <Heart className="mr-4 h-12 w-12 text-pink-500" />
          Feline Fascination
          <Heart className="ml-4 h-12 w-12 text-pink-500" />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Slider {...sliderSettings} className="mb-16">
            {catBreeds.map((breed, index) => (
              <div key={index} className="px-2">
                <img src={breed.image} alt={breed.name} className="mx-auto object-cover w-full h-[600px] rounded-lg shadow-xl" />
              </div>
            ))}
          </Slider>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-purple-700">About Cats</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
              independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
              characteristics and personalities. These elegant felines have captured the hearts of millions around the world
              with their playful antics and soothing purrs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CatFacts />
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold mb-8 text-center text-purple-700"
        >
          Featured Cat Breed
        </motion.h2>
        <CatBreed {...catBreeds[currentBreedIndex]} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={() => setCurrentBreedIndex((prevIndex) => (prevIndex - 1 + catBreeds.length) % catBreeds.length)}
            className="mr-4 bg-purple-600 hover:bg-purple-700"
          >
            Previous Breed
          </Button>
          <Button
            onClick={() => setCurrentBreedIndex((prevIndex) => (prevIndex + 1) % catBreeds.length)}
            className="bg-pink-500 hover:bg-pink-600"
          >
            Next Breed
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
