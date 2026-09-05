
// =========================================================================
// 0. TỰ ĐỘNG NẠP TOÀN BỘ FILE DỮ LIỆU CÂU HỎI (data/manifest.js)
// Trước đây index.html chỉ nạp cứng 1 file data/12/2D1/2D1_1.js nên các
// chuyên đề khác không có câu hỏi. Giờ danh sách file được liệt kê trong
// data/manifest.js (nạp bằng <script>, KHÔNG dùng fetch()) nên vẫn mở được
// bằng cách double-click index.html như trước, không cần máy chủ HTTP.
// =========================================================================
function napMotFileDuLieu(src) {
    return new Promise((resolve) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = () => resolve({ src, ok: true });
        s.onerror = () => { console.warn('Không nạp được file dữ liệu:', src); resolve({ src, ok: false }); };
        document.body.appendChild(s);
    });
}

async function napToanBoNganHangCauHoi() {
    const btnGenerate = document.getElementById('btn-generate');
    const trangThai = document.getElementById('data-load-status');
    try {
        const danhSachFile = (window.NGAN_HANG_MANIFEST || []);
        if (danhSachFile.length === 0) {
            throw new Error('Không tìm thấy data/manifest.js (thiếu thẻ <script src="data/manifest.js"> trong index.html?)');
        }
        const ketQua = await Promise.all(danhSachFile.map(f => napMotFileDuLieu('data/' + f)));
        const soLoi = ketQua.filter(r => !r.ok).length;
        if (trangThai) {
            trangThai.textContent = soLoi > 0
                ? `Đã nạp ${ketQua.length - soLoi}/${ketQua.length} file dữ liệu (có ${soLoi} file lỗi, xem Console).`
                : `Đã nạp xong ${ketQua.length} file dữ liệu câu hỏi.`;
        }
    } catch (e) {
        console.error('Lỗi khi nạp ngân hàng câu hỏi:', e);
        if (trangThai) trangThai.textContent = 'Lỗi khi nạp ngân hàng câu hỏi (xem Console).';
    } finally {
        if (btnGenerate) btnGenerate.disabled = false;
    }
}
napToanBoNganHangCauHoi();

