import React, { useEffect, useContext, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const navigate = useNavigate();

  useEffect(() => {
    firebase
      .firestore()
      .collection('products')
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setProducts(allPost);
      });
  }, []);

  const getRandomProduct = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  };

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => (
            <div
              className="card"
              onClick={() => {
                setPostDetails(product);
                navigate('/view');
              }}
              key={product.id}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.name}</span>
                <p className="name">{product.category}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.length > 0 && (
            <div
              className="card"
              onClick={() => {
                const randomProduct = getRandomProduct();
                setPostDetails(randomProduct);
                navigate('/view');
              }}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={getRandomProduct().url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {getRandomProduct().price}</p>
                <span className="kilometer">{getRandomProduct().name}</span>
                <p className="name">{getRandomProduct().category}</p>
              </div>
              <div className="date">
                <span>{getRandomProduct().createdAt}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;