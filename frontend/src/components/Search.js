// import React from 'react';
// function Search(){
//     return(
//         <>
//         <div className="container p-5 my-5 about">
//         <div className="center">
//             <h3>Search</h3>
//             <div className="input-group rounded center">
//                 <span className="input-group-text border-0" id="search-addon">
//                     <i className="fa fa-search"></i>
//                 </span>
//                 <input type="search" className="form-control rounded" placeholder="Search" />
//             </div>
//         </div>
//         </div>
//         <div className="container p-5 my-5 about2">
//             <div className="row">
//                 <div className="col-sm-3 about2">
//                     <h3>Filters</h3>
//                     <div>
//                         <select className="form-select rounded-3 mb-1">
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                         </select>
//                     </div>
//                     <div>
//                         <select className="form-select rounded-3 mb-1">
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                         </select>
//                     </div>
//                     <div>
//                         <select className="form-select rounded-3 mb-1">
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                         </select>
//                     </div>
//                     <div>
//                         <select className="form-select rounded-3 mb-1">
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                             <option value="aa">aa</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="col-sm bgchange">
//                     <div className="table-wrapper-scroll-y my-custom-scrollbar col">
//                         <table className="table table-bordered table-striped mb-0 txt_white">
//                             <tr>
//                                 <td><strong>aaa</strong></td>
//                                 <td><strong>bbb</strong></td>
//                                 <td><strong>aaa</strong></td>
//                                 <td><strong>bbb</strong></td>
//                             </tr>
//                             <tr>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                             </tr>
//                             <tr>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                             </tr>
//                             <tr>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                             </tr>
//                             <tr>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                             </tr>
//                             <tr>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                                 <td>aaa</td>
//                                 <td>bbb</td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }
// export default Search;

import React from 'react';
import './Search.css';

function Search(){
    return(
        <>
        <div className="container p-5 my-5 search">
            <h3 className="search-header">Search</h3>
            <div className="search-input-group center">
                <span className="search-input-group-text border-0" id="search-addon">
                    <i className="fa fa-search"></i>
                </span>
                <input type="search" className="search-input-field form-control rounded" placeholder="Search" />
            </div>
        </div>
        <div className="container p-5 my-5 search-filter">
            <div className="row">
                <div className="col-sm-3 search-filter-sidebar">
                    <h3 className="search-filter-header">Filters</h3>
                    <div>
                        <select className="form-select rounded-3 mb-1">
                            <option value="aa">Programming</option>
                            <option value="aa">Chemistry</option>
                            <option value="aa">Physics</option>
                            <option value="aa">Biology</option>
                            <option value="aa">Mechanics</option>
                            <option value="aa">Robotics</option>
                        </select>
                    </div>
                    <div>
                        <select className="form-select rounded-3 mb-1">
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                        </select>
                    </div>
                    <div>
                        <select className="form-select rounded-3 mb-1">
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                        </select>
                    </div>
                    <div>
                        <select className="form-select rounded-3 mb-1">
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                            <option value="aa">aa</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm search-table-section">
                    <div className="table-wrapper-scroll-y my-custom-scrollbar col">
                        <table className="table table-bordered table-striped mb-0 txt_white">
                            <tr>
                                <td><strong>aaa</strong></td>
                                <td><strong>bbb</strong></td>
                                <td><strong>aaa</strong></td>
                                <td><strong>bbb</strong></td>
                                </tr>
                             <tr>
                                 <td>aaa</td>
                                 <td>bbb</td>
                                 <td>aaa</td>
                                 <td>bbb</td>
                             </tr>
                             <tr>
                                 <td>aaa</td>
                                 <td>bbb</td>
                                 <td>aaa</td>
                                 <td>bbb</td>
                             </tr>
                             <tr>
                                 <td>aaa</td>
                                 <td>bbb</td>
                                 <td>aaa</td>
                                 <td>bbb</td>
                             </tr>
                             <tr>
                                 <td>aaa</td>
                                 <td>bbb</td>
                                 <td>aaa</td>
                                 <td>bbb</td>
                             </tr>
                             <tr>
                                 <td>aaa</td>
                                 <td>bbb</td>
                                 <td>aaa</td>
                                 <td>bbb</td>
                             </tr>
                         </table>
                     </div>
                 </div>
             </div>
         </div>
         </>
     );
}
export default Search;