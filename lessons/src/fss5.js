META={id:'fss5',k:'FSS',n:9,
 title:{en:'Lesson 9 · Apostrophes: Possessives & Plurals',ko:'9강 · 아포스트로피: 소유격과 복수',zh:'第9课 · 撇号：所有格与复数'},
 desc:{en:'Plural vs. possessive, singular ’s vs. plural s’, irregular plurals, its/it’s, their/they’re, whose/who’s',ko:'복수와 소유격, 단수 ’s와 복수 s’, 불규칙 복수, its/it’s, their/they’re, whose/who’s',zh:'复数与所有格、单数 ’s 与复数 s’、不规则复数、its/it’s、their/they’re、whose/who’s'},
 endh:{en:'Lesson 9 complete',ko:'9강 완료',zh:'第9课完成'},
 endp:{en:'You have finished the grammar units. Mix all the rules in practice.',ko:'문법 단원을 모두 마쳤어요. 이제 규칙을 섞어서 연습해요.',zh:'语法单元全部完成。现在把所有规则混合起来练习。'}};
L={en:{q1:'Q1. More than one?',q2:'Q2. Does it own the next noun?',own:'owns something',plural:'more than one',pron:'Pronouns never take ’ for possession'},
 ko:{q1:'질문 1. 여러 개인가?',q2:'질문 2. 다음 명사를 소유하나?',own:'무언가를 가짐',plural:'여러 개',pron:'대명사의 소유격에는 ’를 쓰지 않음'},
 zh:{q1:'问题1：不止一个吗？',q2:'问题2：它拥有后面的名词吗？',own:'拥有某物',plural:'不止一个',pron:'代词的所有格从不加 ’'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 2 · Form, Structure, and Sense</div><h2 class="h2" data-l="title"></h2>
 <div class="choices h" id="i1" style="grid-template-columns:repeat(4,1fr)"><div>scientist</div><div>scientists</div><div>scientist’s</div><div>scientists’</div></div>`,
 b:[
 {en:"Welcome to Lesson 9, the last grammar lesson. When the choices look like this, the SAT is testing apostrophes.",ko:"9강에 오신 걸 환영해요. 마지막 문법 강의예요. 선택지가 이렇게 생겼다면 SAT는 아포스트로피를 묻고 있어요.",zh:"欢迎来到第9课，这是最后一节语法课。如果选项长这样，SAT考的是撇号。",a:['in:#i1']},
 {en:"Scientist, scientists, scientist's, scientists'. They sound the same, so you must decide by meaning.",ko:"scientist, scientists, scientist's, scientists'. 발음이 같아서 뜻으로 판단해야 해요.",zh:"scientist、scientists、scientist's、scientists'。读音一样，所以必须靠意思来判断。"},
 {en:"Two questions solve almost every one of these.",ko:"질문 두 개면 거의 다 풀려요.",zh:"两个问题几乎就能解决所有这类题。"}]},
{id:'two',ch:{en:'Two questions',ko:'두 가지 질문',zh:'两个问题'},html:`
 <div class="kick">Method</div><h2 class="h2">2 questions</h2>
 <div class="grid2"><div class="card h" id="q1"><b data-l="q1"></b><div class="pass" style="margin-top:1cqw">no → scientist &nbsp; yes → scientists</div></div>
 <div class="card h" id="q2"><b data-l="q2"></b><div class="pass" style="margin-top:1cqw">one owner → scientist<b style="color:var(--ok)">’s</b><br>many owners → scientists<b style="color:var(--ok)">’</b></div></div></div>
 <table class="tbl h" id="q3" style="width:100%"><tr><th></th><th>one</th><th>more than one</th></tr><tr><th>no ownership</th><td>scientist</td><td>scientists</td></tr><tr><th>owns the next noun</th><td>scientist’s notes</td><td>scientists’ notes</td></tr></table>`,
 b:[
 {en:"Question one: is there one, or more than one? That decides the s.",ko:"질문 1. 하나인가, 여러 개인가? 이게 s를 결정해요.",zh:"问题一：是一个还是不止一个？这决定了 s。",a:['in:#q1']},
 {en:"Question two: does it own the noun that comes right after it? If yes, add an apostrophe.",ko:"질문 2. 바로 뒤에 오는 명사를 소유하나요? 그렇다면 아포스트로피를 붙여요.",zh:"问题二：它拥有紧跟在后面的名词吗？如果是，就加撇号。",a:['in:#q2']},
 {en:"One owner: apostrophe then s, as in 'the scientist's notes.' Many owners ending in s: just the apostrophe after the s, as in 'the scientists' notes.'",ko:"소유자가 하나면 아포스트로피 다음 s, 'the scientist's notes.' 소유자가 여럿이고 s로 끝나면 s 뒤에 아포스트로피만, 'the scientists' notes.'",zh:"一个拥有者：撇号加 s，比如 the scientist's notes。多个拥有者且以 s 结尾：只在 s 后加撇号，比如 the scientists' notes。",a:['in:#q3']}]},
{id:'plural',ch:{en:'Plural ≠ possessive',ko:'복수 ≠ 소유격',zh:'复数 ≠ 所有格'},html:`
 <div class="kick">Trap</div><h2 class="h2">Plural ≠ possessive</h2>
 <div class="pass card h" id="p1" style="font-size:2.3cqw">The <b style="color:var(--bad)">researcher’s</b> collected samples from ten lakes. ✗</div>
 <div class="pass card h" id="p2" style="font-size:2.3cqw">The <b style="color:var(--ok)">researchers</b> collected samples from ten lakes. ✓ <span class="small">(no ownership)</span></div>
 <div class="pass card h" id="p3" style="font-size:2.3cqw">The <b style="color:var(--ok)">children’s</b> museum · the <b style="color:var(--ok)">women’s</b> team <span class="small">(irregular plural → ’s)</span></div>`,
 b:[
 {en:"The most common mistake is using an apostrophe just because a word is plural. 'The researcher's collected samples.'",ko:"가장 흔한 실수는 복수라는 이유만으로 아포스트로피를 붙이는 거예요. 'The researcher's collected samples.'",zh:"最常见的错误是仅仅因为单词是复数就加撇号。The researcher's collected samples.",a:['in:#p1']},
 {en:"Do the researchers own anything here? No. 'Collected' is a verb, not something they own. So no apostrophe: 'The researchers collected samples.'",ko:"여기서 연구자들이 무언가를 소유하나요? 아니요. collected는 동사지 소유물이 아니에요. 그래서 아포스트로피 없이 'The researchers collected samples.'",zh:"这里研究人员拥有什么吗？没有。collected 是动词，不是他们拥有的东西。所以不加撇号：The researchers collected samples.",a:['in:#p2']},
 {en:"Irregular plurals that do not end in s, like children and women, take apostrophe s: 'the children's museum.'",ko:"children, women처럼 s로 끝나지 않는 불규칙 복수는 아포스트로피 s를 붙여요. 'the children's museum.'",zh:"不以 s 结尾的不规则复数，比如 children 和 women，加撇号和 s：the children's museum。",a:['in:#p3']},
 {q:{en:{q:'“The two ___ reports reached the same conclusion.”',o:['scientist’s','scientists’','scientists'],e:'“Two” means more than one, and the reports belong to them. Plural owner ending in s → scientists’.'},
     ko:{q:'“The two ___ reports reached the same conclusion.”',o:['scientist’s','scientists’','scientists'],e:'two니까 여러 명이고, 보고서는 그들의 것이에요. s로 끝나는 복수 소유자 → scientists’.'},
     zh:{q:'“The two ___ reports reached the same conclusion.”',o:['scientist’s','scientists’','scientists'],e:'two 表示不止一个，报告属于他们。以 s 结尾的复数拥有者 → scientists’。'},a:1}}]},
{id:'pron',ch:{en:'its / it’s',ko:'its / it’s',zh:'its / it’s'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="pron"></h2>
 <table class="tbl h" id="r1" style="width:100%"><tr><th>possessive (no ’)</th><th>contraction (’ = missing letters)</th></tr>
 <tr><td>its</td><td>it’s = it is / it has</td></tr><tr><td>their</td><td>they’re = they are</td></tr><tr><td>whose</td><td>who’s = who is / who has</td></tr><tr><td>your</td><td>you’re = you are</td></tr></table>
 <div class="pass card h" id="r2" style="font-size:2.2cqw">The city updated <b style="color:var(--ok)">its</b> map. → “updated it is map”? ✗ → <b>its</b></div>`,
 b:[
 {en:"Now pronouns. Here is the key: possessive pronouns never use an apostrophe. Its, their, whose, your.",ko:"이제 대명사예요. 핵심은 이거예요. 대명사의 소유격에는 절대 아포스트로피가 없어요. its, their, whose, your.",zh:"现在看代词。关键是：代词的所有格永远不用撇号。its、their、whose、your。",a:['in:#r1']},
 {en:"With pronouns, an apostrophe means missing letters. It's means it is or it has. They're means they are. Who's means who is.",ko:"대명사에서 아포스트로피는 글자가 빠졌다는 뜻이에요. it's는 it is나 it has, they're는 they are, who's는 who is예요.",zh:"在代词里，撇号表示省略了字母。it's 是 it is 或 it has，they're 是 they are，who's 是 who is。"},
 {en:"Test it by expanding. 'The city updated it is map' makes no sense, so the answer is 'its' with no apostrophe.",ko:"풀어서 확인하세요. 'The city updated it is map'은 말이 안 되니까 정답은 아포스트로피 없는 its예요.",zh:"展开来检验。The city updated it is map 讲不通，所以答案是不带撇号的 its。",a:['in:#r2']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.2cqw">The study tracked how quickly several bird <b>______</b> recovered after a severe winter storm.</div>
 <div class="choices"><div id="x1">A) species’ populations</div><div id="x2">B) species populations’</div><div id="x3">C) specie’s populations</div><div id="x4">D) species population’s</div></div>`,
 b:[
 {en:"Let's solve one. Two blanks at once. Start with the second word: does 'populations' own anything? The next word is 'recovered,' a verb. No ownership, so 'populations' with no apostrophe.",ko:"한 문제 풀어 봐요. 두 단어를 한꺼번에 봐요. 두 번째 단어부터. populations가 무언가를 소유하나요? 다음 단어는 동사 recovered예요. 소유가 없으니 아포스트로피 없는 populations예요.",zh:"做一道题。一次看两个词。先看第二个词：populations 拥有什么吗？下一个词是动词 recovered。没有所属关系，所以是不带撇号的 populations。",a:['add:#x2:x','add:#x4:x']},
 {en:"Now 'species.' 'Several' means more than one, and the populations belong to the species. 'Species' is the same in singular and plural, so the plural possessive is 'species,' with an apostrophe after the s.",ko:"이제 species. several이니까 여러 종이고, 개체군은 종의 것이에요. species는 단수와 복수가 같아서, 복수 소유격은 s 뒤에 아포스트로피를 붙여요.",zh:"再看 species。several 表示不止一种，种群属于物种。species 单复数同形，所以复数所有格是在 s 后加撇号。"},
 {en:"'Specie's' is not the word we want. The answer is A.",ko:"specie's는 우리가 원하는 단어가 아니에요. 정답은 A예요.",zh:"specie's 不是我们要的词。答案是 A。",a:['add:#x3:x','add:#x1:o']},
 {q:{en:{q:'“The museum, ___ collection includes over 4,000 fossils, opened a new wing.”',o:['who’s','whose','who is'],e:'The collection belongs to the museum, so use the possessive “whose.” “Who’s” means “who is.”'},
     ko:{q:'“The museum, ___ collection includes over 4,000 fossils, opened a new wing.”',o:['who’s','whose','who is'],e:'소장품은 박물관의 것이니까 소유격 whose를 써요. who’s는 who is라는 뜻이에요.'},
     zh:{q:'“The museum, ___ collection includes over 4,000 fossils, opened a new wing.”',o:['who’s','whose','who is'],e:'藏品属于博物馆，所以用所有格 whose。who’s 的意思是 who is。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 9</h2>
 <ul class="sum card"><li class="h" id="s1">Q1 more than one? → s · Q2 owns the next noun? → ’</li>
 <li class="h" id="s2">one owner → <b>’s</b> · plural owner ending in s → <b>s’</b> · children → <b>children’s</b></li>
 <li class="h" id="s3">Plural without ownership → no ’</li>
 <li class="h" id="s4">its · their · whose = possessive · it’s · they’re · who’s = contraction</li></ul>`,
 b:[
 {en:"Let's review. Ask two questions: more than one, and does it own the next noun?",ko:"정리할게요. 두 가지를 물어보세요. 여러 개인가, 그리고 다음 명사를 소유하나?",zh:"我们来总结。问两个问题：不止一个吗？它拥有后面的名词吗？",a:['in:#s1']},
 {en:"One owner takes apostrophe s. A plural owner ending in s takes just an apostrophe.",ko:"소유자가 하나면 아포스트로피 s, s로 끝나는 복수 소유자는 아포스트로피만 붙여요.",zh:"一个拥有者加撇号和 s；以 s 结尾的复数拥有者只加撇号。",a:['in:#s2']},
 {en:"A plural that does not own anything gets no apostrophe.",ko:"아무것도 소유하지 않는 복수에는 아포스트로피가 없어요.",zh:"不拥有任何东西的复数不加撇号。",a:['in:#s3']},
 {en:"And pronouns never use an apostrophe for possession. That completes grammar. Next, we move to vocabulary: words in context. See you in Lesson 10!",ko:"그리고 대명사 소유격에는 아포스트로피를 쓰지 않아요. 이것으로 문법을 마쳤어요. 다음은 어휘, 문맥 속 단어예요. 10강에서 만나요!",zh:"代词表示所属时从不用撇号。语法到此结束。接下来进入词汇：语境中的词义。第10课见！",a:['in:#s4']}]}];
