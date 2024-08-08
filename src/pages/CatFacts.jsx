import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RefreshCw, Lightbulb } from "lucide-react";

const CatFacts = () => {
  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCatFact = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Unable to fetch cat fact. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-purple-700 flex items-center">
          <Lightbulb className="mr-2 h-8 w-8 text-yellow-500" />
          Cat Fact of the Day
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.p
          key={fact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl mb-6 text-gray-700 italic"
        >
          "{fact}"
        </motion.p>
        <Button
          onClick={fetchCatFact}
          disabled={isLoading}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center"
        >
          {isLoading ? (
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="mr-2 h-4 w-4" />
          )}
          New Fact
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatFacts;
