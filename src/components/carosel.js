import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function carosel() {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left place-content-center -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none carouselImg"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="rounded-box lg:w-7/12 md:w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none carouselImg"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block rounded-box lg:w-7/12 md:w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none carouselImg"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block rounded-box lg:w-7/12 md:w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}