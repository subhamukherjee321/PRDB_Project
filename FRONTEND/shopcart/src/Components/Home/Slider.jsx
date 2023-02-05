import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div style={{ maxWidth: "100%", margin: "0 5rem" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ maxHeight:"90vh" }}>
          <img
            alt="2"
            src={
              "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80"
            }
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: "90vh" }}>
          <img
            alt="2"
            src={
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: "90vh" }}>
          <img
            alt="3"
            src="https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80"
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: "90vh" }}>
          <img
            alt="4"
            src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width={"100%"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
