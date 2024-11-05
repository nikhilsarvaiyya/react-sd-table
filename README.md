### Installation

 ```javascript 
 npm install react-sd-table
```

### Component
```javascript
import {SDTable} from 'react-sd-table'

<SDTable 
  rows={users} 
  columns={columns} 
  loadRecords={loadRecords}
  totalRecords={totalRecord}
  options={options}
  toolbar={toolbar}
/>

```
> [!IMPORTANT]
> **Static Data**
> Avoid setting **totalRecords** if you are using static list. just pass  **rows** and **columns** for static list. You can also use **options** and **toolbar** feature for static data.

> [!IMPORTANT]
> **Dynamic Data**   
> For dynamic Data set two porps      
> **loadRecords** : loadRecords(**params**). params object contain the local default or updated setting in the table.       
> **totalRecords** : set the total record number.   

#### Set Column for Table
```javascript

let columns = [
  { label: "Image", indexKey: "image" , validation : { type : "image"}, visible:true,  style : {} },
  { label: "Id", indexKey : "id", validation : { type : "number"}},
  { label: "Role", indexKey: "role", validation : { type : "string"} },
  { label: "Name", indexKey: "firstName", validation : { type : "string"} },
  { label: "city", indexKey: "city" , validation : { type : "String"} },
  { label: "Email", indexKey: "email" , validation : { type : "email",  subject:"Subject", body:"Hello sir/ madam,"} },
  { label: "DOB", indexKey: "birthDate", validation : { type : "date", input : "mm-dd-yy"}, },
  { label: "Phone", indexKey: "phone", validation : { type : "string",}},
  { label: "Gender", indexKey: "gender", validation : { type : 'string'}},
  { label: "Salary", indexKey: "salary", validation : { type : 'number',  append : "", prepand : "$"}},
  { label: "Age", indexKey: "age" , validation : { type : "number"} },
  { label: "Progress", indexKey: "progress" , validation : { type : "progress"}},
  { label: "Description", indexKey: "description" },
]
```

> [!NOTE]
> Column Structure for SD Table   
> **label** : To display in Heading    
> **indexKey** : It will match the key in row list to display in appropriate column   
> **visible** : default visible . You can make it false to remove from table   
> **style** : Help to update style for column. you can create object of standerd style guidlines . eg {"background":"black",color:"white" }   
> **validation** : This object help to add some more feature like, append, prepend, input, subject, body, progress   


### Add Rows for Table
```javascript
rows = [
{
    "id": 1,
    "firstName": "John",
    "lastName": "Taylor",
    "salary": 4200000,
    "birthDate": "1990-11-30",
    "age": 27,
    "progress": 78,
    "gender": "male",
    "email": "john.taylor@json.com",
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
  },
...
]
```

> [!NOTE]
> Row Detail for SD Table   
> **cellStyle** : Will Help you to set style for specfic cell    
> **rowStyle** : Will Help you to set style for specfic Row     

#### Option to set Sort and Filters
```javascript
let options = [
   {
     sorting: true,
     sortColumn : [1,2,3,4,5,6,7,9,10,12],
     sortOrder : 'asc',
     sortBy : 'id'
   },
   {
     searching: true,
     searchColumn : [1,2,3,4,5,6,7,8,9,10,12],
   }
]
```

> [!NOTE]
> Row Detail for SD Table  
> **Sorting** : Sorting will allow to show sort icon in all table head. If we need specific coloum sorting so set **sortColumn** with number of column started with 0 ans seprated by comma. **sortOrder** will set **asc** or **desc** order of the column and **sortBy** will allow to sort that specific column at first.    
> **Searching** : Searching make to view all input field search open in all column. We can manage specific search column by adding numbers of column starting from 0 in **searchColumn** array   
> 
#### ToolBar
```javascript
let toolbar = {
   tableName :"Employee Listing", 
   tableHeader : true, 
   search: true, 
   download:true, 
   print: true, 
   refresh:true 
}
```

> [!NOTE]
> ToolBar Details
> **tableHeader** : Disaply Table Header   
> **tableName** : Set any table name    
