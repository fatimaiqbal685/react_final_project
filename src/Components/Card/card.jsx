import { Link } from "react-router-dom";
import { Badge,Row ,Col} from "antd";

function Cards({ character }) {
  const statusColor = {
    Alive:"success",
    Dead:"error",
    unknown:"default"
  }
  return (
   
<div style={{border: "1px solid #5e5252", borderRadius:"12px",width:"80%",marginTop:"20px",height:"70vh"}} >
 <img src={character.image} alt={character.name} style={{width:"100%",borderRadius:"12px"}} />
     <Row style={{display:"flex",alignItems:"center",gap:"8px",padding:"10px"}}>
    
       <Badge status={statusColor[character.status]} />

             <h2 style={{marginLeft:"10px",fontSize:"16px",marginTop:"20px"}}>{character.name}</h2>
            
             </Row>
               <Link to={`/characters/${character.id}`} >
                                <button style={{padding:"10px 20px",marginLeft:"10px",marginTop:"10px"}}>
                                    View Details
                                </button>

                            </Link>

</div>

  )
}

export default Cards;