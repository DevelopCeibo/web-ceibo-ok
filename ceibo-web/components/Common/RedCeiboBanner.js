import Link from 'next/link'
import React from 'react'

const RedCeiboBanner = ({ text, pathUrl, buttonText }) => {
    return (
        <div className='row d-flex flex-row bg-red-ceibo py-4'>
            <div className='col-12 d-flex flex-row justify-content-center mb-3'>
                <p className='text-white'>{text}</p>
            </div>
            <div className='col-12 d-flex flex-row justify-content-center'>
                <Link href={pathUrl}>
                    <a className="default-btn-three">{buttonText}</a>
                </Link>
            </div>
        </div>
    )
}

export default RedCeiboBanner