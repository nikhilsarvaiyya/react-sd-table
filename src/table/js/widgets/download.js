export function saveAsJson (filename, dataObjToWrite) {
  const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: "text/json" });
  const link = document.createElement("a");

  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

  const evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  link.dispatchEvent(evt);
  link.remove()
};


export function PrintPdf (pdf) {
  var iframe = document.createElement('iframe');
  iframe.style.display = "none";
  iframe.src = pdf;
  document.body.appendChild(iframe);
  iframe.contentWindow.focus();
  iframe.contentWindow.print();
}
