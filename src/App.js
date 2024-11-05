import { useEffect, useState } from "react";
import { SDTable } from "./table";
import columns from "./table/assets/js/columns";
import { fakeDesc, users } from "./table/assets/js/faker-data";



function App() {
  const [list, setList] = useState(null);
  const [totalRecord, setTotalRecord] = useState(0);

  const loadRecords =  (params) => {

    let limit = params?.rowsPerPage || 5;
    let skip = (params?.activePage  * params?.rowsPerPage ) || 0;
    let order = params?.sort?.order || 'asc';
    let sortBy = params?.sort?.orderBy || 'id';
    let q = params?.filters ? Object.entries(params?.filters) : "";
    let ifQ = q[0]?.length === 2 ? q[0][1] : ""
    let delay = 0

    let url = "https://dummyjson.com/users?"
    let setParams = `q=${ifQ}&limit=${limit}&skip=${skip}&order=${order}&sortBy=${sortBy}}`
    fetch(url+setParams)
    .then(res => res.json())
    .then((data) => {
      setTotalRecord(data.total)
        return data?.users.map(m => {
        m.city = m.address.city;
        m.progress = Math.floor(Math.random() * 101)
        m.salary = Math.floor(Math.random() * (100000 - 10000))+ 10000
        m.description = fakeDesc
        return m
      })
      
    })
    .then(data => {setList(data)});
  }


  useEffect(() => {
    loadRecords()
  }, []);


  let options = [
      {
        sorting: true,
        sortColumn : [5],
        sortOrder : 'asc',
        sortBy : 'id'
      },
      {
        searching: true,
        searchColumn : [1],
      }
  ]

  const handleDelete = (e,data) =>{
    console.log(e,data)
  }

  const handleDownload = (e,data) =>{
    console.log(e,data)
  }

  let actions = [
    { label: "Download", action : handleDownload, confirmMsg : "Are you sure to Download?" },
    { label: "Delete", action : handleDelete},
  ]

  let toolbar = {
      tableName :"Employee Listing", 
      tableHeader : true, 
      search: true, 
      download:true, 
      print: true, 
      refresh:true 
  }


  return <SDTable 
      rows={users} 
      columns={columns} 
      loadRecords={loadRecords}
      options={options}
      toolbar={toolbar}
      actions={actions}
  />;
}

export default App;
