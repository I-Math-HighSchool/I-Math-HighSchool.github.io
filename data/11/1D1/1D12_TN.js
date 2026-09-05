// =========================================================================
// KHỐI DỮ LIỆU: 1D12 - Trắc nghiệm
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 5), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem1D12 = [
  {
    "id": "1D124TN1",
    "question": "Biết $\\sin{a}=-\\dfrac{1}{2}$, giá trị của $\\sin{(\\pi-a)}$ là",
    "options": [
      "$\\sin{(\\pi-a)}=\\dfrac{1}{2}$",
      "$\\sin{(\\pi-a)}=-\\dfrac{\\sqrt{3}}{2}$",
      "$\\sin{(\\pi-a)}=-\\dfrac{1}{2}$",
      "$\\sin{(\\pi-a)}=\\dfrac{\\sqrt{3}}{2}$"
    ],
    "answer": 2,
    "explain": "Ta có $\\sin{(\\pi-a)}=\\sin{a}=-\\dfrac{1}{2}$."
  },
  {
    "id": "1D122TN2",
    "question": "Giá trị biểu thức $A=4\\cos 2x+\\sqrt{2}\\sin 3x$, với $x=\\dfrac{\\pi}{4}$ là",
    "options": [
      "$0$",
      "$3$",
      "$\\dfrac{3\\sqrt{2}}{2}$",
      "$1$"
    ],
    "answer": 3,
    "explain": "$A=4\\cos \\left(2\\cdot \\dfrac{\\pi}{4}\\right)+\\sqrt{2}\\sin \\left(3\\cdot \\dfrac{\\pi}{4}\\right)=4\\cos \\dfrac{\\pi}{2} + \\sqrt{2}\\sin \\dfrac{3\\pi}{4}=4\\cdot 0+ \\sqrt{2}\\cdot \\dfrac{\\sqrt{2}}{2}=1$."
  },
  {
    "id": "1D121TN3",
    "question": "Với mọi góc lượng giác $\\alpha$ và số nguyên $k$. Khẳng định nào sau đây &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\cos(\\alpha+k 2\\pi)=\\cos \\alpha$",
      "$\\sin(\\alpha+k \\pi)=\\sin \\alpha$",
      "$\\tan(\\alpha+k \\pi)=\\tan \\alpha$",
      "$\\cot(\\alpha+k \\pi)=\\cot \\alpha$"
    ],
    "answer": 1,
    "explain": "Ta có $\\sin(\\alpha+k2 \\pi)=\\sin \\alpha$ nên khẳng định $\\sin(\\alpha+k \\pi)=\\sin \\alpha$ là sai."
  },
  {
    "id": "1D122TN4",
    "question": "Cho $\\sin \\alpha=\\dfrac{3}{5}$ với $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$. Giá trị lượng giác $\\cos \\alpha$ bằng",
    "options": [
      "$0{,}4$",
      "$-0{,}6$",
      "$0{,}2$",
      "$-0{,}8$"
    ],
    "answer": 3,
    "explain": "Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\cos \\alpha&lt;0$. Do đó  \\[\\cos\\alpha=-\\sqrt{1-\\sin ^2\\alpha}=-\\sqrt{1-\\dfrac{9}{25}}=-\\dfrac{4}{5}=-0{,}8. \\]"
  },
  {
    "id": "1D122TN5",
    "question": "Cho biết $\\tan\\alpha=\\dfrac{1}{2}$. Tính $\\cot\\alpha$.",
    "options": [
      "$\\cot\\alpha=-\\dfrac{1}{2}$",
      "$\\cot\\alpha=\\sqrt{2}$",
      "$\\cot\\alpha=\\dfrac{1}{4}$",
      "$\\cot\\alpha=2$"
    ],
    "answer": 3,
    "explain": "Ta có $\\cot\\alpha=\\dfrac{1}{\\tan\\alpha}=\\dfrac{1}{\\frac{1}{2}}=2$."
  },
  {
    "id": "1D122TN6",
    "question": "Cho $\\alpha$ thỏa mãn $90^\\circ &lt; \\alpha &lt; 180^\\circ$. Khẳng định nào sau đây là đúng?  <br><img src=\"data/11/1D1/im1D1/1D12_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$\\tan\\alpha&gt;0$",
      "$\\cot\\alpha&gt;0$",
      "$\\cos\\alpha&gt;0$",
      "$\\sin\\alpha&gt;0$"
    ],
    "answer": 3,
    "explain": "Vì $90^\\circ &lt; \\alpha &lt; 180^\\circ$ nên điểm biểu diễn của góc $\\alpha$ trên đường tròn lượng giác nằm ở góc phần tư thứ II.<br>  Tại đây, $\\sin\\alpha&gt;0$ và $\\cos\\alpha&lt;0$, do đó $\\tan\\alpha&lt;0$ và $\\cot\\alpha&lt;0$."
  },
  {
    "id": "1D122TN7",
    "question": "Cho $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$. Mệnh đề nào dưới đây đúng?",
    "options": [
      "$\\sin \\alpha &gt; 0$",
      "$\\cot \\alpha &gt; 0$",
      "$\\cos \\alpha &gt; 0$",
      "$\\tan \\alpha &gt; 0$"
    ],
    "answer": 0,
    "explain": "Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\sin \\alpha &gt; 0$."
  },
  {
    "id": "1D122TN8",
    "question": "Cho $\\sin \\alpha=\\dfrac{2}{3}$. Tính $\\cos 2\\alpha$.",
    "options": [
      "$-\\dfrac{1}{9}$",
      "$\\dfrac{1}{3}$",
      "$-\\dfrac{1}{3}$",
      "$\\dfrac{1}{9}$"
    ],
    "answer": 3,
    "explain": "Ta có $\\cos 2\\alpha=1-2\\sin^2x=1-2\\cdot \\left(\\dfrac{2}{3}\\right)^2=\\dfrac{1}{9}$."
  },
  {
    "id": "1D124TN9",
    "question": "Biết $\\sin a=-\\dfrac{1}{2}$, giá trị của $\\sin(\\pi-a)$ bằng",
    "options": [
      "$\\dfrac{1}{2}$",
      "$-\\dfrac{1}{2}$",
      "$-\\dfrac{\\sqrt{3}}{2}$",
      "$\\dfrac{\\sqrt{3}}{2}$"
    ],
    "answer": 1,
    "explain": "Ta có $\\sin(\\pi-a)=\\sin a=-\\dfrac{1}{2}$."
  },
  {
    "id": "1D122TN10",
    "question": "Cho $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$, khẳng định nào sau đây là đúng?",
    "options": [
      "$\\tan\\alpha&gt;0$",
      "$\\cos\\alpha&gt;0$",
      "$\\sin\\alpha&gt;0$",
      "$\\cot\\alpha&gt;0$"
    ],
    "answer": 2,
    "explain": "Do $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\alpha$ thuộc góc phần tư thứ hai.<br>  Suy ra $\\sin\\alpha&gt;0$, $\\cos\\alpha &lt; 0$, $\\tan\\alpha &lt; 0$ và $\\cot\\alpha &lt; 0$.<br>  Vậy khẳng định đúng là $\\sin\\alpha&gt;0$."
  },
  {
    "id": "1D122TN11",
    "question": "Biết $\\tan a=2$ và $0 &lt; a &lt; \\dfrac{\\pi}{2}$. Tính $\\cos a$.",
    "options": [
      "$\\cos a=\\dfrac{\\sqrt{3}}{3}$",
      "$\\cos a=-\\dfrac{\\sqrt{5}}{5}$",
      "$\\cos a=\\dfrac{1}{2}$",
      "$\\cos a=\\dfrac{\\sqrt{5}}{5}$"
    ],
    "answer": 3,
    "explain": "Do $0 &lt; a &lt; \\dfrac{\\pi}{2}$ nên $a$ thuộc góc phần tư thứ nhất, khi đó $\\cos a&gt;0$.<br>  Ta có $1+\\tan^2 a=\\dfrac{1}{\\cos^2 a}$, suy ra $\\cos^2 a=\\dfrac{1}{1+\\tan^2 a}=\\dfrac{1}{1+2^2}=\\dfrac{1}{5}$.<br>  Suy ra $\\cos a=\\sqrt{\\dfrac{1}{5}}=\\dfrac{\\sqrt5}{5}$.<br>  Vậy $\\cos a=\\dfrac{\\sqrt5}{5}$."
  },
  {
    "id": "1D122TN12",
    "question": "Biết $A$, $B$, $C$ là các góc của tam giác $ABC$, khi đó",
    "options": [
      "$\\sin C=-\\sin (A+B)$",
      "$\\cos C=\\cos (A+B)$",
      "$\\tan C=\\tan (A+B)$",
      "$\\cot C=-\\cot (A+B)$"
    ],
    "answer": 3,
    "explain": "Ta có  $\\sin C=\\sin (A+B)$<br>$\\cos C=-\\cos (A+B)$<br>$\\tan C=-\\tan (A+B)$<br>$\\cot C=-\\cot (A+B).$"
  },
  {
    "id": "1D122TN13",
    "question": "Hằng ngày mực nước của con kênh lên xuống theo thủy triều. Độ sâu $h$ (mét) của mực nước trong kênh được tính tại thời điểm $t$ (giờ) trong một ngày bởi công thức $h=3\\cos\\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)+12$. Để tìm thời điểm mực nước trong kênh lớn nhất ta giải phương trình nào trong các phương trình sau đây:",
    "options": [
      "$\\cos\\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)=12$",
      "$\\cos\\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)=1$",
      "$\\cos\\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)=-1$",
      "$\\cos\\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)=0$"
    ],
    "answer": 1,
    "explain": "Ta có $-1 \\leq \\cos x \\leq 1$ với mọi $x$.<br>  Nên để mực nước trong kênh lớn nhất thì $\\cos\\left(\\dfrac{\\pi t}{8}+\\dfrac{\\pi}{4}\\right)$ phải lớn nhất và giá trị lớn nhất là $1$."
  },
  {
    "id": "1D122TN14",
    "question": "Cho góc $-\\dfrac{\\pi}{2}&lt; \\alpha &lt;0$, khẳng định nào sau đây đúng?",
    "options": [
      "$\\sin \\alpha &lt; 0$",
      "$\\cos \\alpha &lt; 0$",
      "$\\tan \\alpha &gt; 0$",
      "$\\cot \\alpha &gt; 0$"
    ],
    "answer": 0,
    "explain": "Ta có $-\\dfrac{\\pi}{2}&lt; \\alpha &lt;0 \\Rightarrow \\sin \\alpha &lt; 0$."
  },
  {
    "id": "1D121TN15",
    "question": "Cho góc lượng giác $x$. Đẳng thức lượng nào dưới đây &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\sin(\\pi-x)=\\sin x$",
      "$\\tan (\\pi+x)=\\tan x$",
      "$\\cos\\left(\\dfrac{\\pi}{2}-x\\right)=\\sin x$",
      "$\\cos(-x)=-\\cos x$"
    ],
    "answer": 3,
    "explain": "Ta có $\\cos(-x)=\\cos x$ nên đẳng thức sai là $\\cos(-x)=-\\cos x$."
  },
  {
    "id": "1D122TN16",
    "question": "Cho góc $x$ biết $0 &lt; x &lt; \\dfrac{\\pi}{2}$. Mệnh đề nào sau đây &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\tan x &gt; 0$",
      "$\\cos x &gt; 0$",
      "$\\cot x &lt; 0$",
      "$\\sin x &gt; 0$"
    ],
    "answer": 2,
    "explain": "Vì $0 &lt; x &lt; \\dfrac{\\pi}{2}$ nên $x$ thuộc góc phần tư thứ nhất.<br>   Khi đó $\\sin x &gt; 0$, $\\cos x &gt; 0$ nên $\\tan x &gt; 0$ và $\\cot x &gt; 0$.<br>   Do đó mệnh đề $\\cot x &lt; 0$ là mệnh đề sai."
  },
  {
    "id": "1D122TN17",
    "question": "Cho $0&lt; \\alpha &lt; \\dfrac{\\pi}{2}$. Khẳng định nào sau đây &lt;strong&gt;đúng&lt;/strong&gt;?",
    "options": [
      "$\\cot\\alpha &lt; 0$",
      "$\\sin\\alpha &gt; 0$",
      "$\\tan\\alpha &lt; 0$",
      "$\\cos\\alpha &lt; 0$"
    ],
    "answer": 1,
    "explain": "Do $0&lt; \\alpha &lt; \\dfrac{\\pi}{2}$ thuộc vào góc phần tư thứ nhất của đường tròn lượng giác nên $\\sin \\alpha &gt;0$."
  },
  {
    "id": "1D122TN18",
    "question": "Cho hàm số $f(x)=3\\tan x+\\sqrt{3}$, giá trị $f\\left(-\\dfrac{\\pi}{3}\\right)$ là",
    "options": [
      "$-2\\sqrt{3}$",
      "$4\\sqrt{3}$",
      "$-4\\sqrt{3}$",
      "$\\sqrt{3}$"
    ],
    "answer": 0,
    "explain": "Ta có $f\\left(-\\dfrac{\\pi}{3}\\right)=3\\tan\\left(-\\dfrac{\\pi}{3}\\right)+\\sqrt{3}=-2\\sqrt{3}$."
  },
  {
    "id": "1D122TN19",
    "question": "Giá trị của $\\cos \\dfrac{3 \\pi}{4}$ là",
    "options": [
      "$\\dfrac{\\sqrt{3}}{2}$",
      "$-\\dfrac{\\sqrt{2}}{2}$",
      "$\\dfrac{1}{2}$",
      "$ 1 $"
    ],
    "answer": 1,
    "explain": "Ta có $\\cos \\dfrac{3 \\pi}{4}=-\\dfrac{\\sqrt{2}}{2}$."
  },
  {
    "id": "1D122TN20",
    "question": "Cho $\\cos \\alpha=-\\dfrac{5}{13}$, với $\\alpha \\in\\left(\\pi; \\dfrac{3 \\pi}{2}\\right)$. Khi đó giá trị của $\\sin \\alpha$ là",
    "options": [
      "$-\\dfrac{12}{13}$",
      "$\\dfrac{12}{13}$",
      "$\\dfrac{4}{13}$",
      "$\\dfrac{7}{13}$"
    ],
    "answer": 0,
    "explain": "Do $\\alpha \\in\\left(\\pi; \\dfrac{3 \\pi}{2}\\right)$ nên $\\sin \\alpha&lt;0$.<br>  Ta có $\\sin \\alpha=-\\sqrt{1-\\cos^2 \\alpha}=-\\sqrt{1-\\dfrac{25}{169}}=\\dfrac{-12}{13}$."
  },
  {
    "id": "1D122TN21",
    "question": "Cho góc $\\alpha$ thỏa $\\sin \\alpha=\\dfrac{3}{5}$ và $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$. Khẳng định nào sau đây đúng?",
    "options": [
      "$\\cos \\alpha=\\dfrac{4}{5}$",
      "$\\cos \\alpha=-\\dfrac{4}{5}$",
      "$\\cos \\alpha=\\dfrac{5}{4}$",
      "$\\cos \\alpha=-\\dfrac{5}{4}$"
    ],
    "answer": 1,
    "explain": "Vì $\\dfrac{\\pi}{2}&lt;\\alpha&lt;\\pi$ nên $\\cos \\alpha&lt;0$.<br>  Ta có  $\\sin^2\\alpha+\\cos^2\\alpha = 1$<br>$cos^2\\alpha = 1-\\left(\\dfrac{3}{5}\\right)^2=\\dfrac{16}{25}$<br>$\\cos \\alpha=\\dfrac{4}{5}\\ (\\text{loại})\\ \\text{hoặc}\\ \\cos\\alpha = -\\dfrac{4}{5}\\ (\\text{nhận}).$"
  },
  {
    "id": "1D122TN22",
    "question": "Dựa vào hình vẽ, giá trị lượng giác $\\sin \\alpha$ bằng<br><img src=\"data/11/1D1/im1D1/1D12_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$y_0$",
      "$\\dfrac{y_0}{x_0}$",
      "$\\dfrac{x_0}{y_0}$",
      "$x_0$"
    ],
    "answer": 0,
    "explain": "Dựa vào hình vẽ, giá trị lượng giác $\\sin \\alpha=y_0$."
  },
  {
    "id": "1D122TN23",
    "question": "Giá trị của $\\tan \\dfrac{\\pi}{6}$ là",
    "options": [
      "$\\dfrac{\\sqrt{3}}{3}$",
      "$-\\dfrac{\\sqrt{3}}{3}$",
      "$\\sqrt{3}$",
      "$-\\sqrt{3}$"
    ],
    "answer": 0,
    "explain": "Ta có $\\tan \\dfrac{\\pi}{6}=\\dfrac{\\sqrt{3}}{3}$."
  },
  {
    "id": "1D121TN24",
    "question": "Khẳng định nào dưới đây &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\cos(\\pi - \\alpha) = -\\cos \\alpha$",
      "$\\tan(\\pi + \\alpha) = \\tan \\alpha$",
      "$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos \\alpha$",
      "$\\cos(-\\alpha) = -\\cos \\alpha$"
    ],
    "answer": 3,
    "explain": "Khẳng định sai là $\\cos(-\\alpha) = -\\cos \\alpha$ vì $\\cos(-\\alpha) = \\cos \\alpha$."
  },
  {
    "id": "1D122TN25",
    "question": "Cho $\\sin \\alpha=\\dfrac{4}{5}$, ($90^\\circ &lt; \\alpha &lt; 180^\\circ$). Tính $\\cos \\alpha$.",
    "options": [
      "$\\cos \\alpha=\\dfrac{3}{5}$",
      "$\\cos \\alpha=-\\dfrac{3}{5}$",
      "$\\cos \\alpha=-\\dfrac{4}{5}$",
      "$\\cos \\alpha=\\dfrac{5}{3}$"
    ],
    "answer": 1,
    "explain": "Với $90^\\circ &lt; \\alpha &lt; 180^\\circ$, ta có $\\cos \\alpha&lt;0$.<br>  Do đó, $\\cos \\alpha=-\\sqrt{1-\\sin^2\\alpha}=-\\sqrt{1-\\left(\\dfrac{4}{5}\\right)^2}=-\\dfrac{3}{5}$."
  },
  {
    "id": "1D122TN26",
    "question": "Cho $\\dfrac{\\pi}{2} &lt; a &lt; \\pi$. Khẳng định nào sau đây đúng?",
    "options": [
      "$\\sin a &lt; 0$",
      "$\\cos a &lt; 0$",
      "$\\cot \\alpha &gt; 0$",
      "$\\tan \\alpha &gt; 0$"
    ],
    "answer": 1,
    "explain": "Vì $\\dfrac{\\pi}{2} &lt; a &lt; \\pi$ nên $\\cos a &lt; 0$."
  },
  {
    "id": "1D121TN27",
    "question": "Cho $\\alpha$ thuộc góc phần tư II của đường tròn lượng giác. Khẳng định nào dưới đây &lt;strong&gt;đúng&lt;/strong&gt;?",
    "options": [
      "$\\sin \\alpha &gt; 0; \\cot \\alpha &gt; 0$",
      "$\\sin \\alpha &gt; 0; \\cos \\alpha &lt; 0$",
      "$\\sin \\alpha &gt; 0; \\cos \\alpha &gt; 0$",
      "$\\tan \\alpha &gt; 0; \\cot \\alpha &gt; 0$"
    ],
    "answer": 1,
    "explain": "Góc $\\alpha$ thuộc góc phần tư thứ II nên  <br>- Tung độ dương $\\Rightarrow \\sin \\alpha &gt; 0$.<br>- Hoành độ âm $\\Rightarrow \\cos \\alpha &lt; 0$."
  },
  {
    "id": "1D122TN28",
    "question": "Cho $\\sin \\alpha = \\dfrac{4}{5}$, $(90^\\circ &lt; \\alpha &lt; 180^\\circ)$. Tính $\\cos \\alpha$ bằng",
    "options": [
      "$\\cos \\alpha = -\\dfrac{3}{5}$",
      "$\\cos \\alpha = \\dfrac{5}{3}$",
      "$\\cos \\alpha = \\dfrac{3}{5}$",
      "$\\cos \\alpha = -\\dfrac{4}{5}$"
    ],
    "answer": 0,
    "explain": "Vì $90^\\circ &lt; \\alpha &lt; 180^\\circ$ nên $\\cos \\alpha &lt; 0$.<br>  Ta có  $\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\left(\\dfrac{4}{5}\\right)^2 = \\dfrac{9}{25} \\Rightarrow \\cos \\alpha = -\\dfrac{3}{5}$."
  },
  {
    "id": "1D122TN29",
    "question": "Giá trị côsin của góc có số đo $\\dfrac{\\pi}{4}$ bằng",
    "options": [
      "$1$",
      "$\\dfrac12$",
      "$\\dfrac{\\sqrt3}{2}$",
      "$\\dfrac{\\sqrt2}{2}$"
    ],
    "answer": 3,
    "explain": "Ta có $\\cos \\dfrac{\\pi}{4}=\\dfrac{\\sqrt2}{2}$."
  },
  {
    "id": "1D122TN30",
    "question": "Điểm cuối của góc lượng giác $\\alpha$ ở góc phần tư thứ mấy nếu $\\sqrt{\\sin^2 \\alpha} = \\sin \\alpha$.",
    "options": [
      "Thứ III",
      "Thứ I hoặc III",
      "Thứ I hoặc II",
      "Thứ III hoặc IV"
    ],
    "answer": 2,
    "explain": "Ta có $\\sqrt{\\sin^2 \\alpha} = \\sin \\alpha \\Leftrightarrow \\left| \\sin \\alpha \\right| = \\sin \\alpha $.<br>  Khi đó $\\sin \\alpha &gt;0$ nên điểm cuối của góc lượng giác $\\alpha$ ở góc phần tư thứ I hoặc II."
  },
  {
    "id": "1D122TN31",
    "question": "Biết $\\tan \\alpha=2$ và $180^{\\circ} &lt; \\alpha &lt; 270^{\\circ}$. Giá trị $\\cos \\alpha+\\sin \\alpha$ bằng",
    "options": [
      "$-\\dfrac{3\\sqrt{5}}{5}$",
      "$1-\\sqrt{5}$",
      "$\\dfrac{3\\sqrt{5}}{2}$",
      "$\\dfrac{\\sqrt{5}-1}{2}$"
    ],
    "answer": 0,
    "explain": "Vì $180^{\\circ} &lt; \\alpha &lt; 270^{\\circ}$ nên $\\cos \\alpha&lt;0$.<br>  Ta có $\\cos^2\\alpha=\\dfrac{1}{1+\\tan^2\\alpha}=\\dfrac{1}{5}\\Rightarrow \\cos \\alpha=-\\dfrac{\\sqrt{5}}{5}$ và $\\sin \\alpha=-\\dfrac{2\\sqrt{5}}{5}$.<br>  Vậy $\\cos \\alpha+\\sin \\alpha=-\\dfrac{3\\sqrt{5}}{5}$."
  },
  {
    "id": "1D122TN32",
    "question": "Cho góc $\\alpha$ thoả mãn $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$. Khẳng định nào sau đây &lt;strong&gt;đúng&lt;/strong&gt;?",
    "options": [
      "$\\sin \\alpha &gt; 0$",
      "$\\cos \\alpha &gt; 0$",
      "$\\tan \\alpha &gt; 0$",
      "$\\cot \\alpha &gt; 0$"
    ],
    "answer": 0,
    "explain": "Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\sin \\alpha &gt; 0$."
  },
  {
    "id": "1D121TN33",
    "question": "Khẳng định nào sau đây &lt;strong&gt;đúng&lt;/strong&gt;?",
    "options": [
      "$\\sin(-11^\\circ) = \\sin 11^\\circ$",
      "$\\cos(-11^\\circ) = \\cos 11^\\circ$",
      "$\\tan(-11^\\circ) = \\tan 11^\\circ$",
      "$\\cot(-11^\\circ) = \\cot 11^\\circ$"
    ],
    "answer": 1,
    "explain": "Ta có $\\cos(-11^\\circ) = \\cos 11^\\circ$."
  },
  {
    "id": "1D122TN34",
    "question": "Cho $\\cos \\alpha = \\dfrac{1}{3}$. Giá trị của $\\tan^2 \\alpha$ bằng",
    "options": [
      "$9$",
      "$2$",
      "$8$",
      "$3$"
    ],
    "answer": 2,
    "explain": "Ta có $1 + \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha}\\Rightarrow \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha} - 1 = \\dfrac{1}{\\dfrac{1}{9}} - 1 = 9 - 1 = 8$."
  },
  {
    "id": "1D122TN35",
    "question": "Giá trị của $\\cos\\dfrac{3\\pi}{4}$ bằng",
    "options": [
      "$\\dfrac{\\sqrt{3}}{2}$",
      "$-\\dfrac{\\sqrt{2}}{2}$",
      "$\\dfrac{1}{2}$",
      "$1$"
    ],
    "answer": 1,
    "explain": "Ta có $\\cos\\dfrac{3\\pi}{4} = - \\dfrac{\\sqrt{2}}{2}$."
  },
  {
    "id": "1D122TN36",
    "question": "Cho $\\cos a = -\\dfrac{5}{13}$ với $a\\in\\left(\\pi;\\dfrac{3\\pi}{2}\\right)$. Khi đó giá trị của $\\sin a$ là",
    "options": [
      "$-\\dfrac{12}{13}$",
      "$\\dfrac{12}{13}$",
      "$\\dfrac{4}{13}$",
      "$\\dfrac{7}{13}$"
    ],
    "answer": 0,
    "explain": "Do $a\\in\\left(\\pi;\\dfrac{3\\pi}{2}\\right)$ nên $\\sin a &lt; 0$. Khi đó   $  \\sin a = - \\sqrt{1-\\cos^2 a} = -\\dfrac{12}{13}.  $"
  },
  {
    "id": "1D122TN37",
    "question": "Giá trị nào sau đây mang dấu dương?",
    "options": [
      "$\\tan 120^{\\circ}$",
      "$\\cos 120^{\\circ}$",
      "$\\cot 120^{\\circ}$",
      "$\\sin 120^{\\circ}$"
    ],
    "answer": 3,
    "explain": "Ta có $90^\\circ&lt;\\alpha&lt;180^\\circ$ thì $\\cos \\alpha&lt;0$, $\\sin \\alpha&gt;0$, $\\tan \\alpha&lt;0$, $\\cot \\alpha&lt;0$.<br>  Vậy $\\sin 120^{\\circ}&gt;0$."
  },
  {
    "id": "1D122TN38",
    "question": "Cho $\\sin \\alpha=\\dfrac{5}{6}$ và $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$. Có $\\cos \\alpha=-\\dfrac{\\sqrt{a}}{b}$ với $\\dfrac{a}{b}$ là phân số tối giản. Khi đó $a+b$ bằng",
    "options": [
      "$18$",
      "$17$",
      "$15$",
      "$16$"
    ],
    "answer": 1,
    "explain": "Ta có   $\\cos ^2\\alpha =1-\\sin^2\\alpha=1-\\left(\\dfrac{5}{6}\\right)^2=\\dfrac{11}{36}$.<br>  Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\cos \\alpha&lt;0$.<br>  Suy ra $\\cos \\alpha=-\\dfrac{\\sqrt{11}}{6}$.<br>  Do đó $a=11$, $b=6$.<br>  Vậy $a+b=11+6=17$."
  },
  {
    "id": "1D122TN39",
    "question": "Cho $\\sin \\alpha = -\\dfrac{12}{13}$ và $\\dfrac{3\\pi}{2} &lt; \\alpha &lt; 2\\pi$. Giá trị $\\cos \\alpha$ là",
    "options": [
      "$\\pm \\dfrac{5}{13}$",
      "$\\dfrac{5}{13}$",
      "$-\\dfrac{5}{12}$",
      "$\\dfrac{144}{169}$"
    ],
    "answer": 1,
    "explain": "Ta có   \\[\\cos \\alpha = \\pm\\sqrt{1 - \\sin^2 \\alpha} = \\pm \\sqrt{1 - \\dfrac{144}{169}} = \\pm \\sqrt{\\dfrac{25}{169}} = \\pm \\dfrac{5}{13}.\\]  Vì $\\dfrac{3\\pi}{2} &lt; \\alpha &lt; 2\\pi$ nên $\\cos \\alpha &gt; 0$.<br>  Suy ra $\\cos \\alpha = \\dfrac{5}{13}$."
  },
  {
    "id": "1D122TN40",
    "question": "Cho $\\pi&lt;x&lt;\\dfrac{3\\pi}{2}$. Khẳng định nào dưới đây đúng?",
    "options": [
      "$\\tan x&lt;0$",
      "$\\cos x&gt;0$",
      "$\\cot x&lt;0$",
      "$\\sin x&lt;0$"
    ],
    "answer": 3,
    "explain": "Vì $\\pi&lt;x&lt;\\dfrac{3\\pi}{2}$ nên cung $x$ thuộc góc phần tư thứ III.  <br>  Trong góc phần tư thứ III, ta có $\\sin x&lt;0$, $\\cos x&lt;0$, $\\tan x&gt;0$ và $\\cot x&gt;0$.  <br>  Vậy khẳng định đúng là $\\sin x&lt;0$."
  },
  {
    "id": "1D122TN41",
    "question": "Cho $\\cos x=\\dfrac{4}{5}$ với $x\\in \\left(-\\dfrac{\\pi}{2};0\\right)$. Giá trị của $\\sin2x$ bằng",
    "options": [
      "$\\dfrac{24}{25}$",
      "$-\\dfrac{24}{25}$",
      "$-\\dfrac{1}{5}$",
      "$\\dfrac{1}{5}$"
    ],
    "answer": 1,
    "explain": "Vì $x\\in \\left(-\\dfrac{\\pi}{2};0\\right)$ nên $\\sin x &lt;0$.<br>  Khi đó $\\sin x =-\\sqrt{1-\\cos^2x}=-\\sqrt{1-\\left(\\dfrac{4}{5}\\right)^2}=-\\dfrac{3}{5}$.<br>  Suy ra $\\sin2x=2\\sin x\\cdot \\cos x=2\\cdot \\dfrac{4}{5}\\cdot \\left(-\\dfrac{3}{5}\\right)=-\\dfrac{24}{25}$."
  },
  {
    "id": "1D121TN42",
    "question": "Cho $\\alpha$ là góc lượng giác, trong các khẳng định sau khẳng định nào đúng?",
    "options": [
      "$\\sin (\\pi-\\alpha)=\\cos \\alpha$",
      "$\\sin (\\pi-\\alpha)=-\\sin \\alpha$",
      "$\\sin (\\pi-\\alpha)=-\\cos \\alpha$",
      "$\\sin (\\pi-\\alpha)=\\sin \\alpha$"
    ],
    "answer": 3,
    "explain": "Ta có \\True $\\sin (\\pi-\\alpha)=\\sin \\alpha$."
  },
  {
    "id": "1D122TN43",
    "question": "Cho $\\dfrac{\\pi}{2} &lt; x &lt; \\pi$. Khẳng định nào sau đây đúng?",
    "options": [
      "$\\cot x &gt; 0$",
      "$\\tan x &gt; 0$",
      "$\\sin x &gt; 0$",
      "$\\cos x &gt; 0$"
    ],
    "answer": 2,
    "explain": "Ta có $\\dfrac{\\pi}{2} &lt; x &lt; \\pi$ (góc phần từ thứ $2$) suy ra $\\sin x&gt;0$, $\\cos x&lt;0$.<br>  Do đó, $\\tan x&lt;0$, $\\cot x&lt;0$."
  },
  {
    "id": "1D122TN44",
    "question": "Cho góc $\\alpha$ thỏa mãn $\\pi&lt;\\alpha&lt;\\dfrac{3\\pi}{2}$. Khẳng định nào sau đây là đúng?",
    "options": [
      "$\\sin\\alpha&gt;0,\\ \\tan\\alpha&gt;0$",
      "$\\sin\\alpha&lt;0,\\ \\tan\\alpha&gt;0$",
      "$\\sin\\alpha&lt;0,\\ \\tan\\alpha&lt;0$",
      "$\\sin\\alpha&gt;0,\\ \\tan\\alpha&lt;0$"
    ],
    "answer": 1,
    "explain": "Vì $\\pi&lt;\\alpha&lt;\\dfrac{3\\pi}{2}$ nên $\\alpha$ thuộc góc phần tư III.  Do đó $\\sin\\alpha&lt;0$ và $\\tan\\alpha&gt;0$."
  },
  {
    "id": "1D122TN45",
    "question": "Cho góc $\\alpha=\\widehat {xOM}$ với điểm $M\\left(-\\dfrac{1}{2};\\dfrac{\\sqrt3}{2}\\right)$ trên đường tròn đơn vị. Giá trị lượng giác của $\\sin\\alpha$ là",
    "options": [
      "$-\\dfrac{1}{2}$",
      "$\\dfrac{\\sqrt3}{2}$",
      "$-1$",
      "$-\\dfrac{1}{\\sqrt3}$"
    ],
    "answer": 1,
    "explain": "Trên đường tròn đơn vị, tung độ của điểm $M$ chính là $\\sin\\alpha$.  Do đó $\\sin\\alpha=\\dfrac{\\sqrt3}{2}$."
  },
  {
    "id": "1D122TN46",
    "question": "Cho $\\alpha$ thỏa mãn $90^\\circ&lt;\\alpha&lt;180^\\circ$. Khẳng định nào sau đây là đúng?",
    "options": [
      "$\\tan\\alpha &gt; 0$",
      "$\\cot\\alpha &gt; 0$",
      "$\\cos\\alpha &gt; 0$",
      "$\\sin\\alpha &gt; 0$"
    ],
    "answer": 3,
    "explain": "Với $90^\\circ&lt;\\alpha&lt;180^\\circ$ (góc phần tư thứ II), ta có:  $\\sin\\alpha &gt; 0$; $\\cos\\alpha &lt; 0$; $\\tan\\alpha &lt; 0$; $\\cot\\alpha &lt; 0$."
  },
  {
    "id": "1D121TN47",
    "question": "Hãy chọn khẳng định đúng trong các khẳng định dưới đây.",
    "options": [
      "$1+\\tan^2 x=\\dfrac{1}{\\sin^2 x}$",
      "$1+\\tan^2 x=\\dfrac{1}{\\cos^2 x}$",
      "$1-\\tan^2 x=\\dfrac{1}{\\sin^2 x}$",
      "$1+\\tan^2 x=\\dfrac{1}{\\cos x}$"
    ],
    "answer": 1,
    "explain": "Ta có $1+\\tan^2 x=\\dfrac{1}{\\cos^2 x}$."
  },
  {
    "id": "1D122TN48",
    "question": "Trên đường tròn lượng giác cho điểm $M\\left(\\dfrac{3}{4};\\dfrac{\\sqrt{7}}{4}\\right)$. Tính $\\sin$ của góc lượng giác $(OA;OM)$.<br><img src=\"data/11/1D1/im1D1/1D12_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$\\dfrac{\\sqrt{7}}{4}$",
      "$\\dfrac{3}{\\sqrt{7}}$",
      "$\\dfrac{3}{4}$",
      "$\\dfrac{\\sqrt{7}}{3}$"
    ],
    "answer": 0,
    "explain": "Ta có $\\sin(OA;OM) = y_M=\\dfrac{\\sqrt{7}}{4}$."
  },
  {
    "id": "1D122TN49",
    "question": "Cho góc $ x$ thoả $0^\\circ &lt; x &lt;90^\\circ$. Trong các mệnh đề sau, mệnh đề nào &lt;strong&gt;sai&lt;/strong&gt;?",
    "options": [
      "$\\cos x &lt; 0$",
      "$\\sin x &gt; 0$",
      "$\\tan x &gt; 0$",
      "$\\cot x &gt; 0$"
    ],
    "answer": 0,
    "explain": "Do $0^\\circ &lt; x &lt;90^\\circ$ nên $ \\cos x&gt;0 $ dẫn đến $ \\cos x&lt;0 $ là mệnh đề sai."
  },
  {
    "id": "1D122TN50",
    "question": "Cho góc $\\alpha$ thoả mãn $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$. Khẳng định nào sau đây là đúng?",
    "options": [
      "$\\cos\\alpha &gt; 0$",
      "$\\cot\\alpha &gt; 0$",
      "$\\tan\\alpha &gt; 0$",
      "$\\sin\\alpha &gt; 0$"
    ],
    "answer": 3,
    "explain": "Góc $\\alpha$ thuộc góc phần tư thứ II. Ở đó, $\\sin\\alpha &gt; 0$, các giá trị lượng giác khác âm."
  },
  {
    "id": "1D124TN51",
    "question": "Với mọi $\\alpha \\ne \\dfrac{\\pi}{2}+k\\pi$, $k \\in \\mathbb{Z}$, $\\tan(3\\pi+\\alpha)$ bằng",
    "options": [
      "$-\\tan\\alpha$",
      "$\\cot\\alpha$",
      "$\\tan\\alpha$",
      "$-\\cot\\alpha$"
    ],
    "answer": 2,
    "explain": "Ta có $\\tan(3\\pi+\\alpha) = \\tan[(\\pi+\\alpha)+2\\pi] = \\tan(\\pi+\\alpha) = \\tan\\alpha$."
  },
  {
    "id": "1D122TN52",
    "question": "Bạn An đứng ở vị trí $A$, bạn Bình đứng ở vị trí $B$ và giữa họ có cột đèn ở vị trí $O$ mà $A$, $O$, $B$ nằm trên một đường thẳng. Trong điều kiện buổi tối và đèn tỏa ánh sáng ở vị trí $T$, thì có thể thấy bóng đổ $AM$ của bạn An trên mặt đất với $M$, $A$, $O$ thẳng hàng (xem hình minh họa bên dưới).  <br><img src=\"data/11/1D1/im1D1/1D12_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hỏi nếu biết $\\widehat{TAO}=55^\\circ, \\widehat{TBO}=65^\\circ$, khoảng cách giữa hai bạn An và Bình là $AB=10$\\,m và bạn An cao $AX=1{,}78$\\,m thì tỉ số $\\dfrac{MO}{MA}$ có giá trị thuộc khoảng nào sau đây?",
    "options": [
      "$(4;5)$",
      "$(2;3)$",
      "$(5;6)$",
      "$(3;4)$"
    ],
    "answer": 0,
    "explain": "Đặt $OA=x_1$; $OB=x_2$ và $OT=h$.<br>  Vì $\\triangle TAO$ vuông tại $O$ nên ta có $OT=OA\\cdot \\tan\\widehat{TAO}$ hay $h=x_1\\cdot \\tan 55^\\circ\\Rightarrow x_1=\\dfrac{h}{\\tan 55^\\circ}$.  <br>  Tương tự với $\\triangle TBO$, ta cũng có $x_2=\\dfrac{h}{\\tan 65^\\circ}$.  <br>  Vì $AB=AO+OB=10$\\,m nên ta có  $x_1+x_2=10$<br>$\\Leftrightarrow \\dfrac{h}{\\tan 55^\\circ}+\\dfrac{h}{\\tan 65^\\circ}=10$<br>$\\Leftrightarrow h\\left(\\dfrac{1}{\\tan 55^\\circ}+\\dfrac{1}{\\tan 65^\\circ}\\right)=10$<br>$\\Leftrightarrow h=\\dfrac{10}{\\dfrac{1}{\\tan 55^\\circ}+\\dfrac{1}{\\tan 65^\\circ}}\\ (\\text{m}).$  Vì bóng đổ $AM$ của bạn An trên mặt đất với $M$, $A$, $O$ thẳng hàng nên ta có \\[\\dfrac{MO}{MA}=\\dfrac{OT}{TA}=\\dfrac{h}{1{,}78}\\approx 4{,}8 \\in (4;5).\\]"
  },
  {
    "id": "1D122TN53",
    "question": "Cho $\\sin\\alpha=\\dfrac{4}{5}$ và $\\dfrac{\\pi}{2}&lt;\\alpha &lt;\\pi$. Tính $\\cos\\alpha$.",
    "options": [
      "$\\dfrac{3}{5}$",
      "$-\\dfrac{3}{5}$",
      "$-\\dfrac{1}{5}$",
      "$\\dfrac{1}{5}$"
    ],
    "answer": 1,
    "explain": "Ta có   $\\cos^2\\alpha =1- \\sin^2\\alpha= 1 - \\left(\\dfrac{4}{5}\\right)^2 = 1 - \\dfrac{16}{25} = \\dfrac{9}{25}\\Leftrightarrow \\cos\\alpha = \\pm\\sqrt{\\dfrac{9}{25}} = \\pm\\dfrac{3}{5}.$  Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\cos\\alpha &lt; 0$, suy ra $\\cos\\alpha = -\\dfrac{3}{5}$."
  },
  {
    "id": "1D122TN54",
    "question": "Cho góc $\\alpha$ thỏa mãn $\\cot \\alpha=2$ và $-\\pi &lt; \\alpha &lt;-\\dfrac{\\pi}{2}$. Giá trị của $\\sin \\alpha$ bằng",
    "options": [
      "$-\\dfrac{2\\sqrt{5}}{5}$",
      "$\\dfrac{\\sqrt{5}}{5}$",
      "$\\dfrac{2\\sqrt{5}}{5}$",
      "$-\\dfrac{\\sqrt{5}}{5}$"
    ],
    "answer": 3,
    "explain": "Ta có $\\cot^2{\\alpha} + 1 = \\dfrac{1}{\\sin^2{\\alpha}} \\Leftrightarrow \\sin^2{\\alpha} = \\dfrac{1}{2^2 +1} = \\dfrac{1}{5} \\Leftrightarrow \\sin \\alpha = \\pm \\dfrac{\\sqrt{5}}{5}$. <br>  Do $-\\pi &lt; \\alpha &lt;-\\dfrac{\\pi}{2}$ nên $\\sin\\alpha &lt; 0$. <br>  Vậy $\\sin\\alpha = -\\dfrac{\\sqrt{5}}{5}$"
  },
  {
    "id": "1D122TN55",
    "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = -1 \\text{ và } u_{n+1} = u_n + 3$. Ba số hạng đầu tiên của dãy số đó là",
    "options": [
      "$4; 7; 10$",
      "$-1; 3; 7$",
      "$1; 4; 7$",
      "$-1; 2; 5$"
    ],
    "answer": 3,
    "explain": "Ta có $u_{n+1}-u_n=3$ nên dãy số đã cho là cấp số cộng có $u_1=-1$, công sai $d=3$.<br>  Do đó ba số hạng đầu tiên của dãy số đó là $-1; 2; 5$."
  },
  {
    "id": "1D122TN56",
    "question": "Cho $\\tan \\alpha=\\sqrt{5}$, với $\\pi &lt; \\alpha &lt; \\dfrac{3\\pi}{2}$. Khi đó $\\cos \\alpha$ bằng",
    "options": [
      "$-\\dfrac{\\sqrt{6}}{6}$",
      "$\\dfrac{1}{6}$",
      "$\\sqrt{6}$",
      "$\\dfrac{\\sqrt{6}}{6}$"
    ],
    "answer": 0,
    "explain": "Ta có $\\pi &lt; \\alpha &lt; \\dfrac{3\\pi}{2}$, suy ra $\\alpha$ thuộc góc phần tư thứ III.<br>  Trong góc phần tư thứ III, $\\cos \\alpha &lt; 0$.<br>  Áp dụng công thức   $1+\\tan^2 \\alpha=\\dfrac{1}{\\cos^2 \\alpha}.$<br>$\\Leftrightarrow \\dfrac{1}{\\cos^2 \\alpha}=1+(\\sqrt{5})^2=1+5=6.$<br>$\\Leftrightarrow \\cos^2 \\alpha=\\dfrac{1}{6}.$<br>$\\Leftrightarrow \\cos \\alpha =-\\dfrac{\\sqrt{6}}{6}.$"
  },
  {
    "id": "1D122TN57",
    "question": "Cho $M\\left(-\\dfrac{1}{2} ; \\dfrac{\\sqrt{3}}{2}\\right)$ là điểm trên đường tròn lượng giác, biểu diễn góc lượng giác có số đo $\\alpha$. Khi đó, giá trị của $\\sin \\alpha$ bằng",
    "options": [
      "$-\\dfrac{1}{2}$",
      "$\\dfrac{\\sqrt{3}}{2}$",
      "$-\\dfrac{1}{\\sqrt{3}}$",
      "$-\\sqrt{3}$"
    ],
    "answer": 1,
    "explain": "Trên đường tròn lượng giác, tọa độ của điểm $M(x;y)$ biểu diễn góc $\\alpha$ thỏa mãn  $  \\begin{cases}  \\cos \\alpha = x \\\\  \\sin \\alpha = y.  \\end{cases}  $<br>  Điểm $M\\left(-\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$ biểu diễn góc lượng giác có số đo $\\alpha$, nên $\\sin \\alpha = \\dfrac{\\sqrt{3}}{2}$."
  },
  {
    "id": "1D122TN58",
    "question": "Cho góc $\\alpha$ thoả mãn $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$. Khẳng định nào sau đây <strong>đúng</strong>?",
    "options": [
      "$\\sin \\alpha &gt; 0$",
      "$\\cos \\alpha &gt; 0$",
      "$\\tan \\alpha &gt; 0$",
      "$\\cot \\alpha &gt; 0$"
    ],
    "answer": 0,
    "explain": "Vì $\\dfrac{\\pi}{2} &lt; \\alpha &lt; \\pi$ nên $\\sin \\alpha &gt; 0$."
  },
  {
    "id": "1D121TN59",
    "question": "Khẳng định nào sau đây <strong>đúng</strong>?",
    "options": [
      "$\\sin(-11^\\circ) = \\sin 11^\\circ$",
      "$\\cos(-11^\\circ) = \\cos 11^\\circ$",
      "$\\tan(-11^\\circ) = \\tan 11^\\circ$",
      "$\\cot(-11^\\circ) = \\cot 11^\\circ$"
    ],
    "answer": 1,
    "explain": "Ta có $\\cos(-11^\\circ) = \\cos 11^\\circ$."
  },
  {
    "id": "1D124TN52",
    "question": "Biết $\\sin a=\\dfrac{1}{2}$ giá trị của $\\sin (\\pi-a)$ là",
    "options": [
      "$\\sin (\\pi-\\alpha)=\\dfrac{1}{2}$",
      "$\\sin (\\pi-a)=-\\dfrac{1}{2}$",
      "$\\sin (\\pi-a)=-\\dfrac{\\sqrt{3}}{2}$",
      "$\\sin (\\pi-a)=\\dfrac{\\sqrt{3}}{2}$"
    ],
    "answer": 0,
    "explain": "Ta có $\\sin (\\pi-\\alpha)=\\sin \\alpha =\\dfrac{1}{2}$."
  },
  {
    "id": "1D121TN2",
    "question": "Cho $\\dfrac{\\pi}{2} &lt; x &lt; \\pi$, khẳng định nào sau đây là đúng?",
    "options": [
      "$\\tan x &gt; 0$",
      "$\\cos x &gt; 0$",
      "$\\sin x &gt; 0$",
      "$\\cot x &gt; 0$"
    ],
    "answer": 2,
    "explain": "Ta có $\\dfrac{\\pi}{2} &lt; x &lt; \\pi$. Do dó $\\sin x&gt;0$."
  },
  {
    "id": "1D122TN3",
    "question": "Biết $\\tan\\alpha=2$ và $0&lt; \\alpha &lt; \\dfrac{\\pi}{2}$. Tính $\\cos\\alpha$.",
    "options": [
      "$\\cos\\alpha=\\dfrac{\\sqrt{3}}{3}$",
      "$\\cos\\alpha=-\\dfrac{\\sqrt{5}}{5}$",
      "$\\cos\\alpha=\\dfrac{1}{2}$",
      "$\\cos\\alpha=\\dfrac{\\sqrt{5}}{5}$"
    ],
    "answer": 3,
    "explain": "Ta có  $1+\\tan^2\\alpha=\\dfrac{1}{\\cos^2\\alpha}$<br>$\\Rightarrow \\cos^2\\alpha=\\dfrac{1}{1+\\tan^2\\alpha}=\\dfrac{1}{1+2^2}=\\dfrac{1}{5}$<br>$\\Rightarrow \\cos\\alpha =\\dfrac{\\sqrt{5}}{5} (\\text{nhận}) \\text{ hoặc } \\cos\\alpha =-\\dfrac{\\sqrt{5}}{5} (\\text{loại}) \\left(\\text{vì}~0 lt; \\alpha lt; \\dfrac{\\pi}{2}\\right).$"
  },
  {
    "id": "1D122TN1",
    "question": "Cho góc lượng giác $\\alpha$ thỏa mãn $\\sin \\alpha=-\\dfrac{4}{5}$ và $\\pi &lt; \\alpha &lt; \\dfrac{3\\pi}{2}$. Giá trị của $\\cos \\alpha$ bằng",
    "options": [
      "$-\\dfrac{3}{5}$",
      "$-\\dfrac{3}{25}$",
      "$\\dfrac{9}{25}$",
      "$\\dfrac{3}{5}$"
    ],
    "answer": 0,
    "explain": "Ta có   $\\cos^2\\alpha =1-\\sin^2\\alpha$<br>$=1-\\left(-\\dfrac{4}{5}\\right)^2$<br>$=\\dfrac{9}{25}.$  Suy ra $\\cos x=\\dfrac{3}{5} \\text{ hoặc } \\cos x=-\\dfrac{3}{5}.$<br>  Vì $\\pi &lt; \\alpha &lt; \\dfrac{3\\pi}{2}$ nên $\\cos x=-\\dfrac{3}{5}$."
  },
  {
    "id": "1D124TN2",
    "question": "Trong các khẳng định dưới đây, khẳng định nào sai?",
    "options": [
      "$\\sin (\\pi-\\alpha)=\\sin \\alpha$",
      "$\\cos (\\pi+\\alpha)=\\cos \\alpha$",
      "$\\sin (\\pi+\\alpha)=-\\sin \\alpha$",
      "$\\cos (\\pi-\\alpha)=-\\cos \\alpha$"
    ],
    "answer": 1,
    "explain": "Ta có $\\cos (\\pi+\\alpha)=-\\cos \\alpha$ nên khẳng định sai là $\\cos (\\pi+\\alpha)=\\cos \\alpha$."
  },
  {
    "id": "1D122TN59",
    "question": "Cho góc lượng giác $\\alpha$ thỏa mãn $\\dfrac{3\\pi}{2} &lt; \\alpha &lt; 2\\pi$. Khẳng định nào dưới đây đúng?",
    "options": [
      "$\\sin \\alpha &gt; 0$",
      "$\\tan \\alpha &gt; 0$",
      "$\\cot \\alpha &gt; 0$",
      "$\\cos \\alpha &gt; 0$"
    ],
    "answer": 3,
    "explain": "Vì $\\dfrac{3\\pi}{2} &lt; \\alpha &lt; 2\\pi$ nên $\\sin \\alpha &lt; 0$, $\\tan \\alpha &lt; 0$, $\\cot \\alpha &lt; 0$, $\\cos \\alpha &gt; 0$."
  },
  {
    "id": "1D122TN60",
    "question": "Cho $\\tan x=4$. Giá trị của $\\cot x$ là",
    "options": [
      "$\\dfrac{1}{4}$",
      "$\\dfrac{1}{2}$",
      "$-\\dfrac{1}{2}$",
      "$-\\dfrac{1}{4}$"
    ],
    "answer": 0,
    "explain": "Ta có $\\cot x=\\dfrac{1}{\\tan x}=\\dfrac{1}{4}$."
  },
  {
    "id": "1D124TN3",
    "question": "Với mọi góc lượng giác $\\alpha$ và số nguyên $k$. Khẳng định nào sau đây <strong>sai</strong>?",
    "options": [
      "$\\cos(\\alpha+k 2\\pi)=\\cos \\alpha$",
      "$\\sin(\\alpha+k \\pi)=\\sin \\alpha$",
      "$\\tan(\\alpha+k \\pi)=\\tan \\alpha$",
      "$\\cot(\\alpha+k \\pi)=\\cot \\alpha$"
    ],
    "answer": 1,
    "explain": "Ta có $\\sin(\\alpha+k2 \\pi)=\\sin \\alpha$ nên khẳng định $\\sin(\\alpha+k \\pi)=\\sin \\alpha$ là sai."
  },
  {
    "id": "1D124TN16",
    "question": "Cho góc lượng giác $x$. Đẳng thức lượng nào dưới đây <strong>sai</strong>?",
    "options": [
      "$\\sin(\\pi-x)=\\sin x$",
      "$\\tan (\\pi+x)=\\tan x$",
      "$\\cos\\left(\\dfrac{\\pi}{2}-x\\right)=\\sin x$",
      "$\\cos(-x)=-\\cos x$"
    ],
    "answer": 3,
    "explain": "Ta có $\\cos(-x)=\\cos x$ nên đẳng thức sai là $\\cos(-x)=-\\cos x$."
  },
  {
    "id": "1D122TN61",
    "question": "Cho góc $x$ biết $0 &lt; x &lt; \\dfrac{\\pi}{2}$. Mệnh đề nào sau đây <strong>sai</strong>?",
    "options": [
      "$\\tan x &gt; 0$",
      "$\\cos x &gt; 0$",
      "$\\cot x &lt; 0$",
      "$\\sin x &gt; 0$"
    ],
    "answer": 2,
    "explain": "Vì $0 &lt; x &lt; \\dfrac{\\pi}{2}$ nên $x$ thuộc góc phần tư thứ nhất.<br>   Khi đó $\\sin x &gt; 0$, $\\cos x &gt; 0$ nên $\\tan x &gt; 0$ và $\\cot x &gt; 0$.<br>   Do đó mệnh đề $\\cot x &lt; 0$ là mệnh đề sai."
  },
  {
    "id": "1D121TN18",
    "question": "Cho $0&lt; \\alpha &lt; \\dfrac{\\pi}{2}$. Khẳng định nào sau đây <strong>đúng</strong>?",
    "options": [
      "$\\cot\\alpha &lt; 0$",
      "$\\sin\\alpha &gt; 0$",
      "$\\tan\\alpha &lt; 0$",
      "$\\cos\\alpha &lt; 0$"
    ],
    "answer": 1,
    "explain": "Do $0&lt; \\alpha &lt; \\dfrac{\\pi}{2}$ thuộc vào góc phần tư thứ nhất của đường tròn lượng giác nên $\\sin \\alpha &gt;0$."
  },
  {
    "id": "1D124TN25",
    "question": "Khẳng định nào dưới đây <strong>sai</strong>?",
    "options": [
      "$\\cos(\\pi - \\alpha) = -\\cos \\alpha$",
      "$\\tan(\\pi + \\alpha) = \\tan \\alpha$",
      "$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos \\alpha$",
      "$\\cos(-\\alpha) = -\\cos \\alpha$"
    ],
    "answer": 3,
    "explain": "Khẳng định sai là $\\cos(-\\alpha) = -\\cos \\alpha$ vì $\\cos(-\\alpha) = \\cos \\alpha$."
  },
  {
    "id": "1D121TN28",
    "question": "Cho $\\alpha$ thuộc góc phần tư II của đường tròn lượng giác. Khẳng định nào dưới đây <strong>đúng</strong>?",
    "options": [
      "$\\sin \\alpha &gt; 0; \\cot \\alpha &gt; 0$",
      "$\\sin \\alpha &gt; 0; \\cos \\alpha &lt; 0$",
      "$\\sin \\alpha &gt; 0; \\cos \\alpha &gt; 0$",
      "$\\tan \\alpha &gt; 0; \\cot \\alpha &gt; 0$"
    ],
    "answer": 1,
    "explain": "Góc $\\alpha$ thuộc góc phần tư thứ II nên  <br>- Tung độ dương $\\Rightarrow \\sin \\alpha &gt; 0$.<br>- Hoành độ âm $\\Rightarrow \\cos \\alpha &lt; 0$."
  },
  {
    "id": "1D121TN50",
    "question": "Cho góc $ x$ thoả $0^\\circ &lt; x &lt;90^\\circ$. Trong các mệnh đề sau, mệnh đề nào <strong>sai</strong>?",
    "options": [
      "$\\cos x &lt; 0$",
      "$\\sin x &gt; 0$",
      "$\\tan x &gt; 0$",
      "$\\cot x &gt; 0$"
    ],
    "answer": 0,
    "explain": "Do $0^\\circ &lt; x &lt;90^\\circ$ nên $ \\cos x&gt;0 $ dẫn đến $ \\cos x&lt;0 $ là mệnh đề sai."
  }
];
