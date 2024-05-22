import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import FilterList from '../components/FiltersAndSorting';
// import products from 'razorpay/dist/types/products';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0);
  const { search } = useSelector(state => state.search);
  const [sortBy, setSortBy] = useState(null); // State to manage sorting order
  const [newData, setNewData] = useState(null);

  const { data, isLoading, error } = useGetProductsQuery({
    limit,
    skip,
    search,
    sortBy, // Pass sorting order to API query
  });

  useEffect(() => {
    if (data) {
      setTotal(data.total);
      setTotalPage(Math.ceil(total / limit));
      setSkip((currentPage - 1) * limit);
    }
  }, [currentPage, data, limit, total, search]);

  console.log(data?.products)
  useEffect(() => {
    if(data?.products){
    let sorted = [...data.products];
    if (sortBy === "asc") {
      let sort = sorted.sort((a, b) => a.price - b.price);
      setNewData(sort)
    }
    if (sortBy === "desc") {
      let sort = sorted.sort((a, b) => b.price - a.price);
      setNewData(sort)
    }
    setNewData(sorted)

  }
  }, [data, sortBy])

  const pageHandler = pageNum => {
    if (pageNum >= 1 && pageNum <= totalPage && pageNum !== currentPage) {
      setCurrentPage(pageNum);
    }
  };

  // Function to toggle sorting order
  const toggleSortOrder = sortOrder => {
    if (sortBy === sortOrder) {
      setSortBy(null); // Toggle off sorting if already selected
    } else {
      setSortBy(sortOrder);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <Row>
            <Col md={2}>
              <FilterList />
              <Row className="mt-3">
              Sort
              <Row style={{ marginBottom: '10px' }}>
              <Button onClick={() => toggleSortOrder('asc')}>
                Sort by Min Price
              </Button>
              </Row>
              <Row style={{ marginBottom: '10px' }}>
              <Button onClick={() => toggleSortOrder('desc')}>
                Sort by Max Price
              </Button>
              </Row>
            
          </Row>
            </Col>
            <Col>
              <Row>
                {newData?.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
         
          {totalPage > 1 && !search && (
            <Paginate
              currentPage={currentPage}
              totalPage={totalPage}
              pageHandler={pageHandler}
            />
          )}
        </>
      )}
    </>
  );
};

export default HomePage;