'use client'
import style from './agente.module.css'

const Agente = ({ agentesApi }) => {
    return (
        <div>
            <h1>API Data</h1>

            {
                agentesApi ? (
                    agentesApi.data.map((Agente) => (
                        <div className={style.div}>
                            <h1>{Agente.displayName}</h1>
                            <img src={Agente.fullPortrait} alt={Agente.uuid} width={256} height={256} />

                            <p>{Agente.description}</p>
                            <h1>Skills:</h1>

                            <div className={style.div2}>
                                {
                                    Agente.abilities.map((ability) => (
                                        <div key={ability.uuid}>
                                            <h2>{ability.displayName}</h2>
                                            <img src={ability.displayIconSmall} alt={ability.uuid} width={64} height={64} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                ) : (
                    <p>carregando</p>
                )
            }
        </div>
    )
}

export default Agente;