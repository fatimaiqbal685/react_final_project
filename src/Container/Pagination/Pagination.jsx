
import { Pagination } from 'antd';

function PaginationComponent({ onChange, total, pageSize, currentPage }) {

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

return(
    <div style={{display:"flex", justifyContent:"center", marginTop:"40px"}}>
<Pagination 
current={currentPage}
total={total}
pageSize={20}
onChange={onChange}
itemRender={itemRender}
showSizeChanger={false}
/>

    </div>
)

}

export default PaginationComponent;