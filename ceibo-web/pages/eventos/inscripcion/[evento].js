import React from 'react'
import NavbarFive from '../../../components/Layouts/NavbarFive'
import Footer from '../../../components/Layouts/Footer'
import PageBanner from '../../../components/Common/PageBanner'
import eventosInscripcion from '../../../utils/eventosInscripcion.json'
import Form from "../../../components/Events/eventForm";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'

const Inscripcion = () => {

    const initialState = {}
    const [event , setEvent] = useState(initialState)

    const router = useRouter()
    const eventParam= router.query.evento

    const foundEvent = eventosInscripcion.find((e)=> e['path-url'] === eventParam && e.isActive)
    useEffect(()=>{
        if (foundEvent){
            setEvent(foundEvent)
        } else {
            router.push("/404-not-found")
        }

    },[])  

    return (
        <>
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.desc} />
            </Head>
            <NavbarFive />
            <PageBanner
                pageTitle={event.title}
                subtitle={event.desc}
                BGImage={event.imgBanner}
            />
            <div className='py-5'>
                <Form eventImageSource={event.img} eventContactList={event.contactList} />
            </div>

            <Footer />
        </>
    )
}

export default Inscripcion