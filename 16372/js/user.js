/**
 * Created by xy on 2018/12/26.
 */
var zTreeObj;
// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
var setting = {
    check:{
        enable: true,
        chkStyle: "radio"
    },
    callback:{
        onCheck:test
    }
};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
var zNodes = [
    {name:"南区", open:true, children:[
        {name:"组一"}, {name:"组二"}]},
    {name:"北区", open:true, children:[
        {name:"一部", checked:true}, {name:"二部"}]}
];
$(document).ready(function(){
    zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});
function test(){
    alert(1);
}
function table() {
    $('#table').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/user.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 10,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams:null,
//            onLoadSuccess: function (data) {
//                console.log(data);
//            },
        columns: [
            {
                checkbox: "true",
                field: 'check',
                align: 'center',
                valign: 'middle'
            },

            {
                title: "摄像头名称",
                field: 'name',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '编号',
                field: 'sex',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '型号',
                field: 'type',
                align: 'center',
                valign: 'middle'
            }
            ,
            {
                title: '所属区域',
                field: 'part',
                align: 'center',
                valign: 'middle'
            }
            ,
            {
                title: '所在组',
                field: 'work',
                align: 'center',
                valign: 'middle'
            }
            ,
            {
                title: '状态',
                field: 'age',
                align: 'center',
                valign: 'middle'
            }



        ]
    });

};
$(function(){
    table();
})