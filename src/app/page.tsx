import React from "react";
import Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>3³</title>
        <meta
          name="description"
          content="Democratizando el acceso a la educación superior con práctica personalizada."
        />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <header className="w-full text-center py-6">
          <h1 className="text-3xl font-bold text-gray-800">3³</h1>
        </header>

        <main className="flex flex-col items-center text-center px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            La práctica hace al maestro, y nosotros hacemos la práctica.
          </h2>
          <p className="text-gray-600 mb-8">
            Democratizamos el acceso a la educación superior con práctica
            accesible y personalizada.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded font-medium hover:bg-green-600 transition">
            Comienza ahora
          </button>
        </main>

        <footer className="w-full text-center py-6 mt-12 bg-gray-100">
          <p className="text-gray-600">
            Este proyecto se encuentra bajo la licencia MIT y es{" "}
            <a
              href="https://github.com/hackaton-platanus-27/hack-platanus-g27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600"
            >
              código abierto
            </a>
            🚀
          </p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
