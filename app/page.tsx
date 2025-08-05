import Head from "next/head";
import Keyboard from "@/components/Keyboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mac Keyboard UI</title>
      </Head>
      <main className="min-h-screen bg-black flex items-center justify-center p-4">
        <Keyboard />
      </main>
    </>
  );
}
