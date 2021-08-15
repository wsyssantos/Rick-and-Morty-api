import {Link} from 'react-router-dom';


export default function Card({ personagem }){                          /* Toda vez que o Card for chamado, será passado informações para ele */
                                                             /* Para reter e alterar as informações usamos o useState */
    return(
        
        <div className="card">
            <Link className="card__link"  to={{pathname:"/sobre/" + personagem.id,
            state: personagem}}>{/* to == rota para...(#Colocar 2{}quando há mais de uma informação) */}
            <div >
                { <img className="card__image" src={personagem.image} alt={personagem.name}/>}{/* conteudo atribuido a variavel de estado(o estado garante que as informações serão transferidas) */}
            </div>
            </Link>            
            <div className="card__info">
                <h2 className="card__info__id"> <span>Character: </span>{ personagem.id}</h2>
                <h2 className="card__info__name"><span>Name:</span> {personagem.name}</h2>                
                
            </div>
        </div>
        
        
    )
}