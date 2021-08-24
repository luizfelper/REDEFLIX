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
            Caixa de comentários
        </div>

        <div className="comments--usercoments">
            <div className="comments--comments">
                <ul>
                    {pessoasComentarios.map((itemAtual) => {
                        return (
                            <li>
                                <a href={`/users/${itemAtual}`} key={itemAtual}><img src={`https://github.com/${itemAtual}.png`} /></a>
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