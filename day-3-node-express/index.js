import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_BASE;

    fetch(`${base}/health`) // <-- change this to your working endpoint
      .then(async (res) => {
        const text = await res.text();
        try {
          return JSON.parse(text); // if JSON
        } catch {
          return { raw: text }; // if plain text
        }
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Day 7: Frontend ↔ Backend Integration</h1>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!data && !error && <p>Loading...</p>}

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
