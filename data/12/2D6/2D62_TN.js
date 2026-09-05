// =========================================================================
// KHỐI DỮ LIỆU: 2D62 - Trắc nghiệm (bổ sung từ nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.tracNghiem2D62 = [
  {
    "id": "2D622TN1",
    "question": "Trong quân sự, một máy bay chiến đấu của đối phương có thể xuất hiện ở vị trí X với xác suất $0{,}55$. Nếu máy bay đó không xuất hiện ở vị trí X thì nó xuất hiện ở vị trí Y. Để phòng thủ, các bệ phóng tên lửa được bố trí tại các vị trí X và Y. Khi máy bay đối phương xuất hiện ở vị trí X hoặc Y thì tên lửa sẽ được phóng để hạ máy bay đó. Nếu máy bay xuất hiện tại X thì bắn 2 quả tên lửa và nếu máy bay xuất hiện tại Y thì bắn 1 quả tên lửa. Biết rằng, xác suất bắn trúng máy bay của mỗi quả tên lửa là $0{,}8$ và các bệ phóng tên lửa hoạt động độc lập. Máy bay bị bắn hạ nếu nó trúng ít nhất 1 quả tên lửa. Biết rằng máy bay đối phương đã bị bắn hạ, tính xác suất để máy bay đối phương xuất hiện ở vị trí Y (kết quả làm tròn đến hàng phần trăm).",
    "options": [
      "$0{,}59$",
      "$0{,}41$",
      "$0{,}8$",
      "$0{,}89$"
    ],
    "answer": 1,
    "explain": "Gọi biến cố $A$“ máy bay xuất hiện ở vị trí $X$”<br>  Biến cố $B$“ máy bay bị bắn rơi”.<br>  Ta cần tính $\\mathrm{P}(\\overline{A}|B)$.<br>  Ta có sơ đồ hình cây   <br><img src=\"data/12/2D6/im2D62/dlts_12_DLTS29_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  $\\mathrm{P}(\\overline{A}|B)=\\dfrac{P(\\overline{A})\\mathrm{P}(B|\\overline{A})}{\\mathrm{P}(B)}=\\dfrac{0{,}45\\cdot0{,}8}{0{,}55\\cdot0{,}96+0{,}45\\cdot0{,}8}\\approx 0{,}41$."
  },
  {
    "id": "2D622TN2",
    "question": "Cho $A$, $B$ là hai biến cố của một phép thử có sơ đồ hình cây như sau  Xác suất của biến cố $B$ là<br><img src=\"data/12/2D6/im2D62/dlts_12_DLTS30_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$\\mathrm{P}(B)=0{,}4\\cdot0{,}3$",
      "$\\mathrm{P}(B)=0{,}6\\cdot0{,}4$",
      "$\\mathrm{P}(B)=0{,}4\\cdot0{,}3+0{,}6\\cdot0{,}4$",
      "$\\mathrm{P}(B)=0{,}4\\cdot0{,}3-0{,}6\\cdot0{,}4$"
    ],
    "answer": 2,
    "explain": "Xác suất để $B$ xảy ra là <br>  $\\mathrm{P}(B) = \\mathrm{P}(A).\\mathrm{P}(B|A) + \\mathrm{P}(\\overline{A}).\\mathrm{P}(B|\\overline{A}) = 0{,}4 \\cdot 0{,}3 + 0{,}6 \\cdot 0{,}4 = 0{,}12 + 0{,}24 = 0{,}36$."
  },
  {
    "id": "2D622TN3",
    "question": "Cho $A$ và $B$ là hai biến cố bất kì, với $0&lt;{P}(B)&lt;1$. Khi đó",
    "options": [
      "${P}(B \\mid A)=\\dfrac{{P}(A B)}{{P}(B)}$",
      "${P}(A \\mid B)=\\dfrac{{P}(A B)}{{P}(B)}$",
      "${P}(A \\mid B)=\\dfrac{{P}(B)}{{P}(A B)}$",
      "${P}(B \\mid A)=\\dfrac{{P}(A B)}{{P}(\\overline{B})}$"
    ],
    "answer": 1,
    "explain": "Cho $A$ và $B$ là hai biến cố bất kì, với $0&lt;{P}(B)&lt;1$. Khi đó ${P}(A \\mid B)=\\dfrac{{P}(A B)}{{P}(B)}$."
  },
  {
    "id": "2D622TN4",
    "question": "Cho hai biến cố $A$, $B$ thoả mãn ${P}(A)=0{,}4$; ${P}(B)=0{,}3$; ${P}(A \\mid B)=0{,}25$. Khi đó, $P(B\\mid A)$ bằng",
    "options": [
      "$0{,}333$",
      "$0{,}1875$",
      "$0{,}48$",
      "$0{,}95$"
    ],
    "answer": 1,
    "explain": "Áp dụng công thức Bayes ta được ${P}(B \\mid A)=\\dfrac{{P}(A\\mid B) \\cdot {P}(B)}{{P}(A)}=\\dfrac{0{,}25 \\cdot 0{,}3} {0{,}4}=0{,}1875. $"
  },
  {
    "id": "2D622TN5",
    "question": "Cho 2 biến cố $A$ và $B$. Biết ${P}(A\\mid B)=0{,}8$; ${P}(A\\mid \\overline{B})=0{,}3$; ${P}(B)=0{,}4$. Giá trị ${P}(A)$ bằng",
    "options": [
      "$0{,}04$",
      "$0{,}5$",
      "$0{,}1$",
      "$0{,}55$"
    ],
    "answer": 1,
    "explain": "Ta có ${P}(\\overline{B})=1-{P}(B)=0{,}6.$<br>   Áp dụng công thức xác suất toàn phần ta có ${P}(A)={P}(A\\mid B)\\cdot {P}(B)+{P}(A\\mid \\overline{B})\\cdot {P}(\\overline{B})=0{,}8\\cdot 0{,}4+0{,}3\\cdot 0{,}6=0{,}5.$"
  },
  {
    "id": "2D621TN6",
    "question": "Cho hai biến cố $A$ và $B$ bất kì, với $0&lt;{P}(A)&lt;1$. Khẳng định nào sau đây đúng?",
    "options": [
      "${P}(B)={P}(A)\\cdot{P}\\left(B\\mid A\\right)-{P}\\left(\\overline{A}\\right)\\cdot{P}\\left(B\\mid\\overline{A}\\right)$",
      "${P}(B)={P}(A)\\cdot{P}\\left(A\\mid B\\right)-{P}\\left(\\overline{A}\\right)\\cdot{P}\\left(B\\mid\\overline{A}\\right)$",
      "${P}(B)={P}(A)\\cdot{P}\\left(B\\mid A\\right)+{P}\\left(\\overline{A}\\right)\\cdot{P}\\left(B\\mid\\overline{A}\\right)$",
      "${P}(B)={P}(A)\\cdot{P}\\left(A\\mid B\\right)+{P}\\left(\\overline{A}\\right)\\cdot{P}\\left(B\\mid\\overline{A}\\right)$"
    ],
    "answer": 2,
    "explain": "Công thức xác suất toàn phần  \\[{P}(B)={P}(A)\\cdot{P}\\left(B\\mid A\\right)+{P}\\left(\\overline{A}\\right)\\cdot{P}\\left(B\\mid\\overline{A}\\right).\\]"
  },
  {
    "id": "2D622TN7",
    "question": "Cho hai biến cố $A$ và $B$, với ${P}(B)=0{,}4$, ${P}\\left(A\\mid B\\right)=0{,}5$, ${P}\\left(A\\mid \\overline{B}\\right)=0{,}3$. Tính ${P}(A)$.",
    "options": [
      "$0{,}2$",
      "$0{,}38$",
      "$0{,}8$",
      "$0{,}12$"
    ],
    "answer": 1,
    "explain": "Ta có   \\[{P}(A)={P}(B)\\cdot{P}\\left(A\\mid B\\right)+{P}\\left(\\overline{B}\\right)\\cdot{P}\\left(A\\mid \\overline{B}\\right)=0{,}4\\cdot0{,}5+0{,}6\\cdot0{,}3.\\]"
  },
  {
    "id": "2D622TN8",
    "question": "Cho hai biến cố $A$, $B$ thỏa mãn ${P}(A)=\\dfrac{2}{5}$, ${P}(B\\mid A)=\\dfrac{1}{3}$. Tính ${P}\\left(A\\cap\\overline{B}\\right)$.",
    "options": [
      "$\\dfrac{3}{8}$",
      "$\\dfrac{2}{15}$",
      "$\\dfrac{4}{15}$",
      "$\\dfrac{4}{19}$"
    ],
    "answer": 2,
    "explain": "Ta có ${P}\\left(A\\cap\\overline{B}\\right)={P}(A){P}\\left(\\overline{B}\\mid A\\right)={P}(A)[1-{P}\\left(B\\mid A\\right)]=\\dfrac{4}{15}$."
  },
  {
    "id": "2D622TN9",
    "question": "Một bệnh viện có hai phòng khám là phòng A và phòng B với khả năng lựa chọn của bệnh nhân là như nhau. Tỉ lệ bệnh nhân nam có ở phòng A và phòng B lần lượt là $60\\%$ và $40\\%$. Một người bệnh được chọn ngẫu nhiêu từ hai phòng khám và biết người này là nam, xác suất để người bệnh được chọn đến từ phòng A là",
    "options": [
      "$0{,}6$",
      "$0{,}5$",
      "$0{,}4$",
      "$0{,}3$"
    ],
    "answer": 0,
    "explain": "Một người bệnh được chọn ngẫu nhiên từ hai phòng khám.<br>  Gọi $X$ là biến cố “ Người đó đến từ phòng khám A” \\, và $Y$, $\\overline{Y}$ lần lượt là biến cố “ Người đó là nam” \\; và “ Người đó không là nam”.<br>  Ta có sơ đồ hình cây sau<br>  <br><img src=\"data/12/2D6/im2D61/dlts_sbh_xsontap_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Theo công thức Bayes, ta có $P(X|Y)=\\dfrac{P(X)P(Y|X)}{P(X)P(Y|X)+P(\\overline{X})P(Y|\\overline{X})}=\\dfrac{0{,}3}{0{,}3+0{,}2}=0{,}6.$  Vậy với một người bệnh được chọn ngẫu nhiêu từ hai phòng khám và biết người này là nam, xác suất để người đó đến từ phòng A là $0{,}6$."
  },
  {
    "id": "2D622TN10",
    "question": "Cho $A$, $B$ là các biến cố thỏa mãn $P(\\overline{A}\\;\\overline{B})=0{,}35$, $P(A)=0{,}25$, $P(B)=0{,}6$. Giá trị của $P(A|B)$ bằng",
    "options": [
      "$\\dfrac{1}{5}$",
      "$\\dfrac{1}{3}$",
      "$\\dfrac{7}{15}$",
      "$\\dfrac{2}{3}$"
    ],
    "answer": 1,
    "explain": "Ta có $P\\left( {\\overline {AB} } \\right) = P\\left( {\\overline A } \\right)P\\left( {\\overline B |\\overline A } \\right) \\Rightarrow P\\left( {\\overline B |\\overline A } \\right) = \\dfrac{{P\\left( {\\overline {AB} } \\right)}}{{P\\left( {\\overline A } \\right)}} = \\dfrac{{0{,}35}}{{0{,}75}} = \\dfrac{7}{{15}}.$ <br>  Suy ra $P\\left( {B|\\overline A } \\right) = 1 - \\dfrac{7}{{15}} = \\dfrac{8}{{15}}$.<br>  Theo công thức xác suất toàn phần, ta có  $\\begin{array}{l}  P\\left( B \\right) = P\\left( {B|A} \\right)P\\left( A \\right) + P\\left( {B|\\overline A } \\right)P\\left( {\\overline A } \\right)\\\\  \\Rightarrow P\\left( {B|A} \\right) = \\dfrac{{P\\left( B \\right) - P\\left( {B|\\overline A } \\right)P\\left( {\\overline A } \\right)}}{{P\\left( A \\right)}} = \\dfrac{{0{,}6 - \\dfrac{8}{{15}} \\cdot 0{,}75}}{{0{,}25}} = 0{,}8.  \\end{array}.$  Theo công thức Bayes, ta được  $P\\left( {A|B} \\right) = \\dfrac{{P\\left( A \\right)P\\left( {B|A} \\right)}}{{P\\left( B \\right)}} = \\dfrac{{0{,}25 \\cdot 0{,}8}}{{0{,}6}} = \\dfrac{1}{3}.$"
  },
  {
    "id": "2D622TN11",
    "question": "Một bệnh viện đang xét nghiệm cho một số bệnh nhân để xác định liệu họ có nhiễm virus $X$ hay không. Xác suất để một bệnh nhân bị nhiễm virus $X$ là $0{,}05$. Khi xét nghiệm, nếu một bệnh nhân bị nhiễm thì xác suất để kết quả xét nghiệm dương tính là $0{,}95$. Nếu một bệnh nhân không bị nhiễm thì xác suất để kết quả xét nghiệm âm tính là $0{,}98$. Một bệnh nhân được chọn ngẫu nhiên và có kết quả xét nghiệm dương tính. Xác suất để bệnh nhân đó thực sự bị nhiễm virus $X$ là",
    "options": [
      "$\\dfrac{133}{2000}$",
      "$\\dfrac{19}{400}$",
      "$\\dfrac{5}{7}$",
      "$\\dfrac{2}{7}$"
    ],
    "answer": 2,
    "explain": "Một bệnh nhân đến một bệnh viên để xét nghiệm.<br>  Gọi $A$ là biến cố “ Bệnh nhân bị nhiễm virus $X$” \\, và $B$, $\\overline{B}$ lần lượt là biến cố “ Kết quả xét nghiệm dương tính” \\; và “ Kết quả xét nghiệm âm tính”.<br>  Ta xét sơ đồ hình cây như sau<br>  <br><img src=\"data/12/2D6/im2D61/dlts_sbh_xsontap_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Theo công thức Bayes, ta có $P(A|B)=\\dfrac{P(A)P(B|A)}{P(A)P(B|A)+P(\\overline{A})P(B|\\overline{A})}=\\dfrac{0{,}0475}{0{,}0475+0{,}019}=\\dfrac{5}{7}.$   Vậy với một bệnh nhân có kết quả xét nghiệm dương tính, xác suất để bệnh nhân đó thực sự bị nhiễm virus $X$ là $\\dfrac{5}{7}$."
  },
  {
    "id": "2D622TN12",
    "question": "Ở một địa phương $X$, xác suất để một người lớn trên $40$ tuổi mắc bệnh ung thư là $0{,}05$. Xác suất bác sĩ chẩn đoán đúng một người mắc bệnh ung thư là $0{,}78$ và chẩn đoán sai (không bị ung thư nhưng được chẩn đoán mắc bệnh) là $0{,}06$. Xác suất để một người thật sự mắc bệnh ung thư khi nhận được kết quả chẩn đoán bị ung thư bằng",
    "options": [
      "$0{,}40625$",
      "$0{,}096$",
      "$0{,}904$",
      "$0{,}59375$"
    ],
    "answer": 0,
    "explain": "Một bệnh nhân trên 40 tuổi ở địa phương X đến bác sĩ để khám bệnh ung thư.<br>  Gọi $A$ là biến cố “ Người đó mắc bệnh ung thư” \\, và $B$, $\\overline{B}$ lần lượt là biến cố “ Bác sĩ chẩn đoán người đó bị ung thư” \\;và “ Bác sĩ chẩn đoán người đó không bị ung thư”.<br>  Ta xét sơ đồ hình cây như sau<br>  <br><img src=\"data/12/2D6/im2D61/dlts_sbh_xsontap_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Theo công thức Bayes, ta có $P(A|B)=\\dfrac{P(A)P(B|A)}{P(A)P(B|A)+P(\\overline{A})P(B|\\overline{A})}=\\dfrac{0{,}039}{0{,}039+0{,}057}=0{,}40625.$   Vậy xác suất để một người thật sự mắc bệnh ung thư khi nhận được kết quả chẩn đoán bị ung thư bằng $0{,}40625$."
  }
];
