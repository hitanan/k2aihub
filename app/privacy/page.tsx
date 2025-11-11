import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật - K2AiHub',
  description: 'Tìm hiểu cách K2AiHub thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn. Chúng tôi cam kết bảo vệ quyền riêng tư của người dùng theo chuẩn GDPR và các quy định quốc tế.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Chính Sách Bảo Mật
          </h1>
          <p className="text-lg text-slate-600">
            Cập nhật lần cuối: 06 Tháng 11, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              1. Giới Thiệu
            </h2>
            <p className="text-slate-700 mb-4">
              K2AiHub (&ldquo;chúng tôi&rdquo;, &ldquo;của chúng tôi&rdquo;) cam kết bảo vệ quyền riêng tư của bạn. 
              Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và 
              bảo vệ thông tin của bạn khi bạn sử dụng nền tảng K2AiHub.
            </p>
            <p className="text-slate-700">
              Chúng tôi tuân thủ các quy định bảo vệ dữ liệu quốc tế, bao gồm GDPR (EU), 
              CCPA (California), và các luật bảo vệ dữ liệu cá nhân của Việt Nam.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              2. Thông Tin Chúng Tôi Thu Thập
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-slate-800 mb-2">
                  2.1. Thông Tin Cá Nhân
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Họ và tên</li>
                  <li>Địa chỉ email</li>
                  <li>Thông tin đăng nhập (tài khoản Google OAuth)</li>
                  <li>Dữ liệu học tập và tiến độ</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-800 mb-2">
                  2.2. Dữ Liệu Sử Dụng
                </h3>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Thông tin thiết bị (loại trình duyệt, hệ điều hành)</li>
                  <li>Địa chỉ IP</li>
                  <li>Dữ liệu cookie và lịch sử truy cập</li>
                  <li>Thời gian và thời lượng sử dụng</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              3. Cách Chúng Tôi Sử Dụng Thông Tin
            </h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Cung cấp và cải thiện dịch vụ giáo dục</li>
              <li>Cá nhân hóa trải nghiệm học tập</li>
              <li>Gửi thông báo về cập nhật và tính năng mới</li>
              <li>Phân tích và cải thiện hiệu suất nền tảng</li>
              <li>Bảo vệ an ninh và ngăn chặn gian lận</li>
              <li>Tuân thủ các nghĩa vụ pháp lý</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              4. Chia Sẻ Thông Tin
            </h2>
            <p className="text-slate-700 mb-4">
              Chúng tôi <strong>KHÔNG</strong> bán thông tin cá nhân của bạn cho bên thứ ba. 
              Chúng tôi chỉ chia sẻ thông tin trong các trường hợp sau:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Với sự đồng ý rõ ràng của bạn</li>
              <li>Với các nhà cung cấp dịch vụ đáng tin cậy (Google OAuth, Supabase)</li>
              <li>Để tuân thủ luật pháp và quy định</li>
              <li>Để bảo vệ quyền lợi và an toàn của K2AiHub và người dùng</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              5. Bảo Mật Dữ Liệu
            </h2>
            <p className="text-slate-700 mb-4">
              Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức phù hợp để bảo vệ 
              thông tin của bạn:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Mã hóa SSL/TLS cho tất cả dữ liệu truyền tải</li>
              <li>Xác thực OAuth 2.0 an toàn</li>
              <li>Row-Level Security (RLS) trong cơ sở dữ liệu</li>
              <li>Kiểm soát truy cập nghiêm ngặt</li>
              <li>Sao lưu dữ liệu định kỳ</li>
              <li>Giám sát bảo mật liên tục</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              6. Quyền Của Bạn
            </h2>
            <p className="text-slate-700 mb-4">
              Theo GDPR và các quy định bảo vệ dữ liệu, bạn có các quyền sau:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Quyền truy cập:</strong> Yêu cầu bản sao dữ liệu cá nhân của bạn</li>
              <li><strong>Quyền chỉnh sửa:</strong> Cập nhật thông tin không chính xác</li>
              <li><strong>Quyền xóa:</strong> Yêu cầu xóa dữ liệu cá nhân (&ldquo;quyền bị lãng quên&rdquo;)</li>
              <li><strong>Quyền hạn chế:</strong> Hạn chế xử lý dữ liệu của bạn</li>
              <li><strong>Quyền di chuyển:</strong> Nhận dữ liệu ở định dạng có thể đọc được</li>
              <li><strong>Quyền phản đối:</strong> Phản đối việc xử lý dữ liệu của bạn</li>
            </ul>
            <p className="text-slate-700 mt-4">
              Để thực hiện các quyền này, vui lòng liên hệ:{' '}
              <a href="mailto:k2aihub@gmail.com" className="text-blue-600 hover:text-blue-800">
                k2aihub@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              7. Cookie và Công Nghệ Theo Dõi
            </h2>
            <p className="text-slate-700 mb-4">
              Chúng tôi sử dụng cookie và các công nghệ tương tự để:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Duy trì phiên đăng nhập của bạn</li>
              <li>Ghi nhớ tùy chọn của bạn</li>
              <li>Phân tích lưu lượng truy cập</li>
              <li>Cải thiện trải nghiệm người dùng</li>
            </ul>
            <p className="text-slate-700 mt-4">
              Bạn có thể quản lý cookie thông qua cài đặt trình duyệt của mình.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              8. Quyền Riêng Tư Trẻ Em
            </h2>
            <p className="text-slate-700">
              Dịch vụ của chúng tôi được thiết kế cho người dùng từ 13 tuổi trở lên. 
              Chúng tôi không cố ý thu thập thông tin từ trẻ em dưới 13 tuổi. Nếu bạn 
              tin rằng chúng tôi đã thu thập thông tin từ trẻ em dưới 13 tuổi, vui lòng 
              liên hệ với chúng tôi để chúng tôi có thể xóa thông tin đó.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              9. Thay Đổi Chính Sách
            </h2>
            <p className="text-slate-700">
              Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Chúng tôi sẽ 
              thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng chính sách mới trên 
              trang này và cập nhật &ldquo;Ngày cập nhật lần cuối&rdquo;. Bạn nên xem lại chính sách 
              này định kỳ để biết về các thay đổi.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              10. Liên Hệ
            </h2>
            <p className="text-slate-700 mb-4">
              Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ:
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:k2aihub@gmail.com" className="text-blue-600 hover:text-blue-800">
                  k2aihub@gmail.com
                </a>
              </p>
              <p className="text-slate-700 mt-2">
                <strong>Website:</strong>{' '}
                <a href="https://k2aihub.com" className="text-blue-600 hover:text-blue-800">
                  https://k2aihub.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-slate-700">
              <strong>Lưu ý:</strong> Bằng cách sử dụng K2AiHub, bạn đồng ý với các điều khoản 
              trong chính sách bảo mật này. Nếu bạn không đồng ý, vui lòng không sử dụng dịch vụ của chúng tôi.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Quay lại Trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
