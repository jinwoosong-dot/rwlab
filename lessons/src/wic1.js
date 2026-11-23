META={id:'wic1',k:'WIC',n:10,
 title:{en:'Lesson 10 · Words in Context',ko:'10강 · 문맥 속 단어',zh:'第10课 · 语境中的词义'},
 desc:{en:'Cover the choices, find clue words, predict your own word, watch for second meanings and positive/negative tone',ko:'선택지 가리기, 단서어 찾기, 내 단어로 예측, 두 번째 뜻과 긍정·부정 톤 주의',zh:'遮住选项、找线索词、用自己的词预测、注意第二义项和褒贬色彩'},
 endh:{en:'Lesson 10 complete',ko:'10강 완료',zh:'第10课完成'},
 endp:{en:'Practice predicting before you read the choices. Keep doing your daily word missions too.',ko:'선택지를 읽기 전에 예측하는 연습을 해요. 매일 단어 미션도 계속하세요.',zh:'练习在看选项前先预测。每天的单词任务也要坚持。'}};
L={en:{cover:'Cover the choices',clue:'Find the clue',pred:'Predict your own word',elim:'Compare and eliminate',same:'Same direction',opp:'Opposite direction',second:'Common meaning ≠ meaning here',tone:'+ or − ?'},
 ko:{cover:'선택지 가리기',clue:'단서 찾기',pred:'내 단어로 예측',elim:'비교하고 소거',same:'같은 방향',opp:'반대 방향',second:'흔한 뜻 ≠ 여기서의 뜻',tone:'+ 인가 − 인가?'},
 zh:{cover:'遮住选项',clue:'找线索',pred:'用自己的词预测',elim:'对比并排除',same:'同向',opp:'反向',second:'常见意思 ≠ 这里的意思',tone:'褒还是贬？'}};
