import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const DetailsPlanets = () => {

      const {store, dispatch} = useGlobalReducer()

     const { uid } = useParams()


     useEffect(()=> {
             getSingleData()
         }, [uid])

         const [itemInfo, setItemInfo] = useState({})
         
     
         const getSingleData = async () =>{
     
             const result = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
             const data = await result.json()
             const elementInfo = data.result.properties
              setItemInfo(elementInfo)
              console.log(elementInfo)
            }

    return (
        <div className="container mt-5">
  <div className="row">
 
    <div className="col-md-4 text-center">
      <img src="https://images.tbs.com/tbs/$dyna_params/https%3A%2F%2Fi.cdn.tbs.com%2Fassets%2Fimages%2F2021%2F11%2FStarWarsIX-1600x900.jpg"  className="img-fluid rounded shadow" />
    </div>


    <div className="col-md-8">
      <h1 className="display-5">{itemInfo.name}</h1>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur dui at leo congue, quis sodales nibh condimentum. Sed accumsan metus nisi, vitae tincidunt felis placerat vitae. Vivamus mattis dui sed blandit posuere. In placerat luctus mi sed iaculis. Vestibulum enim lectus, egestas eget metus in, pulvinar pretium nisl.
      </p>
    </div>
  </div>

  <div className="row mt-5 text-center text-danger">
    <div className="col-md-2">
      <h6 className="text-uppercase">Climate</h6>
      <p>{itemInfo.climate}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Population</h6>
      <p>{itemInfo.population}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Gravity</h6>
      <p>{itemInfo.gravity}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Surface Water</h6>
      <p>{itemInfo.surface_water}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Terrain</h6>
      <p>{itemInfo.terrain}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Orbital Period</h6>
      <p>{itemInfo.orbital_period}</p>
    </div>
  </div>
</div>
    )
}