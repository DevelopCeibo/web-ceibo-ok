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
        <div className='px-5 py-5 bg-grey'>
            <div className='row'>

            <div className='col-12 col-md-6 d-flex justify-content-end mb-3 me-md-4'>
                <Image
                src="/images-ceibo/sumatealequipo/overview/logo-ceibo-growth.png"
                width={540}
                height={360}
                layout="intrinsic"
                alt="nuestra cultura"
            />            
            </div>
            <div className='col-12 col-md-4 d-flex flex-column'>

                <h2 className='text-red-ceibo mb-4'>{title}</h2>
                
                <p className='text-break'>{text}</p>
                
                <Link href={"/busquedas-vigentes"}>
                    <a className="read-more-btn bold pb-3">
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