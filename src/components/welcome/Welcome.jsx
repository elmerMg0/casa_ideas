import './welcome.css'
export function Welcome (){

    const handleContact = () => {
        window.open(`https://api.whatsapp.com/send?phone=59174369570&text=Hola,%20más%20información%20por%20favor.`, `_blank`)
    }
    return (
    <section className='welcome'>
        <div className='welcome-text'>
         {/*    <h1>Explora la revolución en casas prefabricadas hoy.</h1> */}
            <h1>Adéntrate en el mundo de las casas prefabricadas y descubre cómo la  <span>innovación</span> arquitectónica redefine el <span>hogar</span> del futuro.</h1>
            <button onClick={handleContact}>Nosotros</button>
        </div>
    </section>
)
}