// =========================================================================
// 1. DANH MỤC CHƯƠNG THEO TỪNG KHỐI LỚP (Mã chuẩn 4 ký tự đồng bộ QuyUocID)
// =========================================================================
const DanhMucChuong = {
    lop12: [
        { value: "Giua_Ki_I", text: "⭐ Đề ôn giữa học kì I (Hết Chương 1 Đại số)" },
        { value: "Cuoi_Ki_I", text: "⭐ Đề ôn cuối học kì I (Chương 1, 3 Đại số & Chương 2 Hình)" },
        { value: "Giua_Ki_II", text: "⭐ Đề ôn giữa học kì II (Nguyên hàm + PT Mặt phẳng, Mặt cầu)" },
        { value: "Cuoi_Ki_II", text: "⭐ Đề ôn cuối học kì II (Toàn bộ chương trình Học kì II)" },
        { value: "TONG_HOP", text: "⭐ ĐỀ THI THỬ TỔNG HỢP TOÁN THPT QUỐC GIA" },

        { value: "2D11", text: "Lớp 12 ➔ C1 ➔ §1. Sự đồng biến và nghịch biến của hàm số" },
        { value: "2D12", text: "Lớp 12 ➔ C1 ➔ §2. Cực trị của hàm số" },
        { value: "2D13", text: "Lớp 12 ➔ C1 ➔ §3. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số" },
        { value: "2D14", text: "Lớp 12 ➔ C1 ➔ §4. Đường tiệm cận của đồ thị hàm số" },
        { value: "2D15", text: "Lớp 12 ➔ C1 ➔ §5. Khảo sát sự biến thiên và vẽ đồ thị hàm số" },

        { value: "2H21", text: "Lớp 12 ➔ C2 ➔ §1. Véc-tơ và các phép toán véc-tơ trong không gian" },
        { value: "2H22", text: "Lớp 12 ➔ C2 ➔ §2. Tọa độ của điểm, véc-tơ và các biểu thức tọa độ" },

        { value: "2D31", text: "Lớp 12 ➔ C3 ➔ §1. Khoảng biến thiên và khoảng tứ phân vị mẫu số liệu ghép nhóm" },
        { value: "2D32", text: "Lớp 12 ➔ C3 ➔ §2. Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm" },

        { value: "2D41", text: "Lớp 12 ➔ C4 ➔ §1. Nguyên hàm của hàm số cơ bản" },
        { value: "2D42", text: "Lớp 12 ➔ C4 ➔ §2. Tích phân và các phương pháp tính" },
        { value: "2D43", text: "Lớp 12 ➔ C4 ➔ §3. Ứng dụng hình học và thực tế của tích phân" },

        { value: "2H51", text: "Lớp 12 ➔ C5 ➔ §1. Phương trình mặt phẳng trong không gian Oxyz" },
        { value: "2H52", text: "Lớp 12 ➔ C5 ➔ §2. Phương trình đường thẳng trong không gian Oxyz" },
        { value: "2H53", text: "Lớp 12 ➔ C5 ➔ §3. Phương trình mặt cầu trong không gian Oxyz" },

        { value: "2D61", text: "Lớp 12 ➔ C6 ➔ §1. Xác suất có điều kiện" },
        { value: "2D62", text: "Lớp 12 ➔ C6 ➔ §2. Công thức xác suất toàn phần và công thức Bayes" },
    ],
    lop11: [
        { value: "11_Giua_Ki_I", text: "⭐ Đề ôn giữa học kì I (Chương 1, 2)" },
        { value: "11_Cuoi_Ki_I", text: "⭐ Đề ôn cuối học kì I (Chương 1 → 4)" },
        { value: "11_Giua_Ki_II", text: "⭐ Đề ôn giữa học kì II (Chương 5, 6)" },
        { value: "11_Cuoi_Ki_II", text: "⭐ Đề ôn cuối học kì II (Chương 5 → 9)" },
        { value: "11_TONG_HOP", text: "⭐ ĐỀ THI THỬ TỔNG HỢP TOÁN LỚP 11" },

        { value: "1D11", text: "Lớp 11 ➔ C1 ➔ §1. Góc lượng giác" },
        { value: "1D12", text: "Lớp 11 ➔ C1 ➔ §2. Giá trị lượng giác của một góc lượng giác" },
        { value: "1D13", text: "Lớp 11 ➔ C1 ➔ §3. Các công thức lượng giác" },
        { value: "1D14", text: "Lớp 11 ➔ C1 ➔ §4. Hàm số lượng giác và đồ thị" },
        { value: "1D15", text: "Lớp 11 ➔ C1 ➔ §5. Phương trình lượng giác cơ bản" },
        { value: "1D16", text: "Lớp 11 ➔ C1 ➔ §6. Phương trình lượng giác thường gặp" },

        { value: "1D21", text: "Lớp 11 ➔ C2 ➔ §1. Dãy số" },
        { value: "1D22", text: "Lớp 11 ➔ C2 ➔ §2. Cấp số cộng" },
        { value: "1D23", text: "Lớp 11 ➔ C2 ➔ §3. Cấp số nhân" },

        { value: "1D31", text: "Lớp 11 ➔ C3 ➔ §1. Giới hạn của dãy số" },
        { value: "1D32", text: "Lớp 11 ➔ C3 ➔ §2. Giới hạn của hàm số" },
        { value: "1D33", text: "Lớp 11 ➔ C3 ➔ §3. Hàm số liên tục" },

        { value: "1H41", text: "Lớp 11 ➔ C4 ➔ §1. Điểm, đường thẳng và mặt phẳng trong không gian" },
        { value: "1H42", text: "Lớp 11 ➔ C4 ➔ §2. Hai đường thẳng song song" },
        { value: "1H43", text: "Lớp 11 ➔ C4 ➔ §3. Đường thẳng và mặt phẳng song song" },
        { value: "1H44", text: "Lớp 11 ➔ C4 ➔ §4. Hai mặt phẳng song song" },
        { value: "1H45", text: "Lớp 11 ➔ C4 ➔ §5. Hình lăng trụ và hình hộp" },
        { value: "1H46", text: "Lớp 11 ➔ C4 ➔ §6. Phép chiếu song song" },

        { value: "1D51", text: "Lớp 11 ➔ C5 ➔ §1. Số trung bình và mốt của mẫu số liệu ghép nhóm" },
        { value: "1D52", text: "Lớp 11 ➔ C5 ➔ §2. Trung vị và tứ phân vị của mẫu số liệu ghép nhóm" },

        { value: "1D61", text: "Lớp 11 ➔ C6 ➔ §1. Phép tính luỹ thừa" },
        { value: "1D62", text: "Lớp 11 ➔ C6 ➔ §2. Phép tính lôgarít" },
        { value: "1D63", text: "Lớp 11 ➔ C6 ➔ §3. Hàm số mũ. Hàm số lôgarít" },
        { value: "1D64", text: "Lớp 11 ➔ C6 ➔ §4. Phương trình, bất phương trình mũ và lôgarít" },
        { value: "1D65", text: "Lớp 11 ➔ C6 ➔ §5. Các phương pháp giải biến đổi nâng cao" },

        { value: "1D71", text: "Lớp 11 ➔ C7 ➔ §1. Định nghĩa đạo hàm và ý nghĩa hình học" },
        { value: "1D72", text: "Lớp 11 ➔ C7 ➔ §2. Các quy tắc tính đạo hàm" },
        { value: "1D73", text: "Lớp 11 ➔ C7 ➔ §3. Đạo hàm cấp hai" },

        { value: "1H81", text: "Lớp 11 ➔ C8 ➔ §1. Hai đường thẳng vuông góc" },
        { value: "1H82", text: "Lớp 11 ➔ C8 ➔ §2. Đường thẳng vuông góc với mặt phẳng" },
        { value: "1H83", text: "Lớp 11 ➔ C8 ➔ §3. Phép chiếu vuông góc" },
        { value: "1H84", text: "Lớp 11 ➔ C8 ➔ §4. Hai mặt phẳng vuông góc" },
        { value: "1H85", text: "Lớp 11 ➔ C8 ➔ §5. Khoảng cách trong không gian" },
        { value: "1H86", text: "Lớp 11 ➔ C8 ➔ §6. Góc giữa đường thẳng và mặt phẳng. Góc nhị diện" },
        { value: "1H87", text: "Lớp 11 ➔ C8 ➔ §7. Hình lăng trụ đứng. Hình chóp đều. Thể tích khối đa diện" },

        { value: "1D91", text: "Lớp 11 ➔ C9 ➔ §1. Biến cố giao và quy tắc nhân xác suất" },
        { value: "1D92", text: "Lớp 11 ➔ C9 ➔ §2. Biến cố hợp và quy tắc cộng xác suất" },

        { value: "1C11", text: "Chuyên đề 11 ➔ C1 ➔ Phép biến hình phẳng" },
        { value: "1C21", text: "Chuyên đề 11 ➔ C2 ➔ Lý thuyết đồ thị" },
        { value: "1C31", text: "Chuyên đề 11 ➔ C3 ➔ Một số yếu tố vẽ kỹ thuật" },
    ],
    lop10: [
        { value: "10_Giua_Ki_I", text: "⭐ Đề ôn giữa học kì I (Chương 1, 2, 3)" },
        { value: "10_Cuoi_Ki_I", text: "⭐ Đề ôn cuối học kì I (Chương 1 → 6)" },
        { value: "10_Giua_Ki_II", text: "⭐ Đề ôn giữa học kì II (Chương 7, 8)" },
        { value: "10_Cuoi_Ki_II", text: "⭐ Đề ôn cuối học kì II (Chương 7 → 10)" },
        { value: "10_TONG_HOP", text: "⭐ ĐỀ THI THỬ TỔNG HỢP TOÁN LỚP 10" },

        { value: "0D11", text: "Lớp 10 ➔ C1 ➔ §1. Mệnh đề" },
        { value: "0D12", text: "Lớp 10 ➔ C1 ➔ §2. Tập hợp" },
        { value: "0D13", text: "Lớp 10 ➔ C1 ➔ §3. Các phép toán tập hợp" },

        { value: "0D21", text: "Lớp 10 ➔ C2 ➔ §1. Bất phương trình bậc nhất hai ẩn" },
        { value: "0D22", text: "Lớp 10 ➔ C2 ➔ §2. Hệ bất phương trình bậc nhất hai ẩn" },

        { value: "0D31", text: "Lớp 10 ➔ C3 ➔ §1. Hàm số và đồ thị" },
        { value: "0D32", text: "Lớp 10 ➔ C3 ➔ §2. Hàm số bậc hai" },

        { value: "0H41", text: "Lớp 10 ➔ C4 ➔ §1. Giá trị lượng giác của một góc từ 0° đến 180°" },
        { value: "0H42", text: "Lớp 10 ➔ C4 ➔ §2. Định lý sin và định lý côsin trong tam giác" },
        { value: "0H43", text: "Lớp 10 ➔ C4 ➔ §3. Giải tam giác và ứng dụng thực tế" },

        { value: "0H51", text: "Lớp 10 ➔ C5 ➔ §1. Khái niệm véc-tơ" },
        { value: "0H52", text: "Lớp 10 ➔ C5 ➔ §2. Tổng và hiệu của hai véc-tơ" },
        { value: "0H53", text: "Lớp 10 ➔ C5 ➔ §3. Tích của một số với véc-tơ" },
        { value: "0H54", text: "Lớp 10 ➔ C5 ➔ §4. Tích vô hướng của hai véc-tơ" },

        { value: "0D61", text: "Lớp 10 ➔ C6 ➔ §1. Số gần đúng. Sai số" },
        { value: "0D62", text: "Lớp 10 ➔ C6 ➔ §2. Mô tả và biểu diễn dữ liệu bảng, biểu đồ" },
        { value: "0D63", text: "Lớp 10 ➔ C6 ➔ §3. Các số đặc trưng đo xu thế trung tâm mẫu số liệu" },
        { value: "0D64", text: "Lớp 10 ➔ C6 ➔ §4. Các số đặc trưng đo mức độ phân tán mẫu số liệu" },

        { value: "0D71", text: "Lớp 10 ➔ C7 ➔ §1. Dấu của tam thức bậc hai" },
        { value: "0D72", text: "Lớp 10 ➔ C7 ➔ §2. Giải bất phương trình bậc hai một ẩn" },
        { value: "0D73", text: "Lớp 10 ➔ C7 ➔ §3. Phương trình quy về phương trình bậc hai" },

        { value: "0D81", text: "Lớp 10 ➔ C8 ➔ §1. Quy tắc cộng và quy tắc nhân. Sơ đồ hình cây" },
        { value: "0D82", text: "Lớp 10 ➔ C8 ➔ §2. Hoán vị. Chỉnh hợp. Tổ hợp" },
        { value: "0D83", text: "Lớp 10 ➔ C8 ➔ §3. Nhị thức Newton" },

        { value: "0H91", text: "Lớp 10 ➔ C9 ➔ §1. Toạ độ của véc-tơ đối với hệ trục Oxy" },
        { value: "0H92", text: "Lớp 10 ➔ C9 ➔ §2. Biểu thức tọa độ của các phép toán véc-tơ" },
        { value: "0H93", text: "Lớp 10 ➔ C9 ➔ §3. Đường thẳng trong mặt phẳng toạ độ" },
        { value: "0H94", text: "Lớp 10 ➔ C9 ➔ §4. Đường tròn trong mặt phẳng toạ độ" },
        { value: "0H95", text: "Lớp 10 ➔ C9 ➔ §5. Ba đường conic trong mặt phẳng toạ độ" },

        { value: "0D01", text: "Lớp 10 ➔ C10 ➔ §1. Không gian mẫu và biến cố" },
        { value: "0D02", text: "Lớp 10 ➔ C10 ➔ §2. Xác suất của biến cố" },

        { value: "0C11", text: "Chuyên đề 10 ➔ C1 ➔ Hệ phương trình bậc nhất ba ẩn và ứng dụng" },
        { value: "0C21", text: "Chuyên đề 10 ➔ C2 ➔ Phương pháp quy nạp toán học" },
    ]
};

