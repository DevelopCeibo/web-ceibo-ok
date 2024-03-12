import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';
import {  Mousewheel, Autoplay,EffectFade, Pagination } from 'swiper';
import successStories from '../../../utils/casos-de-exito.json'
import successStoriesEN from '../../../utils/casos-de-exito-EN.json'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import useTranslation from 'next-translate/useTranslation';
import uniqid from 'uniqid'

const ComoAyudamosANuestrosClientes = () => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    const title = t("howWeHelpClients")
    const text = t("digitalTransformationSuccessText")

    const activeStories = locale === 'es' ? successStories : successStoriesEN

    return (
        <div className='container my-5'>
            <div className='section-title mb-4'>
                <h2>
                    {title}
                </h2>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <p>{text}</p>
            </div>
            <Swiper
                cubeEffect={
                    { shadow: false }
                }
                direction={'horizontal'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{clickable:true}}
                effect='fade'
                fadeEffect={
                {  crossFade: true}
                }
                className="feedback-slides"
                autoplay={{ delay: 5000 }}
                modules={[Mousewheel, EffectFade, Autoplay,Pagination]}
            >

                {activeStories?.map((story, i) => {
                    return (
                        <SwiperSlide key={uniqid()}>
                            <div className='row'>
                                <div className='col-5 d-none d-md-flex justify-content-end mt-4'>
                                    <Image src={story.metadata.image} height={300} width={600}></Image>
                                </div>
                                <div className='col-7 d-none d-md-flex flex-column mt-4'>
                                    <div>
                                        <Image src={story.clientimg} height={150} width={225}></Image>
                                    </div>
                                    <div>
                                    {story.metadata.tags.map((tag, index) => (
                                        <Link href={`/#`} key={index}>
                                            <>
                                                <a>{tag}</a>
                                                {index !== story.metadata.tags.length - 1 && " | "}
                                            </>
                                        </Link>
                                    ))}

                                    </div>
                                    <p className='bold'>{story.content[0].text}</p>
                                    <Link href={`/casos-de-exito/${story["path-url"]}`}>
                                        <a className="read-more-btn mt-auto mb-3">
                                            {locale == "en"
                                                ? "Read success story"
                                                : "Leer caso de éxito"}
                                            <i className="fa-solid fa-angles-right"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className='col-12 d-flex d-md-none flex-column'>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <Image src={story.clientimg} height={125} width={185}></Image>
                                    </div>
                                    <div>
                                    {story.metadata.tags.map((tag, index) => (
                                        <Link href={`/#`} key={index}>
                                            <>
                                                <a>{tag}</a>
                                                {index !== story.metadata.tags.length - 1 && " | "}
                                            </>
                                        </Link>
                                    ))}
                                    </div>
                                    <p className='bold'>{story.content[0].text}</p>
                                    <Link href={`/casos-de-exito/${story["path-url"]}`}>
                                        <a className="read-more-btn mt-auto mb-3">
                                            {locale == "en"
                                                ? "Read success story"
                                                : "Leer caso de éxito"}
                                            <i className="fa-solid fa-angles-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                        </SwiperSlide>

                    )
                })}




            </Swiper>

        </div >
    )
}

export default ComoAyudamosANuestrosClientes