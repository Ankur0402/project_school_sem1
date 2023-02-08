import React from 'react';
function Bookings(){
    return(
        <>
            <div className='txt_white'>
                <h2>BOOKINGS</h2>
            </div>
            <div className="container p-5 my-5 about2">
            <h5>CURRENT BOOKINGS</h5>
            <table>
                <tr>
                    <th>No.</th>
                    <th>Workshop</th>
                    <th>Provider</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Workshop 1</td>
                    <td>Provider 1</td>
                    <td>12-12-2022</td>
                    <td>12:00PM</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Workshop 1</td>
                    <td>Provider 1</td>
                    <td>12-12-2022</td>
                    <td>12:00PM</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Workshop 1</td>
                    <td>Provider 1</td>
                    <td>12-12-2022</td>
                    <td>12:00PM</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Workshop 1</td>
                    <td>Provider 1</td>
                    <td>12-12-2022</td>
                    <td>12:00PM</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Workshop 1</td>
                    <td>Provider 1</td>
                    <td>12-12-2022</td>
                    <td>12:00PM</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Workshop 1</td>
                    <td>Provider 1</td>
                    <td>12-12-2022</td>
                    <td>12:00PM</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Workshop 1</td>
                    <td>Provider 1</td>
                    <td>12-12-2022</td>
                    <td>12:00PM</td>
                </tr>
            </table>
        </div>
        <div className="container p-5 my-5 about2">
        <h5>BOOKING HISTORY</h5>
           <table>
               <tr>
                   <th>No.</th>
                   <th>Workshop</th>
                   <th>Provider</th>
                   <th>Date</th>
                   <th>Status</th>
               </tr>
               <tr>
                   <td>1</td>
                   <td>Workshop 1</td>
                   <td>Provider 1</td>
                   <td>12-12-2022</td>
                   <td>Booked</td>
               </tr>
               <tr>
                   <td>1</td>
                   <td>Workshop 1</td>
                   <td>Provider 1</td>
                   <td>12-12-2022</td>
                   <td>Booked</td>
               </tr>
               <tr>
                   <td>1</td>
                   <td>Workshop 1</td>
                   <td>Provider 1</td>
                   <td>12-12-2022</td>
                   <td>Booked</td>
               </tr>
               <tr>
                   <td>1</td>
                   <td>Workshop 1</td>
                   <td>Provider 1</td>
                   <td>12-12-2022</td>
                   <td>Ongoing</td>
               </tr>
               <tr>
                   <td>1</td>
                   <td>Workshop 1</td>
                   <td>Provider 1</td>
                   <td>12-12-2022</td>
                   <td>Cancelled</td>
               </tr>
               <tr>
                   <td>1</td>
                   <td>Workshop 1</td>
                   <td>Provider 1</td>
                   <td>12-12-2022</td>
                   <td>Attended</td>
               </tr>
               <tr>
                   <td>1</td>
                   <td>Workshop 1</td>
                   <td>Provider 1</td>
                   <td>12-12-2022</td>
                   <td>Attended</td>
               </tr>
           </table>
        </div>
        </>
    );
}
export default Bookings;