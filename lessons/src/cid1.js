META={id:'cid1',k:'CID',n:13,
 title:{en:'Lesson 13 · Central Ideas & Details',ko:'13강 · 중심 생각과 세부 내용',zh:'第13课 · 中心思想与细节'},
 desc:{en:'Find the turn, summarize in one sentence, the 4 wrong-answer types, detail questions',ko:'전환점 찾기, 한 문장 요약, 오답 4유형, 세부 내용 문제',zh:'找转折点、一句话概括、四种错误选项、细节题'},
 endh:{en:'Lesson 13 complete',ko:'13강 완료',zh:'第13课完成'},
 endp:{en:'Practice writing a one-sentence summary before reading the choices.',ko:'선택지를 읽기 전에 한 문장 요약을 쓰는 연습을 해요.',zh:'练习在看选项前先写一句话概括。'}};
L={en:{turn:'Look for the turn',sum1:'Summarize in one sentence',wrong:'4 wrong-answer types',narrow:'Too narrow — one detail only',broad:'Too broad — bigger than the text',dist:'Distorted — right words, wrong relationship',out:'Outside — not in the text',detail:'Detail questions: find the line, then match'},
 ko:{turn:'전환점을 찾으세요',sum1:'한 문장으로 요약',wrong:'오답 4유형',narrow:'너무 좁음 — 세부 하나만',broad:'너무 넓음 — 지문보다 큼',dist:'왜곡 — 단어는 맞고 관계는 틀림',out:'지문 밖 — 지문에 없음',detail:'세부 문제: 해당 줄을 찾고 대조'},
 zh:{turn:'寻找转折点',sum1:'用一句话概括',wrong:'四种错误选项',narrow:'太窄——只涉及一个细节',broad:'太宽——超出文章范围',dist:'歪曲——词对了，关系错了',out:'文外——文章里没有',detail:'细节题：找到那一句，再对照'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 5 · Information and Ideas</div><h2 class="h2" data-l="title"></h2>
 <div class="pass card h" id="i1" style="font-size:2.1cqw">Which choice best states the <b>main idea</b> of the text?<br>According to the text, <b>why</b> did …?</div>`,
 b:[
 {en:"Welcome to Lesson 13. Now we move to reading. The first type asks for the main idea of a passage, or for a specific detail.",ko:"13강에 오신 걸 환영해요. 이제 독해로 넘어가요. 첫 유형은 지문의 중심 생각이나 특정 세부 내용을 물어요.",zh:"欢迎来到第13课。现在进入阅读。第一类题问文章的中心思想或某个具体细节。",a:['in:#i1']},
 {en:"The passages are short, so the challenge is not finding information. It is choosing the answer that matches the whole passage exactly.",ko:"지문이 짧아서 정보를 찾는 게 어렵진 않아요. 지문 전체와 정확히 맞는 답을 고르는 게 어려워요.",zh:"文章很短，所以难点不在于找信息，而在于选出与整篇文章完全吻合的答案。"}]},
{id:'turn',ch:{en:'Find the turn',ko:'전환점 찾기',zh:'找转折点'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="turn"></h2>
 <div class="pass card" style="font-size:2.1cqw"><span id="t1">For decades, scientists assumed that octopuses lived alone and avoided one another.</span> <span id="t2"><b>However</b>, divers off the coast of Australia recently found sites where dozens of octopuses live close together, sharing dens and even signaling to one another.</span> <span id="t3">These findings suggest that octopuses may be more social than once believed.</span></div>
 <div class="row"><span class="lbl s h" id="l1">old view</span><span class="lbl r h" id="l2">turn → new evidence</span><span class="lbl g h" id="l3">author’s point</span></div>`,
 b:[
 {en:"Many SAT passages follow the same pattern: an old view, a turn, and then the author's real point.",ko:"SAT 지문 상당수는 같은 패턴이에요. 예전 생각, 전환, 그리고 글쓴이의 진짜 요점.",zh:"很多SAT文章遵循同一个模式：旧观点、转折，然后是作者真正的观点。"},
 {en:"'For decades, scientists assumed that octopuses lived alone.' That is the old view.",ko:"'For decades, scientists assumed that octopuses lived alone.' 이게 예전 생각이에요.",zh:"For decades, scientists assumed that octopuses lived alone. 这是旧观点。",a:['add:#t1:hl','in:#l1']},
 {en:"'However, divers recently found sites where dozens of octopuses live close together.' 'However' is the turn.",ko:"'However, divers recently found sites where dozens of octopuses live close together.' however가 전환점이에요.",zh:"However, divers recently found sites where dozens of octopuses live close together. however 就是转折点。",a:['in:#l2']},
 {en:"'These findings suggest that octopuses may be more social than once believed.' That is the main idea. It usually comes after the turn.",ko:"'These findings suggest that octopuses may be more social than once believed.' 이게 중심 생각이에요. 보통 전환점 뒤에 와요.",zh:"These findings suggest that octopuses may be more social than once believed. 这就是中心思想，通常出现在转折之后。",a:['add:#t3:hl','in:#l3']}]},
{id:'summ',ch:{en:'One-sentence summary',ko:'한 문장 요약',zh:'一句话概括'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="sum1"></h2>
 <div class="card h" id="s1" style="font-size:2.3cqw">✍️ “Octopuses were thought to be loners, but new evidence suggests they may be social.”</div>
 <div class="card h" id="s2" style="font-size:2.1cqw">→ covers the <b>whole</b> passage, uses the author’s <b>level of certainty</b> (<i>may be</i>, <i>suggest</i>)</div>`,
 b:[
 {en:"Before reading the choices, say the main idea in one sentence of your own.",ko:"선택지를 읽기 전에 중심 생각을 내 말로 한 문장으로 말해 보세요.",zh:"看选项之前，先用自己的话一句话说出中心思想。"},
 {en:"'Octopuses were thought to be loners, but new evidence suggests they may be social.'",ko:"'문어는 혼자 산다고 여겨졌지만, 새로운 증거는 사회적일 수 있음을 보여 준다.'",zh:"人们曾认为章鱼独居，但新证据表明它们可能是群居的。",a:['in:#s1']},
 {en:"A good summary covers the whole passage and keeps the author's level of certainty. The passage says 'may be,' not 'definitely are.'",ko:"좋은 요약은 지문 전체를 담고, 글쓴이의 확신 정도도 그대로 유지해요. 지문은 '확실히 그렇다'가 아니라 'may be'라고 했어요.",zh:"好的概括覆盖整篇文章，并保留作者的确定程度。文章说的是 may be，而不是一定是。",a:['in:#s2']}]},
{id:'wrong',tight:1,ch:{en:'Wrong-answer types',ko:'오답 유형',zh:'错误选项类型'},html:`
 <div class="kick">Step 3</div><h2 class="h2" data-l="wrong"></h2>
 <div class="pass card h" id="w1" style="font-size:1.95cqw"><span class="lbl r" data-l="narrow"></span> Divers found octopuses sharing dens off the coast of Australia.</div>
 <div class="pass card h" id="w2" style="font-size:1.95cqw"><span class="lbl r" data-l="broad"></span> Most sea animals are more social than scientists believe.</div>
 <div class="pass card h" id="w3" style="font-size:1.95cqw"><span class="lbl r" data-l="dist"></span> Octopuses became social because divers studied them.</div>
 <div class="pass card h" id="w4" style="font-size:1.95cqw"><span class="lbl r" data-l="out"></span> Octopuses are the most intelligent invertebrates.</div>`,
 b:[
 {en:"Wrong answers usually fall into four types. Too narrow: it states one detail, not the main idea.",ko:"오답은 보통 네 가지 유형이에요. 너무 좁은 것: 중심 생각이 아니라 세부 하나만 말해요.",zh:"错误选项通常有四种。太窄：只说了一个细节，不是中心思想。",a:['in:#w1']},
 {en:"Too broad: it goes beyond the passage. The passage is about octopuses, not most sea animals.",ko:"너무 넓은 것: 지문 범위를 넘어가요. 지문은 대부분의 바다 동물이 아니라 문어에 관한 거예요.",zh:"太宽：超出文章范围。文章讲的是章鱼，不是大多数海洋动物。",a:['in:#w2']},
 {en:"Distorted: it uses words from the passage but changes the relationship. The divers did not make octopuses social.",ko:"왜곡: 지문의 단어를 쓰지만 관계를 바꿔요. 잠수부가 문어를 사회적으로 만든 게 아니에요.",zh:"歪曲：用了文章里的词，但改变了关系。潜水员并没有让章鱼变得群居。",a:['in:#w3']},
 {en:"Outside: it may be true in real life, but the passage never says it.",ko:"지문 밖: 현실에서는 맞을 수도 있지만 지문에는 없는 말이에요.",zh:"文外：现实中可能是真的，但文章没有这么说。",a:['in:#w4']}]},
{id:'detail',ch:{en:'Detail questions',ko:'세부 문제',zh:'细节题'},html:`
 <div class="kick">Step 4</div><h2 class="h2" data-l="detail"></h2>
 <div class="pass card h" id="d1" style="font-size:2.1cqw">According to the text, what did the divers observe? → find: <i>“sharing dens and even signaling to one another”</i></div>
 <div class="card h" id="d2" style="font-size:2.1cqw">✓ Octopuses living near one another and communicating &nbsp; (paraphrase)</div>`,
 b:[
 {en:"Detail questions ask about one specific point. 'According to the text, what did the divers observe?'",ko:"세부 문제는 특정한 한 가지를 물어요. 'According to the text, what did the divers observe?'",zh:"细节题问的是某一个具体点。According to the text, what did the divers observe?",a:['in:#d1']},
 {en:"Go back and find the exact line. Then choose the answer that says the same thing in different words.",ko:"돌아가서 해당 줄을 정확히 찾으세요. 그리고 같은 내용을 다른 말로 표현한 답을 고르세요.",zh:"回到原文找到那一句。然后选择用不同措辞表达相同意思的答案。",a:['in:#d2']},
 {en:"Never answer from memory. Short passages make it easy to check, so always check.",ko:"기억에 의존해 답하지 마세요. 지문이 짧아서 확인하기 쉬우니 항상 확인하세요.",zh:"永远不要凭记忆作答。文章很短，检查很容易，所以一定要检查。"}]},
{id:'example',tight:1,ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:1.95cqw">Many people assume that the first maps were drawn to help travelers find their way. Historian Lena Fischer argues that this view is incomplete. Studying clay tablets from ancient Mesopotamia, she found that early maps often recorded who owned which fields. In her view, these maps were tools for settling land disputes as much as for travel.</div>
 <div class="choices" style="grid-template-columns:1fr;font-size:1.85cqw"><div id="x1">A) Ancient Mesopotamians used clay tablets for many purposes.</div><div id="x2">B) Fischer argues that early maps also served to record land ownership, not only to guide travelers.</div><div id="x3">C) Early maps were never used by travelers.</div><div id="x4">D) Land disputes were common in ancient Mesopotamia.</div></div>`,
 b:[
 {en:"Let's solve one. The old view: maps were for travelers. The turn: Fischer says this view is incomplete.",ko:"한 문제 풀어 봐요. 예전 생각은 지도가 여행자를 위한 것이라는 거예요. 전환점에서 Fischer는 그 생각이 불완전하다고 말해요.",zh:"做一道题。旧观点：地图是给旅行者用的。转折：Fischer 认为这个观点不完整。"},
 {en:"Summary: Fischer argues early maps were also used to record who owned land. Note the word 'also.' She did not say travel was wrong, only incomplete.",ko:"요약하면, Fischer는 초기 지도가 땅 주인을 기록하는 데도 쓰였다고 주장해요. 'also'에 주목하세요. 여행용이 틀렸다는 게 아니라 불완전하다는 거예요.",zh:"概括：Fischer 认为早期地图也被用来记录土地归属。注意 also 这个词。她没有说旅行用途是错的，只是说不完整。"},
 {en:"A is too broad. C is distorted: she never said 'never.' D is a detail at most. The answer is B.",ko:"A는 너무 넓어요. C는 왜곡이에요. never라고 한 적이 없어요. D는 기껏해야 세부예요. 정답은 B예요.",zh:"A 太宽。C 是歪曲，她从没说过 never。D 最多算一个细节。答案是 B。",a:['add:#x1:x','add:#x3:x','add:#x4:x','add:#x2:o']},
 {q:{en:{q:'Why is choice C (“Early maps were never used by travelers”) wrong?',o:['It is too narrow','It changes “incomplete” into “completely wrong”','It is about a different country'],e:'Fischer says the travel view is incomplete, not false. Turning “also” into “never” is a distortion of the author’s claim.'},
     ko:{q:'C(“Early maps were never used by travelers”)가 오답인 이유는?',o:['너무 좁아서','"불완전하다"를 "완전히 틀렸다"로 바꿔서','다른 나라에 관한 내용이라서'],e:'Fischer는 여행용이라는 견해가 틀렸다는 게 아니라 불완전하다고 했어요. also를 never로 바꾸면 글쓴이의 주장을 왜곡한 거예요.'},
     zh:{q:'为什么选项C（“Early maps were never used by travelers”）是错的？',o:['它太窄了','它把“不完整”变成了“完全错误”','它讲的是另一个国家'],e:'Fischer 说旅行用途的观点不完整，而不是错误。把 also 变成 never 是对作者观点的歪曲。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 13</h2>
 <ul class="sum card"><li class="h" id="z1">old view → <b>however</b> → author’s point</li>
 <li class="h" id="z2">Your one-sentence summary first · keep the author’s certainty</li>
 <li class="h" id="z3">Eliminate: too narrow · too broad · distorted · outside</li>
 <li class="h" id="z4">Detail → find the line → match the paraphrase</li></ul>`,
 b:[
 {en:"Let's review. Look for the turn. The main idea usually comes after it.",ko:"정리할게요. 전환점을 찾으세요. 중심 생각은 보통 그 뒤에 와요.",zh:"我们来总结。寻找转折点，中心思想通常在它后面。",a:['in:#z1']},
 {en:"Summarize in one sentence before reading the choices, and keep the author's level of certainty.",ko:"선택지를 읽기 전에 한 문장으로 요약하고, 글쓴이의 확신 정도를 지키세요.",zh:"看选项前先用一句话概括，并保留作者的确定程度。",a:['in:#z2']},
 {en:"Eliminate answers that are too narrow, too broad, distorted, or outside the passage.",ko:"너무 좁거나, 너무 넓거나, 왜곡됐거나, 지문 밖인 답을 지우세요.",zh:"排除太窄、太宽、歪曲或文外的选项。",a:['in:#z3']},
 {en:"For details, find the line and match. Next lesson: text structure and purpose. See you in Lesson 14!",ko:"세부 문제는 해당 줄을 찾아 대조하세요. 다음은 글의 구조와 목적이에요. 14강에서 만나요!",zh:"细节题就找到那一句来对照。下一课：文章结构与目的。第14课见！",a:['in:#z4']}]}];
