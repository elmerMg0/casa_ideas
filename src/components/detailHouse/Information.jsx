export function Information({info}){
    if(!info || Object.keys(info).length === 0)return;
    const { nombreTitle, titulo, descripcion} = info;    
    const valuesDescripcion = Object.values(descripcion);
    return (
        <section className="description">
            <h4 className="subtitle">Detalles del Producto</h4>
            <h4>{nombreTitle}</h4>
            <h3>{titulo}</h3>
            {
                valuesDescripcion.map(des => {
                    return( <p key={des}>{des}</p>)
                })
            }
        </section>
    )
}