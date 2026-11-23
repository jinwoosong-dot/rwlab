META={id:'fss3',k:'FSS',n:7,
 title:{en:'Lesson 7 · Pronouns',ko:'7강 · 대명사',zh:'第7课 · 代词'},
 desc:{en:'Find the noun a pronoun replaces, it vs. they for companies and groups, unclear pronouns, I vs. me, who vs. whom',ko:'대명사가 가리키는 명사 찾기, 회사·단체는 it, 애매한 대명사, I와 me, who와 whom',zh:'找到代词指代的名词、公司和团体用 it、指代不清、I 与 me、who 与 whom'},
 endh:{en:'Lesson 7 complete',ko:'7강 완료',zh:'第7课完成'},
 endp:{en:'Practice drawing an arrow from every pronoun to its noun.',ko:'모든 대명사에서 명사로 화살표를 그리는 연습을 해요.',zh:'练习从每个代词画箭头指向它的名词。'}};
L={en:{agree:'Pronoun ↔ the noun it replaces',sg:'singular',pl:'plural',group:'company, team, city, study → it / its',unclear:'Unclear: who is “she”?',case1:'Subject form',case2:'Object form',cover:'Cover the other person'},
 ko:{agree:'대명사 ↔ 가리키는 명사',sg:'단수',pl:'복수',group:'company, team, city, study → it / its',unclear:'애매함: she가 누구?',case1:'주격',case2:'목적격',cover:'다른 사람을 가려 보기'},
 zh:{agree:'代词 ↔ 它指代的名词',sg:'单数',pl:'复数',group:'company、team、city、study → it / its',unclear:'指代不清：she 是谁？',case1:'主格',case2:'宾格',cover:'遮住另一个人'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 2 · Form, Structure, and Sense</div><h2 class="h2" data-l="title"></h2>
 <div class="pass card h" id="i1" style="font-size:2.5cqw"><span class="tok" id="i1a">The scientists</span> published <span class="tok" id="i1b">their</span> results.</div>
 <div class="card h" id="i2" style="font-size:2.3cqw">➜ <b data-l="agree"></b></div>`,
 b:[
 {en:"Welcome to Lesson 7. A pronoun is a short word that replaces a noun: it, they, she, him, their, and so on.",ko:"7강에 오신 걸 환영해요. 대명사는 명사를 대신하는 짧은 말이에요. it, they, she, him, their 같은 거요.",zh:"欢迎来到第7课。代词是替代名词的短词：it、they、she、him、their 等。",a:['in:#i1']},
 {en:"Every pronoun must clearly match the noun it replaces. 'The scientists published their results.' 'Their' points back to 'scientists.'",ko:"모든 대명사는 가리키는 명사와 분명하게 맞아야 해요. 'The scientists published their results.' their는 scientists를 가리켜요.",zh:"每个代词都必须和它指代的名词明确一致。The scientists published their results. their 指回 scientists。",a:['add:#i1a:subj','add:#i1b:verb','in:#i2']},
 {en:"Your method: draw an arrow from the pronoun back to its noun, then check that they match.",ko:"방법은 이거예요. 대명사에서 명사로 화살표를 그리고, 둘이 맞는지 확인하세요.",zh:"方法是：从代词画箭头指回名词，然后检查两者是否一致。"}]},
{id:'agree',ch:{en:'Singular or plural',ko:'단수 또는 복수',zh:'单数还是复数'},html:`
 <div class="kick">Step 1</div><h2 class="h2" data-l="agree"></h2>
 <div class="pass card" style="font-size:2.3cqw"><span class="tok" id="a1">The museum</span> in the old train station opened <b>______</b> doors to visitors in 1986.</div>
 <div class="choices"><div id="x1">their</div><div id="x2">its</div></div>
 <div class="card h" id="a2" style="font-size:2.2cqw">museum = 1 → <b>its</b> &nbsp;·&nbsp; <span data-l="group"></span></div>`,
 b:[
 {en:"The most common pronoun question is singular or plural. 'The museum in the old train station opened, blank, doors to visitors.'",ko:"가장 흔한 대명사 문제는 단수냐 복수냐예요. 'The museum in the old train station opened' 다음 빈칸, 'doors to visitors.'",zh:"最常见的代词题是单数还是复数。The museum in the old train station opened，空格，doors to visitors.",a:['add:#a1:subj']},
 {en:"Draw the arrow. Whose doors? The museum's. One museum, so the pronoun is singular: 'its.'",ko:"화살표를 그려 보세요. 누구의 문이죠? 박물관의 문이에요. 박물관 하나니까 대명사는 단수 its예요.",zh:"画箭头。谁的门？博物馆的门。一个博物馆，所以代词是单数 its。",a:['add:#x1:x','add:#x2:o']},
 {en:"Many students write 'their' for companies, schools, and teams. On the SAT, these are singular: 'it' and 'its.'",ko:"많은 학생이 회사, 학교, 팀에 their를 써요. SAT에서 이런 명사는 단수라서 it과 its를 써요.",zh:"很多学生会给公司、学校、团队用 their。在SAT中这些都是单数，要用 it 和 its。",a:['in:#a2']},
 {q:{en:{q:'“After two years of testing, the company announced that ___ new battery would go on sale in May.”',o:['their','its','they'],e:'“The company” is one company, so the singular possessive “its” is correct.'},
     ko:{q:'“After two years of testing, the company announced that ___ new battery would go on sale in May.”',o:['their','its','they'],e:'the company는 회사 하나라서 단수 소유격 its가 맞아요.'},
     zh:{q:'“After two years of testing, the company announced that ___ new battery would go on sale in May.”',o:['their','its','they'],e:'the company 是一家公司，所以用单数所有格 its。'},a:1}}]},
{id:'far',ch:{en:'Far-away nouns',ko:'멀리 있는 명사',zh:'距离较远的名词'},html:`
 <div class="kick">Trap</div><h2 class="h2">The nearest noun is not always the one</h2>
 <div class="pass card" style="font-size:2.2cqw"><span class="tok" id="f1">The bees</span> that live in the old oak tree near the river return to <b>______</b> hive at dusk.</div>
 <div class="choices"><div id="x1">its</div><div id="x2">their</div></div>`,
 b:[
 {en:"Be careful: the nearest noun is not always the one the pronoun replaces.",ko:"조심하세요. 가장 가까운 명사가 항상 대명사가 가리키는 명사는 아니에요.",zh:"注意：最近的名词不一定是代词指代的那个。"},
 {en:"'The bees that live in the old oak tree near the river return to, blank, hive.' Tree and river are close, but they do not return to a hive.",ko:"'The bees that live in the old oak tree near the river return to' 다음 빈칸, 'hive.' tree와 river가 가깝지만, 벌집으로 돌아가는 건 그것들이 아니에요.",zh:"The bees that live in the old oak tree near the river return to，空格，hive. tree 和 river 离得近，但回到蜂巢的不是它们。"},
 {en:"Who returns? The bees. Plural, so 'their.' Always ask what makes sense, not what is closest.",ko:"누가 돌아가죠? 벌들이에요. 복수니까 their예요. 가까운 게 아니라 뜻이 통하는 걸 찾으세요.",zh:"谁回去？蜜蜂。复数，所以用 their。永远问什么在意思上说得通，而不是哪个最近。",a:['add:#f1:subj','add:#x1:x','add:#x2:o']}]},
{id:'unclear',ch:{en:'Unclear pronouns',ko:'애매한 대명사',zh:'指代不清'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="unclear"></h2>
 <div class="pass card h" id="u1" style="font-size:2.3cqw">Maria called her sister after <b style="color:var(--bad)">she</b> got the job offer. ✗</div>
 <div class="pass card h" id="u2" style="font-size:2.3cqw">Maria called her sister after <b style="color:var(--ok)">Maria</b> got the job offer. ✓</div>
 <div class="pass card h" id="u3" style="font-size:2.3cqw">After the mayor met the governor, <b style="color:var(--bad)">he</b> → <b style="color:var(--ok)">the governor</b> announced the plan.</div>`,
 b:[
 {en:"A pronoun must point to exactly one noun. 'Maria called her sister after she got the job offer.' Who got the job? Maria or her sister?",ko:"대명사는 딱 하나의 명사만 가리켜야 해요. 'Maria called her sister after she got the job offer.' 누가 일자리를 얻었죠? Maria예요, 언니예요?",zh:"代词必须只指向一个名词。Maria called her sister after she got the job offer. 谁得到了工作？Maria 还是她姐姐？",a:['in:#u1']},
 {en:"We cannot tell, so the sentence is unclear. The SAT fixes this by using the noun itself.",ko:"알 수 없으니까 애매한 문장이에요. SAT는 대명사 대신 명사 자체를 써서 해결해요.",zh:"我们无法判断，所以句子指代不清。SAT的改法是直接用名词本身。",a:['in:#u2']},
 {en:"So if a choice replaces a confusing pronoun with a specific noun, it is often correct.",ko:"그래서 헷갈리는 대명사를 구체적인 명사로 바꾼 선택지가 정답인 경우가 많아요.",zh:"所以，把含糊的代词换成具体名词的选项往往是正确的。",a:['in:#u3']}]},
{id:'case',ch:{en:'I vs. me',ko:'I와 me',zh:'I 与 me'},html:`
 <div class="kick">Step 3</div><h2 class="h2">I / me · he / him · they / them</h2>
 <table class="tbl h" id="c0" style="width:100%"><tr><th data-l="case1"></th><td>I · he · she · we · they · who</td></tr><tr><th data-l="case2"></th><td>me · him · her · us · them · whom</td></tr></table>
 <div class="pass card h" id="c1" style="font-size:2.2cqw">The award was given to Jun and <b>______</b>. → <span data-l="cover"></span>: given to <b style="color:var(--ok)">me</b> ✓ (not I)</div>
 <div class="pass card h" id="c2" style="font-size:2.2cqw">The researcher <b style="color:var(--ok)">who</b> led the study … (<i>she</i> led) · The researcher <b style="color:var(--ok)">whom</b> we interviewed … (we interviewed <i>her</i>)</div>`,
 b:[
 {en:"Pronouns also change form. Subject forms are I, he, she, we, they, and who. Object forms are me, him, her, us, them, and whom.",ko:"대명사는 형태도 바뀌어요. 주격은 I, he, she, we, they, who. 목적격은 me, him, her, us, them, whom이에요.",zh:"代词的形式也会变化。主格是 I、he、she、we、they、who；宾格是 me、him、her、us、them、whom。",a:['in:#c0']},
 {en:"With two people, cover the other one. 'The award was given to Jun and, blank.' Cover 'Jun and.' 'Given to me,' not 'given to I.'",ko:"두 사람이 나오면 다른 사람을 가려 보세요. 'The award was given to Jun and' 다음 빈칸. 'Jun and'를 가리면 'given to me'지, 'given to I'가 아니에요.",zh:"有两个人时，遮住另一个人。The award was given to Jun and，空格。遮住 Jun and：是 given to me，不是 given to I。",a:['in:#c1']},
 {en:"For who and whom, answer the question with he or him. If 'he' fits, use who. If 'him' fits, use whom.",ko:"who와 whom은 he나 him으로 바꿔 보세요. he가 맞으면 who, him이 맞으면 whom이에요.",zh:"who 和 whom 就用 he 或 him 代入。he 合适就用 who，him 合适就用 whom。",a:['in:#c2']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.2cqw">Founded in 1902, <span class="tok" id="xs">the Hartwell Orchestra</span> performs over sixty concerts a year, and <b>______</b> recordings of early jazz are studied by music historians.</div>
 <div class="choices"><div id="x1">A) their</div><div id="x2">B) its</div><div id="x3">C) it’s</div><div id="x4">D) they’re</div></div>`,
 b:[
 {en:"Let's solve one. Whose recordings? Draw the arrow back: the Hartwell Orchestra.",ko:"한 문제 풀어 봐요. 누구의 녹음이죠? 화살표를 그려 보면 the Hartwell Orchestra예요.",zh:"做一道题。谁的录音？画箭头回去：the Hartwell Orchestra。",a:['add:#xs:subj']},
 {en:"An orchestra is one group, so it is singular. That eliminates 'their' and 'they're.'",ko:"오케스트라는 하나의 단체라서 단수예요. 그래서 their와 they're는 지워요.",zh:"乐团是一个团体，所以是单数。排除 their 和 they're。",a:['add:#x1:x','add:#x4:x']},
 {en:"'It's' means 'it is.' 'It is recordings' makes no sense. We need the possessive 'its,' with no apostrophe. The answer is B.",ko:"it's는 it is라는 뜻이에요. 'it is recordings'는 말이 안 돼요. 아포스트로피 없는 소유격 its가 필요해요. 정답은 B예요.",zh:"it's 的意思是 it is。it is recordings 讲不通。我们需要不带撇号的所有格 its。答案是 B。",a:['add:#x3:x','add:#x2:o']},
 {q:{en:{q:'“The coach praised Leo and ___ for our teamwork.”',o:['I','me','myself'],e:'Cover “Leo and”: “The coach praised me.” “Praised” needs an object, so use the object form “me.”'},
     ko:{q:'“The coach praised Leo and ___ for our teamwork.”',o:['I','me','myself'],e:'"Leo and"를 가리면 "The coach praised me." praised 뒤에는 목적어가 와야 하니까 목적격 me예요.'},
     zh:{q:'“The coach praised Leo and ___ for our teamwork.”',o:['I','me','myself'],e:'遮住 Leo and：The coach praised me. praised 后面需要宾语，所以用宾格 me。'},a:1}}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 7</h2>
 <ul class="sum card"><li class="h" id="s1">Draw an arrow: pronoun → noun → singular or plural?</li>
 <li class="h" id="s2">company, team, museum → <b>it / its</b></li>
 <li class="h" id="s3">Two possible nouns → use the noun itself</li>
 <li class="h" id="s4">Cover the other person: <i>to Jun and <b>me</b></i> · he → who, him → whom</li></ul>`,
 b:[
 {en:"Let's review. Draw an arrow from every pronoun to its noun and check singular or plural.",ko:"정리할게요. 모든 대명사에서 명사로 화살표를 그리고 단수인지 복수인지 확인하세요.",zh:"我们来总结。从每个代词画箭头到名词，检查单复数。",a:['in:#s1']},
 {en:"Companies, teams, and institutions are singular: it and its.",ko:"회사, 팀, 기관은 단수예요. it과 its를 써요.",zh:"公司、团队和机构是单数：用 it 和 its。",a:['in:#s2']},
 {en:"If a pronoun could point to two nouns, the clear answer uses the noun itself.",ko:"대명사가 두 명사를 가리킬 수 있으면, 명사 자체를 쓴 선택지가 정답이에요.",zh:"如果代词可能指向两个名词，清楚的答案会直接用名词本身。",a:['in:#s3']},
 {en:"And for I versus me, cover the other person. Next lesson: modifiers and comparisons. See you in Lesson 8!",ko:"그리고 I와 me는 다른 사람을 가려서 판단하세요. 다음은 수식어와 비교예요. 8강에서 만나요!",zh:"I 和 me 的判断就遮住另一个人。下一课：修饰语与比较。第8课见！",a:['in:#s4']}]}];
