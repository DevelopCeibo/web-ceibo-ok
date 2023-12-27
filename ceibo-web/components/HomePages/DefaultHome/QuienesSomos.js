import React, { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import ResponsiveIFrame from '../../../components/Common/ResponsiveIFrame'

const QuienesSomos = () => {

    const { t } = useTranslation("common")
    const title = t("quienesSomos")
    const description = t("quienesSomosText")
    const years = t('years')
    const countries = t('countries')
    const projects = t('projects')
    const yearsText = t('yearsText')
    const countriesText = t('countriesText')
    const projectsText = t('projectsText')
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log('name', entry.target.className)
                console.log('lsit', entry.target.className)
                if (entry.isIntersecting && entry.target.className.includes('counter-years')) {
                    entry.target.classList.add('counter-animation-years');
                }
                else if (entry.isIntersecting && entry.target.className.includes('counter-projects')) {
                    entry.target.classList.add('counter-animation-projects');
                }
                else if (entry.isIntersecting && entry.target.className.includes('counter-countries')) {
                    entry.target.classList.add('counter-animation-countries');
                }
            });
        });

        const counters = document.querySelectorAll('.counter')
        counters.forEach(c => console.log(
            observer.observe(c)
        ))

    })
    return (
        <div className='container'>
            <div className='section-title'>
                <h2>{title}</h2>
            </div>
            <p className='text-center'>{description}</p>

            <div className='row mb-5'>
                <div className='col-4 d-flex flex-column align-items-center'>
                    <div className='counter counter-years bold'>+</div>
                    <p className='counter-content'>{years}</p>
                    <p className='text-center'>{yearsText}</p>
                </div>
                <div className='col-4 d-flex flex-column align-items-center'>
                    <div className='counter counter-projects bold'>+</div>
                    <p className='counter-content'>{projects}</p>
                    <p className='text-center'>{projectsText}</p>
                </div>
                <div className='col-4 d-flex flex-column align-items-center'>
                    <div className='counter counter-countries bold'>+</div>
                    <p className='counter-content'>{countries}</p>
                    <p className='text-center'>{countriesText}</p>
                </div>
            </div>
            <ResponsiveIFrame videoSrc={"https://www.youtube.com/embed/HSOW3apOffc"} />
        </div>
    )
}

export default QuienesSomos