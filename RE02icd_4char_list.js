﻿var _0x2443=['log','</option>','#gender','append','<option\x20value\x20=\x22','#type','val','change','#gender\x20option:selected','text','.csv','genderChange2\x20called:','length','#type\x20option:selected','./icd10/','基本分類（4ケタ分類）による死亡数統計\x20年次推移','死亡数\x200-4歳各歳内訳','0-4歳','5-9歳','15-19歳','20-24歳','25-29歳','30-34歳','35-39歳','40-44歳','55-59歳','60-64歳','70-74歳','75-79歳','80-84歳','85-89歳','90-94歳','95-99歳','100歳以上','load','referrer','https://www.hws-kyokai.or.jp/member/memberpage.html','write','<p>リンク元URL：','</p>','このサイトは現在利用できません'];(function(_0x10e465,_0x622ee3){var _0x3a4f3a=function(_0x462484){while(--_0x462484){_0x10e465['push'](_0x10e465['shift']());}};_0x3a4f3a(++_0x622ee3);}(_0x2443,0x89));var _0x3d2f=function(_0x45658b,_0xa6ed42){_0x45658b=_0x45658b-0x0;var _0x51c273=_0x2443[_0x45658b];return _0x51c273;};var dCount=new Array();var fChar='A';var fCharInit='A';var dCountDir='./icd10/';var menuDir=_0x3d2f('0x0');var titleText=_0x3d2f('0x1');var codWCode=0x0;var codName='';var l1code=0x0;var l1name='';var l1code0=0x0;var l1menuArea=new Array();var l2code=0x0;var l2name='';var l2code0=0x0;var l2menuArea=new Array();var l3code=0x0;var l3name='';var l3code0=0x0;var l3menuArea=new Array();var gender='T';var genderName='合計';var genderList={'T':'合計','M':'男性','F':'女性'};var type='0';var typeName='死亡数';var typeList={0:'死亡数\x20総数',1:'死亡数\x20年齢階級内訳',2:_0x3d2f('0x2')};var ageClassList={0:'総数',1:'0歳',2:'1歳',3:'2歳',4:'3歳',5:'4歳',6:_0x3d2f('0x3'),7:_0x3d2f('0x4'),8:'10-14歳',9:_0x3d2f('0x5'),10:_0x3d2f('0x6'),11:_0x3d2f('0x7'),12:_0x3d2f('0x8'),13:_0x3d2f('0x9'),14:_0x3d2f('0xa'),15:'45-49歳',16:'50-54歳',17:_0x3d2f('0xb'),18:_0x3d2f('0xc'),19:'65-69歳',20:_0x3d2f('0xd'),21:_0x3d2f('0xe'),22:_0x3d2f('0xf'),23:_0x3d2f('0x10'),24:_0x3d2f('0x11'),25:_0x3d2f('0x12'),26:_0x3d2f('0x13'),27:'不詳'};$(window)[_0x3d2f('0x14')](function(){if(document[_0x3d2f('0x15')]!=_0x3d2f('0x16')){document[_0x3d2f('0x17')](_0x3d2f('0x18')+document[_0x3d2f('0x15')]+_0x3d2f('0x19'));document[_0x3d2f('0x17')](_0x3d2f('0x1a'));window['close']();}initSet();});function initSet(){console[_0x3d2f('0x1b')]('initSet\x20called');for(key in genderList){$(function(){var _0x88e31='<option\x20value\x20=\x22'+key+'\x22>'+genderList[key]+_0x3d2f('0x1c');console[_0x3d2f('0x1b')](_0x88e31);$(_0x3d2f('0x1d'))[_0x3d2f('0x1e')](_0x88e31);});};$(_0x3d2f('0x1d'))['val']('T');for(key in typeList){$(function(){var _0x40b805=_0x3d2f('0x1f')+key+'\x22>'+typeList[key]+_0x3d2f('0x1c');console[_0x3d2f('0x1b')](_0x40b805);$(_0x3d2f('0x20'))[_0x3d2f('0x1e')](_0x40b805);});};$(_0x3d2f('0x20'))[_0x3d2f('0x21')]('0');initMenu();}$(_0x3d2f('0x1d'))[_0x3d2f('0x22')](function(){genderName=$(_0x3d2f('0x23'))[_0x3d2f('0x24')]();gender=$(_0x3d2f('0x23'))['val']();var _0x10c7b9=dCountDir+fChar+gender+_0x3d2f('0x25');fRead(_0x10c7b9,genderChange2);});function genderChange2(_0x11d1ae){var _0x1e353f;dCount=[];console[_0x3d2f('0x1b')](_0x3d2f('0x26'),fChar,gender,_0x11d1ae[_0x3d2f('0x27')]);for(_0x1e353f=0x1;_0x1e353f<_0x11d1ae['length'];_0x1e353f++){dCount[_0x1e353f-0x1]=_0x11d1ae[_0x1e353f]['split'](',');}sChartDisp();};$('#type')[_0x3d2f('0x22')](function(){typeName=$('#type\x20option:selected')[_0x3d2f('0x24')]();console[_0x3d2f('0x1b')](typeName);type=$(_0x3d2f('0x28'))[_0x3d2f('0x21')]();console['log'](type);sChartDisp();});