// =========================================================================
// 2. KHO DỮ LIỆU TỔNG VÀ BỘ QUÉT ĐỘNG TOÀN CỤC (Dynamic Global Scanner)
// =========================================================================
window.IKhoCauHoi = window.IKhoCauHoi || {
    tracNghiem: {}, 
    dungSai: {},
    traLoiNgan: {}
};

/**
 * Thuật toán Quét động: Tự động phát hiện và phân loại TẤT CẢ các biến dữ liệu
 * có trên phạm vi window của trình duyệt mà không cần khai báo thủ công tên biến.
 */
function dongBoKhoDuLieuToanCuc() {
    // Quét qua toàn bộ các thuộc tính nằm trên đối tượng window toàn cục
    Object.keys(window).forEach(key => {
        let mangCauHoi = [];
        let kieuLoai = "";

        // Phân loại động dựa trên cấu trúc tên biến của thầy thiết lập
        if (key.toLowerCase().includes("tracnghiem")) {
            kieuLoai = "tracNghiem";
            mangCauHoi = window[key];
        } else if (key.toLowerCase().includes("dungsai")) {
            kieuLoai = "dungSai";
            mangCauHoi = window[key];
        } else if (key.toLowerCase().includes("traloi|traloingan")) {
            kieuLoai = "traLoiNgan";
            mangCauHoi = window[key];
        } else if (key.startsWith("traLoiNgan")) { // Fallback match chính xác camelCase
            kieuLoai = "traLoiNgan";
            mangCauHoi = window[key];
        }

        // Nếu phát hiện biến hợp lệ dạng mảng dữ liệu, tiến hành phân bổ theo ID
        if (kieuLoai && Array.isArray(mangCauHoi)) {
            mangCauHoi.forEach(q => {
                if (!q || !q.id) return;
                const maChuong = q.id.substring(0, 4); // Cắt 4 kí tự định danh (Ví dụ: "2D11", "1D61", "0H95")
                
                if (!window.IKhoCauHoi[kieuLoai][maChuong]) {
                    window.IKhoCauHoi[kieuLoai][maChuong] = [];
                }
                
                // Tránh tình trạng trùng lặp bản ghi khi hàm quét chạy nhiều lần
                if (!window.IKhoCauHoi[kieuLoai][maChuong].some(item => item.id === q.id)) {
                    window.IKhoCauHoi[kieuLoai][maChuong].push(q);
                }
            });
        }
    });
}

