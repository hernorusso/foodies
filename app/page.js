import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>

      <p>Eplore the app:</p>
      <Link href="/meals">
        <p>Meals</p>
      </Link>
      <Link href="/meals/share">
        <p>Share Meal</p>
      </Link>
      <Link href="/community">
        <p>Community</p>
      </Link>
    </main>
  );
}
