import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div style={{ maxWidth: "100%", margin: "auto"}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ maxHeight: " 90vh" }}>
          <img
            alt="2"
            src={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/deks_01_76dd96ef-4dc3-466c-944d-b4e38da8b839.jpg?v=1639986488"}
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: " 90vh" }}>
          <img
            alt="2"
            src={"https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/in/store/large-card-product/LargeCardProduct_PC_10t.jpg.thumb.webp"}
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: " 90vh" }}>
          <img
            alt="3"
            src="https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/in/store/large-card-product/LargeCardProduct_PC_10t.jpg.thumb.webp"
            width={"100%"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: " 90vh" }}>
          <img
            alt="4"
            src="https://images.samsung.com/is/image/samsung/assets/in/home/firstlook/2023_Family_KV_Horizontal_notxt_v1.1.jpg"
            width={"100%"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};