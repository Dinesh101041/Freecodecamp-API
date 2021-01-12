import React from 'react';


function Tweetcard() {
    return (
        <div>
            <div className="tweetcard">
                
               {/* user profile image  */}
                <div className="col s2">
                    <img src={data.user.profile_image_url} alt={data.user.name} className="circle responsive-img" />
                </div>
                
                {/* tweet text */}
                <div className="col s10 left-align">
                    <span className="black-text">{data.text}</span>
                </div> 

            </div>


        </div>


    );
}

export default Tweetcard;