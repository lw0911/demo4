/**
 * Created by xy on 2018/12/25.
 */
$(function(){
    table();

})
function table() {
    $('#table').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/notice.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 5,
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
                title: "编号",
                field: 'id',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '抓拍图片',
                field: 'img',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row,index ) {
                    return '<img style="width: 100px;   height: 80px;    margin-top: -6px;cursor: pointer;" src='+row.img+' alt="图片丢失了" >'
                }
            }
            ,
            {
                title: '姓名',
                field: 'person',
                align: 'center',
                valign: 'middle'
            }
            ,
            {
                title: '性别',
                field: 'sex',
                align: 'center',
                valign: 'middle'
            }
            ,
            {
                title: '监测时间',
                field: 'date',
                align: 'center',
                valign: 'middle'
            }
            ,
            {
                title: '匹配率',
                field: 'num',
                align: 'center',
                valign: 'middle'
            }
            ,
            {
                title: '匹配结果',
                field: 'sta',
                align: 'center',
                valign: 'middle'
            }
            ,
            { field: 'opr', title: '操作',width:'180px',   align: 'center',
                formatter:function(val,row){
                    var a='<a href="javascript:void(0)" class="btn btn-xs btn-success" style="margin-left: 10px;">编辑</a>';

                    return a;
                }
            }



        ]
    });

};
function add(){
    layer.open({
        type: 2,
        title: '新闻发布',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['920px', '580px'],
        shadeClose: true,
        closeBtn: 1,
        content: 'table-tail.html'
    });
}