import {useParams, Link} from "react-router-dom";
import {Row, Col} from "antd";
function Profile({ characters }) {

    const { id } = useParams();
 const character = characters.find((character) => character.id === parseInt(id));

    return (
<Row gutter={[16, 12]} className="border rounded-lg w-sm mt-10 h-55  bg-[#1E1E1E]  text-white pl-5 pt-10" >
          <Link to={`/`} >
                                <button className="bg-[#3B82F6]  text-white font-bold py-2 px-4 mt-5 ml-3 rounded">
                                    Back
                                </button>

                            </Link>
      <Col >
           <img src={character?.image} alt={character?.name}  />
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