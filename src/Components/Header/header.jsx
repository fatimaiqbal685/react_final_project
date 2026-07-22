import {Button, Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Heading from "../Heading/heading";
function Header() {
  return (
    <Flex justify="space-around"  align="center" style={{ backgroundColor: "#e7dede" }}>
    
     <Heading heading="Rick And Morty" style={{ fontSize: "14px" }} />
     <div style={{display:"flex"}}>
     <Button  style={{padding:"6px 100px",borderTopLeftRadius:"8px", border:"1px solid gray"}}>Search</Button>
     {<SearchOutlined style={{padding:"6px 10px", border:"1px solid gray", borderTopRightRadius:"8px", borderBottomRightRadius:"8px"}}/>} 
    </div>
    </Flex>
  );
}

export default Header;