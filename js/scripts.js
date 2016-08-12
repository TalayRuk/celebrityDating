$(document).ready(function(){
  $(".start").click(function(){
    $("#celeb").hide();
    $(".Questions").show();
  });

  $("#dare").click(function(event){
    event.preventDefault();
    var gender = $("select#gender").val();
    var food = $("select#food").val();
    var sport = $("select#sport").val();

    if (gender === 'M' && food ==='A' && sport === 'D') {
      $("#MAE").hide();
      $("#MBD").hide();
      $("#MBE").hide();
      $("#FAD").hide();
      $("#FAE").hide();
      $("#FBD").hide();
      $("#FBE").hide();
      $("#MAD").show();
    }else if (gender === 'M' && food ==='A' && sport === 'E') {
      $("#MAD").hide();
      $("#MBD").hide();
      $("#MBE").hide();
      $("#FAD").hide();
      $("#FAE").hide();
      $("#FBD").hide();
      $("#FBE").hide();
      $("#MAE").show();
    }else if (gender === 'M' && food ==='B' && sport === 'D') {
      $("#MAD").hide();
      $("#MAE").hide();
      $("#MBE").hide();
      $("#FAD").hide();
      $("#FAE").hide();
      $("#FBD").hide();
      $("#FBE").hide();
      $("#MBD").show();
    }else if (gender === 'M' && food ==='B' && sport === 'E') {
      $("#MAD").hide();
      $("#MAE").hide();
      $("#MBD").hide();
      $("#FAD").hide();
      $("#FAE").hide();
      $("#FBD").hide();
      $("#FBE").hide();
      $("#MBE").show();
    }else if (gender === 'F' && food ==='A' && sport === 'D') {
      $("#MAD").hide();
      $("#MAE").hide();
      $("#MBD").hide();
      $("#MBE").hide();
      $("#FAE").hide();
      $("#FBD").hide();
      $("#FBE").hide();
      $("#FAD").show();
    }else if (gender === 'F' && food ==='A' && sport === 'E') {
      $("#MAD").hide();
      $("#MAE").hide();
      $("#MBD").hide();
      $("#MBE").hide();
      $("#FAD").hide();
      $("#FBD").hide();
      $("#FBE").hide();
      $("#FAE").show();
    }else if (gender === 'F' && food ==='B' && sport === 'D') {
      $("#MAD").hide();
      $("#MAE").hide();
      $("#MBD").hide();
      $("#MBE").hide();
      $("#FAD").hide();
      $("#FAE").hide();
      $("#FBE").hide();
      $("#FBD").show();
    }else if (gender === 'F' && food ==='B' && sport === 'E') {
      $("#MAD").hide();
      $("#MAE").hide();
      $("#MBD").hide();
      $("#MBE").hide();
      $("#FAD").hide();
      $("#FAE").hide();
      $("#FBD").hide();
      $("#FBE").show();
    }

  });
});
