fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,DASH,XMR,ETC,DOGE,ZEC,BTS,DGB,XRP,BTCD,PPC,CRAIG,XBS,XPY,PRC,YBC,DANK,GIVE,KOBO,DT,CETI,SUP,XPD,GEO,CHASH,SPR,NXTI,WOLF,XDP,AC,ACOIN,AERO,ALF,AGS,AMC,ALN,APEX,ARCH,ARG,ARI,AUR,AXR,BET,BEAN,BLU,BLK,BOST,BQC,XMY,MOON,ZET,SXC,QTL,ENRG,QRK,RIC,DGC,LIMX,BTB,CAIX,BTMK,BUK,CACH,CANN,CAP,CASH,CAT,CBX,CCN,CIN,CINNI,CXC,CLAM,CLOAK,CLR,CMC,CNC,CNL,COMM,COOL,CRACK,CRYPT,CSC,DEM,DMD,XVG,DRKC,DSB,DVC,EAC,EFL,ELC,EMC2,EMD,EXCL,EXE,EZC,FLAP,FC2,FFC,FIBRE,FRC,FLT,FRK,FRAC,FSTC,FTC,GDC,GLC,GLD,GLX,GLYPH,GML,GUE,HAL,HBN,HUC,HVC,HYP,ICB,IFC,IOC,IXC,JBS,JKC,JUDGE,KDC,KEYC,KGC,LK7,LKY,LSD,LTB,LTCD,LTCX,LXC,LYC,MAX,MEC,MED,MINRL,MINT,MN,MINC,MRY,MZC,NAN,NAUT,NAV,NBL,NET,NMB,NRB,NOBL,NRS,NVC,NMC,NYAN,OPAL,ORB,PHS,POINTS,POT,PSEUD,PXC,PYC,RDD,RIPO,RPC,RT2,RYC,RZR,SAT2,SBC,SDC,SFR,SHADE,SHLD,SILK,SLG,SMC,SOLE,SPA,SPOTS,SRC,SSV,XLM,SUPER,SWIFT,SYNC,SYS,TAG,TAK,TES,TGC,TIT,TOR,TRC,TITC,ULTC,UNB,UNO,URO,USDE,UTC,UTIL,VDO,VIA,VOOT,VRC,VTC,WDC,XAI,XBOT,XC,XCSH,XCR,XJO,XLB,XPM,XST,XXX,YAC,ZCC,ZED,BCN,EKN&tsyms=USD,EUR,RUB&extraParams=cryptoViewer")
    .then(response => response.json()
        .then(data => {
            console.log(data);
            
            for (i in data.DISPLAY) {
                var cryptoList = `<tr id="container"><td id="coin"><img src="https://www.cryptocompare.com/${data.DISPLAY[i].USD.IMAGEURL}?width=25" alt="${i}"><a href="#">${i}</a></td>`
                
                for (key in data.DISPLAY[i]) {
                    var item = `<td id="price">${data.DISPLAY[i][key].PRICE}</td>`
                    cryptoList += item;
                }
                cryptoList += '</tr>';
                document.getElementById('cryptTableBody').innerHTML += cryptoList;
            }
        }))
    .catch((err) => {
        console.log('API call error:', err.message);
    });