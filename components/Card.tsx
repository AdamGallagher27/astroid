import React from 'react'

interface Props {
  data: any,
  id: string
}

const imgArray: string[] = [
  'https://images.unsplash.com/photo-1469980098053-382eb10ba017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1605896252314-abb8e71b68d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80',
  'https://images.unsplash.com/photo-1637079376063-170451e71031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80',
  'https://images.unsplash.com/photo-1534190938029-2d03c3bec5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  
] 

const randomAstroidImg = ( imgArr: Array<string> ): string => {
  return imgArr[Math.floor(Math.random() * imgArr.length)];
}


export const Card = ({ data, id }: Props) => {
  return (
    <div className='bg-slate-100 ' key={id}>
      <img className='object-cover rounded' src={randomAstroidImg(imgArray)} alt="picture of an asteroid" />
      <div className='p-3'>
        <h3 className='text-lg'>Name = {data.name}</h3>
        <p>Diameter = {data.estimated_diameter.meters.estimated_diameter_max
        } Metres</p>
        <p> Close Approach Date = { data.close_approach_data[0].close_approach_date_full
        }</p>
        <p>Miss Distance (KM) = {data.close_approach_data[0].miss_distance.kilometers}</p>
        <p>Velocity (KPH) = {data.close_approach_data[0].relative_velocity.kilometers_per_hour}</p>
      </div>
    </div>
  )
}
