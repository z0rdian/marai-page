import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import classes from '../testimonial/testimonial.module.scss';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Testimonial({ testimonialItems, testimonial_section__items }) {
    return (
        <div className={classes.area}>
            <Container>
                <Row className='g-4'>
                    {testimonial_section__items?.map(
                        (testimonial_section__item, index) => {
                            return (
                                <Col
                                    xl={{ span: 5 }}
                                    lg={{ span: 6 }}
                                    key={index}
                                    className='pb-30 pb-lg-0'
                                >
                                    <div className={classes.section__wrap}>
                                        <span className={classes.subtitle}>
                                            {
                                                testimonial_section__item?.subTitle
                                            }
                                        </span>
                                        <h2 className={classes.title}>
                                            {testimonial_section__item?.title}
                                        </h2>
                                        <p
                                            className={classes.desc}
                                            dangerouslySetInnerHTML={{
                                                __html: testimonial_section__item.desc,
                                            }}
                                        ></p>
                                        <div className='btn-wrap'>
                                            <Link href='/'>
                                                <a
                                                    className={
                                                        classes.section__btn
                                                    }
                                                >
                                                    view more
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            );
                        }
                    )}
                    <Col xl={{ span: 7 }} lg={{ span: 6 }}>
                        <Swiper
                            pagination={false}
                            loop={false}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 2,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    slidesPerColumnFill: 'colums',
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: 1,
                                    slidesPerColumn: 2,
                                    slidesPerGroup: 1,
                                    slidesPerColumnFill: 'row',
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerColumnFill: 'row',
                                    slidesPerColumn: 1,
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                576: {
                                    slidesPerColumnFill: 'row',
                                    slidesPerColumn: 1,
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                0: {
                                    slidesPerColumnFill: 'column',
                                    slidesPerColumn: 1,
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {testimonialItems?.map((testimonialItem, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div className={classes.item}>
                                            <div className={classes.content}>
                                                <p className={classes.desc}>
                                                    <i
                                                        className={`${classes.quotation} ${classes.direction_left}`}
                                                    >
                                                        “
                                                    </i>
                                                    {testimonialItem?.excerpt}
                                                    <i
                                                        className={`${classes.quotation} ${classes.direction_right}`}
                                                    >
                                                        ”
                                                    </i>
                                                </p>
                                                <div
                                                    className={
                                                        classes.user_info
                                                    }
                                                >
                                                    <div className='user_img'>
                                                        <img
                                                            src={
                                                                testimonialItem?.avatar
                                                            }
                                                            alt={
                                                                testimonialItem?.avatarAlt
                                                            }
                                                        />
                                                    </div>
                                                    <div
                                                        className={
                                                            classes.user_content
                                                        }
                                                    >
                                                        <h3
                                                            className={
                                                                classes.user_name
                                                            }
                                                        >
                                                            {
                                                                testimonialItem?.userName
                                                            }
                                                        </h3>
                                                        <span
                                                            className={
                                                                classes.user_occupation
                                                            }
                                                        >
                                                            {
                                                                testimonialItem?.userOccupation
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Testimonial;
