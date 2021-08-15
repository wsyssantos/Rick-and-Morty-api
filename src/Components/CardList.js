import Card from '../Components/Card';
import { useState, useEffect } from 'react';
import  SearchBox  from '../Components/SearchBox';


export default function CardList(){

    const [personagens, setPersonagens] = useState([]);     /* [] como parametro pois a informação recebida é um vetor de objetos */
    const [loading,setLoading] = useState(false);       /* Quando o CardList aparecer na tela, inicia como false */
    const [filter, setFilter] = useState([]);
    const [proximaPagina, setProximaPagina] = useState(null); 

    const getData = (url) => {
      if(url != null) {
        fetch(url)
        .then(res => res.json())        /* then(então) recebe um func que vai pegar a informaçao e transforma-la em json */
        .then( (result) => {           /* Depois de converter para json, atribua as informações em set#.result é o atributo do objeto  */
          setPersonagens(result.results)       /* results pq é nele que constam as informações */
          setFilter(result.results)
          setProximaPagina(result.info.next)
          setLoading(false)
        })
        .catch((error) => {         /* Para possiveis erros durante o fetch Boas praticas */
          console.log(error)
          setLoading(true)          /* loading passa a ser verdadeiro */
        })
      }
     };
     /* 'e' de evento */
     /*  */
     const filterPersonagens = (e) => {
      const filtered = filter.filter(personagem => personagem.name.toLowerCase().includes(e.target.value.toLowerCase()));/*(item.name.includes) Verifica se o item é igual/incluida ao valor digitado na caixa o e tem o valor digitado no input */
      setPersonagens(filtered)/* Altera o estado para que apareça o pokemon filtrado na tela */
    }
    
     useEffect(() => {         /* Para que faça a renderização apenas uma vez  */
       getData("https://rickandmortyapi.com/api/character");
     }, [])

    return(
        <>           
          <SearchBox placeholder="Buscar personagem..." action={filterPersonagens}></SearchBox> 
          
          <div className='card__list'> {                      /* TODO MAP USAR UMA KEY map-para cada item dentro do array faça... Usamos () para poder retornar uma expressão */}
            {
            loading ? (                                    /* Quando loading for verdadeiro (estiver com erro) Mostre Card vazio na tela */
                <Card/>
            ) : (                                         /*  loading sendo false entre no map, para caminhar os elementos e construir os cards  */
                personagens.map( (personagem) => ( 
                    <Card personagem={personagem} key={personagem.name} 
                    />
            )
                ))
            }
                    
          </div>   
        </> 
        )  
}