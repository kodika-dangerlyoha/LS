// var connection = new ActiveXObject("ADODB.Connection");

// var connectionstring="Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=musicservis; Integrated Security=True";

// connection.Open(connectionstring);
// var rs = new ActiveXObject("ADODB.Recordset");

// rs.Open("SELECT * FROM table", connection);
// rs.MoveFirst
// while(!rs.eof)
// {
//     document.write(rs.fields(1));
//     rs.movenext;
// }

// rs.close;
// connection.close; 

function save_list() {
    canvas.toBlob(function(blob) {
        saveAs(blob, db);
    });
}
