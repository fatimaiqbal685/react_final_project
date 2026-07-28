import { useParams, Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { useSelector } from "react-redux";
import { fetchSingleCharacter } from "../../app/features/characterSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectRecentVisitedProfile} from "../../app/features/characterSlice";
import Heading from "../../Components/Heading/heading";
import { Typography } from 'antd';

const { Title, Paragraph, Text} = Typography;

function Profile() {

    // const { id } = useParams();
    // const character = characters.find((character) => character.id === parseInt(id));

 const { id } = useParams();
const dispatch = useDispatch()
const singleCharacter = useSelector((state) => state.character.singleCharacter)
const status = useSelector((state) => state.character.status)
useEffect(() => {
  dispatch(fetchSingleCharacter(id));
}, [dispatch, id]);


useEffect(() => {
    if (singleCharacter?.id) {
      console.log("dispatching to recentprofile",singleCharacter.name)
      dispatch(selectRecentVisitedProfile(singleCharacter));
    }
  }, [singleCharacter,dispatch]);

    return (
<>
<Row   style={{marginLeft:"560px", borderRadius:"12px",width:"20vw",marginTop:"20px",height:"83vh",boxShadow:"0 4px 12px rgba(0,0,0,0.08)"}}>
           <Col>
            <Link to="/characters">
                <Button style={{ padding: "10px 40px", marginBottom: "10px",marginTop: "10px",marginLeft:"50px"  }}>
                    Back To Characters
                </Button>
            </Link>
        
            <Row>
               
                 <img src={singleCharacter?.image} alt={singleCharacter?.name} style={{borderRadius:"50%"}} />
             
            </Row>
               <Row style={{marginTop:"10px", marginLeft:"10px"}}>
              
                Status: {singleCharacter?.status}
            
               </Row>

                <Row style={{marginTop:"10px", marginLeft:"10px"}}>
             
                Species:   {singleCharacter?.species}
              
               </Row>

                {/* <Row style={{marginTop:"10px", marginLeft:"10px"}}>
              
                Gender: {singleCharacter?.gender}
             
               </Row> */}

               <Row justify={"center"}>
        <Col span={3}>
          <Heading level={4} title="Gender:" />
        </Col>
        <Col span={3} offset={3}>
          <Typography title={singleCharacter?.gender} />
        </Col>
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