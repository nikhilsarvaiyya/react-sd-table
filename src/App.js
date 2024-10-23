import { SDTable } from "./table";

let columns = [
  { label: "Id", accessor : "id", validation : { type : "number"}, style : {}  , visible: true},
  { label: "Image", accessor: "image" , validation : { type : "image"} , visible: true},
  { label: "India", accessor: "location" , validation : { type : "String", prepand : ""} , visible: true},
  { label: "Progress", accessor: "progress" , validation : { type : "progress"} , visible: true},
  { label: "DOB", accessor: "birthDate", validation : { type : "date", input : "mm-dd-yy"}, style : {} , visible: true},
  { label: "Gender", accessor: "gender", validation : { type : 'string'}},
  { label: "Salary", accessor: "salary", validation : { type : 'number', append : "", prepand : "$"}},
  { label: "Email", accessor: "email" , validation : { type : "email", subject:"Subject", body:"Hello sir/ madam,"} },
  { label: "Age", accessor: "age" , validation : { type : "number"} },
  { label: "FirstNAme", accessor: "firstName", validation : { type : "string"}, visible: true },
  { label: "Role", accessor: "role", validation : { type : "string"} }
]

let rows = [

  {
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "salary": 56756,
    "birthDate": "2024-03-04",
    "country":"India",
    "age": 28,
    "progress": 55,
    "gender": "female",
    "email": "emily.johnson@x.dummyjson.com",
    "role": "user",
    "image": "https://dummyjson.com/icon/michaelw/128",
    "phone": "+81 965-431-3024",
    "cellStyle": [
      {
        "name": "gender",
        "style": {  "background":"#F3E5F5" }
      }
    ],
    "rowStyle": { "background": "#E8F5E9" }
  },
  {
    "id": 2,
    "firstName": "Michael",
    "lastName": "Williams",
    "salary": 1234,
    "birthDate": "2024-05-20",
    "age": 35,
    "progress": 24,
    "gender": "male",
    "email": "michael.williams@x.dummyjson.com",
    "role": "user",
    "image": "https://dummyjson.com/icon/jamesd/128",
    "phone": "+81 965-431-3024",
    "cellStyle": [
      {
        "name": "gender",
        "style": {  "background":"#E3F2FD" }
      }
    ],
    "rowStyle": {  "background":"#EF9A9A" }
  },
  {
    "id": 3,
    "firstName": "Sophia",
    "lastName": "Brown",
    "salary": 23443,
    "birthDate": "2022-12-12",
    "age": 42,
    "progress": 97,
    "gender": "female",
    "email": "sophia.brown@x.dummyjson.com",
    "role": "user",
    "image": "https://dummyjson.com/icon/emmaj/128",
    "phone": "+81 210-652-2785",
    "cellStyle": [
      {
        "name": "gender",
        "style": {  "background":"#F3E5F5" }
      }
    ],
    "rowStyle":{  "background":"#66BB6A" }

  },
  {
    "id": 4,
    "firstName": "James",
    "lastName": "Davis",
    "salary": 233,
    "birthDate": "10-12-2000",
    "age": 45,
    "progress": 0,
    "gender": "male",
    "email": "james.davis@x.dummyjson.com",
    "role": "user",
    "image": "https://dummyjson.com/icon/oliviaw/128",
    "phone": "+49 614-958-9364",
    "cellStyle": [
      {
        "name": "gender",
        "style": {  "background":"#E3F2FD" }
      }
    ],
    "rowStyle": {  "background":"#EF5350" }


  },
  {
    "id": 5,
    "firstName": "Emma",
    "lastName": "Miller",
    "salary": 56734,
    "birthDate": "11-02-2021",
    "age": 30,
    "progress": 44,
    "gender": "female",
    "email": "emma.miller@x.dummyjson.com",
    "role": "user",
    "image": "https://dummyjson.com/icon/alexanderj/128",
    "phone": "+91 759-776-1614",
    "cellStyle": [
      {
        "name": "gender",
        "style": {  "background":"#F3E5F5" }
      }
    ],
    "rowStyle": {  "background":"#FFEBEE" }
  },
  {
    "id": 6,
    "firstName": "Olivia",
    "lastName": "Wilson",
    "salary": 2345,
    "birthDate": "1990-11-30",
    "age": 22,
    "progress": 72,
    "gender": "female",
    "email": "olivia.wilson@x.dummyjson.com",
    "role": "user",
    "image": "https://dummyjson.com/icon/avat/128",
    "phone": "+91 607-295-6448",
    "cellStyle": [
      {
        "name": "gender",
        "style": {  "background":"#F3E5F5" }
      }
    ],
    "rowStyle":{  "background":"#A5D6A7" }

  },
  {
    "id": 7,
    "firstName": "Alexander",
    "lastName": "Jones",
    "salary": 56756,
    "birthDate": "1990-11-30",
    "age": 38,
    "progress": 100,
    "gender": "male",
    "email": "alexander.jones@x.dummyjson.com",
    "role": "user",
    "image": "https://dummyjson.com/icon/ethanm/128",
    "phone": "+61 260-824-4986",
    "cellStyle": [
      {
        "name": "gender",
        "style": {  "background":"#E3F2FD" }
      }
    ],
    "rowStyle":  {  "background":"#4CAF50" }


  },
  {
    "id": 8,
    "firstName": "Ava",
    "lastName": "Taylor",
    "salary": 2342,
    "birthDate": "1990-11-30",
    "age": 27,
    "progress": 2,
    "gender": "female",
    "email": "ava.taylor@x.dummyjson.com",
    "role": "user",
    "image": "https://dummyjson.com/icon/isabellad/128",
    "phone": "+1 458-853-7877",
    "cellStyle": [
      {
        "name": "gender",
        "style": {  "background":"#F3E5F5" }
      }
    ],
    "rowStyle": { "background": "#EF5350" }
  }
]

function App() {
  return <SDTable 
  rows={rows} 
  columns={columns} 
  rowsPerPage={10}
  order="asc"
  orderBy="progress"
  activePage={1}
  filters={{}}
  />;
}

export default App;
