function deleteInput(e){document.getElementById(e).remove()}function getCommittees(){$.ajax({url:runningorder_url,success:function(e){e.committees.forEach(function(t){var n="";void 0===t.next_subtopics[0]?n+='<span class="label label-material-'+session_color+'">None</span>':t.next_subtopics.forEach(function(e){n+='<span class="label label-material-'+e.color+'" style="color: '+e.text_color+'">'+e.subtopic+"</span> "}),document.getElementById("subtopics-"+t.pk).innerHTML=n,document.getElementById("debate-"+t.pk).innerHTML=t.debate_total,document.getElementById("session-"+t.pk).innerHTML=t.session_total,committee_box=document.getElementById("committee-"+t.pk),$(committee_box).css("height",t.height+"%"),backlog_count=0,e.backlog.forEach(function(e){backlog_count++,void 0!==$("#backlog"+e.position)[0]&&deleteInput("backlog"+e.position),createPoint("backlog","backlog"+e.position,e.position,0,e.by,e.on,e.round,e.type,e.subtopics)}),e.queue.forEach(function(e){void 0!==$("#queue-"+e.position)[0]&&deleteInput("queue-"+e.position),last_postition=e.position,createPoint("point","queue-"+e.position,e.position,-1,e.by,e.on,e.round,e.type,e.subtopics)})}),setTimeout(getCommittees,1e3)},cache:!1})}function addToRunningOrder(e,t){$.ajax({url:runningorder_url,type:"POST",data:{by:e,type:t},success:function(e){},error:function(e,t,n){$("#results").html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+t+" <a href='#' class='close'>&times;</a></div>"),console.log(e.status+": "+e.responseText),$("#results").html('<div class="alert alert-dismissable alert-danger"><button type="button" class="close" data-dismiss="alert">×</button>There was an error, check your internet and try again!</a>.</div>'),window.setTimeout(function(){$(".alert").fadeTo(500,0).slideUp(500,function(){$(this).remove()})},5e3)}})}function clearAction(e){confirm("Are you sure you want to clear the queue?")===!0&&runningOrderAction(e)}function runningOrderAction(e){$.ajax({url:runningorder_url,type:"POST",data:{action:e},success:function(t){if("R"===e&&deleteInput("queue-"+last_postition),"C"===e)for(var n=0;last_postition>n;)n++,deleteInput("queue-"+n)},error:function(e,t,n){$("#results").html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+t+" <a href='#' class='close'>&times;</a></div>"),console.log(e.status+": "+e.responseText),$("#results").html('<div class="alert alert-dismissable alert-danger"><button type="button" class="close" data-dismiss="alert">×</button>There was an error, check your internet and try again!</a>.</div>'),window.setTimeout(function(){$(".alert").fadeTo(500,0).slideUp(500,function(){$(this).remove()})},5e3)}})}function deletePoint(e){$.ajax({url:runningorder_url,type:"POST",data:{action:"delete",position:e},success:function(e){deleteInput("queue-"+last_postition)},error:function(e,t,n){$("#results").html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+t+" <a href='#' class='close'>&times;</a></div>"),console.log(e.status+": "+e.responseText),$("#results").html('<div class="alert alert-dismissable alert-danger"><button type="button" class="close" data-dismiss="alert">×</button>There was an error, check your internet and try again!</a>.</div>'),window.setTimeout(function(){$(".alert").fadeTo(500,0).slideUp(500,function(){$(this).remove()})},5e3)}})}function movePoint(e,t){$.ajax({url:runningorder_url,type:"POST",data:{action:"move",direction:e,position:t},success:function(e){},error:function(e,t,n){$("#results").html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+t+" <a href='#' class='close'>&times;</a></div>"),console.log(e.status+": "+e.responseText),$("#results").html('<div class="alert alert-dismissable alert-danger"><button type="button" class="close" data-dismiss="alert">×</button>There was an error, check your internet and try again!</a>.</div>'),window.setTimeout(function(){$(".alert").fadeTo(500,0).slideUp(500,function(){$(this).remove()})},5e3)}})}function createPoint(e,t,n,o,s,i,a,r,l){var c=document.getElementById("runningorder-table").getElementsByTagName("tbody")[0],u=c.insertRow(o),d=u.insertCell(0),p=u.insertCell(1),m=u.insertCell(2),b=u.insertCell(3),f=u.insertCell(4),h=u.insertCell(5),g=u.insertCell(6);queue_points++,$(u).attr("id",t),d.innerHTML=n,p.innerHTML=s,m.innerHTML=i,b.innerHTML=a,"P"===r?f.innerHTML="Point":f.innerHTML="DR";var v="";void 0===l[0]?v+='<span class="label label-material-'+session_color+'">None</span>':l.forEach(function(e){v+='<span class="label label-material-'+e.color+'" style="color: '+e.text_color+'">'+e.subtopic+"</span> "}),h.innerHTML=v,"point"===e?g.innerHTML='<a href="javascript:void(0)" class="btn btn-info btn-fab btn-raised mdi-navigation-expand-less" onclick="movePoint(\'up\','+n+')" ></a><a href="javascript:void(0)" class="btn btn-info btn-fab btn-raised mdi-navigation-expand-more" onclick="movePoint(\'down\','+n+')" ></a><a href="javascript:void(0)" class="btn btn-danger btn-fab btn-raised mdi-action-delete" onclick="deletePoint('+n+')" ></a>':g.innerHTML=""}function getCookie(e){var t=null;if(document.cookie&&""!=document.cookie)for(var n=document.cookie.split(";"),o=0;o<n.length;o++){var s=jQuery.trim(n[o]);if(s.substring(0,e.length+1)==e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t}function csrfSafeMethod(e){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(e)}function sameOrigin(e){var t=document.location.host,n=document.location.protocol,o="//"+t,s=n+o;return e==s||e.slice(0,s.length+1)==s+"/"||e==o||e.slice(0,o.length+1)==o+"/"||!/^(\/\/|http:|https:).*/.test(e)}Element.prototype.remove=function(){this.parentElement.removeChild(this)},NodeList.prototype.remove=HTMLCollection.prototype.remove=function(){for(var e=this.length-1;e>=0;e--)this[e]&&this[e].parentElement&&this[e].parentElement.removeChild(this[e])};var backlog_count,last_postition;getCommittees();var queue_points=0,backlog_points=0,csrftoken=getCookie("csrftoken");$.ajaxSetup({beforeSend:function(e,t){!csrfSafeMethod(t.type)&&sameOrigin(t.url)&&e.setRequestHeader("X-CSRFToken",csrftoken)}});