
import { useEffect, useState } from "react";
import MainLayout from "../../Container/MainLayout";
import Cards from "../../Components/Card/card";
import PaginationComponent from "../../Container/Pagination/Pagination";
import { Col, Row } from "antd";
// import {selectData, paginationData,} from "../../app/features/characterSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../app/features/characterSlice";
function HomePage() {
  const dispatch = useDispatch();
  // const characters = useSelector(selectData);
const [currentPage, setCurrentPage] = useState(1)
  // const pagination = useSelector(paginationData);
  // console.log(pagination, "pagination");

 const {characters, pagination, status} = useSelector((state) => state.character)
console.log("redux state:", {characters,pagination,status})
  useEffect(() => {
    dispatch(fetchCharacters({page :1 }));
  }, [dispatch]);

  const fetchCharacter = (page) => {
    setCurrentPage(page);
    dispatch(fetchCharacters({ page }));
  };
  return (
    <MainLayout>
      <Row  gutter={[12, 12]}>
        {status === "loading" && <p>Loading...</p>}
        {characters?.map((character) => (
          <Col lg={6} key={character.id} >
            <Cards character={character} />
          </Col>
        ))}
      </Row>
      {/* <Row justify="end"> */}
        {/* {pagination && pagination.count > 20 && ( */}
          {/* <Col span={9} > */}
            <PaginationComponent
              onChange={fetchCharacter}
              total={pagination?.count }
              // pageSize={20}
              currentPage={currentPage}
            />
          {/* </Col> */}
        
        {/* <Col span={9}>
          <PaginationComponent
            onChange={() => {
              console.log("page");
            }}
            total={20}
            pageSize={20}
          />
        </Col> */}
      {/* </Row> */}
    </MainLayout>
  );
}

export default HomePage;