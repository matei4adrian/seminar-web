const apiUrl = "http://localhost:8000/api/";

async function get(url) {
  return (await axios.get(url)).data;
}

async function post(url, body) {
  return (
    await axios.post(url, JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    })
  ).data;
}

async function getById(url, id) {
  return (await axios.get(url + `getList/${id}`)).data;
}

async function loadTable() {
  let data = await get(apiUrl + "getList");
  let tableDiv = document.getElementById("tableData");

  if (!data || !tableDiv) return;

  let myTable = document.getElementById("myTable");
  if (myTable) {
    myTable.remove();
  }

  let myHtmlCode = [];
  myHtmlCode.push("<table id='myTable'>");
  myHtmlCode.push("<thead>");
  myHtmlCode.push("<tr> <th hidden> Id </th> <th> Name </th> <th> Age </th> ");
  myHtmlCode.push("</thead>");
  myHtmlCode.push("<tbody>");

  for (let item of data) {
    myHtmlCode.push(
      `<tr> <td hidden> ${item.id} </td> <td> ${item.name} </td> <td> ${item.age} </td> `
    );
  }

  myHtmlCode.push("</tbody>");
  myHtmlCode.push("</table>");

  tableDiv.innerHTML = myHtmlCode.join("");
}

async function sendData() {
  let name = document.getElementById("inputName").value;
  let age = document.getElementById("inputAge").value;

  if (!name || !age) {
    alert("Completeaza toate campurile!");
    return;
  }

  await post(apiUrl + "postList", { name: name, age: age });
  await loadTable();
}

async function getData() {
  let div = document.getElementById("elForId");
  let id = document.getElementById("inputId").value;

  if (!id) {
    alert("Introdu un id!");
    return;
  }

  let pFound = document.getElementById("elFound");
  if (pFound) {
    pFound.remove();
  }

  let elById = await getById(apiUrl, id);
  console.log("cEVA");
  let p = document.createElement("p");
  p.setAttribute("id", "elFound");
  p.innerHTML = `Name: ${elById.name}, Age: ${elById.age}`;

  div.appendChild(p);
}

loadTable();
