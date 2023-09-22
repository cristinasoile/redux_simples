import { Card } from './Card'

import React from 'react'

function Sorteio( props) {
  return (
    <div>
      <Card title="Sorteio de um Numero" purple>
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

export default Sorteio;
