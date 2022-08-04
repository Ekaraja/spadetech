import React from "react";
import "./story.css";

import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import "./storySlider.css";
import { Pagination, Autoplay } from "swiper";

const pagination = {
	clickable: true,
    slidesPerView: 3,
    spaceBetween: 600,
    centeredSlides: true,
	autoplay: 1100,
};

const Story = () => {
	return (
		<section className="statistics__section">
			<div className="statistics__container --statistics__desktop">
				<article className="statistic__card">
					<p>Founded in</p>
					<span>2019</span>
				</article>
				<article className="statistic__card">
					<p>Number of Audits</p>
					<span>200+</span>
				</article>
				<article className="statistic__card">
					<p>Clients</p>
					<span>30+</span>
				</article>
			</div>

			<figure className="statistics__container --statistics__slider">
				<div className="statistic__slider__frame">
					<Swiper
						pagination={pagination}
						modules={[Pagination, Autoplay]}
                        centeredSlides="true"
						className="mySwiper"
						loop
						autoplay={{
							delay: 4500,
						}}
					>
						<SwiperSlide className="statistic__slide">
							<article className="statistic__slide__article">
                                <p>Founded in</p>
                                <span>2019</span>
                                </article>
						</SwiperSlide>
						<SwiperSlide className="statistic__slide">
                        <article className="statistic__slide__article">
							<p>Number of Audits</p>
							<span>200+</span>
                            </article>
						</SwiperSlide>
						<SwiperSlide className="statistic__slide">
                        <article className="statistic__slide__article">
							<p>Clients</p>
							<span>30+</span>
                            </article>
						</SwiperSlide>
					</Swiper>
				</div>
			</figure>
		</section>
	);
};

export default Story;
