 function Post() {
    this.data;
}

Post.prototype.getAll = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
    xhr.send();
    if (xhr.status != 200) {   
      alert( xhr.status + ': ' + xhr.statusText ); 
    } else {
       this.data = JSON.parse(xhr.responseText);
       var row;
       var rows = document.getElementById("tableBody");
  
    //   for(var i = 0; i < 100; i ++)
    //       {
    //           row += "<tr>"
    //           row += "<td>" + this.data[i].userId + "</td>"; 
    //           row += "<td>" + this.data[i].id + "</td>"; 
    //           row += "<td>" + this.data[i].title + "</td>"; 
    //           row += "<td>" + this.data[i].body + "</td>"; 
    //           row += "</tr>"
    //   }
    // rows.innerHTML = row;
    }
}
post = new Post();

post.getAll();
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
            row += "</tr>"
    }
  rows.innerHTML = row;
}

