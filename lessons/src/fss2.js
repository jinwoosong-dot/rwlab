META={id:'fss2',k:'FSS',n:6,
 title:{en:'Lesson 6 · Verb Tense & Verb Forms',ko:'6강 · 동사의 시제와 형태',zh:'第6课 · 动词时态与形式'},
 desc:{en:'Every sentence needs a main verb, -ing and “to” forms, tense clues in the passage, perfect tenses, past participles',ko:'모든 문장에는 본동사가 필요, -ing와 to 형태, 지문 속 시제 단서, 완료 시제, 과거분사',zh:'每个句子都需要谓语动词、-ing 与 to 形式、文中的时态线索、完成时、过去分词'},
 endh:{en:'Lesson 6 complete',ko:'6강 완료',zh:'第6课完成'},
 endp:{en:'Practice checking for a main verb and a time clue in every question.',ko:'모든 문제에서 본동사와 시간 단서를 확인하는 연습을 해요.',zh:'练习在每道题里检查谓语动词和时间线索。'}};
L={en:{main:'Every sentence needs a main verb (with tense)',notmain:'Cannot be the main verb',clue:'Look for a time clue',perf:'Perfect tenses',pp:'have / has / had + past participle'},
 ko:{main:'모든 문장에는 시제 있는 본동사가 필요',notmain:'본동사가 될 수 없음',clue:'시간 단서를 찾으세요',perf:'완료 시제',pp:'have / has / had + 과거분사'},
 zh:{main:'每个句子都需要有时态的谓语动词',notmain:'不能作谓语动词',clue:'寻找时间线索',perf:'完成时',pp:'have / has / had + 过去分词'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 2 · Form, Structure, and Sense</div><h2 class="h2" data-l="title"></h2>
 <div class="row"><div class="card h" id="i1" style="flex:1;font-size:2.2cqw">① <b data-l="main"></b></div><div class="card h" id="i2" style="flex:1;font-size:2.2cqw">② <b data-l="clue"></b></div></div>`,
 b:[
 {en:"Welcome to Lesson 6. When the four answer choices are different forms of the same verb, the SAT is testing one of two things.",ko:"6강에 오신 걸 환영해요. 선택지 네 개가 같은 동사의 다른 형태라면, SAT는 둘 중 하나를 묻고 있어요.",zh:"欢迎来到第6课。如果四个选项是同一个动词的不同形式，SAT考的是两件事之一。"},
 {en:"First: does the sentence have a main verb? Second: which tense fits the time of the passage?",ko:"첫째, 문장에 본동사가 있는가? 둘째, 지문의 시간에 맞는 시제는 무엇인가?",zh:"第一：句子有没有谓语动词？第二：哪个时态符合文章的时间？",a:['in:#i1','in:#i2']},
 {en:"Check them in that order. It solves most verb questions quickly.",ko:"이 순서대로 확인하세요. 동사 문제 대부분이 빠르게 풀려요.",zh:"按这个顺序检查，大多数动词题都能很快解决。"}]},
{id:'main',ch:{en:'Main verb',ko:'본동사',zh:'谓语动词'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="main"></h2>
 <div class="chips h" id="m1"><span class="chip y" data-l="notmain"></span><span class="chip">studying</span><span class="chip">to study</span><span class="chip">having studied</span></div>
 <div class="big card h" id="m2" style="font-size:2.5cqw">The engineers <span class="tok" id="m2v">testing</span> the new design. <span class="stamp no h" id="m2x">✗</span></div>
 <div class="big card h" id="m3" style="font-size:2.5cqw">The engineers <span class="tok verb">tested</span> the new design. <span class="stamp ok">✓</span></div>`,
 b:[
 {en:"Remember from Lesson 1: a complete sentence needs a verb with a tense.",ko:"1강을 기억하세요. 완전한 문장에는 시제 있는 동사가 필요해요.",zh:"回忆第1课：完整句子需要有时态的动词。"},
 {en:"Forms ending in i-n-g, forms with 'to,' and 'having' forms cannot be the main verb by themselves.",ko:"ing로 끝나는 형태, to가 붙은 형태, having 형태는 혼자서 본동사가 될 수 없어요.",zh:"以 ing 结尾的形式、带 to 的形式和 having 形式都不能单独作谓语动词。",a:['in:#m1']},
 {en:"'The engineers testing the new design.' There is no tensed verb. It is a fragment.",ko:"'The engineers testing the new design.' 시제 있는 동사가 없어요. 문장 조각이에요.",zh:"The engineers testing the new design. 没有有时态的动词，这是句子片段。",a:['in:#m2','add:#m2v:ing','in:#m2x']},
 {en:"'The engineers tested the new design.' Now it has a main verb.",ko:"'The engineers tested the new design.' 이제 본동사가 있어요.",zh:"The engineers tested the new design. 现在有谓语动词了。",a:['in:#m3']}]},
{id:'trap',ch:{en:'Long-sentence trap',ko:'긴 문장 함정',zh:'长句陷阱'},html:`
 <div class="kick">Trap</div><h2 class="h2">Where is the main verb?</h2>
 <div class="pass card" style="font-size:2.3cqw"><span class="tok" id="t0">The archaeologists</span>, <span class="hl">who had spent a decade searching the valley</span>, <b>______</b> the ruins of a temple in 2016.</div>
 <div class="choices"><div id="x1">A) discovering</div><div id="x2">B) to discover</div><div id="x3">C) discovered</div><div id="x4">D) having discovered</div></div>`,
 b:[
 {en:"The SAT hides this in long sentences. 'The archaeologists, who had spent a decade searching the valley, blank, the ruins of a temple in 2016.'",ko:"SAT는 이걸 긴 문장 속에 숨겨요. 'The archaeologists, who had spent a decade searching the valley' 다음 빈칸, 그리고 'the ruins of a temple in 2016.'",zh:"SAT会把它藏在长句里：The archaeologists, who had spent a decade searching the valley，空格，the ruins of a temple in 2016.",a:['add:#t0:subj']},
 {en:"'Had spent' is a verb, but it belongs to the who clause. It is extra information. The main sentence still needs its own verb.",ko:"'had spent'도 동사지만 who절에 속해요. 추가 정보예요. 주된 문장에는 여전히 자기 동사가 필요해요.",zh:"had spent 也是动词，但它属于 who 从句，是补充信息。主句仍然需要自己的动词。"},
 {en:"Only 'discovered' has a tense. A, B, and D would leave the sentence without a main verb. The answer is C.",ko:"시제가 있는 건 'discovered'뿐이에요. A, B, D를 고르면 문장에 본동사가 없어요. 정답은 C예요.",zh:"只有 discovered 有时态。选 A、B、D，句子就没有谓语动词。答案是 C。",a:['add:#x1:x','add:#x2:x','add:#x4:x','add:#x3:o']},
 {q:{en:{q:'“The new library, designed to hold over a million books, ___ to the public next spring.”',o:['opening','will open','to open'],e:'The sentence needs a main verb. “Designed” belongs to the extra information. Only “will open” has a tense.'},
     ko:{q:'“The new library, designed to hold over a million books, ___ to the public next spring.”',o:['opening','will open','to open'],e:'문장에 본동사가 필요해요. designed는 추가 정보에 속해요. 시제가 있는 건 will open뿐이에요.'},
     zh:{q:'“The new library, designed to hold over a million books, ___ to the public next spring.”',o:['opening','will open','to open'],e:'句子需要谓语动词。designed 属于补充信息，只有 will open 有时态。'},a:1}}]},
{id:'tense',ch:{en:'Tense clues',ko:'시제 단서',zh:'时态线索'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="clue"></h2>
 <div class="chips h" id="c1"><span class="chip">In 1937</span><span class="chip">last year</span><span class="chip">currently</span><span class="chip">since 2010</span><span class="chip">by the time</span></div>
 <div class="pass card h" id="c2" style="font-size:2.2cqw">In 1890, the city <span class="tok verb">built</span> a canal. The canal <span class="tok good">carried</span> goods to the coast and <b>______</b> the local economy.</div>
 <div class="choices h" id="c3"><div class="x">grows</div><div class="o">grew</div><div class="x">will grow</div><div class="x">has grown</div></div>`,
 b:[
 {en:"If all the choices are tensed verbs, look for a time clue: a date, a word like 'currently' or 'last year,' or the tense of nearby verbs.",ko:"선택지가 모두 시제 있는 동사라면 시간 단서를 찾으세요. 날짜, currently나 last year 같은 말, 또는 주변 동사의 시제요.",zh:"如果选项都是有时态的动词，就找时间线索：日期、currently 或 last year 这类词，或者附近动词的时态。",a:['in:#c1']},
 {en:"'In 1890, the city built a canal. The canal carried goods to the coast and, blank, the local economy.'",ko:"'In 1890, the city built a canal. The canal carried goods to the coast and' 다음 빈칸, 'the local economy.'",zh:"In 1890, the city built a canal. The canal carried goods to the coast and，空格，the local economy.",a:['in:#c2']},
 {en:"The date is in the past, and the nearby verbs 'built' and 'carried' are past tense. So the answer is 'grew.'",ko:"날짜가 과거이고 주변 동사 built와 carried도 과거 시제예요. 그래서 정답은 grew예요.",zh:"日期是过去，附近的动词 built 和 carried 也是过去时。所以答案是 grew。",a:['in:#c3']},
 {en:"Do not pick a tense because it sounds fancy. Match the time of the passage.",ko:"멋있어 보이는 시제를 고르지 마세요. 지문의 시간에 맞추세요.",zh:"不要因为听起来高级就选某个时态。要与文章的时间一致。"}]},
{id:'perfect',ch:{en:'Perfect tenses',ko:'완료 시제',zh:'完成时'},html:`
 <div class="kick">Step 3</div><h2 class="h2" data-l="perf"></h2>
 <div class="pass card h" id="p1" style="font-size:2.2cqw"><b>has / have + p.p.</b> past → now: The museum <b style="color:var(--verb)">has displayed</b> the map <b>since 2010</b>.</div>
 <div class="pass card h" id="p2" style="font-size:2.2cqw"><b>had + p.p.</b> earlier past: The train <b style="color:var(--verb)">had left</b> <b>by the time</b> we arrived.</div>
 <div class="pass card h" id="p3" style="font-size:2.2cqw"><b>will have + p.p.</b> before a future point: By 2030, the city <b style="color:var(--verb)">will have planted</b> a million trees.</div>`,
 b:[
 {en:"Now perfect tenses. 'Has' or 'have' plus a past participle connects the past to now. 'Since' and 'for' are strong clues.",ko:"이제 완료 시제예요. has나 have에 과거분사를 붙이면 과거부터 지금까지를 이어요. since와 for가 강한 단서예요.",zh:"现在看完成时。has 或 have 加过去分词，把过去和现在连起来。since 和 for 是强线索。",a:['in:#p1']},
 {en:"'Had' plus a past participle shows an action that happened before another past action. 'The train had left by the time we arrived.'",ko:"had에 과거분사를 붙이면 다른 과거 일보다 먼저 일어난 일을 나타내요. 'The train had left by the time we arrived.'",zh:"had 加过去分词表示在另一个过去动作之前发生的事。The train had left by the time we arrived.",a:['in:#p2']},
 {en:"And 'will have' plus a past participle means something will be finished before a point in the future.",ko:"will have에 과거분사를 붙이면 미래의 어느 시점 전에 끝나 있을 일을 뜻해요.",zh:"will have 加过去分词表示在将来某个时间点之前会完成的事。",a:['in:#p3']}]},
{id:'forms',ch:{en:'Past participles',ko:'과거분사',zh:'过去分词'},html:`
 <div class="kick">Step 4</div><h2 class="h2" data-l="pp"></h2>
 <table class="tbl h" id="f1" style="width:100%"><tr><th>base</th><th>past</th><th>past participle</th></tr>
 <tr><td>write</td><td>wrote</td><td class="hit">written</td></tr><tr><td>begin</td><td>began</td><td class="hit">begun</td></tr><tr><td>rise</td><td>rose</td><td class="hit">risen</td></tr><tr><td>choose</td><td>chose</td><td class="hit">chosen</td></tr></table>
 <div class="pass card h" id="f2" style="font-size:2.2cqw">She has <span style="text-decoration:line-through;color:var(--bad)">wrote</span> <b style="color:var(--ok)">written</b> three novels.</div>`,
 b:[
 {en:"After have, has, or had, you need the past participle, not the simple past.",ko:"have, has, had 뒤에는 단순 과거형이 아니라 과거분사를 써야 해요.",zh:"在 have、has 或 had 后面，要用过去分词，而不是一般过去式。"},
 {en:"For many irregular verbs, they look different: write, wrote, written. Begin, began, begun. Rise, rose, risen.",ko:"불규칙 동사는 모양이 달라요. write, wrote, written. begin, began, begun. rise, rose, risen.",zh:"很多不规则动词形式不同：write, wrote, written；begin, began, begun；rise, rose, risen。",a:['in:#f1']},
 {en:"So 'She has wrote three novels' is wrong. It should be 'She has written three novels.'",ko:"그래서 'She has wrote three novels'는 틀려요. 'She has written three novels'가 맞아요.",zh:"所以 She has wrote three novels 是错的，应该是 She has written three novels。",a:['in:#f2']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.2cqw">Since the first wind turbines were installed off its coast in 1991, Denmark <b>______</b> one of the world’s leaders in offshore wind energy.</div>
 <div class="choices"><div id="x1">A) became</div><div id="x2">B) has become</div><div id="x3">C) becoming</div><div id="x4">D) will become</div></div>`,
 b:[
 {en:"Let's solve one. First, the main verb check. C, 'becoming,' has no tense. Eliminate it.",ko:"한 문제 풀어 봐요. 먼저 본동사 확인. C 'becoming'은 시제가 없어요. 지워요.",zh:"做一道题。先检查谓语动词。C becoming 没有时态，排除。",a:['add:#x3:x']},
 {en:"Now the time clue: 'Since 1991.' 'Since' connects the past to now. That calls for the present perfect.",ko:"이제 시간 단서. 'Since 1991.' since는 과거부터 지금까지를 이어요. 현재완료가 필요해요.",zh:"再看时间线索：Since 1991。since 把过去和现在连起来，需要现在完成时。"},
 {en:"'Became' stays only in the past, and 'will become' is the future. The answer is B, 'has become.'",ko:"became은 과거에만 머물고, will become은 미래예요. 정답은 B 'has become'이에요.",zh:"became 只停留在过去，will become 是将来。答案是 B has become。",a:['add:#x1:x','add:#x4:x','add:#x2:o']},
 {q:{en:{q:'“By the time the rescue team arrived, the storm ___ most of the village.”',o:['damages','had damaged','has damaged'],e:'The damage happened before another past event (the team arrived), so use the past perfect “had damaged.”'},
     ko:{q:'“By the time the rescue team arrived, the storm ___ most of the village.”',o:['damages','had damaged','has damaged'],e:'피해는 다른 과거 일(구조대 도착)보다 먼저 일어났으니 과거완료 had damaged를 써요.'},
     zh:{q:'“By the time the rescue team arrived, the storm ___ most of the village.”',o:['damages','had damaged','has damaged'],e:'损坏发生在另一个过去事件（救援队到达）之前，所以用过去完成时 had damaged。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 6</h2>
 <ul class="sum card"><li class="h" id="s1">Main verb first: <i>-ing, to ___, having ___</i> → not a main verb</li>
 <li class="h" id="s2">Time clue: dates, <i>currently, last year</i>, nearby verbs</li>
 <li class="h" id="s3"><i>since / for</i> → has/have + p.p. · earlier past → had + p.p.</li>
 <li class="h" id="s4">have / has / had + <b>past participle</b> (written, begun, risen)</li></ul>`,
 b:[
 {en:"Let's review. First, make sure the sentence has a main verb. i-n-g forms, 'to' forms, and 'having' forms do not count.",ko:"정리할게요. 먼저 문장에 본동사가 있는지 확인하세요. ing 형태, to 형태, having 형태는 본동사가 아니에요.",zh:"我们来总结。首先确认句子有谓语动词。ing 形式、to 形式和 having 形式都不算。",a:['in:#s1']},
 {en:"Second, find a time clue and match the tense.",ko:"둘째, 시간 단서를 찾아 시제를 맞추세요.",zh:"第二，找时间线索，让时态一致。",a:['in:#s2']},
 {en:"'Since' and 'for' point to the present perfect. An earlier past points to the past perfect.",ko:"since와 for는 현재완료, 더 이전의 과거는 과거완료를 가리켜요.",zh:"since 和 for 指向现在完成时；更早的过去指向过去完成时。",a:['in:#s3']},
 {en:"And after have, has, or had, use the past participle. Next lesson: pronouns. See you in Lesson 7!",ko:"그리고 have, has, had 뒤에는 과거분사를 써요. 다음은 대명사예요. 7강에서 만나요!",zh:"在 have、has、had 后面用过去分词。下一课：代词。第7课见！",a:['in:#s4']}]}];
