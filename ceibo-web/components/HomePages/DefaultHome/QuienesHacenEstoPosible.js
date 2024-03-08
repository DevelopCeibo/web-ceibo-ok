import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import uniqid from 'uniqid'

const Publicacion = () => {

    const { t } = useTranslation('common')
    const title = t('whoMakeThisPossible')
    const subtitle = t('dayToDayTitle')
    const text = t('dayToDayText')
    const items = t('dayToDayItems', {}, { returnObjects: true })
    const imagePath = '/images-ceibo/homepage/quienes-hacen-esto-posible.png'
    const ourCulture = t("knowMore")

    return (
        <div className='my-5 pt-100'>
            <div className='section-title'>
                <h2>{title}</h2> </div>
            <div className='container d-none d-md-block my-5'>
                <div className='row'>
                    <div className='col-md-5 py-4 d-none d-md-flex justify-content-end'>
                        <Image src={imagePath} height={400} width={600}></Image>
                    </div>

                    <div className='col-md-7 py-4 d-flex flex-column'>
                        <h3 className='mb-4'>{subtitle}</h3 >
                        <p className='bottom-line pb-3'>{text}</p>
                        <div className='row'>
                            {items?.map((item, i) => {
                                return item.map(word => (
                                    <div className={`col-md-4 who-makes-this-possible-item ${i % 2 == 0 ? "justify-content-around" : ""}`} key={uniqid()}>
                                        <p>{word.text}</p>
                                    </div>
                                ))

                            })}
                        </div>
                    </div>
                </div>
            </div >
            <div className='container d-md-none mb-5'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center'>
                        <Image src={imagePath} height={400} width={400}></Image>
                    </div>
                    <div className='col-12 d-flex flex-column'>
                        <h3 className='my-3'>{subtitle}</h3>
                    </div>
                    <div className='col-12 d-flex flex-column'>
                        <p className='text-justify'>{text}</p >
                    </div>
                </div>
                <div className='row mt-4 px-4'>
                    {items?.map((item, i) => {
                        return item.map((word) => {
                            if (i < 2) {
                                return (
                                    <div className={`col-6 who-makes-this-possible-item justify-content-center`} key={uniqid()}>
                                        <p>{word.text}</p>
                                    </div>
                                )
                            }
                        })
                    })}
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <Link href={'/sumate-al-equipo/vida-en-ceibo'}>
                    <a className="default-btn-two"> {ourCulture}</a>
                </Link>
            </div>
        </div>
    )
}

export default Publicacion