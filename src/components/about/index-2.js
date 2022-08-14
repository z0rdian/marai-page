import { Col, Container, Row } from 'react-bootstrap';
import classes from './about-2.module.scss';
import * as FaIcons from 'react-icons/fa';

function AboutTwo({ aboutItemsTwo }) {
    return (
        <div className={classes.area}>
            {aboutItemsTwo?.map((aboutItemTwo, i) => {
                return (
                    <Container key={i}>
                        <Row className='g-0'>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.img__wrap}>
                                    <div className={classes.pattern}>
                                        <img
                                            className='img-full'
                                            src={aboutItemTwo?.aboutPattern}
                                            alt={aboutItemTwo?.aboutPatternAlt}
                                        />
                                    </div>
                                    <div className={classes.img}>
                                        <img
                                            className='img-full'
                                            src={aboutItemTwo?.aboutImage}
                                            alt={aboutItemTwo?.aboutImageAlt}
                                        />
                                    </div>
                                    <div className={classes.group__img}>
                                        <div className={classes.single_img}>
                                            <img
                                                className='img-full'
                                                src={
                                                    aboutItemTwo?.singleImageOne
                                                }
                                                alt={
                                                    aboutItemTwo?.singleImageOneAlt
                                                }
                                            />
                                        </div>
                                        <div className={classes.single_img}>
                                            <img
                                                className='img-full'
                                                src={
                                                    aboutItemTwo?.singleImageTwo
                                                }
                                                alt={
                                                    aboutItemTwo?.singleImageTwoAlt
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className='align-self-end' lg={{ span: 6 }}>
                                <div className={classes.content}>
                                    <h2 className={classes.title}>
                                        {aboutItemTwo?.title}
                                    </h2>
                                    <h3 className={classes.subtitle}>
                                        {aboutItemTwo?.subTitle}
                                    </h3>
                                    <p className={classes.desc}>
                                        {aboutItemTwo?.desc}
                                    </p>
                                    <ul className={classes.list__item}>
                                        {aboutItemTwo?.listItem?.map(
                                            (item, index) => {
                                                const CheckIcon =
                                                    FaIcons[item.checkIcon];
                                                return (
                                                    <li
                                                        className={classes.list}
                                                        key={index}
                                                    >
                                                        <div
                                                            className={
                                                                classes.icon
                                                            }
                                                        >
                                                            <CheckIcon />
                                                        </div>
                                                        <div
                                                            className={
                                                                classes.text
                                                            }
                                                        >
                                                            {item.text}
                                                        </div>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                );
            })}
        </div>
    );
}

export default AboutTwo;
