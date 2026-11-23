META={id:'bnd3',k:'BND',n:3,
 title:{en:'Lesson 3 · Extra Information: Commas, Dashes & Parentheses',ko:'3강 · 삽입 정보: 쉼표, 대시, 괄호',zh:'第3课 · 插入信息：逗号、破折号与括号'},
 desc:{en:'The removal test, matching pairs, essential vs. extra information, titles before names, which vs. that',ko:'빼 보기 테스트, 짝 맞추기, 필수 정보와 추가 정보, 이름 앞 직함, which와 that',zh:'删除测试、成对匹配、必要信息与补充信息、名字前的头衔、which 与 that'},
 endh:{en:'Lesson 3 complete',ko:'3강 완료',zh:'第3课完成'},
 endp:{en:'Practice the removal test until you see the extra information at a glance.',ko:'삽입 정보가 한눈에 보일 때까지 빼 보기 테스트를 연습해요.',zh:'练习删除测试，直到一眼就能看出补充信息。'}};
L={en:{rm:'Removal test',still:'Still a complete sentence with the same meaning?',yes:'Yes → extra → mark both ends',no:'No → essential → no commas',pairs:'Open and close with the same mark',ess:'Essential',extra:'Extra',one:'only one sister',many:'more than one sister',title2:'Title / description + name → no comma',which:'which / who , → extra',that:'that → essential, no comma'},
 ko:{rm:'빼 보기 테스트',still:'빼도 같은 뜻의 완전한 문장인가?',yes:'예 → 추가 정보 → 양 끝 표시',no:'아니오 → 필수 정보 → 쉼표 없음',pairs:'여는 부호와 닫는 부호를 똑같이',ess:'필수',extra:'추가',one:'언니가 한 명',many:'언니가 여러 명',title2:'직함·설명 + 이름 → 쉼표 없음',which:'which / who 앞 쉼표 → 추가 정보',that:'that → 필수 정보, 쉼표 없음'},
 zh:{rm:'删除测试',still:'删掉后仍是意思相同的完整句子吗？',yes:'是 → 补充信息 → 两端都要标',no:'否 → 必要信息 → 不加逗号',pairs:'用同样的符号开启和结束',ess:'必要',extra:'补充',one:'只有一个姐姐',many:'不止一个姐姐',title2:'头衔/描述 + 名字 → 不加逗号',which:'which / who 前有逗号 → 补充信息',that:'that → 必要信息，不加逗号'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 1 · Boundaries</div><h2 class="h2" data-l="title"></h2>
 <div class="big card h" id="i1" style="font-size:2.8cqw">The bridge<span class="tok" id="i1a">,</span> <span class="tok" id="i1b">designed by a team of twelve engineers</span><span class="tok" id="i1c">,</span> opened in 1937.</div>`,
 b:[
 {en:"Welcome to Lesson 3. Writers often drop extra information into the middle of a sentence.",ko:"3강에 오신 걸 환영해요. 글을 쓸 때 문장 중간에 추가 정보를 끼워 넣는 경우가 많아요.",zh:"欢迎来到第3课。作者常常在句子中间插入补充信息。",a:['in:#i1']},
 {en:"Like this: 'The bridge, designed by a team of twelve engineers, opened in 1937.'",ko:"이렇게요. 'The bridge, designed by a team of twelve engineers, opened in 1937.'",zh:"比如：The bridge, designed by a team of twelve engineers, opened in 1937.",a:['add:#i1b:dep']},
 {en:"The SAT tests two things here: is this information extra or essential, and are both ends marked correctly?",ko:"SAT는 여기서 두 가지를 물어요. 이 정보가 추가 정보인가 필수 정보인가, 그리고 양 끝이 올바르게 표시됐는가.",zh:"SAT在这里考两件事：这个信息是补充的还是必要的？两端标得对不对？",a:['add:#i1a:good','add:#i1c:good']}]},
{id:'removal',ch:{en:'Removal test',ko:'빼 보기 테스트',zh:'删除测试'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="rm"></h2>
 <div class="big card" style="font-size:2.6cqw">My neighbor<span class="tok" id="r1">,</span> <span class="tok" id="r2">a retired pilot</span><span class="tok" id="r3">,</span> grows tomatoes.</div>
 <div class="big card h" id="r4" style="font-size:2.6cqw">My neighbor grows tomatoes. <span class="stamp ok">✓</span></div>
 <div class="card h" id="r5"><b class="small" data-l="still"></b><div class="row" style="margin-top:1cqw"><span class="lbl g" data-l="yes"></span><span class="lbl r" data-l="no"></span></div></div>`,
 b:[
 {en:"Here is the main tool: the removal test. Take out the part you think is extra.",ko:"가장 중요한 도구는 빼 보기 테스트예요. 추가 정보 같은 부분을 빼 보세요.",zh:"最重要的工具是删除测试：把你认为是补充的部分拿掉。",a:['add:#r2:dep']},
 {en:"'My neighbor, a retired pilot, grows tomatoes.' Remove 'a retired pilot.' 'My neighbor grows tomatoes.'",ko:"'My neighbor, a retired pilot, grows tomatoes.'에서 'a retired pilot'을 빼면 'My neighbor grows tomatoes.'",zh:"My neighbor, a retired pilot, grows tomatoes. 去掉 a retired pilot，就是 My neighbor grows tomatoes.",a:['in:#r4']},
 {en:"It is still a complete sentence, and the main meaning did not change. So the information is extra.",ko:"여전히 완전한 문장이고 핵심 뜻도 그대로예요. 그러니까 추가 정보예요.",zh:"它仍然是完整句子，主要意思也没变。所以这是补充信息。",a:['in:#r5']},
 {en:"Extra information needs a mark at both ends: two commas, two dashes, or two parentheses.",ko:"추가 정보는 양쪽 끝에 부호가 있어야 해요. 쉼표 두 개, 대시 두 개, 또는 괄호 한 쌍이요.",zh:"补充信息两端都要有标点：两个逗号、两个破折号或一对括号。",a:['add:#r1:good','add:#r3:good']}]},
{id:'pairs',tight:1,ch:{en:'Matching pairs',ko:'짝 맞추기',zh:'成对匹配'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="pairs"></h2>
 <div class="pass card h" id="p1" style="font-size:2.1cqw">My neighbor<b style="color:var(--ok)">,</b> a retired pilot<b style="color:var(--ok)">,</b> grows tomatoes. ✓ &nbsp; My neighbor <b style="color:var(--ok)">—</b> a retired pilot <b style="color:var(--ok)">—</b> grows tomatoes. ✓</div>
 <div class="pass card h" id="p2" style="font-size:2.1cqw">My neighbor<b style="color:var(--bad)">,</b> a retired pilot <b style="color:var(--bad)">—</b> grows tomatoes. ✗ <span class="small">(mixed)</span></div>
 <div class="pass card h" id="p3" style="font-size:2.1cqw">My neighbor<b style="color:var(--bad)">,</b> a retired pilot grows tomatoes. ✗ <span class="small">(missing close)</span></div>
 <div class="pass card h" id="p4" style="font-size:2.1cqw">My neighbor a retired pilot<b style="color:var(--bad)">,</b> grows tomatoes. ✗ <span class="small">(missing open)</span></div>`,
 b:[
 {en:"The rule for marking extra information is simple: open and close with the same mark. Comma with comma, dash with dash.",ko:"추가 정보를 표시하는 규칙은 간단해요. 같은 부호로 열고 닫아요. 쉼표는 쉼표와, 대시는 대시와요.",zh:"标注补充信息的规则很简单：用同样的符号开启和结束。逗号配逗号，破折号配破折号。",a:['in:#p1']},
 {en:"A comma on one side and a dash on the other is wrong.",ko:"한쪽은 쉼표, 다른 쪽은 대시면 틀려요.",zh:"一边逗号、一边破折号是错的。",a:['in:#p2']},
 {en:"The SAT also likes to remove one of the two marks. A missing closing comma makes the reader think 'a retired pilot grows tomatoes.'",ko:"SAT는 두 부호 중 하나를 빼는 것도 좋아해요. 닫는 쉼표가 없으면 'a retired pilot grows tomatoes'처럼 읽혀요.",zh:"SAT也喜欢去掉其中一个符号。少了结尾的逗号，读者会读成 a retired pilot grows tomatoes。",a:['in:#p3']},
 {en:"And a missing opening comma is just as wrong. Find where the extra part starts and where it ends.",ko:"여는 쉼표가 빠진 것도 똑같이 틀려요. 추가 정보가 어디서 시작해서 어디서 끝나는지 찾으세요.",zh:"少了开头的逗号也一样错。找出补充部分从哪里开始、到哪里结束。",a:['in:#p4']},
 {en:"Exam tip: when the blank comes after the extra information, look back. The mark before it tells you which mark to choose.",ko:"시험 팁이에요. 빈칸이 추가 정보 뒤에 있으면 앞을 보세요. 앞에 있는 부호가 고를 부호를 알려 줘요.",zh:"考试技巧：如果空格在补充信息后面，就往前看。前面的符号告诉你该选哪个符号。"},
 {q:{en:{q:'“The violinist (who began playing at age four ___ performed for two hours.” Which is correct?',o:['four,','four)','four —'],e:'The extra information opened with a parenthesis, so it must close with a parenthesis.'},
     ko:{q:'“The violinist (who began playing at age four ___ performed for two hours.” 올바른 것은?',o:['four,','four)','four —'],e:'추가 정보를 괄호로 열었으니 괄호로 닫아야 해요.'},
     zh:{q:'“The violinist (who began playing at age four ___ performed for two hours.” 哪个正确？',o:['four,','four)','four —'],e:'补充信息用括号开启，就必须用括号结束。'},a:1}}]},
{id:'essential',ch:{en:'Essential vs. extra',ko:'필수 vs 추가',zh:'必要与补充'},html:`
 <div class="kick">Step 3</div><h2 class="h2"><span data-l="ess"></span> vs. <span data-l="extra"></span></h2>
 <div class="pass card h" id="e1" style="font-size:2.3cqw">Students <span class="hl">who finished early</span> could leave. <span class="lbl s" data-l="ess"></span></div>
 <div class="pass card h" id="e2" style="font-size:2.3cqw">Students could leave. <span class="small">→ all students? meaning changed ✗</span></div>
 <div class="grid2"><div class="pass card h" id="e3">My sister<b style="color:var(--ok)">,</b> Ana<b style="color:var(--ok)">,</b> is a pilot.<br><span class="lbl g" data-l="one"></span></div><div class="pass card h" id="e4">My sister Ana is a pilot.<br><span class="lbl s" data-l="many"></span></div></div>`,
 b:[
 {en:"But not every piece of information is extra. Look at this: 'Students who finished early could leave.'",ko:"그런데 모든 정보가 추가 정보는 아니에요. 이걸 보세요. 'Students who finished early could leave.'",zh:"但并不是所有信息都是补充的。看这句：Students who finished early could leave.",a:['in:#e1']},
 {en:"Remove 'who finished early,' and you get 'Students could leave.' Now it sounds like all students could leave. The meaning changed.",ko:"'who finished early'를 빼면 'Students could leave.'가 돼요. 이제 모든 학생이 나갈 수 있었던 것처럼 들려요. 뜻이 바뀌었어요.",zh:"去掉 who finished early，就变成 Students could leave. 听起来像是所有学生都可以离开。意思变了。",a:['in:#e2']},
 {en:"So this information is essential. It tells us which students. Essential information gets no commas.",ko:"그러니까 이건 필수 정보예요. 어떤 학생인지 알려 주니까요. 필수 정보에는 쉼표를 찍지 않아요.",zh:"所以这是必要信息，它告诉我们是哪些学生。必要信息不加逗号。"},
 {en:"Here is a classic pair. 'My sister, Ana, is a pilot' with commas means I have only one sister, so her name is extra.",ko:"대표적인 짝이에요. 쉼표가 있는 'My sister, Ana, is a pilot'은 언니가 한 명뿐이라서 이름이 추가 정보라는 뜻이에요.",zh:"一组经典例子：有逗号的 My sister, Ana, is a pilot 表示我只有一个姐姐，所以名字是补充信息。",a:['in:#e3']},
 {en:"'My sister Ana is a pilot' with no commas means I have more than one sister, and the name tells you which one.",ko:"쉼표 없는 'My sister Ana is a pilot'은 언니가 여러 명이고, 이름으로 어느 언니인지 알려 준다는 뜻이에요.",zh:"没有逗号的 My sister Ana is a pilot 表示我不止一个姐姐，名字告诉你是哪一个。",a:['in:#e4']}]},
{id:'titles',tight:1,ch:{en:'Titles before names',ko:'이름 앞 직함',zh:'名字前的头衔'},html:`
 <div class="kick">Trap</div><h2 class="h2" data-l="title2"></h2>
 <div class="pass card h" id="t1" style="font-size:2.1cqw">Chemist Marie Curie won two Nobel Prizes. <span class="stamp ok">✓</span></div>
 <div class="pass card h" id="t2" style="font-size:2.1cqw">Chemist<b style="color:var(--bad)">,</b> Marie Curie<b style="color:var(--bad)">,</b> won two Nobel Prizes. <span class="stamp no">✗</span></div>
 <div class="pass card h" id="t3" style="font-size:2.1cqw">The Polish-born chemist Marie Curie won two Nobel Prizes. <span class="stamp ok">✓</span></div>
 <div class="pass card h" id="t4" style="font-size:2.1cqw">Marie Curie<b style="color:var(--ok)">,</b> a Polish-born chemist<b style="color:var(--ok)">,</b> won two Nobel Prizes. <span class="stamp ok">✓</span></div>`,
 b:[
 {en:"Now a trap the SAT uses all the time: a title or a description right before a name.",ko:"SAT가 정말 자주 쓰는 함정이에요. 이름 바로 앞에 오는 직함이나 설명이에요.",zh:"这是SAT经常用的陷阱：名字前面紧跟着头衔或描述。"},
 {en:"'Chemist Marie Curie won two Nobel Prizes.' 'Chemist' works like a title, so there is no comma between it and the name.",ko:"'Chemist Marie Curie won two Nobel Prizes.'에서 'Chemist'는 직함처럼 쓰여서 이름과의 사이에 쉼표가 없어요.",zh:"Chemist Marie Curie won two Nobel Prizes. 这里 Chemist 像头衔一样用，所以和名字之间没有逗号。",a:['in:#t1']},
 {en:"Putting commas around the name is wrong. Try the removal test: 'Chemist won two Nobel Prizes.' That does not work.",ko:"이름 앞뒤에 쉼표를 넣으면 틀려요. 빼 보기를 해 보세요. 'Chemist won two Nobel Prizes.' 말이 안 되죠.",zh:"在名字两边加逗号是错的。做删除测试：Chemist won two Nobel Prizes. 这句不成立。",a:['in:#t2']},
 {en:"Same with a longer description: 'The Polish-born chemist Marie Curie.' No commas.",ko:"설명이 길어도 같아요. 'The Polish-born chemist Marie Curie.' 쉼표가 없어요.",zh:"描述更长也一样：The Polish-born chemist Marie Curie. 没有逗号。",a:['in:#t3']},
 {en:"But when the description comes after the name, it becomes extra information: 'Marie Curie, a Polish-born chemist, won two Nobel Prizes.'",ko:"하지만 설명이 이름 뒤에 오면 추가 정보가 돼요. 'Marie Curie, a Polish-born chemist, won two Nobel Prizes.'",zh:"但描述放在名字后面时，就变成补充信息：Marie Curie, a Polish-born chemist, won two Nobel Prizes.",a:['in:#t4']},
 {q:{en:{q:'Which sentence is punctuated correctly?',o:['Architect, Zaha Hadid, designed the opera house.','Architect Zaha Hadid designed the opera house.','Architect Zaha Hadid, designed the opera house.'],e:'“Architect” is a title before the name, so no commas. C wrongly separates the subject from its verb.'},
     ko:{q:'구두점이 올바른 문장은?',o:['Architect, Zaha Hadid, designed the opera house.','Architect Zaha Hadid designed the opera house.','Architect Zaha Hadid, designed the opera house.'],e:'Architect는 이름 앞의 직함이라 쉼표가 없어요. C는 주어와 동사 사이를 쉼표로 잘못 끊었어요.'},
     zh:{q:'哪个句子的标点是正确的？',o:['Architect, Zaha Hadid, designed the opera house.','Architect Zaha Hadid designed the opera house.','Architect Zaha Hadid, designed the opera house.'],e:'Architect 是名字前的头衔，不加逗号。C 错误地在主语和动词之间加了逗号。'},a:1}}]},
{id:'which',ch:{en:'which vs. that',ko:'which와 that',zh:'which 与 that'},html:`
 <div class="kick">Step 4</div><h2 class="h2">which / who / that</h2>
 <div class="pass card h" id="w1" style="font-size:2.3cqw">The museum<b style="color:var(--ok)">,</b> <span class="hl">which opened in 1990</span><b style="color:var(--ok)">,</b> attracts tourists. <span class="lbl g" data-l="which"></span></div>
 <div class="pass card h" id="w2" style="font-size:2.3cqw">The museum <span class="hl">that opened in 1990</span> attracts tourists. <span class="lbl s" data-l="that"></span></div>
 <div class="pass card h" id="w3" style="font-size:2.3cqw">The museum<b style="color:var(--bad)">,</b> that opened in 1990<b style="color:var(--bad)">,</b> attracts tourists. <span class="stamp no">✗</span></div>`,
 b:[
 {en:"Relative clauses follow the same idea. 'Which' usually introduces extra information, so it takes commas.",ko:"관계절도 같은 원리예요. which는 보통 추가 정보를 이끌어서 쉼표와 함께 써요.",zh:"关系从句也是同样的道理。which 通常引出补充信息，所以要加逗号。",a:['in:#w1']},
 {en:"'That' introduces essential information, so it never takes commas.",ko:"that은 필수 정보를 이끌어서 쉼표를 절대 쓰지 않아요.",zh:"that 引出必要信息，所以永远不加逗号。",a:['in:#w2']},
 {en:"So if you see a comma before 'that,' it is almost always wrong on the SAT.",ko:"그래서 SAT에서 that 앞에 쉼표가 있으면 거의 항상 틀린 거예요.",zh:"所以在SAT中，如果看到 that 前面有逗号，几乎一定是错的。",a:['in:#w3']},
 {en:"'Who' can go either way. Use the removal test to decide whether the who clause is essential or extra.",ko:"who는 둘 다 될 수 있어요. 빼 보기 테스트로 who절이 필수인지 추가인지 판단하세요.",zh:"who 两种情况都可能。用删除测试判断 who 从句是必要的还是补充的。"}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.3cqw">The Atacama Desert<span id="xa">,</span> one of the driest places on Earth <b>______</b> receives less than one millimeter of rain in some years.</div>
 <div class="choices"><div id="x1">A) Earth</div><div id="x2">B) Earth;</div><div id="x3">C) Earth,</div><div id="x4">D) Earth —</div></div>
 <div class="card h" id="xr" style="font-size:2.1cqw">The Atacama Desert receives less than one millimeter of rain in some years. ✓ → extra → close with <b>,</b></div>`,
 b:[
 {en:"Let's solve one. 'The Atacama Desert, one of the driest places on Earth, blank, receives less than one millimeter of rain in some years.'",ko:"한 문제 풀어 봐요. 'The Atacama Desert, one of the driest places on Earth' 다음 빈칸, 그리고 'receives less than one millimeter of rain in some years.'",zh:"做一道题：The Atacama Desert, one of the driest places on Earth，空格，receives less than one millimeter of rain in some years.",a:['add:#xa:hl']},
 {en:"Look back. There is a comma after 'Desert.' That comma opened extra information.",ko:"앞을 보세요. 'Desert' 뒤에 쉼표가 있어요. 그 쉼표가 추가 정보를 열었어요.",zh:"往前看，Desert 后面有一个逗号。这个逗号开启了补充信息。"},
 {en:"Removal test: 'The Atacama Desert receives less than one millimeter of rain.' Still complete. So we close with a comma.",ko:"빼 보기 테스트를 하면 'The Atacama Desert receives less than one millimeter of rain.' 여전히 완전해요. 그러니까 쉼표로 닫아요.",zh:"删除测试：The Atacama Desert receives less than one millimeter of rain. 仍然完整。所以用逗号结束。",a:['in:#xr']},
 {en:"A leaves it open. B puts a semicolon between a subject and its verb. D mixes a comma with a dash. The answer is C.",ko:"A는 닫지 않았어요. B는 주어와 동사 사이에 세미콜론을 넣었어요. D는 쉼표와 대시를 섞었어요. 정답은 C예요.",zh:"A 没有结束。B 在主语和动词之间放了分号。D 把逗号和破折号混用了。答案是 C。",a:['add:#x1:x','add:#x2:x','add:#x4:x','add:#x3:o']},
 {q:{en:{q:'Which sentence is punctuated correctly?',o:['The novel, that won the award, was her first.','The novel that won the award was her first.','The novel that won the award, was her first.'],e:'“that” introduces essential information, so no commas at all. C splits the subject from its verb.'},
     ko:{q:'구두점이 올바른 문장은?',o:['The novel, that won the award, was her first.','The novel that won the award was her first.','The novel that won the award, was her first.'],e:'that은 필수 정보를 이끌어서 쉼표가 전혀 없어요. C는 주어와 동사 사이를 끊었어요.'},
     zh:{q:'哪个句子的标点是正确的？',o:['The novel, that won the award, was her first.','The novel that won the award was her first.','The novel that won the award, was her first.'],e:'that 引出必要信息，所以完全不加逗号。C 把主语和动词隔开了。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 3</h2>
 <ul class="sum card"><li class="h" id="s1">Removal test → still complete, same meaning → extra</li>
 <li class="h" id="s2">Extra → <b>, … ,</b> / <b>— … —</b> / <b>( … )</b> — same mark both ends</li>
 <li class="h" id="s3">Essential (who? which one?) → no commas; <b>that</b> → never a comma</li>
 <li class="h" id="s4">Title + name (<i>chemist Marie Curie</i>) → no commas</li></ul>`,
 b:[
 {en:"Let's review. Use the removal test. If the sentence is still complete and means the same thing, the information is extra.",ko:"정리할게요. 빼 보기 테스트를 쓰세요. 빼도 완전하고 뜻이 같으면 추가 정보예요.",zh:"我们来总结。用删除测试。如果去掉后句子仍然完整、意思不变，就是补充信息。",a:['in:#s1']},
 {en:"Extra information is marked at both ends with the same mark.",ko:"추가 정보는 양 끝을 같은 부호로 표시해요.",zh:"补充信息两端用同样的符号标出。",a:['in:#s2']},
 {en:"Essential information gets no commas, and 'that' never takes a comma.",ko:"필수 정보에는 쉼표가 없고, that 앞에는 절대 쉼표를 찍지 않아요.",zh:"必要信息不加逗号，that 前面永远不加逗号。",a:['in:#s3']},
 {en:"And no commas between a title and a name. Next time, we will learn where punctuation must never go. See you in Lesson 4!",ko:"그리고 직함과 이름 사이에는 쉼표가 없어요. 다음 시간에는 구두점을 절대 넣으면 안 되는 자리를 배워요. 4강에서 만나요!",zh:"头衔和名字之间也不加逗号。下节课我们学习绝对不能加标点的位置。第4课见！",a:['in:#s4']}]}];
