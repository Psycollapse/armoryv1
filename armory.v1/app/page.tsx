import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[3fr_1fr]">
      {/* Top 75% with Background Image */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/landing_background.webp')",
        }}
      >
        <main className="flex flex-col gap-8 items-center sm:items-start h-full justify-center p-8 sm:p-20">
          <Image
            src="/landing_logo_simmerai.PNG"
            alt="Landing Logo SimmerAI"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              This is your go-to tool for optimizing your World of Warcraft experience{" "}
            </li>
            <li>Safely log in to battle.net and load your account data</li>
          </ol>
        </main>

        {/* Buttons Positioned 5% Above Bottom of Background */}
        <div
          className="absolute flex gap-4 items-center flex-col sm:flex-row left-1/2 transform -translate-x-1/2 bottom-[5%]"
        >
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Log-in
          </a>
          <a
            className="rounded-full border border-solid border-black bg-black text-white hover:bg-[#1a1a1a] hover:text-[#f2f2f2] transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the documentation
          </a>
        </div>
      </div>

      {/* Bottom 25% with Black Background */}
      <div className="bg-black text-white flex flex-col items-center justify-center p-8 sm:p-20">
        <footer className="mt-16 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}
