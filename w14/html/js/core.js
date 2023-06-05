let ToDoManager = {
  setList : function(){
    let title = $('.to-do-form>input[name=title]')[0].value;
    let content = $('.to-do-form>textarea[name=content]')[0].value;

      $('.no-list').css('display','none');
      $('.render-list tbody').append(`<tr>
      <td>${title}</td>
      <td>${content}</td>
      <td style="text-align:center"><button onclick="ToDoManager.deleteList(this)">삭제</button></td>
  </tr>`);
  },
  deleteList : function(item){
    if($('tbody>tr').length == 2){
      $('.no-list').css('display','revert');
    }
    console.log($(item).parent().parent().remove());
  }
}