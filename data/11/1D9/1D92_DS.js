// =========================================================================
// KHỐI DỮ LIỆU: 1D92 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1D92 = [
  {
    "id": "1D922DS1",
    "question": "Gieo một con xúc xắc cân đối, đồng chất liên tiếp hai lần. Xét các biến cố sau:  <br>- $A$: \\lq\\lq Số chấm xuất hiện trong hai lần gieo đều là số chẵn\\rq\\rq;<br>- $B$: \\lq\\lq Số chấm xuất hiện trong hai lần gieo gồm một số chẵn và một số lẻ\\rq\\rq;<br>- $C$: \\lq\\lq Tích số chấm xuất hiện trong hai lần gieo là số chẵn\\rq\\rq.",
    "subQuestions": [
      {
        "text": "Biến cố $C$ là hợp của hai biến cố $A$ và $B$",
        "answer": true
      },
      {
        "text": "$\\mathrm{P}(C) = \\mathrm{P}(A) + \\mathrm{P}(B)$",
        "answer": true
      },
      {
        "text": "Xác suất của biến cố $A$ là $\\dfrac{1}{6}$",
        "answer": false
      },
      {
        "text": "$\\mathrm{P}(AB) = 0$",
        "answer": true
      }
    ],
    "explain": "<br>- Tích số chấm xuất hiện trong hai lần gieo là số chẵn có hai trường hợp là  <br>- Hai lần gieo đều là số chẵn;<br>- Hai lần gieo có một số chẵn và một số lẻ.   Suy ra biến cố $C$ là hợp của hai biến cố $A$ và $B$.<br>- Vì $A$ và $B$ là hai biến cố xung khắc nên nên $\\mathrm{P}(C)=\\mathrm{P}(A\\cup B) = \\mathrm{P}(A) + \\mathrm{P}(B)$.<br>- Ta có $n(\\Omega)=6\\cdot 6=36$.<br>  Xác suất của biến cố $A$ là $\\mathrm{P}(A)=\\dfrac{n(A)}{n(\\Omega)}=\\dfrac{3\\cdot 3}{36}=\\dfrac{1}{4}$.<br>- Vì hai biến cố $A$ và $B$ xung khắc nên $\\mathrm{P}(AB)=0$."
  },
  {
    "id": "1D922DS2",
    "question": "Một lớp học có $40$ học sinh, trong đó có $25$ học sinh thích môn cầu lông, $20$ học sinh thích môn bóng chuyền, $12$ học sinh thích cả hai môn cầu lông và bóng chuyền. Thầy giáo chọn ngẫu nhiên một học sinh từ lớp. Gọi $A$ là biến cố: \\lq\\lq Chọn được học sinh thích môn cầu lông\\rq\\rq và $B$ là biến cố: \\lq\\lq Chọn được học sinh thích môn bóng chuyền\\rq\\rq.",
    "subQuestions": [
      {
        "text": "Xác suất để học sinh được chọn không thích cả hai môn thể thao đó bằng $\\dfrac{7}{40}$",
        "answer": true
      },
      {
        "text": "Xác suât để học sinh được chọn thích ít nhất một trong hai môn thể thao đó bằng $\\dfrac{31}{40}$",
        "answer": false
      },
      {
        "text": "Xác suất của biến cố $A$ là $\\mathrm{P}(A)=\\dfrac{5}{8}$",
        "answer": true
      },
      {
        "text": "Xác suất của biến cố $B$ là $\\mathrm{P}(B)=\\dfrac{1}{2}$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $n(\\Omega)=40$.<br>  Ta có số học sinh thích ít nhất một môn là $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)=25+20-12=33.$  Suy ra số học sinh không thích cả hai môn thể thao là $40-33=7$.<br>  Xác suất để học sinh được chọn không thích cả hai môn thể thao là $\\dfrac{7}{40}$.<br>- Vì có $33$ học sinh thích ít nhất một trong hai môn thể thao nên xác suất để học sinh được chọn thích ít nhất một trong hai môn là $\\dfrac{33}{40}$.<br>- Xác suất của biến cố $A$ là $\\mathrm{P}(A)=\\dfrac{25}{40}=\\dfrac{5}{8}$.<br>- Xác suất của biến cố $B$ là $\\mathrm{P}(B)=\\dfrac{20}{40}=\\dfrac{1}{2}$."
  }
];
