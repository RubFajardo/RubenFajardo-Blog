import { Link, Navigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {

	const {store, dispatch} = useGlobalReducer()
	const navigate = useNavigate();

	const favLength = store.favorites.length

	const favoritesHTML = store.favorites.map((favorite, index) => {
		const handleClick = () => {
		if (favorite.type == 'people') {
			navigate(`/Details/people/${favorite.uid}`)
		}
		else if (favorite.type == 'planets') {
			navigate(`/Details/planets/${favorite.uid}`)
		}
		else {
			navigate(`/Details/vehicles/${favorite.uid}`)}
	}

		return <div  key={index} className="d-flex"><a onClick={handleClick} className="dropdown-item">{favorite.name}</a> <span onClick={() => dispatch({ type: "remove_favorite", payload: index })}><i className="fa-solid fa-trash me-3 mt-2 text-danger"></i></span></div>
	})

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" className="logo"></img>
				</Link>
				<div className="ml-auto">
					<div className="dropdown show">
  <a className="btn btn-primary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Favorites <span className="bg-secondary text-white p-2 rounded">{favLength}</span>
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    {store.favorites.length === 0 ? (
  <span className="dropdown-item text-muted">No favorites</span>
) : (
  favoritesHTML
)}
  </div>
</div>
				</div>
			</div>
		</nav>
	);
};