import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const DetailsC = () => {

      const {store, dispatch} = useGlobalReducer()

     const { uid } = useParams()


     useEffect(()=> {
             getSingleData()
         }, [uid])

         const [itemInfo, setItemInfo] = useState({})
         
     
         const getSingleData = async () =>{
     
             const result = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
             const data = await result.json()
             const elementInfo = data.result.properties
             console.log(elementInfo)
              setItemInfo(elementInfo)
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
      <h6 className="text-uppercase">Cargo Capacity</h6>
      <p>{itemInfo.cargo_capacity}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Cost in Credits</h6>
      <p>{itemInfo.cost_in_credits}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Crew</h6>
      <p>{itemInfo.crew}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Manufacturer</h6>
      <p>{itemInfo.manufacturer}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Model</h6>
      <p>{itemInfo.model}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Vehicle Class</h6>
      <p>{itemInfo.vehicle_class}</p>
    </div>
  </div>
</div>
    )
}