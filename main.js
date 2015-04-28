/*require("./style.css");
document.write(require("./content.js"));*/
var React = require('react');
var DataGrid = require('react-datagrid');
 
var data = [
    { id: '1', firstName: 'John', lastName: 'Bobson'},
    { id: '2', firstName: 'Bob', lastName: 'Mclaren'}
]
var columns = [
    { name: 'firstName'},
    { name: 'lastName'}
]

var dataGrid = React.createClass({
	render: function() {
		return <DataGrid idProperty="id" dataSource={data} columns={columns} />
	}
});