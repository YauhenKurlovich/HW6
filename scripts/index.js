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
    xhr.open('POST', 'http://127.0.0.1:5500/index.html', false);
    post2 = new Post(23,101,'asdasdas','asdasdasd');
    alert(post2);
    alert(JSON.stringify(post2));
    xhr.send(JSON.stringify(post2));
    if (xhr.status != 200) {   
        alert( xhr.status + ': ' + xhr.statusText ); 
      } else {
      }
}

Post.prototype.getAll = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
    xhr.send();
    if (xhr.status != 200) {   
      alert( xhr.status + ': ' + xhr.statusText ); 
    } else {
       this.data = JSON.parse(xhr.responseText);
    }
}

 function displayAll() {
    var row = "";
     var rows = document.getElementById("tableBody");

    for(var i = 0; i < 100; i ++)
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
