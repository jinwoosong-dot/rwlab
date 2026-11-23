META={id:'fss4',k:'FSS',n:8,
 title:{en:'Lesson 8 · Modifiers, Comparisons & Parallel Structure',ko:'8강 · 수식어, 비교, 병렬 구조',zh:'第8课 · 修饰语、比较与平行结构'},
 desc:{en:'Dangling modifiers (who is doing it?), comparing like with like, keeping lists parallel',ko:'현수 수식어(누가 하는가?), 같은 것끼리 비교, 목록은 같은 형태로',zh:'垂悬修饰语（谁在做？）、同类相比、列表保持平行'},
 endh:{en:'Lesson 8 complete',ko:'8강 완료',zh:'第8课完成'},
 endp:{en:'Practice asking “who is doing this?” after every opening phrase.',ko:'앞에 나온 구마다 "누가 하는 거지?"라고 묻는 연습을 해요.',zh:'练习在每个开头短语后问：“是谁在做？”'}};
L={en:{who:'Who is doing it? → right after the comma',like:'Compare like with like',par:'Same form in a list',ok:'logical',no:'illogical'},
 ko:{who:'누가 하는가? → 쉼표 바로 뒤에',like:'같은 종류끼리 비교',par:'목록은 같은 형태로',ok:'논리적',no:'비논리적'},
 zh:{who:'是谁在做？→ 紧跟在逗号后面',like:'同类相比',par:'列表中形式一致',ok:'合乎逻辑',no:'不合逻辑'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 2 · Form, Structure, and Sense</div><h2 class="h2" data-l="title"></h2>
 <div class="pass card h" id="i1" style="font-size:2.5cqw">Walking to school, <b style="color:var(--bad)">the rain</b> soaked my shoes. 🤔</div>`,
 b:[
 {en:"Welcome to Lesson 8. Today's three rules are all about logic: does the sentence say what the writer means?",ko:"8강에 오신 걸 환영해요. 오늘 배울 규칙 세 가지는 모두 논리에 관한 거예요. 문장이 글쓴이가 뜻한 대로 말하고 있나요?",zh:"欢迎来到第8课。今天的三条规则都和逻辑有关：句子说的是不是作者想表达的意思？"},
 {en:"Look at this: 'Walking to school, the rain soaked my shoes.' Grammatically, this says the rain was walking to school.",ko:"이걸 보세요. 'Walking to school, the rain soaked my shoes.' 문법적으로는 비가 학교에 걸어가고 있었다는 뜻이에요.",zh:"看这句：Walking to school, the rain soaked my shoes. 从语法上看，它的意思是雨在走路去学校。",a:['in:#i1']},
 {en:"That is a dangling modifier, and it is one of the SAT's favorite questions.",ko:"이게 현수 수식어예요. SAT가 정말 좋아하는 문제예요.",zh:"这叫垂悬修饰语，是SAT最爱考的题目之一。"}]},
{id:'dangle',ch:{en:'Dangling modifiers',ko:'현수 수식어',zh:'垂悬修饰语'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="who"></h2>
 <div class="pass card" style="font-size:2.3cqw"><span class="hl">Built in 1937</span>, <span class="tok" id="d1">the bridge</span> connects the two towns. <span class="stamp ok h" id="d1x">✓</span></div>
 <div class="pass card h" id="d2" style="font-size:2.3cqw"><span class="hl">Built in 1937</span>, <b style="color:var(--bad)">the two towns</b> are connected by the bridge. <span class="stamp no">✗</span></div>
 <div class="pass card h" id="d3" style="font-size:2.3cqw"><span class="hl">Having analyzed the data</span>, <b style="color:var(--ok)">the researchers</b> published a report. ✓</div>`,
 b:[
 {en:"When a sentence starts with a descriptive phrase and a comma, the noun right after the comma must be the one the phrase describes.",ko:"문장이 설명하는 구와 쉼표로 시작하면, 쉼표 바로 뒤의 명사가 그 구가 설명하는 대상이어야 해요.",zh:"当句子以描述性短语加逗号开头时，逗号后面紧跟的名词必须是这个短语描述的对象。"},
 {en:"'Built in 1937, the bridge connects the two towns.' What was built? The bridge. It comes right after the comma. Correct.",ko:"'Built in 1937, the bridge connects the two towns.' 무엇이 지어졌죠? 다리예요. 쉼표 바로 뒤에 있어요. 맞아요.",zh:"Built in 1937, the bridge connects the two towns. 什么被建造？桥。它紧跟在逗号后面。正确。",a:['add:#d1:subj','in:#d1x']},
 {en:"'Built in 1937, the two towns are connected by the bridge.' Now it says the towns were built in 1937. Wrong.",ko:"'Built in 1937, the two towns are connected by the bridge.' 이러면 두 마을이 1937년에 지어졌다는 뜻이 돼요. 틀려요.",zh:"Built in 1937, the two towns are connected by the bridge. 这样意思就成了两个镇是1937年建的。错误。",a:['in:#d2']},
 {en:"Ask: who or what is doing the action in the opening phrase? Then make sure that is the first noun after the comma.",ko:"이렇게 물어보세요. 앞의 구에서 행동하는 건 누구 또는 무엇인가? 그리고 그게 쉼표 바로 뒤 첫 명사인지 확인하세요.",zh:"问自己：开头短语里的动作是谁或什么做的？然后确认它是逗号后的第一个名词。",a:['in:#d3']},
 {q:{en:{q:'“After studying the fossil for months, ___”',o:['the new species was identified by the paleontologist.','the paleontologist identified a new species.','a new species was identified.'],e:'Who studied the fossil? The paleontologist. That noun must come right after the comma.'},
     ko:{q:'“After studying the fossil for months, ___”',o:['the new species was identified by the paleontologist.','the paleontologist identified a new species.','a new species was identified.'],e:'화석을 연구한 건 누구죠? 고생물학자예요. 그 명사가 쉼표 바로 뒤에 와야 해요.'},
     zh:{q:'“After studying the fossil for months, ___”',o:['the new species was identified by the paleontologist.','the paleontologist identified a new species.','a new species was identified.'],e:'谁研究了化石？古生物学家。这个名词必须紧跟在逗号后面。'},a:1}}]},
{id:'possess',ch:{en:'Possessive trap',ko:'소유격 함정',zh:'所有格陷阱'},html:`
 <div class="kick">Trap</div><h2 class="h2">’s is not the person</h2>
 <div class="pass card h" id="p1" style="font-size:2.3cqw">A talented painter, <b style="color:var(--bad)">Frida Kahlo’s</b> work hangs in many museums. ✗</div>
 <div class="pass card h" id="p2" style="font-size:2.3cqw">A talented painter, <b style="color:var(--ok)">Frida Kahlo</b> created work that hangs in many museums. ✓</div>`,
 b:[
 {en:"Watch for this trap. 'A talented painter, Frida Kahlo's work hangs in many museums.'",ko:"이 함정을 조심하세요. 'A talented painter, Frida Kahlo's work hangs in many museums.'",zh:"注意这个陷阱：A talented painter, Frida Kahlo's work hangs in many museums.",a:['in:#p1']},
 {en:"It looks fine, but the noun after the comma is 'work,' not Frida Kahlo. Her work was not a painter. She was.",ko:"괜찮아 보이지만 쉼표 뒤의 명사는 Frida Kahlo가 아니라 work예요. 화가였던 건 작품이 아니라 그녀예요.",zh:"看起来没问题，但逗号后的名词是 work，不是 Frida Kahlo。是画家的是她，不是她的作品。"},
 {en:"The correct version puts the person right after the comma: 'A talented painter, Frida Kahlo created work that hangs in many museums.'",ko:"맞는 문장은 사람을 쉼표 바로 뒤에 둬요. 'A talented painter, Frida Kahlo created work that hangs in many museums.'",zh:"正确的写法是把人放在逗号后面：A talented painter, Frida Kahlo created work that hangs in many museums.",a:['in:#p2']}]},
{id:'compare',ch:{en:'Logical comparisons',ko:'논리적 비교',zh:'合乎逻辑的比较'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="like"></h2>
 <div class="pass card h" id="c1" style="font-size:2.3cqw">The population of Tokyo is larger than <b style="color:var(--bad)">London</b>. <span class="lbl r" data-l="no"></span></div>
 <div class="pass card h" id="c2" style="font-size:2.3cqw">The population of Tokyo is larger than <b style="color:var(--ok)">that of London</b>. <span class="lbl g" data-l="ok"></span></div>
 <div class="pass card h" id="c3" style="font-size:2.3cqw">Tokyo’s population is larger than <b style="color:var(--ok)">London’s</b>. <span class="lbl g" data-l="ok"></span></div>`,
 b:[
 {en:"Rule two: compare like with like. 'The population of Tokyo is larger than London.'",ko:"두 번째 규칙. 같은 종류끼리 비교해요. 'The population of Tokyo is larger than London.'",zh:"规则二：同类相比。The population of Tokyo is larger than London.",a:['in:#c1']},
 {en:"This compares a population to a city. That is illogical. We need population to population.",ko:"이건 인구를 도시와 비교하고 있어요. 비논리적이에요. 인구는 인구와 비교해야 해요.",zh:"这是在拿人口和城市比较，不合逻辑。要人口和人口比。"},
 {en:"Fix it with 'that of London,' where 'that' means 'the population.'",ko:"'that of London'으로 고쳐요. 여기서 that은 the population이라는 뜻이에요.",zh:"用 that of London 来改，这里的 that 指 the population。",a:['in:#c2']},
 {en:"Or use the possessive: 'Tokyo's population is larger than London's.' For a plural noun, use 'those of.'",ko:"아니면 소유격을 써요. 'Tokyo's population is larger than London's.' 복수 명사라면 'those of'를 써요.",zh:"或者用所有格：Tokyo's population is larger than London's. 如果是复数名词，就用 those of。",a:['in:#c3']}]},
{id:'parallel',ch:{en:'Parallel structure',ko:'병렬 구조',zh:'平行结构'},html:`
 <div class="kick">Step 3</div><h2 class="h2" data-l="par"></h2>
 <div class="pass card h" id="r1" style="font-size:2.3cqw">She likes <b style="color:var(--ok)">hiking</b>, <b style="color:var(--ok)">swimming</b>, and <b style="color:var(--bad)">to ride bikes</b>. ✗</div>
 <div class="pass card h" id="r2" style="font-size:2.3cqw">She likes <b style="color:var(--ok)">hiking</b>, <b style="color:var(--ok)">swimming</b>, and <b style="color:var(--ok)">riding bikes</b>. ✓</div>
 <div class="pass card h" id="r3" style="font-size:2.3cqw">The goal is not only <b>to reduce</b> costs but also <b>to improve</b> safety. ✓</div>`,
 b:[
 {en:"Rule three: items in a list must have the same form. 'She likes hiking, swimming, and to ride bikes.' The last item breaks the pattern.",ko:"세 번째 규칙. 목록의 항목은 같은 형태여야 해요. 'She likes hiking, swimming, and to ride bikes.' 마지막 항목이 패턴을 깼어요.",zh:"规则三：列表中的项目形式必须一致。She likes hiking, swimming, and to ride bikes. 最后一项打破了模式。",a:['in:#r1']},
 {en:"Make them match: 'hiking, swimming, and riding bikes.'",ko:"형태를 맞추세요. 'hiking, swimming, and riding bikes.'",zh:"让它们一致：hiking, swimming, and riding bikes。",a:['in:#r2']},
 {en:"The same goes for paired expressions like 'not only, but also' and 'both, and.' The two parts should match.",ko:"not only, but also나 both, and 같은 짝 표현도 마찬가지예요. 두 부분의 형태가 같아야 해요.",zh:"not only, but also 和 both, and 这类成对表达也一样，两部分的形式要一致。",a:['in:#r3']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.2cqw">Known for her detailed drawings of desert plants, <b>______</b></div>
 <div class="choices" style="grid-template-columns:1fr"><div id="x1">A) the botanist Lina Ortiz’s sketchbooks fill an entire shelf.</div><div id="x2">B) an entire shelf is filled by the sketchbooks of botanist Lina Ortiz.</div><div id="x3">C) botanist Lina Ortiz has filled an entire shelf with sketchbooks.</div><div id="x4">D) there is an entire shelf of sketchbooks by botanist Lina Ortiz.</div></div>`,
 b:[
 {en:"Let's solve one. 'Known for her detailed drawings of desert plants.' Who is known for her drawings? A person: the botanist.",ko:"한 문제 풀어 봐요. 'Known for her detailed drawings of desert plants.' 그림으로 알려진 건 누구죠? 사람, 즉 식물학자예요.",zh:"做一道题。Known for her detailed drawings of desert plants. 谁以她的绘画闻名？一个人：植物学家。"},
 {en:"A starts with 'sketchbooks,' because of the possessive. B starts with 'shelf.' D starts with 'there.' None of them is the botanist.",ko:"A는 소유격 때문에 sketchbooks가 먼저 와요. B는 shelf, D는 there로 시작해요. 모두 식물학자가 아니에요.",zh:"A 因为所有格，开头是 sketchbooks。B 开头是 shelf，D 开头是 there。都不是植物学家。",a:['add:#x1:x','add:#x2:x','add:#x4:x']},
 {en:"Only C puts 'botanist Lina Ortiz' right after the comma. The answer is C.",ko:"'botanist Lina Ortiz'를 쉼표 바로 뒤에 둔 건 C뿐이에요. 정답은 C예요.",zh:"只有 C 把 botanist Lina Ortiz 放在逗号后面。答案是 C。",a:['add:#x3:o']},
 {q:{en:{q:'“The wings of a dragonfly are thinner than ___.”',o:['a butterfly','those of a butterfly','a butterfly’s wing'],e:'Compare wings with wings. “Those” stands for “the wings,” so “those of a butterfly” is logical.'},
     ko:{q:'“The wings of a dragonfly are thinner than ___.”',o:['a butterfly','those of a butterfly','a butterfly’s wing'],e:'날개는 날개와 비교해요. those가 the wings를 대신하니까 those of a butterfly가 논리적이에요.'},
     zh:{q:'“The wings of a dragonfly are thinner than ___.”',o:['a butterfly','those of a butterfly','a butterfly’s wing'],e:'翅膀要和翅膀比。those 代替 the wings，所以 those of a butterfly 合乎逻辑。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 8</h2>
 <ul class="sum card"><li class="h" id="s1">Opening phrase + comma → the doer comes right after the comma</li>
 <li class="h" id="s2">Watch for <i>___’s</i> after the comma — the person is not the subject</li>
 <li class="h" id="s3">Compare like with like: <i>that of / those of / London’s</i></li>
 <li class="h" id="s4">Lists and pairs → same form</li></ul>`,
 b:[
 {en:"Let's review. After an opening phrase and a comma, the noun that does the action comes first.",ko:"정리할게요. 앞에 구와 쉼표가 오면, 그 행동을 하는 명사가 바로 다음에 와요.",zh:"我们来总结。开头短语加逗号之后，做这个动作的名词要紧跟着出现。",a:['in:#s1']},
 {en:"Watch out for possessives after the comma. They make something else the subject.",ko:"쉼표 뒤의 소유격을 조심하세요. 다른 것을 주어로 만들어 버려요.",zh:"小心逗号后的所有格，它会让别的东西变成主语。",a:['in:#s2']},
 {en:"Compare like with like, using 'that of,' 'those of,' or a possessive.",ko:"that of, those of, 소유격을 써서 같은 종류끼리 비교하세요.",zh:"用 that of、those of 或所有格来进行同类比较。",a:['in:#s3']},
 {en:"And keep lists and paired expressions in the same form. Next lesson: apostrophes in possessives and plurals. See you in Lesson 9!",ko:"그리고 목록과 짝 표현은 같은 형태로 맞추세요. 다음은 소유격과 복수의 아포스트로피예요. 9강에서 만나요!",zh:"列表和成对表达保持形式一致。下一课：所有格与复数中的撇号。第9课见！",a:['in:#s4']}]}];
