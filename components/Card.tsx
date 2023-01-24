import React from 'react'

interface Props {
  data: any,
  id: string
}


export const Card = ({ data, id }: Props) => {
  return (
    <div key={ id }>
      {JSON.stringify(data)}
    </div>
  )
}
