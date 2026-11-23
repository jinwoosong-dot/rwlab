META={id:'ctc1',k:'CTC',n:18,
 title:{en:'Lesson 18 · Cross-Text Connections',ko:'18강 · 두 지문 연결',zh:'第18课 · 双篇关联'},
 desc:{en:'One-line summary of each text, agree / disagree / qualify, responding to the exact claim',ko:'지문마다 한 줄 요약, 동의·반대·부분 동의, 정확한 주장에 대한 반응',zh:'每篇一句话概括、同意·反对·部分同意、针对确切的论点作回应'},
 endh:{en:'Lesson 18 complete',ko:'18강 완료',zh:'第18课完成'},
 endp:{en:'You have finished every lesson. Now take a full mock test to see your progress.',ko:'모든 강의를 마쳤어요. 이제 모의고사로 실력을 확인해 보세요.',zh:'所有课程都学完了。现在做一套完整的模拟考试，看看自己的进步。'}};
L={en:{one:'One line per text',rel:'What is the relationship?',agree:'Agree',dis:'Disagree',qual:'Qualify (partly agree)',exact:'Respond to the exact claim'},
 ko:{one:'지문마다 한 줄',rel:'두 지문의 관계는?',agree:'동의',dis:'반대',qual:'부분 동의 (조건을 붙임)',exact:'정확한 주장에 반응하기'},
 zh:{one:'每篇一句话',rel:'两篇是什么关系？',agree:'同意',dis:'反对',qual:'部分同意（加以限定）',exact:'针对确切的论点'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 7 · Craft and Structure</div><h2 class="h2" data-l="title"></h2>
 <div class="grid2"><div class="card h" id="i1"><b>Text 1</b><div class="small">… claim …</div></div><div class="card h" id="i2"><b>Text 2</b><div class="small">… response …</div></div></div>
 <div class="pass card h" id="i3" style="font-size:2cqw">Based on the texts, how would the author of Text 2 most likely respond to the <span class="hl">underlined claim</span> in Text 1?</div>`,
 b:[
 {en:"Welcome to Lesson 18, the last lesson. Cross-text questions give you two short passages on the same topic.",ko:"18강, 마지막 강의에 오신 걸 환영해요. 두 지문 연결 문제는 같은 주제의 짧은 지문 두 개를 줘요.",zh:"欢迎来到第18课，也是最后一课。双篇关联题会给你两篇同一话题的短文。",a:['in:#i1','in:#i2']},
 {en:"Most often, the question asks how the author of Text 2 would respond to a claim in Text 1.",ko:"대부분은 Text 2의 글쓴이가 Text 1의 주장에 어떻게 반응할지를 물어요.",zh:"最常见的问法是：Text 2 的作者会如何回应 Text 1 中的某个论点。",a:['in:#i3']},
 {en:"Two passages sound like double the work, but each one is short. The method keeps it simple.",ko:"지문이 두 개라 두 배로 힘들 것 같지만, 하나하나가 짧아요. 방법만 알면 간단해요.",zh:"两篇文章听起来工作量翻倍，但每篇都很短。掌握方法就很简单。"}]},
{id:'one',ch:{en:'One line each',ko:'한 줄 요약',zh:'一句话概括'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="one"></h2>
 <div class="grid2"><div class="pass card" style="font-size:1.85cqw"><b>Text 1</b> Many economists argue that <span class="hl">a four-day workweek raises productivity</span>, pointing to trials in which output stayed the same while hours fell.</div>
 <div class="pass card" style="font-size:1.85cqw"><b>Text 2</b> Sociologist Mira Chen studied the same trials. She found that output held steady in office jobs, but in hospitals and factories, shorter weeks led to staffing gaps and delays.</div></div>
 <div class="card h" id="o1" style="font-size:1.95cqw">T1: 4-day week → productivity up</div>
 <div class="card h" id="o2" style="font-size:1.95cqw">T2: true for offices, <b>not</b> for hospitals and factories</div>`,
 b:[
 {en:"Step one: summarize each text in one line. Text one: many economists say a four-day workweek raises productivity.",ko:"1단계, 지문마다 한 줄로 요약해요. Text 1: 많은 경제학자가 주 4일 근무가 생산성을 높인다고 해요.",zh:"第一步：每篇用一句话概括。Text 1：很多经济学家认为四天工作制能提高生产率。",a:['in:#o1']},
 {en:"Text two: Chen found it worked in offices, but not in hospitals and factories.",ko:"Text 2: Chen은 사무직에서는 효과가 있었지만 병원과 공장에서는 아니었다고 밝혔어요.",zh:"Text 2：Chen 发现它在办公室有效，但在医院和工厂无效。",a:['in:#o2']}]},
{id:'rel',ch:{en:'Relationship',ko:'관계',zh:'关系'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="rel"></h2>
 <div class="grid3"><div class="card h" id="r1" style="text-align:center"><div class="big-ic" style="font-size:4cqw">👍</div><b data-l="agree"></b></div><div class="card h" id="r2" style="text-align:center"><div class="big-ic" style="font-size:4cqw">👎</div><b data-l="dis"></b></div><div class="card h" id="r3" style="text-align:center;border-color:var(--ok)"><div class="big-ic" style="font-size:4cqw">🤏</div><b data-l="qual"></b></div></div>
 <div class="card h" id="r4" style="font-size:2cqw">Chen: “Yes, <b>but only</b> for some kinds of jobs.” → <b>qualify</b></div>`,
 b:[
 {en:"Step two: name the relationship. There are three common ones: agree, disagree, or qualify.",ko:"2단계, 관계에 이름을 붙여요. 흔한 관계는 세 가지예요. 동의, 반대, 또는 부분 동의.",zh:"第二步：说出两篇的关系。常见的有三种：同意、反对或部分同意。",a:['in:#r1','in:#r2','in:#r3']},
 {en:"Qualify means: partly agree, but add a limit. It is the most common answer on hard questions.",ko:"부분 동의는 일부는 동의하되 조건이나 한계를 덧붙이는 거예요. 어려운 문제에서 가장 흔한 정답이에요.",zh:"部分同意就是：部分赞同，但加上限制。这是难题中最常见的答案。"},
 {en:"Chen does not say the economists are wrong. She says they are right only for some jobs. That is qualifying.",ko:"Chen은 경제학자들이 틀렸다고 하지 않아요. 일부 직종에서만 맞다고 해요. 그게 부분 동의예요.",zh:"Chen 没有说经济学家错了。她说只对某些工作成立。这就是部分同意。",a:['in:#r4']}]},
{id:'exact',ch:{en:'The exact claim',ko:'정확한 주장',zh:'确切的论点'},html:`
 <div class="kick">Trap</div><h2 class="h2" data-l="exact"></h2>
 <div class="pass card h" id="e1" style="font-size:1.9cqw"><span class="lbl r">✗</span> Chen would argue that four-day weeks reduce stress for office workers. <span class="small">(T2 never discusses stress)</span></div>
 <div class="pass card h" id="e2" style="font-size:1.9cqw"><span class="lbl r">✗</span> Chen would reject the claim completely. <span class="small">(too strong)</span></div>
 <div class="pass card h" id="e3" style="font-size:1.9cqw"><span class="lbl g">✓</span> Chen would say the claim holds for some jobs but overlooks problems in others, such as hospitals.</div>`,
 b:[
 {en:"Now check the choices. The answer must respond to the exact claim, using only what Text 2 says.",ko:"이제 선택지를 확인해요. 정답은 정확한 주장에 대해, Text 2에 있는 내용만 가지고 반응해야 해요.",zh:"现在检查选项。答案必须针对确切的论点，而且只能用 Text 2 里说过的内容。"},
 {en:"'Four-day weeks reduce stress.' Text 2 never mentions stress. Eliminate.",ko:"'주 4일 근무는 스트레스를 줄인다.' Text 2는 스트레스를 언급한 적이 없어요. 지워요.",zh:"四天工作制能减轻压力。Text 2 从未提到压力。排除。",a:['in:#e1']},
 {en:"'Chen would reject the claim completely.' Too strong. She agreed for office jobs.",ko:"'Chen은 그 주장을 완전히 거부할 것이다.' 너무 강해요. 사무직에서는 동의했잖아요.",zh:"Chen 会完全否定这个论点。太强了，她在办公室工作上是同意的。",a:['in:#e2']},
 {en:"The right answer matches the qualify relationship: true for some jobs, but it overlooks problems in others.",ko:"정답은 부분 동의 관계와 맞아요. 일부 직종에서는 맞지만 다른 직종의 문제를 놓친다.",zh:"正确答案符合部分同意的关系：对某些工作成立，但忽略了其他工作中的问题。",a:['in:#e3']}]},
{id:'example',tight:1,ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="grid2"><div class="pass card" style="font-size:1.8cqw"><b>Text 1</b> Some historians claim that the printing press spread literacy quickly across Europe, since books became cheap almost overnight.</div>
 <div class="pass card" style="font-size:1.8cqw"><b>Text 2</b> Historian Paulo Reis notes that book prices did fall after 1450. Yet his study of parish records shows that literacy rates in most rural areas changed little for nearly two centuries, because few schools existed there.</div></div>
 <div class="choices" style="grid-template-columns:1fr;font-size:1.8cqw"><div id="x1">A) He would agree that literacy spread quickly everywhere.</div><div id="x2">B) He would argue that books did not become cheaper.</div><div id="x3">C) He would accept that books became cheaper but question whether literacy spread quickly, especially in rural areas.</div><div id="x4">D) He would claim that the printing press was invented later than 1450.</div></div>`,
 b:[
 {en:"Let's solve one. Text one: the printing press spread literacy quickly because books became cheap.",ko:"한 문제 풀어 봐요. Text 1: 책이 싸졌기 때문에 인쇄기가 문해력을 빠르게 퍼뜨렸다.",zh:"做一道题。Text 1：书变便宜了，所以印刷机让识字能力迅速普及。"},
 {en:"Text two: Reis agrees prices fell, but literacy in rural areas barely changed. That is a qualify relationship.",ko:"Text 2: Reis는 가격이 떨어진 건 인정하지만, 농촌의 문해율은 거의 변하지 않았다고 해요. 부분 동의 관계예요.",zh:"Text 2：Reis 承认价格下降了，但农村地区的识字率几乎没变。这是部分同意的关系。"},
 {en:"A ignores the rural data. B contradicts what Reis said about prices. D is never discussed. The answer is C.",ko:"A는 농촌 데이터를 무시해요. B는 가격에 대한 Reis의 말과 모순돼요. D는 다룬 적이 없어요. 정답은 C예요.",zh:"A 忽略了农村数据。B 与 Reis 关于价格的说法矛盾。D 文章没讨论过。答案是 C。",a:['add:#x1:x','add:#x2:x','add:#x4:x','add:#x3:o']},
 {q:{en:{q:'In the example, which word from Text 2 signals that Reis will qualify the claim?',o:['notes','Yet','because'],e:'“Yet” turns from agreement (prices did fall) to the limit (literacy barely changed in rural areas).'},
     ko:{q:'예시에서 Reis가 주장에 조건을 붙일 거라는 신호가 되는 Text 2의 단어는?',o:['notes','Yet','because'],e:'Yet이 동의(가격은 떨어졌다)에서 한계(농촌 문해율은 거의 변하지 않았다)로 방향을 바꿔요.'},
     zh:{q:'在例题中，Text 2 里哪个词表明 Reis 要对论点加以限定？',o:['notes','Yet','because'],e:'Yet 从同意（价格确实下降了）转向限制（农村识字率几乎没变）。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 18</h2>
 <ul class="sum card"><li class="h" id="z1">One line per text</li>
 <li class="h" id="z2">Agree · disagree · <b>qualify</b> (yes, but only …)</li>
 <li class="h" id="z3">Respond to the exact claim, using only Text 2</li>
 <li class="h" id="z4">Too strong or off-topic → eliminate</li></ul>`,
 b:[
 {en:"Let's review. Summarize each text in one line.",ko:"정리할게요. 지문마다 한 줄로 요약하세요.",zh:"我们来总结。每篇用一句话概括。",a:['in:#z1']},
 {en:"Name the relationship: agree, disagree, or qualify.",ko:"관계에 이름을 붙이세요. 동의, 반대, 또는 부분 동의.",zh:"说出关系：同意、反对或部分同意。",a:['in:#z2']},
 {en:"Respond to the exact claim, using only what Text 2 says.",ko:"Text 2에 있는 내용만으로 정확한 주장에 반응하세요.",zh:"只用 Text 2 的内容，针对确切的论点作回应。",a:['in:#z3']},
 {en:"And eliminate answers that are too strong or off-topic. Congratulations! You have finished every lesson. Now take a full mock test to see how far you have come.",ko:"그리고 너무 강하거나 주제를 벗어난 답은 지우세요. 축하해요! 모든 강의를 마쳤어요. 이제 모의고사로 얼마나 성장했는지 확인해 보세요.",zh:"排除过强或离题的选项。恭喜你！所有课程都学完了。现在做一套完整的模拟考试，看看自己进步了多少。",a:['in:#z4']}]}];
