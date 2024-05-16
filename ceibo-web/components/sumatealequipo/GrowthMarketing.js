import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

const GrowthMarketing = () => {

    const { t } = useTranslation("common")

    const title = t("carreraEnGrowth")
    const text = t("carreraEnGrowthTxt")
    const buttonText = t("conoceOportunidadesGrowth")

  return (
    <div>
        <div className='px-3 px-md-5 py-3 py-md-5 bg-grey'>
            <div className='row'>

            <div className='col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-3'>
                <Image
                src="/images-ceibo/sumatealequipo/overview/logo-ceibo-growth.png"
                width={500}
                height={333}
                layout="intrinsic"
                alt="Logo Ceibo Growth"
            />            
            </div>
            <div className='col-12 col-md-6 d-flex flex-column pe-md-5'>

                <h2 className='text-red-ceibo mb-4'>{title}</h2>
                
                <p className='text-break'>{text}</p>
                
                      <Link href={"https://www.ceibogrowth.com/#comp-lu0759dj"}>
                    <a className="read-more-btn bold pb-3" target='_blank'>
                        {buttonText}
                        <i className="fa-solid fa-angles-right"></i>
                    </a>
				</Link>

            </div>

            </div>

        </div>
     </div>
  )
}

export default GrowthMarketing