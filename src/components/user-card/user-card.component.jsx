import React from 'react'
import './user-card.styles.css';
function UserCard(props) {
    return (
        <div>
            {props.userData.map((user, index) => {
                return (
                    <div>
                        <div className="a-box">
                            <div className="img-container">
                                <div className="img-inner">
                                    <div className="inner-skew">
                                        <img src={user.avatar} />
                                    </div>
                                </div>
                            </div>
                            <div className="text-container">
                                <h3>{user.first_name} {user.last_name}</h3>
                                <div>
                                    {user.email}
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default UserCard;
