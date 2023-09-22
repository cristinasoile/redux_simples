import { Card } from './Card'
import './Intervalo.css'
import React from 'react'

function Intervalo( props) {
  return (
    <div>
      <Card title="Média dos Numeros" red>
        <div className='Intervalo'>

          <span>
            <span>Resultado:</span>
          <strong>5</strong>
          {/* <input type="number" value={props.min} onChange={e => props.onMinChanged(+e.target.value)} /> */}
          <input type="number" value={0} readOnly/>
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10} readOnly/>
        </span>
        </div>
      </Card>
    </div>
  )
}

export default Intervalo
