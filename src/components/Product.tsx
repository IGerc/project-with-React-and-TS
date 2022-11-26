// import React from 'react'
import {IProduct} from '../moduls'
import React, {useState} from 'react'
interface ProductProps{
    product: IProduct
}

export function Product(props: ProductProps) {
  let [details, setDetails] = useState(false)
  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'

  const btnClasses = ['pry-2 px-4 border', btnBgClassName ]


    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={props.product.image} className='w-1/6' alt={props.product.title}/>
            <p>{props.product.title}!</p>
            <p className='font-bold'>{props.product.price}</p>
             <button className={btnClasses.join(' ')}
             onClick={() => setDetails(prev => !prev)}
             >
                {details ? 'Скрыть детали' : 'Показать детали'}
             </button>


             {details && <div>
                <p>{props.product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{props.product.rating.rate}</span></p>
             </div>}



            </div>
    )
}