function layKhoCauHoiTheoMaID(maChuong) {
    dongBoKhoDuLieuToanCuc(); // Kích hoạt bộ quét động
    const kho = window.IKhoCauHoi;
    return {
        tracNghiem: kho.tracNghiem[maChuong] || [],
        dungSai: kho.dungSai[maChuong] || [],
        traLoiNgan: kho.traLoiNgan[maChuong] || []
    };
}

// KHỞI TẠO BIẾN TRẠNG THÁI HỆ THỐNG
let deThiHienTai = { tracNghiem: [], dungSai: [], traLoiNgan: [] };
let thoiGianConLai = 90 * 60; 
let boDemThoiGian = null;

function tronMang(array) { return [...array].sort(() => 0.5 - Math.random()); }

const selectLop = document.getElementById('select-lop');
const selectChuong = document.getElementById('select-chuong');

function capNhatDanhSachChuong() {
    const lopDuocChon = selectLop.value;
    const chuongS = DanhMucChuong[lopDuocChon] || [];
    selectChuong.innerHTML = chuongS.map(c => `<option value="${c.value}">${c.text}</option>`).join('');
}
selectLop.addEventListener('change', capNhatDanhSachChuong);
capNhatDanhSachChuong();

function startTimer() {
    thoiGianConLai = 90 * 60; 
    const timerElement = document.getElementById('exam-timer');
    timerElement.style.display = 'block';
    clearInterval(boDemThoiGian);
    boDemThoiGian = setInterval(() => {
        let minutes = Math.floor(thoiGianConLai / 60);
        let seconds = thoiGianConLai % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerElement.innerHTML = `<i class="fa-regular fa-clock me-2"></i>${minutes}:${seconds}`;
        if (thoiGianConLai <= 0) {
            clearInterval(boDemThoiGian);
            alert("⏰ Hết giờ làm bài 90 phút! Hệ thống tiến hành thu bài tự động.");
            nopBaiVaChamDiem(); 
        }
        thoiGianConLai--;
    }, 1000);
}

