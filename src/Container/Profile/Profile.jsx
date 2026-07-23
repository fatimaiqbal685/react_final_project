import { useParams, Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { useSelector } from "react-redux";
import { fetchSingleCharacter } from "../../app/features/characterSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function Profile({ characters }) {

    // const { id } = useParams();
    // const character = characters.find((character) => character.id === parseInt(id));

 const { id } = useParams();
const dispatch = useDispatch()
const singleCharacter = useSelector((state) => state.character.singleCharacter)
const status = useSelector((state) => state.character.status)
useEffect(() => {
  dispatch(fetchSingleCharacter(id));
}, [dispatch, id]);

    return (
<>
<Row   style={{border: "1px solid #c5baba",marginLeft:"560px", borderRadius:"12px",width:"20vw",marginTop:"20px",height:"83vh",boxShadow:"0 4px 12px rgba(0,0,0,0.08)"}}>
           <Col>
            <Link to={`/`} >
                <Button style={{ padding: "10px 20px", marginBottom: "10px",marginTop: "10px",marginLeft:"20px"  }}>
                    Back To Home
                </Button>

            </Link>
           
         


            <Row>
               
                 <img src={singleCharacter?.image} alt={singleCharacter?.name} style={{ width: "100%",borderRadius:"10%"}} />
             
            </Row>
               <Row style={{marginTop:"10px", marginLeft:"10px"}}>
              
                Status: {singleCharacter?.status}
            
               </Row>

                <Row style={{marginTop:"10px", marginLeft:"10px"}}>
             
                Species:   {singleCharacter?.species}
              
               </Row>

                <Row style={{marginTop:"10px", marginLeft:"10px"}}>
              
                Gender: {singleCharacter?.gender}
             
               </Row>

                <Row style={{marginTop:"10px", marginLeft:"10px"}}>
             
                Origin: {singleCharacter?.origin.name}
              
               </Row>

                <Row style={{marginTop:"10px", marginLeft:"10px"}}>
                
                Location: {singleCharacter?.location.name}
               
               </Row>
              </Col>
                 </Row>
               
              
               

</>
    )
}

export default Profile;