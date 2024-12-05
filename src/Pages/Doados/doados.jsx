import S from "./doados.module.scss"
import livro from "../../assets/livroProtagonista.png"
export default function Doados() {
    return (
       <section className={S.boxDoados}>
        <h2>Livros Doados</h2>
        <section className={S.boxCard}>
            <article>
                <img src={livro} alt=" imagem de livro que se chama o protagonista" />
                
                <h3>O Protagonista</h3>
                <p>Susanne Andrade
                </p>
                <p>Ficção</p>
                
            </article>
        </section>
       </section>
    )
}