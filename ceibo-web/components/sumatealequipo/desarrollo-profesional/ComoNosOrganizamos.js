import React from 'react'
import ResponsiveIFrame from '../../Common/ResponsiveIFrame'
import useTranslation from 'next-translate/useTranslation'
import ComoNosOrganizamosSwiper from './ComoNosOrganizamosSwiper'

const ComoNosOrganizamos = () => {

    const { t } = useTranslation('common')
    const title = t("comoNosOrganizamos")
    const text = t("comoNosOrganizamosTxt")

    return (
        <div className='container pb-100'>

            <div className='section-title'>
                <h2>
            {title}
                </h2>
                <h2 />
            </div>
            <p className='text-center mb-5'>{text}</p>

            <ResponsiveIFrame videoSrc={"https://www.youtube.com/embed/4Rhi2_C3Qvc"} />

            <ComoNosOrganizamosSwiper/>

        </div>
    )
}

export default ComoNosOrganizamos

