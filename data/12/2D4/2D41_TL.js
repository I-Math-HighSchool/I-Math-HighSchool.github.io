// =========================================================================
// KHỐI DỮ LIỆU: 2D41 - Trả lời ngắn (bổ sung từ nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan2D41 = [
  {
    "id": "2D414TL1",
    "question": "Biết $F(x)=\\left(x^2+mx+n\\right)\\mathrm{e}^x$, với $m$, $n\\in\\mathbb{N}$ là một nguyên hàm của $f(x)=\\left(x^2+4x+5\\right)\\mathrm{e}^x$. Tính $S=m^2+n^2$.",
    "answer": "13",
    "explain": "Do $F(x)$ là một nguyên hàm của $f(x)$ nên  $F'(x)=f(x),\\,\\forall x\\in\\mathbb{R}$<br>$\\Leftrightarrow \\left(2x+m\\right)\\mathrm{e}^x+\\left(x^2+mx+n\\right)\\mathrm{e}^x=\\left(x^2+4x+5\\right)\\mathrm{e}^x,\\,\\forall x\\in\\mathbb{R}$<br>$\\Leftrightarrow x^2+(m+2)x+m+n=x^2+4x+5,\\,\\forall x\\in\\mathbb{R}$<br>$\\Leftrightarrow m+2=4 \\text{ và } m+n=5\\Leftrightarrow m=2 \\text{ và } n=3.$  Vậy $S=m^2+n^2=13$."
  },
  {
    "id": "2D417TL2",
    "question": "Một hộ gia đình sản xuất cơ khí nhỏ mỗi ngày sản xuất được $x$ sản phẩm $(0 \\le x \\le 20)$. Chi phí biên để sản xuất $x$ sản phẩm, tính bằng nghìn đồng, cho bởi hàm số sau $C'(x)=3x^2-4x+10$. Biết rằng chi phí cố định ban đầu để sản xuất là $500$ nghìn đồng. Giả sử cơ sở này bán hết sản phẩm mỗi ngày với giá $270$ nghìn đồng/sản phẩm. Tính lợi nhuận tối đa mà gia đình đó thu được khi sản xuất và bán sản phẩm.",
    "answer": "1300",
    "explain": "Chi phí để sản xuất $x$ sản phẩm bằng $C(x)=\\displaystyle\\int\\limits C'(x) \\mathrm{\\,d}x=x^3-2x^2+10x+C$.<br>  Mà chi phí cố định ban đầu để sản xuất $500$ nghìn đồng nên suy ra $C(0)=500$.<br>  Khi đó $C(0)=500 \\Rightarrow C=500 \\Rightarrow C(x)=x^3-2x^2+10x+500$.<br>  Khi bán $x$ sản phẩm, số tiền thu được là $270x$ nghìn đồng.<br>  Do đó lợi nhuận thu được là $T(x)=-x^3+2x^2+260x-500$ (nghìn đồng).<br>  Ta có $T'(x)=-3x^2+4x+260=0 \\Leftrightarrow x=10$ hoặc $x=-\\dfrac{26}{3}$ (loại).<br>  Bảng biến thiên  <br><img src=\"data/12/2D4/im2D41/dlts_12_DLTS17_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Lợi nhuận tối đa là $1300$ nghìn đồng khi sản xuất $10$ sản phẩm mỗi ngày."
  },
  {
    "id": "2D417TL3",
    "question": "Một chiếc xe đua đang chạy $180$ km/h. Tay đua nhấn ga để về đích kể từ đó xe chạy với gia tốc $a(t)=2t+1$ (m/s$^2$). Hỏi rằng $5$ s sau khi nhấn ga thì xe chạy với vận tốc bao nhiêu km/h?",
    "answer": "80",
    "explain": "Ta có $v(t)=\\displaystyle\\int a(t)\\mathrm{\\,d}t=\\displaystyle\\int(2 t+1) \\mathrm{\\,d}t=t^2+t+C$.<br>  Mặt khác vận tốc ban đầu là $180$ km/h hay $50$ m/s nên ta có  $v(0)=50 \\Leftrightarrow C=50$.<br>  Khi đó vận tốc của vật sau $5$ giây là  $v(5)=5^2+5+50=80$ m/s."
  }
];
