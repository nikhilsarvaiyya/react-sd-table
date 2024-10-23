## Installation

npm install react-sd-table

## Component

<SDTable rows={rows} columns={columns} rowsPerPage={10}order="asc"orderBy="progress"activePage={1}filters={{}}   />

## Rows

columns = [
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

## Columns

columns = [
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
  },...
]

