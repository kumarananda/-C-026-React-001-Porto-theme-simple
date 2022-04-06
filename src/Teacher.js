import { Component } from "react";

// 

class Teacher extends Component {

    // render for class component
    render(){
        return(
            <>
                <section className="teacher">
                    <div className="container py-5">
                        <div className="row">

                            <div className="col-md-6">
                                <img src="https://imageio.forbes.com/blogs-images/forbesbooksauthors/files/2019/08/bigstock-183651688.jpg?format=jpg&width=1200" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="teacher-content">
                                    <h2>Our Teacher</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid et consectetur ullam maiores, suscipit laudantium voluptates officia itaque laboriosam in porro corrupti reprehenderit saepe iusto molestiae, aut accusamus ipsum architecto? </p>

                                </div>
                            </div>

                        </div>
                    </div>

                </section>
            
            
            </>
        )

    }
}

export default Teacher;

// import React from "react";

// class Teacher extends React.Component {
//     render(){
//         return (
//             <>
//             </>
//         )
//     }
// }