META={id:'tsp1',k:'TSP',n:14,
 title:{en:'Lesson 14 · Text Structure & Purpose',ko:'14강 · 글의 구조와 목적',zh:'第14课 · 文章结构与目的'},
 desc:{en:'Label each sentence’s job, main purpose vs. function of one sentence, matching the verb in the answer',ko:'문장마다 역할 붙이기, 전체 목적과 한 문장의 기능, 답의 동사 맞추기',zh:'给每句话标注作用、整体目的与单句功能、匹配答案中的动词'},
 endh:{en:'Lesson 14 complete',ko:'14강 완료',zh:'第14课完成'},
 endp:{en:'Practice labeling each sentence with a job word in the margin of your mind.',ko:'문장마다 머릿속으로 역할 단어를 붙이는 연습을 해요.',zh:'练习在心里给每句话标注一个作用词。'}};
L={en:{jobs:'Sentence jobs',label:'Label every sentence',verb:'Match the verb first',func:'Function of one sentence → look before and after'},
 ko:{jobs:'문장의 역할',label:'모든 문장에 역할 붙이기',verb:'동사부터 맞추기',func:'한 문장의 기능 → 앞뒤를 보기'},
 zh:{jobs:'句子的作用',label:'给每句话贴标签',verb:'先匹配动词',func:'单句功能 → 看前后文'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 5 · Craft and Structure</div><h2 class="h2" data-l="title"></h2>
 <div class="pass card h" id="i1" style="font-size:2.1cqw">Which choice best states the <b>main purpose</b> of the text?<br>Which choice best describes the <b>function of the underlined sentence</b>?<br>Which choice best describes the <b>overall structure</b> of the text?</div>`,
 b:[
 {en:"Welcome to Lesson 14. These questions do not ask what the passage says. They ask what the writer is doing.",ko:"14강에 오신 걸 환영해요. 이 유형은 지문이 무엇을 말하는지가 아니라, 글쓴이가 무엇을 하고 있는지를 물어요.",zh:"欢迎来到第14课。这类题问的不是文章说了什么，而是作者在做什么。"},
 {en:"There are three versions: the main purpose, the function of one underlined sentence, and the overall structure.",ko:"세 가지 형태가 있어요. 전체 목적, 밑줄 친 한 문장의 기능, 그리고 전체 구조예요.",zh:"有三种问法：整体目的、画线句的功能，以及整体结构。",a:['in:#i1']},
 {en:"One tool solves all three: label the job of each sentence.",ko:"하나의 도구로 셋 다 풀려요. 문장마다 역할을 붙이는 거예요.",zh:"一个工具就能解决这三种题：给每句话标注它的作用。"}]},
{id:'jobs',ch:{en:'Sentence jobs',ko:'문장의 역할',zh:'句子的作用'},html:`
 <div class="kick">Toolkit</div><h2 class="h2" data-l="jobs"></h2>
 <div class="chips h" id="j1" style="gap:1.2cqw"><span class="chip">introduces a topic</span><span class="chip">describes</span><span class="chip">gives an example</span><span class="chip">explains a cause</span><span class="chip y">presents a common view</span><span class="chip y">challenges / corrects it</span><span class="chip">compares</span><span class="chip">offers evidence</span><span class="chip">concludes</span><span class="chip">raises a question</span></div>`,
 b:[
 {en:"Here are the jobs a sentence can do: introduce a topic, describe, give an example, explain a cause, compare, offer evidence, conclude, or raise a question.",ko:"문장이 할 수 있는 역할은 이런 것들이에요. 주제 소개, 묘사, 예시, 원인 설명, 비교, 근거 제시, 결론, 질문 제기.",zh:"句子可以承担的作用有：引出话题、描述、举例、解释原因、比较、提供证据、总结、提出问题。",a:['in:#j1']},
 {en:"Two jobs appear very often on the SAT: presenting a common view, and then challenging or correcting it. You saw this pattern in Lesson 13.",ko:"SAT에서 특히 자주 나오는 역할은 두 가지예요. 흔한 견해를 제시하고, 그걸 반박하거나 바로잡는 거예요. 13강에서 본 패턴이죠.",zh:"SAT中特别常见的两个作用是：提出一个普遍观点，然后质疑或纠正它。第13课里你见过这个模式。"}]},
{id:'label',tight:1,ch:{en:'Label every sentence',ko:'역할 붙이기',zh:'贴标签'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="label"></h2>
 <div class="pass card" style="font-size:1.95cqw"><b>(1)</b> Glaciers are often pictured as frozen, motionless sheets of ice. <b>(2)</b> <u>In fact, they flow downhill, some moving several meters a day.</u> <b>(3)</b> This movement carves deep valleys and carries boulders hundreds of kilometers. <b>(4)</b> Understanding glacier flow therefore helps geologists read the history of a landscape.</div>
 <div class="grid2" style="gap:.6cqw 2cqw"><div class="fix h" id="l1"><b class="n">1</b><span>common view</span></div><div class="fix h" id="l2"><b class="n">2</b><span>corrects it</span></div><div class="fix h" id="l3"><b class="n">3</b><span>describes effects</span></div><div class="fix h" id="l4"><b class="n">4</b><span>explains why it matters</span></div></div>`,
 b:[
 {en:"Let's label a passage. Sentence one: glaciers are often pictured as motionless. That is a common view.",ko:"지문에 역할을 붙여 봐요. 1번 문장: 빙하는 흔히 움직이지 않는다고 생각돼요. 흔한 견해예요.",zh:"给一篇文章贴标签。第1句：冰川常被认为是静止的。这是普遍观点。",a:['in:#l1']},
 {en:"Sentence two: 'In fact, they flow downhill.' It corrects the common view.",ko:"2번 문장: 'In fact, they flow downhill.' 흔한 견해를 바로잡아요.",zh:"第2句：In fact, they flow downhill. 纠正了普遍观点。",a:['in:#l2']},
 {en:"Sentence three describes the effects of that movement. Sentence four explains why it matters.",ko:"3번 문장은 그 움직임의 결과를 설명하고, 4번 문장은 그게 왜 중요한지 설명해요.",zh:"第3句描述这种运动的影响。第4句解释它为什么重要。",a:['in:#l3','in:#l4']},
 {en:"Now the structure question is easy: it presents a misconception, corrects it, describes effects, and states its importance.",ko:"이제 구조 문제는 쉬워요. 오해를 제시하고, 바로잡고, 결과를 설명하고, 중요성을 말해요.",zh:"现在结构题就简单了：提出误解、纠正它、描述影响、说明重要性。"},
 {q:{en:{q:'What is the function of the underlined sentence (2)?',o:['It gives an example of a glacier that has stopped moving.','It corrects the view described in the first sentence.','It explains how geologists measure glaciers.'],e:'Sentence 1 says glaciers seem motionless. Sentence 2, starting with “In fact,” corrects that view.'},
     ko:{q:'밑줄 친 문장 (2)의 기능은?',o:['움직임을 멈춘 빙하의 예를 든다.','첫 문장의 견해를 바로잡는다.','지질학자가 빙하를 측정하는 방법을 설명한다.'],e:'1번 문장은 빙하가 움직이지 않는 것 같다고 해요. In fact로 시작하는 2번 문장이 그 견해를 바로잡아요.'},
     zh:{q:'画线句（2）的作用是什么？',o:['举出一个已停止移动的冰川的例子。','纠正第一句所描述的观点。','解释地质学家如何测量冰川。'],e:'第1句说冰川看似静止。以 In fact 开头的第2句纠正了这个观点。'},a:1}}]},
{id:'verb',ch:{en:'Match the verb',ko:'동사 맞추기',zh:'匹配动词'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="verb"></h2>
 <table class="tbl h" id="v1" style="width:100%"><tr><th>answer starts with</th><th>passage must …</th></tr>
 <tr><td><b>describe / explain</b></td><td>inform, no strong opinion</td></tr><tr><td><b>argue / advocate</b></td><td>take a clear side</td></tr><tr><td><b>challenge / dispute</b></td><td>push back on a view</td></tr><tr><td><b>compare</b></td><td>discuss two things</td></tr></table>
 <div class="card h" id="v2" style="font-size:2.1cqw">Glacier passage → <b>explain</b> ✓ &nbsp; <b>argue</b> that glaciers should be protected ✗</div>`,
 b:[
 {en:"For main purpose questions, look at the first word of each answer choice: the verb.",ko:"전체 목적 문제에서는 선택지마다 첫 단어, 즉 동사를 보세요.",zh:"整体目的题要看每个选项的第一个词，也就是动词。",a:['in:#v1']},
 {en:"If the passage just informs, the answer says describe or explain. If it takes a side, argue. If it pushes back on a view, challenge.",ko:"지문이 정보만 전달하면 describe나 explain, 한쪽 편을 들면 argue, 어떤 견해에 반박하면 challenge예요.",zh:"如果文章只是提供信息，答案会用 describe 或 explain；如果表明立场，用 argue；如果反驳某种观点，用 challenge。"},
 {en:"The glacier passage explains. A choice that says it argues glaciers should be protected uses the wrong verb, even though it sounds reasonable.",ko:"빙하 지문은 설명하는 글이에요. 빙하를 보호해야 한다고 주장한다는 선택지는 그럴듯해 보여도 동사가 틀렸어요.",zh:"冰川那篇是说明性的。说它主张应该保护冰川的选项，听起来合理，但动词错了。",a:['in:#v2']}]},
{id:'func',ch:{en:'One sentence',ko:'한 문장의 기능',zh:'单句功能'},html:`
 <div class="kick">Step 3</div><h2 class="h2" data-l="func"></h2>
 <div class="cars h" id="f1" style="font-size:2cqw"><div class="car">sentence before</div><div class="link" style="color:var(--pri)">←</div><div class="car" style="border-color:var(--warn);background:#fff8e1">underlined</div><div class="link" style="color:var(--pri)">→</div><div class="car">sentence after</div></div>
 <div class="card h" id="f2" style="font-size:2.1cqw">Does it support, contrast, give an example of, or explain the cause of the sentence next to it?</div>`,
 b:[
 {en:"For the function of one underlined sentence, you cannot judge it alone. Read the sentence before and the sentence after.",ko:"밑줄 친 한 문장의 기능은 그 문장만 봐서는 알 수 없어요. 앞 문장과 뒤 문장을 읽으세요.",zh:"画线句的作用不能孤立判断。要读它前面和后面的句子。",a:['in:#f1']},
 {en:"Then ask: does it support the sentence before? Contrast with it? Give an example? Explain a cause?",ko:"그리고 물어요. 앞 문장을 뒷받침하나? 대조하나? 예를 드나? 원인을 설명하나?",zh:"然后问：它是在支持前一句？与之对比？举例？还是解释原因？",a:['in:#f2']},
 {en:"Wrong answers often describe the content of the sentence correctly but give it the wrong job.",ko:"오답은 그 문장의 내용은 맞게 말하지만 역할을 잘못 짚는 경우가 많아요.",zh:"错误选项往往正确描述了句子的内容，却说错了它的作用。"}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:1.95cqw">Urban planners have long treated street trees mainly as decoration. A 2021 study of three cities, however, found that blocks with dense tree cover were up to 4°C cooler in summer than nearby blocks without trees. The researchers also recorded lower energy use for air conditioning on the shaded blocks. Trees, the study suggests, may be essential city infrastructure.</div>
 <div class="choices" style="grid-template-columns:1fr;font-size:1.85cqw"><div id="x1">A) To describe how planners choose which trees to plant</div><div id="x2">B) To present findings that challenge the view that street trees are mainly decorative</div><div id="x3">C) To argue that air conditioning should be banned in cities</div><div id="x4">D) To compare the climates of three cities</div></div>`,
 b:[
 {en:"Let's solve one. Label it. Sentence one: a common view, trees are decoration. Sentence two: 'however,' a study found cooler blocks.",ko:"한 문제 풀어 봐요. 역할을 붙여요. 1번: 흔한 견해, 나무는 장식이다. 2번: however, 연구에서 더 시원한 구역이 발견됐어요.",zh:"做一道题。贴标签。第1句：普遍观点，树只是装饰。第2句：however，研究发现有树的街区更凉爽。"},
 {en:"Sentence three adds more evidence. Sentence four concludes that trees may be essential. So the passage presents evidence that challenges a view.",ko:"3번은 근거를 더하고, 4번은 나무가 필수일 수 있다고 결론 내려요. 그러니까 견해에 도전하는 근거를 제시하는 글이에요.",zh:"第3句补充证据，第4句得出结论：树可能是必不可少的。所以这篇文章是在提出挑战某种观点的证据。"},
 {en:"A and D are not discussed. C goes much too far. The answer is B.",ko:"A와 D는 지문에서 다루지 않아요. C는 너무 지나쳐요. 정답은 B예요.",zh:"A 和 D 文章没有讨论。C 走得太远了。答案是 B。",a:['add:#x1:x','add:#x3:x','add:#x4:x','add:#x2:o']}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 14</h2>
 <ul class="sum card"><li class="h" id="z1">Label every sentence with a job</li>
 <li class="h" id="z2">common view → <i>however / in fact</i> → correction</li>
 <li class="h" id="z3">Purpose: match the verb (describe · argue · challenge · compare)</li>
 <li class="h" id="z4">One sentence: read before and after → what job?</li></ul>`,
 b:[
 {en:"Let's review. Label every sentence with a job.",ko:"정리할게요. 모든 문장에 역할을 붙이세요.",zh:"我们来总结。给每句话贴上作用标签。",a:['in:#z1']},
 {en:"Watch for the common view followed by a correction.",ko:"흔한 견해 다음에 오는 바로잡기를 주의해서 보세요.",zh:"注意普遍观点后面紧跟的纠正。",a:['in:#z2']},
 {en:"For purpose, match the verb first.",ko:"목적 문제는 동사부터 맞추세요.",zh:"目的题先匹配动词。",a:['in:#z3']},
 {en:"For one sentence, read the sentences around it. Next lesson: textual evidence. See you in Lesson 15!",ko:"한 문장의 기능은 주변 문장을 읽으세요. 다음은 글 속 근거 찾기예요. 15강에서 만나요!",zh:"单句功能题要读它周围的句子。下一课：文本证据。第15课见！",a:['in:#z4']}]}];
