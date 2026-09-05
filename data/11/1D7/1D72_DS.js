// =========================================================================
// KHỐI DỮ LIỆU: 1D72 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D72 = [
  {
    "id": "1D726DS1",
    "question": "Một viên đạn được bắn lên cao theo phương thẳng đứng có phương trình chuyển động là $s(t) = 2 + 196t - 4{,}9t^2$ trong đó $t \\ge 0$ (đơn vị tính bằng giây) là thời gian chuyển động, $s(t)$ (đơn vị tính bằng mét) là độ cao so với mặt đất của viên đạn tại thời điểm $t$.",
    "subQuestions": [
      {
        "text": "Sau $10$ giây kể từ khi bắn, viên đạn đạt được độ cao $98$ m",
        "answer": false
      },
      {
        "text": "Vận tốc tức thời của viên đạn tại thời điểm $t$ là $v(t) = s'(t) = 196 - 9,8t$",
        "answer": true
      },
      {
        "text": "Sau $20$ giây, viên đạn có vận tốc bằng $0$ m/s",
        "answer": true
      },
      {
        "text": "Độ cao lớn nhất viên đạn đạt được là $1962$ m",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Độ cao của viên đạn tại thời điểm $t=10$ giây là $s(10) = 2 + 196\\cdot 10 - 4{,}9\\cdot10^2=1472$ m.<br>- <strong>Đúng</strong>.<br>  Vận tốc tức thời $v(t)$ là đạo hàm của hàm độ cao $s(t)$ theo thời gian $t$:  \\[ v(t) = s'(t) =(2 + 196t - 4{,}9t^2)' = 196 - 9{,}8t. \\]<br>- <strong>Đúng</strong>.<br>  Vận tốc của viên đạn tại $t=20$ giây là  \\[ v(20) = 196 - 9{,}8\\cdot 20 = 0 \\text{ m/s}. \\]<br>- <strong>Đúng</strong>.<br>  Viên đạn đạt độ cao lớn nhất khi vận tốc tức thời bằng 0, tức là $v(t)=0$.<br>  Ta có $v(t)=0$ khi $t = 20$ giây.<br>  Độ cao lớn nhất $s_{\\max}$ đạt được tại $t=20$ s:  \\[s_{\\max} = s(20) = 2 + 196\\cdot 20 - 4{,}9\\cdot 20^2=1962 \\text{ m}.\\]"
  },
  {
    "id": "1D722DS2",
    "question": "Cho hàm số $f(x)=x^2+2x$ có đồ thị $(C)$ và điểm $M\\in(C)$ có hoành độ bằng $2$.",
    "subQuestions": [
      {
        "text": "$f'(x)=2x+2$",
        "answer": true
      },
      {
        "text": "Giá trị $f'(1)=\\lim\\limits_{x \\to 1} \\dfrac{f(x)+f(1)}{x-1}$",
        "answer": false
      },
      {
        "text": "Hệ số góc của tiếp tuyến của $(C)$ tại điểm $M$ là $k=f'(2)$",
        "answer": true
      },
      {
        "text": "Tiếp tuyến của $(C)$ tại điểm $M$ có phương trình là $y=6x-20$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Ta có $f'(x)=(x^2+2x)'=2x+2$.<br>- <strong>Sai</strong>. Ta có $f'(1)=\\lim\\limits_{x \\to 1} \\dfrac{f(x)-f(1)}{x-1}$.<br>- <strong>Đúng</strong>. Hệ số góc của tiếp tuyến của $(C)$ tại điểm $M$ là $k=f'(2)$.<br>- <strong>Sai</strong>. Ta có $M(2;8)\\in (C)$, $f'(2)=6$.  Tiếp tuyến của $(C)$ tại điểm $M$ có phương trình là $y=6(x-2)+8=6x-4$."
  },
  {
    "id": "1D724DS3",
    "question": "Cho hàm số $f(x)=\\dfrac{x-3}{x+4}$; $g(x)=x \\cos 2x$. Các mệnh đề sau đây đúng hay sai?",
    "subQuestions": [
      {
        "text": "$f'(2)+g'(0)=\\dfrac{16}{9}$",
        "answer": false
      },
      {
        "text": "Hàm số $f(x)$ có đạo hàm là $f'(x)=\\dfrac{1}{(x+4)^2}$",
        "answer": false
      },
      {
        "text": "$2\\left(f'(x)\\right)^2=(f(x)-1) f''(x)$",
        "answer": true
      },
      {
        "text": "Hàm số $g(x)$ có đạo hàm là $g'(x)=\\cos 2x+2x \\sin 2x$",
        "answer": false
      }
    ],
    "explain": "Ta có $f'(x)=\\dfrac{7}{(x+4)^2}$ và $g'(x)=\\cos 2x-2x\\sin 2x$.  <br>- <strong>Sai</strong>.<br>  Ta có $f'(2)=\\dfrac{7}{36}$ và $g'(0)=1$ nên  $f'(2)+g'(0)=\\dfrac{43}{36}$.<br>- <strong>Sai</strong>.<br>  $f'(x)=\\dfrac{7}{(x+4)^2}$<br>- <strong>Đúng</strong>.<br>  Ta có $\\dfrac{1}{f'(x)}=\\dfrac{(x+4)^2}{7}$ và $f(x)-1=-\\dfrac{7}{x+4}$, suy ra  $\\left(\\dfrac{1}{f'(x)}\\right)'=\\left(\\dfrac{(x+4)^2}{7}\\right)'$<br>$\\Leftrightarrow -\\dfrac{f''(x)}{\\left(f'(x)\\right)^2}=\\dfrac{1}{7}\\cdot 2(x+4)$<br>$\\Leftrightarrow 2\\left(f'(x)\\right)^2=-\\dfrac{7}{x+4}f''(x)$<br>$\\Leftrightarrow 2\\left(f'(x)\\right)^2=(f(x)-1) f''(x).$<br>- <strong>Sai</strong>.<br>  $g'(x)=\\cos 2x-2x\\sin 2x$."
  },
  {
    "id": "1D722DS4",
    "question": "Cho hàm số $y=f(x)=-x^3+6x^2-9x+1$ có đồ thị $(C)$. Các mệnh đề sau đây đúng hay sai?",
    "subQuestions": [
      {
        "text": "Phương trình tiếp tuyến của đồ thị $(C)$ có hệ số góc lớn nhất là $y=3x-7$",
        "answer": true
      },
      {
        "text": "Bất phương trình $y' &gt; 0$ có đúng ba nghiệm nguyên",
        "answer": false
      },
      {
        "text": "Phương trình tiếp tuyến của đồ thị $(C)$ tại $M(0; 1)$ là $y=-9x-8$",
        "answer": false
      },
      {
        "text": "$y'=-3x^2+12x-9$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.  Ta có $y'=f'(x)=-3x^2+12x-9=-3(x-2)^2+3 \\ge 3$ với mọi $x \\in \\mathbb{R}$.<br>  Hệ số góc lớn nhất của tiếp tuyến là $k=3$. <br>  Dấu bằng xảy ra khi $x_0=2$ nên $y_0=-1$ và phương trình tiếp tuyến là   \\[  y=3(x-2)-1 \\Leftrightarrow y=3x-7.  \\]<br>- <strong>Sai</strong>.  Ta có $y'=f'(x)=-3x^2+12x-9&gt;0 \\Leftrightarrow 1&lt;x&lt;3$.<br>  Do $x \\in \\mathbb{Z}$ nên $x \\in \\{2\\}$.<br>- <strong>Sai</strong>.<br>  Phương trình tiếp tuyến của đồ thị $(C)$ tại $M(0; 1)$ là   \\[  y=f'(0)(x-0)+1 \\Leftrightarrow y=-9x+1.  \\]<br>- <strong>Đúng</strong>.<br>  Ta có $y'=f'(x)=-3x^2+12x-9$."
  },
  {
    "id": "1D722DS5",
    "question": "Cho hàm số $f(x)=\\sqrt{x^2+5}$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hàm số có đạo hàm trên $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "$f'(x_0)=\\lim\\limits_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}$ với mọi $x_0$",
        "answer": true
      },
      {
        "text": "$f'(x)=\\dfrac{1}{2\\sqrt{x^2+5}}$ với mọi $x$",
        "answer": false
      },
      {
        "text": "Gọi $M$ là điểm thuộc $(C)$ và có hoành độ bằng $2$, tiếp tuyến của $(C)$ tại $M$ có hệ số góc bằng $3$",
        "answer": false
      }
    ],
    "explain": "<br>- Hàm số $f(x)=\\sqrt{x^2+5}$ xác định trên $\\mathbb{R}$ nên hàm số có đạo hàm trên $\\mathbb{R}$.<br>- Đạo hàm tại một điểm $x_0 \\in \\mathbb{R}$ được định nghĩa bởi giới hạn  $f'(x_0) =\\lim\\limits_{x \\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0}$.  Vì $f$ có đạo hàm trên $\\mathbb{R}$ nên giới hạn này tồn tại với mọi $x_0 \\in \\mathbb{R}$.<br>- Ta có $f(x)=\\sqrt{x^2+5}  \\Rightarrow f'(x)=\\dfrac{\\left(x^2+5\\right)'}{2\\sqrt{x^2+5}}=\\dfrac{2x}{2\\sqrt{x^2+5}}=\\dfrac{x}{\\sqrt{x^2+5}}$ với mọi $x\\in\\mathbb{R}$.<br>- Gọi $M\\in (C)$ có hoành độ $x=2$ thì hệ số góc tiếp tuyến tại $M$ là  $f'(2) =\\dfrac{2}{\\sqrt{2^2+5}}=\\dfrac{2}{\\sqrt{9}}=\\dfrac{2}{3}.$"
  },
  {
    "id": "1D722DS6",
    "question": "Cho hàm số $f(x)=x^3-3x^2+2$ có đồ thị là $(C)$.",
    "subQuestions": [
      {
        "text": "$f'(x)=3x^2-6x$",
        "answer": true
      },
      {
        "text": "$f'(1)=-3$",
        "answer": true
      },
      {
        "text": "$f'(-2)=\\displaystyle\\lim\\limits_{x\\rightarrow-2}\\dfrac{f(x)+f(2)}{x+2}$",
        "answer": false
      },
      {
        "text": "Tiếp tuyến của đồ thị (C) tại tiếp điểm có hoành độ $x_{0}=-1$ là đường thẳng có phương trình $y=9x+11$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $f'(x)=\\left(x^3-3x^2+2\\right)'=\\left(x^3\\right)'-3\\left(x^2\\right)'+2'=3x^2-6x$.<br>- Ta có $f'(1)=3\\cdot1^2-6\\cdot1=-3$.<br>- Ta có $f'(-2)=\\lim\\limits_{x\\to-2}\\dfrac{f(x)-f(-2)}{x-(-2)}=\\lim\\limits_{x\\to-2}\\dfrac{f(x)-f(-2)}{x+2}$.<br>- Xét điểm $M(x_0;y_0)\\in(C)$ có hoành độ $x_0=-1$.<br>  Ta có $y_0=x_0^3-3x_0^2+2=-2$, $f'(x_0)=3x_0^2-6x_0=9$.<br>  Tiếp tuyến của đồ thị $(C)$ tại điểm $M$ là  \\[y=f'(x_0)(x-x_0)+y_0=9(x+1)-2=9x+7.\\]"
  },
  {
    "id": "1D726DS7",
    "question": "Một người đang lái xe máy, ngay khi phát hiện có vật cản phía trước đã phanh gấp lại nhưng vẫn xảy ra va chạm, chiếc xe máy để lại vết trượt dài $8$ m (được tính từ lúc bắt đầu đạp phanh đến khi xảy ra va chạm). Trong quá trình phanh, xe máy chuyển động theo phương trình $S(t)=12 t-3 t^2$, trong đó $S$ (đơn vị mét) là độ dài quãng đường đi được sau khi phanh, $t$ (đơn vị giây) là thời gian từ lúc bắt đầu phanh $(0 \\leq t \\leq 2)$.",
    "subQuestions": [
      {
        "text": "Thời điểm xảy ra va chạm cách thời điểm bắt đầu đạp phanh $1{,}5$ giây",
        "answer": false
      },
      {
        "text": "Vận tốc tức thời của xe máy khi bắt đầu phanh là $12$ m/s",
        "answer": true
      },
      {
        "text": "Xe máy trên chưa chạy quá tốc độ giới hạn cho phép là $50$ km/h",
        "answer": true
      },
      {
        "text": "Vận tốc tức thời của xe máy ngay khi xảy ra va chạm là $8$ m/s",
        "answer": false
      }
    ],
    "explain": "Vận tốc tức thời của chuyển động $v(t)=S'(t)=12-6t$.  <br>- <strong>Sai</strong>.<br>  Thay $t=1{,}5$ vào phương trình quãng đường $S(1{,}5)=12\\cdot (1{,}5)-3\\cdot (1{,}5)^2=11{,}25$ (m) lớn hơn quãng đường thực tế là $8$ (m).<br>- <strong>Đúng</strong>.<br>  Vận tốc khi bắt đầu phanh là $v(0)=12-6\\cdot 0=12$ (m/s).<br>- <strong>Đúng</strong>.<br>  Vì sau khi đạp phanh thì tốc độ sẽ giảm dần, do đó tốc độ lớn nhất là tốc độ khi bắt đầu đạp phanh $v(0)=12$ (m/s).<br>  Đổi $12$ m/s sang km/h là $12\\cdot 3{,}6=43{,}2$ (km/h).<br>  Vì $43{,}2 &lt; 50$ nên xe máy trên chưa chạy quá tốc độ.<br>- <strong>Sai</strong>.<br>  Giải phương trình $S(t)=8 \\Leftrightarrow 3t^2-12t+8=0 \\Leftrightarrow t=\\dfrac{6+2\\sqrt{3}}{3} \\approx 3{,}155 \\text{ hoặc } t=\\dfrac{6-2\\sqrt{3}}{3} \\approx 0{,}845.$<br>  Vì $0\\leq t \\leq 2$ nên $t=\\dfrac{6-2\\sqrt{3}}{3}$ (s).<br>  Vận tốc tại thời điểm này là $v\\left(\\dfrac{6-2\\sqrt{3}}{3}\\right)=12-6\\cdot \\left(\\dfrac{6-2\\sqrt{3}}{3}\\right) = 4\\sqrt{3} \\approx 6{,}93$ m/s."
  },
  {
    "id": "1D722DS8",
    "question": "Cho hàm số $f(x)=x^3-2x$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Hệ số góc của tiếp tuyến với $(C)$ tại điểm có hoành độ $x_0$ là $k=f'(x_0)$",
        "answer": true
      },
      {
        "text": "$f'(x)=3x^2-2$",
        "answer": true
      },
      {
        "text": "$f'(2)=14$",
        "answer": false
      },
      {
        "text": "Phương trình tiếp tuyến của $(C)$ tại điểm $M(2;4)$ là $y=10x+16$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>- <strong>Đúng</strong>. Ta có $f'(x)=(x^3-2x)'=3x^2-2$.<br>- <strong>Sai</strong>. Ta có $f'(2) = 3\\cdot 2^2 - 2 = 10$.<br>- <strong>Sai</strong>. Phương trình tiếp tuyến của $(C)$ tại điểm $M(2;4)$ là   $ y=f'(2)(x-2) + 4   \\Leftrightarrow y=10(x-2)+4   \\Leftrightarrow y=10x-6. $"
  },
  {
    "id": "1D726DS8",
    "question": "Một vật chuyển động với vận tốc ban đầu là $v_0$ (m/s) sau đó dừng lại, phương trình quãng đường của vật là $s=s\\left(t\\right)=-t^3+6t^2+15t$ trong đó $t$ tính bằng giây và $s$ tính bằng mét.",
    "subQuestions": [
      {
        "text": "Vận tốc của vật tại thời điểm $t=2\\left(s\\right)$ là $v=18$ (m/s)",
        "answer": false
      },
      {
        "text": "Vận tốc của vật tại thời điểm $t$ là $v\\left(t\\right)=-3t^2+12t+15$ (m/s)",
        "answer": true
      },
      {
        "text": "Vật đạt vận tốc lớn nhất tại thời điểm $t=2$ (s)",
        "answer": true
      },
      {
        "text": "Vật dừng lại sau $4$ (s) kể từ lúc bắt đầu chuyển động",
        "answer": false
      }
    ],
    "explain": "<br>- Vận tốc $v\\left(t\\right)=s'\\left(t\\right)=-3t^2+12t+15\\left(m/s\\right)$. <br>  Vận tốc của vật tại thời điểm $t=2\\left(s\\right)$ là $v=-3\\cdot 2^2+12\\cdot 2+15=27\\left(m/s\\right)$.<br>- Vận tốc của vật tại thời điểm $t$ là $v\\left(t\\right)=-3t^2+12t+15\\left(m/s\\right)$.<br>- Vận tốc $v\\left(t\\right)=-3t^2+12t+15\\left(m/s\\right)$. <br>  Bảng biến thiên của $v\\left(t\\right)$  <br><img src=\"data/11/1D7/im1D72/loc8_TT_KSCL_THPT_Yen_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Vận tốc đạt lớn nhất khi $t=\\dfrac{-12}{2\\cdot\\left(-3\\right)}=2$ (s).<br>- Vật dừng lại khi $v\\left(t\\right)=0\\Leftrightarrow -3t^2+12t+15=0\\Rightarrow t=5\\vee t=-1$. <br>  Vậy vật dừng lại sau $5$ giây kể từ lúc bắt đầu chuyển động."
  }
];
