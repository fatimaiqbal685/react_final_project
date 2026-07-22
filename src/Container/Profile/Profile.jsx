import { useParams, Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
function Profile({ characters }) {

    const { id } = useParams();
    const character = characters.find((character) => character.id === parseInt(id));

    return (

        <Row gutter={[16, 12]} style={{ border: "1px solid #5e5252", borderRadius: "12px", width: "20%", marginTop: "20px", height: "87vh", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <Link to={`/`} >
                <Button style={{ padding: "10px 20px", marginTop: "20px" }}>
                    Back
                </Button>

            </Link>
            <Col >
                <img src={character?.image} alt={character?.name} style={{ width: "100%", borderRadius: "12px" }} />
                <p>Status: {character?.status}</p>
                <p>Species: {character?.species}</p>
                <p>Gender: {character?.gender}</p>
                <p>Origin: {character?.origin.name}</p>
                <p>Location: {character?.location.name}</p>


            </Col>
        </Row>

    )
}

export default Profile;