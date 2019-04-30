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
// $.ajax({  
//        type: "POST",  
//        url: "http://localhost/viewDetails",  
//        dataType: "json",  
//        success: function(resp){  

//           var tbodyEl = $('tbody');
//           tbodyEl.ejs('');

//           response.users.forEach(function(users){
//             tbodyEl.append('\
//               <tr>\
//                 <td class="id">' + product.id + '</td>\ 
//                 <td><input type="text" class="name" value="'+ product.name +
//                   '"></td>\
// );
//           })
//          console.log("resp", resp);  
//        },  
//        error: function(e){  
//          alert('error', e);  
//        }  
//      });