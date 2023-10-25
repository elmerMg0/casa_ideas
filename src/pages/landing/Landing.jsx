import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Houses } from "../../components/houses/Houses";

export function Landing (){
    return(
        <>
            <section className="content">
                <Header/>
                <Houses/>   
            </section>
            <Footer/>
        </>
    )
}