// =========================================================================
// 3. SỰ KIỆN PHÁT ĐỀ TÍNH GIỜ ADAPTIVE MULTI-BLOCK (Cân bằng ma trận đề)
// =========================================================================
// Các đề ôn tập tổng hợp (gộp nhiều mã chương lại thành 1 kho câu hỏi chung)
const NHOM_MA_CHUONG_DAC_BIET = {
    // ===== LỚP 12 =====
    "Giua_Ki_I": ["2D11", "2D12", "2D13", "2D14", "2D15"],
    "Cuoi_Ki_I": ["2D11", "2D12", "2D13", "2D14", "2D15", "2D31", "2D32", "2H21", "2H22"],
    "Giua_Ki_II": ["2D41", "2D42", "2D43", "2H51", "2H53"],
    "Cuoi_Ki_II": ["2D41", "2D42", "2D43", "2D61", "2D62", "2H51", "2H52", "2H53"],
    "TONG_HOP": ["2D11", "2D12", "2D13", "2D14", "2D15", "2D31", "2D32", "2D41", "2D42", "2D43", "2D61", "2D62", "2H21", "2H22", "2H51", "2H52", "2H53"],

    // ===== LỚP 10 ===== (HK1: C1-C6, HK2: C7-C10, không tính Chuyên đề 0C11/0C21)
    "10_Giua_Ki_I": ["0D11", "0D12", "0D13", "0D21", "0D22", "0D31", "0D32"],
    "10_Cuoi_Ki_I": ["0D11", "0D12", "0D13", "0D21", "0D22", "0D31", "0D32", "0H41", "0H42", "0H43", "0H51", "0H52", "0H53", "0H54", "0D61", "0D62", "0D63", "0D64"],
    "10_Giua_Ki_II": ["0D71", "0D72", "0D73", "0D81", "0D82", "0D83"],
    "10_Cuoi_Ki_II": ["0D71", "0D72", "0D73", "0D81", "0D82", "0D83", "0H91", "0H92", "0H93", "0H94", "0H95", "0D01", "0D02"],
    "10_TONG_HOP": ["0D11", "0D12", "0D13", "0D21", "0D22", "0D31", "0D32", "0H41", "0H42", "0H43", "0H51", "0H52", "0H53", "0H54", "0D61", "0D62", "0D63", "0D64", "0D71", "0D72", "0D73", "0D81", "0D82", "0D83", "0H91", "0H92", "0H93", "0H94", "0H95", "0D01", "0D02"],

    // ===== LỚP 11 ===== (HK1: C1-C4, HK2: C5-C9, không tính Chuyên đề 1C11/1C21/1C31)
    "11_Giua_Ki_I": ["1D11", "1D12", "1D13", "1D14", "1D15", "1D16", "1D21", "1D22", "1D23"],
    "11_Cuoi_Ki_I": ["1D11", "1D12", "1D13", "1D14", "1D15", "1D16", "1D21", "1D22", "1D23", "1D31", "1D32", "1D33", "1H41", "1H42", "1H43", "1H44", "1H45", "1H46"],
    "11_Giua_Ki_II": ["1D51", "1D52", "1D61", "1D62", "1D63", "1D64", "1D65"],
    "11_Cuoi_Ki_II": ["1D51", "1D52", "1D61", "1D62", "1D63", "1D64", "1D65", "1D71", "1D72", "1D73", "1H81", "1H82", "1H83", "1H84", "1H85", "1H86", "1H87", "1D91", "1D92"],
    "11_TONG_HOP": ["1D11", "1D12", "1D13", "1D14", "1D15", "1D16", "1D21", "1D22", "1D23", "1D31", "1D32", "1D33", "1H41", "1H42", "1H43", "1H44", "1H45", "1H46", "1D51", "1D52", "1D61", "1D62", "1D63", "1D64", "1D65", "1D71", "1D72", "1D73", "1H81", "1H82", "1H83", "1H84", "1H85", "1H86", "1H87", "1D91", "1D92"]
};

