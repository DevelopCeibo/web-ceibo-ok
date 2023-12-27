import React from 'react'
import RedCeiboBanner from '../../Common/RedCeiboBanner'
import useTranslation from 'next-translate/useTranslation'

const BusquedasAbiertas = () => {
    const { t } = useTranslation("common")
    const text = t("exploreOpportunities")
    const buttonText = t("busquedasVigentesh1")
    return (
        <RedCeiboBanner text={text} pathUrl={'/sumate-al-equipo/busquedas-vigentes/'} buttonText={buttonText} />
    )
}

export default BusquedasAbiertas