let columns = [
    { label: "Image", indexKey: "image" , validation : { type : "image"} , visible: true},
    { label: "Id", indexKey : "id", validation : { type : "number"}, style : {}  , visible: true,},
    // { label: "Role", indexKey: "role", validation : { type : "string"} },
    // { label: "Name", indexKey: "firstName", validation : { type : "string"}, visible: true },
    // { label: "city", indexKey: "city" , validation : { type : "String", prepand : ""} , visible: true},
    { label: "Email", indexKey: "email" , validation : { type : "email", subject:"Subject", body:"Hello sir/ madam,"} },
    { label: "DOB", indexKey: "birthDate", validation : { type : "date", input : "mm-dd-yy"}, style : {} , visible: true},
    { label: "Phone", indexKey: "phone", validation : { type : "string",},  visible: true},
    { label: "Gender", indexKey: "gender", validation : { type : 'string'}},
    { label: "Salary", indexKey: "salary", validation : { type : 'number', append : "", prepand : "$"}},
    { label: "Age", indexKey: "age" , validation : { type : "number"} },
    { label: "Progress", indexKey: "progress" , validation : { type : "progress"} , visible: true},
    { label: "Description", indexKey: "description" },
    { label: "", indexKey: "actions" },
  ]

  export default columns