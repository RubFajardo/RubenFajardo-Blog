import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const DetailsP = () => {

      const {store, dispatch} = useGlobalReducer()

     const { uid } = useParams()


     useEffect(()=> {
             getSingleData()
         }, [uid])

         const [itemInfo, setItemInfo] = useState({})
         
     
         const getSingleData = async () =>{
     
             const result = await fetch(`https://www.swapi.tech/api/people/${uid}`);
             const data = await result.json()
             const elementInfo = data.result.properties
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
      <h6 className="text-uppercase">Height</h6>
      <p>{itemInfo.height}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Mass</h6>
      <p>{itemInfo.mass}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Hair Color</h6>
      <p>{itemInfo.hair_color}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Eye Color</h6>
      <p>{itemInfo.eye_color}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Birth Year</h6>
      <p>{itemInfo.birth_year}</p>
    </div>
    <div className="col-md-2">
      <h6 className="text-uppercase">Gender</h6>
      <p>{itemInfo.gender}</p>
    </div>
  </div>
</div>
    )
}