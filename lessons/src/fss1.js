META={id:'fss1',k:'FSS',n:5,
 title:{en:'Lesson 5 · Subject–Verb Agreement',ko:'5강 · 주어와 동사의 수 일치',zh:'第5课 · 主谓一致'},
 desc:{en:'Find the real subject, cross out “of” phrases, tricky singular words, subjects after the verb, “and” vs. “or”',ko:'진짜 주어 찾기, of 구 지우기, 헷갈리는 단수 단어, 동사 뒤의 주어, and와 or',zh:'找出真正的主语、划掉 of 短语、容易混淆的单数词、动词后的主语、and 与 or'},
 endh:{en:'Lesson 5 complete',ko:'5강 완료',zh:'第5课完成'},
 endp:{en:'Practice crossing out phrases until the real subject jumps out.',ko:'진짜 주어가 바로 보일 때까지 구 지우기를 연습해요.',zh:'练习划掉短语，直到真正的主语一眼就能看出来。'}};
L={en:{rule:'Singular subject → singular verb · Plural subject → plural verb',sg:'singular',pl:'plural',cross:'Cross out “of / in / with …” phrases',each:'Always singular',inv:'Subject after the verb',andor:'and → plural · or / nor → match the nearer one'},
 ko:{rule:'단수 주어 → 단수 동사 · 복수 주어 → 복수 동사',sg:'단수',pl:'복수',cross:'of / in / with … 구를 지워요',each:'항상 단수',inv:'동사 뒤에 오는 주어',andor:'and → 복수 · or / nor → 가까운 쪽에 맞춤'},
 zh:{rule:'单数主语 → 单数动词 · 复数主语 → 复数动词',sg:'单数',pl:'复数',cross:'划掉 of / in / with … 短语',each:'永远是单数',inv:'在动词后面的主语',andor:'and → 复数 · or / nor → 与较近的一方一致'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 2 · Form, Structure, and Sense</div><h2 class="h2" data-l="title"></h2>
 <div class="card h" id="i1" style="font-size:2.4cqw"><b data-l="rule"></b></div>
 <div class="grid2"><div class="pass card h" id="i2" style="font-size:2.4cqw">The bird <b style="color:var(--verb)">sings</b>. <span class="lbl s" data-l="sg"></span></div><div class="pass card h" id="i3" style="font-size:2.4cqw">The birds <b style="color:var(--verb)">sing</b>. <span class="lbl s" data-l="pl"></span></div></div>`,
 b:[
 {en:"Welcome to Lesson 5. We now move to the second grammar skill: Form, Structure, and Sense.",ko:"5강에 오신 걸 환영해요. 이제 두 번째 문법 유형인 Form, Structure, and Sense로 넘어가요.",zh:"欢迎来到第5课。现在进入第二个语法技能：Form, Structure, and Sense。"},
 {en:"The most tested rule here is subject verb agreement. A singular subject takes a singular verb, and a plural subject takes a plural verb.",ko:"여기서 가장 많이 나오는 규칙은 주어와 동사의 수 일치예요. 단수 주어에는 단수 동사, 복수 주어에는 복수 동사를 써요.",zh:"这里考得最多的规则是主谓一致。单数主语配单数动词，复数主语配复数动词。",a:['in:#i1']},
 {en:"'The bird sings.' 'The birds sing.' Notice that the singular verb is the one with the s.",ko:"'The bird sings.' 'The birds sing.' 단수 동사 쪽에 s가 붙는다는 점을 기억하세요.",zh:"The bird sings. The birds sing. 注意：单数动词才带 s。",a:['in:#i2','in:#i3']},
 {en:"The rule is easy. The hard part is finding the real subject. The SAT hides it in long sentences.",ko:"규칙은 쉬워요. 어려운 건 진짜 주어를 찾는 거예요. SAT는 긴 문장 속에 주어를 숨겨요.",zh:"规则很简单，难的是找到真正的主语。SAT会把它藏在长句子里。"}]},
{id:'cross',ch:{en:'Cross out phrases',ko:'구 지우기',zh:'划掉短语'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="cross"></h2>
 <div class="big card" style="font-size:2.5cqw"><span class="tok" id="c1">The list</span> <span class="tok" id="c2">of ingredients in these recipes</span> <b>______</b> long.</div>
 <div class="choices"><div id="x1">is</div><div id="x2">are</div></div>
 <div class="pass card h" id="c3" style="font-size:2.3cqw">The <b>list</b> … <b>is</b> long. ✓</div>`,
 b:[
 {en:"Here is the most common trick. 'The list of ingredients in these recipes, blank, long.'",ko:"가장 흔한 속임수예요. 'The list of ingredients in these recipes' 다음 빈칸, 그리고 'long.'",zh:"这是最常见的陷阱：The list of ingredients in these recipes，空格，long。"},
 {en:"The word right before the blank is 'recipes,' which is plural. So many students choose 'are.'",ko:"빈칸 바로 앞 단어가 복수인 recipes라서 많은 학생이 are를 골라요.",zh:"空格前面的词是复数 recipes，所以很多学生选 are。"},
 {en:"But 'of ingredients in these recipes' is a prepositional phrase. Cross it out. It can never contain the subject.",ko:"하지만 'of ingredients in these recipes'는 전치사구예요. 지우세요. 전치사구 안에는 주어가 절대 없어요.",zh:"但 of ingredients in these recipes 是介词短语。把它划掉。介词短语里永远不会有主语。",a:['add:#c2:ing']},
 {en:"What is left? 'The list.' One list, so it is singular. 'The list is long.'",ko:"남은 건 뭐죠? 'The list.' 목록 하나니까 단수예요. 'The list is long.'",zh:"剩下什么？The list。一个清单，所以是单数。The list is long.",a:['add:#c1:subj','add:#x1:o','add:#x2:x','in:#c3']}]},
{id:'between',ch:{en:'Extra words in between',ko:'사이에 낀 말',zh:'中间插入的词'},html:`
 <div class="kick">Step 2</div><h2 class="h2">Subject … ← → … verb</h2>
 <div class="pass card h" id="b1" style="font-size:2.3cqw"><span class="tok subj">The <b>director</b></span>, along with her two assistants, <span class="tok verb">plans</span> the schedule.</div>
 <div class="pass card h" id="b2" style="font-size:2.3cqw"><span class="tok subj"><b>Researchers</b></span> who studied the ancient city <span class="tok verb">believe</span> it was abandoned.</div>
 <div class="pass card h" id="b3" style="font-size:2.3cqw"><span class="tok subj">The <b>bridge</b></span>, designed by twelve engineers, <span class="tok verb">connects</span> the two towns.</div>`,
 b:[
 {en:"Other words can also sit between the subject and the verb. Skip them all.",ko:"주어와 동사 사이에는 다른 말도 낄 수 있어요. 전부 건너뛰세요.",zh:"主语和动词之间还会插入其他词。全部跳过。"},
 {en:"'Along with,' 'as well as,' and 'together with' do not make the subject plural. 'The director, along with her two assistants, plans the schedule.'",ko:"along with, as well as, together with는 주어를 복수로 만들지 않아요. 'The director, along with her two assistants, plans the schedule.'",zh:"along with、as well as、together with 不会让主语变成复数。The director, along with her two assistants, plans the schedule.",a:['in:#b1']},
 {en:"Skip who and that clauses too. 'Researchers who studied the ancient city believe.' Researchers, plural, believe.",ko:"who절, that절도 건너뛰세요. 'Researchers who studied the ancient city believe.' 복수인 researchers에 맞춰 believe예요.",zh:"who 从句和 that 从句也要跳过。Researchers who studied the ancient city believe. 复数 researchers 配 believe。",a:['in:#b2']},
 {en:"And skip extra information between commas, from Lesson 3. 'The bridge connects the two towns.'",ko:"3강에서 배운 쉼표 사이의 추가 정보도 건너뛰어요. 'The bridge connects the two towns.'",zh:"第3课学的逗号之间的补充信息也要跳过。The bridge connects the two towns.",a:['in:#b3']},
 {q:{en:{q:'“The collection of letters written by the poet’s friends ___ now kept in a library in Boston.”',o:['are','is'],e:'Cross out “of letters written by the poet’s friends.” The subject is “collection,” which is singular.'},
     ko:{q:'“The collection of letters written by the poet’s friends ___ now kept in a library in Boston.”',o:['are','is'],e:'"of letters written by the poet’s friends"를 지우면 주어는 단수인 collection이에요.'},
     zh:{q:'“The collection of letters written by the poet’s friends ___ now kept in a library in Boston.”',o:['are','is'],e:'划掉 of letters written by the poet’s friends，主语是单数 collection。'},a:1}}]},
{id:'tricky',ch:{en:'Tricky singular words',ko:'헷갈리는 단수',zh:'易混的单数词'},html:`
 <div class="kick">Step 3</div><h2 class="h2" data-l="each"></h2>
 <div class="chips h" id="t1"><span class="chip">each</span><span class="chip">every</span><span class="chip">everyone</span><span class="chip">anyone</span><span class="chip">nobody</span><span class="chip">either</span><span class="chip">neither</span></div>
 <div class="pass card h" id="t2" style="font-size:2.3cqw"><b>Each</b> of the paintings <b style="color:var(--verb)">was</b> restored. ✓</div>
 <div class="pass card h" id="t3" style="font-size:2.3cqw">The <b>team</b> <b style="color:var(--verb)">has</b> won. &nbsp; The <b>committee</b> <b style="color:var(--verb)">meets</b> monthly. ✓</div>
 <div class="pass card h" id="t4" style="font-size:2.3cqw"><b>The number</b> of visitors <b style="color:var(--verb)">is</b> rising. &nbsp;|&nbsp; <b>A number</b> of visitors <b style="color:var(--verb)">are</b> waiting.</div>`,
 b:[
 {en:"Some words are always singular, even though they feel like many: each, every, everyone, anyone, nobody, either, and neither.",ko:"여럿처럼 느껴져도 항상 단수인 말이 있어요. each, every, everyone, anyone, nobody, either, neither예요.",zh:"有些词虽然感觉像很多，但永远是单数：each、every、everyone、anyone、nobody、either、neither。",a:['in:#t1']},
 {en:"'Each of the paintings was restored.' Cross out 'of the paintings,' and 'each' is the subject. Singular.",ko:"'Each of the paintings was restored.' 'of the paintings'를 지우면 주어는 each예요. 단수예요.",zh:"Each of the paintings was restored. 划掉 of the paintings，主语是 each，单数。",a:['in:#t2']},
 {en:"Group nouns like team, committee, and audience are usually singular on the SAT, because they act as one unit.",ko:"team, committee, audience 같은 집합명사는 SAT에서 보통 단수예요. 하나의 단위로 움직이니까요.",zh:"team、committee、audience 这类集合名词在SAT中通常是单数，因为它们作为一个整体行动。",a:['in:#t3']},
 {en:"And remember this pair: 'the number of' is singular, but 'a number of' means many, so it is plural.",ko:"그리고 이 짝을 기억하세요. 'the number of'는 단수, 'a number of'는 많다는 뜻이라 복수예요.",zh:"再记住这一对：the number of 是单数，而 a number of 表示很多，所以是复数。",a:['in:#t4']}]},
{id:'inverted',ch:{en:'Subject after the verb',ko:'동사 뒤 주어',zh:'动词后的主语'},html:`
 <div class="kick">Step 4</div><h2 class="h2" data-l="inv"></h2>
 <div class="pass card h" id="v1" style="font-size:2.3cqw">There <span class="tok verb">are</span> <span class="tok subj">three <b>reasons</b></span> for the delay. ✓</div>
 <div class="pass card h" id="v2" style="font-size:2.3cqw">Among the exhibits <span class="tok verb">was</span> <span class="tok subj">a rare <b>map</b></span> of the coast. ✓</div>
 <div class="pass card h" id="v3" style="font-size:2.3cqw">→ <i>A rare map of the coast was among the exhibits.</i></div>`,
 b:[
 {en:"Sometimes the subject comes after the verb. With 'there is' and 'there are,' the subject follows the verb.",ko:"주어가 동사 뒤에 오는 경우도 있어요. there is, there are 문장에서는 주어가 동사 뒤에 와요.",zh:"有时主语在动词后面。there is 和 there are 句子里，主语在动词之后。"},
 {en:"'There are three reasons for the delay.' The subject is 'reasons,' plural, so 'are.'",ko:"'There are three reasons for the delay.' 주어는 복수인 reasons라서 are예요.",zh:"There are three reasons for the delay. 主语是复数 reasons，所以用 are。",a:['in:#v1']},
 {en:"The SAT also starts sentences with a place phrase: 'Among the exhibits was a rare map of the coast.'",ko:"SAT는 장소를 나타내는 구로 문장을 시작하기도 해요. 'Among the exhibits was a rare map of the coast.'",zh:"SAT还会用地点短语开头：Among the exhibits was a rare map of the coast.",a:['in:#v2']},
 {en:"Flip it into normal order: 'A rare map of the coast was among the exhibits.' Now the subject, 'map,' is clearly singular.",ko:"평소 순서로 뒤집어 보세요. 'A rare map of the coast was among the exhibits.' 이제 주어 map이 단수라는 게 분명해요.",zh:"把它改回正常语序：A rare map of the coast was among the exhibits. 现在主语 map 显然是单数。",a:['in:#v3']}]},
{id:'andor',ch:{en:'“and” vs. “or”',ko:'and와 or',zh:'and 与 or'},html:`
 <div class="kick">Step 5</div><h2 class="h2" data-l="andor"></h2>
 <div class="pass card h" id="a1" style="font-size:2.3cqw"><b>The coach and the captain</b> <b style="color:var(--verb)">agree</b>. ✓</div>
 <div class="pass card h" id="a2" style="font-size:2.3cqw">Either the students or <b>the teacher</b> <b style="color:var(--verb)">has</b> the key. ✓</div>
 <div class="pass card h" id="a3" style="font-size:2.3cqw">Either the teacher or <b>the students</b> <b style="color:var(--verb)">have</b> the key. ✓</div>`,
 b:[
 {en:"Two subjects joined by 'and' make a plural subject. 'The coach and the captain agree.'",ko:"and로 이어진 두 주어는 복수 주어가 돼요. 'The coach and the captain agree.'",zh:"用 and 连接的两个主语构成复数主语。The coach and the captain agree.",a:['in:#a1']},
 {en:"But with 'or' or 'nor,' the verb matches the subject closer to it.",ko:"하지만 or나 nor로 이어지면 동사는 더 가까운 주어에 맞춰요.",zh:"但如果用 or 或 nor 连接，动词与离它更近的主语一致。"},
 {en:"'Either the students or the teacher has the key.' 'Teacher' is closer, so 'has.'",ko:"'Either the students or the teacher has the key.' teacher가 더 가까우니까 has예요.",zh:"Either the students or the teacher has the key. teacher 更近，所以用 has。",a:['in:#a2']},
 {en:"Switch the order, and the verb changes: 'Either the teacher or the students have the key.'",ko:"순서를 바꾸면 동사도 바뀌어요. 'Either the teacher or the students have the key.'",zh:"顺序调换，动词也跟着变：Either the teacher or the students have the key.",a:['in:#a3']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.3cqw">The <span class="tok" id="xs">survival</span> of many bird species that nest on remote islands <b>______</b> on the absence of land predators such as rats.</div>
 <div class="choices"><div id="x1">A) depend</div><div id="x2">B) depends</div><div id="x3">C) have depended</div><div id="x4">D) are depending</div></div>`,
 b:[
 {en:"Let's solve one. First, cross out. 'Of many bird species' is a prepositional phrase. 'That nest on remote islands' is a that clause.",ko:"한 문제 풀어 봐요. 먼저 지우세요. 'of many bird species'는 전치사구, 'that nest on remote islands'는 that절이에요.",zh:"做一道题。先划掉：of many bird species 是介词短语，that nest on remote islands 是 that 从句。"},
 {en:"What is left? 'The survival.' Survival is one thing, so the subject is singular.",ko:"남은 건 'The survival.' survival은 하나니까 주어는 단수예요.",zh:"剩下什么？The survival。survival 是一件事，所以主语是单数。",a:['add:#xs:subj']},
 {en:"A, C, and D are all plural verbs. Only B, 'depends,' is singular. The answer is B.",ko:"A, C, D는 모두 복수 동사예요. 단수 동사는 B 'depends'뿐이에요. 정답은 B예요.",zh:"A、C、D 都是复数动词，只有 B depends 是单数。答案是 B。",a:['add:#x1:x','add:#x3:x','add:#x4:x','add:#x2:o']},
 {q:{en:{q:'“Neither the photographs nor the diary ___ the exact date of the expedition.”',o:['reveal','reveals'],e:'With “nor,” the verb matches the nearer subject, “the diary,” which is singular.'},
     ko:{q:'“Neither the photographs nor the diary ___ the exact date of the expedition.”',o:['reveal','reveals'],e:'nor가 있으면 동사는 더 가까운 주어인 the diary에 맞춰요. 단수예요.'},
     zh:{q:'“Neither the photographs nor the diary ___ the exact date of the expedition.”',o:['reveal','reveals'],e:'有 nor 时，动词与较近的主语 the diary 一致，是单数。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 5</h2>
 <ul class="sum card"><li class="h" id="s1">Cross out <i>of / in / with …</i>, who/that clauses, and extra information</li>
 <li class="h" id="s2">each, every, everyone, either, neither, team → singular · <i>a number of</i> → plural</li>
 <li class="h" id="s3"><i>There is/are</i>, <i>Among … was</i> → flip the order</li>
 <li class="h" id="s4">A <b>and</b> B → plural · A <b>or/nor</b> B → match B</li></ul>`,
 b:[
 {en:"Let's review. To find the real subject, cross out prepositional phrases, who and that clauses, and extra information.",ko:"정리할게요. 진짜 주어를 찾으려면 전치사구, who절과 that절, 추가 정보를 지우세요.",zh:"我们来总结。要找真正的主语，就划掉介词短语、who 和 that 从句以及补充信息。",a:['in:#s1']},
 {en:"Each, every, everyone, either, neither, and group nouns are singular. 'A number of' is plural.",ko:"each, every, everyone, either, neither와 집합명사는 단수예요. 'a number of'는 복수예요.",zh:"each、every、everyone、either、neither 和集合名词是单数。a number of 是复数。",a:['in:#s2']},
 {en:"When the subject comes after the verb, flip the sentence into normal order.",ko:"주어가 동사 뒤에 오면 문장을 평소 순서로 뒤집어 보세요.",zh:"主语在动词后面时，把句子改回正常语序。",a:['in:#s3']},
 {en:"'And' makes a plural subject. With 'or' and 'nor,' match the nearer one. Next lesson: verb tense and verb forms. See you in Lesson 6!",ko:"and는 복수 주어를 만들고, or와 nor는 가까운 쪽에 맞춰요. 다음은 동사의 시제와 형태예요. 6강에서 만나요!",zh:"and 构成复数主语；or 和 nor 与较近的一方一致。下一课：动词时态与形式。第6课见！",a:['in:#s4']}]}];
