import React from "react";
import { Link } from "react-router-dom";
import {Row, Col} from "antd";
function HomePage({ characters }) {
  return (
    <>
    <div  className="border rounded-lg w-sm mt-10 h-55  bg-[#1E1E1E]  text-white pl-5 pt-10" >
      <Row gutter={[16, 12]} >
        {characters.map((character) => {
          return (
            <Col key={character.id}>
             <img src={character.image} alt={character.name} className="w-40 h-40 rounded-full" />
             <h2>{character.name}</h2>
               <Link to={`/characters/${character.id}`} >
                                <button className="bg-[#3B82F6]  text-white font-bold py-2 px-4 mt-5 ml-3 rounded">
                                    View Details
                                </button>

                            </Link>
            </Col>
          )
        })}
      </Row>

</div>
    </>
  );
}

export default HomePage;
