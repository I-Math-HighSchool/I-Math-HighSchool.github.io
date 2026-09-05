// =========================================================================
// KHỐI DỮ LIỆU: 1D91 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1D91 = [
  {
    "id": "1D913DS1",
    "question": "Minh gieo $1$ hạt đậu và $1$ hạt ngô. Xác suất nảy mầm của hạt đậu và hạt ngô lần lượt là $0{,}7$ và $0{,}6$. Biết rằng sự nảy mầm của hai hạt này là độc lập. Các mệnh đề sau đây đúng hay sai?",
    "subQuestions": [
      {
        "text": "Xác suất của biến cố “ Có ít nhất một hạt nảy mầm”\\ là $0{,}46$",
        "answer": false
      },
      {
        "text": "Xác suất của biến cố “ Hạt đậu nảy mầm, hạt ngô không nảy mầm”\\ là $0{,}18$",
        "answer": false
      },
      {
        "text": "Xác suất của biến cố “ Cả 2 hạt đều không nảy mầm”\\ là $0{,}12$",
        "answer": true
      },
      {
        "text": "Xác suất của biến cố “ Cả 2 hạt đều nảy mầm”\\ là $0{,}42$",
        "answer": true
      }
    ],
    "explain": "Gọi  <br>- $A$ là biến cố “ Hạt đậu nảy mầm”, khi đó $\\mathrm{P}(A)=0{,}7$.<br>- $B$ là biến cố “ Hạt ngô nảy mầm”, khi đó $\\mathrm{P}(B)=0{,}6$.  <br>- <strong>Sai</strong>.<br>  Xác suất của biến cố “ Có ít nhất một hạt nảy mầm”\\ là  \\[  1-\\mathrm{P}(AB)=1-\\mathrm{P}(A)\\cdot \\mathrm{P}(B)=1-0{,}7 \\cdot 0{,}6=0{,}58.  \\]<br>- <strong>Sai</strong>.<br>  Xác suất của biến cố “ Hạt đậu nảy mầm, hạt ngô không nảy mầm”\\ là  \\[  \\mathrm{P}\\big(A \\overline{B}\\big)=\\mathrm{P}(A)\\cdot \\mathrm{P}\\big(\\overline{B}\\big)=0{,}7 \\cdot 0{,}4=0{,}28.  \\]<br>- <strong>Đúng</strong>.<br>  Xác suất của biến cố “ Cả 2 hạt đều không nảy mầm”\\ là  \\[  \\mathrm{P}\\big(\\overline{A}\\, \\overline{B}\\big)=\\mathrm{P}\\big(\\overline{A}\\big)\\cdot \\mathrm{P}\\big(\\overline{B}\\big)=0{,}3 \\cdot 0{,}4=0{,}12.  \\]<br>- <strong>Đúng</strong>.<br>  Xác suất của biến cố “ Cả 2 hạt đều nảy mầm”\\ là  \\[  \\mathrm{P}(AB)=\\mathrm{P}(A)\\cdot \\mathrm{P}(B)=0{,}7 \\cdot 0{,}6=0{,}42.  \\]"
  }
];
