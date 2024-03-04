import HtmlText from "@/utils/HtmlText";
import "./style.scss";
import { test } from "./script";
export default function Page() {
  return <HtmlText
    className={`about-page`}
    script={test}
    html={`
      <div class="slide_p"><img src="../images/about_1.png" alt=""></div>
      <div class="slide_p_sp"><img src="../images/about_1sp.png" alt=""></div>
      
      <div id="contents">
          <div id="main">
              
      
              <h2 id="about">あいうべ体操って何？</h2>
              <h4>「あ」「い」「う」「べ」の口で舌を鍛えて<br>
      口呼吸を鼻呼吸に改善していく口の体操です</h4>
              <p><!--<img src="images/about_2.png" width="100%"><br>-->
      口呼吸の改善は、あらゆる病気の原因治療につながります。そのため、「あいうべ体操」をしっかり継続している人は、自然に鼻で呼吸ができるようになり、症状が改善していくことがあります。<br>
      呼吸は生まれてから死ぬまで一時も休むことなくしなければなりません。一日の呼吸回数は何と2万回。それを鼻からする鼻呼吸なのか、口からする口呼吸なのかで驚くほどあなたの体が変わっていきます。</p>
      
              <h2 id="taicho">あいうべ体操アドバイザー「息育指導士」になろう！</h2>
              
              <p><iframe width="100%" height="315" src="https://www.youtube.com/embed/oJHYsiiqLX4?si=ur9piKj0MYTMu8Zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
              <h4>あいうべ体操ひろめ隊＝息育指導士</h4>
              <p>息育指導士は、口呼吸から鼻呼吸へとを変えることで
      子供～高齢者まで貧富の差も関係なく、病気の「予防」も「改善」も自分でできる！<br>
      という考え方・事実を世の中に伝えていくことで、まずはご自身と身近な人の健康を。<br>
      そして、世界中の人々を健康にしていくリーダーです。</p>
              
              <h2 id="sample">「鼻呼吸」を日本の文化に!!</h2>
              <h4>口呼吸を鼻呼吸へ変えるあいうべ体操で、<br>まずは自分と身近な人を健康にしてみませんか？</h4>
              <p>アレルギーの改善体操・インフルエンザ予防としても著名な「あいうべ体操」
      <br>
      あいうべ協会が本当に伝えたいことは、日本人の大半が「口呼吸」による弊害で病気になり、
      「鼻呼吸」にすることで様々な病気の予防・改善を促すという事実です。</p>
      
              <h2 id="osusume">こんな方におすすめ</h2>
              <div class="photo">
                  <h3>こんな職業の方におすすめ</h3>
                  <div class="imgR"><img src="../images/about_3.png" alt=""></div>
                  <p><i class="icon-check"></i> 子供の教育に携わっている方（保育園・幼稚園・小中高校の先生）<br>
              <i class="icon-check"></i> 子供の運動・習い事に携わっている方（部活動コーチ等）<br>
              <i class="icon-check"></i> 高齢者施設で働いている方（介護士・理学療法士・作業療法士）<br>
              <i class="icon-check"></i> 従業員に病気にかかってほしくないと願う経営者や管理職<br>
              <i class="icon-check"></i> 歯科医師<br></p>
              </div>
      
              <div class="photo">
                  <h3>こんな症状の方におすすめ</h3>
                  <div class="imgR"><img src="../images/about_4.png" alt=""></div>
                  <p><i class="icon-check"></i> なんとなく不調・だるい方<br>
              <i class="icon-check"></i> アレルギー性疾患（花粉症、喘息、アトピー性皮膚炎など）で困っている方<br>
              <i class="icon-check"></i> リウマチの方<br>
              <i class="icon-check"></i> 歯並びが悪い方<br>
              <i class="icon-check"></i> いびきがうるさい方<br>
              <i class="icon-check"></i> 唇が渇いている方<br>
              <i class="icon-check"></i> 無意識時、口が開いている方（例：テレビを見る時・寝ている時など）<br></p>
              </div>
      
              <div class="photo">
                  <h3>こんな想いの方におすすめ</h3>
                  <div class="imgR"><img src="../images/about_5.png" alt=""></div>
                  <p><i class="icon-check"></i> 世の中の役に立ちたいと思っている方<br>
              <i class="icon-check"></i> 元気に人生を全うしたい方<br>
              <i class="icon-check"></i> あまり薬に頼りたくない方<br>
              <i class="icon-check"></i> 自分で体調管理ができるようになりたい方<br></p>
              </div>
              <!--<h3 class="mgn_t_60">お申込みはこちら</h3>
                 <div class="course">
                  <a href="/course/02.html"><img src="../images/aiube_top_course.png" alt="あいうべ体操指導者資格コースのお申込みはこちら" width="100%"></a>
                    <a href="/course/02.html" style="background-color:#06bcea; color:#fff; font-weight:bold; padding:10px; margin:5px auto 40px auto; display:block; max-width:300px; text-align:center; text-decoration:none; font-size:18px; cursor:pointer;">コースのお申し込みはこちら →</a>
                  </div> -->
          </div><!-- /#main -->
      
          <div id="sub">
              <h3>おすすめコンテンツ</h3>
              <ul class="bnr">
                  <li><a href="/guide.html"><img src="../images/bnr_kids.png" alt="マスク生活の弊害を救う" /></a></li>
                  <li><a href="index.html#taicho"><img src="../images/bnr_1.png" alt="あいうべ隊長になろう" /></a></li>
                  <li><a href="../course/index.html"><img src="../images/bnr_2.png" alt="資格でできること" /></a></li>
                  <li><a href="index.html#osusume"><img src="../images/bnr_3.png" alt="こんな方におすすめ" /></a></li>
                  <li><a href="../event/index.html"><img src="../images/bnr_4.png" alt="イベント" /></a></li>
              </ul>
          </div><!-- /#sub -->
      </div><!-- /#contents -->
    `} />
}