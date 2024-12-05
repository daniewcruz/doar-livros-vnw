import Logo from "../../assets/Logo.png"
import Busca from "../../assets/busca.png"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Inicio from "../../Pages/Inicio/inicio"
import Doados from "../../Pages/Doados/doados"
import QueroDoar from "../../Pages/QueroDoar/queroDoar"
import S from "./header.module.scss"    


export default function Header() {
    return (
        <BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                <img src={Logo} alt="imagem de um livro" />
            <h1>Livros Vai na Web   </h1>
            </section>
            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/doados"}>Livros Vai na Web</Link></li>
                    <li><Link to={"/quero-doar"}>Quero doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxSearch}>
            <input className={S.boxInput} type="text" placeholder="O que você procura?"/>
            <img src={Busca} alt="imagem de lupa" />
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/doados" element={<Doados/>}/>
            <Route path="/quero-doar" element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}