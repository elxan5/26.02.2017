document.write('<div class="main">')
for(i=1;i<=8;i++){
   document.write('<div class="row">')
for(j=1;j<=8;j++){
	if((i+j)%2==0){
          document.write('<div class="col white"></div>')  }
    else {
          	document.write('<div class="col black"></div>') }

                  }
   document.write('</div>')
                 }
document.write('</div>')