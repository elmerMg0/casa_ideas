export function Dimensions ({dimen}){
    if(!dimen || Object.keys(dimen).length === 0)return;
    const {Sala , Baño, Patio, Cocina, Dormitorio, Entrada } = dimen;
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Dimensiones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sala </td>
                        <td>{ Sala}</td>
                    </tr>
                    <tr>
                        <td>Bano </td>
                        <td>{Baño}</td>
                    </tr>
                    <tr>
                        <td>Patio</td>
                        <td>{ Patio}</td>
                    </tr>
                    {
                        Cocina > 0 &&  <tr>
                        <td>Cocina</td>
                        <td>{ Cocina}</td>
                    </tr>
                    }
                    {
                        Dormitorio?.length > 0 &&  <tr>
                        <td>Dormitorio</td>
                        <td>{ Dormitorio}</td>
                    </tr>
                    }
                     {
                        Entrada &&  
                    <tr>
                        <td>Entrada</td>
                        <td>{ Entrada}</td>
                    </tr>
                    }
                    
                   
                </tbody>
            </table>
        </section>
    )
}