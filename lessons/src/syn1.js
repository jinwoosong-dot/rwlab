META={id:'syn1',k:'SYN',n:12,
 title:{en:'Lesson 12 · Rhetorical Synthesis (Notes Questions)',ko:'12강 · 노트 종합 문제',zh:'第12课 · 信息整合（笔记题）'},
 desc:{en:'Read the goal first, decode the goal words, check every choice against the goal only',ko:'목표부터 읽기, 목표 표현 해석하기, 선택지는 목표에만 맞춰 판단',zh:'先读目标、解读目标用语、只用目标来检验选项'},
 endh:{en:'Lesson 12 complete',ko:'12강 완료',zh:'第12课完成'},
 endp:{en:'Practice solving notes questions in under 45 seconds by reading the goal first.',ko:'목표부터 읽어서 노트 문제를 45초 안에 푸는 연습을 해요.',zh:'练习先读目标，在45秒内做完笔记题。'}};
L={en:{goal:'Read the goal first — skip the notes',why:'Every choice matches the notes. Only one matches the goal.',decode:'Goal words → what the answer must contain',check:'Does this choice do the goal?'},
 ko:{goal:'목표부터 읽기 — 노트는 건너뛰기',why:'모든 선택지가 노트와 맞아요. 목표와 맞는 건 하나뿐.',decode:'목표 표현 → 정답에 꼭 있어야 할 것',check:'이 선택지가 목표를 달성하나?'},
 zh:{goal:'先读目标——跳过笔记',why:'每个选项都符合笔记，只有一个符合目标。',decode:'目标用语 → 答案必须包含什么',check:'这个选项完成目标了吗？'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 4 · Expression of Ideas</div><h2 class="h2" data-l="title"></h2>
 <div class="card h" id="i1" style="font-size:1.9cqw;line-height:1.5">While researching a topic, a student has taken the following notes:<br>• … • … • … • …<br><b>The student wants to ______. Which choice most effectively uses relevant information from the notes to accomplish this goal?</b></div>`,
 b:[
 {en:"Welcome to Lesson 12. The last questions in each module look like this: a list of notes and a goal.",ko:"12강에 오신 걸 환영해요. 각 모듈의 마지막 문제들은 이렇게 생겼어요. 노트 목록과 목표가 있어요.",zh:"欢迎来到第12课。每个模块最后的几道题长这样：一组笔记和一个目标。",a:['in:#i1']},
 {en:"These questions look long, but they are some of the fastest on the test once you know the trick.",ko:"길어 보이지만, 요령만 알면 시험에서 가장 빨리 풀 수 있는 문제 중 하나예요.",zh:"这些题看起来很长，但掌握诀窍后，它们是全卷做得最快的题之一。"},
 {en:"Here is the trick in one sentence: the answer is decided by the goal, not by the notes.",ko:"요령을 한 문장으로 말하면, 정답은 노트가 아니라 목표가 결정해요.",zh:"诀窍用一句话说：答案由目标决定，而不是由笔记决定。"}]},
{id:'goal',ch:{en:'Goal first',ko:'목표 먼저',zh:'先读目标'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="goal"></h2>
 <div class="card h" id="g1" style="font-size:2.3cqw">💡 <b data-l="why"></b></div>
 <div class="pass card h" id="g2" style="font-size:2.1cqw">The student wants to <span class="hl">emphasize a <b>difference</b> between the two bridges</span>.</div>`,
 b:[
 {en:"Normally you read the passage first. Here, do the opposite. Read the goal in the question first.",ko:"보통은 지문을 먼저 읽죠. 여기서는 반대로 하세요. 질문 속 목표를 먼저 읽어요.",zh:"通常我们先读文章。这里反过来，先读问题里的目标。"},
 {en:"Why? The wrong choices are not false. Every choice uses true information from the notes. They are wrong because they do not achieve the goal.",ko:"왜냐고요? 오답이 틀린 정보는 아니거든요. 모든 선택지가 노트의 사실을 써요. 목표를 달성하지 못해서 오답인 거예요.",zh:"为什么？错误选项并不是内容错误。每个选项都用了笔记里的真实信息。它们错，是因为没有完成目标。",a:['in:#g1']},
 {en:"So the notes cannot tell you the answer. The goal can. Find the key words in it, such as 'emphasize a difference.'",ko:"그래서 노트로는 정답을 알 수 없어요. 목표로 알 수 있어요. 'emphasize a difference' 같은 핵심 표현을 찾으세요.",zh:"所以笔记告诉不了你答案，目标才能。找出其中的关键词，比如 emphasize a difference。",a:['in:#g2']}]},
{id:'decode',ch:{en:'Goal words',ko:'목표 표현',zh:'目标用语'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="decode"></h2>
 <table class="tbl" style="width:100%"><tr><th>goal says</th><th>answer must contain</th></tr>
 <tr class="h" id="d1"><td>emphasize a <b>similarity</b></td><td>both things + <i>both, also, like, similarly</i></td></tr>
 <tr class="h" id="d2"><td>emphasize a <b>difference</b></td><td>both things + <i>while, whereas, unlike, but</i></td></tr>
 <tr class="h" id="d3"><td>to an audience <b>unfamiliar</b> with X</td><td>what X is (a short description)</td></tr>
 <tr class="h" id="d4"><td>present the study’s <b>aim / method / findings</b></td><td>only that part of the study</td></tr>
 <tr class="h" id="d5"><td>make and support a <b>generalization</b></td><td>a broad claim + one example</td></tr></table>`,
 b:[
 {en:"Learn what each common goal requires. 'Emphasize a similarity' needs both things and a similarity word like 'both' or 'also.'",ko:"자주 나오는 목표마다 필요한 게 정해져 있어요. 'emphasize a similarity'는 두 대상과 both나 also 같은 공통점 표현이 필요해요.",zh:"记住常见目标各自需要什么。emphasize a similarity 需要两个对象和 both、also 这类表示相似的词。",a:['in:#d1']},
 {en:"'Emphasize a difference' needs both things and a contrast word like 'while,' 'whereas,' or 'unlike.'",ko:"'emphasize a difference'는 두 대상과 while, whereas, unlike 같은 대조 표현이 필요해요.",zh:"emphasize a difference 需要两个对象和 while、whereas、unlike 这类表示对比的词。",a:['in:#d2']},
 {en:"'An audience unfamiliar with' something means the answer must explain what that thing is.",ko:"'an audience unfamiliar with'이 있으면, 정답은 그게 무엇인지 설명해야 해요.",zh:"如果目标说 an audience unfamiliar with 某物，答案就必须解释那是什么。",a:['in:#d3']},
 {en:"If the goal is a study's aim, method, or findings, the answer gives only that part. And a generalization needs a broad claim plus an example.",ko:"목표가 연구의 목적, 방법, 결과라면 정답은 딱 그 부분만 말해요. 그리고 generalization은 넓은 주장과 예시가 필요해요.",zh:"如果目标是研究的目的、方法或结果，答案只讲那一部分。generalization 则需要一个概括性论断加一个例子。",a:['in:#d4','in:#d5']}]},
{id:'example',tight:1,ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="card small" style="line-height:1.45">• The Akashi Kaikyō Bridge in Japan opened in 1998. • Its main span is 1,991 meters. • The Golden Gate Bridge in the US opened in 1937. • Its main span is 1,280 meters. • Both are suspension bridges.<br><b>Goal: emphasize a difference in the lengths of the two bridges’ main spans.</b></div>
 <div class="choices" style="grid-template-columns:1fr;font-size:1.85cqw"><div id="x1">A) Both the Akashi Kaikyō Bridge and the Golden Gate Bridge are suspension bridges.</div><div id="x2">B) The Golden Gate Bridge opened in 1937, and its main span is 1,280 meters long.</div><div id="x3">C) The Akashi Kaikyō Bridge’s main span is 1,991 meters, while the Golden Gate Bridge’s is only 1,280 meters.</div><div id="x4">D) The Akashi Kaikyō Bridge, which opened in 1998, is in Japan.</div></div>`,
 b:[
 {en:"Let's solve one. Skip the notes and read the goal: emphasize a difference in the lengths of the two main spans.",ko:"한 문제 풀어 봐요. 노트는 건너뛰고 목표를 읽어요. 두 다리의 주경간 길이 차이를 강조하라.",zh:"做一道题。跳过笔记，读目标：强调两座桥主跨长度的差异。"},
 {en:"So the answer needs both bridges, both lengths, and a contrast word.",ko:"그러니까 정답에는 두 다리, 두 길이, 대조 표현이 있어야 해요.",zh:"所以答案需要两座桥、两个长度和一个对比词。"},
 {en:"A is a similarity. B and D mention only one bridge. C has both lengths and the contrast word 'while.' The answer is C.",ko:"A는 공통점이에요. B와 D는 다리 하나만 말해요. C는 두 길이와 대조 표현 while이 있어요. 정답은 C예요.",zh:"A 讲的是相似点。B 和 D 只提到一座桥。C 有两个长度和对比词 while。答案是 C。",a:['add:#x1:x','add:#x2:x','add:#x4:x','add:#x3:o']},
 {q:{en:{q:'Goal: “introduce the Akashi Kaikyō Bridge to an audience unfamiliar with it.” Which choice works best?',o:['The Akashi Kaikyō Bridge’s main span is longer than the Golden Gate Bridge’s.','The Akashi Kaikyō Bridge, a suspension bridge in Japan, opened in 1998.','The bridge opened in 1998.'],e:'An unfamiliar audience needs to know what it is and where: “a suspension bridge in Japan.” C does not even name the bridge.'},
     ko:{q:'목표: “Akashi Kaikyō Bridge를 모르는 독자에게 소개하라.” 가장 알맞은 것은?',o:['The Akashi Kaikyō Bridge’s main span is longer than the Golden Gate Bridge’s.','The Akashi Kaikyō Bridge, a suspension bridge in Japan, opened in 1998.','The bridge opened in 1998.'],e:'모르는 독자에게는 그게 무엇이고 어디 있는지 알려 줘야 해요. "a suspension bridge in Japan"이요. C는 다리 이름조차 없어요.'},
     zh:{q:'目标：“向不了解 Akashi Kaikyō Bridge 的读者介绍它。”哪个最合适？',o:['The Akashi Kaikyō Bridge’s main span is longer than the Golden Gate Bridge’s.','The Akashi Kaikyō Bridge, a suspension bridge in Japan, opened in 1998.','The bridge opened in 1998.'],e:'不了解的读者需要知道它是什么、在哪里：a suspension bridge in Japan。C 连桥名都没有。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 12</h2>
 <ul class="sum card"><li class="h" id="z1">Read the goal first — every choice is true to the notes</li>
 <li class="h" id="z2">similarity → both + also · difference → both + while/whereas</li>
 <li class="h" id="z3">unfamiliar audience → say what it is</li>
 <li class="h" id="z4">For each choice ask only: does it do the goal?</li></ul>`,
 b:[
 {en:"Let's review. Read the goal first. Every choice is true, so the notes cannot decide the answer.",ko:"정리할게요. 목표부터 읽어요. 모든 선택지가 사실이라 노트로는 정답을 정할 수 없어요.",zh:"我们来总结。先读目标。每个选项都是真的，所以笔记决定不了答案。",a:['in:#z1']},
 {en:"Similarity needs both items and a similarity word. Difference needs both items and a contrast word.",ko:"공통점은 두 대상과 공통 표현, 차이점은 두 대상과 대조 표현이 필요해요.",zh:"相似点需要两个对象和表示相似的词；差异需要两个对象和对比词。",a:['in:#z2']},
 {en:"An unfamiliar audience needs a description.",ko:"모르는 독자에게는 설명이 필요해요.",zh:"不熟悉的读者需要说明。",a:['in:#z3']},
 {en:"And for each choice, ask only one question: does it do the goal? Next, we start reading with central ideas. See you in Lesson 13!",ko:"그리고 선택지마다 딱 하나만 물으세요. 목표를 달성하나? 다음은 중심 생각으로 독해를 시작해요. 13강에서 만나요!",zh:"每个选项只问一个问题：它完成目标了吗？接下来我们从中心思想开始讲阅读。第13课见！",a:['in:#z4']}]}];
