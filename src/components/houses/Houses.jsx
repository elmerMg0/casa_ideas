import { useEffect, useState } from 'react'
import { CardHouse } from './CardHouse'
import './houses.css'
import housesJson from '../../data/houses.json'
export function Houses (){
    const [housesData, setHousesData] = useState ([])
    useEffect(() => {
        console.log(Object.values(housesJson))
        setHousesData(Object.values(housesJson))
    },[])
    
    return (
        <main>
            <h4> TItulo and description</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem beatae eaque optio hic reiciendis. Distinctio veniam, consequuntur quis corrupti voluptates eaque tenetur numquam at nemo molestiae fugit facilis, suscipit earum!
            Earum soluta dolores nihil eum non, deserunt fugit unde quas facere perferendis ipsa totam autem delectus voluptatibus laudantium iusto, ipsum voluptatem et rem pariatur repudiandae distinctio fuga! Eos, est sed!
            Mollitia aliquam minus eum! Neque, consectetur distinctio. Quo, autem officiis officia porro quasi corporis itaque ex minima beatae praesentium optio sunt consectetur repudiandae. Dolore architecto hic excepturi, cum eum repellendus!
            </p>
            {
                housesData.length > 0 ? housesData.map(house => <CardHouse key={house.nombre} house={house}/>) : 'NO exiten'
            }
        </main>
    )
} 