META={id:'bnd1',k:'BND',n:1,min:8,
 title:{en:'Lesson 1 · Complete Sentences & Comma Splices',ko:'1강 · 완전한 문장과 Comma Splice',zh:'第1课 · 完整句子与逗号粘连'},
 desc:{en:'What makes a sentence complete, run-ons and comma splices, 5 ways to join sentences, the “however” trap',ko:'완전한 문장의 조건, run-on과 comma splice, 연결하는 5가지 방법, however 함정',zh:'完整句子的条件、连写句与逗号粘连、5种连接方法、however 陷阱'},
 endh:{en:'Lesson 1 complete',ko:'1강 완료',zh:'第1课完成'},
 endp:{en:'Now practice with test-style questions until the rule feels automatic.',ko:'이제 실전형 문제로 규칙이 손에 익을 때까지 연습해요.',zh:'现在用实战题型练习，直到规则成为本能。'}};
L={en:{subj:'Subject',verb:'Verb (with tense)',alone:'Stands alone',need:'A complete sentence needs',runon:'Run-on',splice:'Comma splice',rule:'Complete , complete = always wrong',same:'Same job on the SAT',complete:'Complete ✓',notc:'Not complete ✗',fast:'Fixed rules → about 30 seconds per question',key:'Key question: Is it a complete sentence?',dep:'Dependent words',notconj:'Not conjunctions',fan:'FANBOYS = for, and, nor, but, or, yet, so',vlt:'Vertical line test'},
 ko:{subj:'주어',verb:'시제 있는 동사',alone:'혼자 설 수 있음',need:'완전한 문장의 3가지 조건',runon:'Run-on (무구두점)',splice:'Comma splice (쉼표만)',rule:'완전 , 완전 = 무조건 오답',same:'SAT에서는 같은 역할',complete:'완전 ✓',notc:'불완전 ✗',fast:'규칙이 정해져 있음 → 한 문제 약 30초',key:'핵심 질문: 완전한 문장인가?',dep:'종속 접속어',notconj:'접속사가 아님',fan:'FANBOYS = for, and, nor, but, or, yet, so',vlt:'세로줄 테스트'},
 zh:{subj:'主语',verb:'有时态的动词',alone:'能独立成句',need:'完整句子的3个条件',runon:'Run-on（无标点）',splice:'Comma splice（只有逗号）',rule:'完整 , 完整 = 一定错',same:'在SAT中作用相同',complete:'完整 ✓',notc:'不完整 ✗',fast:'规则固定 → 每题约30秒',key:'核心问题：是完整句子吗？',dep:'从属连接词',notconj:'不是连词',fan:'FANBOYS = for, and, nor, but, or, yet, so',vlt:'竖线测试'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 1 · Boundaries</div><h2 class="h2" data-l="title"></h2>
 <div class="card h" id="i1"><div class="row"><span class="big-ic" style="font-size:5cqw">⚡</span><b style="font-size:2.4cqw" data-l="fast"></b></div></div>
 <div class="card h" id="i2"><div class="row"><span class="big-ic" style="font-size:5cqw">🔑</span><b style="font-size:2.4cqw" data-l="key"></b></div></div>`,
 b:[
 {en:"Welcome to Lesson 1. Today we start with punctuation, the fastest points you can earn on SAT Reading and Writing.",ko:"1강에 오신 걸 환영해요. 오늘은 SAT Reading and Writing에서 가장 빨리 점수를 올릴 수 있는 문장 경계부터 시작해요.",zh:"欢迎来到第1课。今天我们从标点开始，这是SAT阅读与写作中提分最快的部分。"},
 {en:"Punctuation questions follow fixed rules. Once you know the rules, you can answer each one in about thirty seconds.",ko:"문장 경계 문제는 규칙이 정해져 있어요. 규칙만 알면 한 문제를 30초 정도에 풀 수 있어요.",zh:"标点题有固定规则。掌握规则后，每道题大约30秒就能做完。",a:['in:#i1']},
 {en:"And almost every punctuation question starts with one question: is this a complete sentence? Let's learn exactly what that means.",ko:"그리고 거의 모든 문장 경계 문제는 한 가지 질문에서 시작해요. 이게 완전한 문장인가? 그 뜻을 정확히 배워 봐요.",zh:"几乎所有标点题都从一个问题开始：这是完整句子吗？我们来准确理解它的意思。",a:['in:#i2']}]},
{id:'complete',ch:{en:'Complete sentence',ko:'완전한 문장',zh:'完整句子'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="need"></h2>
 <div class="big card"><span class="tok" id="c-s">The bridge</span> <span class="tok" id="c-v">opened</span> in 1937.</div>
 <div class="row"><span class="lbl s h" id="c-ls" data-l="subj"></span><span class="lbl v h" id="c-lv" data-l="verb"></span><span class="stamp ok h" id="c-ok">✓ COMPLETE</span></div>
 <div class="chk"><div id="k1"><i>✓</i><span data-l="subj"></span></div><div id="k2"><i>✓</i><span data-l="verb"></span></div><div id="k3"><i>✓</i><span data-l="alone"></span></div></div>`,
 b:[
 {en:"A complete sentence, also called an independent clause, needs three things.",ko:"완전한 문장, 다른 말로 독립절에는 세 가지가 꼭 있어야 해요.",zh:"完整句子，也叫独立分句，必须具备三样东西。"},
 {en:"First, a subject: who or what the sentence is about. Here, the subject is 'the bridge.'",ko:"첫째, 주어. 문장이 누구 또는 무엇에 관한 것인지예요. 여기서는 'the bridge'가 주어예요.",zh:"第一，主语：句子说的是谁或什么。这里的主语是 the bridge。",a:['add:#c-s:subj','in:#c-ls','add:#k1:on']},
 {en:"Second, a verb with a tense: something that happened, happens, or will happen. Here, 'opened,' in the past tense.",ko:"둘째, 시제가 있는 동사. 일어났거나, 일어나거나, 일어날 일이에요. 여기서는 과거 시제 'opened'예요.",zh:"第二，有时态的动词：已经发生、正在发生或将要发生的事。这里是过去时的 opened。",a:['add:#c-v:verb','in:#c-lv','add:#k2:on']},
 {en:"Third, it must be able to stand alone. Read it by itself: 'The bridge opened in 1937.' It makes complete sense, so it is a complete sentence.",ko:"셋째, 혼자 설 수 있어야 해요. 따로 읽어 보세요. 'The bridge opened in 1937.' 이것만으로 뜻이 끝나니까 완전한 문장이에요.",zh:"第三，它必须能独立成句。单独读一遍：The bridge opened in 1937. 意思完整，所以是完整句子。",a:['add:#k3:on','in:#c-ok']}]},
{id:'notcomplete',ch:{en:'Not complete',ko:'불완전한 문장',zh:'不完整句子'},html:`
 <div class="kick">Step 2</div><h2 class="h2">❌ Not complete</h2>
 <div class="big card h" id="n1"><span class="tok" id="n1d">Although</span> the bridge opened in 1937 <span class="stamp no h" id="n1x">✗</span></div>
 <div class="chips h" id="n2"><span class="chip y" data-l="dep"></span><span class="chip">although</span><span class="chip">because</span><span class="chip">when</span><span class="chip">if</span><span class="chip">which</span></div>
 <div class="big card h" id="n3">The bridge <span class="tok" id="n3i">opening</span> in 1937 <span class="stamp no h" id="n3x">✗</span></div>`,
 b:[
 {en:"Now look at this: 'Although the bridge opened in 1937.' It has a subject and a verb, but something is missing.",ko:"이번엔 이걸 보세요. 'Although the bridge opened in 1937.' 주어도 있고 동사도 있는데, 뭔가 빠졌어요.",zh:"再看这个：Although the bridge opened in 1937. 有主语也有动词，但缺了点什么。",a:['in:#n1']},
 {en:"The word 'although' makes us wait for more. Although the bridge opened... then what? It cannot stand alone, so it is not complete.",ko:"'although'가 뒷말을 기다리게 만들어요. 다리가 개통됐지만... 그래서 뭐요? 혼자 설 수 없으니까 완전한 문장이 아니에요.",zh:"although 让我们等着后面的话。虽然桥开通了……然后呢？它不能独立成句，所以不完整。",a:['add:#n1d:dep','in:#n1x']},
 {en:"Words like although, because, when, if, and which turn a sentence into a dependent clause. Watch for them.",ko:"although, because, when, if, which 같은 말이 붙으면 문장이 종속절로 바뀌어요. 이 단어들을 꼭 보세요.",zh:"although、because、when、if、which 这类词会把句子变成从句。一定要留意它们。",a:['in:#n2']},
 {en:"Here is another one: 'The bridge opening in 1937.' 'Opening' is an i-n-g form, not a verb with a tense. No tensed verb, so it is not complete either.",ko:"하나 더 볼게요. 'The bridge opening in 1937.' 'opening'은 ing 형태라서 시제 있는 동사가 아니에요. 시제 있는 동사가 없으니 이것도 불완전해요.",zh:"再看一个：The bridge opening in 1937. opening 是 ing 形式，不是有时态的动词。没有时态动词，所以也不完整。",a:['in:#n3','add:#n3i:ing','in:#n3x']},
 {q:{en:{q:'Which one is a complete sentence?',o:['Because the museum closed early','The museum closed early.','The museum closing early'],e:'It has a subject (the museum), a tensed verb (closed), and it stands alone. “Because” makes A dependent, and “closing” in C has no tense.'},
     ko:{q:'완전한 문장은 어느 것일까요?',o:['Because the museum closed early','The museum closed early.','The museum closing early'],e:'주어(the museum), 시제 있는 동사(closed)가 있고 혼자 설 수 있어요. A는 because 때문에 종속절이고, C의 closing은 시제가 없어요.'},
     zh:{q:'哪一个是完整句子？',o:['Because the museum closed early','The museum closed early.','The museum closing early'],e:'有主语（the museum）和有时态的动词（closed），并且能独立成句。A 因为 because 成了从句，C 的 closing 没有时态。'},a:1}}]},
{id:'errors',ch:{en:'Run-on & comma splice',ko:'Run-on과 Comma splice',zh:'Run-on 与逗号粘连'},html:`
 <div class="kick">Step 3</div><h2 class="h2">Two complete sentences</h2>
 <div class="cars"><div class="car">The rain stopped</div><div class="link h" id="e1">?</div><div class="car">the game continued.</div></div>
 <div class="row h" id="e2"><span class="lbl r" data-l="runon"></span><span class="big" style="font-size:2.3cqw">The rain stopped <span class="tok bad">⎵</span> the game continued. ✗</span></div>
 <div class="row h" id="e3"><span class="lbl r" data-l="splice"></span><span class="big" style="font-size:2.3cqw">The rain stopped<span class="tok bad">,</span> the game continued. ✗</span></div>
 <div class="card h" id="e4" style="border-color:var(--bad)"><b style="font-size:2.6cqw;color:var(--bad)" data-l="rule"></b></div>`,
 b:[
 {en:"Most SAT punctuation questions put two complete sentences side by side. Our job is to join them correctly.",ko:"SAT 문장 경계 문제는 대부분 완전한 문장 두 개를 나란히 놓아요. 우리가 할 일은 둘을 올바르게 연결하는 거예요.",zh:"SAT大多数标点题会把两个完整句子并排放在一起。我们的任务是正确地连接它们。",a:['in:#e1']},
 {en:"If you put nothing between them, it is called a run-on sentence. 'The rain stopped the game continued.' That is wrong.",ko:"사이에 아무것도 안 넣으면 run-on 문장이라고 해요. 'The rain stopped the game continued.' 틀린 문장이에요.",zh:"如果中间什么都不加，就叫 run-on（连写句）。The rain stopped the game continued. 这是错的。",a:['in:#e2']},
 {en:"If you put only a comma between them, it is called a comma splice. A comma is too weak to hold two complete sentences together.",ko:"사이에 쉼표 하나만 넣으면 comma splice라고 해요. 쉼표 하나로는 완전한 문장 두 개를 붙잡을 힘이 없어요.",zh:"如果中间只有一个逗号，就叫 comma splice（逗号粘连）。一个逗号的力量不足以连接两个完整句子。",a:['in:#e3','text:#e1:,','add:#e1:broken']},
 {en:"Remember this rule: complete sentence, comma, complete sentence is always wrong on the SAT.",ko:"이 규칙을 기억하세요. 완전한 문장, 쉼표, 완전한 문장은 SAT에서 무조건 오답이에요.",zh:"记住这条规则：完整句子、逗号、完整句子，在SAT中一定是错的。",a:['in:#e4']}]},
{id:'fixes',ch:{en:'5 ways to join',ko:'연결하는 5가지 방법',zh:'5种连接方法'},html:`
 <div class="kick">Step 4</div><h2 class="h2">✅ 5 correct ways</h2>
 <div style="display:flex;gap:2cqw;align-items:flex-start">
 <div style="flex:1">
 <div class="fix h" id="f1"><b class="n">1</b><span class="s">The rain stopped<span class="p">.</span> The game continued.</span></div>
 <div class="fix h" id="f2"><b class="n">2</b><span class="s">The rain stopped<span class="p">;</span> the game continued.</span></div>
 <div class="fix h" id="f3"><b class="n">3</b><span class="s">The rain stopped<span class="p">, and</span> the game continued.</span></div>
 <div class="fix h" id="f4"><b class="n">4</b><span class="s">The rain stopped<span class="p">:</span> the game could continue.</span></div>
 <div class="fix h" id="f5"><b class="n">5</b><span class="s">The rain stopped<span class="p"> —</span> the game could continue.</span></div></div>
 <div class="brace h" id="fb" style="max-width:24cqw"><span data-l="same"></span><br>1 = 2 = 3<br><br><span style="font-weight:600" data-l="fan"></span></div></div>`,
 b:[
 {en:"So how do we fix it? There are five correct ways.",ko:"그럼 어떻게 고칠까요? 올바른 방법은 다섯 가지예요.",zh:"那怎么改呢？正确的方法有五种。"},
 {en:"One: a period. 'The rain stopped. The game continued.' Two separate sentences.",ko:"첫째, 마침표. 'The rain stopped. The game continued.' 두 문장으로 나누는 거예요.",zh:"第一，句号。The rain stopped. The game continued. 分成两个句子。",a:['in:#f1']},
 {en:"Two: a semicolon. A semicolon works like a soft period, so it needs a complete sentence on both sides.",ko:"둘째, 세미콜론. 세미콜론은 부드러운 마침표 같은 거라서 양쪽에 완전한 문장이 있어야 해요.",zh:"第二，分号。分号就像一个柔和的句号，所以两边都必须是完整句子。",a:['in:#f2']},
 {en:"Three: a comma plus a coordinating conjunction, like and, but, or so. Remember FANBOYS: for, and, nor, but, or, yet, so. The comma and the conjunction must come together.",ko:"셋째, 쉼표 더하기 and, but, so 같은 등위접속사. FANBOYS로 외우세요. for, and, nor, but, or, yet, so. 쉼표와 접속사가 꼭 같이 와야 해요.",zh:"第三，逗号加并列连词，比如 and、but、so。用 FANBOYS 来记：for, and, nor, but, or, yet, so。逗号和连词必须一起出现。",a:['in:#f3']},
 {en:"Four: a colon, when the second part explains the first. Five: a dash, which can do a similar job.",ko:"넷째, 콜론. 뒷부분이 앞부분을 설명할 때 써요. 다섯째, 대시도 비슷한 역할을 할 수 있어요.",zh:"第四，冒号，用在后半部分解释前半部分时。第五，破折号也可以起类似作用。",a:['in:#f4','in:#f5']},
 {en:"On the SAT, the period, the semicolon, and comma plus FANBOYS do the same job. Since only one answer can be right, if two of them appear in the choices, both are wrong.",ko:"SAT에서는 마침표, 세미콜론, 쉼표 더하기 FANBOYS가 같은 역할을 해요. 정답은 하나뿐이니까, 선택지에 이 중 두 개가 같이 있으면 둘 다 오답이에요.",zh:"在SAT中，句号、分号、逗号加FANBOYS作用相同。因为正确答案只有一个，如果选项中同时出现其中两个，那两个都是错的。",a:['in:#fb']}]},
{id:'however',ch:{en:'The “however” trap',ko:'however 함정',zh:'however 陷阱'},html:`
 <div class="kick">Trap</div><h2 class="h2">⚠️ however ≠ and</h2>
 <div class="big card h" id="h1">The rain stopped<span class="tok bad">,</span> however, the game was canceled. <span class="stamp no">✗</span></div>
 <div class="big card h" id="h2">The rain stopped<span class="tok good">;</span> however<span class="tok good">,</span> the game was canceled. <span class="stamp ok">✓</span></div>
 <div class="chips h" id="h3"><span class="chip y" data-l="notconj"></span><span class="chip">however</span><span class="chip">therefore</span><span class="chip">moreover</span><span class="chip">consequently</span><span class="chip">in fact</span></div>`,
 b:[
 {en:"Here is the trap students fall for most. 'However' looks like a joining word, but it is not a conjunction.",ko:"학생들이 가장 많이 걸리는 함정이에요. 'however'는 연결하는 말처럼 보이지만 접속사가 아니에요.",zh:"这是学生最常掉进的陷阱。however 看起来像连接词，但它不是连词。"},
 {en:"'The rain stopped, however, the game was canceled.' Two complete sentences with only commas. That is still a comma splice.",ko:"'The rain stopped, however, the game was canceled.' 완전한 문장 두 개를 쉼표만으로 이었어요. 이것도 comma splice예요.",zh:"The rain stopped, however, the game was canceled. 两个完整句子只用逗号连接，这仍然是逗号粘连。",a:['in:#h1']},
 {en:"Put a semicolon or a period before 'however,' and a comma after it: 'The rain stopped; however, the game was canceled.'",ko:"'however' 앞에는 세미콜론이나 마침표, 뒤에는 쉼표를 찍어요. 'The rain stopped; however, the game was canceled.'",zh:"在 however 前面用分号或句号，后面用逗号：The rain stopped; however, the game was canceled.",a:['in:#h2']},
 {en:"The same rule applies to therefore, moreover, consequently, and in fact.",ko:"therefore, moreover, consequently, in fact도 똑같은 규칙이에요.",zh:"therefore、moreover、consequently、in fact 也适用同样的规则。",a:['in:#h3']}]},
{id:'vline',tight:1,ch:{en:'Vertical line test',ko:'세로줄 테스트',zh:'竖线测试'},html:`
 <div class="kick">Tool</div><h2 class="h2" data-l="vlt"></h2>
 <div class="big card">Engineers tested the design for three years<span class="vline" id="v0"></span>the bridge opened in 1937.</div>
 <div class="side"><div class="card h" id="v1"><b data-l="left"></b><br>Engineers tested the design for three years → <span data-l="complete"></span></div><div class="card h" id="v2"><b data-l="right2"></b><br>the bridge opened in 1937 → <span data-l="complete"></span></div></div>
 <div class="card h" id="v3" style="font-size:2.1cqw;line-height:1.6">✓ + ✓ → <b>. &nbsp;; &nbsp;, + FANBOYS</b><br>✓ + ✗ → <b>no . or ;</b></div>`,
 b:[
 {en:"Here is a quick tool: the vertical line test. Draw a line where the punctuation goes.",ko:"빠르게 쓰는 도구를 알려 줄게요. 세로줄 테스트예요. 구두점이 들어갈 자리에 줄을 그어요.",zh:"教你一个快速工具：竖线测试。在标点的位置画一条竖线。",a:['in:#v0']},
 {en:"Then ask two questions. Is the left side a complete sentence? Is the right side a complete sentence?",ko:"그리고 두 가지를 물어요. 왼쪽이 완전한 문장인가? 오른쪽이 완전한 문장인가?",zh:"然后问两个问题：左边是完整句子吗？右边是完整句子吗？",a:['in:#v1','in:#v2']},
 {en:"If both sides are complete, use a period, a semicolon, or a comma plus FANBOYS. If one side is not complete, a period or a semicolon is wrong.",ko:"양쪽 다 완전하면 마침표, 세미콜론, 쉼표 더하기 FANBOYS를 써요. 한쪽이라도 불완전하면 마침표나 세미콜론은 오답이에요.",zh:"如果两边都完整，就用句号、分号或逗号加FANBOYS。只要有一边不完整，句号和分号就是错的。",a:['in:#v3']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="big card" style="font-size:2.5cqw">Engineers spent three years testing the new <b>______</b> bridge finally opened to traffic in 1937.</div>
 <div class="choices"><div id="x1">A) design, the</div><div id="x2">B) design the</div><div id="x3">C) design; the</div><div id="x4">D) design and, the</div></div>
 <div class="side"><div class="card h" id="xl"><b data-l="left"></b> → <span data-l="complete"></span></div><div class="card h" id="xr"><b data-l="right2"></b> → <span data-l="complete"></span></div></div>`,
 b:[
 {en:"Let's solve one together. Read the sentence and the choices.",ko:"같이 한 문제 풀어 봐요. 문장과 선택지를 읽어 보세요.",zh:"我们一起做一道题。先读句子和选项。"},
 {en:"Draw the line at the blank. Left side: 'Engineers spent three years testing the new design.' Subject, tensed verb, stands alone. Complete.",ko:"빈칸에 줄을 그어요. 왼쪽: 'Engineers spent three years testing the new design.' 주어, 시제 있는 동사, 혼자 설 수 있음. 완전해요.",zh:"在空格处画线。左边：Engineers spent three years testing the new design. 有主语、有时态动词、能独立成句。完整。",a:['in:#xl']},
 {en:"Right side: 'the bridge finally opened to traffic in 1937.' Also complete.",ko:"오른쪽: 'the bridge finally opened to traffic in 1937.' 이것도 완전해요.",zh:"右边：the bridge finally opened to traffic in 1937. 也完整。",a:['in:#xr']},
 {en:"Complete plus complete. A is a comma splice. B is a run-on. D puts the comma after 'and' instead of before it. So the answer is C, the semicolon.",ko:"완전 더하기 완전이에요. A는 comma splice, B는 run-on, D는 쉼표가 and 앞이 아니라 뒤에 있어요. 그래서 정답은 세미콜론인 C예요.",zh:"完整加完整。A 是逗号粘连，B 是连写句，D 把逗号放在 and 后面而不是前面。所以答案是分号 C。",a:['add:#x1:x','add:#x2:x','add:#x4:x','add:#x3:o']},
 {q:{en:{q:'“The team tested the battery ___ it lasted twelve hours.” Which is correct?',o:['battery, it lasted','battery; it lasted','battery it lasted'],e:'Both sides are complete sentences, so a semicolon works. A is a comma splice and C is a run-on.'},
     ko:{q:'“The team tested the battery ___ it lasted twelve hours.” 올바른 것은?',o:['battery, it lasted','battery; it lasted','battery it lasted'],e:'양쪽 다 완전한 문장이라 세미콜론이 맞아요. A는 comma splice, C는 run-on이에요.'},
     zh:{q:'“The team tested the battery ___ it lasted twelve hours.” 哪个正确？',o:['battery, it lasted','battery; it lasted','battery it lasted'],e:'两边都是完整句子，所以用分号。A 是逗号粘连，C 是连写句。'},a:1}},
 {q:{en:{q:'Which sentence is punctuated correctly?',o:['The data were clear, therefore, the study ended.','The data were clear; therefore, the study ended.','The data were clear therefore the study ended.'],e:'“Therefore” is not a conjunction. Between two complete sentences it needs a semicolon (or period) before it and a comma after it.'},
     ko:{q:'구두점이 올바른 문장은?',o:['The data were clear, therefore, the study ended.','The data were clear; therefore, the study ended.','The data were clear therefore the study ended.'],e:'therefore는 접속사가 아니에요. 완전한 문장 두 개 사이에서는 앞에 세미콜론(또는 마침표), 뒤에 쉼표가 필요해요.'},
     zh:{q:'哪个句子的标点是正确的？',o:['The data were clear, therefore, the study ended.','The data were clear; therefore, the study ended.','The data were clear therefore the study ended.'],e:'therefore 不是连词。在两个完整句子之间，前面要用分号（或句号），后面用逗号。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 1</h2>
 <ul class="sum card"><li class="h" id="s1">Complete sentence = <b style="color:var(--subj)">subject</b> + <b style="color:var(--verb)">tensed verb</b> + stands alone</li>
 <li class="h" id="s2">complete , complete = <b style="color:var(--bad)">comma splice ✗</b> → use <b>. &nbsp;; &nbsp;, + FANBOYS</b></li>
 <li class="h" id="s3"><b>however / therefore</b> → <b>; however,</b></li>
 <li class="h" id="s4"><span data-l="vlt"></span>: left ✓? right ✓?</li></ul>`,
 b:[
 {en:"Let's review. A complete sentence has a subject and a verb with a tense, and it can stand alone.",ko:"정리해 볼게요. 완전한 문장은 주어와 시제 있는 동사가 있고, 혼자 설 수 있어요.",zh:"我们来总结。完整句子有主语和有时态的动词，并且能独立成句。",a:['in:#s1']},
 {en:"Two complete sentences need a period, a semicolon, or a comma plus FANBOYS. A comma alone is a comma splice.",ko:"완전한 문장 두 개는 마침표, 세미콜론, 쉼표 더하기 FANBOYS로 이어요. 쉼표만 있으면 comma splice예요.",zh:"两个完整句子要用句号、分号或逗号加FANBOYS连接。只有逗号就是逗号粘连。",a:['in:#s2']},
 {en:"However and therefore are not conjunctions, so put a semicolon before them.",ko:"however와 therefore는 접속사가 아니니까 앞에 세미콜론을 찍어요.",zh:"however 和 therefore 不是连词，所以前面要用分号。",a:['in:#s3']},
 {en:"And when in doubt, use the vertical line test. Next, practice with test-style questions. See you in Lesson 2!",ko:"헷갈리면 세로줄 테스트를 쓰세요. 이제 실전형 문제로 연습해요. 2강에서 만나요!",zh:"拿不准时就用竖线测试。接下来用实战题型练习吧。第2课见！",a:['in:#s4']}]}];

