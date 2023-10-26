import { useEffect, useState } from 'react'
import { CardHouse } from './CardHouse'
import './houses.css'
import housesJson from '../../data/houses.json'
export function Houses (){
    const [housesData, setHousesData] = useState ([])
    useEffect(() => {
        setHousesData(Object.values(housesJson))
    },[])
    
    return (
        <main className='container content-main'>
            <h2>Casas Prefabricadas de una planta</h2>
            <p>Hoy en día existen muchos motivos para comprar una de esas preciosas casas prefabricadas que vemos en la televisión. El uso de viviendas prefabricadas está cada vez más extendido y es normal que así sea ya que los precios de las casas prefabricadas suelen ser muy inferiores a los de las casas convencionales.
            </p>
            
            <h4>Ventajas de las Viviendas Prefabicadas de Una Planta</h4>

            <h5>Casas Prefabricadas Precios</h5>
            <p>
            Una de las ventajas de las casas prefabricadas es lo económicas que son y de hecho muchas veces se utilizan como viviendas sociales vivienda pública por su ajustado coste de edificación. No hay que olvidar el bajo coste emocional que supone una de estas casas olvídate del estrés que te dan las interminables obras todos los retrasos que conllevan y los problemas propios de una fabricación convencional que suelen significar también un gran aumento del presupuesto inicial. Por lo tanto, queda claro que las casas prefabricadas económicas son una buena opción para construir viviendas prefabricadas.
            </p>
            <div className='content-cards'>
            {
                housesData.length > 0 ? housesData.map(house => <CardHouse key={house.nombre} house={house}/>) : 'NO exiten'
            }
            </div>

            <h5 id='ventajas'>Menos coste de tiempo</h5>
            <p>
            Con las casas prefabricadas puedes olvidarte de los años de obras, ya que pueden estar listas en cuestión de meses o incluso semanas. Esto las hace muy valiosas, especialmente si estás de alquiler o necesitas una casa de forma inminente.

Sin lugar a duda es la mayor de las ventajas que tienen las casas prefabricadas de una planta económicas, ahorra muchísimo tiempo hay que tener en cuenta que generalmente se construyen con módulos que solo hay que montar y ensamblar en el terrero. Para hacernos una idea, una casa de unos 100 metros podría tardar una semana aproximadamente está completamente montada. Esto es ideal para el caso de querer construir de manera efectiva y rápida vivienda pública o cualquier tipo de viviendas sociales
            </p>
            <h5>
            Adaptabilidad
            </h5>

            <p>
            Otra de las ventajas es que se adaptan perfectamente a tus necesidades y gustos punto con las casas prefabricadas modulares podrás tener la casa de tus sueños por muy poco dinero y será exactamente como la había soñado.

            </p>            
            <h5>
            Diseño único
            </h5>
            <p>Aparte de la distribución interior a tu medida, su diseño también será único ya que al ser algo tan novedoso se ven muy pocas y destacará entre el resto de casas de la zona. Esto es algo que convierte las viviendas prefabricadas en una gran opción para aquellos que desean un diseño único y especial</p>

            <h5>En cualquier lugar</h5>

            <p>
            Las casas prefabricadas pueden hacerse donde tú quieras no hay límite para ello ya que requieren de muy poco para ser montadas y encima se montan de manera muy rápida es la opción más económica si necesitas una casa a tu medida y rápido.

Es por este motivo por el que generalmente se usan estas casas prefabricadas de una planta como vivienda social o vivienda pública, ya que permiten incluso en zonas complicadas un montaje sencillo y rápido para dar servicio a la mayor cantidad de gente posible.
            </p>

            <h5>Alta calidad y prestaciones</h5>
            <p>
            La calidad no es un factor que se deje de lado cuando hablamos de casas prefabricadas de una planta normalmente son calidades muy altas y diseños muy exclusivos, totalmente aisladas y muy acogedoras. Olvídate del típico diseño de casitas de madera del bosque. Estamos ante diseños con materiales de alta calidad y muy exclusivos, pero a un precio económico.

            </p>
            <h5>Sostenibilidad y eficiencia</h5>
            <p>
            Aparte de todo esto las casas prefabricadas de una planta son sostenibles y eficientes no por ser modular sino porque este tipo de edificios hace una mayor gestión mejor gestión de los residuos de obra un menor impacto en el lugar de implantación y se estiran mejor la energía a esto se juntan la correcta elección de los materiales y los sistemas de climatización de la casa que generalmente son buenos movimientos acústicos y térmicos y un eficaz tratamiento del agua lo que minimiza el efecto de la huella ecológica.
            </p>

            <h5>Posibilidad de ampliación y expansión</h5>
            <p>
            Otra de las ventajas es la posibilidad de crecimiento y ampliación. ¿Te imaginas puedes añadir habitaciones si lo necesitas? Con este tipo de edificación es posible. Si tu familia aumenta o tus necesidades lo requieren, puedes montar una habitación extra junto tu casa y completamente integrada en ella.
            </p>
        </main> 
    )
} 