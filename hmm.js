'use strict';

const _ = require('lodash');
const fs = require('fs');

const arr = [
    "2410",
    "6013012024206572",
    "84087762633845",
    "3470824782",
    "2003808114",
    "1550228270",
    "754401086247530",
    "081287409763",
    "080901003243523",
    "0145130096362",
    "0930284221",
    "0140012",
    "280202",
    "0933456513",
    "51300963620140012",
    "12345",
    "6019005000243209",
    "01400125130096362",
    "089677715557",
    "5379413008725399",
    "012001044774506",
    "0428801011160530",
    "41332890028",
    "439401014366538",
    "82910146666",
    "77406410555",
    "7115008960",
    "1543",
    "083821395485",
    "428801011160530",
    "4983806",
    "032207679",
    "1050012077707",
    "0322076799",
    "872033041",
    "6817",
    "1320007840970",
    "118630319",
    "0524",
    "0948287547",
    "154376",
    "6013011055453624",
    "011079",
    "5379412034288497",
    "020376",
    "1453",
    "035184376",
    "3507952013135265",
    "002",
    "00324301018088536",
    "6815155981",
    "1650223019",
    "7125017946",
    "14017",
    "5307952013135265",
    "7830577",
    "02157987400",
    "0020307",
    "123456",
    "172516",
    "03243010107562537",
    "9291581",
    "5307952004369188",
    "120120",
    "02260585",
    "758112",
    "0002260585",
    "1804197800",
    "6019004530538311",
    "70365610800",
    "085880591911",
    "6019008506874022",
    "33250101371534",
    "5446192",
    "62621601015892532",
    "5260512005048267",
    "761974",
    "8090308904",
    "610301011811531",
    "23621539",
    "5830045318",
    "230682",
    "1427526759",
    "087808909448",
    "03530031492",
    "666333",
    "5379413005930083",
    "087808909440",
    "11111110",
    "5264140019413146",
    "7802279",
    "84703578",
    "0556807248",
    "5472802",
    "3164219",
    "0838718847716",
    "0793047324",
    "081221469498",
    "4097662816130515",
    "4451375416",
    "6019008506655074",
    "7005163009",
    "4290103561161",
    "282828",
    "8320386494",
    "52620020762",
    "38772648010000527649",
    "3877264",
    "537941304131261",
    "6770102805539",
    "083871884716",
    "014",
    "778899",
    "1982559121",
    "319501004206505",
    "600211803",
    "3620466117",
    "989082177802119",
    "5845071790",
    "5376413010707864",
    "015",
    "5957030",
    "5767876868649484646464945",
    "7110044767",
    "00912127618",
    "33230102108739",
    "224101000112566",
    "0392327",
    "5307952017927956",
    "13130012460327",
    "0140251532876",
    "5720208734",
    "176701005391",
    "6013",
    "5379413009992295",
    "002201101009459504",
    "3327085312750021",
    "601900151132816",
    "5124",
    "6089019420538",
    "6019001751132816",
    "0025",
    "1946342450222758",
    "8800711461",
    "140017606757",
    "90014013464",
    "54655093002",
    "8740083134047281",
    "113260483",
    "360319610370002",
    "2761502362",
    "677901037530536",
    "120010490600",
    "5371762430311881",
    "00577015800022713",
    "1946902850470115",
    "041925956",
    "1960810",
    "7096197351",
    "11440017772267",
    "50006",
    "112233",
    "5221843097532639",
    "008",
    "101001009684",
    "0087595",
    "081253941830",
    "243000000",
    "082401010045504",
    "066262205",
    "6720580281",
    "13782818",
    "67205809",
    "00802648324",
    "08811404515",
    "5379413006659632",
    "6485206961",
    "0001601502489339",
    "664046835",
    "4097662810078819",
    "058101003641534",
    "5860046426",
    "66300758937",
    "0146871479345",
    "082126666683",
    "6019007516197234",
    "060622",
    "90014059108",
    "6135883",
    "0140015",
    "6733689",
    "004132861310",
    "1360004515030",
    "5307952023075576",
    "5379413010855861",
    "120504",
    "0146910421831",
    "1381240196",
    "6910421831721",
    "6013011088328025",
    "6019008504765743",
    "0019249972100",
    "39771931",
    "9103014211820005",
    "394023653",
    "0647555175",
    "1250012409860",
    "4278126788",
    "5379412025354738",
    "6032988909236536",
    "260109964750",
    "025",
    "5379413009965119",
    "0816939581",
    "162240733",
    "0080",
    "5191",
    "34524020570140012",
    "0836646398",
    "002113401011638509",
    "90014069698",
    "254",
    "6910421831014",
    "1946900741333179",
    "8160755361",
    "181836",
    "15550014049566",
    "3531654527",
    "0833034251",
    "1482149657",
    "5379412028648151",
    "194634081027",
    "45601020045536",
    "9000029934875",
    "156001493481",
    "382301008316536",
    "0833034215",
    "70502911701",
    "848009541489623600",
    "658901000433802",
    "05964108",
    "03110013216885",
    "3480413398",
    "0147915038981",
    "37224597",
    "021586",
    "008001157654504",
    "17000004243162",
    "010204",
    "4097663103838398",
    "5379413009687416",
    "0389301570001817",
    "18313896075",
    "6532523",
    "5221841170303571",
    "1123",
    "900028388024",
    "0144000101461526",
    "1343",
    "185301000426537",
    "551029900",
    "25334386",
    "8331330695",
    "848523",
    "6032984121721611",
    "6019008509114715",
    "0095896405100",
    "0063100253122",
    "842083338",
    "0143770402548",
    "456",
    "21323232841",
    "2957239678",
    "70835143417",
    "0148175185191",
    "1946900112443813",
    "5307952009926685",
    "010305",
    "842064338",
    "080270",
    "399701014724533",
    "083807006594",
    "34316633617",
    "01400128175185191",
    "0080606",
    "191105",
    "1340004083209",
    "006",
    "9000050062151",
    "093001017502537",
    "5964010020774539",
    "5371761690138372",
    "190909",
    "8372940",
    "210470",
    "118657181",
    "152001213648",
    "1040012",
    "6898",
    "0141890391377",
    "1204",
    "006401008406",
    "101072",
    "429901001534526",
    "1381350666",
    "120483",
    "082298452222",
    "081299334401",
    "6019007502711923",
    "1349722",
    "1981023770",
    "040501002547501",
    "6884",
    "0323",
    "6019005505612460",
    "2101",
    "705598392100",
    "0081670001936565",
    "8175578",
    "0474564",
    "7127373738",
    "240676",
    "0094073685100",
    "3901083179961328",
    "001",
    "671314424000",
    "5323800023",
    "009",
    "273161312",
    "2294683",
    "083601016297533",
    "817557788175185191",
    "0486193722",
    "160001767847",
    "6019002661508152",
    "34085835",
    "5183891",
    "387183754",
    "6280341556",
    "407201017100353",
    "76920100711853",
    "08",
    "109000033949745",
    "01906713131",
    "13004",
    "27300921919",
    "59641011245535",
    "12900113755132",
    "6019005505185277",
    "685030254",
    "1280314524",
    "1",
    "70742543",
    "8528152",
    "6257",
    "1300436",
    "6013012032266931",
    "77157290",
    "5379412035915965",
    "83786",
    "0831555210",
    "1946342550169362",
    "731001009085538",
    "429483786",
    "022",
    "005301117442502",
    "70583389300",
    "004122179732",
    "002135401017708508",
    "6019",
    "0148520062280",
    "081253649040",
    "7130582488",
    "47110527611",
    "2061",
    "08604306473",
    "00670228835",
    "04971463028",
    "840838171650968",
    "84083833091065",
    "890001",
    "5379413004054265",
    "030116404582",
    "00701996611",
    "84082217210172",
    "004128285593",
    "2160",
    "84083833091052",
    "84083833091023",
    "7130684542",
    "00206368",
    "840859171650972",
    "840859171650958",
    "0140052",
    "84083833090579",
    "5379413012295421",
    "0141080695523",
    "160660",
    "2290204751",
    "3175104808731001",
    "081313007058",
    "1102217190",
    "7630394729",
    "583029167",
    "1560005247304",
    "2740209051",
    "84085719192805",
    "84083833090576",
    "84059171650958",
    "170000639374",
    "6019001759850419",
    "840859171650973",
    "84083833091001",
    "840859171651266",
    "6019001752655823",
    "081202",
    "085780583861",
    "41167",
    "8647054278",
    "7738",
    "115767807",
    "7130877499",
    "266392906",
    "110614250",
    "79560100693508",
    "0835173417",
    "054335084",
    "3216020706900007",
    "0083091460100",
    "8740081385918151",
    "7122126476",
    "2562263885",
    "39358081385918151",
    "6013011000383611",
    "804081333064566",
    "3202334809800004",
    "418201008196532",
    "043392245",
    "6103010118115310",
    "06338579",
    "2000502441",
    "55781002320",
    "84082337215929",
    "6032984138761006",
    "5307952008196157",
    "092201012547533",
    "5379412025913848",
    "5576920023635586",
    "469401013265539",
    "4097662854397935",
    "6019007502506307",
    "0007130877499",
    "5379413003182000",
    "150001",
    "303801030764538",
    "002778201006591531",
    "3012802491814",
    "6034948820891585",
    "322601032903534",
    "8099082384647047",
    "3537",
    "7106964747",
    "5379412035912969",
    "00385891",
    "0144730466094",
    "51523026758",
    "41820101695358",
    "5723",
    "258235811",
    "0486",
    "7096575585",
    "081211624103",
    "5379413004229974",
    "6087010135785339",
    "184601000289",
    "5210838000433985",
    "5379413010996145",
    "407191642900",
    "1130012768404",
    "3205190107870098",
    "6019001765531045",
    "0390684017",
    "84081218726347",
    "7750378945",
    "415601012942532",
    "12846433525",
    "003570156000248",
    "6019007502817225",
    "1682388261",
    "843543661",
    "4179010206775353",
    "1970585466",
    "05328868",
    "5379413008728963",
    "623439",
    "0143174046196",
    "5379413006968033",
    "998866",
    "003582900576",
    "900027333898",
    "7860496611",
    "220601005830570",
    "02262827",
    "5379413009577054",
    "1101",
    "84083833091040",
    "5318010020325537",
    "201281",
    "4097663128032001",
    "0420951447",
    "2820284204",
    "6019007502954101",
    "836909",
    "7617119712300",
    "5379412020562806",
    "5307952015689715",
    "90014192631",
    "1207275005880001",
    "1630002759275",
    "1380015915627",
    "8430580",
    "6019001737680359",
    "5260",
    "885631175",
    "9239579",
    "0624",
    "1270009943018",
    "0147900654396",
    "1560007004445",
    "1050010551871",
    "1320016825904",
    "089646983852",
    "0341463",
    "290994",
    "9000044191436",
    "1200010523442",
    "494701014580353",
    "6019005000605621",
    "76505761",
    "8720339847",
    "0143680093678",
    "1271121909920004",
    "025160242",
    "418201016256532",
    "220701",
    "1150731",
    "002410701008682539",
    "07056266435000",
    "140296",
    "765057",
    "85355761",
    "121372587",
    "801701002074537",
    "2604",
    "09538724444",
    "5379413008919851",
    "08972818745",
    "0090010",
    "04535835116",
    "480401061587532",
    "839409",
    "6019001746312838",
    "2036010101133506",
    "3702",
    "98009594857526600",
    "221601000986534",
    "28641086",
    "0511750758",
    "082391514343",
    "4801031587532",
    "6019008509114731",
    "7275015297",
    "302301024727535",
    "16400002690925",
    "8987208",
    "90895382034751",
    "009835305101",
    "647901013578531",
    "39782315",
    "131001001524538",
    "6013012019771341",
    "12111981",
    "7702901001738536",
    "451",
    "115061145",
    "5061145",
    "84083833091038",
    "84083833090613",
    "220077636646",
    "211286",
    "320050783",
    "344043877",
    "0838644065",
    "085559440887",
    "158301004100504",
    "0020307410701008682539",
    "014601560004886",
    "601905517594201",
    "12510010095065",
    "67755208721",
    "0001",
    "84083833090618",
    "08551469015",
    "1682655",
    "7648999",
    "2190125026",
    "6032988623145427",
    "085771355770",
    "0145000537499",
    "020304",
    "7401228539",
    "2952156994",
    "3174010807930003",
    "049714630280",
    "4160158463",
    "0373640403",
    "601900850476743",
    "84083833091037",
    "84083833091057",
    "0003801500499065",
    "580483683602000",
    "5379413005133779",
    "5379413009411262",
    "003201069437",
    "5302001123",
    "00600044433",
    "4770149574",
    "6768016183531",
    "090910",
    "3350037284",
    "3180053",
    "1090015934905",
    "5895986",
    "84083833090575",
    "18450100299503",
    "6019007513609942",
    "841045531",
    "49714630280",
    "022704498768100",
    "7401480891",
    "0146630705302",
    "3352",
    "0510680001",
    "039201005290532",
    "3720331307",
    "01400126755110543",
    "6120301045",
    "00057035",
    "0836401016297533",
    "4355",
    "0024107",
    "0403200026230",
    "077013695530",
    "90014245654",
    "8410422531",
    "514290884",
    "6032988625191353",
    "1000000006871479345",
    "808619360508",
    "6019002680287283",
    "209901009444505",
    "0107",
    "0290004324",
    "087884158882",
    "4294",
    "441930",
    "14077",
    "2572575",
    "46565664667644",
    "3602125307840003",
    "8693089503077719",
    "1970618420",
    "4417010078333537",
    "4761098444",
    "6013012034792470",
    "4740676339",
    "426044944",
    "840859171651275",
    "682231",
    "3646",
    "900001573430",
    "4302895",
    "1670001491610",
    "081316428833",
    "87330752",
    "663070524",
    "426",
    "115007284831",
    "22434567",
    "070050",
    "60020041169",
    "087882832795",
    "14000728638",
    "5379413007959411",
    "5881010051505501",
    "00069855",
    "51404080039",
    "898083867011219",
    "0938",
    "160000018739",
    "2180275947",
    "085559576321",
    "143000",
    "8770603464",
    "5379413008410687",
    "091219876",
    "3671045404950003",
    "5379412014021739",
    "089655961883",
    "7485873",
    "7427010052707535",
    "0000954",
    "7240576",
    "4038010059855350",
    "840859171651271",
    "840859171651298",
    "7082796287",
    "1340016367916",
    "8030291884",
    "6274010147578535",
    "70205771",
    "209601003636534",
    "7124968105",
    "1481271269",
    "1946900170414698",
    "6013012080556704",
    "002301048211504",
    "2951990793",
    "320301033231636",
    "119201001284530",
    "84085693046310",
    "84089503077715",
    "5379413011146344",
    "5307952020795044",
    "13700156802",
    "1234567",
    "1500017",
    "02404699715",
    "162810468580033301",
    "0765",
    "2780368755",
    "0877737",
    "0380066050",
    "7910010074537",
    "166109270",
    "840859171651289",
    "6019008507121803",
    "123321",
    "4616993221938065",
    "0359503556"
];

(async () => {
    console.log('lala');
    console.log('hoho');
    const result = _.sortBy(arr, function (e) { return e.length });
    await fs.writeFileSync('hmm.txt', JSON.stringify(result, null, 2));
})();