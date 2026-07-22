import { Link } from "react-router-dom";

function Cards({ character }) {
  return (
   
<div style={{border: "1px solid #5e5252", borderRadius:"12px",width:"80%",marginTop:"20px",height:"67vh",boxShadow:"0 4px 12px rgba(0,0,0,0.08)"}} >
 <img src={character.image} alt={character.name} style={{width:"100%",borderRadius:"12px"}} />
             <h2 style={{marginLeft:"10px",fontSize:"16px",marginTop:"20px"}}>{character.name}</h2>
               <Link to={`/characters/${character.id}`} >
                                <button style={{padding:"10px 20px",marginLeft:"10px",marginTop:"10px"}}>
                                    View Details
                                </button>

                            </Link>

</div>

  )
}

export default Cards;