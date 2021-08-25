import React from 'react';
import './index.css'

export default function Comentarios(propriedades) {

    const userName = 'Marcos';
    const pessoasComentarios = [
      'juunegreiros',
      'omariosouto',
      'peas',
      'rafaballerini',
      'marcobrunodev',
      'felipefialho'
  ]

    return (
    <div className="comments">
        <div className="comments--title">
            <h3>Caixa de comentários</h3>
            <div className="comments--form">
                <div>
                    <form>
                        <input
                        placeholder="Nome do Github"
                        name="name"
                        aria-lavel="Nome do Github"
                        type="text" />
                    </form>
                </div>
                <div>
                    <form>
                        <input
                        placeholder="Qual o seu comentário"
                        name="coment"
                        aria-lavel="Qual o seu comentário"
                        type="text"/>
                    </form>
                </div>
            </div>

            <button>
                Adicionar comentário
            </button>

        </div>

        <div className="comments--usercoments">
            <div className="comments--comments">
                <ul>
                    {pessoasComentarios.map((itemAtual) => {
                        return (
                            <li>
                                <a href={`/users/${itemAtual}`} key={itemAtual}><img src={`https://github.com/${itemAtual}.png`} alt={itemAtual}/></a>
                                    <div className="comments--dados">
                                        <span>@{itemAtual}</span>
                                        <p>Comentário de {itemAtual}</p>
                                    </div>
                            </li>
                            )
                    })}
                </ul>
            </div>
        </div>

    </div>


    )
}