export function Information({info}){
    if(!info || Object.keys(info).length === 0)return;
    console.log(info)
    const { nombreTitle, titulo, descripcion} = info;    
    return (
        <section className="description">
            <h4>{nombreTitle}</h4>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </section>
    )
}