document.getElementById('btn-generate').addEventListener('click', () => {
    const maChuongDuocChon = selectChuong.value;
    
    let khoTracNghiem = [];
    let khoDungSai = [];
    let khoTraLoiNgan = [];

    // Lấy dữ liệu kho
    const nhomMaChuong = NHOM_MA_CHUONG_DAC_BIET[maChuongDuocChon];
    if (nhomMaChuong) {
        nhomMaChuong.forEach(ma => {
            const khoNho = layKhoCauHoiTheoMaID(ma);
            khoTracNghiem = khoTracNghiem.concat(khoNho.tracNghiem);
            khoDungSai = khoDungSai.concat(khoNho.dungSai);
            khoTraLoiNgan = khoTraLoiNgan.concat(khoNho.traLoiNgan);
        });
    } else {
        const khoCauHoi = layKhoCauHoiTheoMaID(maChuongDuocChon);
        khoTracNghiem = khoCauHoi.tracNghiem;
        khoDungSai = khoCauHoi.dungSai;
        khoTraLoiNgan = khoCauHoi.traLoiNgan;
    }

    if (khoTracNghiem.length === 0 && khoDungSai.length === 0 && khoTraLoiNgan.length === 0) {
        alert("⚠️ Không có dữ liệu câu hỏi!");
        return;
    }

    // 🌟 CỐ ĐỊNH SỐ CÂU TRƯỚC KHI RENDER
    const deThiTron = {
        tracNghiem: tronMang(khoTracNghiem).slice(0, 12),
        dungSai: tronMang(khoDungSai).slice(0, 4),
        traLoiNgan: tronMang(khoTraLoiNgan).slice(0, 6)
    };
    if (deThiTron.tracNghiem.length < 12 || deThiTron.dungSai.length < 4 || deThiTron.traLoiNgan.length < 6) {
        alert("⚠️ Cảnh báo: Kho dữ liệu không đủ số câu hỏi yêu cầu (Cần 12 TN, 4 DS, 6 TLN).");
    }
    deThiHienTai = deThiTron;
    renderQuiz(deThiHienTai);
    startTimer();

    document.getElementById('result-box').classList.add('d-none');
    document.getElementById('btn-submit').classList.remove('d-none');
});

