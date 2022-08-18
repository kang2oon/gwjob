const xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    //var baseUrl = "https://cdn.jsdelivr.net/gh/kang2oon/entProto";
    var baseUrl = "";
    // 등록일
    var regData = myObj.regData;
    $(".regData").html(regData);
    // 최종수정일
    var modData = myObj.modData;
    $(".modData").html(modData);
    // 기업명
    var comName = myObj.comName;
    $(".comName").html(comName);
    // 사업자등록번호
    var comNum = myObj.comNum;
    $(".comNum").html(comNum);
    // 기업형태
    var comForm = myObj.comForm;
    $(".comForm").html(comForm);
    // 업종
    var incCate = myObj.incCate;
    $(".incCate").html(incCate);
    // 대표자
    var ceo = myObj.ceo;
    $(".ceo").html(ceo);
    // 전화번호
    var tel = myObj.tel;
    var telLink = "<a href='tel:"+tel+"'>"+tel+"</a>";
    $(".tel").html(telLink);
    // 주소
    var zipcode = myObj.zipcode;
    var address = myObj.address;
    var fullAdd = "("+zipcode+") "+address;
    $(".address").html(fullAdd);
    $(".comAddress").html(address);
    // 홈페이지
    var site = myObj.site;
    var siteLink = "<a href='"+site+"' target='_blank'>"+site+"</a>";
    var siteLink2 = "<a href='"+site+"' target='_blank'>홈페이지 바로가기</a>";
    $(".site").html(siteLink);
    $(".siteGo").html(siteLink2);
    // 담당자
    var manager = myObj.manager;
    var mngTel = myObj.mngTel;
    var mngEmail = myObj.mngEmail;
    var mngEmailLink = "<a href='mailto:"+mngEmail+"' target='_blank'>"+mngEmail+"</a>";
    $(".manager").html(manager);
    $(".mngTel").html(mngTel);
    $(".mngEmail").html(mngEmailLink);
    // 기업 CI
    var imgCiUrl = myObj.imgCi;
    var imgCi = "<img src='"+baseUrl+imgCiUrl+"' alt='"+comName+"'/>";
    $(".imgCi").html(imgCi);
    // 기업 이미지
    var imgComUrl = myObj.imgCom;
    var imgCom = "<img src='"+baseUrl+imgComUrl+"' alt='"+comName+"'/>";
    $(".imgCom").html(imgCom);
    // 연혁
    var historyCnt = myObj.history.length;
    var histroyWrap = myObj.history;
    var history = "";
    for(var i=0; i<historyCnt; i++){
        var remarks = histroyWrap[i].remark;
        var remarkCnt = remarks.length;
        var remark = "";
        for(var j=0; j<remarkCnt; j++){
            var events = remarks[j].event;
            var eventsCnt = events.length;
            remark += "<li><div class='month'>"+remarks[j].month+"</div><div class='event'>";
            for(var k=0; k<eventsCnt; k++){
                remark += "<span>"+events[k]+"</span>";
            }	
            remark += "</div></li>";
        }
        history += "<div><span>"+histroyWrap[i].year+"</span>";
        history += "<ul>"+remark+"</ul>";	
        history += "</div>"
    }
    $(".history").html(history);
    // 인증현황
    var certWrap = myObj.certified[0];
    var cert1 = certWrap.cert1;
    var cert2 = certWrap.cert2;
    var cert3 = certWrap.cert3;
    var cert4 = certWrap.cert4;
    var cert5 = certWrap.cert5;
    var certified = "";
    if ( cert1 ) {
        certified += "<span>일자리우수기업</span>";
    }
    if ( cert2 ) {
        certified += "<span>여성고용우수기업</span>";
    }
    if ( cert3 ) {
        certified += "<span>청년친화강소기업</span>";
    }
    if ( cert4 ) {
        certified += "<span>경기유망중소기업</span>";
    }
    if ( cert5 ) {
        certified += "<span>면접수당지급인증기업</span>";
    }
    $(".certified").html(certified);
    // 복지정보
    var welfareWrap = myObj.welfare[0];
    var deduct = welfareWrap.deduct;
    var insurance = welfareWrap.insurance;
    var education = welfareWrap.education;
    var convenience = welfareWrap.convenience;
    var leisure = welfareWrap.leisure;
    var reward = welfareWrap.reward;
    var facilities = welfareWrap.facilities;
    var holiday = welfareWrap.holiday;
    var handicap = welfareWrap.handicap;
    var etc = welfareWrap.etc;
    var welfare = "";
    var welfare = "<div class='swiper-wrapper'>";
    if ( deduct.length > 0 ){
        welfare += "<div class='swiper-slide deduct'>";
        welfare += "<dl><dt>공제</dt>";
        for(var i=0; i<deduct.length; i++){
            welfare += "<dd>"+deduct[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    if ( insurance.length > 0 ){
        welfare += "<div class='swiper-slide insurance'>";
        welfare += "<dl><dt>연금/보험</dt>";
        for(var i=0; i<insurance.length; i++){
            welfare += "<dd>"+insurance[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    if ( education.length > 0 ){
        welfare += "<div class='swiper-slide education'>";
        welfare += "<dl><dt>교육/연수</dt>";
        for(var i=0; i<education.length; i++){
            welfare += "<dd>"+education[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    if ( convenience.length > 0 ){
        welfare += "<div class='swiper-slide convenience'>";
        welfare += "<dl><dt>생활편의</dt>";
        for(var i=0; i<convenience.length; i++){
            welfare += "<dd>"+convenience[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    if ( leisure.length > 0 ){
        welfare += "<div class='swiper-slide leisure'>";
        welfare += "<dl><dt>여가/행사</dt>";
        for(var i=0; i<leisure.length; i++){
            welfare += "<dd>"+leisure[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    if ( reward.length > 0 ){
        welfare += "<div class='swiper-slide reward'>";
        welfare += "<dl><dt>보상/수당</dt>";
        for(var i=0; i<reward.length; i++){
            welfare += "<dd>"+reward[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    if ( facilities.length > 0 ){
        welfare += "<div class='swiper-slide facilities'>";
        welfare += "<dl><dt>사내시설</dt>";
        for(var i=0; i<facilities.length; i++){
            welfare += "<dd>"+facilities[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    if ( holiday.length > 0 ){
        welfare += "<div class='swiper-slide holiday'>";
        welfare += "<dl><dt>휴무/휴가</dt>";
        for(var i=0; i<holiday.length; i++){
            welfare += "<dd>"+holiday[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    if ( handicap.length > 0 ){
        welfare += "<div class='swiper-slide handicap'>";
        welfare += "<dl><dt>장애인지원</dt>";
        for(var i=0; i<handicap.length; i++){
            welfare += "<dd>"+handicap[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    if ( etc.length > 0 ){
        welfare += "<div class='swiper-slide etc'>";
        welfare += "<dl><dt>기타</dt>";
        for(var i=0; i<etc.length; i++){
            welfare += "<dd>"+etc[i]+"</dd>";
        }
        welfare += "</dl>";
        welfare += "</div>";
    }
    welfare += "</div>";
    $(".welfare").html(welfare);
    // 조직문화
    var dvCultureCnt = myObj.dvCulture.length;
    var dvCultureWrap = myObj.dvCulture;
    var dvCulture = "<div class='swiper-wrapper'>";
    for(var i=0; i<dvCultureCnt; i++){
        var title = dvCultureWrap[i].title;
        var desc = dvCultureWrap[i].desc;
        dvCulture += "<div class='swiper-slide'><div>";
        dvCulture += "<div class='tit'>"+title+"</div>";
        dvCulture += "<div class='desc'>"+desc+"</div>";
        dvCulture += "</div></div>";
    }
    $(".dvCulture").html(dvCulture);
    // 인재상
    var talentCnt = myObj.talent.length;
    var talentWrap = myObj.talent;
    var talent = "<ul>";
    for(var i=0; i<talentCnt; i++){
        talent += "<li>"+talentWrap[i]+"</li>";
    }
    talent += "</ul>";
    $(".talent").html(talent);
    // 슬로건
    var slogan = myObj.slogan;
    $(".slogan").html(slogan);
    // 비전
    var vision = myObj.vision;
    $(".vision").html(vision);
    // 미션
    var mission = myObj.mission;
    $(".mission").html(mission);
    // 핵심가치
    var kvCnt = myObj.keyValue.length;
    var kvWrap = myObj.keyValue;
    var keyValue = "<ul>";
    for(var i=0; i<kvCnt; i++){
        keyValue += "<li>"+kvWrap[i]+"</li>";
    }
    keyValue += "</ul>";
    $(".keyValue").html(keyValue);
    // SWOT
    var swotWrap = myObj.swot[0];
    var s = swotWrap.s;
    var w = swotWrap.w;
    var o = swotWrap.o;
    var t = swotWrap.t;
    var swot = "";
        swot += "<strong>S</strong> : "+s+"</br/>";
        swot += "<strong>W</strong> : "+w+"</br/>";
        swot += "<strong>O</strong> : "+o+"</br/>";
        swot += "<strong>T</strong> : "+t+"</br/>";
    $(".swot").html(swot);
    $(".swotS .desc").html(s);
    $(".swotW .desc").html(w);
    $(".swotO .desc").html(o);
    $(".swotT .desc").html(t);
    // 주요사업영역
    var bizDivCnt = myObj.bizDiv.length;
    var bizDivWrap = myObj.bizDiv;
    var bizDiv = "";
    for(var i=0; i<bizDivCnt; i++){
        var title = bizDivWrap[i].title;
        var desc = bizDivWrap[i].desc;
        var img = bizDivWrap[i].img;
        bizDiv += "<div><img src='"+baseUrl+img+"' alt='"+title+"'>";
        bizDiv += "<h4>"+title+"</h4>";
        bizDiv += "<p>"+desc+"</p>"
        bizDiv += "</div>";
    }
    $(".bizDiv").html(bizDiv);
    // 주요상품
    var productCnt = myObj.product.length;
    var productWrap = myObj.product;
    var product = "";
    for(var i=0; i<productCnt; i++){
        var title = productWrap[i].title;
        var desc = productWrap[i].desc;
        var img = productWrap[i].img;
        product += "<div><img src='"+baseUrl+img+"' alt='"+title+"'>";
        product += "<h4>"+title+"</h4>";
        product += "<p>"+desc+"</p>"
        product += "</div>";
    }
    $(".product").html(product);
    // 핵심과제
    var keyTaskCnt = myObj.keyTask.length;
    var keyTaskWrap = myObj.keyTask;
    var keyTask = "<dl>";
    for(var i=0; i<keyTaskCnt; i++){
        keyTask += "<dt>"+keyTaskWrap[i].title+"</dt>";
        keyTask += "<dd>"+keyTaskWrap[i].desc+"</dd>";
    }
    keyTask += "</dl>";
    $(".keyTask").html(keyTask);
    // CEO 인터뷰
    var imgCeo = myObj.imgCeo;
    var ivCeoCnt = myObj.ivCeo.length;
    var ivCeoWrap = myObj.ivCeo;
    var ivCeoPhoto = "<img src='"+baseUrl+imgCeo+"' alt='대표이사'>";
    var ivCeo = "<div class='swiper-wrapper'>";
    for(var i=0; i<ivCeoCnt; i++){
        ivCeo += "<div class='swiper-slide'>";
        ivCeo += "<div class='q'>"+ivCeoWrap[i].q+"</div>";
        ivCeo += "<div class='a'>"+ivCeoWrap[i].a+"</div>";
        ivCeo += "</div>";
    }
    ivCeo += "</div>";
    $(".ivCeoPhoto").html(ivCeoPhoto);
    $(".ivCeo").html(ivCeo);
    // 인사담당자 인터뷰
    var imgMng = myObj.imgMng;
    var ivMngCnt = myObj.ivMng.length;
    var ivMngWrap = myObj.ivMng;
    var ivMngPhoto = "<img src='"+baseUrl+imgMng+"' alt='인사담당자'>";
    var ivMng = "<div class='swiper-wrapper'>";
    for(var i=0; i<ivMngCnt; i++){
        ivMng += "<div class='swiper-slide'>";
        ivMng += "<div class='q'>"+ivMngWrap[i].q+"</div>";
        ivMng += "<div class='a'>"+ivMngWrap[i].a+"</div>";
        ivMng += "</div>";
    }
    ivMng += "</div>"; 
    $(".ivMngPhoto").html(ivMngPhoto);
    $(".ivMng").html(ivMng);
    // 재직자 인터뷰
    var imgEmp = myObj.imgEmp;
    var ivEmpCnt = myObj.ivEmp.length;
    var ivEmpWrap = myObj.ivEmp;
    var ivEmpPhoto = "<img src='"+baseUrl+imgEmp+"' alt='재직자'>";
    var ivEmp = "<div class='swiper-wrapper'>";
    for(var i=0; i<ivEmpCnt; i++){
        ivEmp += "<div class='swiper-slide'>";
        ivEmp += "<div class='q'>"+ivEmpWrap[i].q+"</div>";
        ivEmp += "<div class='a'>"+ivEmpWrap[i].a+"</div>";
        ivEmp += "</div>";
    }
    ivEmp += "</div>"; 
    $(".ivEmpPhoto").html(ivEmpPhoto);
    $(".ivEmp").html(ivEmp);
    // 직원정보
    var empWrap = myObj.employee[0];
    var empNew = empWrap.new;
    var empCareer = empWrap.career;
    var empAge = empWrap.age;
    var empYears = empWrap.years;
    var empMale = empWrap.male;
    var empFemale = empWrap.female;
    var employee = "";
        employee += "<dl>";
        employee += "<dt>신입</dt><dd>"+empNew+"</dd>";
        employee += "<dt>경력</dt><dd>"+empCareer+"</dd>";
        employee += "<dt>평균나이</dt><dd>"+empAge+"</dd>";
        employee += "<dt>근속년수</dt><dd>"+empYears+"</dd>";
        employee += "<dt>남</dt><dd>"+empMale+"</dd>";
        employee += "<dt>여</dt><dd>"+empFemale+"</dd>";
        employee += "</dl>";
    $(".employee").html(employee);
    // 채용절차
    var rpCnt = myObj.recruitProcess.length;
    var rpWrap = myObj.recruitProcess;
    var recruitProcess = "<dl>";
    for(var i=0; i<rpCnt; i++){
        recruitProcess += "<dt>"+rpWrap[i].step+"</dt>";
        recruitProcess += "<dd>"+rpWrap[i].desc+"</dd>";
    }
    recruitProcess += "</dl>";
    $(".recruitProcess").html(recruitProcess);
    // 기업홍보영상
    var comMovUrl = myObj.comMov;
    var comMov = "<iframe src='"+comMovUrl+"' title='YouTube video player' frameborder='0' allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture' allowfullscreen></iframe>";
    $(".comMov").html(comMov);
    // 기업 내/외부 사진
    var comPicCnt = myObj.comPic.length;
    var comPicWrap = myObj.comPic;
    var comPic = "<ul>";
    for(var i=0; i<comPicCnt; i++){
        var url = comPicWrap[i].url;
        var desc = comPicWrap[i].desc;
        comPic = "<li><img src='"+baseUrl+url+"' alt='"+desc+"'></li>";
    }
    comPic += "</ul>";
    $(".comPic").html(comPic);
    // 설립일
    var comBuildDate = myObj.comBuildDate;
    $(".comBuildDate").html(comBuildDate);
    // 종업원 현황
    var empstatCnt = myObj.employeeState.length;
    var empstatWrap = myObj.employeeState;
    var employeeState = "<ul>";
    for(var i=0; i<empstatCnt; i++){
        var yearCnt = empstatWrap[i].cnt;
        var joinCnt = yearCnt[0].join;
        var resignCnt = yearCnt[0].resign;
        var totalCnt = yearCnt[0].total;
            employeeState += "<li>"+empstatWrap[i].year;
            employeeState += "<br/>입사자 : "+joinCnt;
            employeeState += " / 퇴사자 : "+resignCnt;
            employeeState += " / 전체 : "+totalCnt;
            employeeState += "</li>";
    }
    employeeState += "</ul>";
    $(".employeeState").html(employeeState);
    var ctLabel = "";
    for(var i=0; i<empstatCnt; i++){
        ctLabel += "<span>"+empstatWrap[i].year+"</span>";
        joinCnt += "<span>"+empstatWrap[i].cnt[0].join+"</span>";
        resignCnt += "<span>"+empstatWrap[i].cnt[0].resign+"</span>";
        totalCnt += "<span>"+empstatWrap[i].cnt[0].total+"</span>";
    }
    $(".ctLabel").html(ctLabel);
    $(".joinCnt").html(joinCnt);
    $(".resignCnt").html(resignCnt);
    $(".totalCnt").html(totalCnt);
    var lastTotal = empstatWrap[0].cnt[0].total;
    var lastJoin = empstatWrap[0].cnt[0].join;
    var lastResign = empstatWrap[0].cnt[0].resign;
    $(".lastEmployeeState .lastTotal").html(lastTotal);
    $(".lastEmployeeState .lastJoin").html(lastJoin);
    $(".lastEmployeeState .lastResign").html(lastResign);
    // 재무정보
    var financeInfoWrap = myObj.financeInfo[0];
    var fiYear = financeInfoWrap.year;
    var fiPosition = financeInfoWrap.position;
    var fiSales = financeInfoWrap.sales;
    var fiProfit = financeInfoWrap.profit;
    var fiCapital = financeInfoWrap.capital;
    var financeInfo = "<h3>재무정보(최근 3년)</h3><ul>";
        financeInfo += "<li>동종업계 내 순위 : <span>"+fiPosition[0]+"</span>, <span>"+fiPosition[1]+"</span>, <span>"+fiPosition[2]+"</span></li>";
        financeInfo += "<li>매출액(백만원) : <span>"+fiSales[0]+"</span>, <span>"+fiSales[1]+"</span>, <span>"+fiSales[2]+"</span></li>";
        financeInfo += "<li>당기순이익(백만원) : <span>"+fiProfit[0]+"</span>, <span>"+fiProfit[1]+"</span>, <span>"+fiProfit[2]+"</span></li>";
        financeInfo += "<li>자본금(백만원) : <span>"+fiCapital[0]+"</span>, <span>"+fiCapital[1]+"</span>, <span>"+fiCapital[2]+"</span></li>";
        financeInfo += "</ul>";
    $(".financeInfo").html(financeInfo);
    if(fiPosition[0] != null){
        $(".fiPosition").html(fiPosition[0].toLocaleString()+"위");
    }else{
        $(".fiPosition").html("순위없음");
    }
    $(".fiSales").html(fiSales[0].toLocaleString());
    $(".fiProfit").html(fiProfit[0].toLocaleString());
    $(".fiCapital").html(fiCapital[0].toLocaleString());
    var financeYear = "<span>"+fiYear[0]+"</span>, <span>"+fiYear[1]+"</span>, <span>"+fiYear[2]+"</span>";
    $(".financeYear").html(financeYear);
    var financePosition =  "<span>"+fiPosition[0]+"</span>, <span>"+fiPosition[1]+"</span>, <span>"+fiPosition[2]+"</span>";
    $(".financePosition").html(financePosition);
    var financeSales =  "<span>"+fiSales[0]+"</span>, <span>"+fiSales[1]+"</span>, <span>"+fiSales[2]+"</span>";
    $(".financeSales").html(financeSales);
    var financeProfit =  "<span>"+fiProfit[0]+"</span>, <span>"+fiProfit[1]+"</span>, <span>"+fiProfit[2]+"</span>";
    $(".financeProfit").html(financeProfit);
    var financeCapital = "<span>"+fiCapital[0]+"</span>, <span>"+fiCapital[1]+"</span>, <span>"+fiCapital[2]+"</span>";
    $(".financeCapital").html(financeCapital);
    // 기업평가 등급
    var bizGrade = myObj.bizGrade;
    $(".bizGrade").html(bizGrade);
    // 산업 내 위치
    var bizPositionWrap = myObj.bizPosition[0];
    var bpActivity = bizPositionWrap.activity;
    var bpProfitability = bizPositionWrap.profitability;
    var bpStability = bizPositionWrap.stability;
    var bpGrowthability = bizPositionWrap.growthability;
    var bpScale = bizPositionWrap.scale;
    var bizPosition = "<h3>산업 내 위치</h3><ul>";
        bizPosition += "<li>활동성 : "+bpActivity+"</li>";
        bizPosition += "<li>수익성 : "+bpProfitability+"</li>";
        bizPosition += "<li>안정성 : "+bpStability+"</li>";
        bizPosition += "<li>성장성 : "+bpGrowthability+"</li>";
        bizPosition += "<li>규모 : "+bpScale+"</li>";
        bizPosition += "</ul>";
    $(".bizPosition").html(bizPosition);
    if(bpActivity != null){
        $(".bpActivity").html(bpActivity);
    }else{
        $(".bpActivity").html("정보없음");
    }
    if(bpProfitability != null){
        $(".bpProfitability").html(bpProfitability);
    }else{
        $(".bpProfitability").html("정보없음");
    }
    if(bpStability != null){
        $(".bpStability").html(bpStability);
    }else{
        $(".bpStability").html("정보없음");
    }
    if(bpGrowthability != null){
        $(".bpGrowthability").html(bpGrowthability);
    }else{
        $(".bpGrowthability").html("정보없음");
    }
    if(bpScale != null){
        $(".bpScale").html(bpScale);
    }else{
        $(".bpScale").html("정보없음");
    }    
}