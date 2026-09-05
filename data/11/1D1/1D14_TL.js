// =========================================================================
// KHỐI DỮ LIỆU: 1D14 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 5), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1D14 = [
  {
    "id": "1D141TL1",
    "question": "Nhiệt độ ngoài trời ở một thành phố vào các thời điểm khác nhau trong ngày có thể được mô phỏng bởi công thức $ h(t)=25+3\\sin\\left[\\dfrac{\\pi}{12}\\left(t-8\\right)\\right]$, với $h$ được tính bằng độ $C$ và $t$ là thời gian trong ngày tính bằng giờ. Vào lúc mấy giờ thì nhiệt độ trong ngày là thấp nhất?",
    "answer": "2",
    "explain": "$-1\\le\\sin\\left[\\dfrac{\\pi}{12}\\left(t-8\\right)\\right]\\le 1 \\Leftrightarrow -3\\le 3\\sin\\left[\\dfrac{\\pi}{12}\\left(t-8\\right)\\right]\\le 3$<br>$\\Leftrightarrow 22\\le 25+3\\sin\\left[\\dfrac{\\pi}{12}\\left(t-8\\right)\\right]\\le 28$<br>$\\Leftrightarrow 22\\le h(t)\\le 28.$  Nhiệt độ thấp nhất trong ngày là $22^\\circ$ C khi   $\\sin\\left[\\dfrac{\\pi}{12}\\left(t-8\\right)\\right]=-1 \\Leftrightarrow \\dfrac{\\pi}{12}\\left(t-8\\right)=-\\dfrac{\\pi}{2}+k2\\pi$<br>$\\Leftrightarrow t=2+24k,k\\in\\mathbb{Z}.$  Mà $ 0\\le t\\le 24\\Leftrightarrow 0\\le 2+24k\\le 24\\Leftrightarrow-\\dfrac{1}{12}\\le k\\le\\dfrac{11}{12}$.<br>  Mà $k\\in\\mathbb{Z}\\Rightarrow k=0$.  Vậy vào lúc $2$ giờ nhiệt độ trong ngày thấp nhất."
  },
  {
    "id": "1D148TL2",
    "question": "Hằng ngày mực nước tại một bến cảng lên xuống theo thủy triều. Độ sâu $h$ (m) của mực nước theo thời gian $t$ (giờ) trong một ngày được cho bởi công thức:  $h(t)=11+2\\sin\\left(\\dfrac{\\pi}{12}t\\right),$  với $0\\le t\\le 24$. Mực nước thấp nhất tại cảng là bao nhiêu?",
    "answer": "13",
    "explain": "Với mọi $t$, ta có $-1\\le \\sin\\left(\\dfrac{\\pi}{12}t\\right)\\le 1$. Suy ra   $9\\le 11+2\\sin\\left(\\dfrac{\\pi}{12}t\\right) \\le 13.$  Vậy mực nước thấp nhất tại cảng là $13$ m."
  },
  {
    "id": "1D141TL3",
    "question": "Hằng ngày mực nước của con kênh lên xuống theo thuỷ triều, độ sâu $L$ (tính theo đơn vị mét) của mực nước trong kênh theo thời gian $t$ (giờ) được cho bởi công thức   $L=3\\sin\\left(\\dfrac{\\pi t}{4}+\\dfrac{\\pi}{3}\\right)+14$.  Thời gian ngắn nhất để mực nước của kênh cao nhất là $t=\\dfrac{a}{b}$ (giờ) với $\\dfrac{a}{b}$ là phân số tối giản. Tính giá trị của $a\\cdot b$?",
    "answer": "6",
    "explain": "Ta có   $-1\\le \\sin\\left(\\dfrac{\\pi t}{4}+\\dfrac{\\pi}{3}\\right)\\le 1$<br>$\\Leftrightarrow -3\\le 3\\cdot \\sin\\left(\\dfrac{\\pi t}{4}+\\dfrac{\\pi}{3}\\right)\\le 3$<br>$\\Leftrightarrow 11\\le 3\\cdot \\sin\\left(\\dfrac{\\pi t}{4}+\\dfrac{\\pi}{3}\\right)+14\\le 17$<br>$\\Leftrightarrow 11\\le L \\le 17.$  Suy ra $L$ đạt cực đại khi  $\\sin\\left(\\dfrac{\\pi t}{4}+\\dfrac{\\pi}{3}\\right)=1$<br>$\\Leftrightarrow \\dfrac{\\pi t}{4}+\\dfrac{\\pi}{3}=\\dfrac{\\pi}{2}+2k\\pi$<br>$\\Leftrightarrow \\dfrac{\\pi t}{4}=\\dfrac{\\pi}{6}+2k\\pi$<br>$\\Leftrightarrow t=\\dfrac{2}{3}+8k.$  Thời gian ngắn nhất ứng với $k=0$ $\\Rightarrow t=\\dfrac{2}{3}$ $\\Rightarrow a=2$, $b=3$ $\\Rightarrow a\\cdot b=6$."
  },
  {
    "id": "1D147TL4",
    "question": "Cho hai điểm $A$, $B$ thuộc đồ thị hàm số $y=\\sin x$ trên đoạn $[0;\\pi]$. Các điểm $C$, $D$ thuộc trục $Ox$ thoả mãn $ABCD$ là hình chữ nhật và $CD=\\dfrac{\\pi}{3}$. Độ dài cạnh $BC$ là bao nhiêu (kết quả làm tròn đến hàng phần trăm)?<br><img src=\"data/11/1D1/im1D14/1D14_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "0,87",
    "explain": "Vì $CD=\\dfrac{\\pi}{3} \\Rightarrow OD=\\dfrac{\\pi}{3}$.<br>  $\\Rightarrow x_D=x_A=\\dfrac{\\pi}{3} \\Rightarrow y_A=\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$.<br>  Ta có $AD=\\dfrac{\\sqrt{3}}{2} \\Rightarrow BC=\\dfrac{\\sqrt{3}}{2}\\approx 0{,}87$.<br>"
  },
  {
    "id": "1D146TL5",
    "question": "Tìm giá trị nhỏ nhất $m$ của hàm số $y=-\\sqrt{3}\\cos (2024 x+2025)$ (kết quả làm tròn đến hàng phần mười).",
    "answer": "-1,7",
    "explain": "Hàm số đã cho có miền xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Với mọi $x \\in \\mathbb{R}$, ta luôn có  $\\cos (2024 x+2025) \\le 1$<br>$-\\sqrt{3}\\cos (2024 x+2025) \\ge -\\sqrt{3}.$  Do đó  $  m = \\min\\limits_{x \\in \\mathbb{R}} y = -\\sqrt{3} \\approx -1{,}7.  $"
  },
  {
    "id": "1D148TL6",
    "question": "Hội Lim (tỉnh Bắc Ninh) là lễ hội mùa xuân nổi tiếng có trò chơi đánh đu truyền thống. Khi người chơi nhún đều, cây đu sẽ đưa người đu dao động quanh vị trí cân bằng. Giả sử khoảng cách $h$ (m) từ người chơi đu đến vị trí cân bằng theo thời gian $t$ (s) (với $t \\ge 0$) được mô tả bởi công thức $h = \\left| d \\right|$ với $d(t)=3{,}5 \\cos \\left(\\dfrac{2 \\pi}{3} t -\\dfrac{\\pi}{3}\\right)$, trong đó ta quy ước $d&gt;0$ khi vị trí cân bằng ở phía sau lưng người đu và $d&lt;0$ trong trường hợp ngược lại. Tìm khoảng cách lớn nhất của người đu so với vị trí cân bằng.  {<br><img src=\"data/11/1D1/im1D14/1D14_tikz_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">}",
    "answer": "3,5",
    "explain": "Với mọi $t \\ge 0$, ta có  $-1 \\le \\cos \\left(\\dfrac{2 \\pi}{3} t-\\dfrac{\\pi}{3} \\right) \\le 1$<br>$\\Leftrightarrow -3{,}5 \\le 3{,}5 \\cos \\left(\\dfrac{2 \\pi}{3} t-\\dfrac{\\pi}{3} \\right) \\le 3{,}5$<br>$\\Leftrightarrow -3{,}5 \\le d(t) \\le 3{,}5.$  Vậy $h(t)=\\left| d (t) \\right| \\le 3{,}5$, $\\forall t \\ge 0$.<br>  Dấu bằng xảy ra khi và chỉ khi $\\cos \\left(\\dfrac{2 \\pi}{3} t-\\dfrac{\\pi}{3} \\right) =-1 \\text{ hoặc } \\cos \\left(\\dfrac{2 \\pi}{3} t-\\dfrac{\\pi}{3} \\right) =1 \\Leftrightarrow \\dfrac{2 \\pi}{3} t-\\dfrac{\\pi}{3}= \\pi +k2 \\pi \\text{ hoặc } \\dfrac{2 \\pi}{3} t-\\dfrac{\\pi}{3}= k2 \\pi \\Leftrightarrow t=2+3k \\text{ hoặc } t=\\dfrac{1}{2}+3k. \\; (k \\in \\mathbb{Z})$  Vậy $h(t)$ đạt giá trị lớn nhất bằng $3{,}5$ khi và chỉ khi $t=2+3k \\text{ hoặc } t=\\dfrac{1}{2}+3k \\; (k \\in \\mathbb{Z}).$  <br>  Do đó khoảng cách lớn nhất của người đu so với vị trí cân bằng là $3{,5}$(m)."
  },
  {
    "id": "1D146TL7",
    "question": "Tập giá trị của hàm số $y=5+4\\sin 2x\\cos 2x$ là $T=[a;b]$, tính $b-a$.",
    "answer": "4",
    "explain": "Ta có $y=5+4\\sin 2x\\cos 2x = 5+2 \\cdot (2\\sin 2x\\cos 2x) = 5+2\\sin 4x$.<br>  Vì $-1 \\le \\sin 4x \\le 1$ với mọi $x \\in \\mathbb{R}$ nên ta có  $ -2 \\le 2\\sin 4x \\le 2 \\Leftrightarrow 3 \\le 5+2\\sin 4x \\le 7\\Leftrightarrow 3 \\le y \\le 7. $  Do đó tập giá trị của hàm số là $T=[3;7]$.<br>  Suy ra $a=3$ và $b=7$.<br>  Vậy $b-a = 7-3 = 4$."
  },
  {
    "id": "1D141TL8",
    "question": "Nhiệt độ ngoài trời ở một thành phố $A$ vào các thời điểm khác nhau trong ngày được xác định bởi công thức $h(t)=29+3\\sin\\left[\\dfrac{\\pi}{12}(t-9)\\right]$, với $h$ tính bằng độ C và $t$ là thời gian trong ngày tính bằng giờ.  Nhiệt độ thấp nhất trong ngày xảy ra vào lúc mấy giờ?",
    "answer": "3",
    "explain": "Hàm số $h(t)$ đạt giá trị nhỏ nhất khi và chỉ khi $\\sin\\left[\\dfrac{\\pi}{12}(t-9)\\right]$ đạt giá trị nhỏ nhất.<br>  Ta có $\\sin\\left[\\dfrac{\\pi}{12}(t-9)\\right] \\ge -1$ với mọi $t$.<br>  Do đó, giá trị nhỏ nhất của $h(t)$ xảy ra khi $\\sin\\left[\\dfrac{\\pi}{12}(t-9)\\right]=-1\\Leftrightarrow \\dfrac{\\pi}{12}(t-9) = -\\dfrac{\\pi}{2} + k2\\pi \\Leftrightarrow t = 3 + 24k\\quad (k \\in \\mathbb{Z}). $  Vì $t$ là thời gian trong ngày nên $0 \\le t \\le 24$, suy ra ta chọn $k=0$.<br>  Khi đó $t=3$.<br>  Vậy nhiệt độ thấp nhất trong ngày xảy ra vào lúc 3 giờ."
  },
  {
    "id": "1D148TL9",
    "question": "Hội Lim (tỉnh Bắc Ninh) được tổ chức vào mùa xuân thường có trò đánh đu. Khi người chơi đu nhún đều, cây đu sẽ đưa người chơi đu dao động quanh vị trí cân bằng (tham khảo hình vẽ). Nghiên cứu trò chơi này, người ta thấy khoảng cách $h$ (m) từ vị trí người chơi đu đến vị trí cân bằng được biểu diễn qua thời gian $t$ (giây) (với $t \\ge 0$) bởi hệ thức $h=|d|$ với $d=2\\cos\\left[\\dfrac{\\pi}{3}(2t-1)\\right]$, trong đó ta quy ước $d&gt;0$ khi vị trí cân bằng ở phía sau lưng người chơi đu và $d&lt;0$ trong trường hợp ngược lại. Sau $6$ giây, người chơi đu cách vị trí cân bằng bao nhiêu mét?<br><img src=\"data/11/1D1/im1D14/1D14_tikz_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "1",
    "explain": "Thay $t=6$ (giây) vào biểu thức $d$, ta được  $d = 2\\cos\\left[\\dfrac{\\pi}{3}(2 \\cdot 6-1)\\right]$<br>$= 2\\cos\\left[\\dfrac{\\pi}{3}(12-1)\\right]$<br>$= 2\\cos\\left(\\dfrac{11\\pi}{3}\\right)$<br>$= 1.$  Khoảng cách $h$ của người chơi đu đến vị trí cân bằng là  $h=|d|=|1|=1$ (m).<br>  Vậy sau $6$ giây, người chơi đu cách vị trí cân bằng $1$ mét."
  },
  {
    "id": "1D148TL10",
    "question": "Hằng ngày, mực nước của một con kênh lên xuống theo thủy triều. Độ sâu $h$ (m) của mực nước trong kênh tính theo thời gian $t$ (giờ, ) trong một ngày cho bởi công thức $h = 3\\cos\\left(\\dfrac{\\pi t}{4} + \\dfrac{\\pi}{4}\\right) + 12$. Có mấy thời điểm trong ngày mực nước của con kênh đạt mức cao nhất?",
    "answer": "3",
    "explain": "Mực nước của kênh cao nhất tức là h lớn nhất. Mà $h$ lớn nhất khi $\\cos\\left(\\dfrac{\\pi t}{4} + \\dfrac{\\pi}{4}\\right)$ lớn nhất.<br>   Khi đó $\\cos\\left(\\dfrac{\\pi t}{4} + \\dfrac{\\pi}{4}\\right) = 1$ vì hàm $\\cos$ có giá trị lớn nhất bằng $1$.   $  \\cos\\left(\\dfrac{\\pi t}{4} + \\dfrac{\\pi}{4}\\right)= 1 \\Leftrightarrow \\dfrac{\\pi t}{4} + \\dfrac{\\pi}{4} = k2\\pi \\Leftrightarrow t = 7k.  $   Có $0 \\le t &lt; 24 \\Leftrightarrow 0 \\le 7k &lt; 24 \\Leftrightarrow 0 \\le k &lt; \\dfrac{24}{7}$.<br>   Mà $k \\in \\mathbb{Z}$ suy ra $k \\in\\{1;2;3\\} $.<br>  Vậy có $3$ thời điểm trong ngày mực nước của con kênh đạt mức cao nhất."
  },
  {
    "id": "1D146TL11",
    "question": "Giả sử hàm số $y=\\sin (2024x + 1) - 2$ có giá trị lớn nhất và giá trị nhỏ nhất lần lượt là $M$, $m$. Tìm $M-3m$.",
    "answer": "8",
    "explain": "Xét hàm số $y=\\sin (2\\,024x + 1) - 2$.<br>  Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Với mọi $x\\in\\mathscr{D}$, ta có  $-1\\leq \\sin(2\\,024x+1)\\leq 1$<br>$\\Leftrightarrow -3 \\leq \\sin (2\\,024x+1) \\leq -1$<br>$\\Leftrightarrow -3 \\leq y \\leq -1.$  Ta có $\\max\\limits_{\\mathscr{D}}y=-1$ khi $\\sin (2\\,024x+1) = 1 \\Leftrightarrow x= \\dfrac{\\pi -2}{4\\,048} + \\dfrac{k\\pi}{1\\, 012} $. Suy ra $M=-1$.<br>  Ta có $\\min\\limits_{\\mathscr{D}}y =-3$ khi $\\sin (2\\, 024 x + 1)=-1 \\Leftrightarrow x=- \\dfrac{\\pi+2}{4\\,048} + \\dfrac{k\\pi}{1\\,012}$. Suy ra $m=-3$.<br>  Khi đó $M-3m=8$."
  },
  {
    "id": "1D148TL12",
    "question": "Hằng ngày mực nước của con kênh lên xuống theo thủy triều. Độ sâu $h$ (mét) của mực nước trong kênh tính theo thời gian $t$ (giờ) được cho bởi công thức $h(t)=3\\cos\\left(\\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}\\right)+10$. Hỏi có bao nhiêu thời điểm trong ngày độ sâu của mực nước trong kênh là nhỏ nhất.",
    "answer": "2",
    "explain": "Vì $\\cos\\left(\\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}\\right) \\ge -1, \\forall t$ nên $h(t)=3\\cos\\left(\\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}\\right)+10 \\ge 7$ (m).<br>  Thời điểm trong ngày độ sâu của mực nước trong kênh là nhỏ nhất ứng với   $\\cos\\left(\\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}\\right) =-1\\Leftrightarrow \\dfrac{\\pi t}{6}+\\dfrac{\\pi}{3}=\\pi+k2\\pi\\Leftrightarrow t=4+12k,\\,(k\\in\\mathbb{Z}).$  Vì $0&lt;t\\le 24$ nên $k\\in {0,1}$.<br>  Như vậy, có $2$ thời điểm trong ngày độ sâu của mực nước trong kênh là nhỏ nhất."
  },
  {
    "id": "1D148TL13",
    "question": "Chiều cao $h(m)$ của một cabin trên vòng quay vào thời điểm $t$ giây sau khi bắt đầu chuyển động  được cho bởi công thức $h(t) = 30 + 20\\sin\\left(\\dfrac{\\pi}{25}t + \\dfrac{\\pi}{3}\\right)$. Cabin đạt độ cao tối thiểu là bao nhiêu?",
    "answer": "10",
    "explain": "Ta có $-1\\le \\sin\\left(\\dfrac{\\pi}{25}t + \\dfrac{\\pi}{3}\\right)\\le 1$ nên  \\[  30-20 \\le h(t)\\le 30+20.  \\]  Giá trị nhỏ nhất đạt được khi  \\[  \\sin\\left(\\dfrac{\\pi}{25}t+\\dfrac{\\pi}{3}\\right)=-1.  \\]  Suy ra độ cao tối thiểu của cabin là $h_{\\min}=30-20=10$ m."
  },
  {
    "id": "1D141TL14",
    "question": "Số giờ có ánh sáng mặt trời của một thành phố X ở vĩ độ $40^\\circ$ bắc trong ngày thứ $t$ của một năm không nhuận được cho bởi hàm số $d(t) = 3\\sin\\left[\\dfrac{\\pi}{180}(t-60)\\right] + 8$, $t \\in \\mathbb{Z}$, $0 &lt; t \\le 365$. Vào ngày nào trong năm thì thành phố X có nhiều giờ có ánh sáng mặt trời nhất?",
    "answer": "150",
    "explain": "Thành phố X có nhiều giờ có ánh sáng mặt trời nhất khi $d(t)$ đạt giá trị lớn nhất.  Ta có $\\sin\\left[\\dfrac{\\pi}{180}(t-60)\\right] \\le 1 \\Rightarrow d(t)=3\\sin\\left[\\dfrac{\\pi}{180}(t-60)\\right] + 8 \\le 3 \\cdot 1 + 8 = 11.$  Dấu “$=$” xảy ra khi   $\\sin\\left[\\dfrac{\\pi}{180}(t-60)\\right] = 1 \\Leftrightarrow \\dfrac{\\pi}{180}(t-60) = \\dfrac{\\pi}{2} + k2\\pi$<br>$\\Leftrightarrow \\dfrac{t-60}{180} = \\dfrac{1}{2} + 2k$<br>$\\Leftrightarrow t = 150 + 360k \\quad (k \\in \\mathbb{Z}).$  Vì $0 &lt; t \\le 365$ nên $0 &lt; 150 + 360k \\le 365 \\Rightarrow k = 0$. <br>  Vậy vào ngày thứ $150$ trong năm, thành phố X có nhiều giờ có ánh sáng mặt trời nhất."
  },
  {
    "id": "1D142TL15",
    "question": "Tập xác định của hàm số $y=\\tan\\left(2x+\\dfrac{\\pi}{3}\\right)$ là $\\mathscr{D} =\\mathbb{R}\\setminus \\left\\{\\dfrac{\\pi}{a}+\\dfrac{k\\pi}{b},k\\in \\mathbb{Z}\\right\\}$. Tính $a+b$.",
    "answer": "14",
    "explain": "Hàm số $y=\\tan\\left(2x+\\dfrac{\\pi}{3}\\right)$ xác định khi   \\[2x+\\dfrac{\\pi}{3}\\ne \\dfrac{\\pi}{2}+k\\pi \\Leftrightarrow x\\ne \\dfrac{\\pi}{12}+\\dfrac{k\\pi}{2},k\\in \\mathbb{Z}.\\]  Tập xác định $\\mathscr{D} =\\mathbb{R}\\setminus \\left\\{\\dfrac{\\pi}{12}+\\dfrac{k\\pi}{2},k\\in \\mathbb{Z}\\right\\}$.<br>  Vậy $a=12$, $b=2$ nên $a+b=14$."
  },
  {
    "id": "1D147TL16",
    "question": "Cho đồ thị của hàm số $y=\\sin x$ (tham khảo hình vẽ)  <br><img src=\"data/11/1D1/im1D14/1D14_tikz_019.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tập các giá trị $x \\in \\left[0; \\dfrac{3\\pi}{2}\\right]$ thỏa mãn $\\sin 2x \\ge 0$ có dạng $\\left[0;\\dfrac{\\pi}{a}\\right]\\cup \\left[\\pi;\\dfrac{b\\pi}{c}\\right]$, với $a$, $b$, $c$ là các số tụ nhiên và $\\dfrac{b}{c}$ là phân số tối giản. Tính $a+\\dfrac{b}{c}$.",
    "answer": "3,5",
    "explain": "Ta có $\\sin 2x \\ge 0 \\Leftrightarrow 2\\sin x\\cos x\\ge 0 \\Leftrightarrow \\sin x\\ge 0 \\text{ và } \\cos x\\ge 0$ hoặc $\\sin x\\le 0 \\text{ và } \\cos x\\le 0$.<br>  Do đó $x\\in \\left[0;\\dfrac{\\pi}{2}\\right]\\cup \\left[\\pi;\\dfrac{3\\pi}{2}.\\right]$<br>  Suy ra $a=2$, $b=3$. $c=2$.<br>  Vậy $a+\\dfrac{b}{c}=3{,}5$."
  },
  {
    "id": "1D146TL17",
    "question": "Tập giá trị của hàm số: $y=5+4\\sin 3x \\cos 3x$ có dạng $[a; b]$. Khi đó $a+b$ bằng bao nhiêu?",
    "answer": "10",
    "explain": "Ta có $y=5+4\\sin 3x \\cos 3x=5+2\\sin 6x$.<br>  Với mọi $x$, ta lại có  $-1\\leq\\sin 6x\\leq 1$<br>$\\Leftrightarrow -2\\leq2\\sin 6x\\leq 2$<br>$\\Leftrightarrow 3\\leq5+2\\sin 6x\\leq 7$<br>$\\Leftrightarrow 3\\leq y\\leq 7.$  Suy ra $a=3$, $b=7$.<br>  Vậy $a+b=3+7=10$."
  },
  {
    "id": "1D145TL18",
    "question": "Một thiết bị đo nhiệt độ môi trường ghi nhận sự thay đổi nhiệt độ theo ngày. Nhiệt độ $T$ (tính bằng độ C, so với nhiệt độ trung bình) được mô hình hóa bởi hàm số theo thời gian $t$ (tính bằng ngày) như sau $T(t) = 15 \\cos\\left(\\dfrac{\\pi}{12}t\\right)$. Hỏi sau bao nhiêu ngày thì chu kỳ biến đổi nhiệt độ này lại lặp lại hoàn toàn?",
    "answer": "24",
    "explain": "Chu kỳ biến đổi của nhiệt độ chính là chu kỳ tuần hoàn của hàm số $T(t)$. <br>  Hàm số $y = A\\cos(\\omega t + \\varphi)$ có chu kỳ $T = \\dfrac{2\\pi}{|\\omega|}$. <br>  Với hàm số đã cho, ta có tần số góc $\\omega = \\dfrac{\\pi}{12}$. <br>  Vậy chu kỳ là  $ T = \\dfrac{2\\pi}{\\dfrac{\\pi}{12}} = 24 \\text{ (ngày)}. $  Vậy sau $24$ ngày thì chu kỳ biến đổi nhiệt độ lặp lại hoàn toàn."
  },
  {
    "id": "1D141TL19",
    "question": "Số giờ có ánh sáng mặt trời của thành phố $T$ ở vĩ độ $40^\\circ$ Bắc trong ngày thứ $t$ của một năm không nhuận được cho bởi hàm số $d(t) = 3 \\cdot \\sin\\left[\\dfrac{\\pi}{182}(t-80)\\right] + 12$ với $t \\in \\mathbb{N}$ và $0 &lt; t \\le 365$. Bạn An muốn đi tham quan thành phố $T$ nhưng lại không thích ánh sáng mặt trời, vậy bạn An nên chọn đi vào ngày nào trong năm để thành phố $T$ có ít giờ có ánh sáng mặt trời nhất?",
    "answer": "353",
    "explain": "Để số giờ có ánh sáng mặt trời là ít nhất thì hàm số $d(t)$ đạt giá trị nhỏ nhất.<br>  Khi đó  $\\sin\\left[\\dfrac{\\pi}{182}(t-80)\\right] = -1$<br>$\\Leftrightarrow \\dfrac{\\pi}{182}(t-80) = -\\dfrac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$<br>$\\Leftrightarrow \\dfrac{t-80}{182} = -\\dfrac{1}{2} + 2k$<br>$\\Leftrightarrow t - 80 = -91 + 364k$<br>$\\Leftrightarrow t = -11 + 364k \\, (k \\in \\mathbb{Z}).$  Vì $0 &lt; t \\le 365$ nên ta chọn $k=1$, khi đó $t = -11 + 364 = 353$.<br>  Vậy An nên chọn ngày thứ $353$ trong năm."
  },
  {
    "id": "1D146TL20",
    "question": "Gọi $M$ là giá trị lớn nhất, $m$ là giá trị nhỏ nhất của hàm số $y=4\\sin \\left(2x+\\dfrac{\\pi}{3} \\right) +1 $. Tính $M+m$.",
    "answer": "2",
    "explain": "Tập xác định $\\mathscr{D}=\\mathbb{R}$.<br>  Với mọi $x\\in \\mathscr{D}$, ta có  $-1\\leq \\sin\\left(2x+ \\dfrac{\\pi}{3} \\right) \\leq 1$<br>$\\Leftrightarrow -4\\leq 4\\sin\\left(2x+ \\dfrac{\\pi}{3} \\right) \\leq 4$<br>$\\Leftrightarrow -3\\leq 4\\sin\\left(2x+ \\dfrac{\\pi}{3} \\right)+1 \\leq 5$<br>$\\Leftrightarrow -3\\leq y \\leq 5.$  Suy ra $\\max\\limits_{\\mathscr{D}}y=5$ khi $\\sin\\left(2x+\\dfrac{\\pi}{3} \\right)=1\\Leftrightarrow x=\\dfrac{\\pi}{12}+k\\pi$, $(k\\in \\mathbb{Z})$ và $\\min\\limits_{\\mathscr{D}}y = -3$ khi $\\sin\\left(2x+ \\dfrac{\\pi}{3} \\right)=-1 \\Leftrightarrow x=-\\dfrac{5}{12}\\pi +k \\pi$, $(k\\in \\mathbb{Z})$.<br>  Vậy $M=5$, $m=-3$ và $M+m=2$."
  },
  {
    "id": "1D146TL21",
    "question": "Tìm giá trị lớn nhất của hàm số $f(x)=\\cos\\left(x+\\dfrac{\\pi}{3}\\right)+\\cos\\left(x-\\dfrac{\\pi}{3}\\right)$.",
    "answer": "1",
    "explain": "$f(x)=2\\cos x\\cos\\dfrac{\\pi}{3}=\\cos x$.<br>Vì hàm số $y=\\cos x$ có tập giá trị $T=[-1;1]$ giá trị lớn nhất của hàm số $f(x)$ là $1$."
  },
  {
    "id": "1D147TL22",
    "question": "Xét hàm số $y = \\sin x$ trên nửa khoảng $\\left[0; \\dfrac{9\\pi}{2}\\right)$ có đồ thị như hình vẽ bên dưới. Hãy tính khoảng cách lớn nhất từ gốc tọa độ $O$ đến một điểm $M$ thuộc đồ thị có tung độ bằng $1$ (<em>kết quả làm tròn đến hàng phần chục</em>).  <br><img src=\"data/11/1D1/im1D14/1D14_tikz_022.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "7,9",
    "explain": "Gọi $M(x;1)$ là một điểm thuộc đồ thị hàm số.<br>   Khoảng cách từ gốc tọa độ $O$ đến điểm $M(x;1)$ là $OM = \\sqrt{x^2 + 1^2} = \\sqrt{x^2+1}$.<br>  Để $OM$ lớn nhất suy ra $x$ phải lớn nhất.<br>  Ta có $\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi$, với $k \\in \\mathbb{Z}$.<br>  Vì $x \\in \\left[0; \\dfrac{9\\pi}{2}\\right)$ nên ta có $0 \\le \\dfrac{\\pi}{2} + k2\\pi &lt; \\dfrac{9\\pi}{2} \\Leftrightarrow -0,25 \\le k &lt; 2\\Rightarrow x_{\\max}=\\dfrac{5\\pi}{2}$ ứng với $k_{\\max}= 1$.<br>   Khoảng cách lớn nhất là   $OM_{\\max} = \\sqrt{\\left(\\dfrac{5\\pi}{2}\\right)^2 + 1} \\approx 7{,}9.$"
  },
  {
    "id": "1D148TL23",
    "question": "Hằng ngày mực nước của con kênh lên xuống theo thủy triều. Độ sâu $h(t)$\\,(mét) của mực nước trong kênh được tính tại thời điểm $t$\\,(giờ) trong một ngày bởi công thức $h(t)=3 \\cos \\left(\\dfrac{\\pi t}{8}\\right)+12$. Mực nước của kênh cao nhất vào lúc mấy giờ trong ngày?",
    "answer": "16",
    "explain": "Ta có $-1\\leq \\cos \\left(\\dfrac{\\pi t}{8}\\right)\\leq 1$.<br>  Khi đó hàm số $h = 3\\cos\\left(\\dfrac{\\pi t}{8}\\right) + 12$ đạt giá trị lớn nhất khi $\\cos\\left(\\dfrac{\\pi t}{8}\\right) = 1$.<br>  Khi đó $\\dfrac{\\pi t}{8} = k2\\pi$, với $k$ là số nguyên.<br>  Suy ra $t = 16k$.<br>  Vì $t$ là thời điểm trong một ngày nên $0 \\leq t \\leq 24$.<br>  Với $k = 0$, ta có $t = 0$.<br>  Với $k = 1$, ta có $t = 16$.<br>  Vậy mực nước của kênh cao nhất vào lúc $0$ giờ và $16$ giờ."
  },
  {
    "id": "1D147TL24",
    "question": "Cho hai điểm $A$, $B$ thuộc đồ thị hàm số $y=\\sin x$ trên đoạn $[0;\\pi]$, các điểm $C$, $D$ thuộc trục $Ox$ thỏa mãn $ABCD$ là hình chữ nhật và $CD=\\dfrac{2\\pi}{3}$. Tính độ dài đoạn $BC$ <em>(Kết quả làm tròn đến hàng phần chục)</em>.<br><img src=\"data/11/1D1/im1D14/1D14_tikz_025.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "0,5",
    "explain": "Gọi điểm $A(x_1,y)$ và $B(x_2,y)$ (vì $A$, $B$ là hai đỉnh trên cùng đáy của hình chữ nhật nên có cùng tung độ $y$). <br>  Vì $A$, $B$ nằm trên đồ thị $y=\\sin x$ trên đoạn $[0,\\pi]$ nên  $\\sin x_1=\\sin x_2.$<br>  Trên đoạn $[0,\\pi]$ ta có $x_2=\\pi-x_1$. Do đó  $CD=x_2-x_1=\\pi-2x_1.$<br>  Theo đề bài $CD=\\dfrac{2\\pi}{3}$, nên $\\pi-2x_1=\\dfrac{2\\pi}{3}.$<br>  Suy ra $2x_1=\\pi-\\dfrac{2\\pi}{3}=\\dfrac{\\pi}{3}$ $\\Rightarrow x_1=\\dfrac{\\pi}{6}.$<br>  Tung độ của $A$ (và $B$) là $y=\\sin x_1=\\sin\\dfrac{\\pi}{6}=\\dfrac{1}{2}.$<br>  Vậy độ dài đoạn $BC$ bằng $ BC=y=\\dfrac{1}{2}=0{,}5.$"
  },
  {
    "id": "1D141TL25",
    "question": "[Chuyên Vĩnh Phúc - Phú Thọ]  Số giờ có ánh sáng mặt trời của thành phố $T$ ở vĩ độ $60^\\circ$ bắc trong ngày thứ $t$ của một năm không nhuận được cho bởi hàm số  \\[  d(t)=3\\cdot \\sin\\left(\\dfrac{\\pi}{182}(t-60)\\right)+12  \\]  với $t\\in\\mathbb{Z}$ và $0&lt;t\\le 365$. Bạn Sáng muốn đi tham quan thành phố $T$ nhưng lại không thích ánh sáng mặt trời, vậy bạn Sáng nên chọn đi vào ngày thứ bao nhiêu của năm để thành phố $T$ có ít giờ có ánh sáng mặt trời nhất.",
    "answer": "333",
    "explain": "Vì $-1\\le \\sin x\\le 1$, $\\forall x \\mathbb{R}$ nên  \\[  9=12-3\\le d(t)\\le 12+3=15.  \\]  $d(t)$ nhỏ nhất khi $\\sin\\left(\\dfrac{\\pi}{182}(t-60)\\right)=-1$.<br>  Ta có  \\[  \\sin\\left(\\dfrac{\\pi}{182}(t-60)\\right)=-1  \\Leftrightarrow \\dfrac{\\pi}{182}(t-60)=-\\dfrac{\\pi}{2}+2k\\pi,\\ k\\in\\mathbb{Z}.  \\]  Suy ra  \\[  t-60=\\left(-\\dfrac{1}{2}+2k\\right)\\cdot 182=-91+364k  \\Leftrightarrow t=-31+364k.  \\]  Vì $0&lt;t\\le 365$ nên chọn $k=1$ được $t=333$.<br>  Vậy bạn Sáng nên đi vào ngày thứ $333$ của năm."
  },
  {
    "id": "1D146TL26",
    "question": "[Chuyên Vĩnh Phúc - Phú Thọ]  Hàm số $y=\\sin x+\\cos x$ có giá trị nhỏ nhất bằng <em>(làm tròn đến hàng phần mười)</em>.",
    "answer": "-1,4",
    "explain": "Ta có  \\[  \\sin x+\\cos x=\\sqrt{2}\\sin\\left(x+\\dfrac{\\pi}{4}\\right).  \\]  Vì $-1 \\le \\sin\\left(x+\\dfrac{\\pi}{4}\\right) \\le 1 $, $\\forall x \\mathbb{R}$ nên   \\[  -\\sqrt{2} \\le \\sin x+\\cos x \\le \\sqrt{2},\\, \\forall x \\mathbb{R}  \\]  Do đó giá trị nhỏ nhất của $y=\\sin x+\\cos x$ là $-\\sqrt{2} \\approx -1{,}4$."
  },
  {
    "id": "1D146TL27",
    "question": "Tập giá trị của hàm số $y=2\\sin \\left(x+\\dfrac{\\pi}{4}\\right)-5$ là đoạn $[a;b]$, với $a, b \\in \\mathbb{Z}$. Tính $a+b$.",
    "answer": "-10",
    "explain": "Với mọi $x \\in \\mathbb{R}$ ta có   $-1 \\leq \\sin \\left(x+\\dfrac{\\pi}{4}\\right) \\leq 1$<br>$-2 \\leq 2 \\cdot \\sin \\left(x+\\dfrac{\\pi}{4}\\right) \\leq 2$<br>$-7 \\leq 2 \\cdot \\sin \\left(x+\\dfrac{\\pi}{4}\\right) - 5 \\leq -3$  Suy ra tập giá trị của hàm số là $[-7;-3]$.<br>  Vậy $a+b=-10$"
  },
  {
    "id": "1D148TL28",
    "question": "Hằng ngày, mực nước của một con kênh lên xuống theo thủy triều. Độ sâu $h$ (mét) của con kênh tính theo thời gian $t$ (giờ) trong một ngày được cho bởi công thức \\[h=\\dfrac{1}{2} \\cos \\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)+3,\\;0\\leq t &lt; 24.\\] Mực nước của kênh cao nhất khi $t$ bằng bao nhiêu?",
    "answer": "14",
    "explain": "Ta có   $-1\\leq \\cos \\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)\\leq 1$<br>$\\Leftrightarrow -\\dfrac{1}{2}+3\\leq \\dfrac{1}{2} \\cos \\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)+3\\leq\\dfrac{1}{2}+3$<br>$\\Leftrightarrow \\dfrac{5}{2}\\leq h\\leq \\dfrac{7}{2}.$  Mực nước cao nhất của kênh là $3{,}5$ (mét) khi $\\cos \\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)=1\\Leftrightarrow x=-2+16k$, $k\\in\\mathbb{Z}$.<br>  Mà   $0\\leq t\\leq 24$<br>$\\Leftrightarrow 0\\leq -2+16k\\leq 24$<br>$\\Leftrightarrow 0{,}125\\leq k\\leq 1{,}625.$  Vì $k\\in\\mathbb{Z}$ nên $k=1$. Khi đó $t=14$.<br>  Vậy, mực nước của kênh cao nhất là $3{,}5$ (mét) khi lúc $14$ (giờ)."
  },
  {
    "id": "1D146TL29",
    "question": "Biết rằng tập giá trị của hàm số $y=2-2\\sin x-\\cos 2x$ là $T=[a; b]$. Tính giá trị biểu thức $P=10a-2b$?",
    "answer": "-5",
    "explain": "Ta có   $y = 2-2\\sin x-\\cos 2x$<br>$= 2-2\\sin x-\\left(1-2\\sin^2x\\right)$<br>$= 2\\sin^2x-2\\sin x+1.$  Xét hàm số $f(t)=2t^2-2t+1$, với $t=\\sin x$, $t\\in[-1;1]$.<br>  Ta có $f(t)=2t^2-2t+1$ là hàm số bậc hai có đồ thị là parabol đỉnh $I\\left(\\dfrac{1}{2};\\dfrac{1}{2}\\right)$.<br>  Bảng biến thiên  <br><img src=\"data/11/1D1/im1D14/1D14_tikz_032.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, suy ra tập giá trị của hàm số đã cho là $\\left[\\dfrac{1}{2};5\\right]$.<br>  Khi đó $a=\\dfrac{1}{2}$, $b=5$. Vậy $P=10\\cdot\\dfrac{1}{2}-2\\cdot 5=-5$."
  },
  {
    "id": "1D141TL30",
    "question": "Hằng ngày, Mặt Trời chiếu sáng, bóng của một toà chung cư cao $40$ mét in trên mặt đất, độ dài bóng của toà nhà này được tính bằng công thức $S(t)=40\\left|\\cot\\dfrac{\\pi}{12} t\\right|$, ở đó $S$ được tính bằng mét, còn $t$ là số giờ chênh so với mốc $6$ giờ sáng. Tìm độ dài bóng của toà nhà tại thời điếm $8$ giờ sáng (làm tròn kết quả đến phần mười).",
    "answer": "69,3",
    "explain": "Tại thời điểm $8$ giờ sáng, tức là với $t=2$, độ dài bóng của tòa nhà là  $S(2)=40\\left|\\cot\\dfrac{\\pi}{12}\\cdot 2\\right|=40\\sqrt{3}\\approx 69{,}3.$"
  },
  {
    "id": "1D141TL31",
    "question": "Số giờ có ánh sáng mặt trời trong ngày thứ $t$ ($0 &lt; t \\le 365, t \\in \\mathbb{Z}$) của một thành phố $A$ ở vĩ độ $40^\\circ$ Bắc được cho bởi hàm số  \\[ y = 4 \\sin \\left[ \\frac{\\pi(t-60)}{178} \\right] + 10.\\]  Gọi $m$ là số giờ có ánh sáng mặt trời của ngày có nhiều ánh sáng mặt trời nhất. Giá trị của $m$ bằng bao nhiêu?",
    "answer": "14",
    "explain": "Với $0 &lt; t \\le 365, t \\in \\mathbb{Z}$ thì   $-1\\leq \\sin \\left[ \\frac{\\pi(t-60)}{178} \\right] \\leq 1$<br>$\\Leftrightarrow -4\\leq 4\\sin \\left[ \\frac{\\pi(t-60)}{178} \\right] \\leq 4$<br>$\\Leftrightarrow 6\\leq 4\\sin \\left[ \\frac{\\pi(t-60)}{178} \\right]+10 \\leq 14$<br>$\\Leftrightarrow 6\\leq y \\leq 14.$   Suy ra giá trị lớn nhất của hàm số $y$ là $14$ hay $m=14$."
  },
  {
    "id": "1D141TL32",
    "question": "Chiều cao so với mực nước biển trung bình tại thời điểm $t$ (giây) (với $t \\geq 0$) của một con sóng được cho bởi hàm số $h(t)=75\\sin \\left(\\dfrac{\\pi t}{8}\\right)$, trong đó $h(t)$ được tính bằng centimét. Trong 30 giây đầu tiên (kể từ mốc $t=0$ giây), có bao nhiêu thời điểm để con sóng đạt chiều cao lớn nhất?",
    "answer": "2",
    "explain": "Ta có $\\sin\\left(\\dfrac{\\pi t}{8}\\right)\\le 1\\Rightarrow 75 \\sin\\left(\\dfrac{\\pi t}{8}\\right)\\le 75$ hay $h(t)\\le 75$.<br>  Suy ra giá trị lớn nhất của $h(t)$ là $75$, khi đó $\\sin\\left(\\dfrac{\\pi t}{8}\\right)=1\\Rightarrow \\dfrac{\\pi t}{8}=\\dfrac{\\pi}{2}+k2\\pi$ ($k\\in\\mathbb{Z}$).<br>  $\\Rightarrow t=4+16k$ ($k\\in\\mathbb{Z}$). Vì $t\\in[0;30]\\Rightarrow t\\in\\{4;20\\}$ (ứng với $k$ bằng $0$ và $1$).<br>  Vậy có $2$ thời điểm để con sóng đạt nhiều cao lớn nhất."
  }
];
