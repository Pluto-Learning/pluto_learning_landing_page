import Image from "next/image";
import Slider from "react-slick";

export default function Feature_Slider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings_2 = {
    ...settings,
    rtl: true,
  };

  const listCardData = [
    { title: "Quiz Mode", banner: "/assets/png/lock.png" },
    { title: "24/7 AI TA", banner: "/assets/png/box.png" },
    { title: "Faculty Dashboard", banner: "/assets/png/loading.png" },
    { title: "Collab Whiteboard", banner: "/assets/png/download.png" },
    { title: "Set custom domain", banner: "/assets/png/gloab.png" },
  ];

  const listCardData_2 = [
    { title: "Peer Mentors", banner: "/assets/png/frame.png" },
    { title: "Dark/Light Theme", banner: "/assets/png/moon.png" },
    { title: "Cost Monitor", banner: "/assets/png/alram.png" },
    { title: "Spotlight Tables", banner: "/assets/png/message.png" },
    { title: "Microsoft SSO", banner: "/assets/png/gloab.png" },
  ];

  return (
    <div className="pb-14 lg:pb-16">
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-10 md:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

        <div className="absolute right-0 top-0 h-full w-10 md:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div className="overflow-hidden pb-5">
          <Slider className="overflow-hidden" {...settings}>
            {listCardData.map((x, index) => (
              <div
                key={index}
                className="!w-[95%] overflow-hidden bg-[#f5f6fa] rounded-lg px-2 md:px-5 py-2.5 md:py-3.5"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <Image
                    src={x.banner}
                    alt=""
                    width={12}
                    height={12}
                    className="w-3"
                  />
                  <p className="text-[10px] md:text-sm text-[#111827]">
                    {x.title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="overflow-hidden">
          <Slider className="overflow-hidden" {...settings_2}>
            {listCardData_2.map((x, index) => (
              <div
                key={index}
                className="!w-[95%] overflow-hidden bg-[#f5f6fa] rounded-lg px-2 py-2.5 md:px-5 md:py-3.5"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <Image
                    src={x.banner}
                    alt=""
                    width={12}
                    height={12}
                    className="w-3"
                  />
                  <p className="text-[10px] md:text-sm text-[#111827]">
                    {x.title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
