// =========================================================================
// KHỐI DỮ LIỆU: 0D22 - Đúng sai
// Nguồn: Đề thi Giữa Kì I thật từ các trường THPT (thư mục LocID/BANK-25-26),
// giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai0D22 = [
  {
    "id": "0D223DS1",
    "question": "Một công ty TNHH trong một đợt quảng cáo và bán hàng khuyến mại hàng hóa (một sản phẩm mới của công ty) cần thuê xe để chở $140$ người và $9$ tấn hàng. Nơi thuê chỉ có hai loại xe $A$ và $B$. Trong đó xe loại $A$ có $10$ chiếc, xe loại $B$ có $9$ chiếc. Một chiếc xe loại $A$ cho thuê với giá $4$ triệu, loại $B$ giá $3$ triệu. Biết rằng xe $A$ chỉ chở tối đa $20$ người và $0{,}6$ tấn hàng; xe $B$ chở tối đa $10$ người và $1{,}5$ tấn hàng. Gọi $x$, $y$ lần lượt là số xe loại $A$ và loại $B$ mà công ty thuê. Khi đó",
    "subQuestions": [
      {
        "text": "Số tiền thuê xe là $4 x+3 y$",
        "answer": true
      },
      {
        "text": "$2 x+y&lt;14$",
        "answer": false
      },
      {
        "text": "$2 x+5 y \\geq 30$",
        "answer": true
      },
      {
        "text": "Sô tiền thuê xe thấp nhất là $32$ triệu",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng. Gọi $x, y$ lần lượt là số xe loại $A$ và loại $B$ cần phải thuê $(x, y \\in \\mathbb{N})$. Khi đó số tiền thuê xe là $T=4 x+3 y$ (triệu đồng).<br>- Sai. Theo bài ra ta có hệ phương trình: $0 \\leq x \\leq 10 \\text{ và } 0 \\leq y \\leq 9 \\text{ và } 20 x+10 y \\geq 140 \\text{ và } 0{,}6 x+1{,}5 y \\geq 9 \\Leftrightarrow0 \\leq x \\leq 10 \\text{ và } 0 \\leq y \\leq 9 \\text{ và } 2 x+y \\geq 14 \\text{ và } 2 x+5 y \\geq 30$.<br>- Đúng. Miền nghiệm của hệ $(1)$ là miền đa giác $A B C D$ (kể cả biên).  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có bảng  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"><br>- Đúng. Giá trị nhó nhất của $T$ là $32$ đạt tại $x=5, y=4$."
  },
  {
    "id": "0D223DS2",
    "question": "Một gia đinh cần ít nhất $900$ đơn vị protein và $400$ đơn vị lipit trong thức ăn mỗi ngày. Mỗi kilôgam thịt bò chứa $800$ đơn vị protein và $200$ đơn vị lipit. Mỗi kilôgam thịt lợn chứa $600$ đơn vị protein và $400$ đơn vị lipit. Biết rằng gia đình này chỉ mua nhiều nhất là $1{,}6$ kg thịt bò và $1{,}1$ kg thịt lợn; giá tiền $1$ kg thịt bò là $250$ nghìn đồng; $1$ kg thịt lợn là $160$ nghìn đồng. Giả sử gia đình đó mua x kilôgam thịt bò và y kilôgam thịt lợn. Khi đó",
    "subQuestions": [
      {
        "text": "Bất phương trình biểu thị lượng lipit tối thiểu trong thức ăn mỗi ngày của gia đình đó là $x+2 y \\leq 2$",
        "answer": false
      },
      {
        "text": "Các bất phương trình biểu thị các điều kiện của bài toán thành một hệ bất phương trình là $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\geq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2$",
        "answer": true
      },
      {
        "text": "Gọi $F$ (nghìn đồng) là số tiền phải trả cho $x$ kilôgam thịt bò và $y$ kilôgam thịt lợn. Biểu thức biểu diễn $F$ theo $x$ và $y$ là $F(x; y)=250 x+160 y$",
        "answer": true
      },
      {
        "text": "Để chi phí ít nhất gia đình thì cần mua $0{,}3 k g$ thịt bò và $1{,}1$ thịt lợn",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Sai. Giả sử gia đình đó mua $x$ kilôgam thịt bò và $y$ kilôgam thịt lợn.  <br>  Một gia đình cần ít nhất $400$ đơn vị lipit trong thức ăn mỗi ngày nên ta có   $200 x+400 y \\geq 400 \\Leftrightarrow x+2 y \\geq 2.$<br>- Đúng. Giả sử gia đình đó mua $x$ kilôgam thịt bò và $y$ kilôgam thịt lợn.  <br>  Số lượng thịt bò và thịt lợn phải là một số không âm nên ta có $x \\geq 0, y \\geq 0$.  <br>  Một gia đình cần ít nhất $900$ đơn vị protein trong thức ăn mỗi ngày nên ta có  $800 x+600 y \\geq 900 \\Leftrightarrow 8 x+6 y \\geq 9.$  Một gia đình cần ít nhất $400$ đơn vị lipit trong thức ăn mỗi ngày nên ta có  $200 x+400 y \\geq 400 \\Leftrightarrow x+2 y \\geq 2.$  Vì gia đînh này chỉ mua nhiều nhất là $1{,}6 kg$ thịt bò và $1{,}1 kg$ thịt lợn nên ta có  $x \\leq 1{,}6$ và $y \\leq 1{,}1$.<br>  Vậy ta có hệ $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\geq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2.$  <br>  Miền nghiệm của hệ là miền đa giác $A B C D$ (kể cả biên).<br>  $A(1{,}6; 0{,}2)$ (giao của $d^{\\prime}$ và đường thẳng $x=1{,}6$).<br>  $B(1{,}6; 1{,}1)$ (giao của đường thẳng $x=1{,}6$ và đường thẳng $y=1{,}1$).<br>  $C(0{,}3; 1{,}1)$ (giao của $d$ và đường thẳng $y=1{,}1$)  .<br>  $D(0{,}6; 0{,}7)$ (giao của $d$ và $d^{\\prime}$).<br>- Đúng. Vì số tiền mỗi kg thịt bò và thịt lợn lần lượt là $250$ nghìn đồng và $160$ nghìn đồng nên ta có $F(x; y)=250 x+160 y$ (nghìn đồng).<br>- Đúng. Miền nghiệm của hệ $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\geq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2$ là tứ giác $A B C D$ với  <br>- $A(1{,}6; 0{,}2)$ (giao của $d^{\\prime}$ và đường thẳng $x=1{,}6$).<br>- $B(1{,}6; 1{,}1)$ (giao của đường thẳng $x=1{,}6$ và đường thẳng $y=1{,}1$).<br>- $C(0{,}3; 1{,}1)$ (giao của $d$ và đường thẳng $y=1{,}1$).<br>- $D(0{,}6; 0{,}7)$ (giao của $d$ và $d^{\\prime}$).  Ta cần tìm giá trị lớn nhất của $F(x; y)$ khi $(x; y)$ thỏa mãn hệ bất phương trình $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\geq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2$<br>  Ta có bảng  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_012.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Giá trị nhỏ nhất là $F(0{,}3; 1{,}1)=251$.  <br>  Vậy để chi phí ít nhất thì cần mua $0{,}3 k g$ thịt bò và $1{,}1$ thịt lợn."
  },
  {
    "id": "0D223DS3",
    "question": "Một hộ nông dân định trồng dứa và củ đậu trên diện tích $8$ ha. Trên diện tích mỗi ha, nếu trồng dứa thì cần $20$ công và thu $3$ triệu đồng, nếu trồng củ đậu thì cần $30$ công và thu $4$ triệu đồng. Biết rằng tổng số công không quá $180$. Gọi $x$, $y$ lần lượt là số ha trồng dứa và củ đậu. Khi đó các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Số tiền thu được là $T(x, y)=3 x+4 y$",
        "answer": true
      },
      {
        "text": "$x+y \\leq 8$",
        "answer": true
      },
      {
        "text": "$2 x+3 y \\geq 18$",
        "answer": false
      },
      {
        "text": "Số tiền thu được lớn nhất là $26$ triệu đồng",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng. Gọi $x, y$ lần lượt là số $h a$ trồng dứa và củ đậu.<br>- Sai. Có $0 \\leq x \\leq 8; 0 \\leq y \\leq 8; x+y \\leq 8; 20 x+30 y \\leq 180 \\Rightarrow 2 x+3 y \\leq 18$.<br>- Đúng. Số tiền thu được là $T(x, y)=3 x+4 y$.<br>- Đúng. Ta có hệ $0 \\leq x \\leq 8 \\text{ và } 0 \\leq y \\leq 8 \\text{ và } x+y \\leq 8 \\text{ và } 2 x+3 y \\leq 18.$  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_013.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Miền nghiệm của hệ là miền tứ giác $O A B C$ với $A(0; 6), B(6; 2), C(0; 8)$. Khi đó $T(x, y)$ đạt cực đại tại một trong các đỉnh của $O A B C$.<br>  Có $T(0{,}0)=0$; $T(0; 6)=24$; $T(6; 2)=26$; $T(8; 0)=24$. Vậy số tiền thu được lớn nhất là $26$ triệu đồng."
  },
  {
    "id": "0D223DS4",
    "question": "Một công ty thời trang chuẩn bị cho một đợt khuyến mãi nhằm thu hút khách hàng bằng cách tiến hành quảng cáo sản phẩm của công ty trên hai nền tảng mạng xã hội Tik Tok và You Tube. Biết chi phí cho $1000000$ lượt xem quảng cáo trên Tik Tok là $20$ triệu đồng, chi phí cho $1000000$ lượt xem quảng cáo trên You Tube là $40$ triệu đồng. Tik Tok chỉ nhận các hợp đồng trên $6000000$ lượt xem. You Tube do các công ty có nhu cầu quảng cáo lớn nên chỉ nhận các hợp đồng dưới $3000000$ lượt xem. Theo các phân tích, cùng một lượng lượt xem quảng cáo thì trên You Tube cho hiệu quả gấp $3$ lần quảng cáo trên Tik Tok. Công ty thời trang dự tính chi tối đa $160$ triệu cho quảng cáo. Gọi $x$(triệu lượt) là số lượt xem trên Tik Tok, $y$(triệu lượt) là số lượt xem trên You Tube mà công ty cần thuê để quảng cáo. Khi đó các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Số tiền công ty phải trả cho $6$ triệu lượt xem trên TikTok là $120$ triệu đồng",
        "answer": true
      },
      {
        "text": "Chi phí quảng cáo mà công ty phải trả là $20 y+40 x$ triệu đồng",
        "answer": false
      },
      {
        "text": "Để hiệu quảng cáo cao nhất thì giá trị của biểu thức $x+3 y$ là nhỏ nhất",
        "answer": false
      },
      {
        "text": "Khi thời lượng quảng cáo đạt hiểu quả cao nhất thì $x=6$ (triệu lượt), $y=1$ (triệu lượt)",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng. Do chi phí cho $1000000$ lượt xem quảng cáo trên Tik Tok là $20$ triệu đồng nên Số tiền công ty phải trả cho $6$ triệu lượt xem trên TikTok là $6\\cdot 20=120$ triệu đồng.<br>- Sai. Do số lượt xem trên Tik Tok là $x$ (triệu lượt) với $x \\geq 6$ nên chi phí quảng cáo là $20 x$ (triệu đồng).<br> Do số lượt xem trên You Tube là $y$ (triệu lượt) với $0 \\leq y \\leq 3$ nên chi phí quảng cáo là $40 y$ (triệu đồng).<br> Vậy Chi phí quảng cáo mà công ty phải trả là $20 x+40 y$ triệu đồng.<br>- Sai. Hiệu quả thu được lớn nhất khi giá trị của biểu thức $T=x+3 y$ là lớn nhất.<br>- Đúng. Dựa vào dữ kiện của đề bài ta có hệ bất phương trình $x \\geq 6 \\text{ và } 0 \\leq y \\leq 3 \\text{ và } 20 x+40 y \\leq 160 \\Leftrightarrow x \\geq 6 (1) \\text{ và } 0 \\leq y \\leq 3 (2) \\text{ và } x+2 y-8 \\leq 0. (3)$<br> Ta vẽ các đường thẳng $\\left(d_1\\right)\\colon x=6,\\left(d_2\\right)\\colon y=0,\\left(d_3\\right)\\colon x+2 y-8=0,\\left(d_4\\right)\\colon y=3$ trên cùng hệ trục tọa độ. <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Lấy điểm $M(1; 1)$ ta thấy $M(1; 1) \\notin(1), M(1; 1) \\in(2), M(1; 1) \\in(3)$. Ta gạch bỏ các phần chứa điểm $M(1; 1)$ của mặt phẳng có bờ là đường thẳng $\\left(d_1\\right)$, gạch bỏ phần không chứa điểm $M(1; 1)$ của mặt phẳng có bờ là đường thẳng $d(2), d(3),\\left(d_4\\right)$. Ta được miền nghiệm của hệ bất phương trình là miền trong và viền của tam giác $A B C$. Trong đó $\\left(d_1\\right) \\cap\\left(d_2\\right)=B(6; 0),\\left(d_1\\right) \\cap\\left(d_3\\right)=A(6; 1),\\left(d_2\\right) \\cap\\left(d_3\\right)=C(8; 0).$ <br>- Với $A(6; 1)$ Hiệu quả thu được: $T=6+3\\cdot 1=9$.<br>- Với $B(6; 0)$ Hiệu quả thu được: $T=6+3\\cdot 0=6$.<br>- Với $A(8; 0)$ Hiệu quả thu được: $T=8+3\\cdot 0=8$. Vậy thời lượng quảng cáo đạt hiểu quả cao nhất thì $x=6$ (triệu lượt), $y=1$ (triệu lượt)."
  },
  {
    "id": "0D221DS5",
    "question": "Trong một cuộc thi pha chế, mỗi đội chơi được sử dụng tối đa $24$ g hương liệu, $9$ lít nước và $210$ g đường để pha chế nước cam và nước táo. Để pha chế $1$ lít nước cam cần $30$ g đường, $1$ lít nước và $1$ g hương liệu; Để pha chế $1$ lít nước táo cần $10$ g đường, $1$ lít nước và $4$ g hương liệu. Mỗi lít nước cam nhận được $60$ điểm thưởng, mỗi lít nước táo nhận được $80$ điểm thưởng, Giả sử $x$, $y$ là số lít nước cam và số lít nước táo mà mỗi đội cần pha chế. Khi đó các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Số gam hương liệu cần dùng là $x+4 y$",
        "answer": true
      },
      {
        "text": "$x+y&gt;9$",
        "answer": false
      },
      {
        "text": "Số điểm thưởng lớn nhất là $640$ điểm",
        "answer": true
      },
      {
        "text": "Điểm thưởng lớn nhất đạt tại $x=4, y=5$",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng. Giả sử $x$, $y$ là số lít nước cam và số lít nước táo mà mỗi đội cần pha chế.<br>  Suy ra $30 x+10 y$ là số gam đường cần dùng;<br>  $x+y$ là số lít nước cần dùng;<br>  $x+4 y$ là số gam hương liệu cần dùng.<br>- Sai. Theo giả thiết ta có $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } 30 x+10 y \\leq 210 \\text{ và } x+y \\leq 9 \\text{ và } x+4 y \\leq 24 \\Leftrightarrow x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } 3 x+y \\leq 21 \\text{ và } x+y \\leq 9 \\text{ và } x+4 y \\leq 24. (*)$<br>  Số điểm thưởng nhận được sẽ là $P=60 x+80 y$.<br>  Trong mặt phẳng tọa độ $O x y$, vẽ các đường thẳng  $d\\colon 3 x+y-21=0$, $\\left(d'\\right)\\colon x+y-9=0$, $(\\Delta)\\colon x+4 y-24=0$.<br>  Khi đó miền nghiệm của hệ bất phương trình $\\left(^{*}\\right)$ là phần mặt phẳng (ngũ giác $O A B C D$) không tô màu trên hình vẽ  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_015.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét các đỉnh của miền khép kín tạo ra bởi hệ $(*)$ là $O(0; 0)$, $A(0; 6)$, $B(4; 5)$, $C(6; 3)$, $D(7; 0)$.<br>  Ta thấy $P$ đạt giá trị lớn nhất tại $x=4, y=5$."
  },
  {
    "id": "0D223DS6",
    "question": "Bác An dự định trồng hai loại cây ăn trái là mít và xoài trong nông trại rộng $100$ hecta. Biết mỗi hecta trồng mít cần $20$ công chăm sóc và thu lại lợi nhuận $150$ triêu đồng, mỗi hecta trồng xoài cần $40$ công chăm sóc và thu lại lợi nhuận $180$ triệu đồng. Biết rằng tổng số công cần dùng không được vượt quá $2800$ công. Gọi $x$, $y$(hecta) lần lượt là diện tích đất dùng để trồng mít và xoài. Khi đó các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "$x+y&lt;100$",
        "answer": false
      },
      {
        "text": "$x+2 y \\leq 140$",
        "answer": true
      },
      {
        "text": "Tổng lợi nhuận thu được là $F=150 x+180 y$(triệu đồng)",
        "answer": true
      },
      {
        "text": "Lợi nhuận thu được lớn nhất là $15$ tỷ đồng",
        "answer": false
      }
    ],
    "explain": "<br>- Sai. $x+y \\leq 100$.<br>- Đúng. Số công cần dùng là $20 x+40 y \\leq 2800$ hay $x+2 y \\leq 140$.<br>- Đúng. Tổng số tiền thu được là $F=150 x+180 y$ (triệu đồng).<br>- Sai. Điều kiện: $x \\geq 0, y \\geq 0$.<br>  Nên ta cần tìm $x, y$ thỏa mãn hệ bất phương trình: $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 100 \\text{ và } x+2 y \\leq 140$ sao cho $F=150 x+180 y$ đạt giá trị lớn nhất.<br>  Biểu diễn tập nghiệm của hệ bất phương trình trên ta được miền tứ giác $O A B C$ (kể cả biên) với $A(0; 70)$, $B(60; 40)$, $C(100; 0)$ và $O(0; 0)$ như hình bên dưới  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_016.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Biểu thức $F=150 x+180 y$ đạt giá trị lớn nhất tại $(x; y)$ là tọa độ một trong các đỉnh của tứ giác.<br>  Ta có  $F(0; 0)=0$, $F(0; 70)=12600$, $F(100; 0)=15000$, $F(60; 40)=16200$.<br>  Khi đó giá trị lớn nhất tại $B(60; 40)$ nghĩa là bác Long cần trồng $60$ hecta mít và 40 hecta xoài thì thu được lợi nhuận lớn nhất là $16{,}2$ tỷ đồng."
  },
  {
    "id": "0D223DS7",
    "question": "Một nhà máy sản xuất, sử dụng ba loại máy đặc chủng để sản xuất sản phẩm $A$ và sản phẩm $B$ trong một chu trình sản xuất. Để sản xuất một tấn sản phẩm $A$ người ta sử dụng máy $I$ trong $1$ giờ, máy II trong $2$ giờ và máy III trong $3$ giờ. Để sản xuất ra một tấn sản phẩm $B$ người ta sử dụng máy I trong $6$ giờ, máy II trong $3$ giờ và máy III trong $2$ giờ. Biết rằng máy I chỉ hoạt động không quá $36$ giờ, máy II hoạt động không quá $23$ giờ và máy III hoạt động không quá $27$ giờ. Một tấn sản phẩm $A$ lãi $4$ triệu đồng và một tấn sản phẩm $B$ lãi được $3$ triệu đồng. Gọi $x \\geq 0, y \\geq 0$(tấn) là sản lượng cần sản xuất của sản phẩm $A$ và sản phẩm $B$. Khi đó các mệnh đề sau đúng hay sai?",
    "subQuestions": [
      {
        "text": "Số tiền lãi của nhà máy: $T(x; y)=4 x+3 y$ (triệu đồng).",
        "answer": true
      },
      {
        "text": "$x+6 y&gt;36$",
        "answer": false
      },
      {
        "text": "$3 x+2 y&lt;27$",
        "answer": true
      },
      {
        "text": "Tiền lãi cao nhất trong một chu trình sản xuất là $37$ triệu đồng",
        "answer": false
      }
    ],
    "explain": "Gọi $x \\geq 0, y \\geq 0$ (tấn) là sản lượng cần sản xuất của sản phẩm $A$ và sản phẩm $B$. Ta có  <br>- $x+6 y$ là thời gian hoạt động của máy I.<br>- $2 x+3 y$ là thời gian hoạt động của máy II.<br>- $3 x+2 y$ là thời gian hoạt động của máy III.  Số tiền lãi của nhà máy: $T(x; y)=4 x+3 y$ (triệu đồng).<br>  Bài toán trở thành: Tìm $x \\geq 0, y \\geq 0$ thỏa mãn $x+6 y \\leq 36 \\text{ và } 2 x+3 y \\leq 23 \\text{ và } 3 x+2 y \\leq 27$ để $T(x; y)=4 x+3 y$ đạt giá trị lớn nhất.<br>  Ta được miền nghiệm là phần giới hạn bởi tam giác $A B C$.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_017.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Với $A\\left(\\dfrac{10}{3}; \\dfrac{49}{9}\\right); B\\left(\\dfrac{45}{8}; \\dfrac{81}{16}\\right)$ và $C(7; 3)$.<br>  Nhận thấy $T\\left(\\dfrac{45}{8}; \\dfrac{81}{16}\\right)=4 \\cdot \\dfrac{45}{8}+3 \\cdot \\dfrac{81}{16}=37{,}6875$ triệu đồng, đạt giá trị lớn nhất.<br>  Do đó   <br>- Đúng.<br>- Sai.<br>- Đúng.<br>- Sai."
  },
  {
    "id": "0D223DS8",
    "question": "Một xưởng cơ khí có hai công nhân là Chiến và Bình. Xưởng sản xuất loại sản phẩm $I$ và $I I$. Mỗi sản phẩm $I$ bán lãi $500$ nghìn đồng, mỗi sản phẩm II bán lãi $700$ nghì đồng. Để sản xuất được một sản phẩm $I$ thì Chiến phải làm việc trong $3$ giờ, Bình phải làm việc trong $1$ giờ. Để sản xuất được một sản phẩm II thì Chiến phải làm việc trong $2$ giờ, Bình phải làm việc trong $6$ giờ. Một người không thể làm được đồng thời hai sản phẩm. Biết rằng trong một tháng Chiến không thể làm việc quá $180$ giờ và Bình không thể làm việc quá $220$ giờ. Gọi $x$, $y$ lần lượt là số sản phẩm loại $I$ và loại $I I$ được sản xuất ra. Điều kiện $x$, $y$ là hai số tự nhiên. Khi đó các mệnh đề sau đúng hay sai?<br>",
    "subQuestions": [
      {
        "text": "$3 x+2 y \\leq 180$",
        "answer": true
      },
      {
        "text": "$x+6 y \\leq 220$",
        "answer": true
      },
      {
        "text": "Tiền lãi trong một tháng của xưởng là $T=0{,}5 x+0{,}7 y$ (triệu đồng)",
        "answer": true
      },
      {
        "text": "Tiền lãi lớn nhất trong một tháng của xưởng là $30$ triệu đồng",
        "answer": false
      }
    ],
    "explain": "<br>- Đúng. Số giờ làm việc của Chiến là $3 x+2 y \\Rightarrow 3 x+2 y \\leq 180$.<br>- Đúng. Số giờ làm việc của Bình là $x+6 y \\Rightarrow x+6 y \\leq 220$.<br>- Đúng. Mỗi sản phẩm $I$ bán lãi $500$ nghìn đồng, mỗi sản phẩm II bán lãi $700$ nghìn đồng nên tiền lãi trong một tháng của xưởng là $T=0{,}5 x+0{,}7 y$ (triệu đồng).<br>- Sai.  Ta có hệ bất phương trình sau: $3 x+2 y \\leq 180 \\text{ và } x+6 y \\leq 220 \\text{ và } x \\geq 0 \\text{ và } y \\geq 0.$<br>  Miền nghiệm của hệ trên là miền đa giác $O A B C$.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_018.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Với $O(0; 0), A(60; 0), C\\left(0; \\dfrac{110}{3}\\right)$ và tọa độ $B$ là nghiệm của hệ $3 x+2 y=180 \\text{ và } x+6 y=220 \\Rightarrow B(40; 30)$.<br>  Tiền lãi trong một tháng của xưởng là $T=0{,}5 x+0{,}7 y$(triệu đồng).<br>  Ta thấy $T$ đạt giá trị lớn nhất chỉ có thể tại các điểm $A, B, C$.<br>  Mà   $T(60; 0)=0{,}5\\cdot 60+0{,}7\\cdot 0=30;$<br>$T(40; 30)=0{,}5\\cdot 40+0{,}7\\cdot 30=41;$<br>$T(0; 0)=0{,}5\\cdot 0+0{,}7\\cdot 0=0;$<br>$T\\left(0; \\dfrac{110}{3}\\right)=0{,}5\\cdot 0+0{,}7 \\cdot \\dfrac{110}{3}=\\dfrac{77}{3}.$  Vậy tiền lãi lớn nhất trong một tháng của xưởng là $41$ triệu đồng."
  },
  {
    "id": "0D223DS9",
    "question": "Trong một dây chuyển sản xuất có hai công nhân là $A$ và B. Dây chuyền này sản xuất ra sản phẩm loại I và loại II. Mỗi sản phẩm loại I, loại II bán ra thu về lợi nhuận lần lượt là $40000$ đồng và $30000$ đồng. Để sản xuất được một sản phẩm loại I thì A phải làm việc trong $1$ giờ, B phải làm việc trong $2$ giờ. Để sản xuất được một sản phẩm loại II thì A phải làm việc trong $2$ giờ, $B$ phải làm việc trong $1$ giờ. Một người không thể làm đồng thời hai loại sản phẩm. Biết rằng trong một ngày $A$ không thể làm việc quá $10$ giờ, $B$ không thể làm việc quá $8$ giờ. Gọi $x, y$ lần lượt là số sản phẩm loại I và loại II được sản xuất. Khi đó",
    "subQuestions": [
      {
        "text": "Thời gian của công nhân $A$ dùng để sản xuất xuất ra sản phẩm I, II là $x+2 y$",
        "answer": true
      },
      {
        "text": "Lợi nhuận trong một ngày của dây chuyển sản xuất là $T(x; y)=40000 x+30000 y$(đồng)",
        "answer": true
      },
      {
        "text": "Lợi nhuận lớn nhất trong một ngày của dây chuyền sản xuất là $200000$ đồng",
        "answer": true
      },
      {
        "text": "Để có được lợi nhuận lớn nhất thì cần sản xuất $4$ sản phẩm loại I và $2$ sản phẩm loại II",
        "answer": false
      }
    ],
    "explain": "Với $x$, $y$ lần lượt là số sản phẩm loại I và loại II được sản xuất $(x \\in \\mathbb{N}, y \\in \\mathbb{N}$).<br>  Ta có hệ bất phương trình $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+2 y \\leq 10 \\text{ và } 2 x+y \\leq 8(*)$.<br>  Miền nghiệm của hệ bất phương trình $(*)$ được biểu diễn như sau  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_019.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Miền nghiệm của hệ bất phương trình $(*)$ là tứ giác $O A B C$ với $O(0; 0)$, $A(0; 5)$, $B(2; 4)$, $C(4; 0)$.<br>  Lợi nhuận trong một ngày của dây chuyển sản xuất là $T(x; y)=40000 x+30000 y$ (đồng).<br>  Dựa vào miền nghiệm của hệ $\\left(*\\right)$, ta thấy $T$ chỉ đạt giá trị lớn nhất tại $(x; y)$ là tọa độ của một trong các điểm $O(0; 0)$, $A(0; 5)$, $B(2; 4)$, $C(4; 0)$.<br>  Ta có bảng giá trị sau:  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_020.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Lợi nhuận lớn nhất trong một ngày của dây chuyền sản xuất là $200000$ đồng khi sản xuất $2$ sản phẩm loại I và $4$ sản phẩm loại II.<br>  Từ đó ta có   <br>- Đúng.<br>- Đúng.<br>- Đúng.<br>- Sai."
  },
  {
    "id": "0D223DS10",
    "question": "Một xưởng cơ khí có hai công nhân là Chiến và Bình. Xưởng sản xuất loại sản phẩm $I$ và $I I$. Mỗi sản phẩm $I$ bán lãi $500$ nghìn đồng, mỗi sản phẩm II bán lãi $400$ nghìn đồng. Để sản xuất được một sản phẩm $I$ thì Chiến phải làm việc trong $3$ giờ, Bình phải làm việc trong $1$ giờ. Để sản xuất được một sản phẩm II thì Chiến phải làm việc trong $2$ giờ, Bình phải làm việc trong $6$ giờ. Một người không thể làm được đồng thời hai sản phẩm. Biết rằng trong một tháng Chiến không thể làm việc quá $180$ giờ và Bình không thể làm việc quá $220$ giờ. Giả sử $x; y$ lần lượt là số sản phẩm loại $I$ và loại $I I$ được sản xuất ra. Khi đó",
    "subQuestions": [
      {
        "text": "Thời gian Chiến, Bình có thể làm trong một tháng lần lượt là $3 x+2 y; y+6 x$",
        "answer": false
      },
      {
        "text": "Số tiền lãi xưởng thu được $0{,}5 x+0{,}4 y$(triệu đồng)",
        "answer": true
      },
      {
        "text": "Để xưởng đạt được lãi suất cao nhất thì số sản phẩm loại $I$, loại II xưởng cần sản xuất lần lượt là $60$, $40$ sản phẩm",
        "answer": true
      },
      {
        "text": "Lãi cao nhất của xưởng thu được trong $1$ tháng là $30$ triệu đồng",
        "answer": false
      }
    ],
    "explain": "Điều kiện $x, y$ nguyên dương.<br>  Ta có hệ bất phương trình sau $3 x+2 y \\leq 180 \\text{ và } x+6 y \\leq 220 \\text{ và } x&gt;0 \\text{ và } y&gt;0$  Miền nghiệm của hệ trên là  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_021.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tiền lãi trong một tháng của xưởng là $T=0{,}5 x+0{,}4 y$(triệu đồng).<br>  Ta thấy $T$ đạt giá trị lớn nhất chỉ có thể tại các điểm $A, B, C$.<br>  Tại $A(60; 0)$ thì $T=30$ triệu đồng.<br>  Tại $B(40; 30)$ thì $T=32$ triệu đồng.<br>  Tại $C\\left(0; \\dfrac{110}{3}\\right)$ thì $T=\\dfrac{44}{3}$ triệu đồng.<br>  Vậy tiền lãi lớn nhất trong một tháng của xưởng là $32$ triệu đồng.<br>  Do đó   <br>- Sai.<br>- Đúng.<br>- Đúng.<br>- Sai."
  },
  {
    "id": "0D223DS11",
    "question": "Một gia đình cần ít nhất $900$ đơn vị protein và $400$ đơn vị lipit trong thức ăn mỗi ngày. Mỗi kiogam thịt bò chứa $800$ đơn vị protein và $200$ đơn vị lipit. Mỗi kilogam thịt lợn chứa $600$ đơn vị protein và $400$ đơn vị lipit. Biết rằng gia đình này chỉ mua nhiều nhất $1{,}6$ kg thịt bò và $1{,}1$ kg thịt lợn. Giá tiền một kg thịt bò là $160$ nghìn đồng, một kg thịt lợn là $110$ nghìn đồng. Gọi x, y lần lượt là số kg thịt bò và thịt lợn mà gia đình đó cần mua. Khi đó",
    "subQuestions": [
      {
        "text": "Số tiền gia đình đó cần trả là $160 x+110 y$(nghìn đồng)",
        "answer": true
      },
      {
        "text": "Số đơn vị lipit gia đình đó có trong một ngày là $200 x+400 y$(đơn vị lipit)",
        "answer": true
      },
      {
        "text": "Số tiền mà gia đình đó phải bỏ ra một ngày nhiều nhất là $377$(nghìn đồng)",
        "answer": true
      },
      {
        "text": "Tổng số tiền họ phải trả là ít nhất mà vẫn đảm bảo lượng protein và lipit trong thức ăn thì $x=0{,}3$ kg và $y=1{,}1$ kg",
        "answer": true
      }
    ],
    "explain": "Theo bài ra ta có số tiền gia đình cần trả là $160 \\cdot x+110. y$ với $x, y$ thỏa mãn: $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\leq 1{,}1.$<br>  Số đơn vị protein gia đình có là $800\\cdot x+600\\cdot y \\geq 900 \\Leftrightarrow 8 x+6 y \\geq 9\\left(d_1\\right)$.<br>  Số đơn vị lipit gia đình có là $200\\cdot x+400\\cdot y \\geq 400 \\Leftrightarrow x+2 y \\geq 2\\left(d_2\\right)$.<br>  Bài toán trở thành: Tìm $x, y$ thỏa mãn hệ bất phương trình $0 \\leq x \\leq 1{,}6 \\text{ và } 0 \\leq y \\leq 1{,}1 \\text{ và } 8 x+6 y \\geq 9 \\text{ và } x+2 y \\geq 2$ sao cho $T=160\\cdot x+110\\cdot y$ nhỏ nhất.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_022.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vẽ hệ trục tọa độ ta tìm được tọa độ các điểm $A(1{,}6; 1{,}1); B(1{,}6; 0{,}2); C(0{,}6; 0{,}7)$; $D(0{,}3; 1{,}1)$.<br>  Nhận xét $T(A)=377$ nghìn, $T(B)=278$ nghìn, $T(C)=173$ nghìn, $T(D)=169$ nghìn.<br>  Vậy tổng số tiền họ phải trả là ít nhất mà vẫn đảm bảo lượng protein và lipit trong thức ăn thì $x=0{,}3$ và $y=1{,}1$.  Do đó   <br>- Đúng.<br>- Đúng.<br>- Sai.<br>- Sai."
  },
  {
    "id": "0D222DS12",
    "question": "Cho hệ bất phương trình $y-2 x \\leq 2 \\text{ và } 2 y-x \\geq 4 \\text{ và } x+y \\leq 5$ $(I)$. Khi đó<br>",
    "subQuestions": [
      {
        "text": "$(0; 3)$ là một nghiệm của $(I)$",
        "answer": false
      },
      {
        "text": "Miền nghiệm của $(I)$ chứa điểm $(1; 3)$",
        "answer": true
      },
      {
        "text": "$M(x; y)$ thuộc miền nghiệm của $(I)$ thì $2 y-x \\leq 7$",
        "answer": true
      },
      {
        "text": "Giá trị nhỏ nhất của biểu thức $F=y-x$ trên miền xác định bởi hệ là $1$",
        "answer": true
      }
    ],
    "explain": "<br>- Sai. Thay $(0; 3)$ vào bất phương trình thứ nhất được $3&lt;2$ vô lý.<br>- Đúng. Thay $(1;3)$ vào hệ thoả mãn.<br>- Đúng. Từ bất phương trình thứ nhất và bất phương trình thứ ba của $(I)$, cộng theo vế ta được   $y-2 x+x+y \\leq 2+5 \\Leftrightarrow 2 y-x \\leq 7.$<br>- Đúng. Miền nghiệm của hệ $y-2 x \\leq 2 \\text{ và } 2 y-x \\geq 4 \\text{ và } x+y \\leq 5$ là miền trong của tam giác $A B C$ kể cả biên.  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_023.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta thấy $F=y-x$ đạt giá trị nhỏ nhất chỉ có thể tại các điểm $A, B, C$.<br>  Tại $A(0; 2)$ thì $F=2$.<br>  Tại $B(1; 4)$ thì $F=3$.<br>  Tại $A(2; 3)$ thì $F=1$.<br>  Vậy $\\min F=1$ khi $x=2, y=3$."
  },
  {
    "id": "0D223DS13",
    "question": "Một cơ sở sản xuất hàng hóa sản xuất hai loại hàng I và II từ nguyên liệu A, B. Trữ lượng các nguyên liệu A và B hằng ngày lần lượt là $12$ kg và $9$ kg. Để sản xuất một thùng hàng loại $I$ cần $2$ kg nguyên liệu loại A và $1$ kg nguyên liệu loại $B$. Để sản xuất một thùng hàng loại II cần $3$ kg nguyên liệu loại A và $3$ kg nguyên liệu loại B. Giá bán một thùng hàng loại I và loại II lần lượt là $5$ triệu đồng và $7$ triệu đồng. Qua tiếp thị, được biết một ngày nhu cầu tiêu thụ hàng loại II là không quá $3$ thùng và nhu cầu hàng loại I hơn hàng loại II không quá $1$ thùng. Gọi $x, y$ lần lượt là số thùng hàng loại I và loại II mà cơ sở sản xuất $(x, y \\in \\mathbb{N})$. Khi đó",
    "subQuestions": [
      {
        "text": "Doanh thu của cửa hàng là $T(x, y)=5 x+7 y$",
        "answer": true
      },
      {
        "text": "Lượng nguyên liệu A, B cần sử dụng lần lượt là $2 x+y$ kg, $3 x+3 y$ kg",
        "answer": false
      },
      {
        "text": "Doanh thu lớn nhất cửa hàng có thể thu được là $21$ triệu đồng",
        "answer": false
      },
      {
        "text": "Trong trường hợp tối ưu, cửa hàng đạt doanh thu lớn nhất thì lượng nguyên liệu loại A cần dùng là $12$ kg",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng. Doanh thu của cửa hàng là $T(x, y)=5 x+7 y$ (triệu đồng).<br>- Sai. Lượng nguyên liệu A, B cần sử dụng lần lượt là $2 x+3 y$ kg, $x+3 y$ kg.<br>- Sai. Theo đề ra ta có $x \\geq 0 \\text{ và } 0 \\leq y \\leq 3 \\text{ và } x-y \\leq 1 \\text{ và } 2 x+3 y \\leq 12 \\text{ và } x+3 y \\leq 9(*)$  <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_024.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Miền nghiệm của hệ bất phương trình (*) là tứ giác $ABCO$ và miền trong của nó(hình vẽ) trong đó $A(0,3), B(3,2), C(1,0), O(0,0)$.<br>  Do biểu thức $T(x, y)=5 x+7 y$ đạt giá trị nhỏ nhất trên miền nghiệm tại một trong $4$ điểm $A, B, C, O$, thay tọa độ các điểm vào, ta được  $T(A)=21$, $T(B)=29$, $T(C)=5$, $T(D)=0$.<br>  Vậy $T_{\\max}=29$ cơ sở nên sản xuất $3$ thùng hàng loại $I$ và $2$ thùng hàng loại II.<br>- Đúng. Khi đó, lượng nguyên liệu loại $A$ cần dùng là $2 \\cdot 3+3 \\cdot 2=12$ kg."
  },
  {
    "id": "0D223DS14",
    "question": "Một khách hàng cần đặt một thợ mộc một số bàn học và một số ghế. Để làm một cái bàn học người thợ mất $6$ giờ và mất $4$ giờ để làm một cái ghế. Người thợ mộc có tối đa $36$ giờ/tuần để làm bàn và ghế. Khách hàng yêu cầu người thợ mộc làm số ghế nhiều nhất là hơn số bàn một cái. Số lượng bàn và ghế tối đa người thợ mộc có thể làm được trong một tuần là $7$ cái. Biết một cái bàn học bán ra lãi $180$ nghìn đồng, mỗi cái ghế bán ra lãi $140$ nghìn đồng. Gọi $x$ và $y$ lần lượt là số ghế và số bàn học mà người thợ mộc làm được trong một tuần $(x, y \\geq 0)$. Khi đó",
    "subQuestions": [
      {
        "text": "Số tiền lãi xưởng thu được là $f(x; y)=180 x+140 y$ (nghìn đồng)",
        "answer": false
      },
      {
        "text": "Tổng thời gian hoàn thành số bàn và ghế là $6 x+4 y$ (giờ)",
        "answer": false
      },
      {
        "text": "Số tiền lãi thu về lớn nhất khi người thợ đóng được $3$ cái ghế và $4$ cái bàn trong $1$ tuần",
        "answer": true
      },
      {
        "text": "Số tiền lãi thu về lớn nhất khi người thợ đóng được $21$ cái ghế và $16$ cái bàn trong $5$ tuần",
        "answer": false
      }
    ],
    "explain": "Theo giả thiết bài ra ta có hệ bất phương trình sau đây $4 x+6 y \\leq 36 \\text{ và } y+1 \\geq x \\text{ và } x+y \\leq 7 \\text{ và } x \\geq 0 \\text{ và } y \\geq 0 \\Leftrightarrow2 x+3 y \\leq 18 \\text{ và } x-y \\leq 1 \\text{ và } x+y \\leq 7 \\text{ và } x \\geq 0 \\text{ và } y \\geq 0.$ $(1)$<br> Xét hệ phương trình $2 x+3 y-18=0 \\left(d_1\\right) \\text{ và } x+y=7 \\left(d_2\\right) \\text{ và } x-y-1=0 \\left(d_3\\right) \\text{ và } x \\geq 0 \\text{ và } y \\geq 0.$<br> Với $E=d_1 \\cap d_3 \\text{ và } D=d_1 \\cap O y \\text{ và } C=d_1 \\cap d_2 \\text{ và } B=d_2 \\cap d_3 \\text{ và } A=d_3 \\cap O x \\Rightarrow E\\left(\\dfrac{21}{5}; \\dfrac{16}{5}\\right) \\text{ và } D(0; 6) \\text{ và } C(3; 4) \\text{ và } B(4; 3) \\text{ và } A(1; 0).$<br> Miền nghiệm của hệ $(1)$ là miền trong tứ giác $O A B D$ (kể cả biên) như hình vẽ. <br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_025.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Khi đó số tiền lãi mà người thợ mộc thu được là $f(x; y)=140 x+180 y$ (nghìn đồng).<br> Ta có $f(A)=140\\cdot 1=140 \\text{ và } f(B)=140\\cdot 4+180\\cdot 3=1100 \\text{ và } f(C)=140\\cdot 3+180\\cdot 4=1140 \\text{ và } f(D)=140\\cdot 0+180\\cdot 6=1080.$<br> $f_{\\max}(x, y)=f(B)$ nên người thợ mộc cần làm được $3$ cái ghế và $4$ cái bàn trong $1$ tuần thì được số tiền lãi lớn nhất.<br> Ta có điểm $E\\left(\\dfrac{21}{5}; \\dfrac{16}{5}\\right)$ không thuộc miền nghiệm. Do đó <br>- Sai.<br>- Sai.<br>- Đúng.<br>- Sai."
  },
  {
    "id": "0D222DS15",
    "question": "Cho hệ bất phương trình: $y \\geq 0 (1) \\text{ và } 3 x+2 y \\leq 6 (2)$. Khi đó<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd44_026.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hệ đã cho là hệ bất phương trình bậc nhất hai ẩn",
        "answer": true
      },
      {
        "text": "Hệ đã cho có một nghiệm duy nhất",
        "answer": false
      },
      {
        "text": "Điểm $A(1; 1)$ không thuộc miền nghiệm của hệ đã cho",
        "answer": false
      },
      {
        "text": "Phần không tô đậm trong hình vẽ dưới đây biểu diễn miền nghiệm của hệ đã cho",
        "answer": true
      }
    ],
    "explain": "<br>- Đúng.<br>- Sai. Vì hệ có vô số nghiệm.<br>- Sai. Vì tọa độ $A(1; 1)$ thỏa mãn hệ đã cho. $ 1 \\geq 0 (1) \\text{ và } 3\\cdot 1+2\\cdot 1=5 \\leq 6. (2) $<br>- Đúng vì <br>- Vẽ các đường thẳng $\\left(d_1\\right): y=0$ (trục hoành).<br> Miền nghiệm của (1) gồm phần $y$ nhận giá trị dương là nửa $mp$ nằm phía trên trục hoành(lấy cả trục hoành)<br>- Vẽ đường thẳng $\\left(d_2\\right): 3 x+2 y=6$ (đi qua hai điểm $(0; 3)$ và $(2; 0)$.<br> Lại có $(0; 0)$ thỏa mãn bất phương trình $3 x+2 y \\leq 6$ nên miền nghiệm của(2) là nửa mp có bờ là đường thẳng $\\left(d_2\\right)$ và chứa điểm $O$ (lấy cả bờ). Suy ra miền nghiệm của hệ đã cho là phần không tô đậm như hình vẽ."
  },
  {
    "id": "0D222DS1",
    "question": "Cho hệ bất phương trình $3-y &lt; 0 \\text{ và } 2x-3y+1 &gt; 0$.<br><img src=\"data/10/0D2/im0D22/dlts_sbh_ds10cd145_020.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Hệ đã cho không phải là hệ bất phương trình bậc nhất hai ẩn",
        "answer": false
      },
      {
        "text": "$B(4; 3)$ là một điểm thuộc miền nghiệm của hệ",
        "answer": false
      },
      {
        "text": "$C(7; 4)$ là một điểm thuộc miền nghiệm của hệ",
        "answer": true
      },
      {
        "text": "Miền không bị gạch (không kể bờ) là miền nghiệm của hệ",
        "answer": true
      }
    ],
    "explain": "<br>- Hệ bất phương trình $3-y &lt; 0 \\text{ và } 2x-3y+1 &gt; 0$ là hệ bất phương trình bậc nhất hai ẩn.<br>- Thay tọa độ điểm $B(4; 3)$ vào bất phương trình $3-y &lt; 0$ ta được  <br>- $3-3 &lt; 0 \\Leftrightarrow 0 &lt; 0$.  Vì $B(4; 3)$ không thỏa mãn bất phương trình thứ nhất nên nó không thuộc miền nghiệm của hệ<br>- Thay tọa độ điểm $C(7; 4)$ vào hệ:  <br>- $3-y &lt; 0 \\Leftrightarrow 3-4 &lt; 0 \\Leftrightarrow -1 &lt; 0$. Đây là mệnh đề đúng.<br>- $2x-3y+1 &gt; 0 \\Leftrightarrow 2(7)-3(4)+1 &gt; 0 \\Leftrightarrow 14-12+1 &gt; 0 \\Leftrightarrow 3 &gt; 0$. Đây là mệnh đề đúng.  Vì $C(7; 4)$ thỏa mãn cả hai bất phương trình nên nó thuộc miền nghiệm của hệ. Khẳng định \\lq\\lq $C(7; 4)$ là một điểm thuộc miền nghiệm của hệ\\rq\\rq là <strong>Đúng</strong>.<br>- <br>- Bất phương trình $3-y &lt; 0 \\Leftrightarrow y &gt; 3$ có miền nghiệm là nửa mặt phẳng phía trên đường thẳng $(d_1)$ (không kể bờ).<br>- Bất phương trình $2x-3y+1 &gt; 0$ có miền nghiệm là nửa mặt phẳng chứa gốc tọa độ $O(0;0)$ (vì $2(0)-3(0)+1=1&gt;0$) (không kể bờ).  Miền nghiệm của hệ là phần giao của hai nửa mặt phẳng trên. Trên hình vẽ, miền không bị gạch chính là phần giao này."
  },
  {
    "id": "0D222DS16",
    "question": "Cho hệ bất phương trình $x \\geq 0 \\text{ và } y \\geq 0 \\text{ và } x+y \\leq 2.$",
    "subQuestions": [
      {
        "text": "Điểm $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình đã cho",
        "answer": true
      },
      {
        "text": "Miền nghiệm của hệ bất phương trình chỉ chứa 3 nghiệm có tọa độ là các số nguyên",
        "answer": false
      },
      {
        "text": "Miền nghiệm của hệ bất phương trình là miền tam giác",
        "answer": true
      },
      {
        "text": "Giá trị lớn nhất của $F (x, y)=3x-4y$ với $(x, y)$ thuộc miền nghiệm của hệ bất phương trình là $5$",
        "answer": false
      }
    ],
    "explain": "Miện nghiệm của hệ bất phương trình đã cho.  <br><img src=\"data/10/0D2/im0D22/loc_ghk1lhp_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Dựa vào miền nghiệm đã xác định, điểm $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình đã cho.<br>- Ta có $6$ điểm: $(0;2)$, $(0;1)$, $(0;0)$, $(1;0)$, $(2;0)$, $(1;1)$ đều thuộc miền nghiệm của hệ bất phương trình.<br>- Miền nghiệm của hệ bất phương trình là miền tam giác.<br>- Ta có tọa độ các đỉnh của miền nghiệm là: $(0;2)$, $(0;0)$, $(2;0)$. <br>  Giá trị $F(2,0)=6$ là giá trị lớn nhất của $F(x,y)$."
  },
  {
    "id": "0D221DS2",
    "question": "Cho tam giác $ABC$ có $BC=a=8, AB=c=5, \\widehat{ABC}=60^\\circ$. Xét tính đúng sai của các khẳng định sau:",
    "subQuestions": [
      {
        "text": "Độ dài cạnh $AC=7$",
        "answer": true
      },
      {
        "text": "Góc $\\widehat{BAC}$ là góc tù",
        "answer": false
      },
      {
        "text": "Bán kính đường tròn ngoại tiếp tam giác $ABC$ bằng $\\dfrac{7\\sqrt{3}}{3}$",
        "answer": true
      },
      {
        "text": "Biểu thức $T=\\sin A-2 \\sin B+\\sin C$ có giá trị bằng 0",
        "answer": false
      }
    ],
    "explain": "<br>- ĐÚNG.<br>  Ta có $AC^2=AB^2+BC^2-2\\cdot AB \\cdot BC \\cdot \\cos \\widehat{ABC} =49 \\Leftrightarrow AC =7$.<br>- SAI.<br>  Ta có $\\cos \\widehat{BAC}=\\dfrac{AB^2+AC^2-BC^2}{2\\cdot AB \\cdot AC}=\\dfrac{1}{7}&gt;0$, vậy góc $\\widehat{BAC}$ là góc nhọn.<br>- ĐÚNG.<br>  Diện tích tam giác $ABC$ là $S=\\dfrac{1}{2}\\cdot BA \\cdot BC \\cdot \\sin \\widehat{ABC}=10\\sqrt{3}.$<br>  $S=\\dfrac{abc}{4R} \\Leftrightarrow R =\\dfrac{abc}{4S}=\\dfrac{7\\sqrt{3}}{3}.$<br>- SAI.<br>  Ta có $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R \\Rightarrow \\sin A = \\dfrac{a}{2R}=\\dfrac{4\\sqrt{3}}{7} \\text{ và } \\sin B = \\dfrac{b}{2R}=\\dfrac{\\sqrt{3}}{2} \\text{ và } \\sin C = \\dfrac{c}{2R}=\\dfrac{5\\sqrt{3}}{14}.$<br>  Từ đó $T=\\sin A-2 \\sin B+\\sin C = -\\dfrac{\\sqrt{3}}{14}$."
  }
];
