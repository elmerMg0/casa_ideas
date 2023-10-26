import './formcontact.css'
export function FormContact (){
    return( 
        <div className="container">
        <h1>Contacto</h1>
        <form>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required/>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required/>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
    )
}