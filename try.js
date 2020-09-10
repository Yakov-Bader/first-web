let elem=document.getElementById('pick-from-scope');
    let elemnt = elem.options[elem.selectedIndex].text;
    let answerFrom=document.getElementById('from');
    let answerTo=document.getElementById('to');
    answerFrom.innerHTML = elemnt; 
    answerTo.innerHTML = elemnt;
function mobileMenu(){
    let mobile=document.getElementById('mobile-menu');
    mobile.classList.toggle("show");
}
function change(change) {
    let goTo= document.getElementById(`pick-from-${change}`);
    let getTo= document.getElementById(`pick-to-${change}`);
    let changing = document.getElementsByClassName('go-to');
    for(let i=0;i<changing.length;i++){
        let name=changing[i].innerHTML;
        if(name===change){
            goTo.classList.remove("show");
            getTo.classList.remove("show");
        }else{
            let go= document.getElementById(`pick-from-${name}`);
            let get= document.getElementById(`pick-to-${name}`);
            go.classList.add("show");
            get.classList.add("show");
        }
    }
    let elem=document.getElementById(`pick-from-${change}`);
    let elemnt = elem.options[elem.selectedIndex].text;
    let answerFrom=document.getElementById('from');
    let answerTo=document.getElementById('to');
    answerFrom.innerHTML = elemnt; 
    answerTo.innerHTML = elemnt;   
}
function answerProp(where){
    let elem=document.getElementById(`pick-${where}`);
    let elemnt = elem.options[elem.selectedIndex].text;
    if(where.substr(0, 4)==="from"){
        let answer=document.getElementById('from');
        answer.innerHTML = elemnt;
    }
    else{
        let answer=document.getElementById('to');
        answer.innerHTML = elemnt;
    } 
}
function num(number){
    let line=document.getElementById('num');
    if(line.innerHTML>=0){
        line.innerHTML += number;
    }else{
        line.innerHTML = number;
    }
}

function calculate(){
    if(document.getElementById('num').innerHTML==="___"){
        alert("you didn't put a number in")
    }else{
        let help= document.getElementsByClassName('property');
        let helpFrom=null;
        let helpTo=null;
        let number=1;
        let to1=null;
        let from1=null;
        let subject=0;
        for(let i=0;i<help.length;i++){
            if(help[i].classList.contains("show")){
            
            }
            else{
                let id=help[i].id;
                if(id.substr(5, 4)==="from") {
                    subject=id.slice(10);
                    helpFrom= document.getElementById(`pick-from-${subject}`);
                    from=helpFrom.options[helpFrom.selectedIndex].value;
                }else{
                    subject=id.slice(8);
                    helpTo=document.getElementById(`pick-to-${subject}`);
                    to=helpTo.options[helpTo.selectedIndex].value;
                } 
            }
        }
        let fromTo=null;
        fromTo = kind(subject,to,from);
        from = fromTo.from;
        to = fromTo.to;
        to1=fromTo.to1;
        from1=fromTo.from1;
        number=document.getElementById('num');
        number=parseFloat(number.innerHTML);
        let answer1=document.getElementById('grc');
        let answer2=document.getElementById('czi');
        
        let answer=(from/to)*number;
            answer=answer.toFixed(2);
            answer1.innerHTML=answer;
        if(from1!==null){
            let answerB=(from1/to)*number;
            answerB=answerB.toFixed(2);
            answer2.innerHTML=answerB;
        }else if(to1!==null){
            let answerB=(from/to1)*number;
            answerB=answerB.toFixed(2);
            answer2.innerHTML=answerB;
        }else{
            answer2.innerHTML=answer;
        }
    }
    
}
function kind(kind,to,from){
    let from1=null;
    let to1=null;
    if(kind==="scope"){
        let egg=1;
        let log=6*egg;
        let kav=24*egg;
        let seah=144*egg;
        let eifa=432*egg;
        let kor=4320*egg;
        let smkGrc=(1/57.6)*egg;
        let czi=(1/99.53)*egg;
        switch(from){
            case "eifa":
                    from=eifa;
                break;
            case "seah":
                    from=seah;
                break;
            case "kav":
                    from=kav;
                break;
            case "log":
                    from=log;
                break;
            case "kor":
                    from=kor;
                break;
            case "egg":
                    from=egg;
                break;
            case "smk":
                    from=smkGrc;
                    from1=czi;
                break;
        }
        switch(to){
            case "eifa":
                    to=eifa;
                break;
            case "seah":
                    to=seah;
                break;
            case "log":
                    to=log;
                break;
            case "kav":
                    to=kav;
                break;
            case "kor":
                    to=kor;
                break;
            case "egg":
                    to=egg;
                break;
            case "smk":
                    to=smkGrc;
                    to1=czi;
                break;
        }
    }else if(kind==="weight"){
        let proota=1;
        let isar=8*proota;
        let poondion=16*proota;
        let maah=32*proota;
        let dinar=192*proota;
        let shekel=438*proota;
        let sela=768*proota;
        let darkon=1536*proota;
        let gram=(0.025)*proota;
        let mana=19200*proota;
        switch(from){
            case "proota":
                    from=proota;
                break;
            case "isar":
                    from=isar;
                break;
            case "poondion":
                    from=poondion;
                break;
            case "maah":
                    from=maah;
                break;
            case "dinar":
                    from=dinar;
                break;
            case "shekel":
                    from=shekel;
                break;
            case "sela":
                    from=sela;
                break;
            case "darkon":
                    from=darkon;
                break;
            case "gram":
                    from=gram;
                break;
            case "mana":
                    from=mana;
                break;
        }
        switch(to){
            case "proota":
                    to=proota;
                break;
            case "isar":
                    to=isar;
                break;
            case "poondion":
                    to=poondion;
                break;
            case "maah":
                    to=maah;
                break;
            case "dinar":
                    to=dinar;
                break;
            case "shekel":
                    to=shekel;
                break;
            case "sela":
                    to=sela;
                break;
            case "darkon":
                    to=darkon;
                break;
            case "gram":
                    to=gram;
                break;
            case "mana":
                    to=mana;
                break;
        }
    }else if(kind==="length"){
        let finger=1;
        let tefah=4*finger;
        let sit=4*finger;
        let zeret=12*finger;
        let ama=24*finger;
        let ris=6400*finger;
        let mil=48000*finger;
        let parsa=19200*finger;
        let smkGrc=2*finger;
        let czi=(2.4)*finger;
        switch(from){
            case "tefah":
                    from=tefah;
                break;
            case "finger":
                    from=finger;
                break;
            case "sit":
                    from=sit;
                break;
            case "zeret":
                    from=zeret;
                break;
            case "ama":
                    from=ama;
                break;
            case "ris":
                    from=ris;
                break;
            case "mil":
                    from=mil;
                break;
            case "parsa":
                    from=parsa;
                break;
            case "sm":
                    from=smkGrc;
                    from1=czi;
                break;
        }
        switch(to){
            case "finger":
                    to=finger;
                break;
            case "tefah":
                    to=tefah;
                break;
            case "sit":
                    to=sit;
                break;
            case "zeret":
                    to=zeret;
                break;
            case "ama":
                    to=ama;
                break;
            case "ris":
                    to=ris;
                break;
            case "mil":
                    to=mil;
                break;
            case "parsa":
                    to=parsa;
                break;
            case "sm":
                    to=smkGrc;
                    to1=czi;
                break;
        }
    }  
    return {from:from ,
        to:to,
        to1:to1,
        from1:from1};
}