import React from 'react';
import { Link } from 'react-router-dom';
function SPF(){
    return(
        <>
        <div className="container p-5 my-5 about2">
            <h2>PROFILE</h2>
            <p>NAME: </p>
            <p>INSTITUTION:</p>
            <p>D.O.B:</p>
            <p>FIELD4:</p>
            <p>FIELD5:</p>
            <p>FIELD6:</p>
        </div>
        <div className="container p-5 my-5 about2">
            <h2>BOOKINGS</h2>
            <div className="row">
                <div className="col-sm-6">
                    <h5>Current bookings</h5>
                    <table>
                        <tr>
                            <th>Workshop</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                        <tr>
                            <td>Workshop 1</td>
                            <td>12-12-2022</td>
                            <td>12:00PM</td>
                        </tr>
                        <tr>
                            <td>Workshop 2</td>
                            <td>12-12-2022</td>
                            <td>12:00PM</td>
                        </tr>
                        <tr>
                            <td>Workshop 3</td>
                            <td>12-12-2022</td>
                            <td>12:00PM</td>
                        </tr>
                    </table>
                </div>
                <div className="col-sm-6">
                    <h5>Booking History</h5>
                    <table>
                        <tr>
                            <th>Workshop</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                        <tr>
                            <td>Workshop 1</td>
                            <td>12-12-2022</td>
                            <td>12:00PM</td>
                        </tr>
                        <tr>
                            <td>Workshop 2</td>
                            <td>12-12-2022</td>
                            <td>12:00PM</td>
                        </tr>
                        <tr>
                            <td>Workshop 3</td>
                            <td>12-12-2022</td>
                            <td>12:00PM</td>
                        </tr>
                    </table>
                </div>
            </div>
            <Link to="/bookings">Go to Bookings Page</Link>
        </div>
        <div className="container p-5 my-5 about2">
            <h2>APPROVALS</h2>
            <h5>Pending Approvals</h5>
            <div className="row">
                <div className="col-sm-4">
                    <table>
                        <tr>
                            <th>Workshop</th>
                            <th>Provider</th>
                            <th>Date</th>
                        </tr>
                        <tr>
                            <td>Workshop 1</td>
                            <td>Provider 1</td>
                            <td>12-12-2022</td>
                        </tr>
                        <tr>
                            <td>Workshop 2</td>
                            <td>Provider 2</td>
                            <td>12-12-2022</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}
export default SPF;