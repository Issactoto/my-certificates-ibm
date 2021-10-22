


export function convertCertificateType(certNature){
    switch(certNature) {
        case 'Badge':
            return <p style={{color:"#0f62fe"}}>{certNature}</p>;
        case 'Certificate':
            return <p style={{color: "#fa4d56"}}>{certNature}</p>;
        case 'Course':
            return <p style={{color: "brown"}}>{certNature}</p>;
        default:
            return 'foo';
    }
}

export function convertCompany(certNature){
    switch(certNature) {
        case 'IBM':
            return <p style={{color:"darkBlue"}}>{certNature}</p>;
        case 'A Cloud Guru':
            return <p style={{color: "purple"}}>{certNature}</p>;
        case 'Linux Academy':
            return <p style={{color: "purple"}}>{certNature}</p>;
        case 'Udemy':
            return <p style={{color:"#004144"}}>{certNature}</p>;
        case 'AWS':
            return <p style={{color:"green"}}>{certNature}</p>;
        case 'HashiCorp':
            return <p style={{color:"#081a1c"}}>{certNature}</p>;
        default:
            return <p>{certNature}</p>;
    }
}


export function sortOrder(certList){
    certList.sort(function(a, b){
        return a.category - b.category;
    });
    return certList
}

export function SortByCategory(x,y) {
    return ((x.category == y.category) ?  ((convertCertificate(x.notDisplayLevel) > convertCertificate(y.notDisplayLevel)) ? 1 : -1 ) : ((convertCategory(x.category) > convertCategory(y.category)) ? 1 : -1 ));
}



function convertCertificate(certType){
    switch(certType) {
        case 'Certificate':
            return 0;
        case 'Badge':
            return 1;
        case 'Course':
            return 2;
        default:
            return 10;
    }
}

function convertCategory(certType){
    switch(certType) {
        case 'DevOps':
            return 0;
        case 'Frontend':
            return 1;
        default:
            return 10;
    }
}