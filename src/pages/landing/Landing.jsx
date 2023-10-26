import { Footer } from "../../components/footer/Footer";
import { Houses } from "../../components/houses/Houses";
import { Welcome } from "../../components/Welcome";

export function Landing (){
    return(
        <>
            <section className="content">
                <Welcome/>
                <Houses/>   
            </section>
            <Footer/>
        </>
    )
}