import React from "react";

let title = [
  "Branding",
  "Brand Strategy",
  "Motion graphics",
  "Video editing",
  "3D animation",
  "Audio production",
  "Web design",
  "Photography",
  "Naming",
  "Packaging",
  "Advertising",
  "Brand art",
];

function Services() {
  return (
    <div className=" bg-black w-max-screen h-screen mx-6 rounded-3xl">
      <div className="text-white font-bold py-4 pl-4">Services</div>
      <div className="flex gap-8">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          {title.map((element) => (
            <>
              <h1
                className=" text-neutral-600 text-7xl font-bold w-4/5 before:text-green-400 after:text-purple-600 hover:text-white hover:translate-x-16 transition duration-300 ease-in-out"
                key={element}
              >
                {element}
              </h1>
              <video
                poster="https://studio-size.com/wp-content/uploads/2024/05/Web-design.jpg"
                className="service-video nooooon-hover hidden"
                src="https://player.vimeo.com/progressive_redirect/playback/939539347/rendition/720p/file.mp4?loc=external&amp;log_user=0&amp;signature=90681da5b1a27a6da15503447cdc83a23477fe0412576ce9c841ddb384f492d3"
                muted={true}
                preload="metadata"
                loop={true}
              ></video>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
