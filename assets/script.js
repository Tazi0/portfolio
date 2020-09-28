// *                  * //
// *    made by       * //
// *     Tazio        * //
// *                  * //

var title = document.getElementById("title")

var click = 0
var reverseMove = false

new CircleType(title)

confetti.speed = 0.2


document.getElementById("wave").onclick = () => {
    click++
    if (click >= 3) {
        click = 0
        confetti.start(1000 * 2)
    }
}

function reverse() {
    if (!reverseMove) {
        reverseMove = true

        title.style.animationDirection = "reverse"
    } else {
        reverseMove = false

        title.style.animationDirection = "normal"
    }

    return true
}

function secret() {
    return "eQv59XQPf3YbyW5yf9PaJTd+RdKgMvfeIdrXEUeqpYQ="
}

var _0x30f1=['return\x20(function()\x20','test','log','apply','bind','exception','info','REUIEXjfpGxvcu13yqFsZ1M5HCAEgPe2LZ1Xlh3T/+q8857BAY+0rJoGTMSLZWWSHMEzzN4rHw7kPR4XCzHG+NDqxF7POE7uFV/GghA1dSciu1rlE2OOKEN0rWduxcoO','console','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','trace','table','lbhe\x20dhvgr\x20tbbq','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','error','__proto__','prototype','toString'];(function(_0x1e8674,_0x30f194){var _0xa2e782=function(_0x5eb02e){while(--_0x5eb02e){_0x1e8674['push'](_0x1e8674['shift']());}},_0x300f98=function(){var _0x5c1212={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x9b2332,_0x4bf84d,_0x4fa0c7,_0x4c8939){_0x4c8939=_0x4c8939||{};var _0x1f0aa1=_0x4bf84d+'='+_0x4fa0c7,_0x575918=0x0;for(var _0x4a3478=0x0,_0x11e4c5=_0x9b2332['length'];_0x4a3478<_0x11e4c5;_0x4a3478++){var _0x3c9f97=_0x9b2332[_0x4a3478];_0x1f0aa1+=';\x20'+_0x3c9f97;var _0x31c991=_0x9b2332[_0x3c9f97];_0x9b2332['push'](_0x31c991),_0x11e4c5=_0x9b2332['length'],_0x31c991!==!![]&&(_0x1f0aa1+='='+_0x31c991);}_0x4c8939['cookie']=_0x1f0aa1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x354210,_0x37631f){_0x354210=_0x354210||function(_0x413e71){return _0x413e71;};var _0x29c626=_0x354210(new RegExp('(?:^|;\x20)'+_0x37631f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x49831e=function(_0xe09405,_0x2f7568){_0xe09405(++_0x2f7568);};return _0x49831e(_0xa2e782,_0x30f194),_0x29c626?decodeURIComponent(_0x29c626[0x1]):undefined;}},_0x255dca=function(){var _0x5f0a37=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5f0a37['test'](_0x5c1212['removeCookie']['toString']());};_0x5c1212['updateCookie']=_0x255dca;var _0x18664c='';var _0x22f3c0=_0x5c1212['updateCookie']();if(!_0x22f3c0)_0x5c1212['setCookie'](['*'],'counter',0x1);else _0x22f3c0?_0x18664c=_0x5c1212['getCookie'](null,'counter'):_0x5c1212['removeCookie']();};_0x300f98();}(_0x30f1,0xf8));var _0xa2e7=function(_0x1e8674,_0x30f194){_0x1e8674=_0x1e8674-0x0;var _0xa2e782=_0x30f1[_0x1e8674];return _0xa2e782;};var _0x9b2332=function(){var _0x4fa0c7=!![];return function(_0x4c8939,_0x1f0aa1){var _0x575918=_0x4fa0c7?function(){var _0x5cad85=_0xa2e7;if(_0x1f0aa1){var _0x4a3478=_0x1f0aa1[_0x5cad85('0x2')](_0x4c8939,arguments);return _0x1f0aa1=null,_0x4a3478;}}:function(){};return _0x4fa0c7=![],_0x575918;};}(),_0x22f3c0=_0x9b2332(this,function(){var _0x11e4c5=function(){var _0x4f0143=_0xa2e7,_0x3c9f97=_0x11e4c5[_0x4f0143('0xc')](_0x4f0143('0xd'))()[_0x4f0143('0xc')](_0x4f0143('0x8'));return!_0x3c9f97[_0x4f0143('0x0')](_0x22f3c0);};return _0x11e4c5();});_0x22f3c0();var _0x5c1212=function(){var _0x31c991=!![];return function(_0x354210,_0x37631f){var _0x29c626=_0x31c991?function(){var _0x502ac8=_0xa2e7;if(_0x37631f){var _0x49831e=_0x37631f[_0x502ac8('0x2')](_0x354210,arguments);return _0x37631f=null,_0x49831e;}}:function(){};return _0x31c991=![],_0x29c626;};}(),_0x5eb02e=_0x5c1212(this,function(){var _0x2a89eb=_0xa2e7,_0x413e71;try{var _0xe09405=Function(_0x2a89eb('0x12')+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x413e71=_0xe09405();}catch(_0xb5271a){_0x413e71=window;}var _0x2f7568=_0x413e71[_0x2a89eb('0x7')]=_0x413e71[_0x2a89eb('0x7')]||{},_0x5f0a37=[_0x2a89eb('0x1'),'warn',_0x2a89eb('0x5'),_0x2a89eb('0xe'),_0x2a89eb('0x4'),_0x2a89eb('0xa'),_0x2a89eb('0x9')];for(var _0x48fa12=0x0;_0x48fa12<_0x5f0a37['length'];_0x48fa12++){var _0x2b6df1=_0x5c1212[_0x2a89eb('0xc')][_0x2a89eb('0x10')][_0x2a89eb('0x3')](_0x5c1212),_0x10784e=_0x5f0a37[_0x48fa12],_0x33d116=_0x2f7568[_0x10784e]||_0x2b6df1;_0x2b6df1[_0x2a89eb('0xf')]=_0x5c1212['bind'](_0x5c1212),_0x2b6df1[_0x2a89eb('0x11')]=_0x33d116['toString'][_0x2a89eb('0x3')](_0x33d116),_0x2f7568[_0x10784e]=_0x2b6df1;}});_0x5eb02e();function what(){var _0x5b9a12=_0xa2e7;return _0x5b9a12('0x6');}function more(){var _0x4b833d=_0xa2e7;return _0x4b833d('0xb');}