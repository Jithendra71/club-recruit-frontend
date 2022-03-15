import React from "react";
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../redux/User/UserActions';
// import { useHistory } from 'react-router-dom';

import styles from "./UserCard.module.css";

const UserCard = (props) => {
  // const dispatch= useDispatch()
  // const history = useHistory();

  // function landing(user){
  //     dispatch(setUser(user));
  //     history.push('/landing')
  // }
  return (
    // <div className={styles.container} onClick={()=>landing(props.user)}>
    <div className={styles.container} >
      {props.children}
    </div>
  );
}

export default UserCard;
