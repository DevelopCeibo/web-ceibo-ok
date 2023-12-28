import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Link from 'next/link'

const DondeEstamos = () => {

    const { locale } = useRouter()
    const { t } = useTranslation('common')
    const donde = t('donde-estamos')
    const contactanos = t('contactanos')
    return (
        <div className="pb-70 my-5">
            <div className="container">
                <div className="section-title">
                    <h2>{donde}</h2>
                </div>
                <img
                    // src="/images-ceibo/mapa-ubicacion@2x.png"
                    src={
                        locale == "es"
                            ? "/images-ceibo/mapa-ubicacion@2x.png"
                            : "/images-ceibo/Dondeestamos_ingle.png"
                    }
                    alt="ubicación de las oficinas de ceibo"
                />
            </div>
            <div className="container btn-two-container">
                <Link href="/contacto/">
                    <a className="default-btn-two">
                        {contactanos}
                    </a>
                </Link>
            </div>
        </div>)
}

export default DondeEstamos