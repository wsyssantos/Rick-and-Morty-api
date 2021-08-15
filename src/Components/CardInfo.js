import { Link } from "react-router-dom";
import Episode from "./Episode";


export default function CardInfo(props){
    const personagem = props.location.state
    
  
    return(
        <div className="info">
            <div className="info__back">
                <Link to="/">Back</Link> {/* Link para voltar a home('/') */}
            </div>                
            <div className='info__body'>
                <div className="info__body__border">    
                    <Episode personagem={personagem}/>                   
                </div> 
            </div>  
        </div>  
    )   
}