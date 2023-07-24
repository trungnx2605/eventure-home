import Header from "./components/Layout/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center w-full fixed z-50">
        <Header />
      </div>
    </main>
  );
}
