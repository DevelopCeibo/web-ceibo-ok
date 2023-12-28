import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';
import { EffectCube, Mousewheel, Scrollbar, Autoplay } from 'swiper';
import successStories from '../../../utils/casos-de-exito.json'
import successStoriesEN from '../../../utils/casos-de-exito-EN.json'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'swiper/css/effect-cube';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import useTranslation from 'next-translate/useTranslation';

const ComoAyudamosANuestrosClientes = () => {
    const { t } = useTranslation('common')
    const { locale } = useRouter()
    const title = t("howWeHelpClients")
    const subtitle = t("digitalTransformationSuccess")
    const text = t("digitalTransformationSuccessText")

    const activeStories = locale === 'es' ? successStories : successStoriesEN

    return (
        <div className='container my-5'>
            <div className='section-title'>
                <h2>
                    {title}
                </h2>
            </div>
            <div className='d-flex flex-column align-items-center mb-4'>
                <h3>{subtitle}</h3>
                <p>{text}</p>
            </div>
            <Swiper
                effect='cube'
                cubeEffect={
                    { shadow: false }
                }
                direction={'horizontal'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                scrollbar={{
                    draggable: true, horizontalClass: 'swiper-scrollbar-horizontal'
                }}
                autoplay={{ delay: 5000 }}
                modules={[Mousewheel, EffectCube, Scrollbar, Autoplay]}
            >

                {activeStories?.map((story, i) => {
                    return (
                        <SwiperSlide>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <Image src={story.metadata.image} height={200} width={200}></Image>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <Image src={story.clientimg} height={100} width={150}></Image>
                                    </div>
                                    {story.metadata.tags.map((tag, index) => (
                                        <Link href={`/#`} key={index}>
                                            <>
                                                <a>{tag}</a>
                                                {index !== story.metadata.tags.length - 1 && " | "}
                                            </>
                                        </Link>
                                    ))}
                                    <p className='bold'>{story.content[0].text}</p>
                                    <Link href={`/casos-de-exito/${story["path-url"]}`}>
                                        <a className="read-more-btn">
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