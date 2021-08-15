import logo from '../Style/logo.png'
export default function SearchBox(filter) {
  return(
    <div className="card__list__searchbox">
      <div className="card__list__searchbox__container">
        <img  className="app__list__searchbox__container__logo"src={logo} alt="Ricky and morty"></img>
        <input
          type="text"
          placeholder={filter.placeholder}
          onChange={filter.action}
        />
      
      </div>
      
    </div>
  )
}