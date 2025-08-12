// src/app/(routes)/cartoons/page.tsx

import client from '@/sanity'; // adjust path if needed
import { Cartoon } from '@/sanity/schemaTypes/cartoon';

async function fetchCartoons(): Promise<Cartoon[]> {
  const query = `*[_type == "cartoon"]{
    _id,
    title,
    synopsis,
    creators,
    releaseYear,
    country,
    genres,
    "imageUrl": image.asset->url,
    facts
  }`;
  const cartoons = await client.fetch<Cartoon[]>(query);
  return cartoons ?? [];
}

export default async function CartoonsPage() {
  const cartoons = await fetchCartoons();

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-200 to-pink-300 p-8">
      <h1
        className="text-5xl font-extrabold text-purple-800 text-center mb-12 drop-shadow-lg"
        style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
      >
        🎨 Cartoon World
      </h1>

      {cartoons.length === 0 ? (
        <p className="text-center text-red-600 text-lg">
          Oops! No cartoons found. Please check the data source.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cartoons.map((cartoon) => (
            <li
              key={cartoon._id}
              className="bg-white rounded-3xl shadow-xl border-4 border-dashed border-purple-500 hover:border-orange-400 transition-colors duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Cartoon Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={cartoon.imageUrl}
                  alt={cartoon.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:rotate-3 hover:scale-110"
                />
              </div>

              {/* Title and Synopsis */}
              <div className="p-5">
                <h2
                  className="text-xl font-bold text-purple-700 mb-2"
                  style={{
                    fontFamily: "'Comic Sans MS', cursive, sans-serif",
                    textShadow: '1px 1px 2px #fbbf24',
                  }}
                >
                  {cartoon.title}
                </h2>
                <p
                  className="text-gray-700 text-sm leading-relaxed h-20 overflow-hidden text-ellipsis"
                  title={cartoon.synopsis}
                >
                  {cartoon.synopsis}
                </p>

                {/* Facts as speech bubble */}
                {cartoon.facts && cartoon.facts.length > 0 && (
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg relative before:absolute before:-top-2 before:left-5 before:w-0 before:h-0 before:border-[10px] before:border-transparent before:border-b-blue-100">
                    <h3 className="text-sm font-semibold text-blue-800 mb-1">
                      Fun Fact:
                    </h3>
                    <p className="text-blue-700 text-sm italic truncate">{cartoon.facts[0]}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
