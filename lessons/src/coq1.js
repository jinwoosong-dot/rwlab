META={id:'coq1',k:'COQ',n:16,
 title:{en:'Lesson 16 · Command of Evidence: Tables & Graphs',ko:'16강 · 근거 찾기: 표와 그래프',zh:'第16课 · 证据题：图表'},
 desc:{en:'Read the claim first, then titles, labels and units; true but irrelevant data; checking the direction of a comparison',ko:'주장부터 읽고, 제목·축·단위 확인; 사실이지만 관련 없는 데이터; 비교 방향 확인',zh:'先读论点，再看标题、坐标和单位；真实但无关的数据；检查比较方向'},
 endh:{en:'Lesson 16 complete',ko:'16강 완료',zh:'第16课完成'},
 endp:{en:'Practice reading the claim first and only the rows you need.',ko:'주장을 먼저 읽고 필요한 줄만 보는 연습을 해요.',zh:'练习先读论点，只看需要的那几行。'}};
L={en:{order:'Claim first, data second',two:'Two checks for every choice',acc:'① Accurate to the data?',rel:'② Does it prove the claim?',labels:'Title · labels · units'},
 ko:{order:'주장 먼저, 데이터는 나중',two:'선택지마다 두 가지 확인',acc:'① 데이터와 정확히 맞나?',rel:'② 주장을 증명하나?',labels:'제목 · 축 이름 · 단위'},
 zh:{order:'先看论点，再看数据',two:'每个选项检查两点',acc:'① 与数据准确相符吗？',rel:'② 能证明论点吗？',labels:'标题 · 标签 · 单位'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 6 · Information and Ideas</div><h2 class="h2" data-l="title"></h2>
 <div class="pass card h" id="i1" style="font-size:2.1cqw">Which choice most effectively uses data from the table to <b>complete the statement</b> / <b>support the claim</b>?</div>`,
 b:[
 {en:"Welcome to Lesson 16. These questions come with a table or a graph and a short passage.",ko:"16강에 오신 걸 환영해요. 이 유형은 표나 그래프와 짧은 지문이 함께 나와요.",zh:"欢迎来到第16课。这类题配有一个表格或图表，以及一段短文。",a:['in:#i1']},
 {en:"Many students start by studying the whole table. That wastes time. Most of the data is not needed.",ko:"많은 학생이 표 전체를 먼저 분석해요. 그건 시간 낭비예요. 데이터 대부분은 필요 없어요.",zh:"很多学生一上来就研究整个表格。这很浪费时间，大部分数据根本用不到。"}]},
{id:'order',ch:{en:'Claim first',ko:'주장 먼저',zh:'先看论点'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="order"></h2>
 <div class="fix h" id="o1"><b class="n">1</b><span>Read the question and the last sentence of the passage (the claim or blank)</span></div>
 <div class="fix h" id="o2"><b class="n">2</b><span data-l="labels"></span></div>
 <div class="fix h" id="o3"><b class="n">3</b><span>Find only the rows or bars the claim mentions</span></div>`,
 b:[
 {en:"Step one: read the question and the sentence with the claim or blank. That tells you exactly which data you need.",ko:"1단계, 질문과 주장 또는 빈칸이 있는 문장을 읽어요. 그래야 어떤 데이터가 필요한지 정확히 알 수 있어요.",zh:"第一步：读问题和含有论点或空格的句子。这会告诉你到底需要哪些数据。",a:['in:#o1']},
 {en:"Step two: read the table title, the labels, and the units. Is it percent, number, or years?",ko:"2단계, 표 제목, 항목 이름, 단위를 읽어요. 퍼센트인가요, 개수인가요, 연도인가요?",zh:"第二步：读表格标题、标签和单位。是百分比、数量还是年份？",a:['in:#o2']},
 {en:"Step three: find only the rows or bars the claim talks about. Ignore the rest.",ko:"3단계, 주장이 말하는 줄이나 막대만 찾으세요. 나머지는 무시해요.",zh:"第三步：只找论点提到的那几行或那几根柱子，其余的忽略。",a:['in:#o3']}]},
{id:'table',ch:{en:'Read a table',ko:'표 읽기',zh:'读表格'},html:`
 <div class="kick">Example data (fictional)</div><h2 class="h2" style="font-size:2.6cqw">Students Who Bike to School (%)</h2>
 <table class="tbl" style="width:100%"><tr><th>City</th><th>2015</th><th>2023</th></tr>
 <tr><td>Arden</td><td id="t1">12</td><td id="t2">31</td></tr><tr><td>Belmont</td><td id="t3">18</td><td id="t4">20</td></tr><tr><td>Corwin</td><td>25</td><td>22</td></tr></table>
 <div class="pass card h" id="t5" style="font-size:2cqw">Claim: After Arden built protected bike lanes in 2017, biking to school rose sharply there.</div>`,
 b:[
 {en:"Here is a table with fictional data: the percent of students who bike to school in three cities, in 2015 and 2023.",ko:"가상의 데이터 표예요. 세 도시에서 자전거로 등교하는 학생의 비율을 2015년과 2023년으로 보여 줘요.",zh:"这是一张虚构数据的表格：三座城市骑自行车上学的学生比例，分2015年和2023年。"},
 {en:"The claim: after Arden built bike lanes, biking to school rose sharply there.",ko:"주장은 이거예요. Arden에 자전거 전용 도로가 생긴 뒤, 그곳의 자전거 등교가 크게 늘었다.",zh:"论点是：Arden 修建自行车道后，那里骑车上学的比例大幅上升。",a:['in:#t5']},
 {en:"So we need only one row: Arden. Twelve percent in 2015, thirty-one percent in 2023. That is a sharp rise.",ko:"그러니까 필요한 건 Arden 한 줄뿐이에요. 2015년 12퍼센트, 2023년 31퍼센트. 크게 늘었어요.",zh:"所以只需要一行：Arden。2015年12%，2023年31%。大幅上升。",a:['add:#t1:hit','add:#t2:hit']}]},
{id:'two',tight:1,ch:{en:'Two checks',ko:'두 가지 확인',zh:'两项检查'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="two"></h2>
 <div class="grid2"><div class="card h" id="c1"><b data-l="acc"></b></div><div class="card h" id="c2"><b data-l="rel"></b></div></div>
 <div class="pass card h" id="c3" style="font-size:1.9cqw"><span class="lbl r">✗ ②</span> In 2023, 20% of Belmont students biked to school. <span class="small">(true, but not about Arden)</span></div>
 <div class="pass card h" id="c4" style="font-size:1.9cqw"><span class="lbl r">✗ ①</span> Arden’s rate fell from 31% to 12%. <span class="small">(wrong direction)</span></div>
 <div class="pass card h" id="c5" style="font-size:1.9cqw"><span class="lbl g">✓</span> The share of Arden students biking to school rose from 12% in 2015 to 31% in 2023.</div>`,
 b:[
 {en:"Every choice needs two checks. First: is it accurate to the data? Second: does it prove the claim?",ko:"선택지마다 두 가지를 확인해요. 첫째, 데이터와 정확히 맞나? 둘째, 주장을 증명하나?",zh:"每个选项要做两项检查。第一：与数据准确相符吗？第二：能证明论点吗？",a:['in:#c1','in:#c2']},
 {en:"'In 2023, twenty percent of Belmont students biked.' That is true, but it is about the wrong city. It fails check two.",ko:"'In 2023, 20% of Belmont students biked.' 사실이지만 다른 도시 얘기예요. 두 번째 확인에서 탈락이에요.",zh:"In 2023, 20% of Belmont students biked. 这是真的，但说的是另一座城市。第二项检查不通过。",a:['in:#c3']},
 {en:"'Arden's rate fell from thirty-one to twelve.' The numbers are right, but the direction is reversed. It fails check one.",ko:"'Arden's rate fell from 31% to 12%.' 숫자는 맞지만 방향이 거꾸로예요. 첫 번째 확인에서 탈락이에요.",zh:"Arden's rate fell from 31% to 12%. 数字对，但方向反了。第一项检查不通过。",a:['in:#c4']},
 {en:"Only the last choice passes both checks.",ko:"두 가지를 모두 통과하는 건 마지막 선택지뿐이에요.",zh:"只有最后一个选项两项都通过。",a:['in:#c5']}]},
{id:'compare',ch:{en:'Comparison claims',ko:'비교 주장',zh:'比较型论点'},html:`
 <div class="kick">Hard questions</div><h2 class="h2">“more than”, “unlike”, “only”</h2>
 <div class="pass card h" id="m1" style="font-size:2cqw">Claim: Arden’s increase was <b>larger than</b> the change in the other two cities.</div>
 <div class="card h" id="m2" style="font-size:2cqw">Arden +19 · Belmont +2 · Corwin −3 → need <b>all three</b> cities</div>`,
 b:[
 {en:"Harder questions use comparison claims. 'Arden's increase was larger than the change in the other two cities.'",ko:"어려운 문제는 비교 주장을 써요. 'Arden's increase was larger than the change in the other two cities.'",zh:"难题会用比较型论点：Arden's increase was larger than the change in the other two cities.",a:['in:#m1']},
 {en:"Now one row is not enough. You need data for all three cities: Arden up nineteen points, Belmont up two, Corwin down three.",ko:"이제 한 줄로는 부족해요. 세 도시 데이터가 모두 필요해요. Arden은 19포인트 증가, Belmont는 2포인트 증가, Corwin은 3포인트 감소.",zh:"这时一行就不够了，需要三座城市的数据：Arden 上升19个百分点，Belmont 上升2个，Corwin 下降3个。",a:['in:#m2']},
 {en:"Words like 'more than,' 'unlike,' and 'only' tell you how many items the answer must include.",ko:"more than, unlike, only 같은 말이 정답에 몇 개의 항목이 들어가야 하는지 알려 줘요.",zh:"more than、unlike、only 这类词告诉你答案必须包含几个对象。"},
 {q:{en:{q:'Claim: “Corwin was the only city where biking to school declined.” Which data support it?',o:['Corwin fell from 25% to 22%.','Corwin fell from 25% to 22%, while Arden and Belmont both rose.','Corwin had the highest rate in 2015.'],e:'“Only” means you must show that Corwin declined and that the other cities did not.'},
     ko:{q:'주장: “Corwin은 자전거 등교가 줄어든 유일한 도시였다.” 이를 뒷받침하는 데이터는?',o:['Corwin fell from 25% to 22%.','Corwin fell from 25% to 22%, while Arden and Belmont both rose.','Corwin had the highest rate in 2015.'],e:'"only"가 있으니 Corwin이 줄었다는 것과 다른 도시는 줄지 않았다는 것을 모두 보여야 해요.'},
     zh:{q:'论点：“Corwin 是唯一一个骑车上学比例下降的城市。”哪项数据支持它？',o:['Corwin fell from 25% to 22%.','Corwin fell from 25% to 22%, while Arden and Belmont both rose.','Corwin had the highest rate in 2015.'],e:'有 only，就必须既说明 Corwin 下降了，也说明其他城市没有下降。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 16</h2>
 <ul class="sum card"><li class="h" id="z1">Claim first → title, labels, units → only the rows you need</li>
 <li class="h" id="z2">Two checks: accurate? proves the claim?</li>
 <li class="h" id="z3">True but irrelevant = wrong · reversed direction = wrong</li>
 <li class="h" id="z4"><i>more than, unlike, only</i> → include every item compared</li></ul>`,
 b:[
 {en:"Let's review. Read the claim first, then the title, labels, and units, then only the rows you need.",ko:"정리할게요. 주장을 먼저 읽고, 제목·항목·단위를 본 다음, 필요한 줄만 보세요.",zh:"我们来总结。先读论点，再看标题、标签和单位，然后只看需要的行。",a:['in:#z1']},
 {en:"Check every choice twice: is it accurate, and does it prove the claim?",ko:"선택지마다 두 번 확인하세요. 정확한가, 그리고 주장을 증명하나?",zh:"每个选项检查两次：准确吗？能证明论点吗？",a:['in:#z2']},
 {en:"True but irrelevant data is wrong, and so is a reversed direction.",ko:"사실이지만 관련 없는 데이터도 오답이고, 방향이 거꾸로인 것도 오답이에요.",zh:"真实但无关的数据是错的，方向相反的也是错的。",a:['in:#z3']},
 {en:"And comparison words tell you how much data you need. Next lesson: inferences. See you in Lesson 17!",ko:"그리고 비교 표현이 필요한 데이터의 양을 알려 줘요. 다음은 추론이에요. 17강에서 만나요!",zh:"比较词告诉你需要多少数据。下一课：推理。第17课见！",a:['in:#z4']}]}];
