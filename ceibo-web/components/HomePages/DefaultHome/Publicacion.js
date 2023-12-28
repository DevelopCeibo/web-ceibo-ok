import React from 'react'
import news from '../../../utils/publicaciones.json'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Publicacion = () => {

    const { t } = useTranslation('common')
    const newArticle = t('newArticle').toLocaleUpperCase()
    const fullArticle = t('viewFullArticle')
    const checkOurNewsroom = t('checkOurNewsroom')
    const lastNews = news[0]

    return (
        <>

            <div className='container d-none d-md-block my-5 pt-100'>
                <div className='row background-grey'>
                    <div className='col-md-6 py-4 px-5 d-none d-md-flex justify-content-end'>
                        <Image src={lastNews.img} height={350} width={350}></Image>
                    </div>
                    <div className='col-md-6 py-4 d-flex flex-column'>
                        <p className='mb-4'>{newArticle}</p >
                        <Link href={`/publicaciones/${lastNews['path-url']}`}>
                            <a>
                                <h3 className='mb-4'>{lastNews.title}</h3>
                            </a>
                        </Link>
                        <p>{lastNews.desc}</p >
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
                </div>
            </div >
            <div className='container d-md-none background-grey py-2 my-5'>
                <div className='row'>
                    <div className='col-3 my-auto'>
                        <Image src={lastNews.img} height={400} width={400}></Image>
                    </div>
                    <div className='col-9 d-flex flex-column'>
                        <p className='mb-3 mt-2'>{newArticle}</p >
                        <h3 className='mb-4'>{lastNews.title}</h3>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <p className='text-justify'>{lastNews.desc}</p >
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