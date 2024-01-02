import React from 'react'
import webinars from '../../../utils/eventos.json'
import webinarsEN from '../../../utils/eventosEN.json'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

const Publicacion = () => {
    const { locale } = useRouter()
    const { t } = useTranslation('common')
    const newWebinar = t('newWebinar').toLocaleUpperCase()
    const fullWebinar = t('viewFullWebinar')
    const checkOurWebinars = t('checkOurWebinars')
    const lastWebinar = locale === 'es' ? webinars[0] : webinarsEN[0]

    return (
        <>
            <div className='container d-none d-md-block my-5'>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-5 py-4 px-3 d-none d-md-flex justify-content-end background-grey'>
                        <Image src={lastWebinar.img} width={400} height={266}></Image>
                    </div>
                    <div className='col-6 py-4 d-flex flex-column background-grey'>
                        <p className='mb-4'>{newWebinar}</p >
                        <Link href={`/eventos/${lastWebinar['path-url']}`}>
                            <a>
                                <h3 className='mb-4' >
                                    {lastWebinar.title}
                                </h3>
                            </a>
                        </Link>
                        <p>{lastWebinar.desc}</p >
                        <div className='mt-auto mb-3'>
                            <Link href={`/eventos/${lastWebinar['path-url']}`}>
                                <a className='read-more-btn-grey'>
                                    {fullWebinar}{" "}
                                    <i className="fa-solid fa-angles-right"></i>
                                </a>
                            </Link>
                        </div>
                        <div className='mb-3'>
                            <Link href={'/eventos/'}>
                                <a className="read-more-btn bold">
                                    {checkOurWebinars}
                                    <i className="fa-solid fa-angles-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
            <div className='container d-md-none background-grey py-4 my-5'>
                <div className='row'>
                    <div className='col-12 my-auto'>
                        <Image src={lastWebinar.img} width={400} height={266} ></Image>
                    </div>
                    <div className='col-12 d-flex flex-column'>
                        <p className='mb-2 mt-3'>{newWebinar}</p >
                        <h3 className='mb-4'>{lastWebinar.title}</h3>
                    </div>
                    <div className='col-12'>
                        <p className='text-justify'>{lastWebinar.desc}</p >
                    </div>
                    <div className='col-12 my-3'>
                        <Link href={`/publicaciones/${lastWebinar['path-url']}`}>
                            <a className='read-more-btn-grey'>
                                {fullWebinar}{" "}
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </Link>
                    </div>
                    <div className='col-12'>
                        <Link href={'/publicaciones/'}>
                            <a className="read-more-btn bold">
                                {checkOurWebinars}
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