var input1 = document.getElementById( 'slide1-upload' );
var input2 = document.getElementById( 'slide2-upload' );
var input3 = document.getElementById( 'slide3-upload' );

var infoArea1 = document.getElementById( 'slide1-upload-filename' );
var infoArea2 = document.getElementById( 'slide2-upload-filename' );
var infoArea3 = document.getElementById( 'slide3-upload-filename' );



input1.addEventListener( 'change', showFileName );
input2.addEventListener( 'change', showFileName2 );
input3.addEventListener( 'change', showFileName3 );


function showFileName( event ) {
  
  // the change event gives us the input it occurred in 
  var input1 = event.srcElement;
  
  // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
  var fileName1 = input1.files[0].name;
  
  // use fileName however fits your app best, i.e. add it into a div
  infoArea1.textContent = fileName1;
}

function showFileName2( event ) {
  
    // the change event gives us the input it occurred in 
    var input2 = event.srcElement;
    
    // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
    var fileName2 = input2.files[0].name;
    
    // use fileName however fits your app best, i.e. add it into a div
    infoArea2.textContent = fileName2;
  }

  function showFileName3( event ) {
  
    // the change event gives us the input it occurred in 
    var input3 = event.srcElement;
    
    // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
    var fileName3 = input3.files[0].name;
    
    // use fileName however fits your app best, i.e. add it into a div
    infoArea3.textContent = fileName3;
  }