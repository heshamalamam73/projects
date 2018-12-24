componentDidMount(){
        function scrolll(){
          // call the element you want to change his style 
        var top = document.getElementById('head')
        // the far throw the header and mouse position
        var ypos = window.pageYOffset;
        if(ypos > 20 ) {
          top.style.fontSize = "40px";
        }else{
          top.style.fontSize ="20px";
        }
        console.log(top.style.fontSize)

    }
    window.addEventListener("scroll",scrolll )
   }