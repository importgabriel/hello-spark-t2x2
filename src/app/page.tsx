import BlueButton from "@/components/BlueButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-8">
      {/* Greeting */}
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          Hello, World!
        </h1>
        <p className="text-gray-500 text-lg">
          Welcome to this simple Next.js page.
        </p>
      </div>

      {/* Blue button */}
      <BlueButton label="Click Me!" />
    </main>
  );
}
