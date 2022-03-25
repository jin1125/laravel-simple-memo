function deleteHandle(event) {
  event.preventDefault();
  
  if(window.confirm('delete?')) {
    document.getElementById('delete-form').submit();
  } else {
    alert('キャンセルしました');
  }
}