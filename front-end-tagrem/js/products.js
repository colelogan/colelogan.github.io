var thenum;

window.onload = function() {
    searchSel();
    getElementsBy();
    clicky();
    close();
    cardTitle();
    cardPhoto();
};

function cardTitle() {
	var ul, h3, i;
	ul = document.getElementById('pdt');
	h3 = ul.getElementsByTagName('h3');
		for (i = 0; i < h3.length; i++) {
			listen('click', h3[i], transfer);
				if( h3[i].event) {
					transfer(h3[i]);
				}
		}
}
function cardPhoto() {
    var ul, img, i;
    ul = document.getElementById('pdt');
    img = ul.getElementsByTagName('img');
        for(i = 0; i < img.length; i++) {
            listen('click', img[i], transfer);
                if(img[i].event) {
                    transfer(img[i]);
                }
        }
}
function transfer(options) {
	var grid, productNum, obj, photo, sc;
	open();
    if(options.target.localName == "img") {
         sc = options.target.attributes[0].nodeValue;
       // console.log(sc);
    } else {
       productNum = options.target.innerHTML;
     }
	for (var key in products) {
	   if (products.hasOwnProperty(key)) {
	      	obj = products[key];
      }
      if (productNum == obj.title || sc == obj.src) {
      	grid = document.getElementById('grid1');
      	grid.getElementsByTagName('p')[0].innerHTML = obj.title;
      	grid.getElementsByTagName('p')[1].innerHTML = obj.price;
      	grid.getElementsByTagName('p')[2].innerHTML = obj.desc;
        // photo = grid.getElementsByTagName('image').src = obj.src;
        // photo.src = obj.src;
       var pp = document.getElementById('productPicture');
       var im = document.createElement('IMG');
       var change = im.setAttribute("src", obj.src);
       im.classList.add('img-responsive');
       pp.appendChild(im);
       var child = pp.children;

          if(child.length >= 2) {
            for(var j = 0; j < child.length; j++) {
              pp.removeChild(child[j]);
            }
        }
      }
	}
}

var options = {
    cardTitle:cardTitle,
    cardPhoto: cardPhoto
};
function clicky() {
	var closeBtn = document.getElementById('close');
	listen('click', closeBtn, close);
}
function close() {
	document.getElementById('grid1').style.display = "none";
}

function open() {
    document.getElementById('grid1').style.display = 'block'; // Show;
}


 function filter() {
	var _selected, se, op, p, list, ul, li, plus;
	var e = document.getElementById("mySelect");
	console.log(e.selectedIndex);
    	ul = document.getElementById('pdt');
    	li = ul.getElementsByTagName("li");
    		console.log(li.length);
    		for (plus = 0; plus < li.length; plus++) {
    			console.log(li[plus]);
    			p = li[plus].getElementsByTagName('p')[0].innerText.match(/\d+/)[0];
    			if(e.selectedIndex == 0) {
    					li[plus].style.display = "";
    			}
    			if(e.selectedIndex == 1) {
    				if (p < 500) {
    					li[plus].style.display = "";
    				} else {
    					li[plus].style.display = "none";
    				}
    			}
    			if(e.selectedIndex == 2) {
    				if (p <= 1000) {
    					li[plus].style.display = "";
    				} else {
    					li[plus].style.display = "none";
    				}
    			}
    			if(e.selectedIndex == 3) {
    				if (p <= 2000) {
    					li[plus].style.display = "";
    				} else {
    					li[plus].style.display = "none";
    				}
    			}
    			if(e.selectedIndex == 4) {
    				if( p > 2000) {
    					li[plus].style.display = "";
    				} else {
    					li[plus].style.display = "none";
    				}
    			}

    		}
	}
