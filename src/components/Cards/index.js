
import React, { useState } from "react"
import { useHistory } from "react-router"
const Cards =()=>{
    const hitory = useHistory();
const [Cards,setCards]=useState([
{
    id : 0,
    name : "HTML",
    img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    desc: "HyperText Markup Language"
}

])
let history = useHistory();

const viewCardPage = (id) => {
  //console.log(id);
  history.push(`/card/${id}`);
};
const changeRoute=(id)=>{
    console.log(id)
    hitory.push('/card/${id}')
}
return <div className="cards">{
    Cards.map((item,i)=>{
      return  <div className="card" key ={item.id} onClick={()=>{changeRoute(item.id)}}>
            <h2>{item.name}</h2>
            <img src={item.img}/>
            <p>{item.desc}</p>

            </div>
    }
    )
}
</div>

}
export default Cards;    

