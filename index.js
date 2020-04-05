const axios = require('axios')
const cheerio = require('cheerio')

const siteURL =  "https://covid19.saglik.gov.tr/"


let date = '';
let obj ={
    total_tests:'',
    tests_done_today:'',
    deaths:'',
    intensive_care:'',
    intubated_patients:'',
    recoverd:'',
    confirmed_cases:'',
    confirmed_cases_today:'',
    deaths_today:'',
    recoverd_today:'',
    date:''
}
let xd={}

const fetchData = async () => {
    const result = await axios.get(siteURL);
    return cheerio.load(result.data);
};

const getResults = async () => {
    const $ = await fetchData();
    let month=0;
    var arr = [];
    var arr2=[];
    switch ($('.takvim .p2').text()) {
        case 'OCAK' : month=1
            break
        case 'ŞUBAT': month=2
            break
        case 'MART': month =3
            break
        case 'NİSAN': month =4
            break
        case 'MAYIS': month =5
            break
        case 'HAZİRAN':month =6
            break
        case 'TEMMUZ':month=7
            break
        case 'AĞUSTOS':month=8
            break
    }
    date = $('.takvim .p3').text() + '-' + month + '-' + $('.takvim .p1').text() ;

    $('.baslik-k span').each((i,elem)=>{
        arr.push($('.baslik-k span').get(i).children[0].data.trim());
    })
    $('.baslik-k-2 span').each((i,elem)=>{
        arr2.push($('.baslik-k-2 span').get(i).children[0].data.trim());
    })

    obj.total_tests=parseInt(arr[1].split('.').join(""));
    obj.tests_done_today=parseInt(arr[3].split('.').join(""));
    obj.deaths=parseInt(arr[5].split('.').join(""))
    obj.intensive_care=parseInt(arr[7].split('.').join(""))
    obj.intubated_patients=parseInt(arr[9].split('.').join(""));
    obj.recoverd=parseInt(arr[11].split('.').join(""))
    obj.confirmed_cases=parseInt(arr2[1].split('.').join(""))
    obj.confirmed_cases_today=parseInt(arr2[3].split('.').join(""))
    obj.deaths_today=parseInt(arr2[5].split('.').join(""))
    obj.recoverd_today=parseInt(arr2[7].split('.').join(""))
    obj.date=date
    return obj;
};



 module.exports.getResult =  getResults()