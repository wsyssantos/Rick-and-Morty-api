import { useState, useEffect, useCallback } from 'react';

function getEpisodeIds(personagem) {
  return personagem.episode.map((ep) => {
    const lastIndex = ep.lastIndexOf("/")
    return ep.substring(lastIndex + 1)
  })
}

function fixResult(result) {
  if(result instanceof Array) {
    return result;
  } else {
    return [result];
  }
}

export default function Episode(props){
    const personagem = props.personagem
    const [episode, setEpisode] = useState([]);     
    const [loading,setLoading] = useState(false);     
    
    const getData = () => {
      const episodeIds = getEpisodeIds(personagem)
      const str = episodeIds.join(",")
      fetch("https://rickandmortyapi.com/api/episode/" + str)
        .then(res => res.json())       
        .then( (result) => {   
          setEpisode(fixResult(result)) 
        })
        .catch((error) => {        
          console.log(error)
          setLoading(true)          
        });
      };
      
     useEffect(() => {   
      getData();
    }, [])
     
   
    /* let id = ('0000' + 'avatar' + personagem.id).slice(-4); */
    
    return(
    
      <div className="episode"> 
        <div className="episode__folha">  
           <h2><span>Character: </span>{personagem.name}</h2> 
          <img className="episode__folha__img"src={personagem.image} alt={personagem.name}/>        
          <h3 className="episode__folha__h3"><span>Status: </span>{personagem.status}</h3>
          <h3 className="episode__folha__h3"><span>Location: </span>{ personagem.location.name}</h3>
          <h3 className="episode__folha__h3"><span>Species: </span>{ personagem.species}</h3>
          <h3 className="episode__folha__h3"><span>Gender: </span>{ personagem.gender}</h3>  
          <h3 className="episode__folha__h3"><span>Origin: </span>{ personagem.origin.name}</h3>
        
          <div className="episode__folha__furoDaFolha"></div>   
          <div className="episode__folha__rasgadoDaFolha"></div>
        </div >             
          <h1 className="episode__folha__legend"> Appearences in Episodes: </h1>           
                  {
                  loading ? (   
                      <h1>teste</h1>
                  ) : (      
                              
                      episode.map( (episodio) => ( 
                        <div episode={episodio} key={episodio}>
                          <form>
                            <label className="episodio__label">{episodio.name} </label>
                          </form>  
                        </div>                        
                  )
                      ))
                  }        
    </div> 
    )  
}