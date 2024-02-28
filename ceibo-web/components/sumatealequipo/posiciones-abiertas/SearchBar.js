import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { LOCATION,WORK_MODALITY, WORK_AREA } from '../../../utils/busquedasVigentes.utils';


const SearchBar = () => {

    const {t} = useTranslation('common')

    const customizeSearch = t("customizeSearch")
    const modalityTxt = t("modality")
    const workAreaTxt = t("workArea")
    const locationTxt = t("location")
    const consultingTeam = t("consultingTeam")
    const specialistCrew = t("specialistCrew")
    const data = t("data")
    const programming = t("programming")
    const consultancy = t("consultancy")
    const growthMarketing = t("growthMarketing")
    const operationalExcellence = t("operationalExcellence")
    const argentina = t("argentina")
    const paraguay = t("paraguay")
    const remote = t("remote")
    const search = t("search")

    const [modality, setModality] = useState('');
    const [workArea, setWorkArea] = useState('');
    const [location, setLocation] = useState('');

    const router = useRouter()

    useEffect(()=>{
        if(router.query["modality"]) setModality(router.query.modality)
        if(router.query["workArea"]) setWorkArea(router.query.workArea)
        if(router.query["location"]) setLocation(router.query.location)
    },[router.query])

    const handleSearch = () => {
        const searchParams = { modality, workArea, location };
        const params = new URLSearchParams()
        
        for (const key in searchParams) {
            if (searchParams[key]) {
                params.append(key, searchParams[key]);
            }
        }
        router.push({
            pathname: router.pathname,
            search: params.toString(),
          });
    };


    return (
            <div className="row search-container mb-5 px-2 px-md-5">
                <div className='col-12 mb-3'>
                    <h6>{customizeSearch}</h6>
                </div>
                <div className='col-6 col-md-3 mb-2 mb-md-0'>
                    <select className={`form-select ${modality==""?'bg-grey':""}`} value={modality} onChange={(e) => setModality(e.target.value)}>
                        <option value="" className='bg-white'>{modalityTxt}</option>
                        <option value={WORK_MODALITY.TEAM} className='bg-white'>{consultingTeam}</option>
                        <option value={WORK_MODALITY.CREW} className='bg-white'>{specialistCrew}</option>
                    </select>

                </div>
                <div className='col-6 col-md-3 mb-2 mb-md-0'>
                    <select className={`form-select ${workArea==""?'bg-grey':""}`} value={workArea} onChange={(e) => setWorkArea(e.target.value)}>
                        <option value="">{workAreaTxt}</option>
                        <option value={WORK_AREA.DATA} className='bg-white'>{data}</option>
                        <option value={WORK_AREA.PROGRAMMING} className='bg-white'>{programming}</option>
                        <option value={WORK_AREA.CONSULTANCY} className='bg-white'>{consultancy}</option>
                        <option value={WORK_AREA.GROWTH} className='bg-white'>{growthMarketing}</option>
                        <option value={WORK_AREA.EX_OP} className='bg-white'>{operationalExcellence}</option>
                    </select>

                </div>
                <div className='col-6 col-md-3'>
                    <select className={`form-select ${location==""?'bg-grey':""}`} value={location} onChange={(e) => setLocation(e.target.value)}>
                        <option value="" className='bg-white'>{locationTxt}</option>
                        <option value={LOCATION.ARG} className='bg-white'>{argentina}</option>
                        <option value={LOCATION.PY} className='bg-white'>{paraguay}</option>
                        <option value={LOCATION.REMOTE} className='bg-white'>{remote}</option>
                    </select>

                </div>
                <div className='col-6 col-md-3'>
                    <button className='btn btn-primary w-100 py-2' onClick={handleSearch}>{search}</button>
                </div>
            </div>
    );
};

export default SearchBar;