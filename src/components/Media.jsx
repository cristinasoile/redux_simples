import { Card } from './Card'

import React from 'react'

function Media( props) {
  return (
    <div>
      <Card title="Média dos Numeros" green>
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

export default Media
