import Image from "next/image";
import React from "react";

const articles = [
  {
    id: 1,
    image: "/assets/png/article-4.png",
    title: "Pluto’s Funding with UTA",
    description: "Read about how Pluto is planning its launch at UTA",
  },
  {
    id: 2,
    image: "/assets/png/article-2.png",
    title: "DFW News Spotlight",
    description: "How Pluto is catching eyes in higher education in North Texas",
  },
  {
    id: 3,
    image: "/assets/png/article-1.png",
    title: "Pluto Wins $40,000 MavPitch Award",
    description: "A significant milestone in our Startup Journey winning MavPitch Phase 2",
  },
  {
    id: 4,
    image: "/assets/png/article-3.png",
    title: "Pluto’s Funding with UTA",
    description: "How UT Arlington and MavPitch Fueled Our Startup Vision",
  },
];

export default function Article_Main() {
  return (
    <div className="w-[90%] 2xl:w-[60%] mx-auto pt-10 lg:pt-0 lg:-mt-20 pb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 xl:gap-40">
        {articles.map((article) => (
          <div key={article.id}>
            <Image
              src={article.image}
              alt={article.title}
              width={1364}
              height={1364}
              className="w-full"
            />

            <div className="mt-7">
              <p className="text-lg xl:text-2xl font-bold text-[#2F2B24]">
                {article.title}
              </p>

              <p className="md:w-[90%] text-lg xl:text-xl text-[#2F2B24] mt-4 xl:mt-7">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