SC=[
{id:'intro',ch:{en:'Intro',ko:'도입',zh:'导入'},html:`
 <div class="kick">Unit 3 · Words in Context</div><h2 class="h2" data-l="title"></h2>
 <div class="fix h" id="i1"><b class="n">1</b><span data-l="cover"></span></div><div class="fix h" id="i2"><b class="n">2</b><span data-l="clue"></span></div><div class="fix h" id="i3"><b class="n">3</b><span data-l="pred"></span></div><div class="fix h" id="i4"><b class="n">4</b><span data-l="elim"></span></div>`,
 b:[
 {en:"Welcome to Lesson 10. Words in context questions ask for the most logical and precise word for a blank, or the meaning of a word as it is used in the passage.",ko:"10강에 오신 걸 환영해요. 문맥 속 단어 문제는 빈칸에 가장 논리적이고 정확한 단어를 고르거나, 지문에서 쓰인 단어의 뜻을 물어요.",zh:"欢迎来到第10课。语境词义题要求选出最合逻辑、最准确的词填空，或者判断某个词在文中的意思。"},
 {en:"Knowing many words helps, but the method matters just as much. It has four steps.",ko:"아는 단어가 많으면 도움이 되지만, 방법도 그만큼 중요해요. 네 단계예요.",zh:"词汇量大当然有帮助，但方法同样重要。一共四步。"},
 {en:"Cover the choices. Find the clue. Predict your own word. Then compare and eliminate.",ko:"선택지를 가린다. 단서를 찾는다. 내 단어로 예측한다. 그리고 비교하며 지운다.",zh:"遮住选项，找线索，用自己的词预测，然后对比排除。",a:['in:#i1','in:#i2','in:#i3','in:#i4']}]},
{id:'clue',ch:{en:'Clue words',ko:'단서어',zh:'线索词'},html:`
 <div class="kick">Step 2</div><h2 class="h2" data-l="clue"></h2>
 <div class="grid2"><div class="card h" id="c1"><b data-l="same"></b><div class="chips" style="margin-top:1cqw"><span class="chip">and</span><span class="chip">because</span><span class="chip">so</span><span class="chip">:</span><span class="chip">in fact</span></div></div>
 <div class="card h" id="c2"><b data-l="opp"></b><div class="chips" style="margin-top:1cqw"><span class="chip y">but</span><span class="chip y">although</span><span class="chip y">however</span><span class="chip y">rather than</span><span class="chip y">unlike</span></div></div></div>
 <div class="pass card h" id="c3" style="font-size:2.2cqw">The critic expected the film to be dull, <b>but</b> it was surprisingly <b>______</b>. → opposite of dull → <i>“exciting”</i></div>`,
 b:[
 {en:"The passage always contains a clue that points to the answer. Your job is to find it.",ko:"지문에는 항상 답을 가리키는 단서가 있어요. 그걸 찾는 게 우리 일이에요.",zh:"文章里总有指向答案的线索。你的任务就是找到它。"},
 {en:"Some clue words keep the same direction: and, because, so, a colon, in fact. The blank agrees with nearby ideas.",ko:"어떤 단서어는 같은 방향을 유지해요. and, because, so, 콜론, in fact. 빈칸이 주변 내용과 같은 방향이에요.",zh:"有些线索词保持同一方向：and、because、so、冒号、in fact。空格与附近的意思一致。",a:['in:#c1']},
 {en:"Others flip the direction: but, although, however, rather than, unlike. The blank is the opposite of nearby ideas.",ko:"어떤 단서어는 방향을 뒤집어요. but, although, however, rather than, unlike. 빈칸이 주변 내용과 반대예요.",zh:"另一些会反转方向：but、although、however、rather than、unlike。空格与附近的意思相反。",a:['in:#c2']},
 {en:"'The critic expected the film to be dull, but it was surprisingly, blank.' 'But' flips 'dull,' so predict something like 'exciting.'",ko:"'The critic expected the film to be dull, but it was surprisingly' 다음 빈칸. but이 dull을 뒤집으니까 'exciting' 같은 말을 예측해요.",zh:"The critic expected the film to be dull, but it was surprisingly，空格。but 把 dull 反转，所以预测类似 exciting 的词。",a:['in:#c3']}]},
{id:'predict',ch:{en:'Predict first',ko:'먼저 예측',zh:'先预测'},html:`
 <div class="kick">Step 3</div><h2 class="h2" data-l="pred"></h2>
 <div class="pass card" style="font-size:2.2cqw">Early reviewers described the composer’s symphony as <b>______</b>: at nearly three hours, it was twice as long as most works of its time.</div>
 <div class="card h" id="p1" style="font-size:2.2cqw">Clue after the colon: <i>“nearly three hours … twice as long”</i> → predict: <b>very long</b></div>
 <div class="choices h" id="p2"><div class="x">A) melodic</div><div class="o">B) lengthy</div><div class="x">C) brief</div><div class="x">D) original</div></div>`,
 b:[
 {en:"Why predict before looking at the choices? Because the wrong choices are designed to sound good. If you already have an answer in mind, they cannot trick you.",ko:"왜 선택지를 보기 전에 예측할까요? 오답은 그럴듯하게 들리도록 만들어져 있거든요. 미리 답을 정해 두면 속지 않아요.",zh:"为什么要在看选项前先预测？因为错误选项就是设计得听起来不错。心里先有答案，就不会被骗。"},
 {en:"'Early reviewers described the symphony as, blank: at nearly three hours, it was twice as long as most works of its time.'",ko:"'Early reviewers described the symphony as' 빈칸, 'at nearly three hours, it was twice as long as most works of its time.'",zh:"Early reviewers described the symphony as，空格：at nearly three hours, it was twice as long as most works of its time.",a:['in:#p1']},
 {en:"The colon explains the blank. Three hours, twice as long. Predict 'very long.' Then 'lengthy' matches. 'Melodic' and 'original' could describe music, but the clue is about length.",ko:"콜론이 빈칸을 설명해요. 세 시간, 두 배 길이. '아주 길다'를 예측해요. 그러면 lengthy가 맞아요. melodic과 original도 음악을 묘사할 수 있지만, 단서는 길이에 관한 거예요.",zh:"冒号解释了空格：三个小时，长一倍。预测为很长。那么 lengthy 就对了。melodic 和 original 也能形容音乐，但线索讲的是长度。",a:['in:#p2']}]},
{id:'second',ch:{en:'Second meanings',ko:'두 번째 뜻',zh:'第二义项'},html:`
 <div class="kick">Trap</div><h2 class="h2" data-l="second"></h2>
 <table class="tbl h" id="s1" style="width:100%"><tr><th>word</th><th>common meaning</th><th>SAT meaning</th></tr>
 <tr><td>novel</td><td>a book</td><td class="hit">new, original</td></tr>
 <tr><td>command</td><td>an order</td><td class="hit">mastery (a command of French)</td></tr>
 <tr><td>check</td><td>examine</td><td class="hit">stop, limit (check the spread)</td></tr>
 <tr><td>sound</td><td>a noise</td><td class="hit">reliable (a sound argument)</td></tr></table>
 <div class="pass card h" id="s2" style="font-size:2.1cqw">“The new vaccine helped <b>check</b> the spread of the disease.” → <b>limit</b>, not examine</div>`,
 b:[
 {en:"Here is the biggest trap. Many SAT words have a common meaning and a less common one. The test often uses the less common one.",ko:"가장 큰 함정이에요. SAT 단어 중 상당수는 흔한 뜻과 덜 흔한 뜻이 있어요. 시험은 덜 흔한 뜻을 자주 써요.",zh:"这是最大的陷阱。很多SAT词既有常见意思也有不常见的意思，考试常常用不常见的那个。",a:['in:#s1']},
 {en:"'Novel' can mean new. 'Command' can mean mastery, as in a command of French. 'Sound' can mean reliable.",ko:"novel은 새롭다는 뜻일 수 있어요. command는 a command of French처럼 숙달을 뜻할 수 있고, sound는 믿을 만하다는 뜻일 수 있어요.",zh:"novel 可以表示新的；command 可以表示精通，比如 a command of French；sound 可以表示可靠的。"},
 {en:"'The new vaccine helped check the spread of the disease.' Here, 'check' means limit, not examine. Always replace the word with your prediction and reread.",ko:"'The new vaccine helped check the spread of the disease.' 여기서 check는 조사한다가 아니라 억제한다는 뜻이에요. 항상 단어를 내 예측으로 바꿔 넣고 다시 읽어 보세요.",zh:"The new vaccine helped check the spread of the disease. 这里 check 是遏制的意思，不是检查。一定要把这个词换成你的预测再读一遍。",a:['in:#s2']},
 {q:{en:{q:'“The lawyer’s argument was so sound that even the opposing side admitted its strength.” As used here, “sound” most nearly means',o:['noisy','well-reasoned','healthy'],e:'The clue “even the opposing side admitted its strength” points to an argument that is solid and logical.'},
     ko:{q:'“The lawyer’s argument was so sound that even the opposing side admitted its strength.” 여기서 sound의 뜻에 가장 가까운 것은?',o:['noisy','well-reasoned','healthy'],e:'"상대측도 그 힘을 인정했다"는 단서가 탄탄하고 논리적인 주장을 가리켜요.'},
     zh:{q:'“The lawyer’s argument was so sound that even the opposing side admitted its strength.” 这里的 sound 最接近哪个意思？',o:['noisy','well-reasoned','healthy'],e:'线索“连对方都承认它有力”说明这个论点扎实、有逻辑。'},a:1}}]},
{id:'tone',ch:{en:'Positive or negative',ko:'긍정 또는 부정',zh:'褒义还是贬义'},html:`
 <div class="kick">Tool</div><h2 class="h2" data-l="tone"></h2>
 <div class="pass card h" id="t1" style="font-size:2.2cqw">Despite years of setbacks, the team remained <b>______</b>, convinced that the next trial would succeed. → <b style="color:var(--ok)">+</b></div>
 <div class="choices h" id="t2"><div class="x">A) skeptical (−)</div><div class="o">B) optimistic (+)</div><div class="x">C) indifferent (−)</div><div class="x">D) cautious (≈)</div></div>`,
 b:[
 {en:"If you cannot think of an exact word, at least decide: is the blank positive or negative?",ko:"딱 맞는 단어가 떠오르지 않으면 최소한 이것만 정하세요. 빈칸이 긍정인가, 부정인가?",zh:"如果想不出准确的词，至少判断一下：空格是褒义还是贬义？"},
 {en:"'Despite years of setbacks, the team remained, blank, convinced that the next trial would succeed.' 'Convinced it would succeed' is positive.",ko:"'Despite years of setbacks, the team remained' 빈칸, 'convinced that the next trial would succeed.' 성공할 거라고 확신했으니 긍정이에요.",zh:"Despite years of setbacks, the team remained，空格，convinced that the next trial would succeed. 确信会成功，是褒义。",a:['in:#t1']},
 {en:"That removes 'skeptical' and 'indifferent.' 'Cautious' is not strong enough for 'convinced.' The answer is 'optimistic.'",ko:"그러면 skeptical과 indifferent는 지워져요. cautious는 '확신했다'와 어울리기엔 약해요. 정답은 optimistic이에요.",zh:"这样就排除了 skeptical 和 indifferent。cautious 不够强，配不上 convinced。答案是 optimistic。",a:['in:#t2']}]},
{id:'example',ch:{en:'Solve together',ko:'같이 풀기',zh:'一起做题'},html:`
 <div class="kick">SAT-style example</div>
 <div class="pass card" style="font-size:2.1cqw">Biologist Ana Ruiz had assumed the river otters would avoid the newly built dam. Her cameras, however, showed the otters <b>______</b> the structure, using its concrete ledges as resting spots and returning to them daily.</div>
 <div class="choices"><div id="x1">A) abandoning</div><div id="x2">B) embracing</div><div id="x3">C) inspecting</div><div id="x4">D) fearing</div></div>`,
 b:[
 {en:"Let's solve one. Cover the choices. The clue word is 'however.' Ruiz assumed the otters would avoid the dam, but the cameras showed the opposite.",ko:"한 문제 풀어 봐요. 선택지를 가리세요. 단서어는 however예요. Ruiz는 수달이 댐을 피할 거라 생각했지만, 카메라는 반대를 보여 줬어요.",zh:"做一道题。遮住选项。线索词是 however。Ruiz 以为水獭会躲开水坝，但摄像头显示的恰恰相反。"},
 {en:"And the next part says they rested on it and came back every day. Predict: 'happily used' or 'accepted.'",ko:"그리고 뒷부분에는 거기서 쉬고 매일 돌아왔다고 해요. 예측은 '기꺼이 이용했다' 또는 '받아들였다'예요.",zh:"后面说它们在上面休息，而且每天都回来。预测：乐于使用或接受。"},
 {en:"'Abandoning' and 'fearing' are opposite. 'Inspecting' is neutral and does not explain the daily use. 'Embracing,' meaning readily accepting, fits. The answer is B.",ko:"abandoning과 fearing은 반대예요. inspecting은 중립적이라 매일 이용한 걸 설명하지 못해요. 기꺼이 받아들인다는 뜻의 embracing이 맞아요. 정답은 B예요.",zh:"abandoning 和 fearing 方向相反。inspecting 是中性的，解释不了每天使用。表示欣然接受的 embracing 符合。答案是 B。",a:['add:#x1:x','add:#x4:x','add:#x3:x','add:#x2:o']}]},
{id:'summary',ch:{en:'Summary',ko:'정리',zh:'总结'},html:`
 <div class="kick" data-l="sum"></div><h2 class="h2">📌 Lesson 10</h2>
 <ul class="sum card"><li class="h" id="z1">Cover → clue → predict → eliminate</li>
 <li class="h" id="z2"><i>but, although, however</i> flip · <i>and, because, :</i> continue</li>
 <li class="h" id="z3">Watch for second meanings: novel, command, check, sound</li>
 <li class="h" id="z4">No exact word? Decide + or −</li></ul>`,
 b:[
 {en:"Let's review. Cover the choices, find the clue, predict your own word, then eliminate.",ko:"정리할게요. 선택지를 가리고, 단서를 찾고, 내 단어로 예측한 다음, 지우세요.",zh:"我们来总结。遮住选项、找线索、用自己的词预测，然后排除。",a:['in:#z1']},
 {en:"Contrast words flip the meaning. Same-direction words continue it.",ko:"대조어는 뜻을 뒤집고, 같은 방향의 말은 뜻을 이어 가요.",zh:"转折词反转意思，同向词延续意思。",a:['in:#z2']},
 {en:"Watch for less common meanings of familiar words.",ko:"익숙한 단어의 덜 흔한 뜻을 조심하세요.",zh:"注意熟悉单词的不常见意思。",a:['in:#z3']},
 {en:"And if no word comes to mind, decide positive or negative. Next lesson: transitions. See you in Lesson 11!",ko:"단어가 떠오르지 않으면 긍정인지 부정인지 정하세요. 다음은 연결어예요. 11강에서 만나요!",zh:"想不出词时，就判断褒贬。下一课：过渡词。第11课见！",a:['in:#z4']}]}];
