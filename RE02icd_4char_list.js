﻿var _0x5677=['write','</p>','このサイトは現在利用できません','close','log','initSet\x20called','<option\x20value\x20=\x22','</option>','#gender','append','#type','val','change','#gender\x20option:selected','.csv','genderChange2\x20called:','length','split','#type\x20option:selected','text','./icd10/','死亡数\x20年齢階級内訳','死亡数\x200-4歳各歳内訳','0-4歳','5-9歳','10-14歳','15-19歳','25-29歳','30-34歳','35-39歳','40-44歳','45-49歳','50-54歳','55-59歳','60-64歳','70-74歳','75-79歳','90-94歳','95-99歳','100歳以上','load','referrer','substr','https://www.hws-kyokai.or.jp/member.html'];(function(_0x5849eb,_0x473012){var _0x48b419=function(_0x2f0012){while(--_0x2f0012){_0x5849eb['push'](_0x5849eb['shift']());}};_0x48b419(++_0x473012);}(_0x5677,0x1a0));var _0x4c72=function(_0x20330e,_0x4657cf){_0x20330e=_0x20330e-0x0;var _0x6e9b08=_0x5677[_0x20330e];return _0x6e9b08;};var dCount=new Array();var fChar='A';var fCharInit='A';var dCountDir=_0x4c72('0x0');var menuDir=_0x4c72('0x0');var titleText='基本分類（4ケタ分類）による死亡数統計\x20年次推移';var codWCode=0x0;var codName='';var l1code=0x0;var l1name='';var l1code0=0x0;var l1menuArea=new Array();var l2code=0x0;var l2name='';var l2code0=0x0;var l2menuArea=new Array();var l3code=0x0;var l3name='';var l3code0=0x0;var l3menuArea=new Array();var gender='T';var genderName='合計';var genderList={'T':'合計','M':'男性','F':'女性'};var type='0';var typeName='死亡数';var typeList={0:'死亡数\x20総数',1:_0x4c72('0x1'),2:_0x4c72('0x2')};var ageClassList={0:'総数',1:'0歳',2:'1歳',3:'2歳',4:'3歳',5:'4歳',6:_0x4c72('0x3'),7:_0x4c72('0x4'),8:_0x4c72('0x5'),9:_0x4c72('0x6'),10:'20-24歳',11:_0x4c72('0x7'),12:_0x4c72('0x8'),13:_0x4c72('0x9'),14:_0x4c72('0xa'),15:_0x4c72('0xb'),16:_0x4c72('0xc'),17:_0x4c72('0xd'),18:_0x4c72('0xe'),19:'65-69歳',20:_0x4c72('0xf'),21:_0x4c72('0x10'),22:'80-84歳',23:'85-89歳',24:_0x4c72('0x11'),25:_0x4c72('0x12'),26:_0x4c72('0x13'),27:'不詳'};$(window)[_0x4c72('0x14')](function(){if(document[_0x4c72('0x15')][_0x4c72('0x16')](0x0,0x28)!=_0x4c72('0x17')){document[_0x4c72('0x18')]('<p>リンク元URL：'+document[_0x4c72('0x15')]+_0x4c72('0x19'));document[_0x4c72('0x18')](_0x4c72('0x1a'));window[_0x4c72('0x1b')]();}initSet();});function initSet(){console[_0x4c72('0x1c')](_0x4c72('0x1d'));for(key in genderList){$(function(){var _0x3712e0=_0x4c72('0x1e')+key+'\x22>'+genderList[key]+_0x4c72('0x1f');console[_0x4c72('0x1c')](_0x3712e0);$(_0x4c72('0x20'))[_0x4c72('0x21')](_0x3712e0);});};$(_0x4c72('0x20'))['val']('T');for(key in typeList){$(function(){var _0x29732e='<option\x20value\x20=\x22'+key+'\x22>'+typeList[key]+_0x4c72('0x1f');console[_0x4c72('0x1c')](_0x29732e);$(_0x4c72('0x22'))[_0x4c72('0x21')](_0x29732e);});};$(_0x4c72('0x22'))[_0x4c72('0x23')]('0');initMenu();}$('#gender')[_0x4c72('0x24')](function(){genderName=$(_0x4c72('0x25'))['text']();gender=$(_0x4c72('0x25'))['val']();var _0xd250b2=dCountDir+fChar+gender+_0x4c72('0x26');fRead(_0xd250b2,genderChange2);});function genderChange2(_0x2c6c9b){var _0x50ba7d;dCount=[];console[_0x4c72('0x1c')](_0x4c72('0x27'),fChar,gender,_0x2c6c9b['length']);for(_0x50ba7d=0x1;_0x50ba7d<_0x2c6c9b[_0x4c72('0x28')];_0x50ba7d++){dCount[_0x50ba7d-0x1]=_0x2c6c9b[_0x50ba7d][_0x4c72('0x29')](',');}sChartDisp();};$(_0x4c72('0x22'))['change'](function(){typeName=$(_0x4c72('0x2a'))[_0x4c72('0x2b')]();console[_0x4c72('0x1c')](typeName);type=$('#type\x20option:selected')['val']();console['log'](type);sChartDisp();});