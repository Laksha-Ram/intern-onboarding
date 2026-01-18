import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h1>Home Page</h1>
        <p>Welcome to my Next.js app</p>
      </div>
    </div>
  );
}
