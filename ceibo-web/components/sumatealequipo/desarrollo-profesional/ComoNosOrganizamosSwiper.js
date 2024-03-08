import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'

const ComoNosOrganizamosSwiper = () => {

    const { t } = useTranslation("common")

    const consultants = t("consultants")
    const specialists = t("specialists")
    const uniteAlSpecialist = t("uniteAlSpecialist");
    const uniteAlConsulting = t("uniteAlConsulting");
    const specialistCrewTxt = t("specialistCrewTxt")
    const consultingTeamTxt = t("consultingTeamTxt")

    const roles = {
        consultant: "Consultores",
        specialist: "Especialistas"
    }

    const [role, setRole] = useState(roles.consultant)

    return (
        <>
            <div className="bottom-line mb-2 mb-md-5 mt-4">
                <button className={role === roles.consultant ? 'selected-item me-4' : 'unselected-item me-4'} onClick={() => setRole(roles.consultant)}>{consultants}</button>
                <button className={role === roles.specialist ? 'selected-item' : 'unselected-item'} onClick={() => setRole(roles.specialist)} >{specialists}</button>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <div style={{ minHeight: '75%' }}>

                        <p>{role == roles.specialist ? specialistCrewTxt : consultingTeamTxt}</p>
                    </div>
                    <div className='mt-3 mt-md-0 d-flex justify-content-center justify-content-md-start'>
                        <Link href="/sumate-al-equipo/vida-en-ceibo">
                            <a className="default-btn-two" title={role == roles.specialist ? uniteAlSpecialist : uniteAlConsulting}>
                                {role == roles.specialist ? uniteAlSpecialist : uniteAlConsulting}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='d-none d-md-flex justify-content-md-end col-md-5'>
                    <Image
                        src={role == roles.specialist ? "/images-ceibo/sumatealequipo/overview/specialist-crew.png" : "/images-ceibo/sumatealequipo/overview/consulting-team.png"}
                        width={400}
                        height={266}
                        layout="intrinsic"
                        alt={role == roles.specialist ? specialists : consultants}
                    />
                </div>
            </div>

        </>
    )
}

export default ComoNosOrganizamosSwiper