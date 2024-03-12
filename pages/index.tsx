import { useEffect, useState } from "react";
import Image from "next/image";
import api from "api";
import ListTop from "../components/ListTop";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: { "X-BetaSeries-Key": "628dca4800f0" },
        };
        const response = await fetch(
          "https://api.betaseries.com/shows/list?order=popularity&limit=10",
          options
        );
        const jsonData = await response.json();
        setData(jsonData.shows);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-center">Top 10 Series</h1>

        <ListTop data={data} />
      </div>
    </main>
  );
}
