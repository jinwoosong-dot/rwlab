META={id:'trn1',k:'TRN',n:11,
 title:{en:'Lesson 11 · Transitions',ko:'11강 · 연결어',zh:'第11课 · 过渡词'},
 desc:{en:'Label the relationship between two sentences, the 5 transition families, same-family elimination',ko:'두 문장의 관계에 이름 붙이기, 연결어 5가족, 같은 가족 소거',zh:'给两句话的关系贴标签、五类过渡词、同类排除'},
 endh:{en:'Lesson 11 complete',ko:'11강 완료',zh:'第11课完成'},
 endp:{en:'Practice naming the relationship before you look at the choices.',ko:'선택지를 보기 전에 관계 이름부터 붙이는 연습을 해요.',zh:'练习在看选项前先说出两句的关系。'}};
L={en:{fam:'5 transition families',add:'Add / continue',ex:'Example',con:'Contrast',cause:'Cause → effect',seq:'Time / sequence',label:'Label the relationship first',same:'Same family → both wrong'},
 ko:{fam:'연결어 5가족',add:'추가 · 계속',ex:'예시',con:'대조',cause:'원인 → 결과',seq:'시간 · 순서',label:'관계에 먼저 이름 붙이기',same:'같은 가족 두 개 → 둘 다 오답'},
 zh:{fam:'五类过渡词',add:'递进 · 补充',ex:'举例',con:'转折 · 对比',cause:'因果',seq:'时间 · 顺序',label:'先给关系贴标签',same:'同一类出现两个 → 都是错的'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 4 · Expression of Ideas</div><h2 class="h2" data-l="title"></h2>
 <div class="cars h" id="i1" style="font-size:2.2cqw"><div class="car">Sentence A</div><div class="link" style="color:var(--pri)">?</div><div class="car">______, Sentence B</div></div>
 <div class="card h" id="i2" style="font-size:2.3cqw">🏷️ <b data-l="label"></b></div>`,
 b:[
 {en:"Welcome to Lesson 11. Transition questions come near the end of each module, and they can be solved fast.",ko:"11강에 오신 걸 환영해요. 연결어 문제는 각 모듈의 뒷부분에 나오고, 빠르게 풀 수 있어요.",zh:"欢迎来到第11课。过渡词题在每个模块的后部出现，可以很快做完。"},
 {en:"The blank sits at the start of a sentence. You choose the word that shows how that sentence connects to the one before it.",ko:"빈칸은 문장 맨 앞에 있어요. 그 문장이 앞 문장과 어떻게 이어지는지 보여 주는 말을 고르는 거예요.",zh:"空格在句子开头。你要选的词，要能表明这句话和前一句是怎样连接的。",a:['in:#i1']},
 {en:"The key is this: before looking at the choices, name the relationship yourself.",ko:"핵심은 이거예요. 선택지를 보기 전에 관계에 직접 이름을 붙이세요.",zh:"关键是：在看选项之前，自己先说出两句的关系。",a:['in:#i2']}]},
{id:'families',ch:{en:'5 families',ko:'5가족',zh:'五类'},html:`
 <div class="kick">Toolkit</div><h2 class="h2" data-l="fam"></h2>
 <div class="fix h" id="f1"><b class="n">+</b><span><b data-l="add"></b> — furthermore, moreover, additionally, similarly, likewise</span></div>
 <div class="fix h" id="f2"><b class="n">e.g.</b><span><b data-l="ex"></b> — for example, for instance, specifically</span></div>
 <div class="fix h" id="f3"><b class="n" style="background:var(--bad)">↔</b><span><b data-l="con"></b> — however, nevertheless, by contrast, instead, still</span></div>
 <div class="fix h" id="f4"><b class="n" style="background:var(--ok)">→</b><span><b data-l="cause"></b> — therefore, thus, consequently, as a result</span></div>
 <div class="fix h" id="f5"><b class="n" style="background:var(--warn)">⏱</b><span><b data-l="seq"></b> — first, then, subsequently, finally, meanwhile</span></div>`,
 b:[
 {en:"Almost every transition belongs to one of five families.",ko:"거의 모든 연결어는 다섯 가족 중 하나에 속해요.",zh:"几乎所有过渡词都属于五类中的一类。"},
 {en:"Add or continue: furthermore, moreover, additionally, similarly. The second sentence adds a point in the same direction.",ko:"추가와 계속: furthermore, moreover, additionally, similarly. 뒤 문장이 같은 방향으로 내용을 더해요.",zh:"递进补充：furthermore、moreover、additionally、similarly。后一句沿同一方向补充内容。",a:['in:#f1']},
 {en:"Example: for example, for instance. The second sentence gives a specific case of the first.",ko:"예시: for example, for instance. 뒤 문장이 앞 문장의 구체적인 예를 들어요.",zh:"举例：for example、for instance。后一句给出前一句的具体例子。",a:['in:#f2']},
 {en:"Contrast: however, nevertheless, by contrast, instead. The second sentence goes against what you expected.",ko:"대조: however, nevertheless, by contrast, instead. 뒤 문장이 예상과 반대로 가요.",zh:"转折对比：however、nevertheless、by contrast、instead。后一句与预期相反。",a:['in:#f3']},
 {en:"Cause and effect: therefore, thus, consequently, as a result. And time: first, then, subsequently, finally.",ko:"원인과 결과: therefore, thus, consequently, as a result. 그리고 시간: first, then, subsequently, finally.",zh:"因果：therefore、thus、consequently、as a result。时间顺序：first、then、subsequently、finally。",a:['in:#f4','in:#f5']}]},
{id:'method',ch:{en:'Label first',ko:'먼저 이름 붙이기',zh:'先贴标签'},html:`
 <div class="kick">Method</div><h2 class="h2" data-l="label"></h2>
 <div class="pass card" style="font-size:2.2cqw">The town’s old factory closed in 2015. <b>______</b>, hundreds of workers had to find new jobs.</div>
 <div class="card h" id="m1" style="font-size:2.2cqw">factory closed → workers needed jobs = <b style="color:var(--ok)" data-l="cause"></b></div>
 <div class="choices h" id="m2"><div class="x">However</div><div class="o">As a result</div><div class="x">For example</div><div class="x">Similarly</div></div>`,
 b:[
 {en:"Read only the sentence before the blank and the sentence with the blank. Then ask: how are they related?",ko:"빈칸 앞 문장과 빈칸이 있는 문장만 읽으세요. 그리고 물어요. 둘은 어떤 관계인가?",zh:"只读空格前一句和空格所在的句子。然后问：它们是什么关系？"},
 {en:"'The town's old factory closed in 2015. Blank, hundreds of workers had to find new jobs.' The closing caused the job search. Cause and effect.",ko:"'The town's old factory closed in 2015.' 빈칸, 'hundreds of workers had to find new jobs.' 공장이 문을 닫아서 일자리를 찾아야 했어요. 원인과 결과예요.",zh:"The town's old factory closed in 2015. 空格，hundreds of workers had to find new jobs. 工厂关闭导致工人找新工作。因果关系。",a:['in:#m1']},
 {en:"Now look at the choices. Only 'as a result' is in the cause and effect family.",ko:"이제 선택지를 보세요. 원인과 결과 가족은 as a result뿐이에요.",zh:"现在看选项。只有 as a result 属于因果类。",a:['in:#m2']}]},
{id:'same',ch:{en:'Same-family trick',ko:'같은 가족 소거',zh:'同类排除'},html:`
 <div class="kick">Shortcut</div><h2 class="h2" data-l="same"></h2>
 <div class="choices h" id="s1"><div>A) However</div><div>B) Therefore</div><div>C) Nevertheless</div><div>D) Additionally</div></div>
 <div class="card h" id="s2" style="font-size:2.2cqw">A + C = <b data-l="con"></b> → ✗ ✗ &nbsp; → B or D</div>`,
 b:[
 {en:"Here is a shortcut. If two choices are in the same family and mean the same thing, neither can be the only correct answer.",ko:"지름길 하나. 두 선택지가 같은 가족이고 뜻이 같다면, 둘 다 유일한 정답이 될 수 없어요.",zh:"一个捷径：如果两个选项属于同一类、意思相同，那它们都不可能是唯一正确答案。",a:['in:#s1']},
 {en:"'However' and 'nevertheless' are both contrast. If both appear, you can usually cross them both out.",ko:"however와 nevertheless는 둘 다 대조예요. 둘 다 있으면 보통 둘 다 지울 수 있어요.",zh:"however 和 nevertheless 都是转折。两者都出现时，通常可以把它们都排除。",a:['in:#s2']},
 {en:"Use this carefully. Some words in the same family have small differences, so always confirm with your label.",ko:"조심해서 쓰세요. 같은 가족 안에서도 미묘한 차이가 있는 말이 있으니, 항상 붙여 둔 관계 이름으로 확인하세요.",zh:"要谨慎使用。同一类里有些词有细微差别，所以一定要用你贴的标签来确认。"}]},
{id:'nuance',tight:1,ch:{en:'Small differences',ko:'미묘한 차이',zh:'细微差别'},html:`
 <div class="kick">Hard questions</div><h2 class="h2">Inside one family</h2>
 <div class="pass card h" id="n1" style="font-size:2.1cqw"><b>Instead</b> = replaces: The bus never came. <b>Instead</b>, we walked.</div>
 <div class="pass card h" id="n2" style="font-size:2.1cqw"><b>Nevertheless / Still</b> = despite that: It rained all day. <b>Nevertheless</b>, the game went on.</div>
 <div class="pass card h" id="n3" style="font-size:2.1cqw"><b>In other words / That is</b> = says it again more simply</div>
 <div class="pass card h" id="n4" style="font-size:2.1cqw"><b>Indeed / In fact</b> = makes the point stronger</div>`,
 b:[
 {en:"Harder questions test small differences. 'Instead' means one thing replaces another. 'The bus never came. Instead, we walked.'",ko:"어려운 문제는 미묘한 차이를 물어요. instead는 하나가 다른 것을 대신한다는 뜻이에요. 'The bus never came. Instead, we walked.'",zh:"难题考的是细微差别。instead 表示用一件事代替另一件事。The bus never came. Instead, we walked.",a:['in:#n1']},
 {en:"'Nevertheless' means something happens despite the first fact. 'It rained all day. Nevertheless, the game went on.'",ko:"nevertheless는 앞의 사실에도 불구하고 어떤 일이 일어난다는 뜻이에요. 'It rained all day. Nevertheless, the game went on.'",zh:"nevertheless 表示尽管有前面的事实，某件事仍然发生了。It rained all day. Nevertheless, the game went on.",a:['in:#n2']},
 {en:"'In other words' restates the same idea more simply, and 'indeed' or 'in fact' make the point stronger.",ko:"in other words는 같은 내용을 더 쉽게 다시 말하고, indeed나 in fact는 주장을 더 강하게 해요.",zh:"in other words 用更简单的话重述同一个意思，indeed 或 in fact 让观点更有力。",a:['in:#n3','in:#n4']},
 {q:{en:{q:'“Many expected the new law to reduce traffic. ___, congestion rose by 12% in its first year.”',o:['Similarly','In fact','Instead','For example'],e:'The result was the opposite of what was expected, replacing the expected outcome. “Instead” shows that. “Similarly” and “for example” continue, and “in fact” would strengthen the expectation.'},
     ko:{q:'“Many expected the new law to reduce traffic. ___, congestion rose by 12% in its first year.”',o:['Similarly','In fact','Instead','For example'],e:'결과가 예상과 반대로 나와 예상된 결과를 대신했어요. instead가 그걸 보여 줘요. similarly와 for example은 같은 방향이고, in fact는 예상을 강화해요.'},
     zh:{q:'“Many expected the new law to reduce traffic. ___, congestion rose by 12% in its first year.”',o:['Similarly','In fact','Instead','For example'],e:'结果与预期相反，取代了预期的结果，instead 正好表达这一点。similarly 和 for example 是同向，in fact 会加强预期。'},a:2}}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.1cqw">Most desert plants store water in thick stems or leaves. The welwitschia plant of Namibia uses a different strategy. <b>______</b>, it absorbs moisture from coastal fog through tiny pores in its two long leaves.</div>
 <div class="choices"><div id="x1">A) Specifically</div><div id="x2">B) However</div><div id="x3">C) As a result</div><div id="x4">D) Likewise</div></div>`,
 b:[
 {en:"Let's solve one. The sentence before says the welwitschia uses a different strategy. The sentence with the blank describes that strategy in detail.",ko:"한 문제 풀어 봐요. 앞 문장은 welwitschia가 다른 전략을 쓴다고 말해요. 빈칸 문장은 그 전략을 자세히 설명해요.",zh:"做一道题。前一句说 welwitschia 用的是不同策略，空格所在句详细描述这个策略。"},
 {en:"Label: the second sentence gives specific details of the first. That is the example family.",ko:"이름을 붙이면, 뒤 문장이 앞 문장의 구체적인 내용을 알려 줘요. 예시 가족이에요.",zh:"贴标签：后一句给出前一句的具体细节，属于举例类。"},
 {en:"'However' would mean a contrast, but there is none. 'As a result' is cause and effect. 'Likewise' compares two similar things. The answer is A, 'specifically.'",ko:"however는 대조인데 대조가 없어요. as a result는 원인과 결과예요. likewise는 비슷한 두 가지를 비교해요. 정답은 A 'specifically'예요.",zh:"however 表示转折，但这里没有转折。as a result 是因果。likewise 比较两个相似的事物。答案是 A specifically。",a:['add:#x2:x','add:#x3:x','add:#x4:x','add:#x1:o']}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 11</h2>
 <ul class="sum card"><li class="h" id="z1">Read the sentence before + the sentence with the blank</li>
 <li class="h" id="z2">Label: add · example · contrast · cause → effect · time</li>
 <li class="h" id="z3">Two choices in the same family → usually both wrong</li>
 <li class="h" id="z4">instead = replaces · nevertheless = despite · in other words = restates</li></ul>`,
 b:[
 {en:"Let's review. Read the sentence before and the sentence with the blank.",ko:"정리할게요. 빈칸 앞 문장과 빈칸이 있는 문장을 읽어요.",zh:"我们来总结。读空格前一句和空格所在的句子。",a:['in:#z1']},
 {en:"Name the relationship with one of the five families before you look at the choices.",ko:"선택지를 보기 전에 다섯 가족 중 하나로 관계에 이름을 붙여요.",zh:"看选项之前，先用五类之一说出两句的关系。",a:['in:#z2']},
 {en:"Two choices from the same family can usually both be eliminated.",ko:"같은 가족에서 나온 선택지 두 개는 보통 둘 다 지울 수 있어요.",zh:"同一类的两个选项通常都可以排除。",a:['in:#z3']},
 {en:"And on hard questions, check the small differences. Next lesson: rhetorical synthesis, the notes questions. See you in Lesson 12!",ko:"어려운 문제에서는 미묘한 차이를 확인하세요. 다음은 노트 종합 문제예요. 12강에서 만나요!",zh:"难题要注意细微差别。下一课：信息整合，也就是笔记题。第12课见！",a:['in:#z4']}]}];
