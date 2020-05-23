import React, {Fragment} from "react";
import "../assets/style/style.css";
//import {Link} from "react-router-dom";

const TaskDash = () => {
    return (
        <Fragment>
            <div className="footer">
                <h6 blue__title>Todos</h6>
                <h6 className="sign-out">Sign Out</h6>
            </div>
            <div className="row">
                <div className="side__wrapper col-lg-3">
                    <div>
                        {/* <img src={require("#")} alt=""/> */}
                        <p>Username</p>
                    </div>
                    <ul>
                        <li>My Day</li>
                        <li>Important</li>
                        <li>Completed</li>
                    </ul>
                </div>
                <div className="white__wrapper col-lg-4">
                    <table>
                        <tr>
                            <th>Task</th>
                            <th>Important</th>
                        </tr>
                        <tr>
                            <td>Read a book</td>
                            <td>Starred</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default TaskDash;