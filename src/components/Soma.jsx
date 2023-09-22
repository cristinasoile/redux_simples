import { Card } from './Card'

import React from 'react'

function Soma( props) {
  return (
    <div>
      <Card title="Soma dos Numeros" blue>
        <div className=''>

          <span>
            <span>Resultado:</span>
          <strong>{10}</strong>
        </span>
        </div>
      </Card>
    </div>
  )
}

export default Soma
