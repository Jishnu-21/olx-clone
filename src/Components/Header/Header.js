import React, { useContext } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useNavigate,Link } from 'react-router-dom';

function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSellClick = ()=>{
    navigate('/create')
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
      <div className="brandName">
      <Link to="/">
      <OlxLogo />
      </Link>
       </div>
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input type="text" placeholder="Find car,mobile phone and more..." />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow />
        </div>
        <div className="loginPage">
        <span onClick={user ? null : handleLoginClick}>{user ? user.displayName : 'Login'}</span>
          <hr />
        </div>
        {user && (
          <span
            onClick={() => {
              firebase.auth().signOut();
              navigate('/login');
            }}
          >
            Logout
          </span>
        )}
        <div className="sellMenu">
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span onClick={handleSellClick}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;