// =========================================================================
// 4. HIỂN THỊ ĐỀ THI VÀ QUẢN LÝ TIẾN ĐỘ THEO TỪNG CỤM PHẦN BIỆT VỚI NHAU
// =========================================================================
function renderQuiz(deThi) {
    const container = document.getElementById('quiz-content');
    container.innerHTML = ''; 

    // PHẦN I
    if (deThi.tracNghiem.length > 0) {
        container.innerHTML += `<div class="part-header">PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn</div>`;
        deThi.tracNghiem.forEach((q, idx) => {
            // Reset số thứ tự về 1 cho phần này bằng cách dùng (idx + 1)
            container.innerHTML += `
                <div class="question-item">
                    <p class="question-text"><strong>Câu ${idx + 1}. [${q.id}]</strong> ${q.question}</p>
                    ${q.options.map((opt, oIdx) => `
                        <div class="custom-option-wrapper">
                            <input class="form-check-input" type="radio" name="tn_${idx}" value="${oIdx}" id="tn_${idx}_${oIdx}">
                            <label class="form-check-label" for="tn_${idx}_${oIdx}">${opt}</label>
                        </div>
                    `).join('')}
                    <div class="explain-box"><strong>Lời giải chi tiết:</strong><br>${q.explain}</div>
                </div>`;
        });
    }

    // PHẦN II
    if (deThi.dungSai.length > 0) {
        container.innerHTML += `<div class="part-header">PHẦN II. Câu trắc nghiệm đúng sai</div>`;
        deThi.dungSai.forEach((q, idx) => {
            container.innerHTML += `
                <div class="question-item">
                    <p class="question-text"><strong>Câu ${idx + 1}. [${q.id}]</strong> ${q.question}</p>
                    <div class="sub-question-container">${q.subQuestions.map((sub, sIdx) => `
                        <div class="sub-question-row">
                            <div class="sub-question-text"><strong>${String.fromCharCode(97 + sIdx)})</strong> ${sub.text}</div>
                            <div class="sub-question-actions">
                                <div class="form-check"><input class="form-check-input" type="radio" name="ds_${idx}_${sIdx}" value="true" id="ds_${idx}_${sIdx}_D"><label class="form-check-label text-success fw-bold" for="ds_${idx}_${sIdx}_D">Đúng</label></div>
                                <div class="form-check"><input class="form-check-input" type="radio" name="ds_${idx}_${sIdx}" value="false" id="ds_${idx}_${sIdx}_S"><label class="form-check-label text-danger fw-bold" for="ds_${idx}_${sIdx}_S">Sai</label></div>
                            </div>
                        </div>`).join('')}</div>
                    <div class="explain-box"><strong>Lời giải chi tiết:</strong><br>${q.explain}</div>
                </div>`;
        });
    }

    // PHẦN III
    if (deThi.traLoiNgan.length > 0) {
        container.innerHTML += `<div class="part-header">PHẦN III. Câu trắc nghiệm trả lời ngắn</div>`;
        deThi.traLoiNgan.forEach((q, idx) => {
            container.innerHTML += `
                <div class="question-item">
                    <p class="question-text"><strong>Câu ${idx + 1}. [${q.id}]</strong> ${q.question}</p>
                    <div class="d-flex gap-2 my-3 raw-input-group" data-qidx="${idx}">
                        <input type="text" maxlength="1" class="form-control text-center fw-bold short-box">
                        <input type="text" maxlength="1" class="form-control text-center fw-bold short-box">
                        <input type="text" maxlength="1" class="form-control text-center fw-bold short-box">
                        <input type="text" maxlength="1" class="form-control text-center fw-bold short-box">
                    </div>
                    <div class="explain-box"><strong>Lời giải chi tiết:</strong><br>Đáp án: <strong>${q.answer}</strong><br>${q.explain}</div>
                </div>`;
        });

        setTimeout(() => {
            document.querySelectorAll('.raw-input-group').forEach(group => {
                const inputs = group.querySelectorAll('.short-box');
                inputs.forEach((input, iIdx) => {
                    input.addEventListener('keyup', (e) => {
                        if ((e.key >= 0 && e.key <= 9) || e.key === '-') {
                            if (inputs[iIdx + 1]) inputs[iIdx + 1].focus();
                        }
                        if (e.key === 'Backspace') {
                            if (inputs[iIdx - 1]) inputs[iIdx - 1].focus();
                        }
                    });
                });
            });
        }, 100);
    }

    XayDungLuoiTienDoTachBiet(deThi);

    if (window.MathJax && typeof MathJax.typesetPromise === "function") { 
        MathJax.typesetPromise(); 
    }
}

function XayDungLuoiTienDoTachBiet(deThi) {
    const gridBox = document.getElementById('progress-grid-box');
    gridBox.innerHTML = '';
    gridBox.style.display = 'flex';
    gridBox.style.flexDirection = 'column';
    gridBox.style.gap = '15px';

    let currentQuestionNumber = 1;

    const taoCumTienDoTheoPhan = (tenPhan, soLuong) => {
        if (soLuong === 0) return '';
        let htmlBoxes = '';
        for (let i = 0; i < soLuong; i++) {
            // i + 1 giúp mỗi phần đều reset về 1 (số hiển thị trong ô)
            // id dùng số thứ tự toàn cục (currentQuestionNumber) để khớp với
            // .question-item thứ mấy trong toàn bộ đề (không reset theo phần)
            htmlBoxes += `<div class="progress-box" id="prog-box-${currentQuestionNumber}">${i + 1}</div>`;
            currentQuestionNumber++;
        }
        return `
            <div class="part-progress-wrapper">
                <div class="part-title">${tenPhan}</div>
                <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px;">
                    ${htmlBoxes}
                </div>
            </div>
        `;
    };

    gridBox.innerHTML += taoCumTienDoTheoPhan("Phần I (Trắc nghiệm)", deThi.tracNghiem.length);
    gridBox.innerHTML += taoCumTienDoTheoPhan("Phần II (Đúng / Sai)", deThi.dungSai.length);
    gridBox.innerHTML += taoCumTienDoTheoPhan("Phần III (Trả lời ngắn)", deThi.traLoiNgan.length);

    document.querySelectorAll('.question-item').forEach((item, index) => {
        const cauSo = index + 1;
        item.id = `q-item-${cauSo}`;

        // Bấm vào ô số thứ tự trên thanh tiến độ -> cuộn tới đúng câu hỏi đó
        const oTienDoBox = document.getElementById(`prog-box-${cauSo}`);
        if (oTienDoBox) {
            oTienDoBox.addEventListener('click', () => {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                document.querySelectorAll('.progress-box').forEach(b => b.classList.remove('active'));
                oTienDoBox.classList.add('active');
            });
        }

        item.addEventListener('change', () => {
            document.getElementById(`prog-box-${cauSo}`).classList.add('answered');
        });

        const inputsPhan3 = item.querySelectorAll('.short-box');
        if (inputsPhan3.length > 0) {
            inputsPhan3.forEach(input => {
                input.addEventListener('input', () => {
                    let daNhap = false;
                    inputsPhan3.forEach(inp => { if(inp.value.trim() !== "") daNhap = true; });
                    const oTienDo = document.getElementById(`prog-box-${cauSo}`);
                    if (daNhap) oTienDo.classList.add('answered'); 
                    else oTienDo.classList.remove('answered');
                });
            });
        }
    });
}

