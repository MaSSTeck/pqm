export function UppperCaseFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function FormatStringAsURL(str){
    var  strSmallCase = str.charAt(0).toLowerCase() + str.slice(1);
    var truncatedStr =  strSmallCase.split(" ").splice(0,25).join(" ");
    var rmSpecialSymbols =  truncatedStr.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    var urlString = rmSpecialSymbols.replace(/[^a-zA-Z0-9]/g, '-');
    // urlString = questionId+"-"+urlString;
    return urlString;
}

export function Color4Subject(subject){
    var subjColor;
    switch (subject) {
        case "english":
            subjColor = "red";
            break;
        case "mathematics":
            subjColor = "orange";
            break;
        case "commerce":
            subjColor = "yellow";
            break;
        case "accounting":
             subjColor = "olive";
            break;
        case "biology":
            subjColor = "green";
            break;
        case "physics":
             subjColor = "teal";
            break;
        case "chemistry":
            subjColor = "blue";
            break;
        case "commerce":
            subjColor = "violet";
            break;
        case "accounting":
             subjColor = "purple";
            break;
        case "biology":
            subjColor = "pink";
            break;
        case "englishlit":
             subjColor = "grey";
            break;
        case "government":
            subjColor = "black";
           break;
        case "crk":
            subjColor = "brown";
           break;
        case "geography":
            subjColor = "red";
           break;    
        case "economics":
            subjColor = "orange";
           break;
        case "irk":
            subjColor = "green";
           break;
        case "civiledu":
            subjColor = "purple";
           break;
        case "insurance":
           subjColor = "violet";
          break;
        case "currentaffairs":
            subjColor = "pink";
           break;
        case "history":
           subjColor = "blue";
          break;
        default:
            subjColor = "brown";
    }
    return subjColor;
}

export function FormatDate(datetime) {
    var theEvent = new Date(datetime);
    var now = new Date();
    var timeElapsed = (now - theEvent) / 1000;

    var seconds    = timeElapsed ;
    var minutes    = Math.floor(timeElapsed / 60 );
    var hours      = Math.floor(timeElapsed / 3600);
    var days       = Math.floor(timeElapsed / 86400 );
    var weeks      = Math.floor(timeElapsed / 604800);
    var months     = Math.floor(timeElapsed / 2600640 );
    var years      = Math.floor(timeElapsed / 31207680 );
    
    if (seconds <= 60) {return "Just now";}
    if (minutes <= 60) {if(minutes ==1){return "A minute ago"}else{return minutes+" mins ago";}}
    if (hours <= 24) {if(hours == 1){return "An hour ago"}else{return hours+ " hrs ago";}}
    if (days <= 7) {if(days == 1){return "A day ago"}else{return days+ " days ago";}}
    if (weeks <= 4.3) {if(weeks == 1){return "A wk ago"}else{return weeks+ " wks ago";}}
    if (months <= 12) {if(months == 1){return "A mnth ago"}else{return months+ " mnths ago";}}
    else {if(years == 1){return "A year ago"}else{return years+ " years ago";}}
}
