import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div style={{ maxWidth: "100%", margin: "80px 5rem"}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            alt="1"
            src={
              "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/DD-Desktop_1400x.jpg?v=1676020067"
            }
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="2"
            src={
              "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wave-beat-new_desktop_1400x.jpg?v=1675873942"
            }
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="3"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Desktop-Apex_1400x.jpg?v=1676011122"
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="4"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/love-out-loud_desktop.-2-2_1b631be8-dfae-4e8b-a6d2-06a9677564a8_1400x.jpg?v=1676004171"
            width={"100%"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
