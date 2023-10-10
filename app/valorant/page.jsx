"use client"
import React, { useEffect, useState } from 'react'
import agentes from '../data/agentes'
import Agente from '../components/agente/Agente'


function page() {
    const [agentesApi, setAgentesApi]= useState(null)
    console.log(agentes);

    useEffect(() => {
        const agentesFetch = async() => {
                const dados = await agentes();
                setAgentesApi(dados)
                console.log(dados);
        }
        agentesFetch();
    }, [])
  return (
    <div>
    <Agente agentesApi={agentesApi}/>
    <p>lindo</p></div>
  )
}
export default page;