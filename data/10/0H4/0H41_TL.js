// =========================================================================
// KHỐI DỮ LIỆU: 0H41 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan0H41 = [
  {
    "id": "0H413TL1",
    "question": "Biết $a \\in \\left(0^\\circ; 180^\\circ\\right)$ và $\\tan a=-3$. Tính giá trị biểu thức $P=\\dfrac{3\\cos^2 a+3\\sin a\\cdot \\cos a}{\\cos^2 a+1}$ (kết quả làm tròn đến hàng phần chục).",
    "answer": "-0,5",
    "explain": "Ta có $\\cos^2 a=\\dfrac{1}{1+\\tan^2a}=\\dfrac{1}{1+9}=\\dfrac{1}{10}$.<br>Và $\\sin a\\cdot\\cos a=\\tan a\\cdot\\cos^2a=-3\\cdot\\dfrac{1}{10}=-\\dfrac{3}{10}$.<br>Suy ra $3\\cos^2a+3\\sin a\\cdot\\cos a=3\\cdot\\dfrac{1}{10}-3\\cdot\\dfrac{3}{10}=-\\dfrac{6}{10}=-\\dfrac{3}{5}$.<br>Và $\\cos^2a+1=\\dfrac{1}{10}+1=\\dfrac{11}{10}$.<br>Vậy $P=\\dfrac{-\\frac{3}{5}}{\\frac{11}{10}}=-\\dfrac{6}{11}\\approx -0{,}5$."
  },
  {
    "id": "0H412TL1",
    "question": "Cho $\\cos \\alpha = -\\dfrac{3}{5}$ và $90^\\circ &lt; \\alpha &lt; 180^\\circ$. Tính $A = \\cos^2 \\alpha + 2\\sin^2 \\alpha$.",
    "answer": "1,64",
    "explain": "Ta có $\\cos^2 \\alpha + \\sin^2 \\alpha = 1 \\Rightarrow \\sin^2 \\alpha = 1 - \\cos^2 \\alpha = 1 - \\left(-\\dfrac{3}{5}\\right)^2 = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$.<br>  Vậy $A = \\cos^2 \\alpha + 2\\sin^2 \\alpha = \\left(-\\dfrac{3}{5}\\right)^2 + 2 \\cdot \\dfrac{16}{25}  = \\dfrac{41}{25} = 1{,}64$."
  },
  {
    "id": "0H412TL2",
    "question": "Cho $\\cot \\alpha=2$. Tính $B=\\dfrac{2\\sin \\alpha+3\\cos \\alpha}{3\\sin ^3\\alpha-\\cos ^3\\alpha}$.",
    "answer": "-8",
    "explain": "Ta có $\\cot \\alpha=2$ nên $\\sin \\alpha\\ne 0$.<br>  Khi đó   $B =\\dfrac{2\\sin \\alpha+3\\cos \\alpha}{3\\sin ^3\\alpha-\\cos ^3\\alpha}$<br>$=\\dfrac{\\dfrac{2\\sin \\alpha+3\\cos \\alpha}{\\sin^3 \\alpha}}{\\dfrac{3\\sin ^3\\alpha-\\cos ^3\\alpha}{\\sin^3 \\alpha}}$<br>$=\\dfrac{\\dfrac{1}{\\sin^2 \\alpha}\\left(2+\\dfrac{3\\cos \\alpha}{\\sin \\alpha}\\right)}{3-\\cot^3 \\alpha}$<br>$=\\dfrac{\\left(1+\\cot^2 \\alpha\\right)\\cdot (2+3\\cot \\alpha)}{3-\\cot^3 \\alpha}$<br>$=\\dfrac{(1+2^2)\\cdot (2+3\\cdot 2)}{3-2^3}$<br>$=-8.$"
  }
];
