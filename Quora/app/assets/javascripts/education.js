 $(document).ready(function(){
 	
 	function check_name(){
 		if($('#school').val()=="")
 			$("#error").html("plz fill correct value");
 		else{			
 			  var regex=/^[a-zA-Z]*$/gi;                                                              
 			  var f=regex.test($('#name').val());
 			  if(f==true)
 	  			$('#error').html("");
 	  		  else{
 	  				$('#school').val("");
 			    	$("#school").html("invalid school name");
 	  				}
 	  		}
 	}
 	
 	$('#school').blur(function(){
			
		check_name();
	});
	
 	$('#reg').on("submit",function(e){		
 		  if($('#school').val()=='')
 		    check_name();
  			else{
 					    e.preventDefault();
               return false; 
	          }
 	  });

});