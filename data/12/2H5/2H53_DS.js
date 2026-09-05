window.dungSai2H53 = [
  {
    "id": "2H532DS1",
    "question": "Một đài kiểm soát không lưu tại một sân bay có nhiệm vụ kiểm soát, điều hành hoạt động bay của máy bay trong vòng bán kính 70 km. Để theo dõi hành trình của máy bay, ta có thể thiết lập hệ trục tọa độ $Oxyz$ có gốc tọa độ $O$ trùng với vị trí trung tâm của đài kiểm soát không lưu, mặt phẳng $(Oxy)$ trùng với mặt đất (được coi là mặt phẳng) với trục $Ox$ hướng về phía Tây, trục $Oy$ hướng về phía Nam và trục $Oz$ hướng thẳng đứng lên trời và đơn vị độ dài trên mỗi trục tọa độ là 1 km. Một máy bay chiến đấu đang ở vị trí $A(-65;-25; 30)$, quỹ đạo bay theo đường thẳng có vectơ chỉ phương $\\vec{u}=(1; 1; 0)$, tốc độ bay không đổi là $2280$ km/h và hướng về đài kiểm soát không lưu.",
    "subQuestions": [
      {
        "text": "Phương trình mặt cầu để mô tả ranh giới bên ngoài và bên trong vùng phát sóng của đài kiểm soát không lưu trong không gian là $(S)\\colon x^2+y^2+z^2=4900$",
        "answer": true
      },
      {
        "text": "Khi máy bay ở vị trí $A$ thì đài kiểm soát không lưu của sân bay không theo dõi được máy bay",
        "answer": true
      },
      {
        "text": "Máy bay di chuyển theo quỹ đạo bay là đường thẳng $d$ có phương trình $x=-65+t \\text{ và } y=-25+t \\text{ và } z=0$",
        "answer": false
      },
      {
        "text": "Thời gian máy bay di chuyển trong phạm vi đài kiểm soát không lưu của sân bay theo dõi được là 3 phút",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Phương trình mặt cầu để mô tả ranh giới bên ngoài và bên trong vùng phát sóng của đài kiểm soát không lưu trong không gian là $(S)\\colon x^2+y^2+z^2=4900$.<br>- <strong>Đúng</strong>.<br>  Ta có $OA=\\sqrt{(-65)^2+(-25)^2+30^2}=5\\sqrt{230}\\approx 75{,}8&gt;70$ nên đài kiểm soát không lưu của sân bay không theo dõi được máy bay.<br>- <strong>Sai</strong>.<br>  Máy bay di chuyển theo quỹ đạo bay là đường thẳng $d$ có phương trình $x=-65+t \\text{ và } y=-25+t \\text{ và } z=30.$<br>- <strong>Sai</strong>.<br>  Gọi $M$ và $N$ lần lượt là giao điềm của mặt cầu $(S)$ và đường thẳng $d$.<br>  Khi đó tọa độ $M$ và $N$ là nghiệm của hệ phương trình $x=-65+t \\text{ và } y=-25+t \\text{ và } z=30 \\text{ và } x^2+y^2+z^2=4900.$<br>  Suy ra $(-65+t)^2+(-25+t)^2+30^2=4900\\Leftrightarrow t=5\\Rightarrow M(-60;-20;30) \\text{ hoặc } t=85\\Rightarrow N(20;60;30).$<br>  Suy ra $MN=\\sqrt{80^2+80^2}=80\\sqrt{2}$.<br>  Vậy thời gian máy bay di chuyển trong phạm vi đài kiểm soát không lưu của sân bay theo dõi là $t=\\dfrac{80\\sqrt{2}}{2280}\\cdot 60\\approx 2{,}977$ phút."
  },
  {
    "id": "2H532DS2",
    "question": "Trong không gian $Oxyz$, cho mặt cầu $(S)\\colon (x+1)^2+(y-1)^2+(z+2)^2=9$ có tâm $I$ và bán kính $R$.",
    "subQuestions": [
      {
        "text": "Phương trình mặt cầu $(S)$ có tâm $I(1;-1;2)$, bán kính $R=3$",
        "answer": false
      },
      {
        "text": "Điểm $A(0;2;-3)$ nằm trong mặt cầu",
        "answer": true
      },
      {
        "text": "Điểm $J(1;2;3)$ nằm ngoài mặt cầu và khoảng cách từ tâm $I$ đến điểm $J$ bằng $\\sqrt{10}$",
        "answer": false
      },
      {
        "text": "Khoảng cách từ tâm $I$ đến tâm mặt cầu $(S')\\colon x^2+y^2+(z-1)^2=3$ bằng $\\sqrt{2}$",
        "answer": false
      }
    ],
    "explain": "<br>- Tâm mặt cầu là $I(-1;1;-2)$ và bán kính $R=3$.<br>- Vì $IA=\\sqrt{(0+1)^2+(2-1)^2+(-3+2)^2}=\\sqrt{1+1+1}=\\sqrt{3}&lt;3$ nên điểm $A$ nằm trong mặt cầu.<br>- Vì $IJ=\\sqrt{(1+1)^2+(2-1)^2+(3+2)^2}=\\sqrt{4+1+25}=\\sqrt{30}&gt;3$, nên $J$ nằm ngoài mặt cầu.<br>- Tâm mặt cầu $(S')$ là $I'(0;0;1)$.<br> $II'=\\sqrt{(-1-0)^2+(1-0)^2+(-2-1)^2}=\\sqrt{11}\\ne\\sqrt{2}.$"
  },
  {
    "id": "2H532DS3",
    "question": "Trong không gian $Oxyz$ (đơn vị trên trục là mét), một ngọn hải đăng đặt ở vị trí $I(30;15;53)$, bề mặt nước biển trùng với mặt phẳng $(Oxy)$. Biết rằng bán kính phủ sáng của ngọn hải đăng đó là $3\\,500$ m. (Hình minh hoạ bên dưới)<br><img src=\"data/12/2D5/im2H53/dlts_12_DLTS28_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Phương trình mặt cầu mô tả ranh giới của vùng phủ sáng trên biển của hải đăng là $(x-30)^2 + (y-15)^2 + (z-53)^2 = 3\\,500^2$",
        "answer": true
      },
      {
        "text": "Nếu người đi biển ở vị trí $A(4\\,000;250;0)$ thì nằm trong vùng chiếu sáng của ngọn hải đăng",
        "answer": false
      },
      {
        "text": "Giả sử vị trí chân của ngọn hải đăng là điểm $J$ là hình chiếu của điểm $I$ lên mặt phẳng $(Oxy)$. Khi đó $J(30;0;53)$",
        "answer": false
      },
      {
        "text": "Chiều cao của ngọn hải đăng là $53$ mét",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Phương trình mặt cầu mô tả ranh giới của vùng phủ sáng trên biển của hải đăng là phương trình mặt cầu tâm $I(30;15;53)$, bán kính $3\\,500$ nên phương trình này là $(x-30)^2 + (y-15)^2 + (z-53)^2 = 3\\,500^2$.<br>- <strong>Sai</strong>. Ta có $IA = \\sqrt{(4\\,000-30)^2 + (250-15)^2 + (0-53)^2} \\approx 3\\,977 &lt; 3\\,500^2$.<br>  Do đó, nếu người đi biển ở vị trí $A(4\\,000;250;0)$ thì nằm trong vùng chiếu sáng của ngọn hải đăng.<br>- <strong>Sai</strong>. Nếu điểm $J$ là hình chiếu của điểm $I$ lên mặt phẳng $(Oxy)$. Khi đó $J(30;15;0)$.<br>- <strong>Sai</strong>. Ta có $IJ = \\sqrt{(30-30)^2 + (15-15)^2 + (0-53)^2} = 53$.<br>  Do đó, chiều cao của ngọn hải đăng là $53$ mét."
  },
  {
    "id": "2H533DS4",
    "question": "Trong không gian với hệ trục $Oxyz$, mặt phẳng $(P)\\colon x+y+z-5=0$ và mặt cầu $(S)\\colon x^2+y^2+z^2-2x+2y-1=0$ với điểm $A(-1;-1;-1)$. Các khẳng định sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$S$ có tâm $I(1;-1;0)$ và bán kính $R=\\sqrt{3}$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(P)$ không có điểm chung với mặt cầu $(S)$",
        "answer": true
      },
      {
        "text": "$E$ là điểm thuộc $(S)$, giá trị lớn nhất của $|\\vec{EA}+\\vec{EO}|$ bằng $\\dfrac{3\\sqrt{3}}{2}$",
        "answer": false
      },
      {
        "text": "$M$ là điểm thuộc $(S)$, $N$ là điểm thuộc $(P)$, giá trị nhỏ nhất của $MA+MN$ bằng $\\dfrac{4}{\\sqrt{3}}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>Mặt cầu $(S)$ có phương trình $x^2 + y^2 + z^2 - 2x + 2y - 1 = 0$.<br>  Viết lại $(x-1)^2 + (y+1)^2 + z^2 = 3$.<br>  Nên tâm $I(1;-1;0)$, bán kính $R = \\sqrt{3}$.<br>- <strong>Đúng</strong>.<br> Mặt phẳng $(P)\\colon x + y + z - 5 = 0$.<br>   Khoảng cách từ tâm $I(1;-1;0)$ đến mặt phẳng $(P)$ là  $d = \\dfrac{|1 + (-1) + 0 - 5|}{\\sqrt{1^2 + 1^2 + 1^2}} = \\dfrac{5}{\\sqrt{3}} &gt; R.$  Do đó mặt cầu và mặt phẳng không giao nhau.<br>- <strong>Sai</strong>.<br> Gọi $O(0;0;0)$ là gốc tọa độ. <br>  Với $E \\in (S)$, ta có  $|\\overrightarrow{EA} + \\overrightarrow{EO}| = |\\overrightarrow{IA} + \\overrightarrow{IO} + 2\\overrightarrow{EI}| \\leq |\\overrightarrow{IA} + \\overrightarrow{IO}| + 2|\\overrightarrow{EI}|$.<br>  Ta có   <br>- $A(-1; -1; -1)$ nên $\\overrightarrow{IA} = (-2; 0; -1)$.<br>- $I(1; -1; 0)$ nên $\\overrightarrow{IO} = (-1; 1; 0)$.  Suy ra $\\overrightarrow{IA} + \\overrightarrow{IO} = (-3; 1; -1)$.<br>  Do đó $|\\overrightarrow{EA} + \\overrightarrow{EO}| \\leq |\\overrightarrow{IA} + \\overrightarrow{IO}| + |\\overrightarrow{IE}| = \\sqrt{11} + 2R = \\sqrt{11} + 2\\sqrt{3}$.<br>  Giá trị lớn nhất của $\\vec{EA}+\\vec{EO}$ bằng $\\sqrt{11}+2\\sqrt{3}$.<br>- <strong>Sai</strong>.<br>   <br><img src=\"data/12/2D5/im2H53/dlts_12_DLTS31_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $H$ là hình chiếu của $A$ lên $(P)$. Khi đó, $AH$ vuông góc với $(P)$.<br>  Ta có $AH = \\mathrm{d}(A, (P)) = \\dfrac{|{-1} - 1 - 1 - 5|}{\\sqrt{1^2 + 1^2 + 1^2}} = \\dfrac{8\\sqrt{3}}{3}$.<br>   Ta có $MA + MN \\geq AH - R = \\dfrac{8\\sqrt{3}}{3} - \\sqrt{3} = \\dfrac{8\\sqrt{3} - 3\\sqrt{3}}{3} = \\dfrac{5\\sqrt{3}}{3}$.<br>   Tuy nhiên, $AH$ không cắt $(S)$ vì $AH &gt; R$. Do đó, ta xét điểm $K$ là giao điểm của đường thẳng $AI$ và mặt cầu $(S)$. Khi đó, $MA + MN$ đạt giá trị nhỏ nhất khi $M$ trùng với $K$.<br>   Giá trị nhỏ nhất của $MA + MN$ là $AK + NH$. Vì $N$ thuộc $(P)$ nên $MN \\geq \\mathrm{d}(K, (P))$.<br>   Ta có $AI = \\sqrt{5}$ và $AK = AI - R = \\sqrt{5} - \\sqrt{3}$.<br>   Ta có $\\mathrm{d}(K, (P)) = \\dfrac{|x_K + y_K + z_K - 5|}{\\sqrt{3}}$.<br>   Vì $A, I, K$ thẳng hàng, $\\vec{AK} = k \\vec{AI}$.<br>  Suy ra $(x_K + 1; y_K + 1; z_K + 1) = k(2; 0; 1) \\Rightarrow x_K = 2k - 1; y_K = -1; z_K = k - 1$.<br>   Vì $K$ thuộc $(S)$ nên   $(2k - 1 - 1)^2 + (-1 + 1)^2 + (k - 1)^2 = 3 \\Rightarrow (2k - 2)^2 + (k - 1)^2 = 3.$  Suy ra $ 4k^2 - 8k + 4 + k^2 - 2k + 1 = 3 \\Rightarrow 5k^2 - 10k + 2 = 0 \\Rightarrow k = 1 \\pm \\dfrac{\\sqrt{15}}{5}$."
  },
  {
    "id": "2H533DS5",
    "question": "Trong không gian $Oxyz$, cho mặt phẳng $(P)\\colon 2x+2y-z+2=0$ và hai điểm $A(1; 1; 0)$, $B(2; 1; 3)$.",
    "subQuestions": [
      {
        "text": "Một vectơ pháp tuyến của $(P)$ là $\\overrightarrow{n}=(2; 2; 1)$",
        "answer": false
      },
      {
        "text": "Đường thẳng $d$ qua $A$ và vuông góc với $(P)$ có phương trình là $\\dfrac{x-1}{2}=\\dfrac{y-1}{2}=\\dfrac{z}{-1}$",
        "answer": true
      },
      {
        "text": "Mặt cầu tâm $A$ và tiếp xúc với mặt phẳng $(P)$ có phương trình $(x-1)^2+(y-1)^2+z^2=4$",
        "answer": true
      },
      {
        "text": "Gọi $\\alpha$ là góc giữa đường thẳng $AB$ và mặt phẳng $(P)$. Khi đó, $\\sin \\alpha=\\dfrac{1}{2\\sqrt{10}}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Một vectơ pháp tuyến của $(P)$ là $\\overrightarrow{n}=(2;2;-1)$.<br>- <strong>Đúng</strong>.<br>  Vì đường thẳng $d$ vuông góc với $(P)$ nên một vectơ chỉ phương của đường thẳng $d$ là $\\overrightarrow{u}=(2; 2;-1)$.<br>  Vậy đường thẳng $d$ có phương trình là $\\dfrac{x-1}{2}=\\dfrac{y-1}{2}=\\dfrac{z}{-1}$.<br>- <strong>Đúng</strong>.<br>  Ta có $R={d}(A,(P))=\\dfrac{\\left |2\\cdot 1+2\\cdot 1-0+2\\right |}{\\sqrt{2^2+2^2+(-1)^2}}=2$.<br>  Suy ra mặt cầu tâm $A$ và tiếp xúc với mặt phẳng $(P)$ có phương trình $(x-1)^2+(y-1)^2+z^2=4.$<br>- <strong>Sai</strong>.<br>  Ta có $\\overrightarrow{AB}=(1;0;3)$, $\\overrightarrow{u}=(2; 2;-1)$.<br>  Khi đó $\\sin \\alpha= \\dfrac{|\\overrightarrow{AB}\\cdot \\overrightarrow{n}|}{|\\overrightarrow{AB}|\\cdot |\\overrightarrow{n}|}=\\dfrac{|1\\cdot 2+0\\cdot 2+3\\cdot (-1)|}{\\sqrt{1^2+0^2+3^2}\\cdot \\sqrt{2^2+2^2+1^2}}=\\dfrac{1}{3\\sqrt{10}}$."
  },
  {
    "id": "2H534DS6",
    "question": "Trong không gian hệ trục tọa độ $Oxyz$ (đơn vị trên mỗi trục là kilômét), đài kiểm soát không lưu của một sân bay ở vị trí $O(0;0 ;0)$ và được thiết kế phát hiện máy bay ở khoảng cách tối đa $600$ km. Một máy bay đang chuyển động với vận tốc $900 \\mathrm{~km}/\\mathrm{h}$ theo đường thẳng $d$ có phương trình $x=-1\\,000+100t \\text{ và } y=-300+80t \\text{ và } z=100\\sqrt{11}$, $t\\in \\mathbb{R}$ và hướng về đài kiểm soát không lưu (như hình vẽ).   <br><img src=\"data/12/2D5/im2H53/dlts_12_DLTS34_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Phương trình mặt cầu để mô tả ranh giới bên ngoài vùng phát sóng của đài kiểm soát không lưu trong không gian là $x^2+y^2+z^2=360\\,000$",
        "answer": true
      },
      {
        "text": "Máy bay đang chuyển động theo đường thẳng $d$ đến vị trí điểm $M(-500 ; 100 ; 100 \\sqrt{11})$. Vị trí này nằm ngoài vùng kiểm soát không lưu của đài kiểm soát không lưu sân bay",
        "answer": true
      },
      {
        "text": "Thời gian kể từ khi đài kiểm soát không lưu phát hiện may bay đến khi máy ra khỏi vùng kiểm soát không lưu là $\\dfrac{4}{3}$ giờ",
        "answer": false
      },
      {
        "text": "Ranh giới vùng phát sóng bên ngoài của đài kiểm soát không lưu trong không gian là mặt cầu có bán kính bằng $300$ km",
        "answer": true
      }
    ],
    "explain": "<br>- Mặt cầu để mô tả ranh giới bên ngoài vùng phát sóng của đài kiểm soát không lưu trong không gian có tâm $O(0;0;0)$ và bán kính $R=600$ có phương trình là  \\[(S)\\colon x^2+y^2+z^2=600^2=360\\,000\\]<br>- $OM=\\sqrt{(-500)^2+100^2+\\left(100\\sqrt{11}\\right)^2}\\approx 608&gt;R$.<br>  Suy ra vị trí $M$ nằm ngoài vùng kiểm soát không lưu của đài kiểm soát không lưu sân bay.<br>- Gọi $B=(S)\\cap d$, $C=(S)\\cap d$.<br>  Ta có $B\\in d\\Rightarrow B(-1\\,000+100t;-300+80t;100\\sqrt{11})$.<br>  Mặt khác $B\\in (S)$ nên  $(-1\\,000+100t)^2+(-300+80t)^2+(100\\sqrt{11})^2 = 360\\,000$<br>$16\\,400t^2-248\\,000t+840\\,000 = 0$<br>$t=10 \\ \\text{hoặc} \\ t = \\dfrac{210}{41}.$  Do đó $B(0;500;100\\sqrt{11})$ và $C\\left(-\\dfrac{20\\,000}{41};\\dfrac{4\\,500}{41};100\\sqrt{11}\\right)$.<br>  Ta có $BC\\approx 624{,}7$.<br>  Thời gian kể từ khi đài kiểm soát không lưu phát hiện may bay đến khi máy ra khỏi vùng kiểm soát không lưu là  \\[\\dfrac{BC}{900}\\approx 0{,}69\\ \\text{(giờ)}.\\]<br>- Ranh giới vùng phát sóng bên ngoài của đài kiểm soát không lưu trong không gian là mặt cầu có bán kính bằng $300$ km."
  },
  {
    "id": "2H533DS7",
    "question": "Hình vẽ sau mô tả vị trí của máy bay (điểm $M$) vào thời điểm $9$ giờ $30$ phút. Biết các đơn vị trên hình tính theo đơn vị km. Xét tính đúng, sai trong các khẳng định sau đây.<br><img src=\"data/12/2D5/im2H53/dlts_12_DLTS7_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Máy bay đang ở độ cao $9$ km",
        "answer": true
      },
      {
        "text": "Tọa độ của máy bay $(300; 150; 9)$",
        "answer": false
      },
      {
        "text": "Phi công để máy bay ở chế độ tự động với vận tốc theo hướng đông là $750$ km/h, độ cao không đổi. Biết rằng gió thổi theo hướng đông với vận tốc $10$ m/s. Giả sử vận tốc và hướng gió không đổi thì lúc $10$ giờ $30$ phút máy bay ở tọa độ $(150; 1\\,086;9)$",
        "answer": true
      },
      {
        "text": "Sau khi bay đến vị trí lúc $10$ giờ $30$ phút thì máy bay bay ngược lại (hướng Tây) với vận tốc $800$ km/h với độ cao không đổi, biết lúc đó trời lặng gió thì lúc $11$ giờ máy bay cách gốc tọa độ một khoảng $723$ km (làm tròn đến hàng đơn vị)",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Tại thời điểm $9$ giờ $30$ phút, máy bay đang ở độ cao $9$ km.<br>- <strong>Sai</strong>.<br>  Tọa độ của máy bay $(150; 300; 9)$<br>- <strong>Đúng</strong>.<br>  Ta có $10$ m/s $=36$ km/h.<br>  Vì gió thổi theo hướng đông nên vận tốc thực tế của máy bay là $750+36=786$ km/h.<br>  Lúc $10$ giờ $30$, máy bay bay về hướng đông thêm được quãng đường là $786$ km.<br>  Ta có $300+786=1\\,086$. Vậy, tọa độ của máy bay khi đó là $(150; 1\\,086;9)$.<br>- <strong>Sai</strong>.<br>  Tung độ của máy bay tại thời điểm $11$ giờ là  $1\\,086-800\\cdot 0{,}5=686$.<br>  Tọa độ của máy bay là $M(150;686;9)$.<br>  Khoảng cách từ máy bay đến gốc tọa độ khi đó là  $OM=\\sqrt{150^2+686^2+9^2}\\approx 702(\\mathrm{km}).$"
  }
];
