META={id:'inf1',k:'INF',n:17,
 title:{en:'Lesson 17 · Inferences',ko:'17강 · 추론',zh:'第17课 · 推理'},
 desc:{en:'The blank is a conclusion, “must be true” vs. “could be true”, following the passage’s logic, avoiding extreme answers',ko:'빈칸은 결론, "반드시 참"과 "참일 수도", 지문의 논리 따라가기, 극단적 선택지 피하기',zh:'空格是结论、“必然为真”与“可能为真”、顺着文章的逻辑、避开极端选项'},
 endh:{en:'Lesson 17 complete',ko:'17강 완료',zh:'第17课完成'},
 endp:{en:'Practice writing the premises as a short chain before you choose.',ko:'고르기 전에 전제를 짧은 사슬로 적어 보는 연습을 해요.',zh:'练习在作答前把前提写成一条短链。'}};
L={en:{conc:'The blank = the conclusion',must:'Must be true, not could be true',chain:'Write the logic chain',extreme:'Extreme words are usually wrong'},
 ko:{conc:'빈칸 = 결론',must:'"참일 수도"가 아니라 "반드시 참"',chain:'논리 사슬을 적어 보기',extreme:'극단적인 말은 대개 오답'},
 zh:{conc:'空格 = 结论',must:'必然为真，而不是可能为真',chain:'写出逻辑链',extreme:'极端的词通常是错的'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 7 · Information and Ideas</div><h2 class="h2" data-l="title"></h2>
 <div class="pass card h" id="i1" style="font-size:2.1cqw">Which choice most logically completes the text?<br>… The researchers therefore concluded that <b>______</b></div>
 <div class="card h" id="i2" style="font-size:2.3cqw">🧩 <b data-l="conc"></b></div>`,
 b:[
 {en:"Welcome to Lesson 17. Inference questions are among the hardest on the test. The passage ends with a blank, and you choose what logically completes it.",ko:"17강에 오신 걸 환영해요. 추론 문제는 시험에서 가장 어려운 유형 중 하나예요. 지문이 빈칸으로 끝나고, 논리적으로 이어지는 말을 골라요.",zh:"欢迎来到第17课。推理题是全卷最难的题型之一。文章以空格结尾，你要选出逻辑上能完成它的内容。",a:['in:#i1']},
 {en:"Think of the blank as the conclusion of an argument. Everything before it is a premise.",ko:"빈칸을 논증의 결론이라고 생각하세요. 그 앞의 모든 내용은 전제예요.",zh:"把空格看作一个论证的结论。它前面的一切都是前提。",a:['in:#i2']}]},
{id:'must',ch:{en:'Must be true',ko:'반드시 참',zh:'必然为真'},html:`
 <div class="kick">Rule</div><h2 class="h2" data-l="must"></h2>
 <div class="pass card" style="font-size:2cqw">All the paintings in the exhibit are by artists born before 1900. <i>The Blue Barn</i> is in the exhibit. So <b>______</b></div>
 <div class="pass card h" id="m1" style="font-size:1.95cqw"><span class="lbl g">must</span> the artist of <i>The Blue Barn</i> was born before 1900.</div>
 <div class="pass card h" id="m2" style="font-size:1.95cqw"><span class="lbl r">could</span> <i>The Blue Barn</i> is the most valuable painting in the exhibit.</div>`,
 b:[
 {en:"Here is the key rule. The right answer must be true based on the passage. An answer that only could be true is wrong.",ko:"핵심 규칙이에요. 정답은 지문을 근거로 반드시 참이어야 해요. 참일 수도 있는 정도인 답은 오답이에요.",zh:"关键规则：正确答案必须根据文章必然为真。只是可能为真的答案是错的。"},
 {en:"'All the paintings in the exhibit are by artists born before 1900. The Blue Barn is in the exhibit.'",ko:"'All the paintings in the exhibit are by artists born before 1900. The Blue Barn is in the exhibit.'",zh:"All the paintings in the exhibit are by artists born before 1900. The Blue Barn is in the exhibit."},
 {en:"So its artist must have been born before 1900. There is no other possibility.",ko:"그러니까 그 화가는 반드시 1900년 이전에 태어났어요. 다른 가능성은 없어요.",zh:"所以它的作者必然出生在1900年之前，没有别的可能。",a:['in:#m1']},
 {en:"Could it be the most valuable painting? Maybe, but the passage gives no reason to think so. That is the kind of answer to eliminate.",ko:"가장 비싼 그림일 수도 있을까요? 그럴 수도 있지만 지문에는 그렇게 볼 근거가 없어요. 이런 답을 지워야 해요.",zh:"它可能是最贵的画吗？也许，但文章没有给出任何依据。这类答案要排除。",a:['in:#m2']}]},
{id:'chain',tight:1,ch:{en:'Logic chain',ko:'논리 사슬',zh:'逻辑链'},html:`
 <div class="kick">Method</div><h2 class="h2" data-l="chain"></h2>
 <div class="pass card" style="font-size:1.9cqw">A certain beetle survives cold winters only if its body contains a natural antifreeze protein. Researchers found that beetles from a lowland population lacked the protein. Winters in the lowlands, however, have recently become much colder. If this trend continues, <b>______</b></div>
 <div class="grid2" style="gap:.6cqw 2cqw"><div class="fix h" id="c1"><b class="n">1</b><span>survive cold → needs protein</span></div>
 <div class="fix h" id="c2"><b class="n">2</b><span>lowland beetles → no protein</span></div>
 <div class="fix h" id="c3"><b class="n">3</b><span>lowland winters → colder</span></div>
 <div class="fix h" id="c4"><b class="n" style="background:var(--ok)">∴</b><span>the lowland population may not survive the winters</span></div></div>`,
 b:[
 {en:"For longer passages, write the logic as a short chain. Premise one: the beetle survives the cold only if it has the protein.",ko:"긴 지문은 논리를 짧은 사슬로 적어요. 전제 1: 이 딱정벌레는 단백질이 있어야만 추위를 견뎌요.",zh:"较长的文章，就把逻辑写成一条短链。前提一：这种甲虫只有具备这种蛋白才能熬过寒冬。",a:['in:#c1']},
 {en:"Premise two: the lowland beetles do not have the protein.",ko:"전제 2: 저지대 딱정벌레에는 그 단백질이 없어요.",zh:"前提二：低地种群的甲虫没有这种蛋白。",a:['in:#c2']},
 {en:"Premise three: lowland winters are getting colder.",ko:"전제 3: 저지대의 겨울이 더 추워지고 있어요.",zh:"前提三：低地的冬天越来越冷。",a:['in:#c3']},
 {en:"Put them together: the lowland population may not survive. Notice that we use every premise. A good answer uses all of them.",ko:"합치면, 저지대 개체군은 살아남지 못할 수 있어요. 모든 전제를 다 썼다는 점에 주목하세요. 좋은 답은 전제를 전부 써요.",zh:"合起来：低地种群可能无法存活。注意我们用上了每一个前提。好的答案会用上全部前提。",a:['in:#c4']}]},
{id:'extreme',ch:{en:'Extreme words',ko:'극단적 표현',zh:'极端用词'},html:`
 <div class="kick">Trap</div><h2 class="h2" data-l="extreme"></h2>
 <div class="chips h" id="e1"><span class="chip y">always</span><span class="chip y">never</span><span class="chip y">all</span><span class="chip y">prove</span><span class="chip y">completely</span><span class="chip y">the only</span></div>
 <div class="pass card h" id="e2" style="font-size:1.95cqw"><span class="lbl r">✗</span> all beetle species will soon become extinct.</div>
 <div class="pass card h" id="e3" style="font-size:1.95cqw"><span class="lbl r">✗</span> the lowland beetles will develop the protein. <span class="small">(no evidence)</span></div>`,
 b:[
 {en:"Watch for extreme words: always, never, all, prove, completely, the only. The SAT rarely gives enough evidence for them.",ko:"극단적인 말을 조심하세요. always, never, all, prove, completely, the only. SAT 지문은 그런 말을 뒷받침할 만큼 근거를 주지 않아요.",zh:"注意极端的词：always、never、all、prove、completely、the only。SAT文章很少给出足以支撑它们的证据。",a:['in:#e1']},
 {en:"'All beetle species will soon become extinct' goes far beyond one lowland population.",ko:"'모든 딱정벌레 종이 곧 멸종할 것이다'는 저지대 개체군 하나를 훨씬 넘어서요.",zh:"所有甲虫物种都将很快灭绝，这远远超出了一个低地种群的范围。",a:['in:#e2']},
 {en:"'The lowland beetles will develop the protein' might sound hopeful, but nothing in the passage supports it.",ko:"'저지대 딱정벌레가 그 단백질을 갖게 될 것이다'는 희망적으로 들리지만 지문에 근거가 없어요.",zh:"低地甲虫会产生这种蛋白，听起来充满希望，但文章中没有任何支持。",a:['in:#e3']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:1.9cqw">Archaeologists found pottery at a coastal site in Peru. The clay contains a mineral that occurs only in mountain soils over 200 kilometers inland. No mountain clay deposits exist near the coast. These findings suggest that <b>______</b></div>
 <div class="choices" style="grid-template-columns:1fr;font-size:1.85cqw"><div id="x1">A) the coastal people traveled to the mountains every year.</div><div id="x2">B) the pottery, or the clay used to make it, came from the mountains to the coast.</div><div id="x3">C) mountain pottery was more valuable than coastal pottery.</div><div id="x4">D) the coastal site was once located in the mountains.</div></div>`,
 b:[
 {en:"Let's solve one. Chain: the clay has a mountain mineral. That mineral exists only in mountain soils. There is no mountain clay near the coast.",ko:"한 문제 풀어 봐요. 사슬로 적으면, 점토에 산의 광물이 있다. 그 광물은 산의 흙에만 있다. 해안 근처에는 산의 점토가 없다.",zh:"做一道题。逻辑链：陶土含有一种山地矿物。这种矿物只存在于山地土壤中。海岸附近没有山地黏土。"},
 {en:"So the pottery or its clay must have been brought from the mountains. That is choice B.",ko:"그러니까 도자기나 그 점토는 산에서 옮겨 왔을 수밖에 없어요. B예요.",zh:"所以陶器或它的陶土必然是从山区运来的。这就是 B。"},
 {en:"A says 'every year,' too specific. C talks about value, never mentioned. D is not supported. The answer is B.",ko:"A는 '매년'이라고 해서 너무 구체적이에요. C는 언급된 적 없는 가치 얘기예요. D는 근거가 없어요. 정답은 B예요.",zh:"A 说每年，过于具体。C 谈价值，文章没提过。D 没有依据。答案是 B。",a:['add:#x1:x','add:#x3:x','add:#x4:x','add:#x2:o']},
 {q:{en:{q:'Why is choice A (“traveled to the mountains every year”) wrong?',o:['It contradicts the passage','It could be true, but the passage does not show it must be true','It is too vague'],e:'People might have traveled, or traders might have brought the pottery. “Every year” is not required by the evidence.'},
     ko:{q:'A(“traveled to the mountains every year”)가 오답인 이유는?',o:['지문과 모순되어서','참일 수는 있지만 지문이 반드시 참이라고 보여 주지 않아서','너무 막연해서'],e:'사람들이 직접 갔을 수도, 상인이 가져왔을 수도 있어요. "매년"은 근거가 요구하는 내용이 아니에요.'},
     zh:{q:'为什么选项A（“traveled to the mountains every year”）是错的？',o:['它与文章矛盾','它可能为真，但文章没有表明它必然为真','它太笼统'],e:'可能是人们自己去了，也可能是商人带来的陶器。证据并不要求“每年”。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 17</h2>
 <ul class="sum card"><li class="h" id="z1">The blank is a conclusion → premises → must be true</li>
 <li class="h" id="z2">Write a short logic chain · use every premise</li>
 <li class="h" id="z3">Could be true ≠ must be true</li>
 <li class="h" id="z4">Avoid extreme words and new information</li></ul>`,
 b:[
 {en:"Let's review. The blank is a conclusion. Find the premises and choose what must be true.",ko:"정리할게요. 빈칸은 결론이에요. 전제를 찾고 반드시 참인 것을 고르세요.",zh:"我们来总结。空格是结论。找出前提，选择必然为真的选项。",a:['in:#z1']},
 {en:"Write a short logic chain and make sure the answer uses every premise.",ko:"짧은 논리 사슬을 적고, 정답이 모든 전제를 쓰는지 확인하세요.",zh:"写一条短逻辑链，确认答案用上了每一个前提。",a:['in:#z2']},
 {en:"Could be true is not enough.",ko:"참일 수도 있다는 걸로는 부족해요.",zh:"可能为真是不够的。",a:['in:#z3']},
 {en:"And avoid extreme words and new information. Last lesson: cross-text connections. See you in Lesson 18!",ko:"그리고 극단적인 말과 새로운 정보는 피하세요. 마지막 강의는 두 지문 연결이에요. 18강에서 만나요!",zh:"避开极端用词和新信息。最后一课：双篇关联。第18课见！",a:['in:#z4']}]}];
