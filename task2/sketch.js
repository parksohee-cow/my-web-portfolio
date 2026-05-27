function setup() {
  // 1. 캔버스 크기 (제약 사항 준수)
  createCanvas(400, 600);
  noLoop(); 
}

function draw() {
  background(240); // 배경색

  // --- 2. 헤어스타일  ---
  // 
  noStroke();
  fill(30); // 검은색 머리
  // 
  rect(100, 150, 200, 400, 20); 

  // --- 3. 얼굴 형태 ---
  stroke(0);
  strokeWeight(2);
  fill(255, 230, 200); // 피부색
  ellipse(200, 250, 200, 250); // 기본 얼굴 타원

  // --- 4. 이마 앞머리  ---
  // 
  noStroke();
  fill(30);
  // 
  arc(200, 200, 200, 150, PI, TWO_PI); 


  // --- 5. 얼굴 요소들 ---
  
  // 안경 
  noFill();
  stroke(80); // 안경테 색
  strokeWeight(3);
  ellipse(165, 260, 60, 60); // 왼쪽 알
  ellipse(235, 260, 60, 60); // 오른쪽 알
  line(195, 260, 205, 260); // 코 받침

  // 눈 
  // 
  fill(0);
  noStroke();
  circle(165, 260, 10); // 왼쪽 눈동자
  circle(235, 260, 10); // 오른쪽 눈동자

  // 입과 보조개
  fill(255, 120, 120); // 입술 색
  stroke(100); 
  strokeWeight(1);
  arc(200, 320, 50, 20, 0, PI); // 웃는 입

  // 보조개 (입 옆에 작은 점)
  fill(180, 130, 100); 
  noStroke();
  circle(170, 325, 5); // 왼쪽 보조개
  circle(230, 325, 5); // 오른쪽 보조개


  // --- 6. 상반신  ---
  // 목
  fill(255, 230, 200);
  rect(185, 360, 30, 40);
  
  // 옷 (티셔츠 )
  fill(120, 180, 220); // 셔츠 색
  stroke(50);
  strokeWeight(2);
  // 
  rect(125, 400, 150, 200, 20, 20, 0, 0); 
}