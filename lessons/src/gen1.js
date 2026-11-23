META={id:'gen1',k:'GEN',n:0,
 title:{en:'Lesson 0 · How the Reading & Writing Test Works',ko:'0강 · Reading & Writing 시험의 구조',zh:'第0课 · 阅读与写作考试的结构'},
 desc:{en:'Two adaptive modules, 27 questions in 32 minutes, the order of question types, pacing, and the 4-step method',ko:'적응형 모듈 2개, 32분에 27문항, 문항 유형 순서, 시간 배분, 4단계 풀이법',zh:'两个自适应模块、32分钟27题、题型顺序、时间分配、四步解题法'},
 endh:{en:'Orientation complete',ko:'오리엔테이션 완료',zh:'入门课完成'},
 endp:{en:'Next, take the diagnostic test to find the question types to train first.',ko:'다음은 진단 테스트로 먼저 훈련할 유형을 찾아요.',zh:'接下来做诊断测试，找出需要优先训练的题型。'}};
L={en:{m1:'Module 1',m2:'Module 2',mix:'easy + medium + hard',harder:'harder',easier:'easier',per:'≈ 71 seconds per question',order:'Order inside each module',st1:'Read the question first',st2:'Read the passage with that goal',st3:'Predict the answer in your own words',st4:'Eliminate, then choose'},
 ko:{m1:'모듈 1',m2:'모듈 2',mix:'쉬움 + 보통 + 어려움',harder:'더 어려운 모듈',easier:'더 쉬운 모듈',per:'문항당 약 71초',order:'모듈 안의 문항 순서',st1:'질문부터 읽기',st2:'목적을 갖고 지문 읽기',st3:'내 말로 답 예측하기',st4:'소거한 뒤 고르기'},
 zh:{m1:'模块1',m2:'模块2',mix:'简单 + 中等 + 困难',harder:'更难',easier:'更简单',per:'每题约71秒',order:'每个模块内的题目顺序',st1:'先读问题',st2:'带着目的读文章',st3:'用自己的话预测答案',st4:'排除后再选择'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Orientation</div><h2 class="h2" data-l="title"></h2>
 <div class="grid3"><div class="card h" id="i1" style="text-align:center"><div class="big-ic" style="font-size:5cqw">📄</div><b class="small">54 questions</b></div><div class="card h" id="i2" style="text-align:center"><div class="big-ic" style="font-size:5cqw">⏱️</div><b class="small">64 minutes</b></div><div class="card h" id="i3" style="text-align:center"><div class="big-ic" style="font-size:5cqw">📝</div><b class="small">1 short passage → 1 question</b></div></div>`,
 b:[
 {en:"Welcome to RW Lab. Before we study any rules, let's see exactly how the Reading and Writing section works.",ko:"RW Lab에 오신 걸 환영해요. 규칙을 배우기 전에 Reading and Writing 시험이 정확히 어떻게 진행되는지 볼게요.",zh:"欢迎来到RW Lab。在学习规则之前，先来看看阅读与写作部分到底是怎么考的。"},
 {en:"The section has fifty-four questions in sixty-four minutes.",ko:"이 시험은 64분 동안 54문항을 풀어요.",zh:"这一部分共54道题，时间64分钟。",a:['in:#i1','in:#i2']},
 {en:"Every question comes with its own short passage, usually under one hundred and fifty words. One passage, one question.",ko:"문항마다 짧은 지문이 하나씩 붙어 있어요. 보통 150단어 이하예요. 지문 하나에 문제 하나예요.",zh:"每道题都配有一篇短文，通常不超过150个单词。一篇文章，一道题。",a:['in:#i3']}]},
{id:'modules',ch:{en:'Two modules',ko:'모듈 두 개',zh:'两个模块'},html:`
 <div class="kick">Structure</div><h2 class="h2">Adaptive: Module 1 → Module 2</h2>
 <div class="row" style="align-items:stretch"><div class="card h" id="m1" style="flex:1"><b data-l="m1"></b><div class="small">27 Q · 32 min</div><div class="small" data-l="mix"></div></div>
 <div class="link h" id="m0" style="color:var(--pri)">→</div>
 <div style="flex:1;display:flex;flex-direction:column;gap:1cqw"><div class="card h" id="m2" style="border-color:var(--ok)"><b data-l="m2"></b> · <span data-l="harder"></span></div><div class="card h" id="m3"><b data-l="m2"></b> · <span data-l="easier"></span></div></div></div>
 <div class="card h" id="m4" style="font-size:2.2cqw">⏱️ <b data-l="per"></b></div>`,
 b:[
 {en:"The section is split into two modules. Each module has twenty-seven questions and thirty-two minutes.",ko:"시험은 모듈 두 개로 나뉘어요. 모듈마다 27문항, 32분이에요.",zh:"这部分分为两个模块。每个模块27道题，32分钟。",a:['in:#m1']},
 {en:"Module one mixes easy, medium, and hard questions. How you do on module one decides which version of module two you get.",ko:"모듈 1에는 쉬운 문제, 보통 문제, 어려운 문제가 섞여 있어요. 모듈 1 결과에 따라 어떤 모듈 2를 받을지 정해져요.",zh:"模块1混合了简单、中等和困难的题目。你在模块1的表现决定你拿到哪个版本的模块2。",a:['in:#m0']},
 {en:"Do well, and you get the harder module two, which is the path to a high score. So module one matters a lot.",ko:"잘 풀면 더 어려운 모듈 2를 받는데, 그게 고득점으로 가는 길이에요. 그래서 모듈 1이 아주 중요해요.",zh:"做得好，就会拿到更难的模块2，这是通往高分的路。所以模块1非常重要。",a:['in:#m2','in:#m3']},
 {en:"That gives you about seventy-one seconds per question. Some take twenty seconds, others take two minutes.",ko:"문항당 약 71초예요. 20초면 되는 문제도 있고, 2분이 걸리는 문제도 있어요.",zh:"平均每题约71秒。有的题20秒就够，有的要2分钟。",a:['in:#m4']}]},
{id:'order',tight:1,ch:{en:'Question order',ko:'문항 순서',zh:'题目顺序'},html:`
 <div class="kick">Inside a module</div><h2 class="h2" data-l="order"></h2>
 <div class="fix h" id="o1"><b class="n">1</b><span>Craft and Structure — <i>words in context, text structure, cross-text</i></span></div>
 <div class="fix h" id="o2"><b class="n">2</b><span>Information and Ideas — <i>central ideas, evidence, inferences</i></span></div>
 <div class="fix h" id="o3"><b class="n">3</b><span>Standard English Conventions — <i>boundaries, form and structure</i></span></div>
 <div class="fix h" id="o4"><b class="n">4</b><span>Expression of Ideas — <i>transitions, rhetorical synthesis</i></span></div>
 <div class="card h" id="o5" style="font-size:2.1cqw">Each group: easiest → hardest</div>`,
 b:[
 {en:"Inside each module, questions come in groups. Questions that test similar skills are grouped together.",ko:"각 모듈 안에서 문제는 묶음으로 나와요. 비슷한 능력을 묻는 문제끼리 모여 있어요.",zh:"在每个模块里，题目是分组出现的。考查相似能力的题目放在一起。"},
 {en:"First come reading questions like vocabulary and text structure, then questions about central ideas, evidence, and inferences.",ko:"먼저 어휘, 글의 구조 같은 독해 문제가 나오고, 그다음 중심 생각, 근거, 추론 문제가 나와요.",zh:"先是词汇、文章结构这类阅读题，然后是中心思想、证据和推理题。",a:['in:#o1','in:#o2']},
 {en:"Then grammar questions, and finally transitions and rhetorical synthesis at the end.",ko:"그다음 문법 문제, 마지막으로 연결어와 노트 종합 문제가 나와요.",zh:"接着是语法题，最后是过渡词和信息整合题。",a:['in:#o3','in:#o4']},
 {en:"According to the College Board, within each group the questions go from easiest to hardest. Use that to plan your time.",ko:"College Board에 따르면 묶음 안에서는 쉬운 문제부터 어려운 문제 순서예요. 이걸 시간 계획에 활용하세요.",zh:"根据College Board的说明，每组题目内部按从易到难排列。用这一点来安排时间。",a:['in:#o5']}]},
{id:'pace',ch:{en:'Pacing',ko:'시간 배분',zh:'时间分配'},html:`
 <div class="kick">Strategy</div><h2 class="h2">⏱️ Pacing</h2>
 <ul class="sum card"><li class="h" id="p1">Grammar & transitions: fast (≈ 30–45 s)</li><li class="h" id="p2">Inferences, cross-text: slow (≈ 1.5–2 min)</li><li class="h" id="p3">Stuck? Pick your best guess, flag it ⚑, move on</li><li class="h" id="p4">No penalty for wrong answers → never leave a blank</li></ul>`,
 b:[
 {en:"Here is how to manage your time. Grammar and transition questions follow fixed rules, so aim to finish them quickly.",ko:"시간 관리 방법이에요. 문법과 연결어 문제는 규칙이 정해져 있으니 빠르게 끝내는 걸 목표로 하세요.",zh:"时间管理方法如下。语法和过渡词题规则固定，目标是快速做完。",a:['in:#p1']},
 {en:"Save that time for the slow ones: inferences and questions with two passages.",ko:"그렇게 아낀 시간을 오래 걸리는 문제, 즉 추론과 지문 두 개짜리 문제에 써요.",zh:"把省下的时间留给慢题：推理题和双篇文章题。",a:['in:#p2']},
 {en:"If you are stuck, choose your best guess, flag the question, and come back if you have time. You can move around freely inside a module.",ko:"막히면 가장 그럴듯한 답을 고르고 표시한 뒤, 시간이 남으면 돌아오세요. 모듈 안에서는 자유롭게 이동할 수 있어요.",zh:"卡住时，先选一个最可能的答案，做标记，有时间再回来。在模块内部可以自由来回切换。",a:['in:#p3']},
 {en:"Wrong answers do not lose points, so never leave a question blank.",ko:"틀려도 감점이 없으니 빈칸으로 두지 마세요.",zh:"答错不扣分，所以永远不要留空。",a:['in:#p4']}]},
{id:'steps',ch:{en:'4-step method',ko:'4단계 풀이법',zh:'四步解题法'},html:`
 <div class="kick">Method</div><h2 class="h2">4 steps for every question</h2>
 <div class="fix h" id="s1"><b class="n">1</b><span data-l="st1"></span></div>
 <div class="fix h" id="s2"><b class="n">2</b><span data-l="st2"></span></div>
 <div class="fix h" id="s3"><b class="n">3</b><span data-l="st3"></span></div>
 <div class="fix h" id="s4"><b class="n">4</b><span data-l="st4"></span></div>`,
 b:[
 {en:"Finally, a method you can use on every question. Step one: read the question first, so you know what you are looking for.",ko:"마지막으로 모든 문제에 쓸 수 있는 방법이에요. 1단계, 질문부터 읽어서 무엇을 찾아야 하는지 알아요.",zh:"最后，介绍一个每道题都能用的方法。第一步：先读问题，知道自己要找什么。",a:['in:#s1']},
 {en:"Step two: read the passage with that goal in mind.",ko:"2단계, 그 목적을 생각하며 지문을 읽어요.",zh:"第二步：带着这个目的读文章。",a:['in:#s2']},
 {en:"Step three: before looking at the choices, predict the answer in your own words.",ko:"3단계, 선택지를 보기 전에 내 말로 답을 예측해요.",zh:"第三步：看选项之前，先用自己的话预测答案。",a:['in:#s3']},
 {en:"Step four: eliminate choices that do not match, then choose. Each later lesson shows how to use these steps for one question type.",ko:"4단계, 맞지 않는 선택지를 지우고 골라요. 다음 강의들에서 유형별로 이 단계를 어떻게 쓰는지 보여 줄게요.",zh:"第四步：排除不符合的选项，再作选择。后面的每一课都会讲如何把这些步骤用在某一种题型上。",a:['in:#s4']},
 {q:{en:{q:'You have spent two minutes on a hard inference question in module 1. What should you do?',o:['Keep working until you are sure','Choose your best guess, flag it, and move on','Leave it blank and move on'],e:'Time is better spent on questions you can answer quickly. Guess, flag, and return if time allows. Blanks earn nothing, and wrong answers cost nothing.'},
     ko:{q:'모듈 1에서 어려운 추론 문제에 2분을 썼어요. 어떻게 해야 할까요?',o:['확실해질 때까지 계속 푼다','가장 그럴듯한 답을 고르고 표시한 뒤 넘어간다','빈칸으로 두고 넘어간다'],e:'빨리 풀 수 있는 문제에 시간을 쓰는 게 나아요. 찍고 표시한 뒤 시간이 남으면 돌아오세요. 빈칸은 점수가 없고, 틀려도 감점은 없어요.'},
     zh:{q:'你在模块1的一道推理难题上已经花了2分钟。该怎么办？',o:['继续做，直到确定为止','选一个最可能的答案，做标记，然后继续','留空，继续往下做'],e:'把时间用在能快速答对的题上更划算。先猜、做标记，有时间再回来。留空得不到分，答错也不扣分。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 0</h2>
 <ul class="sum card"><li class="h" id="z1">2 modules × 27 questions × 32 minutes · module 1 decides module 2</li>
 <li class="h" id="z2">Groups: reading → grammar → transitions & synthesis · easy → hard</li>
 <li class="h" id="z3">Fast on rules, slow on inferences · guess, flag, move on</li>
 <li class="h" id="z4">Question → passage → predict → eliminate</li></ul>`,
 b:[
 {en:"Let's review. Two modules, twenty-seven questions each, thirty-two minutes each. Module one decides module two.",ko:"정리할게요. 모듈 두 개, 각각 27문항, 32분. 모듈 1이 모듈 2를 결정해요.",zh:"我们来总结。两个模块，每个27题、32分钟。模块1决定模块2。",a:['in:#z1']},
 {en:"Questions come in groups, from easiest to hardest within each group.",ko:"문제는 묶음으로 나오고, 묶음 안에서는 쉬운 것부터 어려운 것 순서예요.",zh:"题目分组出现，每组内部从易到难。",a:['in:#z2']},
 {en:"Be fast on rule-based questions, take your time on inferences, and never leave a blank.",ko:"규칙 문제는 빠르게, 추론은 시간을 들여서, 그리고 빈칸은 절대 남기지 마세요.",zh:"规则类题目要快，推理题慢慢来，永远不要留空。",a:['in:#z3']},
 {en:"And use the four steps on every question. Next, take the diagnostic test, then start with Lesson 1. Good luck!",ko:"그리고 모든 문제에 4단계를 쓰세요. 다음은 진단 테스트를 보고, 1강부터 시작해요. 화이팅!",zh:"每道题都用四步法。接下来先做诊断测试，然后从第1课开始。加油！",a:['in:#z4']}]}];