// =========================================================================
// 5. CHẤM ĐIỂM THEO CHUẨN BAREM QUY CHẾ MỚI BỘ GD&ĐT
// =========================================================================
function nopBaiVaChamDiem() {
    const hoTenHocSinh = document.getElementById('student-name').value.trim();
    if (hoTenHocSinh === "") {
        alert("⚠️ Thí sinh vui lòng nhập Họ và Tên trước khi nhấn nộp bài!");
        document.getElementById('student-name').focus();
        return; 
    }

    clearInterval(boDemThoiGian); 
    document.getElementById('exam-timer').style.display = 'none';

    let tongDiem = 0;

    // Chấm điểm Phần I
    deThiHienTai.tracNghiem.forEach((q, idx) => {
        let selected = document.querySelector(`input[name="tn_${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            tongDiem += 0.25;
        }
        // Tô màu đáp án: đáp án đúng luôn tô xanh, đáp án học sinh chọn
        // sai (nếu có) tô đỏ, để dễ đối chiếu khi xem lời giải.
        const correctInput = document.getElementById(`tn_${idx}_${q.answer}`);
        if (correctInput) {
            const correctWrapper = correctInput.closest('.custom-option-wrapper');
            if (correctWrapper) correctWrapper.classList.add('option-correct');
        }
        if (selected && parseInt(selected.value) !== q.answer) {
            const wrongWrapper = selected.closest('.custom-option-wrapper');
            if (wrongWrapper) wrongWrapper.classList.add('option-wrong');
        }
    });

    // Chấm điểm Phần II
    deThiHienTai.dungSai.forEach((q, idx) => {
        let soY_Dung = 0;
        q.subQuestions.forEach((sub, sIdx) => {
            let selected = document.querySelector(`input[name="ds_${idx}_${sIdx}"]:checked`);
            let userAns = selected ? (selected.value === "true") : null;
            if (userAns === sub.answer) soY_Dung++;
        });
        
        if (soY_Dung === 1) tongDiem += 0.1;
        else if (soY_Dung === 2) tongDiem += 0.25;
        else if (soY_Dung === 3) tongDiem += 0.5;
        else if (soY_Dung === 4) tongDiem += 1.0;
    });

    // Chấm điểm Phần III
    deThiHienTai.traLoiNgan.forEach((q, idx) => {
        let inputGroup = document.querySelector(`.raw-input-group[data-qidx="${idx}"]`);
        if (inputGroup) {
            let fullUserAnswer = "";
            inputGroup.querySelectorAll('.short-box').forEach(input => {
                if (input.value.trim() !== "") {
                    fullUserAnswer += input.value.trim();
                }
            });
            if (fullUserAnswer === q.answer.trim()) {
                tongDiem += 0.5;
            }
        }
    });

    const resultBox = document.getElementById('result-box');
    resultBox.innerHTML = `Thí sinh: <strong>${hoTenHocSinh}</strong><br>Tổng điểm đạt được: <span style="font-size:1.6rem; color:#ef4444;"><strong>${tongDiem.toFixed(2)}</strong></span> / 10 điểm!`;
    resultBox.classList.remove('d-none');
    
    document.querySelectorAll('.explain-box').forEach(box => box.style.display = 'block');
    document.getElementById('btn-submit').classList.add('d-none');
    resultBox.scrollIntoView({ behavior: 'smooth' });

    const chuongHoc = selectChuong.options[selectChuong.selectedIndex].text;
    const LINK_WEB_APP = "https://script.google.com/macros/s/AKfycbz8CyLzl6KG2x-yDVSevq1KITO72KJPTojBxY5lbgTx0mhl9MwHdYJ5hFM0_6V2tRFXZg/exec"; 
    
    if (LINK_WEB_APP && LINK_WEB_APP.includes("http")) {
        const thamSo = `?hoTen=${encodeURIComponent(hoTenHocSinh)}&diemSo=${encodeURIComponent(tongDiem.toFixed(2) + "/10")}&chuong=${encodeURIComponent(chuongHoc)}`;
        const anhGuiTin = new Image();
        anhGuiTin.src = LINK_WEB_APP + thamSo;
    }
}

document.getElementById('btn-submit').addEventListener('click', nopBaiVaChamDiem);