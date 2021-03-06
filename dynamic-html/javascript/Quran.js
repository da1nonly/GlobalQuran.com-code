﻿/**
 * This Quran object has everything for developer to navigate easily on surah and ayah selection.
 * you can use this to develop anything related quran project (ex: audio verse by verse with text and so on..)
 * 
 * @author Basit (i@basit.me || http://Basit.me)
 *
 * Online Quran Project
 * http://GlobalQuran.com/
 *
 * Copyright 2011, imegah.com
 * Simple Public License (Simple-2.0)
 * http://www.opensource.org/licenses/Simple-2.0
 * 
 */
var Quran = {
		
	/**
	 * array of quran information
	 * @todo update surah array for support to multi-language
	 */
	_data: {
		Surah: [[],[0,7,5,1,'الفاتحة',"Al-Faatiha",'The Opening','Meccan'],[7,286,87,40,'البقرة',"Al-Baqara",'The Cow','Medinan'],[293,200,89,20,'آل عمران',"Aal-i-Imraan",'The Family of Imraan','Medinan'],[493,176,92,24,'النساء',"An-Nisaa",'The Women','Medinan'],[669,120,112,16,'المائدة',"Al-Maaida",'The Table','Medinan'],[789,165,55,20,'الأنعام',"Al-An'aam",'The Cattle','Meccan'],[954,206,39,24,'الأعراف',"Al-A'raaf",'The Heights','Meccan'],[1160,75,88,10,'الأنفال',"Al-Anfaal",'The Spoils of War','Medinan'],[1235,129,113,16,'التوبة',"At-Tawba",'The Repentance','Medinan'],[1364,109,51,11,'يونس',"Yunus",'Jonas','Meccan'],[1473,123,52,10,'هود',"Hud",'Hud','Meccan'],[1596,111,53,12,'يوسف',"Yusuf",'Joseph','Meccan'],[1707,43,96,6,'الرعد',"Ar-Ra'd",'The Thunder','Medinan'],[1750,52,72,7,'ابراهيم',"Ibrahim",'Abraham','Meccan'],[1802,99,54,6,'الحجر',"Al-Hijr",'The Rock','Meccan'],[1901,128,70,16,'النحل',"An-Nahl",'The Bee','Meccan'],[2029,111,50,12,'الإسراء',"Al-Israa",'The Night Journey','Meccan'],[2140,110,69,12,'الكهف',"Al-Kahf",'The Cave','Meccan'],[2250,98,44,6,'مريم',"Maryam",'Mary','Meccan'],[2348,135,45,8,'طه',"Taa-Haa",'Taa-Haa','Meccan'],[2483,112,73,7,'الأنبياء',"Al-Anbiyaa",'The Prophets','Meccan'],[2595,78,103,10,'الحج',"Al-Hajj",'The Pilgrimage','Medinan'],[2673,118,74,6,'المؤمنون',"Al-Muminoon",'The Believers','Meccan'],[2791,64,102,9,'النور',"An-Noor",'The Light','Medinan'],[2855,77,42,6,'الفرقان',"Al-Furqaan",'The Criterion','Meccan'],[2932,227,47,11,'الشعراء',"Ash-Shu'araa",'The Poets','Meccan'],[3159,93,48,7,'النمل',"An-Naml",'The Ant','Meccan'],[3252,88,49,8,'القصص',"Al-Qasas",'The Stories','Meccan'],[3340,69,85,7,'العنكبوت',"Al-Ankaboot",'The Spider','Meccan'],[3409,60,84,6,'الروم',"Ar-Room",'The Romans','Meccan'],[3469,34,57,3,'لقمان',"Luqman",'Luqman','Meccan'],[3503,30,75,3,'السجدة',"As-Sajda",'The Prostration','Meccan'],[3533,73,90,9,'الأحزاب',"Al-Ahzaab",'The Clans','Medinan'],[3606,54,58,6,'سبإ',"Saba",'Sheba','Meccan'],[3660,45,43,5,'فاطر',"Faatir",'The Originator','Meccan'],[3705,83,41,5,'يس',"Yaseen",'Yaseen','Meccan'],[3788,182,56,5,'الصافات',"As-Saaffaat",'Those drawn up in Ranks','Meccan'],[3970,88,38,5,'ص',"Saad",'The letter Saad','Meccan'],[4058,75,59,8,'الزمر',"Az-Zumar",'The Groups','Meccan'],[4133,85,60,9,'غافر',"Al-Ghaafir",'The Forgiver','Meccan'],[4218,54,61,6,'فصلت',"Fussilat",'Explained in detail','Meccan'],[4272,53,62,5,'الشورى',"Ash-Shura",'Consultation','Meccan'],[4325,89,63,7,'الزخرف',"Az-Zukhruf",'Ornaments of gold','Meccan'],[4414,59,64,3,'الدخان',"Ad-Dukhaan",'The Smoke','Meccan'],[4473,37,65,4,'الجاثية',"Al-Jaathiya",'Crouching','Meccan'],[4510,35,66,4,'الأحقاف',"Al-Ahqaf",'The Dunes','Meccan'],[4545,38,95,4,'محمد',"Muhammad",'Muhammad','Medinan'],[4583,29,111,4,'الفتح',"Al-Fath",'The Victory','Medinan'],[4612,18,106,2,'الحجرات',"Al-Hujuraat",'The Inner Apartments','Medinan'],[4630,45,34,3,'ق',"Qaaf",'The letter Qaaf','Meccan'],[4675,60,67,3,'الذاريات',"Adh-Dhaariyat",'The Winnowing Winds','Meccan'],[4735,49,76,2,'الطور',"At-Tur",'The Mount','Meccan'],[4784,62,23,3,'النجم',"An-Najm",'The Star','Meccan'],[4846,55,37,3,'القمر',"Al-Qamar",'The Moon','Meccan'],[4901,78,97,3,'الرحمن',"Ar-Rahmaan",'The Beneficent','Medinan'],[4979,96,46,3,'الواقعة',"Al-Waaqia",'The Inevitable','Meccan'],[5075,29,94,4,'الحديد',"Al-Hadid",'The Iron','Medinan'],[5104,22,105,3,'المجادلة',"Al-Mujaadila",'The Pleading Woman','Medinan'],[5126,24,101,3,'الحشر',"Al-Hashr",'The Exile','Medinan'],[5150,13,91,2,'الممتحنة',"Al-Mumtahana",'She that is to be examined','Medinan'],[5163,14,109,2,'الصف',"As-Saff",'The Ranks','Medinan'],[5177,11,110,2,'الجمعة',"Al-Jumu'a",'Friday','Medinan'],[5188,11,104,2,'المنافقون',"Al-Munaafiqoon",'The Hypocrites','Medinan'],[5199,18,108,2,'التغابن',"At-Taghaabun",'Mutual Disillusion','Medinan'],[5217,12,99,2,'الطلاق',"At-Talaaq",'Divorce','Medinan'],[5229,12,107,2,'التحريم',"At-Tahrim",'The Prohibition','Medinan'],[5241,30,77,2,'الملك',"Al-Mulk",'The Sovereignty','Meccan'],[5271,52,2,2,'القلم',"Al-Qalam",'The Pen','Meccan'],[5323,52,78,2,'الحاقة',"Al-Haaqqa",'The Reality','Meccan'],[5375,44,79,2,'المعارج',"Al-Ma'aarij",'The Ascending Stairways','Meccan'],[5419,28,71,2,'نوح',"Nooh",'Noah','Meccan'],[5447,28,40,2,'الجن',"Al-Jinn",'The Jinn','Meccan'],[5475,20,3,2,'المزمل',"Al-Muzzammil",'The Enshrouded One','Meccan'],[5495,56,4,2,'المدثر',"Al-Muddaththir",'The Cloaked One','Meccan'],[5551,40,31,2,'القيامة',"Al-Qiyaama",'The Resurrection','Meccan'],[5591,31,98,2,'الانسان',"Al-Insaan",'Man','Medinan'],[5622,50,33,2,'المرسلات',"Al-Mursalaat",'The Emissaries','Meccan'],[5672,40,80,2,'النبإ',"An-Naba",'The Announcement','Meccan'],[5712,46,81,2,'النازعات',"An-Naazi'aat",'Those who drag forth','Meccan'],[5758,42,24,1,'عبس',"Abasa",'He frowned','Meccan'],[5800,29,7,1,'التكوير',"At-Takwir",'The Overthrowing','Meccan'],[5829,19,82,1,'الإنفطار',"Al-Infitaar",'The Cleaving','Meccan'],[5848,36,86,1,'المطففين',"Al-Mutaffifin",'Defrauding','Meccan'],[5884,25,83,1,'الإنشقاق',"Al-Inshiqaaq",'The Splitting Open','Meccan'],[5909,22,27,1,'البروج',"Al-Burooj",'The Constellations','Meccan'],[5931,17,36,1,'الطارق',"At-Taariq",'The Morning Star','Meccan'],[5948,19,8,1,'الأعلى',"Al-A'laa",'The Most High','Meccan'],[5967,26,68,1,'الغاشية',"Al-Ghaashiya",'The Overwhelming','Meccan'],[5993,30,10,1,'الفجر',"Al-Fajr",'The Dawn','Meccan'],[6023,20,35,1,'البلد',"Al-Balad",'The City','Meccan'],[6043,15,26,1,'الشمس',"Ash-Shams",'The Sun','Meccan'],[6058,21,9,1,'الليل',"Al-Lail",'The Night','Meccan'],[6079,11,11,1,'الضحى',"Ad-Dhuhaa",'The Morning Hours','Meccan'],[6090,8,12,1,'الشرح',"Ash-Sharh",'The Consolation','Meccan'],[6098,8,28,1,'التين',"At-Tin",'The Fig','Meccan'],[6106,19,1,1,'العلق',"Al-Alaq",'The Clot','Meccan'],[6125,5,25,1,'القدر',"Al-Qadr",'The Power, Fate','Meccan'],[6130,8,100,1,'البينة',"Al-Bayyina",'The Evidence','Medinan'],[6138,8,93,1,'الزلزلة',"Az-Zalzala",'The Earthquake','Medinan'],[6146,11,14,1,'العاديات',"Al-Aadiyaat",'The Chargers','Meccan'],[6157,11,30,1,'القارعة',"Al-Qaari'a",'The Calamity','Meccan'],[6168,8,16,1,'التكاثر',"At-Takaathur",'Competition','Meccan'],[6176,3,13,1,'العصر',"Al-Asr",'The Declining Day, Epoch','Meccan'],[6179,9,32,1,'الهمزة',"Al-Humaza",'The Traducer','Meccan'],[6188,5,19,1,'الفيل',"Al-Fil",'The Elephant','Meccan'],[6193,4,29,1,'قريش',"Quraish",'Quraysh','Meccan'],[6197,7,17,1,'الماعون',"Al-Maa'un",'Almsgiving','Meccan'],[6204,3,15,1,'الكوثر',"Al-Kawthar",'Abundance','Meccan'],[6207,6,18,1,'الكافرون',"Al-Kaafiroon",'The Disbelievers','Meccan'],[6213,3,114,1,'النصر',"An-Nasr",'Divine Support','Medinan'],[6216,5,6,1,'المسد',"Al-Masad",'The Palm Fibre','Meccan'],[6221,4,22,1,'الإخلاص',"Al-Ikhlaas",'Sincerity','Meccan'],[6225,5,20,1,'الفلق',"Al-Falaq",'The Dawn','Meccan'],[6230,6,21,1,'الناس',"An-Naas",'Mankind','Meccan'],[6236,1]],
		Juz: [[],[1,1],[2,142],[2,253],[3,93],[4,24],[4,148],[5,82],[6,111],[7,88],[8,41],[9,93],[11,6],[12,53],[15,1],[17,1],[18,75],[21,1],[23,1],[25,21],[27,56],[29,46],[33,31],[36,28],[39,32],[41,47],[46,1],[51,31],[58,1],[67,1],[78,1],[115,1]],
		HizbQuarter: [[],[1,1],[2,26],[2,44],[2,60],[2,75],[2,92],[2,106],[2,124],[2,142],[2,158],[2,177],[2,189],[2,203],[2,219],[2,233],[2,243],[2,253],[2,263],[2,272],[2,283],[3,15],[3,33],[3,52],[3,75],[3,93],[3,113],[3,133],[3,153],[3,171],[3,186],[4,1],[4,12],[4,24],[4,36],[4,58],[4,74],[4,88],[4,100],[4,114],[4,135],[4,148],[4,163],[5,1],[5,12],[5,27],[5,41],[5,51],[5,67],[5,82],[5,97],[5,109],[6,13],[6,36],[6,59],[6,74],[6,95],[6,111],[6,127],[6,141],[6,151],[7,1],[7,31],[7,47],[7,65],[7,88],[7,117],[7,142],[7,156],[7,171],[7,189],[8,1],[8,22],[8,41],[8,61],[9,1],[9,19],[9,34],[9,46],[9,60],[9,75],[9,93],[9,111],[9,122],[10,11],[10,26],[10,53],[10,71],[10,90],[11,6],[11,24],[11,41],[11,61],[11,84],[11,108],[12,7],[12,30],[12,53],[12,77],[12,101],[13,5],[13,19],[13,35],[14,10],[14,28],[15,1],[15,50],[16,1],[16,30],[16,51],[16,75],[16,90],[16,111],[17,1],[17,23],[17,50],[17,70],[17,99],[18,17],[18,32],[18,51],[18,75],[18,99],[19,22],[19,59],[20,1],[20,55],[20,83],[20,111],[21,1],[21,29],[21,51],[21,83],[22,1],[22,19],[22,38],[22,60],[23,1],[23,36],[23,75],[24,1],[24,21],[24,35],[24,53],[25,1],[25,21],[25,53],[26,1],[26,52],[26,111],[26,181],[27,1],[27,27],[27,56],[27,82],[28,12],[28,29],[28,51],[28,76],[29,1],[29,26],[29,46],[30,1],[30,31],[30,54],[31,22],[32,11],[33,1],[33,18],[33,31],[33,51],[33,60],[34,10],[34,24],[34,46],[35,15],[35,41],[36,28],[36,60],[37,22],[37,83],[37,145],[38,21],[38,52],[39,8],[39,32],[39,53],[40,1],[40,21],[40,41],[40,66],[41,9],[41,25],[41,47],[42,13],[42,27],[42,51],[43,24],[43,57],[44,17],[45,12],[46,1],[46,21],[47,10],[47,33],[48,18],[49,1],[49,14],[50,27],[51,31],[52,24],[53,26],[54,9],[55,1],[56,1],[56,75],[57,16],[58,1],[58,14],[59,11],[60,7],[62,1],[63,4],[65,1],[66,1],[67,1],[68,1],[69,1],[70,19],[72,1],[73,20],[75,1],[76,19],[78,1],[80,1],[82,1],[84,1],[87,1],[90,1],[94,1],[100,9],[115,1]],
		Manzil: [[],[1,1],[5,1],[10,1],[17,1],[26,1],[37,1],[50,1]],
		Ruku: [[],[1,1],[2,1],[2,8],[2,21],[2,30],[2,40],[2,47],[2,60],[2,62],[2,72],[2,83],[2,87],[2,97],[2,104],[2,113],[2,122],[2,130],[2,142],[2,148],[2,153],[2,164],[2,168],[2,177],[2,183],[2,189],[2,197],[2,211],[2,217],[2,222],[2,229],[2,232],[2,236],[2,243],[2,249],[2,254],[2,258],[2,261],[2,267],[2,274],[2,282],[2,284],[3,1],[3,10],[3,21],[3,31],[3,42],[3,55],[3,64],[3,72],[3,81],[3,92],[3,102],[3,110],[3,121],[3,130],[3,144],[3,149],[3,156],[3,172],[3,181],[3,190],[4,1],[4,11],[4,15],[4,23],[4,26],[4,34],[4,43],[4,51],[4,60],[4,71],[4,77],[4,88],[4,92],[4,97],[4,101],[4,105],[4,113],[4,116],[4,127],[4,135],[4,142],[4,153],[4,163],[4,172],[5,1],[5,6],[5,12],[5,20],[5,27],[5,35],[5,44],[5,51],[5,57],[5,67],[5,78],[5,87],[5,94],[5,101],[5,109],[5,116],[6,1],[6,11],[6,21],[6,31],[6,42],[6,51],[6,56],[6,61],[6,71],[6,83],[6,91],[6,95],[6,101],[6,111],[6,122],[6,130],[6,141],[6,145],[6,151],[6,155],[7,1],[7,11],[7,26],[7,32],[7,40],[7,48],[7,54],[7,59],[7,65],[7,73],[7,85],[7,94],[7,100],[7,109],[7,127],[7,130],[7,142],[7,148],[7,152],[7,158],[7,163],[7,172],[7,182],[7,189],[8,1],[8,11],[8,20],[8,29],[8,38],[8,45],[8,49],[8,59],[8,65],[8,70],[9,1],[9,7],[9,17],[9,25],[9,30],[9,38],[9,43],[9,60],[9,67],[9,73],[9,81],[9,90],[9,100],[9,111],[9,119],[9,123],[10,1],[10,11],[10,21],[10,31],[10,41],[10,54],[10,61],[10,71],[10,83],[10,93],[10,104],[11,1],[11,9],[11,25],[11,36],[11,50],[11,61],[11,69],[11,84],[11,96],[11,110],[12,1],[12,7],[12,21],[12,30],[12,36],[12,43],[12,50],[12,58],[12,69],[12,80],[12,94],[12,105],[13,1],[13,8],[13,19],[13,27],[13,32],[13,38],[14,1],[14,7],[14,13],[14,22],[14,28],[14,35],[14,42],[15,1],[15,16],[15,26],[15,45],[15,61],[15,80],[16,1],[16,10],[16,22],[16,26],[16,35],[16,41],[16,51],[16,61],[16,66],[16,71],[16,77],[16,84],[16,90],[16,101],[16,111],[16,120],[17,1],[17,11],[17,23],[17,31],[17,41],[17,53],[17,61],[17,71],[17,78],[17,85],[17,94],[17,101],[18,1],[18,13],[18,18],[18,23],[18,32],[18,45],[18,50],[18,54],[18,60],[18,71],[18,83],[18,102],[19,1],[19,16],[19,41],[19,51],[19,66],[19,83],[20,1],[20,25],[20,55],[20,77],[20,90],[20,105],[20,116],[20,129],[21,1],[21,11],[21,30],[21,42],[21,51],[21,76],[21,94],[22,1],[22,11],[22,23],[22,26],[22,34],[22,39],[22,49],[22,58],[22,65],[22,73],[23,1],[23,23],[23,33],[23,51],[23,78],[23,93],[24,1],[24,11],[24,21],[24,27],[24,35],[24,41],[24,51],[24,58],[24,62],[25,1],[25,10],[25,21],[25,35],[25,45],[25,61],[26,1],[26,10],[26,34],[26,53],[26,70],[26,105],[26,123],[26,141],[26,160],[26,176],[26,192],[27,1],[27,15],[27,32],[27,45],[27,59],[27,67],[27,83],[28,1],[28,14],[28,22],[28,29],[28,43],[28,51],[28,61],[28,76],[29,1],[29,14],[29,23],[29,31],[29,45],[29,52],[29,64],[30,1],[30,11],[30,20],[30,28],[30,41],[30,54],[31,1],[31,12],[31,20],[32,1],[32,12],[32,23],[33,1],[33,9],[33,21],[33,28],[33,35],[33,41],[33,53],[33,59],[33,69],[34,1],[34,10],[34,22],[34,31],[34,37],[34,46],[35,1],[35,8],[35,15],[35,27],[35,38],[36,1],[36,13],[36,33],[36,51],[36,68],[37,1],[37,22],[37,75],[37,114],[37,139],[38,1],[38,15],[38,27],[38,41],[38,65],[39,1],[39,10],[39,22],[39,32],[39,42],[39,53],[39,64],[39,71],[40,1],[40,10],[40,21],[40,28],[40,38],[40,51],[40,61],[40,69],[40,79],[41,1],[41,9],[41,19],[41,26],[41,33],[41,45],[42,1],[42,10],[42,20],[42,30],[42,44],[43,1],[43,16],[43,26],[43,36],[43,46],[43,57],[43,68],[44,1],[44,30],[44,43],[45,1],[45,12],[45,22],[45,27],[46,1],[46,11],[46,21],[46,27],[47,1],[47,12],[47,20],[47,29],[48,1],[48,11],[48,18],[48,27],[49,1],[49,11],[50,1],[50,16],[50,30],[51,1],[51,24],[51,47],[52,1],[52,29],[53,1],[53,26],[53,33],[54,1],[54,23],[54,41],[55,1],[55,26],[55,46],[56,1],[56,39],[56,75],[57,1],[57,11],[57,20],[57,26],[58,1],[58,7],[58,14],[59,1],[59,11],[59,18],[60,1],[60,7],[61,1],[61,10],[62,1],[62,9],[63,1],[63,9],[64,1],[64,11],[65,1],[65,8],[66,1],[66,8],[67,1],[67,15],[68,1],[68,34],[69,1],[69,38],[70,1],[70,36],[71,1],[71,21],[72,1],[72,20],[73,1],[73,20],[74,1],[74,32],[75,1],[75,31],[76,1],[76,23],[77,1],[77,41],[78,1],[78,31],[79,1],[79,27],[80,1],[81,1],[82,1],[83,1],[84,1],[85,1],[86,1],[87,1],[88,1],[89,1],[90,1],[91,1],[92,1],[93,1],[94,1],[95,1],[96,1],[97,1],[98,1],[99,1],[100,1],[101,1],[102,1],[103,1],[104,1],[105,1],[106,1],[107,1],[108,1],[109,1],[110,1],[111,1],[112,1],[113,1],[114,1]],
		Page: [[],[1,1],[2,1],[2,6],[2,17],[2,25],[2,30],[2,38],[2,49],[2,58],[2,62],[2,70],[2,77],[2,84],[2,89],[2,94],[2,102],[2,106],[2,113],[2,120],[2,127],[2,135],[2,142],[2,146],[2,154],[2,164],[2,170],[2,177],[2,182],[2,187],[2,191],[2,197],[2,203],[2,211],[2,216],[2,220],[2,225],[2,231],[2,234],[2,238],[2,246],[2,249],[2,253],[2,257],[2,260],[2,265],[2,270],[2,275],[2,282],[2,283],[3,1],[3,10],[3,16],[3,23],[3,30],[3,38],[3,46],[3,53],[3,62],[3,71],[3,78],[3,84],[3,92],[3,101],[3,109],[3,116],[3,122],[3,133],[3,141],[3,149],[3,154],[3,158],[3,166],[3,174],[3,181],[3,187],[3,195],[4,1],[4,7],[4,12],[4,15],[4,20],[4,24],[4,27],[4,34],[4,38],[4,45],[4,52],[4,60],[4,66],[4,75],[4,80],[4,87],[4,92],[4,95],[4,102],[4,106],[4,114],[4,122],[4,128],[4,135],[4,141],[4,148],[4,155],[4,163],[4,171],[4,176],[5,3],[5,6],[5,10],[5,14],[5,18],[5,24],[5,32],[5,37],[5,42],[5,46],[5,51],[5,58],[5,65],[5,71],[5,77],[5,83],[5,90],[5,96],[5,104],[5,109],[5,114],[6,1],[6,9],[6,19],[6,28],[6,36],[6,45],[6,53],[6,60],[6,69],[6,74],[6,82],[6,91],[6,95],[6,102],[6,111],[6,119],[6,125],[6,132],[6,138],[6,143],[6,147],[6,152],[6,158],[7,1],[7,12],[7,23],[7,31],[7,38],[7,44],[7,52],[7,58],[7,68],[7,74],[7,82],[7,88],[7,96],[7,105],[7,121],[7,131],[7,138],[7,144],[7,150],[7,156],[7,160],[7,164],[7,171],[7,179],[7,188],[7,196],[8,1],[8,9],[8,17],[8,26],[8,34],[8,41],[8,46],[8,53],[8,62],[8,70],[9,1],[9,7],[9,14],[9,21],[9,27],[9,32],[9,37],[9,41],[9,48],[9,55],[9,62],[9,69],[9,73],[9,80],[9,87],[9,94],[9,100],[9,107],[9,112],[9,118],[9,123],[10,1],[10,7],[10,15],[10,21],[10,26],[10,34],[10,43],[10,54],[10,62],[10,71],[10,79],[10,89],[10,98],[10,107],[11,6],[11,13],[11,20],[11,29],[11,38],[11,46],[11,54],[11,63],[11,72],[11,82],[11,89],[11,98],[11,109],[11,118],[12,5],[12,15],[12,23],[12,31],[12,38],[12,44],[12,53],[12,64],[12,70],[12,79],[12,87],[12,96],[12,104],[13,1],[13,6],[13,14],[13,19],[13,29],[13,35],[13,43],[14,6],[14,11],[14,19],[14,25],[14,34],[14,43],[15,1],[15,16],[15,32],[15,52],[15,71],[15,91],[16,7],[16,15],[16,27],[16,35],[16,43],[16,55],[16,65],[16,73],[16,80],[16,88],[16,94],[16,103],[16,111],[16,119],[17,1],[17,8],[17,18],[17,28],[17,39],[17,50],[17,59],[17,67],[17,76],[17,87],[17,97],[17,105],[18,5],[18,16],[18,21],[18,28],[18,35],[18,46],[18,54],[18,62],[18,75],[18,84],[18,98],[19,1],[19,12],[19,26],[19,39],[19,52],[19,65],[19,77],[19,96],[20,13],[20,38],[20,52],[20,65],[20,77],[20,88],[20,99],[20,114],[20,126],[21,1],[21,11],[21,25],[21,36],[21,45],[21,58],[21,73],[21,82],[21,91],[21,102],[22,1],[22,6],[22,16],[22,24],[22,31],[22,39],[22,47],[22,56],[22,65],[22,73],[23,1],[23,18],[23,28],[23,43],[23,60],[23,75],[23,90],[23,105],[24,1],[24,11],[24,21],[24,28],[24,32],[24,37],[24,44],[24,54],[24,59],[24,62],[25,3],[25,12],[25,21],[25,33],[25,44],[25,56],[25,68],[26,1],[26,20],[26,40],[26,61],[26,84],[26,112],[26,137],[26,160],[26,184],[26,207],[27,1],[27,14],[27,23],[27,36],[27,45],[27,56],[27,64],[27,77],[27,89],[28,6],[28,14],[28,22],[28,29],[28,36],[28,44],[28,51],[28,60],[28,71],[28,78],[28,85],[29,7],[29,15],[29,24],[29,31],[29,39],[29,46],[29,53],[29,64],[30,6],[30,16],[30,25],[30,33],[30,42],[30,51],[31,1],[31,12],[31,20],[31,29],[32,1],[32,12],[32,21],[33,1],[33,7],[33,16],[33,23],[33,31],[33,36],[33,44],[33,51],[33,55],[33,63],[34,1],[34,8],[34,15],[34,23],[34,32],[34,40],[34,49],[35,4],[35,12],[35,19],[35,31],[35,39],[35,45],[36,13],[36,28],[36,41],[36,55],[36,71],[37,1],[37,25],[37,52],[37,77],[37,103],[37,127],[37,154],[38,1],[38,17],[38,27],[38,43],[38,62],[38,84],[39,6],[39,11],[39,22],[39,32],[39,41],[39,48],[39,57],[39,68],[39,75],[40,8],[40,17],[40,26],[40,34],[40,41],[40,50],[40,59],[40,67],[40,78],[41,1],[41,12],[41,21],[41,30],[41,39],[41,47],[42,1],[42,11],[42,16],[42,23],[42,32],[42,45],[42,52],[43,11],[43,23],[43,34],[43,48],[43,61],[43,74],[44,1],[44,19],[44,40],[45,1],[45,14],[45,23],[45,33],[46,6],[46,15],[46,21],[46,29],[47,1],[47,12],[47,20],[47,30],[48,1],[48,10],[48,16],[48,24],[48,29],[49,5],[49,12],[50,1],[50,16],[50,36],[51,7],[51,31],[51,52],[52,15],[52,32],[53,1],[53,27],[53,45],[54,7],[54,28],[54,50],[55,17],[55,41],[55,68],[56,17],[56,51],[56,77],[57,4],[57,12],[57,19],[57,25],[58,1],[58,7],[58,12],[58,22],[59,4],[59,10],[59,17],[60,1],[60,6],[60,12],[61,6],[62,1],[62,9],[63,5],[64,1],[64,10],[65,1],[65,6],[66,1],[66,8],[67,1],[67,13],[67,27],[68,16],[68,43],[69,9],[69,35],[70,11],[70,40],[71,11],[72,1],[72,14],[73,1],[73,20],[74,18],[74,48],[75,20],[76,6],[76,26],[77,20],[78,1],[78,31],[79,16],[80,1],[81,1],[82,1],[83,7],[83,35],[85,1],[86,1],[87,16],[89,1],[89,24],[91,1],[92,15],[95,1],[97,1],[98,8],[100,10],[103,1],[106,1],[109,1],[112,1],[115,1]],
		Sajda: [[],[7,206,'recommended'],[13,15,'recommended'],[16,50,'recommended'],[17,109,'recommended'],[19,58,'recommended'],[22,18,'recommended'],[22,77,'recommended'],[25,60,'recommended'],[27,26,'recommended'],[32,15,'obligatory'],[38,24,'recommended'],[41,38,'obligatory'],[53,62,'obligatory'],[84,21,'recommended'],[96,19,'obligatory']],
		UChars: {HAMZA:'\u0621',ALEF_WITH_MADDA_ABOVE:'\u0622',ALEF_WITH_HAMZA_ABOVE:'\u0623',WAW_WITH_HAMZA_ABOVE:'\u0624',ALEF_WITH_HAMZA_BELOW:'\u0625',YEH_WITH_HAMZA:'\u0626',ALEF:'\u0627',BEH:'\u0628',MARBUTA:'\u0629',TEH:'\u062A',THEH:'\u062B',JEMM:'\u062C',HAH:'\u062D',KHAH:'\u062E',DAL:'\u062F',THAL:'\u0630',REH:'\u0631',ZAIN:'\u0632',SEEN:'\u0633',SHEEN:'\u0634',SAD:'\u0635',DAD:'\u0636',TAH:'\u0637',ZAH:'\u0638',AIN:'\u0639',GHAIN:'\u063A',TATWEEL:'\u0640',FEH:'\u0641',QAF:'\u0642',KAF:'\u0643',LAM:'\u0644',MEEM:'\u0645',NOON:'\u0646',HEH:'\u0647',WAW:'\u0648',ALEF_MAKSURA:'\u0649',YEH:'\u064A',FATHATAN:'\u064B',DAMMATAN:'\u064C',KASRATAN:'\u064D',FATHA:'\u064E',DAMMA:'\u064F',KASRA:'\u0650',SHADDA:'\u0651',SUKUN:'\u0652',MADDA:'\u0653',HAMZA_ABOVE:'\u0654',HAMZA_BELOW:'\u0655',SMALL_ALEF:'\u065F',SUPERSCRIPT_ALEF:'\u0670',ALEF_WASLA:'\u0671',HIGH_SALA:'\u06D6',HIGH_GHALA:'\u06D7',HIGH_MEEM_INITIAL_FORM:'\u06D8',HIGH_LA:'\u06D9',HIGH_JEMM:'\u06DA',HIGH_THREE_DOT:'\u06DB',HIGH_SEEN:'\u06DC',RUB_EL_HIZB:'\u06DE',HIGH_ROUNDED_ZERO:'\u06DF',HIGH_UPRIGHT_ZERO:'\u06E0',HIGH_MEEM:'\u06E2',LOW_SEEN:'\u06E3',SMALL_WAW:'\u06E5',SMALL_YEH:'\u06E6',HIGH_NOON:'\u06E8',SAJDAH:'\u06E9',LOW_STOP:'\u06EA',HIGH_STOP:'\u06EB',HIGH_STOP_FILLED:'\u06EC',LOW_MEEM:'\u06ED',HAMZA_ABOVE_ALEF:'\u0675',DOTLESS_BEH:'\u066E',HIGH_YEH:'\u06E7',ZWNJ:'\u200C',NBSP:'\u00A0',NNBSP:'\u202F',FARSI_YEH:'\u06CC',FARSI_KEHEH:'\u06A9',SWASH_KAF:'\u06AA',YEH_BARREE:'\u06D2'},
		UGroups: {LETTER: "[$HAMZA-$YEH]", HARAKA: "[$FATHATAN-$MADDA$SUPERSCRIPT_ALEF]", SPACE: "[\\s$HIGH_SALA-$LOW_MEEM]*\\s", HAMZA_SHAPE: "[$HAMZA_ABOVE$HAMZA$ALEF_WITH_HAMZA_ABOVE-$YEH_WITH_HAMZA]", LETTER_HARAKA: "[$HAMZA-$ALEF_WASLA]"},
		RootList: 'آدم‌ آزر ا أبابيل‌ ابب‌ ابد ابراهيم‌ ابريق‌ ابق‌ ابل‌ إبليس‌ ابو ابى‌ اتى‌ اثث‌ اثر اثل‌ اثم‌ اجج‌ اجر اجل‌ احد احزاب‌ احقاف‌ احمد اخذ اخر اخو ادد ادريس‌ ادى‌ اذ اذا اذن‌ اذى‌ ارب‌ ارث‌ ارض‌ ارك‌ ارم‌ ازر ازز ازف‌ اسباط استبرق‌ اسحاق‌ اسر اسرائيل‌ اسس‌ اسف‌ اسلام‌ اسماعيل‌ اسن‌ اسو اسى‌ اشر اصر اصل‌ أعراف‌ افف‌ افق‌ افك‌ افل‌ اقصو اكل‌ الا التى‌ الذان‌ الذى‌ الذين‌ الف‌ الك‌ اللاتى‌ اللائى‌ الل‌ الله‌ الم‌ اله‌ الو الى‌ الياس‌ ال‌ياسين‌ اليسع‌ ام‌ اما أما امت‌ امد امر امس‌ امل‌ امم‌ امن‌ امو ان‌ انا انت‌ انتم‌ انتما انث‌ انجيل‌ انس‌ انف‌ انم‌ انن‌ اننى‌ انى‌ اهل‌ او اوب‌ اود اولاء اول‌ اولى‌ اون‌ اوه‌ اوى‌ اى‌ اياك‌ اياكم‌ ايان‌ ايانا اياه‌ اياهم‌ اياى‌ ايد ايكه‌ ايم‌ اين‌ ايوب‌ ائى‌ ايى‌ ب‌ بابل‌ بتر بتك‌ بتل‌ بثث‌ بجس‌ بحث‌ بحر بخس‌ بخع‌ بخل‌ بدء بدر بدع‌ بدل‌ بدن‌ بدو بذر برء برج‌ برح‌ برد برر برز برزخ‌ برص‌ برق‌ برك‌ برم‌ بره‌ برهن‌ بزغ‌ بسر بسس‌ بسط بسق‌ بسل‌ بسم‌ بشر بصر بصل‌ بضع‌ بطء بطر بطش‌ بطل‌ بطن‌ بعث‌ بعثر بعد بعر بعض‌ بعل‌ بغت‌ بغض‌ بغل‌ بغى‌ بقر بقع‌ بقل‌ بقى‌ بكر بكم‌ بكة بكى‌ بل‌ بلد بلس‌ بلع‌ بلغ‌ بلو بلى‌ بنن‌ بنو بنى‌ بهت‌ بهج‌ بهل‌ بهم‌ بوء بوب‌ بور بول‌ بيت‌ بيد بئر بئس‌ بيض‌ بيع‌ بين‌ ت‌ تابوت‌ تبب‌ تبت‌ تبر تبع‌ تجر تحت‌ ترب‌ ترف‌ ترق‌ ترقوه‌ ترك‌ تسع‌ تعس‌ تفث‌ تقن‌ تلك‌ تلكم‌ تلكما تلل‌ تلو تمم‌ تنور توب‌ تور توراة تين‌ تيه‌ ثبت‌ ثبر ثبط ثبى‌ ثجج‌ ثخن‌ ثرب‌ ثرى‌ ثعب‌ ثقب‌ ثقف‌ ثقل‌ ثلث‌ ثلل‌ ثم‌ ثمر ثمم‌ ثمن‌ ثمود ثنى‌ ثوب‌ ثور ثوى‌ ثيب‌ جالوت‌ جبب‌ جبت‌ جبر جبريل‌ جبل‌ جبن‌ جبه‌ جبى‌ جثث‌ جثم‌ جثو جحد جحم‌ جدث‌ جدد جدر جدل‌ جذذ جذع‌ جذو جرح‌ جرد جرر جرز جرع‌ جرف‌ جرم‌ جرى‌ جزء جزع‌ جزى‌ جسد جسس‌ جسم‌ جعل‌ جف‌ء جفن‌ جفو جلب‌ جلد جلس‌ جلل‌ جلو جمح‌ جمد جمع‌ جمعة جمل‌ جمم‌ جناح‌ جنب‌ جنح‌ جند جنف‌ جنن‌ جنى‌ جهد جهر جهز جهل‌ جهنم‌ جوب‌ جود جودى‌ جور جوز جوس‌ جوع‌ جوف‌ جوو جى‌ء جيب‌ جيد جئر ح‌ حبب‌ حبر حبس‌ حبط حبك‌ حبل‌ حتم‌ حتى‌ حثث‌ حجب‌ حجج‌ حجر حجز حدب‌ حدث‌ حدد حدق‌ حذر حرب‌ حرث‌ حرج‌ حرد حرر حرس‌ حرص‌ حرض‌ حرف‌ حرق‌ حرك‌ حرم‌ حرى‌ حرير حزب‌ حزن‌ حسب‌ حسد حسر حسس‌ حسم‌ حسن‌ حشر حصب‌ حصحص‌ حصد حصر حصل‌ حصن‌ حصى‌ حضر حضض‌ حطب‌ حطط حطم‌ حظر حظظ حفد حفر حفظ حفف‌ حفو حقب‌ حقق‌ حكم‌ حلف‌ حلق‌ حلقم‌ حلل‌ حلم‌ حلى‌ حم‌ء حمد حمر حمل‌ حمم‌ حمى‌ حنث‌ حنجر حنذ حنف‌ حنك‌ حنن‌ حنين‌ حواريون‌ حوب‌ حوت‌ حوج‌ حوذ حور حوش‌ حوط حول‌ حوى‌ حيث‌ حيد حير حيز حيص‌ حيض‌ حيف‌ حيق‌ حين‌ حيى‌ خب‌ء خبت‌ خبث‌ خبر خبز خبط خبل‌ خبو ختر ختم‌ خدد خدع‌ خدن‌ خذل‌ خرب‌ خرج‌ خردل‌ خرر خرص‌ خرطم‌ خرق‌ خزن‌ خزى‌ خس‌ء خسر خسف‌ خشب‌ خشع‌ خشى‌ خصص‌ خصف‌ خصم‌ خضد خضر خضع‌ خطء خطب‌ خطط خطف‌ خطو خفت‌ خفض‌ خفف‌ خفى‌ خلد خلص‌ خلط خلع‌ خلف‌ خلق‌ خلل‌ خلو خمد خمر خمس‌ خمص‌ خمط خنزر خنس‌ خنق‌ خور خوض‌ خوف‌ خول‌ خون‌ خوى‌ خيب‌ خير خيط خيل‌ خيم‌ داود دبب‌ دبر دثر دحر دحض‌ دحو دحى‌ دخر دخل‌ دخن‌ درء درج‌ درر درس‌ درك‌ درهم‌ درى‌ دسر دسس‌ دسو دعع‌ دعو دف‌ء دفع‌ دفق‌ دكك‌ دلك‌ دلل‌ دلو دمدم‌ دمر دمع‌ دمغ‌ دمم‌ دمو دمى‌ دنر دنو دهر دهق‌ دهم‌ دهن‌ دهى‌ دور دول‌ دوم‌ دون‌ دئب‌ دين‌ ذا ذات ذانك‌ ذبب‌ ذبح‌ ذبذب‌ ذخر ذرء ذرر ذرع‌ ذرو ذعن‌ ذقن‌ ذكر ذكو ذلك‌ ذلكم‌ ذلكما ذلكن‌ ذلل‌ ذمم‌ ذنب‌ ذهب‌ ذهل‌ ذو ذوا ذود ذوق‌ ذوى‌ ذى‌ ذئب‌ ذيع‌ ذئم‌ ر رب‌ ربب‌ ربح‌ ربص‌ ربط ربع‌ ربو رتع‌ رتق‌ رتل‌ رجج‌ رجز رجس‌ رجع‌ رجف‌ رجل‌ رجم‌ رجو رحب‌ رحق‌ رحل‌ رحم‌ رحمان‌ رخو ردء ردد ردف‌ ردم‌ ردى‌ رذل‌ رزق‌ رس‌ رسخ‌ رسل‌ رسو رشد رصد رصص‌ رضع‌ رضو رطب‌ رعب‌ رعد رعى‌ رغب‌ رغد رغم‌ رفت‌ رفث‌ رفد رفرف‌ رفع‌ رفق‌ رقب‌ رقد رقق‌ رقم‌ رقى‌ ركب‌ ركد ركز ركس‌ ركض‌ ركع‌ ركم‌ ركن‌ رمح‌ رمد رمز رمضان‌ رمم‌ رمن‌ رمى‌ رهب‌ رهط رهق‌ رهن‌ رهو روح‌ رود روض‌ روع‌ روغ‌ روم‌ رويد ريب‌ رئس‌ ريش‌ ريع‌ رئف‌ رين‌ رئى‌ زبد زبر زبن‌ زبور زجج‌ زجر زجو زحزح‌ زحف‌ زخرف‌ زربيه‌ زرع‌ زرق‌ زرى‌ زعم‌ زفر زفف‌ زقم‌ زكريا زكو زلزل‌ زلف‌ زلق‌ زلل‌ زلم‌ زمر زمل‌ زمهر زنجبيل‌ زنم‌ زنى‌ زهد زهر زهق‌ زوج‌ زود زور زول‌ زيت‌ زيتون‌ زيد زيغ‌ زيل‌ زين‌ س‌ سال‌ سامرى‌ سبإ سبب‌ سبت‌ سبح‌ سبط سبع‌ سبغ‌ سبق‌ سبل‌ ستت‌ ستر سجد سجر سجل‌ سجن‌ سجو سجيل‌ سحب‌ سحت‌ سحر سحق‌ سحل‌ سخر سخط سدد سدر سدس‌ سدى‌ سراب‌ سرادق‌ سرب‌ سربال‌ سرج‌ سرح‌ سرد سرر سرع‌ سرف‌ سرق‌ سرمد سرى‌ سطح‌ سطر سطو سعد سعر سعى‌ سغب‌ سفح‌ سفر سفع‌ سفك‌ سفل‌ سفن‌ سفه‌ سقر سقط سقف‌ سقم‌ سقى‌ سكب‌ سكت‌ سكر سكن‌ سلب‌ سلح‌ سلخ‌ سلسبيل‌ سلسل‌ سلط سلف‌ سلق‌ سلك‌ سلل‌ سلم‌ سلو سليمان‌ سمد سمر سمع‌ سمك‌ سمم‌ سمن‌ سمو سنبل‌ سند سندس‌ سنم‌ سنن‌ سنه‌ سنو سهر سهل‌ سهم‌ سهو سواع‌ سوء سوح‌ سود سور سوط سوع‌ سوغ‌ سوف‌ سوق‌ سوم‌ سوى‌ سيب‌ سيح‌ سير سئل‌ سيل‌ سئم‌ سيناء سينين‌ شبه‌ شتت‌ شتو شجر شحح‌ شحم‌ شحن‌ شخص‌ شدد شرب‌ شرح‌ شرد شرذم‌ شرر شرط شرع‌ شرق‌ شرك‌ شرى‌ شطء شطر شطط شطن‌ شعب‌ شعر شعرى‌ شعل‌ شعيب‌ شغف‌ شغل‌ شفع‌ شفق‌ شفه‌ شفو شفى‌ شقق‌ شقو شقى‌ شكر شكس‌ شكك‌ شكل‌ شكو شمت‌ شمخ‌ شمس‌ شمل‌ شمئز شن‌ء شهب‌ شهد شهر شهق‌ شهو شوب‌ شور شوظ شوك‌ شوى‌ شى‌ء شيب‌ شيخ‌ شيد شيع‌ شئم‌ شئن‌ ص‌ صابئون‌ صالح‌ صبب‌ صبح‌ صبر صبع‌ صبغ‌ صبو صحب‌ صحف‌ صخخ‌ صخر صدد صدر صدع‌ صدف‌ صدق‌ صدى‌ صرح‌ صرخ‌ صرر صرصر صرط صرع‌ صرف‌ صرم‌ صعد صعر صعق‌ صغر صغو صفا صفح‌ صفد صفر صفصف‌ صفف‌ صفن‌ صفو صكك‌ صلب‌ صلح‌ صلد صلصل‌ صلو صلى‌ صمت‌ صمد صمع‌ صمم‌ صنع‌ صنم‌ صنو صهر صوب‌ صوت‌ صور صوع‌ صوف‌ صوم‌ صيح‌ صيد صير صيص‌ صيف‌ ضبح‌ ضجع‌ ضحك‌ ضحو ضحى‌ ضدد ضرب‌ ضرر ضرع‌ ضعف‌ ضغث‌ ضغن‌ ضفدع‌ ضلل‌ ضمر ضمم‌ ضنك‌ ضنن‌ ضه‌ء ضوء ضير ضيز ضيع‌ ضيف‌ ضيق‌ ضئن‌ ط طاغوت‌ طالوت‌ طبع‌ طبق‌ طحو طحى‌ طرح‌ طرد طرف‌ طرق‌ طرو طعم‌ طعن‌ طغو طغى‌ طف‌ء طفف‌ طفق‌ طفل‌ طلب‌ طلح‌ طلع‌ طلق‌ طلل‌ طمث‌ طمس‌ طمع‌ طمم‌ طمن‌ طمئن‌ طهر طود طور طوع‌ طوف‌ طوفان‌ طوق‌ طول‌ طوى‌ طيب‌ طير طين‌ ظعن‌ ظفر ظلل‌ ظلم‌ ظما ظم‌ء ظنن‌ ظهر ع‌ عاد عب‌ء عبث‌ عبد عبر عبس‌ عبقر عتب‌ عتد عتق‌ عتل‌ عتو عثر عثو عجب‌ عجز عجف‌ عجل‌ عجم‌ عدد عدس‌ عدل‌ عدن‌ عدو عذب‌ عذر عرب‌ عرج‌ عرجن‌ عرجون‌ عرر عرش‌ عرض‌ عرف‌ عرفات‌ عرم‌ عرو عرى‌ عزب‌ عزر عزز عزل‌ عزم‌ عزو عزى‌ عزير عسر عسعس‌ عسل‌ عسى‌ عشر عشو عصب‌ عصر عصف‌ عصم‌ عصو عصى‌ عضد عضض‌ عضل‌ عضو عطف‌ عطل‌ عطو عظم‌ عفر عفف‌ عفو عقب‌ عقد عقر عقل‌ عقم‌ عكف‌ علق‌ علم‌ علن‌ علو على‌ عمد عمر عمران‌ عمق‌ عمل‌ عمم‌ عمه‌ عمى‌ عن‌ عنب‌ عنت‌ عند عنق‌ عنكب‌ عنكبوت‌ عنو عنى‌ عهد عهن‌ عوج‌ عود عوذ عور عوق‌ عول‌ عوم‌ عون‌ عيب‌ عير عيسى‌ عيش‌ عيل‌ عين‌ عيى‌ غبر غبن‌ غثو غدر غدق‌ غدو غرب‌ غرر غرف‌ غرق‌ غرم‌ غرو غزل‌ غزو غسق‌ غسل‌ غشو غشى‌ غصب‌ غصص‌ غضب‌ غضض‌ غطش‌ غطو غفر غفل‌ غلب‌ غلظ غلف‌ غلق‌ غلل‌ غلم‌ غلو غلى‌ غمر غمز غمض‌ غمم‌ غنم‌ غنى‌ غوث‌ غور غوص‌ غوط غول‌ غوى‌ غيب‌ غيث‌ غير غيض‌ غيظ ف‌ فت‌ء فتح‌ فتر فتق‌ فتل‌ فتن‌ فتو فتى‌ فجج‌ فجر فجو فحش‌ فخر فدى‌ فرت‌ فرث‌ فرج‌ فرح‌ فرد فردوس‌ فرر فرش‌ فرض‌ فرط فرع‌ فرعون‌ فرغ‌ فرق‌ فره‌ فرى‌ فزز فزع‌ فسح‌ فسد فسر فسق‌ فشل‌ فصح‌ فصل‌ فصم‌ فضح‌ فضض‌ فضل‌ فضو فطر فظظ فعل‌ فقد فقر فقع‌ فقه‌ فكر فكك‌ فكه‌ فلح‌ فلق‌ فلك‌ فلن‌ فند فنن‌ فنى‌ فهم‌ فوت‌ فوج‌ فور فوز فوض‌ فوق‌ فوم‌ فوه‌ فى‌ فى‌ء فئد فيض‌ فيل‌ فئى‌ ق‌ قارون‌ قبح‌ قبر قبس‌ قبض‌ قبل‌ قتر قتل‌ قث‌ء قحم‌ قد قدح‌ قدد قدر قدس‌ قدم‌ قدو قذف‌ قرآن‌ قرء قرب‌ قرح‌ قرد قرر قرض‌ قرطس‌ قرع‌ قرف‌ قرن‌ قرنين‌ قرى‌ قريش‌ قسر قسط قسطس‌ قسم‌ قسو قسور قسيسين‌ قشعر قصد قصر قصص‌ قصف‌ قصم‌ قصو قضب‌ قضض‌ قضى‌ قطر قطط قطع‌ قطف‌ قطمر قعد قعر قفل‌ قفو قلب‌ قلد قلع‌ قلل‌ قلم‌ قلى‌ قمح‌ قمر قمص‌ قمطر قمع‌ قمل‌ قنت‌ قنط قنطر قنع‌ قنو قنى‌ قهر قوب‌ قوت‌ قوس‌ قوع‌ قول‌ قوم‌ قوى‌ قيض‌ قيل‌ ك‌ كافور كان‌ كاين‌ كبب‌ كبت‌ كبد كبر كبكب‌ كتب‌ كتم‌ كثب‌ كثر كدح‌ كدر كدى‌ كذب‌ كرب‌ كرر كرس‌ كرم‌ كره‌ كسب‌ كسد كسف‌ كسل‌ كسو كشط كشف‌ كظم‌ كعب‌ كعبة كفت‌ كفر كفف‌ كفل‌ كفو كفى‌ كلا كل‌ء كلب‌ كلتا كلح‌ كلف‌ كلل‌ كلم‌ كلو كم‌ كما كمل‌ كمم‌ كمه‌ كن‌ كند كنز كنس‌ كنن‌ كهف‌ كهل‌ كهن‌ كوب‌ كود كور كوكب‌ كون‌ كوى‌ كى‌ كيد كئس‌ كيف‌ كيل‌ كين‌ لا لات‌ ل‌ لبب‌ لبث‌ لبد لبس‌ لبن‌ لج‌ء لجج‌ لحد لحف‌ لحق‌ لحم‌ لحن‌ لحى‌ لدد لدن‌ لدى‌ لذذ لزب‌ لزم‌ لسن‌ لطف‌ لظى‌ لعب‌ لعل‌ لعن‌ لغب‌ لغو لفت‌ لفح‌ لفظ لفف‌ لفو لقب‌ لقح‌ لقط لقف‌ لقم‌ لقمان‌ لقى‌ لكن‌ لم‌ لما لمح‌ لمز لمس‌ لمم‌ لن‌ لهب‌ لهث‌ لهم‌ لهو لو لوت‌ لوح‌ لوذ لوط لولا لولو لوم‌ لون‌ لوى‌ ليت‌ ليس‌ لئك‌ ليل‌ لين‌ م‌ ما ماجوج‌ ماروت‌ مالك‌ متع‌ متن متى‌ مثل‌ مجد مجوس‌ محص‌ محق‌ محل‌ محمد محن‌ محو مخر مخض‌ مدد مدن‌ مدين‌ مدينه‌ مرء مرج‌ مرح‌ مرد مرر مرض‌ مروه‌ مرى‌ مريم‌ مزج‌ مزق‌ مزن‌ مسح‌ مسخ‌ مسد مسس‌ مسك‌ مسو مسيح‌ مشج‌ مشعر مشى‌ مصر مضغ‌ مضى‌ مطر مطو مع‌ معز معن‌ معى‌ مقت‌ مكث‌ مكر مكن‌ مكة مكو مل‌ء ملح‌ ملق‌ ملك‌ ملل‌ ملو من‌ مناة منع‌ منن‌ منى‌ مهد مهل‌ مهما مهن‌ موت‌ مؤتفكة موج‌ مور موسى‌ مول‌ موه‌ ميد مير ميز ميكال‌ ميل‌ مئى‌ ن‌ نا نب‌ء نبت‌ نبذ نبز نبط نبع‌ نبو نتق‌ نثر نجد نجس‌ نجم‌ نجو نحب‌ نحت‌ نحر نحس‌ نحل‌ نحن‌ نخر نخل‌ ندد ندم‌ ندو ندى‌ نذر نزع‌ نزغ‌ نزف‌ نزل‌ نس‌ء نسب‌ نسخ‌ نسر نسف‌ نسك‌ نسل‌ نسو نسى‌ نش‌ء نشر نشز نشط نصارى‌ نصب‌ نصت‌ نصح‌ نصر نصرانى‌ نصف‌ نصو نصى‌ نضج‌ نضخ‌ نضد نضر نطح‌ نطف‌ نطق‌ نظر نعج‌ نعس‌ نعق‌ نعل‌ نعم‌ نغض‌ نفث‌ نفح‌ نفخ‌ نفد نفذ نفر نفس‌ نفش‌ نفع‌ نفق‌ نفل‌ نفى‌ نقب‌ نقذ نقر نقص‌ نقض‌ نقع‌ نقم‌ نكب‌ نكث‌ نكح‌ نكد نكر نكس‌ نكص‌ نكف‌ نكل‌ نمرق‌ نمل‌ نمم‌ نن‌ نهج‌ نهر نهى‌ نوء نوب‌ نوح‌ نور نوش‌ نوص‌ نوق‌ نوم‌ نون‌ نوى‌ نيل‌ نئى‌ ه‌ ها هاء هات‌ هاتوا هاتين‌ هاروت‌ هارون‌ هامان‌ هاؤم‌ هبط هبو هتى‌ هجد هجر هجع‌ هدد هدم‌ هدهد هدى‌ هذا هذان‌ هذه‌ هرب‌ هرع‌ هزء هزز هزل‌ هزم‌ هشش‌ هشم‌ هضم‌ هطع‌ هكذا هل‌ هلع‌ هلك‌ هلل‌ هلم‌ هم‌ هما همد همر همز همس‌ همم‌ همن‌ هن‌ هنا هنالك‌ هن‌ء هو هود هور هؤلاء هون‌ هوى‌ هى‌ هى‌ء هيت‌ هيج‌ هيل‌ هيم‌ هيهات‌ و وبر وبق‌ وبل‌ وتد وتر وتن‌ وثق‌ وثن‌ وجب‌ وجد وجس‌ وجف‌ وجل‌ وجه‌ وحد وحش‌ وحى‌ ودد ودع‌ ودق‌ ودى‌ وذر ورث‌ ورد ورق‌ ورى‌ وزر وزع‌ وزن‌ وسط وسع‌ وسق‌ وسل‌ وسم‌ وسن‌ وسوس‌ وشى‌ وصب‌ وصد وصف‌ وصل‌ وصى‌ وضع‌ وضن‌ وطء وطر وطن‌ وعد وعظ وعلن‌ وعى‌ وفد وفر وفض‌ وفق‌ وفى‌ وقب‌ وقت‌ وقد وقذ وقر وقع‌ وقف‌ وقى‌ وك‌ء وكد وكز وكل‌ ولج‌ ولد وله‌ ولى‌ ونى‌ وهب‌ وهج‌ وهن‌ وهى‌ وى‌ وئد وئل‌ ويل‌ ى‌ يا ياجوج‌ ياقوت‌ يبس‌ يتم‌ يثرب‌ يحيى‌ يدى‌ يسر يعقوب‌ يعوق‌ يغوث‌ يقطن‌ يقطين‌ يقظ يقن‌ يمم‌ يمن‌ ينع‌ يهود يوسف‌ يوم‌ يونس‌ يى‌ يئس‌ ',
		numSurahs: 114,
        numPages: 604,
        numJuzs: 30,
        surahStarts: [],
        pageStarts: [],
        juzStarts: []
	},    
    
	/**
	 * must run this method on start, it works like constructor and builds the left out arrays
	 * good for feature update, which you might want to run on start.
	 */
    init: function() {
        for (var i = 1; i < Quran._data.Surah.length; i++)
        	Quran._data.surahStarts[i] = Quran.verseNo.surah(i);
        for (var i = 1; i < Quran._data.Page.length; i++)
        	Quran._data.pageStarts[i] = Quran.verseNo.page(i);
        for (var i = 1; i < Quran._data.Juz.length; i++)
        	Quran._data.juzStarts[i] = Quran.verseNo.juz(i);
    },
    
    /**
     * This object has all the functions you need to get the verse number, which you can 
     * use to get the query from the database.
     */
    verseNo: {
    	
    	/**
    	 * gets the verse number by ayah
    	 * @param integer surah
    	 * @param integer ayah (optional)
    	 */
    	ayah: function (surah, ayah) {
    		ayah = ayah || 1;
	        return Quran.surah.detail(surah).start + ayah;
    	},
    	
    	/**
    	 * gets the verse number by surah
    	 * @param integer surah
    	 */
    	surah: function (surah) {
    		return Quran.verseNo.ayah(surah);
    	},
    	
    	/**
    	 * gets the verse number by page
    	 * @param integer page
    	 */
    	page: function (page) {
    		return Quran.verseNo.ayah(Quran.ayah.fromPage(page).surah, Quran.ayah.fromPage(page).ayah);
    	},
    	
    	/**
    	 * gets the verse number by juz
    	 * @param integer juz
    	 */
    	juz: function (juz) {
    		 return Quran.verseNo.ayah(Quran.ayah.fromJuz(juz).surah, Quran.ayah.fromJuz(juz).ayah);
    	} 	
    },
    
    
    /**
	 * This object has all the functions to get surah and ayah number as objects
	 * this method is very useful for selection of surah&ayah, getting list of surah&ayah and so on
	 */
	ayah: {
    	
    	/**
    	 * gets the next surah & ayah, from current surah & ayah
    	 * @param integer surah
    	 * @param integer ayah
    	 */
    	next: function (surah, ayah)
    	{
    		if (++ayah > Quran.surah.detail(surah).ayahs){
    			if (surah == 114)
    				ayah = Quran.surah.detail(surah).ayahs;
    			else
    			{
    				ayah = 1;
    				surah++;
    			}
	        }
    	
    		return {
	            surah: surah,
	            ayah: ayah
	        };
    	}, 
    	
    	/**
    	 * gets the prev surah & ayah, from current surah & ayah
    	 * @param integer surah
    	 * @param integer ayah
    	 */
    	prev: function (surah, ayah)
    	{
    		--ayah;
    		
    		if (ayah <= 0)
    		{
    			if (surah <= 0)
    				surah = 1;
    			
    			if (surah <= 1)
    				ayah = 1;
    			else
    				ayah = Quran.surah.detail(--surah).ayahs;
    		}
    		
	        return {
	        	surah: surah,
	        	ayah: ayah
	        };
    	},
    	
    	/**
    	 * gets the page number from surah&ayah
    	 * @param integer surah
    	 * @param integer ayah (optional)
    	 */
    	page: function(surah, ayah){
            return Quran._arraySearch(Quran._data.pageStarts, Quran.verseNo.ayah(surah, ayah));
        },

    	/**
    	 * gets the juz number from surah&ayah
    	 * @param integer surah
    	 * @param integer ayah (optional)
    	 */
        juz: function(surah, ayah){
            return Quran._arraySearch(Quran._data.juzStarts, Quran.verseNo.ayah(surah, ayah));
        },

    	/**
    	 * gets the surah&ayah number from verse number
    	 * @param integer verse
    	 */
    	fromVerse: function(verse) {
	        var surah = Quran._arraySearch(Quran._data.surahStarts, verse);
	        var ayah = verse - Quran.surah.detail(surah).start;
	        return{
	        	surah: surah,
	        	ayah: ayah
	        };
	    },
        
	    /**
    	 * gets the surah&ayah number from juz number
    	 * @param integer juz
    	 */
    	fromJuz: function (juz) {
    		var juz = Quran._data.Juz[juz] || [1, 1];
            return{
            	surah: juz[0],
            	ayah: juz[1]
            };
    	},  
	    
	    /**
    	 * gets the surah&ayah number from page number
    	 * @param integer page
    	 */
    	fromPage: function (page) {
	    	var page = Quran._data.Page[page] || [1, 1];
	        return{
	        	surah: page[0],
	            ayah: page[1]
	        };
    	},
    	
    	/**
    	 * gets the list of surah&ayah numbers for a given page
    	 * @param integer page
    	 */
    	listFromPage: function(page) {
            var pageArray = [];
            var from = Quran.ayah.fromPage(page);
            var to = Quran.ayah.fromPage(page + 1);
            to = Quran.ayah.prev(to.surah, to.ayah);
            
            if (from.surah == to.surah)
            	pageArray = pageArray.concat(Quran._getAyahRange(from.surah, from.ayah, to.ayah));
            else{
                pageArray = pageArray.concat(Quran._getAyahRange(from.surah, from.ayah, Quran.surah.detail(from.surah).ayahs));
                for (var i = from.surah + 1; i < to.surah; i++)
                	pageArray = pageArray.concat(Quran._getAyahRange(i, 1, Quran.surah.detail(i).ayahs));
                pageArray = pageArray.concat(Quran._getAyahRange(to.surah, 1, to.ayah));
            }
            
            return pageArray;
        }	
    },
    
    /**
     * This object as methods related surah
     */
    surah: {
    	
    	/**
    	 * gets the surah detail object
    	 * @param integer surah
    	 */
    	detail: function(surah) {
	        var s = Quran._data.Surah[surah] || [0, 7];
	        var data = {};
	        var items = ['start', 'ayahs', 'order', 'rukus', 'arabic_name', 'english_name', 'english_meaning', 'type'];
	        for (var i = 0; i < items.length; i++)
	        	data[items[i]] = s[i];
	        return data;
	    },
	    
	    /**
    	 * gets the name of the surah
    	 * @param integer surah
    	 * @param nameType (optional) default is arabic. you can use arabic_name, english_name and english_meaning
    	 */
	    name: function(surah, nameType){
	        nameType = nameType || 'arabic_name';
	        return Quran.surah.detail(surah)[nameType];
	    },
	    
	    /**
    	 * gets the surah number of the surah from a surah name
    	 * @param string name pass surah name here
    	 * @param nameType (optional) default is arabic. you can use arabic_name, english_name and english_meaning
    	 */
	    number: function(name, nameType){
	        nameType = nameType || 'arabic_name';
	        for (i = 1; i <= Quran._data.numSurahs; i++)
	        if (Quran.surah.detail(i)[nameType] == name)
	        return i;
	        return 0;
	    }
    },
    
    /**
	 * internal method use
	 * fix the ayah number, if pass invalid ayah number
	 * @param integer surah
	 * @param integer ayah
	 */
    _fixAyahNum: function(surah, ayah){
        return Math.min(Math.max(ayah, 1), Quran.surah.detail(surah).ayahs);
    },
    
    /**
	 * internal method use
	 * fix the surah number, if pass invalid surah number
	 * @param integer surah
	 */
    _fixSurahNum: function(surah){
        return Math.min(Math.max(surah, 1), Quran._data.numSurahs);
    },
    
    /**
	 * internal method use
	 * fix the page number, if pass invalid page number
	 * @param integer page
	 */
    _fixPageNum: function(page){
        return Math.min(Math.max(page, 1), Quran._data.numPages);
    },
    
    /**
	 * internal method use
	 * fix the juz number, if pass invalid juz number
	 * @param integer juz
	 */
    _fixJuzNum: function(juz){
        return Math.min(Math.max(juz, 1), Quran._data.numJuzs);
    },
    
    /**
	 * internal method use
	 * search the array and returns the required item
	 * @param array theArray
	 * @param mixed item
	 */
    _arraySearch: function(theArray, item){
        var down = 0,
        mid;
        var up = theArray.length;
        while (up - down > 1){
            mid = (down + up) >> 1;
            if (theArray[mid] < item) down = mid;
            else up = mid;
        }
        if (theArray[up] != item)
        return up - 1;
        return up;
    },
    
    /**
	 * internal method use
	 * gets the list of ayahs from given range
	 * @param integer surah
	 * @param integer fromAyah
	 * @param integer toAyah
	 */    
    _getAyahRange: function(surah, fromAyah, toAyah){
        var outArray = [];
        for (i = fromAyah; i <= toAyah; i++)
        outArray.push({
            surah: surah,
            ayah: i,
            verseNo: Quran.verseNo.ayah(surah, i)
        });
        return outArray;
    }
};