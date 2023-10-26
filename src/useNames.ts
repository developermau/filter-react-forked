import { useEffect, useState } from "react";
import namesData from "./names.json";

export const useNames = (): string[] => {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // You can replace this with your actual API call
        // For this example, we're using mock data from names.json
        const response = await fetch("./names.json");
        const data = await response.json();
        const nameList = data.map((item: any) => item.name);
        setNames(nameList);
      } catch (error) {
        console.error("Error fetching names:", error);
      }
    };

    fetchData();
  }, []);

  return names;
};
