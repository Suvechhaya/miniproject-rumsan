$(function()){
  $('#get-button').on('click', function() {
      $.ajax({
          type: "POST",  
          url: "http://localhost/viewDetails",  
          dataType: "json",  
          success: function(response) {
            var tbodyEl = $('tbody');
            
            tbodyEl.ejs('');


          }
      })
    })
