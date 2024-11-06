/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage, clearAll, passParamstoParents,filters, sort , setRowsInPage,rowsPerPageDropdown}) => {

    const [selectRow, setSelectedRow] = useState(rowsPerPage)

    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1
  
    let actPageCount = (count) => {
      setActivePage(count);
      passParamstoParents({sort : sort, filters : filters, rowsPerPage : rowsPerPage, activePage : count})
    }

    let updateRowPerPage = (e) => {
      setActivePage(1)
      setSelectedRow(Number(e.target.value))
      setRowsInPage(Number(e.target.value));
      passParamstoParents({sort : sort, filters : filters, rowsPerPage : Number(e.target.value), activePage : count})
    }

    return (
      <>
        <p className="paginate-page">
          Page {activePage} of {totalPages}
        </p>
        <p className="paginate-row">
          Rows: {beginning === end ? end : `${beginning} - ${end}`} of  <select value={selectRow} onChange={updateRowPerPage} style={{padding:"4px 2px 4px 4px"}}>
            {rowsPerPageDropdown.map(i => <option value={i}>{i}</option>)}
          </select>
        </p>
 
   
          <ul className="paginate-arrow">
            <li>
              <button disabled={activePage === 1} onClick={() => {actPageCount(1); }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" /></svg> 
              </button>
            </li>
            <li>
              <button disabled={activePage === 1} onClick={() => {actPageCount(activePage - 1); }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                
              </button>
            </li>
            <li>
              <button disabled={activePage === totalPages} onClick={() => {actPageCount(activePage + 1); }}>
                
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
              </button>
            </li>
            <li>
              <button disabled={activePage === totalPages} onClick={() => {actPageCount(totalPages); }}>
                
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" /></svg>
              </button>
            </li>
            <li>
              <button onClick={clearAll}>
                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
              </button>
            </li>
          </ul>
        
      </>
    )
  }
  