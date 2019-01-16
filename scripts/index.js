 function Post(userId, id, title, body) {
    this.data;
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body  = body;
}

post = new Post();

Post.prototype.Add = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'db/db.json', false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    jsonBody = new Post(1,11,'Yauhen','Kurlovich');
    xhr.send(JSON.stringify(jsonBody));
    if (xhr.status != 200) {   
        alert( xhr.status + ': ' + xhr.statusText ); 
      } else {
          alert("Created");
      }
}

Post.prototype.getAll = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'db/db.json', false);
    xhr.send();
    if (xhr.status != 200) {   
      alert( xhr.status + ': ' + xhr.statusText ); 
    } else {
       this.data = JSON.parse(xhr.responseText);
       alert("Get is done");
    }
}

function Add()
{
    post.Add();
}

 function displayAll() {
    var row = "";
     var rows = document.getElementById("tableBody");

    for(var i = 0; i < post.data.length; i ++)
        {
            row += "<tr>"
            row += "<td>" + post.data[i].userId + "</td>"; 
            row += "<td>" + post.data[i].id + "</td>"; 
            row += "<td>" + post.data[i].title + "</td>"; 
            row += "<td>" + post.data[i].body + "</td>"; 
            row += "<td> <button> Delete </button>  </td>";
            row += "</tr>"
    }
  rows.innerHTML = row;
}

post.getAll();
