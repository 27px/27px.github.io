var body;
function _(id)
{
  return document.getElementById(id);
}
window.onload=function(){
  body=document.body;
  _('menu').addEventListener("click",function(){
    body.classList.toggle("hidden-menu");
  });
  body.addEventListener("keydown",function(){
    if(event.keyCode==17)
    {
      body.setAttribute("ctrl","1");
    }
  });
  body.addEventListener("keyup",function(){
    if(event.keyCode==17)
    {
      body.setAttribute("ctrl","0");
    }
  });
  var nav_items=document.getElementsByClassName("nav-item");
  for(nav_item of nav_items)
  {
    nav_item.addEventListener("click",function(){
      if(body.getAttribute("ctrl")==1)
      {
        window.open(this.getAttribute("data-url"));
      }
      else
      {
        for(item of nav_items)
        {
          item.classList.remove("nav-active");
        }
        this.classList.add("nav-active");
        window.location=this.getAttribute("data-url");
      }
    });
  }
  scrolled();
};
window.onresize=function(){
  if(body!=undefined || body!=null)
  {
    body.classList.add("hidden-menu");
    scrolled();
  }
};
window.onscroll=function(){
  if(body!=undefined || body!=null)
  {
    scrolled();
  }
};
function scrolled()
{
  var list=document.querySelectorAll(".animated");
  var s=body.scrollTop;
  for(x of list)
  {
    var c=x.getBoundingClientRect();
    if(!c)
    {
      x.parentNode.classList.add("animated-box");
    }
    else
    {
      var v=c.y-(1*c.height);
      var f=c.y+(0.6*c.height);
      if(v<0 && f>0)
      {
        x.parentNode.classList.add("animated-box");
      }
      else
      {
        x.parentNode.classList.remove("animated-box");
      }
    }
  }
}
