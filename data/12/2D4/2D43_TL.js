// =========================================================================
// KHỐI DỮ LIỆU: 2D43 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan2D43 = [
  {
    "id": "2D431TL1",
    "question": "Điều tra về chiều cao của một nhóm $50$ em học sinh nam lớp $12$ tại một trường trung học phổ thông được ghi lại trong bảng sau  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS11_015.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tính khoảng tứ phân vị của bảng số liệu trên.",
    "answer": "11,5",
    "explain": "Tứ phân vị thứ nhất $Q_1$ thuộc lớp $[160 ; 165):\\quad Q_1=160+\\dfrac{12,5-12}{10} \\cdot 5=160{,}25$. <br>  Tứ phân vị thứ ba $Q_3$ thuộc lớp $[170 ; 175): \\quad Q_3=170+\\dfrac{37,5-34}{10}\\cdot5=171{,}75$. <br>  Suy ra khoảng tứ phân vị $\\Delta Q=Q_3-Q_1=11{,}5$."
  },
  {
    "id": "2D431TL2",
    "question": "Cho hình phẳng (phần gạch chéo ở hình vẽ bên dưới) được giới hạn bởi parabol $(P)$ và đường thẳng $d$. Tính diện tích của hình phẳng đó.  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS16_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "4,5",
    "explain": "Gọi $(P)\\colon y=ax^2+bx+c$, dựa vào hình vẽ ta thấy $(P)$ đi qua $(0;0)$, $(2;4)$ và $(4;0)$ nên  \\[a\\cdot0+b\\cdot0+c=0 \\text{ và } a\\cdot4+b\\cdot2+c=4 \\text{ và } a\\cdot16+b\\cdot4+c=0\\Leftrightarrow a=-1 \\text{ và } b=4 \\text{ và } c=0\\Rightarrow(P)\\colon y=-x^2+4x.\\]  Đường thẳng $d$ đi qua $(0;0)$ và $(1;1)$ nên có phương trình là $y=x$.<br>  Dựa vào hình vẽ, diện tích hình phẳng cần tìm là  \\[S=\\displaystyle\\int\\limits_1^3\\left(-x^2+4x-x\\right)\\mathrm{\\,d}x=\\left(-\\dfrac{x^3}{3}+\\dfrac{3x^2}{2}\\right)\\Bigg|_0^3=\\dfrac{9}{2}=4{,}5.\\]"
  },
  {
    "id": "2D435TL3",
    "question": "Cho vật thể được giới hạn bởi hai mặt phẳng $x = -1$ và $x = 1$. Khi cắt vật thể bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$ $(-1 \\le x \\le 1)$ thì được thiết diện là một tam giác đều có độ dài cạnh bằng $2\\sqrt{1 - x^2}$. Tính thể tích của vật thể đó (kết quả làm tròn đến hàng phần trăm).",
    "answer": "2,31",
    "explain": "Diện tích thiết diện là $\\left(2\\sqrt{1-x^2}\\right)^2\\cdot \\dfrac{\\sqrt{3}}{4}=\\sqrt{3}-\\sqrt{3}x^2$.<br>  Thể tích của vật cần tìm là $V=\\displaystyle\\int\\limits_{-1}^{1}\\left(\\sqrt{3}-\\sqrt{3}x^2\\right)\\;\\mathrm{d}x=\\left[x\\sqrt{3}-\\dfrac{\\sqrt{3}}{3}x^3\\right]_{-1}^{1}\\approx 2,31$."
  },
  {
    "id": "2D435TL4",
    "question": "Khi cắt một vật thể hình chiếc nêm bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$ ($-2 \\le x \\le 2$), mặt cắt là tam giác vuông có một góc $45^{\\circ}$ và độ dài một cạnh góc vuông là $\\sqrt{14-3x^2}$. Tính thể tích vật thể hình chiếc nêm trên.<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS17_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "20",
    "explain": "Diện tích tam giác vuông cân là $S(x)=\\dfrac{1}{2}\\left(\\sqrt{14-3x^2}\\right)^2 =\\dfrac{1}{2}(14-3x^2)$.<br>  Thể tích của vật thể là $V=\\displaystyle\\int\\limits_{-2}^2 S(x) \\mathrm{\\,d}x=\\displaystyle\\int\\limits_{-2}^2 \\dfrac{1}{2}\\left(14-3x^2\\right)\\mathrm{\\,d}x=20$."
  },
  {
    "id": "2D431TL5",
    "question": "Biết $F(x)$ và $G(x)$ là hai nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$ và thỏa mãn $\\displaystyle\\int\\limits_0^4 f(x) \\mathrm{\\,d}x=F(4)-G(0)+2m$, với $m&gt;0$. Gọi $S$ là diện tích hình phẳng giới hạn bởi các đường $y=F(x)$, $y=G(x)$, $x=0$ và $x=4$. Khi $S=8$ thì $m$ bằng",
    "answer": "1",
    "explain": "Theo đề ta có $\\displaystyle\\int\\limits_0^4 f(x) \\mathrm{\\,d}x=F(4)-G(0)+2m$<br>$\\Rightarrow F(x) \\Big|_0^4 = F(4)-G(0)+2m$<br>$\\Rightarrow F(4)-F(0)=F(4)-G(0)+2m$<br>$\\Rightarrow G(0)-F(0)=2m \\quad (1).$  Mặt khác, do $F(x)$ và $G(x)$ là hai nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$ nên ta có $G(x)-F(x)=C$ (không đổi) với mọi $x \\in \\mathbb{R}$ \\quad $(2)$.<br>  Từ $(1)$ và $(2)$, suy ra $G(x)-F(x)=2m&gt;0$, với mọi $x \\in \\mathbb{R}$.<br>  Khi đó, ta có $S=\\displaystyle\\int\\limits_0^4 |G(x)-F(x)| \\mathrm{\\,d}x=\\displaystyle\\int\\limits_0^4 2m \\mathrm{\\,d}x=2mx\\Big|_0^4=8m$.<br>  Theo đề ta có $8m=8 \\Leftrightarrow m=1$."
  },
  {
    "id": "2D431TL6",
    "question": "Cho $F(x)$ là một nguyên hàm của $f(x) = 2^x + x + 1$. Biết $F(0) = 1$. Tính $\\left|F(-1) \\right|$ (kết quả làm tròn đến hàng phần trăm).",
    "answer": "0,69",
    "explain": "Ta có $\\displaystyle F(x) = \\displaystyle\\int (2^x + x + 1) \\mathrm{\\,d}x = \\dfrac{2^x}{\\ln 2} + \\dfrac{x^2}{2} + x + C$.<br>  Theo giả thiết $F(0) = 1$ nên $\\dfrac{2^0}{\\ln 2} + \\dfrac{0^2}{2} + 0 + C = 1 \\Leftrightarrow \\dfrac{1}{\\ln 2} + C = 1 \\Leftrightarrow C = 1 - \\dfrac{1}{\\ln 2}.$  Vậy $ F(x) = \\dfrac{2^x}{\\ln 2} + \\dfrac{x^2}{2} + x + 1 - \\dfrac{1}{\\ln 2}$.<br>  Khi đó $\\displaystyle F(-1) = \\dfrac{-1}{2\\ln 2} + \\dfrac{1}{2} \\approx -0{,}22$.  Vậy $|F(-1)| \\approx |-0{,}22| = 0{,}22$."
  },
  {
    "id": "2D431TL7",
    "question": "Cho hình thang cong $(H)$ giới hạn bởi các đường $y = \\mathrm{e}^x$, $y = 0$, $x = 0$, $x = \\ln 4$. Đường thẳng $x = k$ $(0 &lt; k &lt; \\ln 4)$ chia $(H)$ thành hai phần có diện tích là $S_1$ và $S_2$ như hình vẽ bên. Tìm $k$ để $S_1 = 2S_2$ (kết quả làm tròn đến hàng phần chục).<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS24_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "1,1",
    "explain": "Diện tích hình thang cong $(H)$ giới hạn bởi $y = \\mathrm{e}^x$, $y = 0$, $x = 0$, $x = \\ln 4$ là  $S = \\displaystyle\\int\\limits_0^{\\ln 4} \\mathrm{e}^x \\mathrm{\\,d}x = \\mathrm{e}^x \\Bigg|_0^{\\ln 4} = \\mathrm{e}^{\\ln 4} - \\mathrm{e}^0 = 4 - 1 = 3.$  Diện tích phần $S_1$ giới hạn bởi $y = \\mathrm{e}^x$, $y = 0$, $x = 0$, $x = k$ là:  $S_1 = \\displaystyle\\int\\limits_0^k \\mathrm{e}^x \\mathrm{\\,d}x = \\mathrm{e}^x \\Bigg|_0^k = \\mathrm{e}^k - \\mathrm{e}^0 = \\mathrm{e}^k - 1.$  Diện tích phần $S_2$ giới hạn bởi $y = \\mathrm{e}^x$, $y = 0$, $x = k$, $x = \\ln 4$ là  $S_2 = \\displaystyle\\int\\limits_k^{\\ln 4} \\mathrm{e}^x \\mathrm{\\,d}x = \\mathrm{e}^x \\Bigg|_k^{\\ln 4} = \\mathrm{e}^{\\ln 4} - \\mathrm{e}^k = 4 - \\mathrm{e}^k.$  Theo đề bài, ta có   $S_1 = 2S_2 \\Leftrightarrow \\mathrm{e}^k - 1 = 2(4 - \\mathrm{e}^k)$<br>$\\Leftrightarrow \\mathrm{e}^k = 3 \\Leftrightarrow k = \\ln 3 \\approx 1{,}0986.$  Làm tròn đến hàng phần chục, ta được $k \\approx 1{,}1$."
  },
  {
    "id": "2D433TL8",
    "question": "Một bình cắm hoa dạng khối tròn xoay với đáy và miệng bình có đường kính lần lượt là $2$ và $4$. Mặt xung quanh của bình là một phần của mặt tròn xoay khi quay đường cong $y = \\sqrt{x-1}$ quay quanh trục $Ox$. Thể tích của bình cắm hoa đó bằng bao nhiêu? (kết quả làm tròn đến hàng phần chục)<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS24_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "23,6",
    "explain": "Đường cong $y = \\sqrt{x-1}$ được quay quanh trục $Ox$ để tạo thành hình bình cắm hoa.<br>  Đường kính đáy bình là $2$, suy ra bán kính đáy là $r_1 = 1$. <br>  Tại đáy, $y = 1$, nên $1 = \\sqrt{x_1 - 1} \\Leftrightarrow 1 = x_1 - 1 \\Leftrightarrow x_1 = 2$.<br>  Đường kính miệng bình là $4$, suy ra bán kính miệng là $r_2 = 2$. <br>  Tại miệng, $y = 2$, nên $2 = \\sqrt{x_2 - 1} \\Leftrightarrow 4 = x_2 - 1 \\Leftrightarrow x_2 = 5$.<br>  Vậy bình cắm hoa được tạo thành khi quay đường cong $y = \\sqrt{x-1}$ từ $x = 2$ đến $x = 5$ quanh trục $Ox$.<br>   Thể tích của bình cắm hoa được tính bằng công thức thể tích vật thể tròn xoay:  $V = \\pi \\displaystyle\\int\\limits_{x_1}^{x_2} y^2 \\mathrm{\\,d}x = \\pi \\displaystyle\\int\\limits_2^5 \\left(\\sqrt{x-1} \\right)^2 \\mathrm{\\,d}x = \\pi \\displaystyle\\int\\limits_2^5 (x-1) \\mathrm{\\,d}x$<br>$= \\pi \\left[ \\dfrac{x^2}{2} - x \\right] \\Bigg|_2^5 = \\pi \\left[ \\left( \\dfrac{5^2}{2} - 5 \\right) - \\left( \\dfrac{2^2}{2} - 2 \\right) \\right]$<br>$= \\dfrac{15}{2} \\pi \\approx 23{,}6.$"
  },
  {
    "id": "2D431TL9",
    "question": "Cho hàm số $f(x) = 2x^2 - 1 \\text{ khi } x &lt; 0 \\text{ và } x - 1 \\text{ khi } 0 \\le x \\le 2 \\text{ và } 5 - 2x \\text{ khi } x &gt; 2$ và $I = \\displaystyle\\int\\limits_{-5}^{9} f(x) \\mathrm{\\,d}x$. <br> Biết $I = \\dfrac{a}{b}$, ($a, b \\in \\mathbb{N}^*$; $(a, b) = 1$). Tính $a - b$.",
    "answer": "106",
    "explain": "Ta có:  $I = \\displaystyle\\int\\limits_{-5}^{9} f(x) \\mathrm{d}x$<br>$= \\displaystyle\\int\\limits_{-5}^{0} (2x^2 - 1) \\mathrm{d}x + \\displaystyle\\int\\limits_{0}^{2} (x - 1) \\mathrm{d}x + \\displaystyle\\int\\limits_{2}^{9} (5 - 2x) \\mathrm{d}x$<br>$= \\left( \\dfrac{2x^3}{3} - x \\right) \\bigg|_{-5}^{0} + \\left( \\dfrac{x^2}{2} - x \\right) \\bigg|_{0}^{2} + \\left( 5x - x^2 \\right) \\bigg|_{2}^{9}$<br>$= \\left[ 0 - \\left( \\dfrac{2(-5)^3}{3} - (-5) \\right) \\right] + \\left[ \\left( \\dfrac{2^2}{2} - 2 \\right) - 0 \\right] + \\left[ (5 \\cdot 9 - 9^2) - (5 \\cdot 2 - 2^2) \\right]$<br>$= \\dfrac{109}{3}.$  Vậy $a = 109, b = 3$. Do đó $a - b = 109 - 3 = 106$."
  },
  {
    "id": "2D431TL10",
    "question": "Cho một mảnh vườn hình chữ nhật $ABCD$ có chiều rộng là $2$ m, chiều dài gấp ba chiều rộng. Người ta chia mảnh vườn bằng cách dùng hai đường parabol, mỗi đường parabol có đỉnh là trung điểm mỗi cạnh dài và đi qua hai mút của cạnh dài đối diện. Tính tỉ số diện tích phần mảnh vườn nằm ở miền trong hai parabol với diện tích phần còn lại. (kết quả làm tròn đến hàng phần trăm).  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS24_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "0,89",
    "explain": "Chiều dài khu vườn $2\\cdot 3 = 6$ m.<br>  Diện tích khu vườn $S= 2\\cdot 6 =12$ m$^2$.<br>  Chọn hệ trục tọa độ $Oxy$ như hình vẽ $A(-3;0)$, $B(-3;2)$, $C(3;2)$, $D(3;0)$.<br>  Đỉnh của hai parabol lần lượt là $M(0;2)$ và $O(0;0)$.<br>  Parabol đỉnh $M(0;2)$ đi qua hai điểm $A(-3;0)$ và $D(3;0)$ có phương trình $y = -\\dfrac{2}{9}x^2 + 2$.<br>  Parabol đỉnh $O(0;0)$ đi qua hai điểm $B(-3;2)$ và $C(3;2)$ có phương trình $y = \\dfrac{2}{9}x^2$.<br>  Phương trình hoành độ giao điểm   $-\\dfrac{2}{9}x^2 + 2= \\dfrac{2}{9}x^2\\Leftrightarrow-\\dfrac{4}{9}x^2 + 2=0 \\Leftrightarrow x= \\pm \\dfrac{3\\sqrt{2}}{2}.$  Diện tích phần mảnh vườn nằm ở miền trong hai parabol là:  $S_1 = \\displaystyle\\int\\limits_{-\\frac{3\\sqrt{2}}{2}}^{\\frac{3\\sqrt{2}}{2}} \\left(-\\dfrac{2}{9}x^2 + 2 - \\dfrac{2}{9}x^2\\right) \\mathrm{d}x = \\displaystyle\\int\\limits_{-\\frac{3\\sqrt{2}}{2}}^{\\frac{3\\sqrt{2}}{2}} \\left(-\\dfrac{4}{9}x^2 + 2\\right) \\mathrm{d}x$<br>$= \\left(-\\dfrac{4}{27}x^3 + 2x\\right) \\Bigg|_{-\\frac{3\\sqrt{2}}{2}}^{\\frac{3\\sqrt{2}}{2}} =4\\sqrt{2} \\text{ m}^2.$   Diện tích phần còn lại của mảnh vườn là $S_2 = S - S_1 = 12 - 4\\sqrt{2}$ m$^2$.<br>  Tỉ số diện tích phần mảnh vườn nằm ở miền trong hai parabol với diện tích phần còn lại là $\\dfrac{S_1}{S_2} = \\dfrac{4\\sqrt{2}}{12 - 4\\sqrt{2}} \\approx 0{,}89$."
  },
  {
    "id": "2D435TL11",
    "question": "Một chậu cây có chiều cao là $30$ cm và đường kính miệng chậu là $30$ cm. Mặt cắt ngang của chậu cây là một đường parabol (tham khảo hình vẽ). Tính thể tích của chậu cây đó (đơn vị: $\\mathrm{dm}^3$, kết quả làm tròn đến hàng phần chục).<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS25_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "10,6",
    "explain": "Vì parabol đi qua gốc tộ độ $O$ nên $(P):y=ax^2$.<br>  Vì parabol đi qua điểm $(-15,30)$ và $(15,30)$ nên $a=\\dfrac{y}{x^2}=\\dfrac{30}{15^2}=\\dfrac{2}{15}$.<br>  Suy ra parabol $(P):y=\\dfrac{2}{15}x^2$.<br>  Vì vật thể quay quanh trục $Oy$ nên $(P):x=\\sqrt{\\dfrac{15}{2}y}$.<br>  Thể tích chậu cây là  \\[V=\\pi \\displaystyle\\int\\limits_0^{30}\\left(\\dfrac{15}{2} y\\right) \\mathrm{\\,d}y=3375\\pi\\ \\left(\\mathrm{cm}^3\\right)\\approx 10{,}6\\ \\left(\\mathrm{dm}^3\\right). \\]"
  },
  {
    "id": "2D431TL12",
    "question": "Một bức tường hình chữ nhật $ABCO$ cao $4$ m, dài $8$ m. Bạn Bình trang trí bức tường bằng cách vẽ đường cong là một hàm số bậc ba $y=\\dfrac{1}{35}x(x-2)(x-8)+2$ trong hệ trục tọa độ như hình bên dưới, mỗi phần sơn một màu, phần phía trên sơn màu xanh da trời và phần phía dưới sơn màu trắng.  Biết 1 hộp sơn sơn được $4 \\mathrm{m}^2$. Bạn Bình phải mua tối thiểu $m$ hộp sơn màu xanh và $n$ hộp sơn màu trắng để sơn bức tường. Hãy tính $m-n$.<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS25_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "3",
    "explain": "Diện tích phần sơn màu trắng:  \\[\\left|\\displaystyle\\int\\limits_0^8\\left(\\dfrac{1}{35} x(x-2)(x-8)+2\\right)\\mathrm{\\,d}x\\right|=\\dfrac{1168}{105}. \\]  Vì $\\dfrac{1168}{105}:4\\approx 2{,}78$ nên cần mua $3$ hộp sơn màu trắng. Do đó $n=3$.<br>  Diện tích cần sơn: $S=4\\cdot 8=32$ (m$^2$).<br>  Diện tích phần sơn màu xanh da trời  \\[m=S-n=32-\\dfrac{1168}{105}=\\dfrac{2192}{105}\\ \\left(\\mathrm{m}^2\\right). \\]  Vì $\\dfrac{2192}{105}:4\\approx 5{,}22$ nên cần mua $6$ hộp sơn màu xanh da trời. Do đó $m=6$.<br>  Vậy $m-n=6-3=3$."
  },
  {
    "id": "2D435TL13",
    "question": "Chướng ngại vật ``tường cong'' trong một sân thi đấu X-Game là một khối bê tông có chiều cao từ mặt đất lên là $3,5 \\mathrm{~m}$. Giao của mặt tường cong và mặt đất là đoạn thẳng $AB=2 \\mathrm{~m}$. Thiết diện của khối tường cong cắt bởi mặt phẳng vuông góc với $AB$ tại $A$ là một hình tam giác vuông cong $ACE$ với $AC=4 \\mathrm{~m}, CE=3,5 \\mathrm{~m}$ và cạnh cong $AE$ nằm trên một đường parabol có trục đối xứng vuông góc với mặt đất. Tại vị trí $M$ là trung điểm của $A C$ thì tường cong có độ cao $ 1 \\mathrm{~m} $ (xem hình minh họa bên). Cần sử dụng bao nhiêu mét khối bê tông để tạo nên khối tường cong đó?<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS26_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "10",
    "explain": "Chọn hệ tọa độ $ Oxy $ sao cho $ A(0;0), M(2;0),C(4;0) $.<br>  Gọi đường cong parabol $ (P) $ có phương trình $ y=ax^2+bx+c $.<br>  Ta thấy $ (P) $ đi qua các điểm $ O(0;0); E(4;3,5) $ và $ (2;1) $.<br>  Khi đó ta được $ c=0 \\text{ và } 16a+4b=3,5 \\text{ và } 4a+2b=1\\Leftrightarrow a=\\dfrac{3}{16} \\text{ và } b=\\dfrac{1}{8} \\text{ và } c=0 $.<br>  Do đó phương trình đường Parabol là $ y=\\dfrac{3}{16}x^2+\\dfrac{1}{8}x $.<br>  Diện tích giới hạn bởi đường Parabol, trục $ Ox $ và hai đường thẳng $ x=0;x=4 $ là  $ S=\\int\\limits_{0}^{4} \\left(\\dfrac{3}{16}x^2+\\dfrac{1}{8}x\\right) \\mathrm{\\,d}x=5. $  Vậy thể tích khối tường cong là $ V=S\\cdot h=5\\cdot 2 =10\\,\\mathrm{m}^3 $."
  },
  {
    "id": "2D433TL14",
    "question": "Biết thể tích khối tròn xoay tạo nên khi quay xung quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y=(1-x)^2, y=0, x=0, x=2$ có dạng $\\dfrac{a \\pi}{b}$ với $\\dfrac{a}{b}$ là phân số tối giản. Tính giá trị biểu thức $S=24a+12b$.<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS27_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "108",
    "explain": "Ta có $V=\\pi\\displaystyle\\int\\limits_0^2(1-x)^4\\mathrm{\\,d}x=\\dfrac{2\\pi}{5}$.<br>  Suy ra $a=2$, $b=5$.<br>  Do đó $24a+12b=24\\cdot 2+12\\cdot 5=108$."
  },
  {
    "id": "2D433TL15",
    "question": "Để kỷ niệm ngày $26-3$. Chi đoàn 12A dự định dựng một lều trại có dạng parabol, với kích thước: nền trại là một hình chữ nhật có chiều rộng là $3$ mét, chiều sâu là $6$ mét, đỉnh của parabol cách mặt đất là $3$ mét. Hãy tính thể tích phần không gian phía bên trong trại để lớp 12 A cử số lượng người tham dự trại cho phù hợp.% Màu đỏ  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS28_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "36",
    "explain": "Xét hệ trục $Oxy$ như hình vẽ.  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS28_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   $(P)\\colon y=ax^2+bx+c$ là một parabol có đỉnh $C(0;3)$ và đi qua hai điểm $A(-1{,}5;0)$, $B(1{,}5;0)$.<br>  Ta có hệ phương trình $2{,}25a+1{,}5b+c=0 \\text{ và } 2{,}25a-1{,}5b+c=0 \\text{ và } c=3\\Leftrightarrow a=-\\dfrac{4}{3} \\text{ và } b=0 \\text{ và } c=3. $  Suy ra $(P)\\colon y=-\\dfrac{4}{3} x^2+3$.<br>  Diện tích mặt cắt là $\\displaystyle\\int\\limits_{-1{,}5}^{1{,}5}\\left(-\\dfrac{4}{3} x^2+3\\right)\\mathrm{\\,d} x=6$.<br>  Thể tích lều là \\[V=\\displaystyle\\int\\limits_0^6 6 \\mathrm{\\,d}x=36.\\]"
  },
  {
    "id": "2D432TL16",
    "question": "Trong cuộc thi thiết kế logo cho câu lạc bộ NBK ART, một bạn học sinh đã sử dụng phần mềm GeoGebra để thiết kế ra một mẫu logo và gửi đi dự thi. Logo được tạo bằng cách vẽ một hình tròn bán kính bằng $\\sqrt{29}$ cm, sau đó cắt bốn góc đối xứng nhau bởi bốn parabol giống nhau như hình vẽ dưới đây. Phần hình phẳng còn lại sau khi cắt được tô màu, chính là hình dạng cuối cùng của logo dùng để dự thi. Tính diện tích (đơn vị: cm$^2$) của logo đó (làm tròn kết quả đến hàng đơn vị).<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS28_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "44",
    "explain": "<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS28_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Từ đồ thị hàm số, ta có $(P) \\colon y =x^2+1$.<br>  Phương trình đường tròn là   \\[x^2+y^2=29 \\Leftrightarrow y= \\sqrt{29-x^2} \\text{ (Nửa dường tròn phía trên trục hoành)}.\\]  Diện tích phần giới hạn của parabol và đường tròn là  \\[V'=\\displaystyle \\int \\limits_{-2}^2 \\left(\\sqrt{29-x^2}-x^2-1\\right) \\mathrm{\\,d}x=11{,}7.\\]  Diện tích của logo là   \\[V=\\pi \\sqrt{29}^2-4 \\cdot 11{,}7 \\approx 44.\\]"
  },
  {
    "id": "2D431TL17",
    "question": "Một mảnh đất hình chữ nhật có chiều dài $60$ m, chiều rộng $20$ m. Người ta muốn trồng hoa ở hai đầu của mảnh đất hai hình bằng nhau giới hạn bởi hai đường parabol có hai đỉnh cách nhau $40$ m và nhận đường trung bình của hình chữ nhật làm trục đối xứng (như hình vẽ bên dưới). Phần còn lại của mảnh đất người ta lát gạch. Tính diện tích phần lát gạch (m$^2$) (kết quả làm tròn đến hàng đơn vị).<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS31_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "933",
    "explain": "Gán hệ trục tọa độ như hình vẽ  <br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS31_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Tọa độ các điểm $O(0;0)$, $A(0;60)$, $B(20;60)$, $C(20;0)$; $E(10;50)$; $F(10;10)$.<br>  Parabol $(P)$ có đỉnh $F(10;10)$, có phương trình dạng $y=a(x-10)^2+10$.<br>  $(P)$ đi qua $C(20;0)$ $\\Leftrightarrow a\\cdot(20-10)^2+10=0\\Leftrightarrow a=-\\dfrac{1}{10}$.<br>  Vậy $(P)\\colon y=-\\dfrac{1}{10} (x-10)^2+10$.<br>  Diện tích trồng cỏ là $S=2\\displaystyle\\displaystyle\\int\\limits\\limits_0^{20}\\left[-\\dfrac{1}{10} (x-10)^2+10\\right]\\mathrm{\\,d}x=\\dfrac{800}{3}$~(m$^2$).<br>  Diện tích lát gạch $S_g=20\\cdot 60-S=1200-\\dfrac{800}{3}=\\dfrac{2800}{3}\\approx 933$~(m$^2$).<br>"
  },
  {
    "id": "2D433TL18",
    "question": "Một khối cầu có bán kính là $5$ (dm), người ta cắt bỏ hai phần của khối cầu bằng hai mặt phẳng song song và cách tâm một khoảng $3$ (dm) để làm một chiếc lu đựng nước (như hình vẽ). Tính thể tích (đơn vị dm$^3$) mà chiếc lu chứa được (kết quả làm tròn đến hàng đơn vị).<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS31_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "415",
    "explain": "<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS31_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Đường tròn có phương trình $x^2 + y^2 = 25 $ nên $y = \\pm\\sqrt{25 - x^2}$.<br>   Thể tích phần hình tròn quay quanh trục $Ox$ từ $x = -3$ đến $x = 3$ là  \\[  V = \\pi \\displaystyle\\displaystyle\\int\\limits\\limits_{-3}^{3} (25 - x^2)\\mathrm{\\,d}x  = \\pi \\left[25x - \\dfrac{x^3}{3} \\right]_{-3}^{3}  = 132\\pi\\approx 415.  \\]  Vậy thể tích cần tìm là $415$ dm$^3$."
  },
  {
    "id": "2D433TL19",
    "question": "Người ta tạo ra mô hình một quả trứng ngỗng bằng cách quay hình phẳng giới hạn bởi đồ thị hàm số $y=\\dfrac{1}{30} \\sqrt{7569-400x^2}$ và trục hoành với $-4{,}35 \\le x \\le 4{,}35$ quanh trục $Ox$. Sử dụng mô hình này để tính thể tích quả trứng theo đơn vị cm$^3$ và làm tròn đến hàng đơn vị (với $x$, $y$ được đo theo đơn vị cm).",
    "answer": "153",
    "explain": "Thể tích quả trứng là thể tích của khối tròn xoay được tạo thành khi quay hình phẳng tạo bởi đồ thị của hàm số $y=\\dfrac{1}{30} \\sqrt{7569-400x^2}$, trục hoành và hai đường thẳng $x=-4{,}35$ và $x=-4{,}35$ quanh trục hoành. Do đó  $V=\\pi \\displaystyle \\int \\limits_{-4{,}35}^{4{,}35} \\left(\\dfrac{1}{30} \\sqrt{7569-400x^2}\\right)^2 \\mathrm{\\,d}x=\\dfrac{24389 \\pi}{500} \\approx 153 \\; \\text{(cm$^3$)}.$"
  },
  {
    "id": "2D435TL20",
    "question": "Cho phần vật thể $(\\Im)$ giới hạn bởi hai mặt phẳng có phương trình $x=0$ và $x=2$. Cắt phần vật thể $(\\Im)$ bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$ ($0\\le x\\le 2$), ta được thiết diện là một tam giác đều có độ dài cạnh bằng $x\\sqrt{2-x}$. Tính thể tích $V$ của phần vật thể $(\\Im)$. (Kết quả làm tròn đến hàng phần trăm)",
    "answer": "0.58",
    "explain": "Diện tích của thiết diện  \\[S(x)=\\dfrac{\\left(x\\sqrt{2-x}\\right)^2\\sqrt{3}}{4}=\\dfrac{x^2(2-x)\\sqrt{3}}{4}=\\dfrac{\\sqrt{3}}{4}(-x^3+2x^2).\\]  Thể tích của vật thể $(\\Im)$ là  \\[  V = \\int\\limits_0^2 S(x)\\mathrm{\\,d}x = \\int\\limits_0^2 \\dfrac{\\sqrt{3}}{4}(-x^3+2x^2)\\mathrm{\\,d}x=\\dfrac{\\sqrt{3}}{3}.  \\]"
  },
  {
    "id": "2D431TL21",
    "question": "Đồ thị trong hình dưới đây là của hàm số $y=f(x)$. Biết $\\displaystyle\\int\\limits_{-2}^0 f(x) {\\,d}x=3$; $\\displaystyle\\int\\limits_0^1 f(x) {\\,d}x=-1$. Diện tích phần hình phẳng gạch chéo trong hình bằng<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS35_001.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "4",
    "explain": "Ta có diện tích phần hình phẳng gạch chéo trong hình bằng   $\\displaystyle\\int\\limits_{-2}^1 |f(x)| {\\,d}x = \\int\\limits_{-2}^0 |f(x)| {\\,d}x+\\int\\limits_{0}^1 |f(x)| {\\,d}x=\\int\\limits_{-2}^0 f(x) {\\,d}x-\\int\\limits_{0}^1 f(x) {\\,d}x$<br>$= 3-(-1)=4.$"
  },
  {
    "id": "2D433TL22",
    "question": "Một ly trà sữa dạng hình nón cụt, có đường kính đáy ly $6$ cm, đường kính miệng ly $9$ cm, chiều cao $13{,}4$ cm, ở miệng ly có sử dụng một nắp đậy có hình dạng nửa mặt cầu và ở đỉnh của nửa mặt cầu này có một hình tròn có đường kính $2$ cm để cắm ống hút, mặt phẳng chứa hình tròn này song song với mặt phẳng chứa miệng ly (tham khảo hình vẽ sau). Chọn hệ trục $Oxy$ (đơn vị trên trục là centimet) với trục $Ox$ đi qua tâm của $2$ đáy hình nón cụt và gốc tọa độ $O$ trùng với tâm của đáy lớn như hình vẽ trên. Tính thể tích bên trong của ly bao gồm cả thể tích của nắp ($K$ết quả làm tròn đến hàng đơn vị).",
    "answer": "791",
    "explain": "Khi đó toạ độ các điểm $A$, $B$, $C$ lần lượt là $A(-13{,}4; 0)$, $B(-13{,}4; 3)$, $C(0; 4{,}5)$.<br>  Gọi phương trình đường thẳng đi qua $BC$ có dạng $y=ax+b$.<br>  Ta có hệ phương trình $-13{,}4a+b=3 \\text{ và } 0a+b=4{,}5 \\Leftrightarrow a=\\dfrac{15}{134} \\text{ và } b=\\dfrac{9}{2}.$<br>  Phương trình đường thẳng $BC$ là $y=\\dfrac{15}{134} x+\\dfrac{9}{2}$.<br>  Khi đó thể tích của phần thân ly trà sữa chưa bao gồm nắp là  \\[  V_1=\\pi \\displaystyle\\int\\limits_{-13{,}4}^0\\left(\\dfrac{15}{134} x+\\dfrac{9}{2}\\right)^2{\\,d} x=\\dfrac{3819\\pi}{20}.  \\]  Điểm $C$, $D$ thuộc đường tròn tâm $O(0; 0)$, bán kính $R=4{,}5$ có phương trình: $x^2+y^2=\\dfrac{81}{4}$.<br>  Thay $y=1$, ta được $x=\\sqrt{\\dfrac{81}{4}-1}=\\dfrac{\\sqrt{77}}{2} \\Rightarrow D\\left(\\dfrac{\\sqrt{77}}{2}; 1\\right)$. <br>  Suy ra $y=\\sqrt{\\dfrac{81}{4}-x^2}$.<br>  Khi đó thể tích nắp của ly trà sữa là $V_2=\\pi \\displaystyle\\int\\limits_0^{\\frac{\\sqrt{77}}{2}}\\left(\\sqrt{\\dfrac{81}{4}-x^2}\\right)^2{\\,d}x=\\dfrac{83\\pi \\sqrt{77}}{12}$.<br>  Từ $(1)$ và $(2)$ ta suy ra thể tích bên trong của ly bao gồm cả thể tích của nắp là  \\[  V=V_1+V_2=\\dfrac{3819\\pi}{20}+\\dfrac{83\\pi \\sqrt{77}}{12} \\approx 791\\,\\left({cm}^3\\right).  \\]"
  },
  {
    "id": "2D431TL23",
    "question": "Cho đồ thị hàm số $y=\\cos x$ và hình phẳng được tô màu như hình vẽ. Tính diện tích hình phẳng đó (viết kết quả dưới dạng số thập phân và làm tròn đến hàng phần mười).<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS36_015.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "4.7",
    "explain": "Hình phẳng đã cho được giới hạn bởi các đồ thị hàm số $y=\\cos x$, $y=x$ và hai đường thẳng $x=1$, $x=3$. <br>  Khi đó, diện tích hình phẳng là  $S = \\displaystyle\\int\\limits_{1}^{3} |x-\\cos x|\\mathrm{\\,d}x \\approx 4{,}7$ (Bấm máy, để đơn vị radian). <br>  \\fontqhv{Giới thiệu cách giải tay} <br>  Từ đồ thị ta có $x\\geqslant\\cos x$, $\\forall x\\in[1;3]$. <br>  Do đó $S=\\displaystyle\\int\\limits_{1}^{3} (x-\\cos x)\\mathrm{\\,d}x=\\left(\\dfrac{x^2}{2}-\\sin x\\right)\\bigg|_{1}^{3}=4-\\sin3+\\sin1 \\approx4{,}7$."
  },
  {
    "id": "2D433TL24",
    "question": "Một khối tròn xoay được tạo thành khi quay hình phẳng $(H)$ (phần màu xám trong hình vẽ) quanh trục $AB$. Miền $(H)$ được giới hạn bởi đường tròn đường kính $AB$ và cung tròn tâm $A$ biết rằng $AB=8$ cm và điểm $K$ trong hình vẽ thỏa mãn $AK=3$ cm. Thể tích hình $(H)$ bằng bao nhiêu cm$^3$ (làm tròn kết quả đến hàng đơn vị)<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS38_010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "135",
    "explain": "<br><img src=\"data/12/2D4/im2D43/dlts_12_DLTS38_011.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Chọn hệ trục tọa độ $Oxy$ như hình vẽ với $O$ là trung điểm $AB$ thì $A(-4;0), B(4;0), K(-1;0)$.<br>  Khi đó $OK=1 \\Rightarrow CK=\\sqrt{OC^2-OK^2}=\\sqrt{15} \\Rightarrow AC=\\sqrt{AK^2+CK^2}=2\\sqrt{6}$.<br>  Suy ra $OD=2\\sqrt{6}-4 \\Rightarrow D(2\\sqrt{6}-4;0)$.<br>  Phương trình đường tròn đường kính $AB\\colon x^2+y^2=16$.<br>  Do đó, nửa nằm trên $O x$ có phương trình $y=\\sqrt{16-x^2}\\quad\\left(C_1\\right)$.<br>  Phương trình đường tròn tâm $A$ bán kính $AC$ là: $(x+4)^2+y^2=24$.<br>  Suy ra, nửa nằm trên $Ox$ có phương trình $y=\\sqrt{24-(x+4)^2}\\quad\\left(C_2\\right)$.<br>  Vậy thể tích của vật trang trí đó là $\\displaystyle V=\\pi \\int\\limits_{-1}^4\\left(\\sqrt{16-x^2}\\right)^2 \\mathrm{~d} x-\\pi \\int\\limits_{-1}^{2 \\sqrt{6}-4}\\left(\\sqrt{24-(x+4)^2}\\right)^2 \\mathrm{~d} x \\approx 135 \\mathrm{~cm}^3$."
  },
  {
    "id": "2D433TL2",
    "question": "Cho hình phẳng $(H)$ giới hạn bởi đồ thị các hàm số $y=\\sqrt{2-x}, y=x$ và trục hoành. Tính thể tích khối tròn xoay khi cho $(H)$ quay xung quanh trục $O x$. Ghi kết quả được làm tròn đến hàng phần trăm.  <br><img src=\"data/12/2D4/im2D43/loc3_2_TL_TN_THPT_Chu_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "2,62",
    "explain": "Tính thể tích khối tròn xoay khi cho $(H)$ quay xung quanh trục $Ox$.  $V=\\pi \\displaystyle\\int\\limits_0^1 x^2 \\mathrm{\\,d}x+\\pi \\displaystyle\\int\\limits_1^2 \\left(\\sqrt{2-x}\\right)^2 \\mathrm{\\,d}x \\approx 2{,}62.$"
  },
  {
    "id": "2D431TL3",
    "question": "Cho hàm số $y=f(x)$ liên tục trên $[2;3]$ có đồ thị như hình vẽ. Biết $\\displaystyle\\int\\limits_{-2}^1 f(x) \\mathrm{\\,d}x=5$ và diện tích $S=2$. Tính $\\displaystyle\\int\\limits_{-2}^3 f(x) \\mathrm{\\,d}x$.  <br><img src=\"data/12/2D4/im2D43/loc3_2_TL_TN_THPT_Chu_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "3",
    "explain": "Ta có $S=\\displaystyle\\int\\limits_1^3 \\left| f(x) \\right| \\mathrm{\\,d}x =\\displaystyle\\int\\limits_1^3 \\left( -f(x) \\right) \\mathrm{\\,d}x = - \\displaystyle\\int\\limits_1^3 f(x) \\mathrm{\\,d}x=2 \\Rightarrow \\displaystyle\\int\\limits_1^3 f(x) \\mathrm{\\,d}x=-2$.<br>  Suy ra $\\displaystyle\\int\\limits_{-2}^3 f(x) \\mathrm{\\,d}x= \\displaystyle\\int\\limits_{-2}^1 f(x) \\mathrm{\\,d}x + \\displaystyle\\int\\limits_1^3 f(x) \\mathrm{\\,d}x=5-2=3$."
  }
];
