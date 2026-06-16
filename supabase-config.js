// ============================================================
//  CẤU HÌNH SUPABASE — điền 2 giá trị của bạn vào đây
// ============================================================
//  Lấy ở: Dashboard Supabase → nút "Connect" (hoặc Settings → API Keys)
//
//  - SUPABASE_URL:  dạng  https://xxxxx.supabase.co
//  - SUPABASE_KEY:  publishable key (sb_publishable_...) HOẶC anon key (eyJ...)
//
//  ⚠ TUYỆT ĐỐI KHÔNG dùng service_role / secret key (sb_secret_...) ở đây.
//    Hai giá trị dưới đây là loại CÔNG KHAI, an toàn để đặt trong code web,
//    vì quyền ghi vẫn được bảo vệ bởi luật RLS + đăng nhập.
// ============================================================

const SUPABASE_URL = "https://puewreirymqutlgfdorf.supabase.co";
const SUPABASE_KEY = "sb_publishable_VXp_qd0QNhU58wXra6YqBg_6njq-qD6";

// Đừng sửa phần dưới
window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_KEY = SUPABASE_KEY;
