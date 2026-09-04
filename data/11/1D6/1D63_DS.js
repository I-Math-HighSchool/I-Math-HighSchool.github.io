// =========================================================================
// KHỐI DỮ LIỆU: 1D63 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1D63 = [
  {
    "id": "1D632DS1",
    "question": "Cho hàm số $f(x)=\\log_2(x+3)$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số $f(x)$ là $\\mathscr{D}=[3;+\\infty)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số $f(x)$ đi qua điểm $A(-2; 0)$",
        "answer": true
      },
      {
        "text": "Nghiệm của phương trình $f(x)=5$ là một số chẵn",
        "answer": false
      },
      {
        "text": "Biết $\\dfrac{1}{2} \\log _{\\sqrt{2}}(y-1)=2f(x)$. Công thức biểu thị $y$ theo $x$ là $y=x^2+6x+10$",
        "answer": true
      }
    ],
    "explain": "<br>- Điều kiện $x+3&gt;0\\Leftrightarrow x&gt;-3$.<br>  Tập xác định của hàm số $f(x)$ là $\\mathscr{D}=(-3;+\\infty)$.<br>- Với $x=-2\\Rightarrow f(-2)=\\log_2 (-2+3)=\\log_2 1=0$.<br>  Suy ra đồ thị hàm số $f(x)$ đi qua điểm $A(-2; 0)$.<br>- Ta có $f(x)=5\\Leftrightarrow \\log_2 (x+3)=5\\Leftrightarrow x+3=32\\Leftrightarrow x=29$.<br>- Ta có   $\\dfrac{1}{2} \\log _{\\sqrt{2}}(y-1)=2f(x)$<br>$\\Leftrightarrow \\log _2 (y-1)=2\\log_2(x+3)$<br>$\\Leftrightarrow \\log _2 (y-1)=\\log_2(x+3)^2$<br>$\\Leftrightarrow y-1=(x+3)^2$<br>$\\Leftrightarrow y=x^2+6x+10.$"
  },
  {
    "id": "1D632DS2",
    "question": "Cho hàm số $y=\\log_{0,5}x$.",
    "subQuestions": [
      {
        "text": "Hàm số đã cho có tập xác định $\\mathscr{D}=\\mathbb{R}$",
        "answer": false
      },
      {
        "text": "Hàm số đã cho nghịch biến trên khoảng $(0;+\\infty)$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đã cho đi qua $M(4;-2)$",
        "answer": true
      },
      {
        "text": "Bất phương trình $\\log_{0,5}x&gt;-1$ có tập nghiệm là $S=(2;+\\infty)$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có hàm số $y=\\log_{0,5}x$ xác định khi $x&gt;0$ nên tập xác định là $\\mathscr{D}=(0;+\\infty)$.<br>- Vì cơ số $a=0,5&lt;1$ nên hàm số $y=\\log_{0,5}x$ nghịch biến trong khoảng $(0;+\\infty)$.<br>- Thay $x=4$ vào hàm số $y=\\log_{0,5}x$ ta được $y=\\log_{0{,}5}4=-2$ nên điểm $M(4;-2)$ thuộc đồ thị hàm số $y=\\log_{0{,}5}x$.<br>- Xét bất phương trình $\\log_{0,5}x&gt;-1$.<br>  Điều kiện $x&gt;0$.<br>  Ta có bất phương trình tương đương với $x&lt;0,5^{-1}=2$.<br>  Kết hợp điều kiện ta được $0&lt;x&lt;2$ nên tập nghiệm là $S=(0;2)$."
  }
];
