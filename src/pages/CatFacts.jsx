import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CatFacts = () => {
  const [fact, setFact] = useState("");

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Unable to fetch cat fact. Please try again later.");
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-purple-700">Cat Fact of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4">{fact}</p>
        <Button onClick={fetchCatFact}>New Fact</Button>
      </CardContent>
    </Card>
  );
};

export default CatFacts;
