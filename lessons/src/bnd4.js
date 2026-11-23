META={id:'bnd4',k:'BND',n:4,
 title:{en:'Lesson 4 · Where Punctuation Never Goes & Lists',ko:'4강 · 구두점을 넣으면 안 되는 자리와 목록',zh:'第4课 · 不能加标点的位置与列表'},
 desc:{en:'No marks between subject and verb, verb and object, before “that”; commas in lists; two adjectives',ko:'주어와 동사, 동사와 목적어 사이, that 앞에는 부호 없음; 목록의 쉼표; 형용사 두 개',zh:'主语与动词、动词与宾语之间、that 前不加标点；列表中的逗号；两个形容词'},
 endh:{en:'Lesson 4 complete',ko:'4강 완료',zh:'第4课完成'},
 endp:{en:'You now have every boundary rule. Practice until you can spot a no-punctuation zone instantly.',ko:'문장 경계 규칙을 모두 배웠어요. 금지 구역이 바로 보일 때까지 연습해요.',zh:'句子边界的规则你已经全部学完了。练习到一眼就能看出禁止加标点的位置。'}};
L={en:{zone:'No-punctuation zones',sv:'subject | verb',vo:'verb | object',th:'verb | that',pr:'preposition | object',lst:'A, B, and C',adj:'Two adjectives: can you put “and” between them?',yesand:'“and” works → comma',noand:'“and” sounds wrong → no comma',less:'No rule calls for a mark → leave it out'},
 ko:{zone:'구두점 금지 구역',sv:'주어 | 동사',vo:'동사 | 목적어',th:'동사 | that',pr:'전치사 | 목적어',lst:'A, B, and C',adj:'형용사 두 개: 사이에 and를 넣을 수 있나?',yesand:'and가 자연스러움 → 쉼표',noand:'and가 어색함 → 쉼표 없음',less:'부호를 요구하는 규칙이 없으면 → 넣지 않기'},
 zh:{zone:'禁止加标点的位置',sv:'主语 | 动词',vo:'动词 | 宾语',th:'动词 | that',pr:'介词 | 宾语',lst:'A, B, and C',adj:'两个形容词：中间能加 and 吗？',yesand:'加 and 通顺 → 用逗号',noand:'加 and 别扭 → 不用逗号',less:'没有规则要求加标点 → 就不加'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 1 · Boundaries</div><h2 class="h2" data-l="title"></h2>
 <div class="card h" id="i1" style="font-size:2.4cqw">🚫 <b data-l="zone"></b></div>
 <div class="card h" id="i2" style="font-size:2.4cqw">📋 <b data-l="lst"></b></div>`,
 b:[
 {en:"Welcome to Lesson 4, the last lesson on boundaries. So far, we have learned where punctuation is needed.",ko:"4강에 오신 걸 환영해요. 문장 경계의 마지막 강의예요. 지금까지는 구두점이 필요한 자리를 배웠어요.",zh:"欢迎来到第4课，这是句子边界的最后一课。到目前为止，我们学的是哪里需要标点。"},
 {en:"Today, we learn the opposite: places where punctuation must never go. The SAT puts a wrong comma in these places very often.",ko:"오늘은 반대로, 구두점을 절대 넣으면 안 되는 자리를 배워요. SAT는 이 자리에 틀린 쉼표를 아주 자주 넣어요.",zh:"今天反过来，学习绝对不能加标点的位置。SAT非常喜欢在这些地方放错误的逗号。",a:['in:#i1']},
 {en:"Then we will finish with commas in lists.",ko:"그다음에 목록 속 쉼표로 마무리할게요.",zh:"最后我们讲列表中的逗号。",a:['in:#i2']}]},
{id:'sv',ch:{en:'Subject | verb',ko:'주어 | 동사',zh:'主语 | 动词'},html:`
 <div class="kick">Zone 1</div><h2 class="h2" data-l="sv"></h2>
 <div class="big card" style="font-size:2.5cqw"><span class="tok" id="a1">The results of the three-year study of coastal wetlands</span><span class="tok" id="a2">,</span> <span class="tok" id="a3">surprised</span> the researchers.</div>
 <div class="big card h" id="a4" style="font-size:2.5cqw">The results of the three-year study of coastal wetlands surprised the researchers. <span class="stamp ok">✓</span></div>`,
 b:[
 {en:"Zone one: between the subject and its verb. A single comma, colon, semicolon, or dash cannot go there.",ko:"금지 구역 1. 주어와 동사 사이예요. 쉼표, 콜론, 세미콜론, 대시 하나도 들어갈 수 없어요.",zh:"禁区一：主语和动词之间。单个逗号、冒号、分号或破折号都不能放在这里。"},
 {en:"The SAT hides this by making the subject long: 'The results of the three-year study of coastal wetlands.'",ko:"SAT는 주어를 길게 만들어서 이걸 숨겨요. 'The results of the three-year study of coastal wetlands.'",zh:"SAT会把主语写得很长来隐藏这一点：The results of the three-year study of coastal wetlands.",a:['add:#a1:subj']},
 {en:"Find the verb: 'surprised.' A long subject still needs no comma before its verb. That comma is wrong.",ko:"동사를 찾으세요. 'surprised'예요. 주어가 길어도 동사 앞에 쉼표는 필요 없어요. 이 쉼표는 틀렸어요.",zh:"找到动词：surprised。主语再长，动词前也不需要逗号。这个逗号是错的。",a:['add:#a3:verb','add:#a2:bad']},
 {en:"Remove it, and the sentence is correct. The only exception is a pair of marks around extra information, which we learned in Lesson 3.",ko:"쉼표를 빼면 맞는 문장이에요. 예외는 3강에서 배운, 추가 정보를 감싸는 한 쌍의 부호뿐이에요.",zh:"去掉它，句子就对了。唯一的例外是第3课学的、包住补充信息的一对标点。",a:['in:#a4']}]},
{id:'vo',ch:{en:'Verb | object',ko:'동사 | 목적어',zh:'动词 | 宾语'},html:`
 <div class="kick">Zones 2 – 4</div><h2 class="h2" data-l="zone"></h2>
 <div class="pass card h" id="b1" style="font-size:2.3cqw"><span class="lbl v" data-l="vo"></span> The team analyzed<b style="color:var(--bad)">,</b> soil samples from twelve farms. ✗</div>
 <div class="pass card h" id="b2" style="font-size:2.3cqw"><span class="lbl v" data-l="th"></span> The survey found<b style="color:var(--bad)">,</b> that most users prefer audio. ✗</div>
 <div class="pass card h" id="b3" style="font-size:2.3cqw"><span class="lbl v" data-l="pr"></span> The store sells a range of<b style="color:var(--bad)">:</b> hats, gloves, and scarves. ✗</div>`,
 b:[
 {en:"Zone two: between a verb and its object. 'The team analyzed soil samples.' No comma after 'analyzed.'",ko:"금지 구역 2. 동사와 목적어 사이예요. 'The team analyzed soil samples.' analyzed 뒤에 쉼표가 없어요.",zh:"禁区二：动词和宾语之间。The team analyzed soil samples. analyzed 后面不加逗号。",a:['in:#b1']},
 {en:"Zone three: between a verb and a that clause. 'The survey found that most users prefer audio.' No comma before 'that.'",ko:"금지 구역 3. 동사와 that절 사이예요. 'The survey found that most users prefer audio.' that 앞에 쉼표가 없어요.",zh:"禁区三：动词和 that 从句之间。The survey found that most users prefer audio. that 前面不加逗号。",a:['in:#b2']},
 {en:"Zone four: between a preposition and its object. 'A range of hats, gloves, and scarves.' No colon after 'of.'",ko:"금지 구역 4. 전치사와 목적어 사이예요. 'A range of hats, gloves, and scarves.' of 뒤에 콜론이 없어요.",zh:"禁区四：介词和宾语之间。A range of hats, gloves, and scarves. of 后面不加冒号。",a:['in:#b3']},
 {en:"All four zones share one idea: these words belong together, so nothing should separate them.",ko:"네 구역의 공통점은 하나예요. 이 말들은 한 덩어리라서 아무것도 갈라놓으면 안 돼요.",zh:"四个禁区有一个共同点：这些词是一个整体，什么都不能把它们隔开。"},
 {q:{en:{q:'Which sentence is punctuated correctly?',o:['The scientists who studied the reef, reported a decline in coral.','The scientists who studied the reef reported a decline in coral.','The scientists who studied the reef reported, a decline in coral.'],e:'“The scientists who studied the reef” is the subject and “reported” is the verb. No mark between them, and none between “reported” and its object.'},
     ko:{q:'구두점이 올바른 문장은?',o:['The scientists who studied the reef, reported a decline in coral.','The scientists who studied the reef reported a decline in coral.','The scientists who studied the reef reported, a decline in coral.'],e:'"The scientists who studied the reef"가 주어, "reported"가 동사예요. 둘 사이에도, 동사와 목적어 사이에도 부호가 없어요.'},
     zh:{q:'哪个句子的标点是正确的？',o:['The scientists who studied the reef, reported a decline in coral.','The scientists who studied the reef reported a decline in coral.','The scientists who studied the reef reported, a decline in coral.'],e:'“The scientists who studied the reef” 是主语，“reported” 是动词。两者之间、动词和宾语之间都不加标点。'},a:1}}]},
{id:'less',ch:{en:'Leave it out',ko:'안 넣기',zh:'不加'},html:`
 <div class="kick">Strategy</div><h2 class="h2" data-l="less"></h2>
 <div class="card h" id="c1"><div class="pass" style="font-size:2.3cqw">… a new method for <b>______</b> water from fog.</div><div class="choices" style="margin-top:1cqw"><div>A) collecting,</div><div>B) collecting:</div><div>C) collecting —</div><div class="o">D) collecting</div></div></div>`,
 b:[
 {en:"Here is a useful strategy. Every punctuation mark needs a reason: a rule from Lessons 1 to 3.",ko:"유용한 전략 하나. 모든 구두점에는 이유가 있어야 해요. 1강부터 3강까지 배운 규칙 중 하나요.",zh:"一个实用策略：每个标点都需要理由，也就是第1到第3课学过的某条规则。"},
 {en:"If you cannot name a rule that calls for a mark, the choice with no punctuation is often correct.",ko:"부호를 넣어야 하는 규칙을 댈 수 없다면, 부호가 없는 선택지가 정답인 경우가 많아요.",zh:"如果你说不出哪条规则要求加标点，那么不加标点的选项往往是对的。",a:['in:#c1']},
 {en:"In this example, 'collecting water' is a verb and its object. No rule calls for a mark, so D is correct.",ko:"이 예에서 'collecting water'는 동사와 목적어예요. 부호를 요구하는 규칙이 없으니 D가 맞아요.",zh:"这个例子里，collecting water 是动词和宾语。没有规则要求加标点，所以 D 是对的。"},
 {en:"But be careful. This is a tool for checking, not a rule. Always check with the vertical line test and the removal test first.",ko:"하지만 조심하세요. 이건 확인용 도구지 규칙이 아니에요. 항상 세로줄 테스트와 빼 보기 테스트로 먼저 확인하세요.",zh:"但要小心，这是检查工具，不是规则。一定先用竖线测试和删除测试检查。"}]},
{id:'lists',tight:1,ch:{en:'Commas in lists',ko:'목록의 쉼표',zh:'列表中的逗号'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="lst"></h2>
 <div class="pass card h" id="l1" style="font-size:2.3cqw">The kit includes a map<b style="color:var(--ok)">,</b> a compass<b style="color:var(--ok)">,</b> and a flashlight. ✓</div>
 <div class="pass card h" id="l2" style="font-size:2.3cqw">The kit includes<b style="color:var(--bad)">,</b> a map, a compass, and a flashlight. ✗</div>
 <div class="pass card h" id="l3" style="font-size:2.3cqw">The kit includes a map, a compass, and a flashlight<b style="color:var(--bad)">,</b> for emergencies. ✗</div>
 <div class="pass card h" id="l4" style="font-size:2.3cqw">The kit includes a map and a compass. <span class="small">(two items → no comma)</span> ✓</div>`,
 b:[
 {en:"Now lists. For three or more items, put a comma after each item before 'and': 'a map, a compass, and a flashlight.'",ko:"이제 목록이에요. 항목이 세 개 이상이면 and 앞의 각 항목 뒤에 쉼표를 찍어요. 'a map, a compass, and a flashlight.'",zh:"现在看列表。三个或以上的项目，在 and 之前的每一项后面加逗号：a map, a compass, and a flashlight.",a:['in:#l1']},
 {en:"No comma before the first item. 'Includes' and its list belong together.",ko:"첫 항목 앞에는 쉼표가 없어요. includes와 목록은 한 덩어리니까요.",zh:"第一项前面不加逗号。includes 和列表是一个整体。",a:['in:#l2']},
 {en:"And no comma after the last item if the sentence keeps going.",ko:"그리고 문장이 이어지면 마지막 항목 뒤에도 쉼표가 없어요.",zh:"如果句子继续，最后一项后面也不加逗号。",a:['in:#l3']},
 {en:"With only two items joined by 'and,' there is no comma at all.",ko:"항목이 and로 이어진 두 개뿐이면 쉼표가 아예 없어요.",zh:"如果只有两项用 and 连接，就完全不加逗号。",a:['in:#l4']}]},
{id:'adj',ch:{en:'Two adjectives',ko:'형용사 두 개',zh:'两个形容词'},html:`
 <div class="kick">Step 3</div><h2 class="h2" data-l="adj"></h2>
 <div class="pass card h" id="d1" style="font-size:2.4cqw">a long<b style="color:var(--ok)">,</b> difficult hike → a long <i>and</i> difficult hike <span class="lbl g" data-l="yesand"></span></div>
 <div class="pass card h" id="d2" style="font-size:2.4cqw">a bright red coat → a bright <i>and</i> red coat?? <span class="lbl r" data-l="noand"></span></div>`,
 b:[
 {en:"One more small rule. When two adjectives come before a noun, ask: can I put 'and' between them?",ko:"작은 규칙 하나 더요. 명사 앞에 형용사가 두 개 오면, 둘 사이에 and를 넣을 수 있는지 물어보세요.",zh:"再讲一条小规则。名词前有两个形容词时，问自己：中间能加 and 吗？"},
 {en:"'A long and difficult hike' sounds natural, so write 'a long, difficult hike' with a comma.",ko:"'a long and difficult hike'는 자연스러우니까 쉼표를 넣어 'a long, difficult hike'라고 써요.",zh:"a long and difficult hike 很自然，所以写成带逗号的 a long, difficult hike。",a:['in:#d1']},
 {en:"'A bright and red coat' sounds strange, because 'bright' describes 'red.' So no comma: 'a bright red coat.'",ko:"'a bright and red coat'는 이상해요. bright가 red를 꾸미니까요. 그래서 쉼표 없이 'a bright red coat'예요.",zh:"a bright and red coat 很奇怪，因为 bright 修饰的是 red。所以不加逗号：a bright red coat。",a:['in:#d2']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.3cqw">A 2019 study by economists at three universities <b>______</b> that small businesses benefit most from local tax credits.</div>
 <div class="choices"><div id="x1">A) concluded,</div><div id="x2">B) concluded:</div><div id="x3">C) concluded</div><div id="x4">D) concluded —</div></div>
 <div class="card h" id="xr" style="font-size:2.1cqw"><span data-l="th"></span> → 🚫</div>`,
 b:[
 {en:"Let's solve one. The blank comes right after 'concluded,' and the next word is 'that.'",ko:"한 문제 풀어 봐요. 빈칸이 concluded 바로 뒤에 있고, 다음 단어는 that이에요.",zh:"做一道题。空格紧跟在 concluded 后面，下一个词是 that。"},
 {en:"Verb, then that clause. That is a no-punctuation zone.",ko:"동사 다음에 that절이에요. 구두점 금지 구역이에요.",zh:"动词后面接 that 从句。这是禁止加标点的位置。",a:['in:#xr']},
 {en:"No rule calls for a comma, a colon, or a dash here. The answer is C.",ko:"쉼표, 콜론, 대시를 요구하는 규칙이 없어요. 정답은 C예요.",zh:"这里没有规则要求加逗号、冒号或破折号。答案是 C。",a:['add:#x1:x','add:#x2:x','add:#x4:x','add:#x3:o']},
 {q:{en:{q:'Which sentence is punctuated correctly?',o:['The festival features music, food, and art from, over forty countries.','The festival features music, food, and art from over forty countries.','The festival features, music, food, and art from over forty countries.'],e:'Commas go between the list items only. No comma between “features” and its list, or between “from” and its object.'},
     ko:{q:'구두점이 올바른 문장은?',o:['The festival features music, food, and art from, over forty countries.','The festival features music, food, and art from over forty countries.','The festival features, music, food, and art from over forty countries.'],e:'쉼표는 목록 항목 사이에만 와요. features와 목록 사이, from과 목적어 사이에는 쉼표가 없어요.'},
     zh:{q:'哪个句子的标点是正确的？',o:['The festival features music, food, and art from, over forty countries.','The festival features music, food, and art from over forty countries.','The festival features, music, food, and art from over forty countries.'],e:'逗号只放在列表项目之间。features 和列表之间、from 和宾语之间都不加逗号。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 4</h2>
 <ul class="sum card"><li class="h" id="s1">🚫 subject | verb · verb | object · verb | that · preposition | object</li>
 <li class="h" id="s2">No rule → no mark</li>
 <li class="h" id="s3">A, B, and C · no comma before the first or after the last item</li>
 <li class="h" id="s4">Two adjectives: “and” works → comma</li></ul>`,
 b:[
 {en:"Let's review. Never put a single mark between a subject and its verb, a verb and its object, a verb and 'that,' or a preposition and its object.",ko:"정리할게요. 주어와 동사, 동사와 목적어, 동사와 that, 전치사와 목적어 사이에는 부호를 하나도 넣지 않아요.",zh:"我们来总结。主语和动词、动词和宾语、动词和 that、介词和宾语之间，都不能放单个标点。",a:['in:#s1']},
 {en:"If no rule calls for a mark, leave it out.",ko:"부호를 요구하는 규칙이 없으면 넣지 않아요.",zh:"如果没有规则要求加标点，就不加。",a:['in:#s2']},
 {en:"In a list of three or more, use commas between the items, but not before the first or after the last.",ko:"세 개 이상의 목록에서는 항목 사이에 쉼표를 찍지만, 첫 항목 앞이나 마지막 항목 뒤에는 찍지 않아요.",zh:"三项或以上的列表，项目之间加逗号，但第一项前和最后一项后不加。",a:['in:#s3']},
 {en:"And for two adjectives, use the 'and' test. That completes boundaries. Next, we start Form, Structure, and Sense with subject verb agreement. See you in Lesson 5!",ko:"형용사 두 개는 and 테스트를 쓰세요. 이것으로 문장 경계를 모두 배웠어요. 다음에는 주어와 동사의 수 일치로 Form, Structure, and Sense를 시작해요. 5강에서 만나요!",zh:"两个形容词就用 and 测试。句子边界到此全部讲完。接下来我们从主谓一致开始讲 Form, Structure, and Sense。第5课见！",a:['in:#s4']}]}];
