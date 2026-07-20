import { Flex } from 'antd';

import Heading from "../Heading/heading";
function Header() {
  return (
    <Flex justify="space-around"  align="center" style={{ backgroundColor: "#e7dede" }}>
    
     <Heading heading="Rick And Morty" style={{ fontSize: "14px" }} />
     <button>Search</button>

    
    </Flex>
  );
}

export default Header;