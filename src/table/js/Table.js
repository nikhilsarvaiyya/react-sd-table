
import React, { useState, useMemo } from 'react'
import { sortRows, filterRows, paginateRows } from './helpers';
import { DateFormat, Image, Boolen, ProgressBar, Number,Email} from './Formatters'
import { Pagination } from './Pagination'

const VITable = ({ columns, rows, ...props }) => {
  const [activePage, setActivePage] = useState(props.activePage || 1)
  const [filters, setFilters] = useState(props.filters)
  const [sort, setSort] = useState({ order: props.order || 'asc', orderBy: props.orderBy || 'id' })
  const rowsPerPage = props.rowsPerPage || 10

  const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
  const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

  const count = filteredRows?.length
  const totalPages = Math.ceil(count / rowsPerPage)

  const handleSearch = (value, accessor) => {
    setActivePage(1)

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }))
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters[accessor]

        return updatedFilters
      })
    }
  }

  const handleSort = (accessor) => {
    setActivePage(1)
    setSort((prevSort) => ({
      order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
      orderBy: accessor,
    }))
  }

  const clearAll = () => {
    setSort({ order: 'asc', orderBy: 'id' })
    setActivePage(1)
    setFilters({})
  }

  const formatData = (data, row, column) => {
    let localStyle = {};
    let setValue = "NA";
    let dataValue = data || "NA";

    let validation = column?.validation
   
    switch (column?.validation?.type) {
      case 'number':
        localStyle = { textAlign: "right" }
        setValue = Number(dataValue,validation)
        break;
      case 'image':
        localStyle = { position: "relative" }
        setValue = Image(dataValue,validation)
        break;
      case 'boolean':
        setValue = Boolen(dataValue,validation)
        break;
      case 'date':
        setValue = DateFormat(dataValue, validation)
        break;
      case 'email':
        setValue = Email(dataValue, validation)
        break;
      case 'progress':
        setValue = ProgressBar(dataValue)
        break;
      default:
        setValue = dataValue
        break;
    }

    // TD Cell Style
    let tdStyle = {}
    
    let isStyleAvailable = row?.cellStyle?.filter((row,i) => row.name === column.accessor)[0];
    
    if(isStyleAvailable?.style){
      tdStyle = isStyleAvailable?.style
    }
    
    return <td className={`${row.sortColorClass}`} style={{ ...localStyle,...row.rowStyle,...column?.style,...tdStyle  }} key={column.accessor}>{setValue}</td>
  }

  let setSortColor = (row, column) => {
    if(sort.orderBy === column.accessor){
        row.sortColorClass = "sorting-color"
      } else {
        row.sortColorClass = "remove-sorting-color"
      }
  }
  
  console.log(filters)
  return (
    <>
      <div className='sd-table' >
          <div className='sd-header'>
              <h2>SD Table</h2>
              <ul>
                  <li onClick={() => alert("Download")} > 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                   </li>
                  <li onClick={() => alert("Upload")}> 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                   </li>
                  <li onClick={() => alert("Print")}> 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"/></svg> </li>
                  <li onClick={() => alert("Refresh")}> 
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg> </li>

                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                  </li>
              </ul>
          </div>
      
        <table >
          <thead>
            <tr>
              {columns?.map((column,i) => {
                if(column?.visible === false){
                  return null
                }
                const sortIcon = () => {
                  if (column.accessor === sort.orderBy) {
                    if (sort.order === 'asc') {
                      
                      return <span >
                          <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#5f6368"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg> 
                        </span>
                    }
                    return <span ><svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#5f6368"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg> </span>
                  } else {
                    return <span ><svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#5f6368"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"/></svg></span>
                  }
                }
                return (
                <th key={column.accessor}>
                  <div className='th-heading' >
                    <label>{column.label} </label>
                    <button  onClick={() => handleSort(column.accessor)}>{sortIcon()}</button>
                </div>
                </th>
                )
              })}
            </tr>
            <tr>
              {columns?.map((column,i) => {
                if(column?.visible === false){
                  return null
                }
                return (
                  <th key={i}>
                    <input
                      key={`${column.accessor}-search`}
                      type="search"
                      placeholder={`Type here...`} //${column.label}
                      value={filters[column.accessor]}
                      onChange={(event) => handleSearch(event.target.value, column.accessor)}
                    />
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {calculatedRows?.map((row) => {
              
              return (
                <tr key={row.id}>
                  {columns?.map((column) => {
                    if(column?.visible === false){
                      return null
                    }
                    setSortColor(row,column)
                    return formatData(row[column.accessor], row, column)
                  })}
                </tr>
              )
            })}
            
          </tbody>
        </table>
        {count ===  0 ?  <p>No data found</p> : ""}
        <div className="pagination">
        {count >  0 ? 
          <Pagination
            activePage={activePage}
            count={count}
            rowsPerPage={rowsPerPage}
            totalPages={totalPages}
            setActivePage={setActivePage}
            setSort={setSort}
            setFilters={setFilters}
            
          />
        : <button onClick={clearAll}>Reset all</button>}
        </div>
      </div>
    </>
  )
}

export default VITable

