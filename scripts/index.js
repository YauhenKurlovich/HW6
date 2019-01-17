 function Post(userId, id, title, body) {
     this.data;
     this.userId = userId;
     this.id = id;
     this.title = title;
     this.body = body;
 }

 post = new Post();

 Post.prototype.Add = function () {
     var xhr = new XMLHttpRequest();
     xhr.open('POST', 'https://my-json-server.typicode.com/YauhenKurlovich/demo/posts', false);
     var postData = {
         userId: document.dataForm.uId.value,
         title: document.dataForm.title.value,
         body: document.dataForm.body.value
     }
     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
     alert(JSON.stringify(postData));
     xhr.send(JSON.stringify(postData));
     if (xhr.status != 200) {
         alert(xhr.status + ': ' + xhr.statusText);
     } else {
         alert(xhr.status + ': ' + xhr.statusText);
         alert("Created");
     }
 }

 Post.prototype.Update = function () {
     var xhr = new XMLHttpRequest();
     xhr.open('PUT', 'https://my-json-server.typicode.com/YauhenKurlovich/demo/posts/' + document.dataForm.Id.value, false);
     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
     var putData = {
         Id: document.dataForm.Id.value,
         userId: document.dataForm.uId.value,
         title: document.dataForm.title.value,
         body: document.dataForm.body.value
     }

     xhr.send(JSON.stringify(putData));
     if (xhr.status != 200) {
         alert(xhr.status + ': ' + xhr.statusText);
     } else {
         alert("Updated");
         alert(xhr.status + ': ' + xhr.statusText);
     }
 }

 Post.prototype.Delete = function () {
     var xhr = new XMLHttpRequest();
     xhr.open('DELETE', 'https://my-json-server.typicode.com/YauhenKurlovich/demo/posts/' + document.dataForm.Id.value, false);
     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
     xhr.send();
     if (xhr.status != 200) {
         alert(xhr.status + ': ' + xhr.statusText);
     } else {
         alert("Deleted");
         alert(xhr.status + ': ' + xhr.statusText);
     }
 }


 Post.prototype.getAll = function () {
     var xhr = new XMLHttpRequest();
     xhr.open('GET', 'https://my-json-server.typicode.com/YauhenKurlovich/demo/posts', false);
     xhr.send();
     if (xhr.status != 200) {
         alert(xhr.status + ': ' + xhr.statusText);
     } else {
         this.data = JSON.parse(xhr.responseText);
         alert(xhr.status + ': ' + xhr.statusText);
         alert("Get is done");
     }
 }

 function Add() {
     post.Add();
 }

 function Update() {
     post.Update();
 }

 function Delete() {
     post.Delete();
 }

 function displayAll() {
     var row = "";
     var rows = document.getElementById("tableBody");

     for (var i = 0; i < post.data.length; i++) {
         row += "<tr>"
         row += "<td>" + post.data[i].userId + "</td>";
         row += "<td>" + post.data[i].id + "</td>";
         row += "<td>" + post.data[i].title + "</td>";
         row += "<td>" + post.data[i].body + "</td>";
         row += "<td> <button onclick='Delete()'> Delete </button>  </td>";
         row += "</tr>"
     }
     rows.innerHTML = row;
 }

 post.getAll();