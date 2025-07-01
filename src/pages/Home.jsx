import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect(()=> {
        getData()
    }, [])

    const getData = async () =>{

        const result1 = await fetch("https://www.swapi.tech/api/people/");
        const data1 = await result1.json()
        const people = data1.results.map(item => ({...item, type: 'people'}));

        const result2 = await fetch("https://www.swapi.tech/api/planets/");
        const data2 = await result2.json()
        console.log(data2.results)
        const planets = data2.results.map(item => ({...item, type: 'planets'}));

        const result3 = await fetch("https://www.swapi.tech/api/vehicles/");
        const data3 = await result3.json()
        console.log(data3.results)
        const vehicles = data3.results.map(item => ({...item, type: 'vehicles'}));

        const payloadData = {
          people: people,
          planets: planets,
          vehicles: vehicles
        }

        dispatch({ type: "import", payload: payloadData })
    }

    

    const peopleHTML = store.people.map((person, index) => {

      return <div className="card me-4 scroll" key={index}>
  <img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{person.name}</h5>
    <Link className="btn btn-primary" to={`/Details/people/${person.uid}`}>Learn More!</Link> <button type="button"  onClick={() => {dispatch({ type: "add_favorite", payload: person })}} className="btn btn-warning"><i className="fa-regular fa-heart"></i></button>
  </div>
</div>
    })

    const planetsHTML = store.planets.map((planets, index) => {
      return <div className="card me-4 scroll" key={index}>
  <img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{planets.name}</h5>
    <Link className="btn btn-primary" to={`/Details/planets/${planets.uid}`}>Learn More!</Link> <button type="button" onClick={() => {dispatch({ type: "add_favorite", payload: planets })}} className="btn btn-warning"><i className="fa-regular fa-heart"></i></button>
  </div>
</div>
    })

    const vehiclesHTML = store.vehicles.map((vehicles, index) => {
      return <div className="card me-4 scroll" key={index}>
  <img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{vehicles.name}</h5>
    <Link className="btn btn-primary" to={`/Details/vehicles/${vehicles.uid}`}>Learn More!</Link> <button type="button" onClick={() => {dispatch({ type: "add_favorite", payload: vehicles })}} className="btn btn-warning"><i className="fa-regular fa-heart"></i></button>
  </div>
</div>
    })

	return (
    <div className="container mt-5">
  <h3 className='text-danger mb-4'>Characters</h3>
  <div className="overflow-auto">
    <div className="d-flex flex-row flex-nowrap">
{peopleHTML}
    </div>
  </div>
  <h3 className='text-danger mt-5 mb-4'>Planets</h3>
  <div className="overflow-auto">
    <div className="d-flex flex-row flex-nowrap">
{planetsHTML}
    </div>
  </div>
  <h3 className='text-danger mt-5 mb-4'>Vehicles</h3>
  <div className="overflow-auto">
    <div className="d-flex flex-row flex-nowrap">
{vehiclesHTML}
    </div>
  </div>
</div>
)}; 