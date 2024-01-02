import React from 'react'
import news from '../../../utils/publicaciones.json'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

const Publicacion = () => {
    const { locale } = useRouter()
    const { t } = useTranslation('common')
    const newArticle = t('newArticle').toLocaleUpperCase()
    const fullArticle = t('viewFullArticle')
    const checkOurNewsroom = t('checkOurNewsroom')
    const lastNews = news[0]
    const title = locale === 'es' ? lastNews.title : lastNews.titleEN
    const description = locale === 'es' ? lastNews.desc : "*This article is written in Spanish"


    return (
        <>

            <div className='container d-none d-md-block my-5'>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-4 py-3 pe-2 d-none d-md-flex justify-content-end bg-fcfbfb'>
                        <Image src={lastNews.img} height={350} width={350}></Image>
                    </div>
                    <div className='col-md-6 py-3 d-flex flex-column bg-fcfbfb'>
                        <p className='mb-4'>{newArticle}</p >
                        <Link href={`/publicaciones/${lastNews['path-url']}`}>
                            <a>
                                <h3 className='mb-4'>{title}</h3>
                            </a>
                        </Link>
                        <p>{description}</p >
                        <div className='mt-auto mb-3'>
                            <Link href={`/publicaciones/${lastNews['path-url']}`}>
                                <a className='read-more-btn-grey'>
                                    {fullArticle}{" "}
                                    <i className="fa-solid fa-angles-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className='mb-3'>
                            <Link href={'/publicaciones/'}>
                                <a className="read-more-btn bold">
                                    {checkOurNewsroom}
                                    <i className="fa-solid fa-angles-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div >
            <div className='container d-md-none bg-fcfbfb py-4 my-5'>
                <div className='row'>
                    <div className='col-12 my-auto d-flex justify-content-center'>
                        <Image src={lastNews.img} height={400} width={400}></Image>
                    </div>
                    <div className='col-12 d-flex flex-column'>
                        <p className='mb-2 mt-4'>{newArticle}</p >
                    </div>
                    <div className='col-12 d-flex flex-column'>
                        <h3 className='mb-4'>{title}</h3>
                    </div>
                    <div className='col-12'>
                        <p className='text-justify'>{description}</p >
                    </div>
                    <div className='col-12 my-3'>
                        <Link href={`/publicaciones/${lastNews['path-url']}`}>
                            <a className='read-more-btn-grey'>
                                {fullArticle}{" "}
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </Link>
                    </div>
                    <div className='col-12'>
                        <Link href={'/publicaciones/'}>
                            <a className="read-more-btn bold">
                                {checkOurNewsroom}
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Publicacion