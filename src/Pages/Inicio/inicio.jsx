import S from "./inicio.module.scss"
import comunicacao from "../../assets/comunicacao.png"
import leitura from "../../assets/leitura.png"
import fornecer from "../../assets/fornecer.png"
import balanco from "../../assets/balanco.png"

export default function Inicio() {
    return(
        <main>
        <section className={S.post}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={S.devoDoar}>
            <div>
                <h2>Por que devo doar?</h2>
            </div>
            <section className={S.boxCard}>
                <article>
                    <img src={comunicacao} alt="" />
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </article>
                <article>
                    <img src={leitura} alt="" />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </article>
                <article>
                    <img src={fornecer} alt="" />
                    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </article>
                <article>
                    <img src={balanco} alt="" />
                    <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </article>
            </section>
        </section>
        </main>
    )
}