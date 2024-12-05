import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"

import S from "./footer.module.scss"

export default function Footer() {
    return (
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""><img src={facebook} alt="imagem da logo do facebook" /> </a>
                    <a href=""><img src={twitter} alt="imagem da logo do twitter" /></a>
                    <a href=""><img src={youtube} alt="imagem da logo do youtube" /></a>
                    <a href=""><img src={linkedin} alt="imagem da logo do linkedin" /></a>
                    <a href=""><img src={instagram} alt="imagem da logo do instagram" /></a>
                </nav>
            </section>
            <section className={S.boxEnd}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}