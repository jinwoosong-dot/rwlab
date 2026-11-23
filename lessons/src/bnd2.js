META={id:'bnd2',k:'BND',n:2,
 title:{en:'Lesson 2 · Semicolons, Colons & Dashes',ko:'2강 · 세미콜론, 콜론, 대시',zh:'第2课 · 分号、冒号与破折号'},
 desc:{en:'Semicolon = soft period, colon needs a complete left side, single vs paired dashes, semicolons in complex lists',ko:'세미콜론은 부드러운 마침표, 콜론은 왼쪽이 완전해야, 대시 하나와 한 쌍, 복잡한 목록의 세미콜론',zh:'分号=柔和的句号、冒号左边必须完整、单个与成对的破折号、复杂列表中的分号'},
 endh:{en:'Lesson 2 complete',ko:'2강 완료',zh:'第2课完成'},
 endp:{en:'Practice until you can check the left side of a colon without thinking.',ko:'콜론 왼쪽을 생각 없이 바로 확인할 수 있을 때까지 연습해요.',zh:'练习到不用思考就能检查冒号左边为止。'}};
L={en:{semi:'Semicolon ;',colon:'Colon :',dash:'Dash —',both:'Both sides complete',leftc:'Left side complete',any:'Right side: anything that explains',test:'Swap test: replace ; with . — still correct?',arrow:'Colon = “here is what I mean”',pair:'Two dashes = extra information',single:'One dash = like a colon',lists:'Items already have commas → use ; between items',cheat:'Quick table'},
 ko:{semi:'세미콜론 ;',colon:'콜론 :',dash:'대시 —',both:'양쪽 모두 완전',leftc:'왼쪽이 완전',any:'오른쪽: 설명이면 무엇이든',test:'바꿔 보기: ; 자리에 . 을 넣어도 맞나?',arrow:'콜론 = "무슨 뜻이냐면"',pair:'대시 두 개 = 추가 정보',single:'대시 하나 = 콜론과 비슷',lists:'항목 안에 쉼표가 있으면 → 항목 사이는 ;',cheat:'한눈에 보기'},
 zh:{semi:'分号 ;',colon:'冒号 :',dash:'破折号 —',both:'两边都完整',leftc:'左边完整',any:'右边：只要是解释，什么都行',test:'替换测试：把 ; 换成 . 还对吗？',arrow:'冒号 = “我的意思是”',pair:'两个破折号 = 补充信息',single:'一个破折号 = 类似冒号',lists:'项目内部已有逗号 → 项目之间用 ;',cheat:'一览表'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 1 · Boundaries</div><h2 class="h2" data-l="title"></h2>
 <div class="row"><div class="card h" id="i1" style="flex:1;text-align:center"><div class="big-ic" style="font-size:6cqw">;</div><b style="font-size:2.2cqw" data-l="semi"></b></div>
 <div class="card h" id="i2" style="flex:1;text-align:center"><div class="big-ic" style="font-size:6cqw">:</div><b style="font-size:2.2cqw" data-l="colon"></b></div>
 <div class="card h" id="i3" style="flex:1;text-align:center"><div class="big-ic" style="font-size:6cqw">—</div><b style="font-size:2.2cqw" data-l="dash"></b></div></div>`,
 b:[
 {en:"Welcome to Lesson 2. In Lesson 1, we learned that two complete sentences need strong punctuation between them.",ko:"2강에 오신 걸 환영해요. 1강에서 완전한 문장 두 개 사이에는 강한 구두점이 필요하다고 배웠죠.",zh:"欢迎来到第2课。第1课我们学到，两个完整句子之间需要有力的标点。"},
 {en:"Today we look closely at three marks that students mix up all the time: the semicolon, the colon, and the dash.",ko:"오늘은 학생들이 늘 헷갈리는 세 가지 부호를 자세히 볼게요. 세미콜론, 콜론, 그리고 대시예요.",zh:"今天我们仔细看三个学生总是混淆的符号：分号、冒号和破折号。",a:['in:#i1','in:#i2','in:#i3']},
 {en:"Each one has a simple rule. If you know the rule, you can check any answer choice in seconds.",ko:"각각 규칙은 간단해요. 규칙만 알면 어떤 선택지든 몇 초 만에 확인할 수 있어요.",zh:"每个符号的规则都很简单。掌握规则，任何选项几秒钟就能判断。"}]},
{id:'semi',ch:{en:'Semicolon',ko:'세미콜론',zh:'分号'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="semi"></h2>
 <div class="big card">The library closed at noon<span class="tok" id="s-p">;</span> the staff went home early.</div>
 <div class="side"><div class="card h" id="s-l"><b data-l="left"></b><br>The library closed at noon → ✓</div><div class="card h" id="s-r"><b data-l="right2"></b><br>the staff went home early → ✓</div></div>
 <div class="card h" id="s-t" style="font-size:2.1cqw"><b data-l="test"></b><div class="pass">The library closed at noon<b style="color:var(--ok)">.</b> The staff went home early. ✓</div></div>`,
 b:[
 {en:"Let's start with the semicolon. Think of it as a soft period.",ko:"세미콜론부터 볼게요. 부드러운 마침표라고 생각하세요.",zh:"先看分号。把它想成一个柔和的句号。",a:['add:#s-p:good']},
 {en:"That means the rule is the same as a period: there must be a complete sentence on the left and a complete sentence on the right.",ko:"그러니까 규칙도 마침표와 같아요. 왼쪽에도 완전한 문장, 오른쪽에도 완전한 문장이 있어야 해요.",zh:"所以规则和句号一样：左边必须是完整句子，右边也必须是完整句子。",a:['in:#s-l','in:#s-r']},
 {en:"Here is a quick check. Replace the semicolon with a period. If both parts still work as sentences, the semicolon is correct.",ko:"빠르게 확인하는 방법이 있어요. 세미콜론 자리에 마침표를 넣어 보세요. 두 부분이 여전히 문장으로 성립하면 세미콜론이 맞아요.",zh:"有个快速检查方法：把分号换成句号。如果两部分仍然都是句子，分号就是对的。",a:['in:#s-t']},
 {en:"So a semicolon and a period are interchangeable on the SAT. If both appear in the choices for the same spot, neither can be the answer.",ko:"그래서 SAT에서 세미콜론과 마침표는 서로 바꿔 쓸 수 있어요. 같은 자리 선택지에 둘 다 있으면 둘 다 정답이 될 수 없어요.",zh:"所以在SAT中分号和句号可以互换。如果同一位置的选项里两者都出现，那两个都不是答案。"}]},
{id:'semiwrong',ch:{en:'Semicolon traps',ko:'세미콜론 함정',zh:'分号陷阱'},html:`
 <div class="kick">Trap</div><h2 class="h2">⚠️ ; + not complete</h2>
 <div class="big card h" id="w1" style="font-size:2.6cqw">Because the library closed at noon<span class="tok bad">;</span> the staff went home early. <span class="stamp no">✗</span></div>
 <div class="big card h" id="w2" style="font-size:2.6cqw">The staff went home early<span class="tok bad">;</span> because the library closed. <span class="stamp no">✗</span></div>
 <div class="big card h" id="w3" style="font-size:2.6cqw">Because the library closed at noon<span class="tok good">,</span> the staff went home early. <span class="stamp ok">✓</span></div>`,
 b:[
 {en:"Now the trap. 'Because the library closed at noon; the staff went home early.' Do the swap test.",ko:"이제 함정이에요. 'Because the library closed at noon; the staff went home early.' 바꿔 보기를 해 보세요.",zh:"现在看陷阱。Because the library closed at noon; the staff went home early. 做一下替换测试。",a:['in:#w1']},
 {en:"The left side starts with 'because,' so it cannot stand alone. A semicolon is wrong here.",ko:"왼쪽이 because로 시작해서 혼자 설 수 없어요. 그래서 세미콜론은 틀려요.",zh:"左边以 because 开头，不能独立成句。所以这里用分号是错的。"},
 {en:"The same problem happens on the right: 'The staff went home early; because the library closed.' The right side is not complete.",ko:"오른쪽도 마찬가지예요. 'The staff went home early; because the library closed.' 오른쪽이 완전하지 않아요.",zh:"右边也会出现同样的问题：The staff went home early; because the library closed. 右边不完整。",a:['in:#w2']},
 {en:"When a dependent clause comes first, use a comma: 'Because the library closed at noon, the staff went home early.'",ko:"종속절이 앞에 오면 쉼표를 써요. 'Because the library closed at noon, the staff went home early.'",zh:"从句在前时用逗号：Because the library closed at noon, the staff went home early.",a:['in:#w3']},
 {q:{en:{q:'Which sentence uses the semicolon correctly?',o:['The trail was steep; but we reached the top.','The trail was steep; we reached the top anyway.','Although the trail was steep; we reached the top.'],e:'Both sides of B are complete sentences. In A, the right side starts with “but,” which needs a comma instead. In C, the left side is dependent.'},
     ko:{q:'세미콜론을 올바르게 쓴 문장은?',o:['The trail was steep; but we reached the top.','The trail was steep; we reached the top anyway.','Although the trail was steep; we reached the top.'],e:'B는 양쪽 모두 완전한 문장이에요. A는 but과 함께라면 쉼표를 써야 하고, C는 왼쪽이 종속절이에요.'},
     zh:{q:'哪个句子的分号用得正确？',o:['The trail was steep; but we reached the top.','The trail was steep; we reached the top anyway.','Although the trail was steep; we reached the top.'],e:'B 两边都是完整句子。A 用 but 时应该用逗号，C 的左边是从句。'},a:1}}]},
{id:'colon',ch:{en:'Colon',ko:'콜론',zh:'冒号'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="colon"></h2>
 <div class="card h" id="c0" style="font-size:2.4cqw"><b data-l="arrow"></b></div>
 <div class="big card" style="font-size:2.6cqw"><span class="tok" id="c-l">The recipe needs three things</span><span class="tok good">:</span> <span class="tok" id="c-r">flour, eggs, and milk.</span></div>
 <div class="row"><span class="lbl g h" id="c1" data-l="leftc"></span><span class="lbl s h" id="c2" data-l="any"></span></div>
 <div class="pass card h" id="c3">She had one goal<b style="color:var(--ok)">:</b> to win. ✓ &nbsp;&nbsp; He knew the answer<b style="color:var(--ok)">:</b> the bridge was unsafe. ✓</div>`,
 b:[
 {en:"Next, the colon. A colon means: here is what I mean. What comes after it explains or lists what came before.",ko:"다음은 콜론이에요. 콜론은 '무슨 뜻이냐면'이라는 신호예요. 뒤에 오는 말이 앞의 내용을 설명하거나 나열해요.",zh:"接下来是冒号。冒号的意思是：我的意思是。后面的内容解释或列举前面的内容。",a:['in:#c0']},
 {en:"The rule: the left side must be a complete sentence. 'The recipe needs three things' is complete.",ko:"규칙은 이거예요. 왼쪽이 완전한 문장이어야 해요. 'The recipe needs three things'는 완전해요.",zh:"规则是：左边必须是完整句子。The recipe needs three things 是完整的。",a:['add:#c-l:subj','in:#c1']},
 {en:"The right side can be almost anything, as long as it explains the left: a list, a single word, a phrase, or another sentence.",ko:"오른쪽은 왼쪽을 설명하기만 하면 거의 뭐든 괜찮아요. 목록, 단어 하나, 구, 또는 또 하나의 문장도 돼요.",zh:"右边几乎可以是任何形式，只要它解释左边：一个列表、一个词、一个短语，或者另一个句子。",a:['add:#c-r:dep','in:#c2']},
 {en:"'She had one goal: to win.' 'He knew the answer: the bridge was unsafe.' Both are correct.",ko:"'She had one goal: to win.' 'He knew the answer: the bridge was unsafe.' 둘 다 맞아요.",zh:"She had one goal: to win. He knew the answer: the bridge was unsafe. 两句都对。",a:['in:#c3']}]},
{id:'colonwrong',ch:{en:'Colon traps',ko:'콜론 함정',zh:'冒号陷阱'},html:`
 <div class="kick">Trap</div><h2 class="h2">⚠️ The left side must be complete</h2>
 <div class="big card h" id="k1" style="font-size:2.6cqw">The recipe needs<span class="tok bad">:</span> flour, eggs, and milk. <span class="stamp no">✗</span></div>
 <div class="big card h" id="k2" style="font-size:2.6cqw">Bring supplies such as<span class="tok bad">:</span> a map and a flashlight. <span class="stamp no">✗</span></div>
 <div class="big card h" id="k3" style="font-size:2.6cqw">The recipe needs flour, eggs, and milk. <span class="stamp ok">✓</span></div>`,
 b:[
 {en:"Here is the most common colon mistake. 'The recipe needs: flour, eggs, and milk.'",ko:"가장 흔한 콜론 실수예요. 'The recipe needs: flour, eggs, and milk.'",zh:"这是最常见的冒号错误：The recipe needs: flour, eggs, and milk.",a:['in:#k1']},
 {en:"'The recipe needs' is not complete. Needs what? The verb is cut off from its object, so the colon is wrong.",ko:"'The recipe needs'는 완전하지 않아요. 뭘 필요로 하죠? 동사와 목적어 사이가 끊겼으니 콜론은 틀려요.",zh:"The recipe needs 不完整。需要什么？动词和宾语被切断了，所以冒号是错的。"},
 {en:"The same goes for 'such as,' 'including,' and 'for example.' A colon right after them is wrong.",ko:"such as, including, for example 뒤도 마찬가지예요. 이 말들 바로 뒤에 콜론을 찍으면 틀려요.",zh:"such as、including、for example 后面也一样。紧跟在它们后面加冒号是错的。",a:['in:#k2']},
 {en:"The fix is often no punctuation at all: 'The recipe needs flour, eggs, and milk.'",ko:"고치는 방법은 대부분 아무 부호도 안 쓰는 거예요. 'The recipe needs flour, eggs, and milk.'",zh:"改法通常是什么标点都不加：The recipe needs flour, eggs, and milk.",a:['in:#k3']},
 {q:{en:{q:'Which sentence uses the colon correctly?',o:['The museum displays: paintings, maps, and coins.','The museum displays three kinds of objects: paintings, maps, and coins.','The museum displays objects such as: paintings and maps.'],e:'Only B has a complete sentence before the colon. In A and C, the colon cuts the sentence in the middle.'},
     ko:{q:'콜론을 올바르게 쓴 문장은?',o:['The museum displays: paintings, maps, and coins.','The museum displays three kinds of objects: paintings, maps, and coins.','The museum displays objects such as: paintings and maps.'],e:'콜론 앞이 완전한 문장인 건 B뿐이에요. A와 C는 콜론이 문장을 중간에서 끊어요.'},
     zh:{q:'哪个句子的冒号用得正确？',o:['The museum displays: paintings, maps, and coins.','The museum displays three kinds of objects: paintings, maps, and coins.','The museum displays objects such as: paintings and maps.'],e:'只有 B 冒号前是完整句子。A 和 C 的冒号把句子从中间切断了。'},a:1}}]},
{id:'dash',tight:1,ch:{en:'Dash',ko:'대시',zh:'破折号'},html:`
 <div class="kick">Step 3</div><h2 class="h2" data-l="dash"></h2>
 <div class="card h" id="d1"><b class="small" data-l="single"></b><div class="pass" style="font-size:2.4cqw">The recipe needs three things <b style="color:var(--ok)">—</b> flour, eggs, and milk.</div></div>
 <div class="card h" id="d2"><b class="small" data-l="pair"></b><div class="pass" style="font-size:2.4cqw">The bridge <b style="color:var(--ok)">—</b> <span class="hl">the longest in the region</span> <b style="color:var(--ok)">—</b> opened in 1937.</div></div>
 <div class="card h" id="d3"><div class="pass" style="font-size:2.4cqw">The bridge <b style="color:var(--bad)">—</b> the longest in the region<b style="color:var(--bad)">,</b> opened in 1937. ✗</div></div>`,
 b:[
 {en:"Now the dash. A single dash works almost like a colon. It introduces an explanation, so the left side should be complete.",ko:"이제 대시예요. 대시 하나는 콜론과 거의 비슷하게 써요. 설명을 이끌어 내니까 왼쪽이 완전해야 해요.",zh:"现在看破折号。单个破折号的用法几乎和冒号一样。它引出解释，所以左边应该完整。",a:['in:#d1']},
 {en:"But dashes often come in pairs. A pair of dashes puts extra information in the middle of a sentence, like brackets.",ko:"그런데 대시는 두 개가 짝으로 자주 나와요. 대시 한 쌍은 괄호처럼 문장 중간에 추가 정보를 넣어요.",zh:"但破折号常常成对出现。一对破折号像括号一样，把补充信息放在句子中间。",a:['in:#d2']},
 {en:"The rule for pairs: open with a dash, close with a dash. You cannot open with a dash and close with a comma.",ko:"짝 규칙은 이거예요. 대시로 열었으면 대시로 닫아요. 대시로 열고 쉼표로 닫으면 안 돼요.",zh:"成对的规则：用破折号开始，就用破折号结束。不能用破折号开始、用逗号结束。",a:['in:#d3']},
 {en:"Quick tip: on the SAT, look for a dash earlier in the sentence. If there is one, the answer often needs the matching dash.",ko:"팁 하나. SAT에서는 문장 앞쪽에 대시가 있는지 보세요. 있으면 정답은 짝이 되는 대시인 경우가 많아요.",zh:"小技巧：在SAT中先看句子前面有没有破折号。如果有，答案往往需要与之成对的破折号。"}]},
{id:'lists',ch:{en:'Semicolons in lists',ko:'목록 속 세미콜론',zh:'列表中的分号'},html:`
 <div class="kick">Step 4</div><h2 class="h2" data-l="lists"></h2>
 <div class="pass card" style="font-size:2.3cqw">The tour visits Lyon, France<span class="tok" id="l1">;</span> Turin, Italy<span class="tok" id="l2">;</span> and Geneva, Switzerland.</div>
 <div class="pass card h" id="l3" style="font-size:2.3cqw">The tour visits Lyon, France, Turin, Italy, and Geneva, Switzerland. <span class="stamp no">✗ ?</span></div>`,
 b:[
 {en:"There is one more job for the semicolon: separating items in a list when the items already contain commas.",ko:"세미콜론에는 역할이 하나 더 있어요. 항목 안에 이미 쉼표가 있는 목록에서 항목끼리 구분하는 거예요.",zh:"分号还有一个作用：当列表项目内部已经有逗号时，用分号把项目隔开。",a:['add:#l1:good','add:#l2:good']},
 {en:"'Lyon, France; Turin, Italy; and Geneva, Switzerland.' Each item is a city and a country with a comma inside.",ko:"'Lyon, France; Turin, Italy; and Geneva, Switzerland.' 각 항목이 도시와 나라라서 안에 쉼표가 있어요.",zh:"Lyon, France; Turin, Italy; and Geneva, Switzerland. 每一项都是城市加国家，内部有逗号。"},
 {en:"With commas only, the reader cannot tell where one item ends. So the semicolon marks the bigger break.",ko:"쉼표만 쓰면 한 항목이 어디서 끝나는지 알 수 없어요. 그래서 더 큰 구분을 세미콜론으로 표시해요.",zh:"如果只用逗号，读者分不清一项在哪里结束。所以用分号标出更大的分隔。",a:['in:#l3']},
 {en:"On the SAT, keep the pattern consistent. If one item is followed by a semicolon, the others should be too.",ko:"SAT에서는 패턴을 일정하게 유지하세요. 한 항목 뒤에 세미콜론이 있으면 다른 항목 뒤에도 세미콜론이에요.",zh:"在SAT中保持一致。如果一个项目后用了分号，其他项目后也要用分号。"}]},
{id:'table',ch:{en:'Quick table',ko:'한눈에 보기',zh:'一览表'},html:`
 <div class="kick" data-l="cheat"></div><h2 class="h2">; &nbsp; : &nbsp; —</h2>
 <table class="tbl" style="width:100%"><tr><th></th><th data-l="left"></th><th data-l="right2"></th></tr>
 <tr id="t1" class="h"><td><b>. &nbsp;;</b></td><td>✓ complete</td><td>✓ complete</td></tr>
 <tr id="t2" class="h"><td><b>, + FANBOYS</b></td><td>✓ complete</td><td>✓ complete</td></tr>
 <tr id="t3" class="h"><td><b>: &nbsp;—</b></td><td>✓ complete</td><td>anything that explains</td></tr>
 <tr id="t4" class="h"><td><b>— … —</b></td><td colspan="2">same mark on both sides</td></tr></table>`,
 b:[
 {en:"Let's put it all in one table. Period and semicolon: complete on both sides.",ko:"한 표로 정리해 볼게요. 마침표와 세미콜론은 양쪽 모두 완전해야 해요.",zh:"我们把内容整理成一张表。句号和分号：两边都要完整。",a:['in:#t1']},
 {en:"Comma plus FANBOYS: also complete on both sides.",ko:"쉼표 더하기 FANBOYS도 양쪽 모두 완전해야 해요.",zh:"逗号加FANBOYS：两边也都要完整。",a:['in:#t2']},
 {en:"Colon and single dash: the left side must be complete. The right side just has to explain it.",ko:"콜론과 대시 하나는 왼쪽만 완전하면 돼요. 오른쪽은 설명이기만 하면 돼요.",zh:"冒号和单个破折号：左边必须完整，右边只要是解释就行。",a:['in:#t3']},
 {en:"And paired dashes: whatever mark opens the extra information must also close it.",ko:"그리고 대시 한 쌍은 추가 정보를 연 부호와 같은 부호로 닫아야 해요.",zh:"成对的破折号：用什么符号开启补充信息，就用什么符号结束。",a:['in:#t4']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.3cqw">Marine biologist Rachel Okafor studies one feature of octopuses more than any other <b>______</b> their ability to change color in less than a second.</div>
 <div class="choices"><div id="x1">A) other;</div><div id="x2">B) other:</div><div id="x3">C) other, and</div><div id="x4">D) other, it is</div></div>
 <div class="side"><div class="card h" id="xl"><b data-l="left"></b> → ✓ complete</div><div class="card h" id="xr"><b data-l="right2"></b> → ✗ not a sentence (explains “one feature”)</div></div>`,
 b:[
 {en:"Let's solve one together. Draw the line at the blank.",ko:"같이 한 문제 풀어 봐요. 빈칸에 세로줄을 그어요.",zh:"我们一起做一道题。在空格处画竖线。"},
 {en:"The left side, 'Rachel Okafor studies one feature of octopuses more than any other,' is complete.",ko:"왼쪽 'Rachel Okafor studies one feature of octopuses more than any other'는 완전해요.",zh:"左边 Rachel Okafor studies one feature of octopuses more than any other 是完整的。",a:['in:#xl']},
 {en:"The right side, 'their ability to change color in less than a second,' has no tensed verb. It is not a sentence. It explains 'one feature.'",ko:"오른쪽 'their ability to change color in less than a second'에는 시제 있는 동사가 없어요. 문장이 아니에요. 'one feature'가 뭔지 설명하는 말이에요.",zh:"右边 their ability to change color in less than a second 没有时态动词，不是句子。它在解释 one feature。",a:['in:#xr']},
 {en:"Complete left side, explanation on the right: that is the colon. A needs two complete sentences. C joins a sentence to a fragment. D is a comma splice: 'it is their ability' is a complete sentence. The answer is B.",ko:"왼쪽은 완전하고 오른쪽은 설명이에요. 바로 콜론 자리예요. A는 양쪽이 완전해야 하고, C는 문장과 조각을 이어요. D는 'it is their ability'가 완전한 문장이라 comma splice예요. 정답은 B예요.",zh:"左边完整，右边是解释：这正是冒号的用法。A 需要两个完整句子，C 把句子和片段连起来，D 的 it is their ability 是完整句子，所以是逗号粘连。答案是 B。",a:['add:#x1:x','add:#x3:x','add:#x4:x','add:#x2:o']},
 {q:{en:{q:'“The festival — held every spring since 1952 ___ draws thousands of visitors.” Which is correct?',o:['1952,','1952 —','1952;'],e:'The extra information opened with a dash, so it must close with a dash.'},
     ko:{q:'“The festival — held every spring since 1952 ___ draws thousands of visitors.” 올바른 것은?',o:['1952,','1952 —','1952;'],e:'추가 정보를 대시로 열었으니 대시로 닫아야 해요.'},
     zh:{q:'“The festival — held every spring since 1952 ___ draws thousands of visitors.” 哪个正确？',o:['1952,','1952 —','1952;'],e:'补充信息用破折号开启，就必须用破折号结束。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 2</h2>
 <ul class="sum card"><li class="h" id="s1"><b>;</b> = soft period → ✓ ; ✓ (swap test with .)</li>
 <li class="h" id="s2"><b>:</b> → left side ✓ complete; no colon after <i>needs, such as, including</i></li>
 <li class="h" id="s3"><b>—</b> alone ≈ colon; <b>— … —</b> must match</li>
 <li class="h" id="s4">Items with commas inside → <b>;</b> between items</li></ul>`,
 b:[
 {en:"Let's review. A semicolon is a soft period, so both sides must be complete. Use the swap test.",ko:"정리할게요. 세미콜론은 부드러운 마침표라서 양쪽 모두 완전해야 해요. 바꿔 보기를 쓰세요.",zh:"我们来总结。分号是柔和的句号，两边都必须完整。用替换测试。",a:['in:#s1']},
 {en:"A colon needs a complete sentence on the left. Never put a colon right after a verb or after such as.",ko:"콜론은 왼쪽에 완전한 문장이 있어야 해요. 동사나 such as 바로 뒤에는 절대 콜론을 찍지 마세요.",zh:"冒号左边需要完整句子。绝不要在动词或 such as 后面直接加冒号。",a:['in:#s2']},
 {en:"A single dash works like a colon, and paired dashes must match.",ko:"대시 하나는 콜론처럼 쓰고, 대시 한 쌍은 짝이 맞아야 해요.",zh:"单个破折号像冒号一样用，成对的破折号必须匹配。",a:['in:#s3']},
 {en:"And when list items have commas inside, separate them with semicolons. Next time, we will learn about extra information in the middle of a sentence. See you in Lesson 3!",ko:"그리고 목록 항목 안에 쉼표가 있으면 항목 사이는 세미콜론으로 구분해요. 다음 시간에는 문장 중간에 들어가는 추가 정보를 배워요. 3강에서 만나요!",zh:"列表项目内有逗号时，项目之间用分号隔开。下节课我们学习句子中间的补充信息。第3课见！",a:['in:#s4']}]}];
