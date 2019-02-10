import React from 'react';

// class Title extends React.Component{

//     render(){
//         return(
//             <div>
//                 <h1>Weather Finder</h1>
//                 <p>Find out teperature, conditions and more...</p>
//             </div>
//         );
//     }
// }
//  if we have this.props then pass props as argument and use props.PROPERTY

const Title = () => {
    return(
        <div>
            <h1 className="title-container__title">Weather Finder</h1>
            <p className="title-constainer__subtitle">Find out teperature, conditions and more...</p>
        </div>
    );
}

export default Title;