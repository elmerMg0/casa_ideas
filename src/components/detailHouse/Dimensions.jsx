export function Dimensions ({dimen}){
    if(!dimen || Object.keys(dimen).length === 0)return;
    const {Sala , Baño, Patio } = dimen;
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
                </tbody>
            </table>
        </section>
    )
}