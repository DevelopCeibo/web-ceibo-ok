import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import RedCeiboBanner from '../../Common/RedCeiboBanner'

const Contacto = () => {
    const { t } = useTranslation('common')
    const text = t("reachYourPotential")
    const contactUs = t('contactanos')
    return (
        <RedCeiboBanner text={text} buttonText={contactUs} pathUrl={'/contacto'} />
    )
}

export default Contacto