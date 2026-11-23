META={id:'cot1',k:'COT',n:15,
 title:{en:'Lesson 15 · Command of Evidence: Text',ko:'15강 · 근거 찾기: 글',zh:'第15课 · 证据题：文本'},
 desc:{en:'Find the exact claim, split it into parts, support vs. weaken, quotation questions',ko:'정확한 주장 찾기, 주장을 부분으로 쪼개기, 지지와 약화, 인용문 문제',zh:'找准论点、把论点拆成几部分、支持与削弱、引文题'},
 endh:{en:'Lesson 15 complete',ko:'15강 완료',zh:'第15课完成'},
 endp:{en:'Practice splitting every claim into parts before you read the choices.',ko:'선택지를 읽기 전에 주장을 부분으로 쪼개는 연습을 해요.',zh:'练习在看选项前把每个论点拆成几部分。'}};
L={en:{claim:'Find the exact claim',split:'Split the claim into parts',all:'The answer must match every part',sw:'Support or weaken?',quote:'Quotation questions'},
 ko:{claim:'정확한 주장 찾기',split:'주장을 부분으로 쪼개기',all:'정답은 모든 부분과 맞아야 함',sw:'지지인가, 약화인가?',quote:'인용문 문제'},
 zh:{claim:'找准论点',split:'把论点拆成几部分',all:'答案必须符合每一部分',sw:'支持还是削弱？',quote:'引文题'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 6 · Information and Ideas</div><h2 class="h2" data-l="title"></h2>
 <div class="pass card h" id="i1" style="font-size:2.1cqw">Which finding, if true, would most directly <b>support</b> the researchers’ hypothesis?<br>Which quotation from the poem most effectively <b>illustrates</b> the claim?</div>`,
 b:[
 {en:"Welcome to Lesson 15. Evidence questions give you a claim and ask which choice supports it, weakens it, or illustrates it.",ko:"15강에 오신 걸 환영해요. 근거 문제는 주장을 하나 주고, 어떤 선택지가 그걸 지지하는지, 약화하는지, 보여 주는지 물어요.",zh:"欢迎来到第15课。证据题给你一个论点，问哪个选项支持、削弱或说明它。",a:['in:#i1']},
 {en:"The wrong choices are usually on topic. They mention the right subject but do not prove the exact claim.",ko:"오답은 대개 주제와 관련 있어요. 맞는 대상을 언급하지만 정확한 주장을 증명하지는 못해요.",zh:"错误选项通常都切题。它们提到了正确的对象，但证明不了确切的论点。"}]},
{id:'claim',ch:{en:'Find the claim',ko:'주장 찾기',zh:'找论点'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="claim"></h2>
 <div class="pass card" style="font-size:2cqw">Researchers studying honeybees noticed that hives near city parks produced more honey than hives on farms. <span class="hl" id="c1">They hypothesized that the greater variety of flowering plants in parks, rather than the number of plants, explains the difference.</span></div>
 <div class="card h" id="c2" style="font-size:2.1cqw">Claim = <b>variety</b> of plants (not number) → more honey</div>`,
 b:[
 {en:"First, find the exact claim. It is usually marked by words like 'hypothesized,' 'argues,' or 'claims.'",ko:"먼저 정확한 주장을 찾으세요. 보통 hypothesized, argues, claims 같은 말로 표시돼요.",zh:"首先找准论点。它通常由 hypothesized、argues、claims 这类词标出。",a:['add:#c1:hl']},
 {en:"'They hypothesized that the greater variety of flowering plants in parks, rather than the number of plants, explains the difference.'",ko:"'They hypothesized that the greater variety of flowering plants in parks, rather than the number of plants, explains the difference.'",zh:"They hypothesized that the greater variety of flowering plants in parks, rather than the number of plants, explains the difference."},
 {en:"Rewrite it in your words: variety, not number, leads to more honey. 'Rather than' is important. It tells us what the claim is not.",ko:"내 말로 바꿔 보세요. 개수가 아니라 다양성이 꿀을 더 많이 만든다. 'rather than'이 중요해요. 주장이 무엇이 아닌지 알려 주니까요.",zh:"用自己的话改写：是多样性而不是数量，带来了更多蜂蜜。rather than 很重要，它告诉我们论点不是什么。",a:['in:#c2']}]},
{id:'split',ch:{en:'Split into parts',ko:'부분으로 쪼개기',zh:'拆分论点'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="all"></h2>
 <div class="pass card h" id="s1" style="font-size:1.95cqw"><span class="lbl r">✗</span> Park hives were surrounded by more plants in total than farm hives. <span class="small">(number, not variety)</span></div>
 <div class="pass card h" id="s2" style="font-size:1.95cqw"><span class="lbl r">✗</span> Bees in parks visited flowers more often in the morning. <span class="small">(on topic, but no link to honey)</span></div>
 <div class="pass card h" id="s3" style="font-size:1.95cqw"><span class="lbl g">✓</span> Farm hives placed near fields with many different flower species produced as much honey as park hives, even with fewer plants overall.</div>`,
 b:[
 {en:"The right answer must match every part of the claim: variety, not number, and more honey.",ko:"정답은 주장의 모든 부분과 맞아야 해요. 다양성, 개수가 아님, 그리고 꿀이 더 많음.",zh:"正确答案必须符合论点的每一部分：多样性、不是数量、蜂蜜更多。"},
 {en:"'Park hives were surrounded by more plants in total.' That is about number, the opposite of the claim.",ko:"'Park hives were surrounded by more plants in total.' 이건 개수에 관한 거라서 주장과 반대예요.",zh:"Park hives were surrounded by more plants in total. 这说的是数量，与论点相反。",a:['in:#s1']},
 {en:"'Bees in parks visited flowers more often in the morning.' On topic, but it says nothing about variety or honey.",ko:"'Bees in parks visited flowers more often in the morning.' 주제와는 관련 있지만 다양성이나 꿀에 대해선 말이 없어요.",zh:"Bees in parks visited flowers more often in the morning. 切题，但没有提到多样性或蜂蜜。",a:['in:#s2']},
 {en:"'Farm hives near many different flower species produced as much honey, even with fewer plants.' Variety without number still gave more honey. That directly supports the claim.",ko:"'Farm hives near many different flower species produced as much honey, even with fewer plants.' 개수는 적어도 다양성이 있으니 꿀이 많았어요. 주장을 직접 지지해요.",zh:"Farm hives near many different flower species produced as much honey, even with fewer plants. 数量少但种类多，蜂蜜照样多。这直接支持了论点。",a:['in:#s3']}]},
{id:'weaken',ch:{en:'Support or weaken',ko:'지지와 약화',zh:'支持与削弱'},html:`
 <div class="kick">Step 3</div><h2 class="h2" data-l="sw"></h2>
 <div class="grid2"><div class="card h" id="w1"><b style="color:var(--ok)">support</b><div class="small">the claim predicts it → it happened</div></div><div class="card h" id="w2"><b style="color:var(--bad)">weaken</b><div class="small">the claim predicts it → the opposite happened</div></div></div>
 <div class="pass card h" id="w3" style="font-size:1.95cqw"><b>Weaken:</b> Hives near parks with only one type of flower produced just as much honey as other park hives.</div>`,
 b:[
 {en:"Read the question carefully. Some ask which finding would weaken the claim.",ko:"질문을 꼼꼼히 읽으세요. 주장을 약화하는 결과를 묻는 문제도 있어요.",zh:"仔细读题。有些题问的是哪个发现会削弱论点。"},
 {en:"Ask: if the claim were true, what would we expect to see? Support means it happened. Weaken means the opposite happened.",ko:"이렇게 물어보세요. 주장이 맞다면 어떤 결과가 나와야 할까? 그게 나오면 지지, 반대가 나오면 약화예요.",zh:"问自己：如果论点成立，我们应该看到什么？出现了就是支持，出现相反情况就是削弱。",a:['in:#w1','in:#w2']},
 {en:"If park hives with only one type of flower made just as much honey, variety would not matter. That weakens the claim.",ko:"꽃이 한 종류뿐인 공원 근처 벌통도 꿀을 똑같이 만들었다면, 다양성은 중요하지 않은 거예요. 주장을 약화해요.",zh:"如果只有一种花的公园附近的蜂巢也产了同样多的蜂蜜，那多样性就不重要了。这削弱了论点。",a:['in:#w3']}]},
{id:'quote',ch:{en:'Quotation questions',ko:'인용문 문제',zh:'引文题'},html:`
 <div class="kick">Step 4</div><h2 class="h2" data-l="quote"></h2>
 <div class="pass card" style="font-size:2cqw">Claim: In the poem, the speaker describes the city as both <span class="hl">exhausting</span> and <span class="hl">thrilling</span>.</div>
 <div class="pass card h" id="q1" style="font-size:1.95cqw"><span class="lbl r">✗</span> “The streets are loud, the hours are long” <span class="small">(exhausting only)</span></div>
 <div class="pass card h" id="q2" style="font-size:1.95cqw"><span class="lbl g">✓</span> “Each night I drag my tired feet, / and still my heart runs wild with every light” <span class="small">(both)</span></div>`,
 b:[
 {en:"For literature, the question gives a claim about a poem or a story and asks which quotation illustrates it.",ko:"문학 지문에서는 시나 소설에 대한 주장을 주고, 그걸 보여 주는 인용문을 고르라고 해요.",zh:"文学类文章会给出关于诗歌或小说的论点，让你选能说明它的引文。"},
 {en:"These claims often have two parts. Here, the city is both exhausting and thrilling.",ko:"이런 주장은 두 부분인 경우가 많아요. 여기서는 도시가 지치게 하면서도 설레게 한다는 거예요.",zh:"这类论点常常有两部分。这里是说城市既令人疲惫又令人兴奋。"},
 {en:"A quotation that shows only the tiring side matches half the claim. That is a trap.",ko:"지치는 면만 보여 주는 인용문은 주장의 절반만 맞아요. 함정이에요.",zh:"只表现疲惫一面的引文只符合一半论点，这是陷阱。",a:['in:#q1']},
 {en:"The right quotation shows both: tired feet, and a heart running wild. Always check every part.",ko:"맞는 인용문은 둘 다 보여 줘요. 지친 발, 그리고 설레는 마음. 항상 모든 부분을 확인하세요.",zh:"正确的引文两方面都有：疲惫的双脚，和狂跳的心。一定要检查每一部分。",a:['in:#q2']},
 {q:{en:{q:'A claim says a character is “proud of her work but worried it will be forgotten.” Which quotation fits best?',o:['“She smiled at the finished quilt.”','“She smiled at the finished quilt, then wondered who would remember it in fifty years.”','“She wondered who would remember anything.”'],e:'Only B shows both parts: pride (smiled at the finished quilt) and worry about being forgotten.'},
     ko:{q:'어떤 주장이 인물이 "자기 작품을 자랑스러워하지만 잊힐까 걱정한다"고 해요. 가장 알맞은 인용문은?',o:['“She smiled at the finished quilt.”','“She smiled at the finished quilt, then wondered who would remember it in fifty years.”','“She wondered who would remember anything.”'],e:'B만 두 부분을 모두 보여 줘요. 자부심(완성된 퀼트를 보며 미소)과 잊힐까 하는 걱정이요.'},
     zh:{q:'论点说某个人物“为自己的作品自豪，但担心它会被遗忘”。哪句引文最合适？',o:['“She smiled at the finished quilt.”','“She smiled at the finished quilt, then wondered who would remember it in fifty years.”','“She wondered who would remember anything.”'],e:'只有 B 同时体现了两部分：自豪（对着完成的被子微笑）和担心被遗忘。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 15</h2>
 <ul class="sum card"><li class="h" id="z1">Find the exact claim · watch <i>rather than, only, more than</i></li>
 <li class="h" id="z2">Split it into parts → the answer matches every part</li>
 <li class="h" id="z3">On topic ≠ evidence</li>
 <li class="h" id="z4">Support = predicted result happened · weaken = the opposite</li></ul>`,
 b:[
 {en:"Let's review. Find the exact claim, and pay attention to limiting words like 'rather than' and 'only.'",ko:"정리할게요. 정확한 주장을 찾고, rather than이나 only 같은 범위를 정하는 말에 주의하세요.",zh:"我们来总结。找准论点，注意 rather than、only 这类限定词。",a:['in:#z1']},
 {en:"Split the claim into parts. The answer must match every part.",ko:"주장을 부분으로 쪼개세요. 정답은 모든 부분과 맞아야 해요.",zh:"把论点拆成几部分。答案必须符合每一部分。",a:['in:#z2']},
 {en:"Being on topic is not the same as being evidence.",ko:"주제와 관련 있다고 근거가 되는 건 아니에요.",zh:"切题不等于是证据。",a:['in:#z3']},
 {en:"And for support or weaken, ask what the claim predicts. Next lesson: evidence from tables and graphs. See you in Lesson 16!",ko:"지지와 약화는 주장이 무엇을 예측하는지 물어보세요. 다음은 표와 그래프 속 근거예요. 16강에서 만나요!",zh:"支持或削弱题，就问论点预测了什么。下一课：图表中的证据。第16课见！",a:['in:#z4']}]}];
