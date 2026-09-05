// =========================================================================
// KHỐI DỮ LIỆU: 1H81 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1H81 = [
  {
    "id": "1H812DS1",
    "question": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $A$. Gọi $E$, $F$ lần lượt là trung điểm của $AB$ và $AA'$. Cho biết $AB=2$, $BC=\\sqrt{13}$, $CC'=4$.",
    "subQuestions": [
      {
        "text": "Thể tích khối lăng trụ $ABC.A'B'C'$ bằng $8$",
        "answer": false
      },
      {
        "text": "Khoảng cách giữa hai đường thẳng $A'C$ và $FE$ bằng $\\dfrac{6}{7}$",
        "answer": false
      },
      {
        "text": "Đường thẳng $AB$ vuông góc với đường thẳng $AC'$",
        "answer": true
      },
      {
        "text": "Côsin của góc giữa hai đường thẳng $A'C$ và mặt đáy $ABC$ bằng $\\dfrac{3}{5}$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1H8/im1H81/loc8_TT_THPT_AnDuong__008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Sai</strong>.<br>  Theo định lý Pythagore trong $\\triangle ABC$ vuông tại $A$, ta có \\[AC=\\sqrt{BC^2-AB^2}=\\sqrt{13-4}=3.\\]  Thể tích hình lăng trụ $ABC.A'B'C'$ là $V=h\\cdot S_{\\text{đáy}}=4\\cdot\\dfrac{1}{2}\\cdot3\\cdot2=12$ (đvtt).<br>- <strong>Sai</strong>.<br>  Chọn hệ trục tọa độ $Oxyz$ với $A$ là gốc tọa độ, $AB$ trùng với tia $Ox$, $AC$ trùng với tia $Oy$, $AA'$ trùng với tia $Oz$.<br>  <br><img src=\"data/11/1H8/im1H81/loc8_TT_THPT_AnDuong__009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Khi đó, ta có $A(0;0;0)$, $B(2;0;0)$, $C(0;3;0)$, $A'(0;0;4)$, $C'(0;3;4)$.<br>  Lại có $E$, $F$ lần lượt là trung điểm của $AB$ và $AA'$ nên $E(1;0;0)$, $F(0;0;2)$.<br>  Ta có $\\overrightarrow{A'C}=(0;3;-4)$, $\\overrightarrow{FE}=(1;0;-2)$ và $\\overrightarrow{A'F}=(0;0;-2)$.<br>  Lại có $\\left[\\overrightarrow{A'C},\\overrightarrow{FE}\\right]=(-6;-4;-3)$.<br>  Khoảng giữa hai đường thẳng $A'C$ và $FE$ là  \\[\\mathrm{d}(A'C,FE)=\\dfrac{\\bigg|\\left[\\overrightarrow{A'C},\\overrightarrow{FE}\\right]\\cdot\\overrightarrow{A'F}\\bigg|}{\\bigg|\\left[\\overrightarrow{A'C},\\overrightarrow{FE}\\right]\\bigg|}=\\dfrac{\\bigg|(-6)\\cdot0+(-4)\\cdot0+(-3)\\cdot(-2)\\bigg|}{\\sqrt{(-6)^2+(-4)^2+(-3)^2}}=\\dfrac{6}{\\sqrt{61}}.\\]<br>- <strong>Đúng</strong>.<br>  Ta có $AB\\perp AC\\ (\\text{Vì $\\triangle ABC$ vuông tại $A$}) \\text{ và } AB\\perp AA'\\ (\\text{Vì $AA'\\perp(ABC)$}) \\text{ và } AA'\\cap AC=\\{A\\}.$<br>  Suy ra $AB\\perp (ACC'A')$.<br>  Mà $AC'\\subset(ACC'A')$.<br>  Vậy $AB\\perp AC'$.<br>- <strong>Sai</strong>.<br>  <br><img src=\"data/11/1H8/im1H81/loc8_TT_THPT_AnDuong__010.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Vì $AA'\\perp (ABC)$ nên góc giữa $A'C$ và $(ABC)$ là góc $\\widehat{A'CA}$.<br>  Theo định lý Pythagore trong $\\triangle A'CA$ vuông tại $A$, ta có   \\[A'C=\\sqrt{AA'^2+AC^2}=\\sqrt{16+9}=5.\\]  Xét $\\triangle A'CA$ vuông tại $A$, ta có  \\[\\cos\\widehat{A'CA}=\\dfrac{AC}{A'C}=\\dfrac{3}{5}.\\]"
  }
];
