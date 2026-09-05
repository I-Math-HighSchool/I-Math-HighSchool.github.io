// =========================================================================
// KHỐI DỮ LIỆU: 1H82 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1H82 = [
  {
    "id": "1H824DS1",
    "question": "Cho hình chóp $S.ABCD$ có $SA\\perp \\left(ABCD\\right)$, $ABCD$ là hình vuông cạnh $a$, $SA=a\\sqrt{3}$. Điểm $E$ thuộc cạnh $SB$ sao cho $AE\\perp EC$.",
    "subQuestions": [
      {
        "text": "$BC\\perp SA$",
        "answer": true
      },
      {
        "text": "Tam giác $SAD$ vuông cân tại $S$",
        "answer": false
      },
      {
        "text": "$AC\\perp \\left(SBD\\right)$",
        "answer": false
      },
      {
        "text": "Tỉ số $\\dfrac{SE}{SB}=0{,}75$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS21_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>. Ta có $SA\\perp (ABCD)$ suy ra $SA\\perp BC$.<br>- <strong>Sai</strong>. Ta có $SA\\perp (ABCD)$ suy ra $SA\\perp AD$. Do đó $\\triangle SAD$ vuông tại $A$.<br>- <strong>Sai</strong>. Giả sử $AC\\perp (SBD)$ suy ra $AC\\perp SB$. <br>  Ta có $BC\\perp AB$, $BC\\perp SA$ suy ra $BC\\perp (SAB)$. Do đó $BC\\perp SB$. <br>  Mà $AC\\perp SB$ nên $SB\\perp (ABCD)$ (vô lý). <br>  Vậy $AC$ không vuông góc với $(SBD)$.<br>- <strong>Đúng</strong>. Ta có $BC\\perp (SAB)$, $AE\\subset (SAB)$ suy ra $BC\\perp AE$. <br>  Mà $AE\\perp CE$ nên $AE\\perp (SBC)$. Do đó $AE\\perp SB$. <br>  Ta có $SB = \\sqrt{SA^2 + AB^2} = \\sqrt{(a\\sqrt{3})^2 + a^2} = 2a$. <br>  Xét tam giác $SAB$ vuông tại $A$ có đường cao $AE$, ta có  $\\dfrac{SE}{SB} = \\dfrac{SE\\cdot SB}{SB^2} = \\dfrac{SA^2}{SB^2} = \\dfrac{(a\\sqrt{3})^2}{(2a)^2} = \\dfrac{3}{4}=0{,}75.$"
  },
  {
    "id": "1H824DS2",
    "question": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$. Biết $SA = \\dfrac{3a}{2}$ và $SA$ vuông góc với mặt đáy. Gọi $M$ là trung điểm của $BC$ và $H$ là hình chiếu vuông góc của $A$ lên $SM$.",
    "subQuestions": [
      {
        "text": "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAM)$",
        "answer": true
      },
      {
        "text": "Đường thẳng $SH$ là hình chiếu của đường thẳng $SA$ lên mặt phẳng $(SBC)$",
        "answer": true
      },
      {
        "text": "Góc giữa hai mặt phẳng $(SBC)$ và $(ABC)$ là góc $\\widehat{ASM}$",
        "answer": false
      },
      {
        "text": "Góc phẳng nhị diện $[S;BC;A]$ bằng $60^{\\circ}$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D8/im1H82/dlts_11_DLTS28_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Vì tam giác $ABC$ đều có $M$ là trung điểm của $BC$ nên $AM \\perp BC$.<br>  Ta có $AM \\perp BC \\text{ và } SA \\perp BC \\text{ và } \\text{Trong } (SAM), AM \\cap SM=M\\Rightarrow BC \\perp (SAM)$.<br>- Ta có $AH \\perp SM \\text{ và } AH \\perp BC \\text{ và } \\text{Trong } (SBC), BC \\cap SM=M\\Rightarrow AH \\perp (SBC)$.<br> Suy ra $H$ là hình chiếu của $A$ lên $(SBC)$.<br>  Mà $SA \\cap (SBC)=S$ nên $SH$ là hình chiếu của $SA$ lên $(SBC)$.<br>- Ta có $(ABC) \\cap (SBC)=BC \\text{ và } \\text{Trong } (ABC), AM\\perp BC \\text{ và } \\text{Trong } (SBC), SM\\perp BC \\Rightarrow ((SBC),(ABC))=(AM,SM)=\\widehat{SMA}$.<br>- Ta có $SM \\perp BC$ và $AM \\perp BC$, suy ra $\\widehat{SMA}$ là góc phẳng nhị diện $\\left[S;BC;A\\right]$.<br>  Xét tam giác $SAM$ vuông tại $A$ có $\\tan \\widehat{SMA}=\\dfrac{SA}{AM}=\\dfrac{\\dfrac{3a}{2}}{\\dfrac{a\\sqrt{3}}{2}}=\\sqrt{3}\\Rightarrow \\widehat{SMA}=60^{\\circ}$."
  }
];
