export function UppperCaseFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
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