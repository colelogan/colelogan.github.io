var a;

function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
         var r = elem.attachEvent("on"+evnt, func);
         return r;
    } else {
      
    }
}

function searchSel() {
    var input, filter, ul, li, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
        if(filter.length == 0 || input.value == null) {
            hide();
        }
        if (filter.length > 0) {
        show();
        ul = document.getElementById("states");
        li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
                listen('click', li[i], addInput);
            }
        }
}
function addInput(a) {
    var yea = document.getElementsByTagName('input')[0].value = a.path[0].innerHTML;
    hide();
}
function show() {
    document.getElementById('states').style.display = 'block'; // Show;
}

function hide() {
    document.getElementById('states').style.display = 'none';
}
function getElementsBy() {
    var inp = document.getElementsByTagName('input');
    listen('keyup', inp, searchSel);
}
