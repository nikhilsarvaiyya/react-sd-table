
import React from 'react'
import {  isNumber } from "./helpers";

export function DateFormat(date, validation) {

  let formatted = "NA"
  const today = new Date(date);
  if (today === "Invalid Date") {
    return formatted
  }
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // month is zero-based
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  let club = "";

  switch (validation?.input) {
    case 'dd-mm-yy': club = dd + '-' + mm + '-' + yyyy; break;
    case 'dd/mm/yy': club = dd + '/' + mm + '/' + yyyy; break;
    case 'dd:mm:yy': club = dd + ':' + mm + ':' + yyyy; break;
    case 'mm-dd-yy': club = mm + '-' + dd + '-' + yyyy; break;
    case 'mm/dd/yy': club = mm + '/' + dd + '/' + yyyy; break;
    case 'mm:dd:yy': club = mm + ':' + dd + ':' + yyyy; break;
    case 'yy-mm-dd': club = yyyy + '-' + mm + '-' + dd; break;
    case 'yy/mm/dd': club = yyyy + '/' + mm + '/' + dd; break;
    case 'yy:mm:dd': club = yyyy + ':' + mm + ':' + dd; break;

    default:
      club = dd + '/' + mm + '/' + yyyy;
      break;
  }

  formatted = club
  return formatted
}

export function Image(image) {
  return image === "NA" ? "NA" : <img alt={image} title={image} src={image} className='sd-image-avatar'  /> 
}

export function Boolen(value, validation) {
  return value
}

export function Email(value, validation) {
  return <a href={`mailto:${value}?subject=${validation?.subject}&body=${validation?.body}`}>{value}</a> 
}



export function Number(value, validation) {
  let prepand = validation?.prepand || "";
  let append = validation?.append  || "";
  if (isNumber(value)) {
    let val = <p>{prepand} {value.toString()} {append}</p>
    return val
  }
}

// 0 : #EF5350
// 1 : #E57373
// 2 : #EF9A9A
// 3 : #FFCDD2
// 4 : #FFEBEE
// 5 : #E8F5E9
// 6 : #C8E6C9
// 7 : #A5D6A7
// 8 : #81C784
// 9 : #66BB6A
// 10 : #4CAF50

export function ProgressBar(value) {
  if (isNumber(value)) {
    return <div className="vi-progress">
      <div className="vi-progress-bar">
        <p style={{ width: value+"%" }}>&nbsp;</p>
      </div>
      <span>{value.toString()}%</span>
    </div>
  }
}
