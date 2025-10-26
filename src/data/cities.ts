import { City } from '@/src/types';

// Static city data for all 34 provincial-level administrative units
export const citiesData: City[] = [
  {
    id: 1,
    code: '01',
    name: 'Thành phố Hà Nội',
    slug: 'ha-noi',
    oldNames: ['Hà Nội'],
    region: 'Bắc Bộ',
    coordinates: { x: 380, y: 180 },
    color: '#ff6b35',
    population: '8,807,523',
    area: '3,359.84 km²',
    description:
      'Hà Nội là thủ đô của Việt Nam, trung tâm chính trị, văn hóa và giáo dục của cả nước. Thành phố có lịch sử hơn 1000 năm tuổi với nhiều di tích lịch sử quan trọng như Văn Miếu, Hoàng thành Thăng Long.',
    touristAttractions: [
      {
        name: 'Hoàng Thành Thăng Long',
        description:
          'Di sản văn hóa thế giới UNESCO, nơi từng là trung tâm quyền lực của các triều đại phong kiến Việt Nam trong hơn 1.000 năm.',
        imageUrl:
          'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Ba Đình, Hà Nội',
        url: 'https://vi.wikipedia.org/wiki/Ho%C3%A0ng_th%C3%A0nh_Th%C4%83ng_Long',
      },
      {
        name: 'Văn Miếu - Quốc Tử Giám',
        description:
          'Ngôi đền Khổng Tử đầu tiên của Việt Nam và trường đại học đầu tiên của Việt Nam, được xây dựng từ năm 1070.',
        imageUrl:
          'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Đống Đa, Hà Nội',
        url: 'https://vi.wikipedia.org/wiki/V%C4%83n_Mi%E1%BA%BFu_-_Qu%E1%BB%91c_T%E1%BB%AD_Gi%C3%A1m',
      },
      {
        name: 'Hồ Hoàn Kiếm',
        description: 'Biểu tượng của Hà Nội với tháp Rùa và đền Ngọc Sơn, nơi lưu giữ truyền thuyết thanh gươm thiêng.',
        imageUrl:
          'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Hoàn Kiếm, Hà Nội',
        url: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_Ho%C3%A0n_Ki%E1%BA%BFm',
      },
      {
        name: 'Phố Cổ Hà Nội',
        description:
          'Khu phố cổ với 36 phố phường truyền thống, là trung tâm thương mại và văn hóa lâu đời của Hà Nội.',
        imageUrl:
          'https://images.unsplash.com/photo-1540411364049-5b4c8b89d970?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Hoàn Kiếm, Hà Nội',
        url: 'https://vi.wikipedia.org/wiki/Ph%E1%BB%91_c%E1%BB%95_H%C3%A0_N%E1%BB%99i',
      },
      {
        name: 'Chùa Một Cột',
        description: 'Biểu tượng kiến trúc Phật giáo độc đáo của Việt Nam được xây dựng từ năm 1049.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Ba Đình, Hà Nội',
        url: 'https://vi.wikipedia.org/wiki/Ch%C3%B9a_M%E1%BB%99t_C%E1%BB%99t',
      },
      {
        name: 'Lăng Chủ tịch Hồ Chí Minh',
        description: 'Nơi an nghỉ của Chủ tịch Hồ Chí Minh, điểm tham quan thiêng liêng của người Việt.',
        imageUrl:
          'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Ba Đình, Hà Nội',
        url: 'https://vi.wikipedia.org/wiki/L%C4%83ng_B%C3%A1c',
      },
    ],
    fullPageContent: `
      <h2>Tổng quan về Hà Nội</h2>
      <p>Hà Nội là thủ đô của nước Cộng hòa Xã hội chủ nghĩa Việt Nam và là thành phố trực thuộc trung ương loại đặc biệt. Thành phố nằm ở vùng châu thổ sông Hồng, phía bắc Việt Nam.</p>
      
      <h3>Lịch sử</h3>
      <p>Hà Nội có lịch sử hơn 1000 năm, được thành lập năm 1010 dưới triều Lý với tên gọi Thăng Long. Qua các triều đại phong kiến, thành phố luôn giữ vai trò là trung tâm chính trị quan trọng.</p>
      
      <h3>Địa lý và Dân số</h3>
      <ul>
        <li>Diện tích: 3,359.84 km² (xếp hạng 32/34)</li>
        <li>Dân số: 8,807,523 người (xếp hạng 2/34)</li>
        <li>Khí hậu: Nhiệt đới gió mùa với 4 mùa rõ rệt</li>
      </ul>
      
      <h3>Kinh tế</h3>
      <p>Hà Nội là trung tâm kinh tế lớn thứ hai của Việt Nam với các chỉ số kinh tế ấn tượng:</p>
      <ul>
        <li>GRDP 2024: 1,425,521,277 triệu đồng (xếp hạng 2/34)</li>
        <li>Thu ngân sách: 511,338,453 triệu đồng (xếp hạng 2/34)</li>
        <li>Thu nhập bình quân: 89.00 triệu đồng/năm</li>
      </ul>
      
      <h3>Văn hóa và du lịch</h3>
      <p>Thành phố sở hữu nhiều di sản văn hóa thế giới như Hoàng thành Thăng Long, Văn Miếu - Quốc Tử Giám. Phố cổ Hà Nội với 36 phố phường là điểm thu hút khách du lịch quốc tế.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/H%C3%A0_N%E1%BB%99i" target="_blank">Wikipedia - Hà Nội</a></li>
        <li><a href="https://hanoi.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Hà Nội</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 2,
    code: '04',
    name: 'Cao Bằng',
    slug: 'cao-bang',
    oldNames: ['Cao Bằng'],
    region: 'Bắc Bộ',
    coordinates: { x: 420, y: 90 },
    color: '#4ecdc4',
    population: '573,119',
    area: '6,700.39 km²',
    description:
      'Cao Bằng là tỉnh miền núi phía Bắc có biên giới với Trung Quốc. Nơi đây có thác Bản Giốc hùng vĩ và non nước đá vôi kỳ thú. Cao Bằng có ý nghĩa lịch sử quan trọng trong phong trào cách mạng.',
    touristAttractions: [
      {
        name: 'Thác Bản Giốc',
        description:
          'Thác nước lớn nhất Việt Nam với chiều cao 53m, nằm trên biên giới Việt Nam - Trung Quốc, một trong những thác đẹp nhất thế giới.',
        imageUrl:
          'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Xã Đàm Thủy, huyện Trùng Khánh',
        url: 'https://vi.wikipedia.org/wiki/Th%C3%A1c_B%E1%BA%A3n_Gi%E1%BB%91c',
      },
      {
        name: 'Hang Pác Bó',
        description:
          'Nơi Chủ tịch Hồ Chí Minh sống và làm việc khi trở về nước năm 1941, là căn cứ địa cách mạng quan trọng.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Xã Trường Hà, huyện Hà Quảng',
        url: 'https://vi.wikipedia.org/wiki/Hang_P%C3%A1c_B%C3%B3',
      },
      {
        name: 'Động Ngườm Ngao',
        description:
          'Động ngầm dài 2.144m với hệ thống thạch nhũ tuyệt đẹp, được mệnh danh là "cung điện dưới lòng đất".',
        imageUrl:
          'https://images.unsplash.com/photo-1551524164-6cf2ac240e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Xã Gun, huyện Trà Lĩnh',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%99ng_Ng%C6%B0%E1%BB%9Dm_Ngao',
      },
      {
        name: 'Phia Oắc - Phia Đén',
        description:
          'Công viên quốc gia với hệ sinh thái núi đá vôi nhiệt đới, là nơi bảo tồn đa dạng sinh học quý hiếm.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Các xã thuộc huyện Hà Quảng và Trà Lĩnh',
        url: 'https://vi.wikipedia.org/wiki/V%C6%B0%E1%BB%9Dn_qu%E1%BB%91c_gia_Phia_O%E1%BA%AFc_%E2%80%93_Phia_%C4%90%C3%A9n',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Cao Bằng - Vùng đất biên giới và di sản địa chất</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Cao Bằng là tỉnh biên giới với GRDP thấp nhất cả nước đạt <strong>25,203,769 triệu đồng</strong>, xếp hạng <strong>34/34</strong>. Thu ngân sách đạt <strong>2,476,011 triệu đồng</strong>, xếp hạng <strong>33/34</strong>. Dù kinh tế còn khó khăn nhưng tỉnh có vị trí địa chính trị quan trọng và tiềm năng du lịch lớn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>30.70 triệu đồng/năm</strong>, xếp hạng <strong>33/34</strong> toàn quốc. Với dân số ít nhất cả nước <strong>573,119 người</strong> (xếp hạng <strong>33/34</strong>) và diện tích <strong>6,700.39 km²</strong> (xếp hạng <strong>23/34</strong>), Cao Bằng có mật độ dân số rất thấp.</p>

      <h3>Địa lý và tài nguyên thiên nhiên</h3>
      <p>Cao Bằng là tỉnh miền núi phía Bắc có biên giới với Trung Quốc, nổi tiếng với thác Bản Giốc hùng vĩ - thác nước lớn nhất Việt Nam và non nước đá vôi kỳ thú. Công viên địa chất Non nước Cao Bằng được UNESCO công nhận là công viên địa chất toàn cầu.</p>

      <h3>Ý nghĩa lịch sử</h3>
      <p>Cao Bằng có ý nghĩa lịch sử quan trọng trong phong trào cách mạng Việt Nam. Đây là nơi Chủ tịch Hồ Chí Minh trở về nước năm 1941 và thành lập căn cứ địa cách mạng. Nhiều di tích lịch sử quan trọng được bảo tồn như hang Pác Bó, suối Lê-nin.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Mặc dù kinh tế còn khó khăn, Cao Bằng có tiềm năng lớn về du lịch sinh thái với thác Bản Giốc, du lịch địa chất với công viên UNESCO, du lịch lịch sử cách mạng và thương mại biên giới với Trung Quốc. Cần đầu tư hạ tầng giao thông để khai thác hiệu quả các tiềm năng này.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 25,203,769 triệu đồng (Xếp hạng 34/34)</li>
        <li>Thu ngân sách: 2,476,011 triệu đồng (Xếp hạng 33/34)</li>
        <li>Thu nhập bình quân: 30.70 triệu đồng/năm (Xếp hạng 33/34)</li>
        <li>Dân số: 573,119 người (Xếp hạng 33/34)</li>
        <li>Diện tích: 6,700.39 km² (Xếp hạng 23/34)</li>
        <li>Thủ phủ: Thành phố Cao Bằng</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Cao_B%E1%BA%B1ng" target="_blank">Wikipedia - Cao Bằng</a></li>
        <li><a href="http://caobang.gov.vn/" target="_blank">Cổng thông tin tỉnh Cao Bằng</a></li>
        <li><a href="https://vi.wikipedia.org/wiki/C%C3%B4ng_vi%C3%AAn_%C4%91%E1%BB%8Ba_ch%E1%BA%A5t_Non_n%C6%B0%E1%BB%9Bc_Cao_B%E1%BA%B1ng" target="_blank">Công viên địa chất Non nước Cao Bằng</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 3,
    code: '08',
    name: 'Tuyên Quang',
    slug: 'tuyen-quang',
    oldNames: ['Tuyên Quang', 'Hà Giang'],
    region: 'Bắc Bộ',
    coordinates: { x: 360, y: 120 },
    color: '#45b7d1',
    population: '1,865,270',
    area: '13,795.50 km²',
    description:
      "Tuyên Quang là tỉnh miền núi phía Bắc sau sáp nhập với Hà Giang, được mệnh danh là 'thủ đô của rừng'. Tỉnh có nhiều danh thắng thiên nhiên như Hồ Na Hang, Công viên địa chất Đồng Văn.",
    touristAttractions: [
      {
        name: 'Khu Di tích Tân Trào',
        description: 'Nơi diễn ra Quốc hội đầu tiên của Việt Nam năm 1945',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Sơn Dương',
        url: 'https://vi.wikipedia.org/wiki/T%C3%A2n_Tr%C3%A0o',
      },
      {
        name: 'Hồ Na Hang',
        description: 'Hồ nhân tạo đẹp với nhiều đảo nhỏ và cảnh quan hùng vĩ',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Na Hang',
        url: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_Na_Hang',
      },
      {
        name: 'Công viên địa chất Đồng Văn',
        description: 'Khu vực địa chất đặc biệt với cảnh quan đá vôi hùng vĩ',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Đồng Văn',
        url: 'https://vi.wikipedia.org/wiki/C%C3%B4ng_vi%C3%AAn_%C4%91%E1%BB%8Ba_ch%E1%BA%A5t_%C4%90%E1%BB%93ng_V%C4%83n',
      },
      {
        name: 'Lũng Cú',
        description: 'Cột mốc địa đầu Tổ quốc, điểm cực Bắc của Việt Nam',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Đồng Văn',
        url: 'https://vi.wikipedia.org/wiki/L%C5%A9ng_C%C3%BA',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Tuyên Quang - Vùng núi phía Bắc với tiềm năng phát triển</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Tuyên Quang là tỉnh miền núi với GRDP đạt <strong>88,751,988 triệu đồng</strong>, xếp hạng <strong>20/34</strong> toàn quốc. Thu ngân sách đạt <strong>11,838,569 triệu đồng</strong>, xếp hạng <strong>20/34</strong>. Sau sáp nhập với Hà Giang, tỉnh có quy mô kinh tế lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>36.23 triệu đồng/năm</strong>, xếp hạng <strong>33/34</strong> toàn quốc. Với dân số <strong>1,865,270 người</strong> (xếp hạng <strong>12/34</strong>) và diện tích <strong>13,795.50 km²</strong> (xếp hạng <strong>3/34</strong>), Tuyên Quang có diện tích lớn nhưng mật độ dân số thấp.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Theo quy hoạch mới, Tuyên Quang sáp nhập với Hà Giang tạo thành tỉnh lớn với địa hình chủ yếu là núi cao, nhiều thung lũng và cao nguyên đá. Đây là nơi có nhiều di tích lịch sử cách mạng và là cái nôi của nhiều phong trào yêu nước.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Tỉnh được mệnh danh là "thủ đô của rừng" với tiềm năng lớn về du lịch sinh thái. Có Công viên địa chất Đồng Văn - di sản địa chất thế giới, Hồ Na Hang, cao nguyên đá Đồng Văn với cảnh quan hùng vĩ và văn hóa các dân tộc thiểu số đặc sắc.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 88,751,988 triệu đồng (Xếp hạng 20/34)</li>
        <li>Thu ngân sách: 11,838,569 triệu đồng (Xếp hạng 20/34)</li>
        <li>Thu nhập bình quân: 36.23 triệu đồng/năm (Xếp hạng 33/34)</li>
        <li>Dân số: 1,865,270 người (Xếp hạng 12/34)</li>
        <li>Diện tích: 13,795.50 km² (Xếp hạng 3/34)</li>
        <li>Thủ phủ: Thành phố Tuyên Quang</li>
        <li>Trước sáp nhập: Tuyên Quang + Hà Giang</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Tuy%C3%AAn_Quang" target="_blank">Wikipedia - Tuyên Quang</a></li>
        <li><a href="http://tuyenquang.gov.vn/" target="_blank">Cổng thông tin tỉnh Tuyên Quang</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 4,
    code: '11',
    name: 'Điện Biên',
    slug: 'dien-bien',
    oldNames: ['Điện Biên'],
    region: 'Tây Bắc',
    coordinates: { x: 280, y: 140 },
    color: '#96ceb4',
    population: '673,091',
    area: '9,539.93 km²',
    description:
      'Điện Biên nổi tiếng với chiến thắng Điện Biên Phủ lịch sử năm 1954. Tỉnh có địa hình đồi núi hiểm trở, khí hậu cận nhiệt đới ẩm gió mùa. Đây là nơi sinh sống của nhiều dân tộc thiểu số với văn hóa truyền thống đặc sắc.',
    touristAttractions: [
      {
        name: 'Di tích Chiến trường Điện Biên Phủ',
        description: 'Nơi diễn ra chiến thắng lịch sử năm 1954',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Điện Biên Phủ',
        url: 'https://vi.wikipedia.org/wiki/Tr%E1%BA%ADn_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7',
      },
      {
        name: 'Đồi A1',
        description: 'Địa điểm quan trọng trong chiến dịch Điện Biên Phủ',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Thành phố Điện Biên Phủ',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93i_A1',
      },
      {
        name: 'Thung lũng Mường Thanh',
        description: 'Thung lũng đẹp với những cánh đồng lúa bao la',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Thành phố Điện Biên Phủ',
        url: 'https://vi.wikipedia.org/wiki/M%C6%B0%E1%BB%9Dng_Thanh',
      },
      {
        name: 'Bản Phủ',
        description: 'Làng văn hóa truyền thống của dân tộc Thái',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Điện Biên',
        url: 'https://vi.wikipedia.org/wiki/B%E1%BA%A3n_Ph%E1%BB%A7',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Điện Biên - Vùng đất lịch sử và đa dạng văn hóa</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Điện Biên là tỉnh miền núi với GRDP đạt <strong>31,663,387 triệu đồng</strong>, xếp hạng <strong>32/34</strong> toàn quốc. Thu ngân sách đạt <strong>1,574,989 triệu đồng</strong>, xếp hạng <strong>34/34</strong>. Tuy kinh tế còn khiêm tốn nhưng tỉnh có ý nghĩa lịch sử quan trọng và tiềm năng du lịch lớn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>28.20 triệu đồng/năm</strong>, xếp hạng <strong>32/34</strong> toàn quốc. Với dân số <strong>673,091 người</strong> (xếp hạng <strong>32/34</strong>) và diện tích <strong>9,539.93 km²</strong> (xếp hạng <strong>14/34</strong>), Điện Biên có diện tích lớn với mật độ dân số thấp.</p>

      <h3>Vị trí lịch sử và văn hóa</h3>
      <p>Điện Biên nổi tiếng với chiến thắng Điện Biên Phủ lịch sử năm 1954 - sự kiện "lừng lẫy năm châu, chấn động địa cầu". Tỉnh có địa hình đồi núi hiểm trở, khí hậu cận nhiệt đới ẩm gió mùa. Đây là nơi sinh sống của nhiều dân tộc thiểu số với văn hóa truyền thống đặc sắc và phong tục tập quán độc đáo.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Điện Biên có tiềm năng lớn về du lịch lịch sử với các di tích Điện Biên Phủ, du lịch văn hóa dân tộc thiểu số và du lịch sinh thái. Tỉnh có vị trí biên giới quan trọng, gần các tuyến giao thương với Lào, tạo cơ hội phát triển thương mại biên giới và các sản phẩm nông nghiệp đặc sản vùng cao.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 31,663,387 triệu đồng (Xếp hạng 32/34)</li>
        <li>Thu ngân sách: 1,574,989 triệu đồng (Xếp hạng 34/34)</li>
        <li>Thu nhập bình quân: 28.20 triệu đồng/năm (Xếp hạng 32/34)</li>
        <li>Dân số: 673,091 người (Xếp hạng 32/34)</li>
        <li>Diện tích: 9,539.93 km² (Xếp hạng 14/34)</li>
        <li>Thủ phủ: Thành phố Điện Biên Phủ</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_Bi%C3%AAn" target="_blank">Wikipedia - Điện Biên</a></li>
        <li><a href="http://dienbien.gov.vn/" target="_blank">Cổng thông tin tỉnh Điện Biên</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 5,
    code: '12',
    name: 'Lai Châu',
    slug: 'lai-chau',
    oldNames: ['Lai Châu'],
    region: 'Tây Bắc',
    coordinates: { x: 260, y: 120 },
    color: '#feca57',
    population: '512,601',
    area: '9,068.73 km²',
    description:
      'Lai Châu là tỉnh miền núi Tây Bắc, có nhiều thung lũng màu mỡ và đỉnh núi cao. Tỉnh được biết đến với các sản phẩm nông nghiệp chất lượng cao như chè Shan Tuyết, các loại quả đặc sản. Đây là nơi sinh sống chủ yếu của đồng bào dân tộc Thái với nền văn hóa độc đáo.',
    touristAttractions: [
      {
        name: 'Đèo Ô Quy Hồ',
        description: 'Đèo dài và đẹp nhất Việt Nam với cảnh quan hùng vĩ',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Tam Đường',
        url: 'https://vi.wikipedia.org/wiki/Ho%C3%A0ng_th%C3%A0nh_Th%C4%83ng_Long',
      },
      {
        name: 'Thị trấn Tam Đường',
        description: 'Thị trấn ở độ cao 900m với khí hậu mát mẻ quanh năm',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Tam Đường',
        url: 'https://vi.wikipedia.org/wiki/Th%C3%A1c_B%E1%BA%A3n_Gi%E1%BB%91c',
      },
      {
        name: 'Bản Hồ',
        description: 'Làng dân tộc Thái với văn hóa truyền thống độc đáo',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Sìn Hồ',
        url: 'https://vi.wikipedia.org/wiki/Chi%E1%BA%BFn_d%E1%BB%8Bch_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7',
      },
      {
        name: 'Thung lũng Mường Tè',
        description: 'Thung lũng biên giới tuyệt đẹp giáp Trung Quốc',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Mường Tè',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%C3%A8o_%C3%94_Quy_H%E1%BB%93',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Lai Châu - Vùng cao nguyên Tây Bắc</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Lai Châu là tỉnh miền núi với GRDP đạt <strong>31,024,867 triệu đồng</strong>, xếp hạng <strong>33/34</strong> toàn quốc. Thu ngân sách đạt <strong>2,509,439 triệu đồng</strong>, xếp hạng <strong>32/34</strong>. Tuy kinh tế còn khiêm tốn nhưng tỉnh có tiềm năng lớn về nông nghiệp vùng cao và du lịch sinh thái.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>30.40 triệu đồng/năm</strong>, xếp hạng <strong>33/34</strong> toàn quốc. Với dân số ít nhất cả nước <strong>512,601 người</strong> (xếp hạng <strong>34/34</strong>) và diện tích <strong>9,068.73 km²</strong> (xếp hạng <strong>16/34</strong>), Lai Châu có mật độ dân số rất thấp.</p>

      <h3>Địa lý và tài nguyên</h3>
      <p>Lai Châu là tỉnh miền núi Tây Bắc, có nhiều thung lũng màu mỡ và đỉnh núi cao. Tỉnh được biết đến với các sản phẩm nông nghiệp chất lượng cao như chè Shan Tuyết, các loại quả đặc sản. Đây là nơi sinh sống chủ yếu của đồng bào dân tộc Thái với nền văn hóa độc đáo.</p>

      <h3>Văn hóa dân tộc</h3>
      <p>Lai Châu là tỉnh có đông đồng bào dân tộc thiểu số, chủ yếu là người Thái, Mông, Khơ Mú với những nền văn hóa truyền thống đặc sắc. Các lễ hội dân tộc, nghề thủ công truyền thống và ẩm thực dân tộc tạo nên bản sắc văn hóa đặc trưng của vùng cao Tây Bắc.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Mặc dù kinh tế còn khó khăn, Lai Châu có tiềm năng lớn về du lịch sinh thái, du lịch văn hóa cộng đồng, nông nghiệp đặc sản vùng cao như chè Shan Tuyết, cà phê và các sản phẩm nông nghiệp hữu cơ. Cần đầu tư hạ tầng giao thông để khai thác hiệu quả các tiềm năng này.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 31,024,867 triệu đồng (Xếp hạng 33/34)</li>
        <li>Thu ngân sách: 2,509,439 triệu đồng (Xếp hạng 32/34)</li>
        <li>Thu nhập bình quân: 30.40 triệu đồng/năm (Xếp hạng 33/34)</li>
        <li>Dân số: 512,601 người (Xếp hạng 34/34)</li>
        <li>Diện tích: 9,068.73 km² (Xếp hạng 16/34)</li>
        <li>Thủ phủ: Thành phố Lai Châu</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Lai_Ch%C3%A2u" target="_blank">Wikipedia - Lai Châu</a></li>
        <li><a href="http://laichau.gov.vn/" target="_blank">Cổng thông tin tỉnh Lai Châu</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 6,
    code: '14',
    name: 'Sơn La',
    slug: 'son-la',
    oldNames: ['Sơn La'],
    region: 'Tây Bắc',
    coordinates: { x: 320, y: 160 },
    color: '#ff9ff3',
    population: '1,404,587',
    area: '14,108.89 km²',
    description:
      'Sơn La là tỉnh có diện tích lớn nhất miền Bắc, nổi tiếng với nhà tù Sơn La - di tích lịch sử quan trọng. Tỉnh có thế mạnh về thủy điện với nhà máy thủy điện Sơn La lớn nhất Đông Nam Á. Đây cũng là vùng trồng chè, cà phê và các cây ăn quả có múi chất lượng cao.',
    touristAttractions: [
      {
        name: 'Nhà tù Sơn La',
        description: 'Di tích lịch sử quan trọng thời kỳ đấu tranh cách mạng',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Sơn La',
        url: 'https://vi.wikipedia.org/wiki/Nh%C3%A0_t%C3%B9_S%C6%A1n_La',
      },
      {
        name: 'Thác Đăk',
        description: 'Thác nước đẹp với cảnh quan thiên nhiên hoang sơ',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Mường Lay',
        url: 'https://sonla.gov.vn/vi-VN/1/3034/17/231/tintuc/thac-dak.aspx',
      },
      {
        name: 'Hồ thủy điện Sơn La',
        description: 'Hồ nhân tạo lớn nhất Đông Nam Á với cảnh quan hùng vĩ',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Mường La',
        url: 'https://sonla.gov.vn/vi-VN/1/3034/17/231/tintuc/ho-thuy-dien-son-la.aspx',
      },
      {
        name: 'Cầu kính Bạch Long',
        description: 'Cầu kính dài nhất thế giới với tầm nhìn nspectacular',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Mộc Châu',
        url: 'https://sonla.gov.vn/vi-VN/1/3034/17/231/tintuc/cau-kinh-bach-long.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Sơn La - Thủy điện và vùng cao nguyên Tây Bắc</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Sơn La là tỉnh miền núi với GRDP đạt <strong>76,626,373 triệu đồng</strong>, xếp hạng <strong>30/34</strong> toàn quốc. Thu ngân sách đạt <strong>4,138,845 triệu đồng</strong>, xếp hạng <strong>31/34</strong>. Tuy kinh tế còn khiêm tốn nhưng tỉnh có tiềm năng lớn về thủy điện và nông nghiệp.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>32.50 triệu đồng/năm</strong>, xếp hạng <strong>34/34</strong> toàn quốc. Với dân số <strong>1,404,587 người</strong> (xếp hạng <strong>30/34</strong>) và diện tích <strong>14,108.89 km²</strong> (xếp hạng <strong>6/34</strong>), Sơn La có diện tích lớn nhất miền Bắc với mật độ dân số thấp.</p>

      <h3>Vị trí địa lý và thế mạnh</h3>
      <p>Sơn La là tỉnh có diện tích lớn nhất miền Bắc, nổi tiếng với nhà tù Sơn La - di tích lịch sử quan trọng thời kỳ đấu tranh giải phóng dân tộc. Tỉnh có thế mạnh về thủy điện với nhà máy thủy điện Sơn La lớn nhất Đông Nam Á, góp phần quan trọng vào an ninh năng lượng quốc gia.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Sơn La có tiềm năng lớn về thủy điện, du lịch sinh thái và nông nghiệp vùng cao. Tỉnh là vùng trồng chè, cà phê và các cây ăn quả có múi chất lượng cao. Với địa hình núi cao và khí hậu đặc trưng, Sơn La có nhiều cơ hội phát triển du lịch cộng đồng và các sản phẩm nông nghiệp đặc sản.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 76,626,373 triệu đồng (Xếp hạng 30/34)</li>
        <li>Thu ngân sách: 4,138,845 triệu đồng (Xếp hạng 31/34)</li>
        <li>Thu nhập bình quân: 32.50 triệu đồng/năm (Xếp hạng 34/34)</li>
        <li>Dân số: 1,404,587 người (Xếp hạng 30/34)</li>
        <li>Diện tích: 14,108.89 km² (Xếp hạng 6/34)</li>
        <li>Thủ phủ: Thành phố Sơn La</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/S%C6%A1n_La" target="_blank">Wikipedia - Sơn La</a></li>
        <li><a href="http://sonla.gov.vn/" target="_blank">Cổng thông tin tỉnh Sơn La</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 7,
    code: '15',
    name: 'Lào Cai',
    slug: 'lao-cai',
    oldNames: ['Lào Cai', 'Yên Bái'],
    region: 'Tây Bắc',
    coordinates: { x: 340, y: 100 },
    color: '#74b9ff',
    population: '1,778,785',
    area: '13,256.92 km²',
    description:
      'Lào Cai là tỉnh biên giới phía Bắc sau sáp nhập với Yên Bái, nổi tiếng với Sa Pa - điểm du lịch nổi tiếng thế giới. Tỉnh có đỉnh Fansipan - nóc nhà Đông Dương cao 3,143m. Đây là nơi sinh sống của nhiều dân tộc thiểu số với những thửa ruộng bậc thang tuyệt đẹp.',
    touristAttractions: [
      {
        name: 'Sa Pa',
        description:
          "Thị trấn du lịch nổi tiếng thế giới với khí hậu mát mẻ, ruộng bậc thang tuyệt đẹp và văn hóa dân tộc H'Mông, Dao.",
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Sa Pa, Lào Cai',
        url: 'https://vi.wikipedia.org/wiki/Sa_Pa',
      },
      {
        name: 'Đỉnh Fansipan',
        description:
          'Nóc nhà Đông Dương cao 3.143m, có thể chinh phục bằng cáp treo hoặc trekking, ngắm toàn cảnh núi rừng Tây Bắc.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Sa Pa, Lào Cai',
        url: 'https://vi.wikipedia.org/wiki/Fansipan',
      },
      {
        name: 'Thung Lũng Mường Hoa',
        description:
          "Thung lũng với những ruộng bậc thang đẹp nhất Việt Nam, là bối cảnh sống của đồng bào H'Mông, Dao.",
        imageUrl:
          'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Sa Pa, Lào Cai',
        url: 'https://vi.wikipedia.org/wiki/Sa_Pa',
      },
      {
        name: 'Bản Cát Cát',
        description: "Làng văn hóa du lịch của người H'Mông với những ngôi nhà sàn truyền thống và thác nước Cát Cát.",
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Sa Pa, Lào Cai',
      },
      {
        name: 'Cầu Kính Rồng Mây',
        description: 'Cây cầu kính dài 60m bắc qua thung lũng sâu, mang lại trải nghiệm mạo hiểm giữa núi rừng Sa Pa.',
        imageUrl:
          'https://images.unsplash.com/photo-1551524164-6cf2ac240e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Sa Pa, Lào Cai',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Lào Cai - Thiên đường du lịch miền núi phía Bắc</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Lào Cai là tỉnh miền núi với GRDP đạt <strong>88,089,394 triệu đồng</strong>, xếp hạng <strong>21/34</strong> toàn quốc. Thu ngân sách đạt <strong>15,298,559 triệu đồng</strong>, xếp hạng <strong>17/34</strong>. Sau sáp nhập với Yên Bái, tỉnh có quy mô kinh tế và tiềm năng phát triển lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>37.71 triệu đồng/năm</strong>, xếp hạng <strong>32/34</strong> toàn quốc. Với dân số <strong>1,778,785 người</strong> (xếp hạng <strong>13/34</strong>) và diện tích <strong>13,256.92 km²</strong> (xếp hạng <strong>4/34</strong>), Lào Cai có diện tích lớn và tiềm năng phát triển du lịch cao.</p>

      <h3>Vị trí địa lý và du lịch</h3>
      <p>Lào Cai là tỉnh biên giới phía Bắc, nổi tiếng với Sa Pa - điểm du lịch nổi tiếng thế giới với khí hậu mát mẻ quanh năm. Tỉnh có đỉnh Fansipan - nóc nhà Đông Dương cao 3,143m. Đây là nơi sinh sống của nhiều dân tộc thiểu số với văn hóa đặc sắc và những thửa ruộng bậc thang tuyệt đẹp.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Sau sáp nhập với Yên Bái, Lào Cai trở thành tỉnh có diện tích lớn với tiềm năng du lịch sinh thái, du lịch văn hóa và thương mại biên giới. Tỉnh có thế mạnh về nông nghiệp vùng cao, chăn nuôi và các sản phẩm đặc trưng như trà, thuốc nam.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 88,089,394 triệu đồng (Xếp hạng 21/34)</li>
        <li>Thu ngân sách: 15,298,559 triệu đồng (Xếp hạng 17/34)</li>
        <li>Thu nhập bình quân: 37.71 triệu đồng/năm (Xếp hạng 32/34)</li>
        <li>Dân số: 1,778,785 người (Xếp hạng 13/34)</li>
        <li>Diện tích: 13,256.92 km² (Xếp hạng 4/34)</li>
        <li>Thủ phủ: Thành phố Lào Cai</li>
        <li>Trước sáp nhập: Lào Cai + Yên Bái</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/L%C3%A0o_Cai" target="_blank">Wikipedia - Lào Cai</a></li>
        <li><a href="http://laocai.gov.vn/" target="_blank">Cổng thông tin tỉnh Lào Cai</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 8,
    code: '19',
    name: 'Thái Nguyên',
    slug: 'thai-nguyen',
    oldNames: ['Thái Nguyên', 'Bắc Kạn'],
    region: 'Bắc Bộ',
    coordinates: { x: 390, y: 150 },
    color: '#a29bfe',
    population: '1,799,489',
    area: '8,375.21 km²',
    description:
      "Thái Nguyên được mệnh danh là 'thủ đô chè' của Việt Nam với truyền thống trồng chè hàng trăm năm. Tỉnh là trung tâm công nghiệp quan trọng với nhiều khu công nghiệp lớn. Sau sáp nhập với Bắc Kạn, Thái Nguyên tạo thành một tỉnh có tiềm năng phát triển lớn.",
    touristAttractions: [
      {
        name: 'Hồ Núi Cốc',
        description: 'Hồ nhân tạo tuyệt đẹp với cảnh quan hoang sơ',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Đại Từ',
        url: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_N%C3%BAi_C%E1%BB%91c',
      },
      {
        name: 'Bảo tàng Văn hóa các dân tộc Việt Nam',
        description: 'Bảo tàng trưng bày văn hóa 54 dân tộc Việt Nam',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Thái Nguyên',
        url: 'https://vme.org.vn/',
      },
      {
        name: 'Khu di tích ATK Định Hóa',
        description: 'Căn cứ kháng chiến lịch sử của Đảng và Chính phủ',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Định Hóa',
        url: 'https://thainguyen.gov.vn/vi-VN/1/3034/17/231/tintuc/khu-di-tich-atk-dinh-hoa.aspx',
      },
      {
        name: 'Động Phượng Hoàng',
        description: 'Động đá vôi với những khối thạch nhũ đẹp mắt',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Đông Hy',
        url: 'https://thainguyen.gov.vn/vi-VN/1/3034/17/231/tintuc/dong-phuong-hoang.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Thái Nguyên - Thủ đô chè và trung tâm công nghiệp Bắc Bộ</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Thái Nguyên là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>185,613,943 triệu đồng</strong>, xếp hạng <strong>23/34</strong> toàn quốc. Thu ngân sách đạt <strong>21,057,020 triệu đồng</strong>, xếp hạng <strong>22/34</strong>. Sau sáp nhập với Bắc Kạn, tỉnh có quy mô kinh tế và diện tích lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>57.55 triệu đồng/năm</strong>, xếp hạng <strong>26/34</strong> toàn quốc. Với dân số <strong>1,799,489 người</strong> (xếp hạng <strong>25/34</strong>) và diện tích <strong>8,375.21 km²</strong> (xếp hạng <strong>19/34</strong>), Thái Nguyên có quy mô trung bình với tiềm năng phát triển công nghiệp.</p>

      <h3>Vị trí địa lý và đặc sản</h3>
      <p>Thái Nguyên được mệnh danh là "thủ đô chè" của Việt Nam với truyền thống trồng chè hàng trăm năm và sản phẩm chè Thái Nguyên nổi tiếng. Tỉnh là trung tâm công nghiệp quan trọng với nhiều khu công nghiệp lớn và có Đại học Thái Nguyên - trung tâm giáo dục quan trọng của miền Bắc.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Sau sáp nhập với Bắc Kạn, Thái Nguyên có thêm tiềm năng về du lịch sinh thái, khoáng sản và nông lâm nghiệp. Tỉnh có vị trí giao thông thuận lợi, gần Hà Nội và biên giới Trung Quốc, tạo nhiều cơ hội phát triển thương mại, công nghiệp và du lịch.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 185,613,943 triệu đồng (Xếp hạng 23/34)</li>
        <li>Thu ngân sách: 21,057,020 triệu đồng (Xếp hạng 22/34)</li>
        <li>Thu nhập bình quân: 57.55 triệu đồng/năm (Xếp hạng 26/34)</li>
        <li>Dân số: 1,799,489 người (Xếp hạng 25/34)</li>
        <li>Diện tích: 8,375.21 km² (Xếp hạng 19/34)</li>
        <li>Thủ phủ: Thành phố Thái Nguyên</li>
        <li>Trước sáp nhập: Thái Nguyên + Bắc Kạn</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Th%C3%A1i_Nguy%C3%AAn" target="_blank">Wikipedia - Thái Nguyên</a></li>
        <li><a href="http://thainguyen.gov.vn/" target="_blank">Cổng thông tin tỉnh Thái Nguyên</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 9,
    code: '20',
    name: 'Lạng Sơn',
    slug: 'lang-son',
    oldNames: ['Lạng Sơn'],
    region: 'Đông Bắc',
    coordinates: { x: 430, y: 120 },
    color: '#fd79a8',
    population: '881,384',
    area: '8,310.18 km²',
    description:
      'Lạng Sơn là tỉnh biên giới quan trọng với Trung Quốc, có cửa khẩu Đồng Đăng lớn nhất phía Bắc. Tỉnh có nhiều di tích lịch sử như Thành cổ Cây Thị, động Tam Thanh.',
    touristAttractions: [
      {
        name: 'Cửa khẩu Đồng Đăng',
        description: 'Cửa khẩu quốc tế lớn nhất phía Bắc Việt Nam',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Đồng Đăng',
        url: 'https://vi.wikipedia.org/wiki/C%E1%BB%ADa_kh%E1%BA%A9u_%C4%90%E1%BB%93ng_%C4%90%C4%83ng',
      },
      {
        name: 'Động Tam Thanh',
        description: 'Hang động đá vôi tuyệt đẹp với thạch nhũ đa dạng',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Thành phố Lạng Sơn',
        url: 'https://langson.gov.vn/vi-VN/1/3034/17/231/tintuc/dong-tam-thanh.aspx',
      },
      {
        name: 'Thành cổ Cây Thị',
        description: 'Di tích lịch sử từ thời Lý - Trần',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Văn Quan',
        url: 'https://langson.gov.vn/vi-VN/1/3034/17/231/tintuc/thanh-co-cay-thi.aspx',
      },
      {
        name: 'Khu du lịch Mẫu Sơn',
        description: 'Khu du lịch cao nguyên với khí hậu mát mẻ',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Lộc Bình',
        url: 'https://langson.gov.vn/vi-VN/1/3034/17/231/tintuc/khu-du-lich-mau-son.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Lạng Sơn - Cửa khẩu biên giới quan trọng</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Lạng Sơn là tỉnh biên giới với GRDP đạt <strong>49,735,616 triệu đồng</strong>, xếp hạng <strong>31/34</strong>. Thu ngân sách đạt <strong>10,727,290 triệu đồng</strong>, xếp hạng <strong>28/34</strong>. Tuy quy mô kinh tế nhỏ nhưng tỉnh có vị trí chiến lược quan trọng về thương mại biên giới.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>37.20 triệu đồng/năm</strong>, xếp hạng <strong>31/34</strong> toàn quốc. Với dân số <strong>881,384 người</strong> (xếp hạng <strong>31/34</strong>) và diện tích <strong>8,310.18 km²</strong> (xếp hạng <strong>20/34</strong>), Lạng Sơn có mật độ dân số thấp.</p>

      <h3>Vị trí chiến lược và thương mại</h3>
      <p>Lạng Sơn là tỉnh biên giới phía bắc Việt Nam, giáp với Trung Quốc. Tỉnh có vị trí chiến lược quan trọng với cửa khẩu Đồng Đăng - cửa khẩu lớn nhất phía Bắc, đóng vai trò quan trọng trong giao thương Việt - Trung.</p>

      <h3>Di sản lịch sử và văn hóa</h3>
      <p>Lạng Sơn có lịch sử lâu đời với nhiều di tích quan trọng như Thành cổ Cây Thị, động Tam Thanh. Đây là nơi có truyền thống anh hùng với nhiều câu chuyện lịch sử hào hùng. Tỉnh có địa hình núi cao, nhiều thung lũng và sông suối.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Lạng Sơn là cửa ngõ giao thương quan trọng với Trung Quốc, có tiềm năng lớn phát triển thương mại biên giới, logistics và các ngành công nghiệp chế biến phục vụ xuất khẩu. Du lịch lịch sử, văn hóa và sinh thái cũng là hướng phát triển triển vọng.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 49,735,616 triệu đồng (Xếp hạng 31/34)</li>
        <li>Thu ngân sách: 10,727,290 triệu đồng (Xếp hạng 28/34)</li>
        <li>Thu nhập bình quân: 37.20 triệu đồng/năm (Xếp hạng 31/34)</li>
        <li>Dân số: 881,384 người (Xếp hạng 31/34)</li>
        <li>Diện tích: 8,310.18 km² (Xếp hạng 20/34)</li>
        <li>Thủ phủ: Thành phố Lạng Sơn</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/L%E1%BA%A1ng_S%C6%A1n" target="_blank">Wikipedia - Lạng Sơn</a></li>
        <li><a href="http://langson.gov.vn/" target="_blank">Cổng thông tin tỉnh Lạng Sơn</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 10,
    code: '22',
    name: 'Quảng Ninh',
    slug: 'quang-ninh',
    oldNames: ['Quảng Ninh'],
    region: 'Đông Bắc',
    coordinates: { x: 460, y: 150 },
    color: '#00b894',
    population: '1,429,841',
    area: '6,207.9 km²',
    description:
      'Quảng Ninh là tỉnh ven biển nổi tiếng với vịnh Hạ Long - di sản thiên nhiên thế giới. Tỉnh có nhiều đảo đẹp, hang động kỳ thú và là trung tâm khai thác than quan trọng.',
    touristAttractions: [
      {
        name: 'Vịnh Hạ Long',
        description:
          'Di sản thiên nhiên thế giới UNESCO với hàng nghìn đảo đá vôi kỳ thú, hang động tuyệt đẹp và cảnh quan hùng vĩ.',
        imageUrl:
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'TP Hạ Long, Quảng Ninh',
        url: 'https://vi.wikipedia.org/wiki/V%E1%BB%8Bnh_H%E1%BA%A1_Long',
      },
      {
        name: 'Đảo Cát Bà',
        description: 'Hòn đảo lớn nhất vịnh Hạ Long với công viên quốc gia, bãi biển đẹp và làng chài truyền thống.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Huyện Cát Hải, Quảng Ninh',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A3o_C%C3%A1t_B%C3%A0',
      },
      {
        name: 'Hang Sửng Sốt',
        description: 'Hang động lớn nhất vịnh Hạ Long với nhũ đá tuyệt đẹp và không gian rộng lớn kỳ thú.',
        imageUrl:
          'https://images.unsplash.com/photo-1551524164-6cf2ac240e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Vịnh Hạ Long, Quảng Ninh',
        url: 'https://vi.wikipedia.org/wiki/Hang_S%E1%BB%ADng_S%E1%BB%91t',
      },
      {
        name: 'Làng Chài Cửa Vạn',
        description: 'Làng chài cổ với lịch sử hơn 200 năm, nơi ngư dân sống trên những ngôi nhà nổi truyền thống.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Vân Đồn, Quảng Ninh',
        url: 'https://vi.wikipedia.org/wiki/V%E1%BB%8Bnh_H%E1%BA%A1_Long',
      },
      {
        name: 'Công Viên Quốc Gia Cát Bà',
        description:
          'Khu bảo tồn sinh thái với rừng nguyên sinh và loài voọc Cát Bà quý hiếm, nằm trong quần đảo Cát Bà.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Đảo Cát Bà, Quảng Ninh',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Quảng Ninh - Trung tâm du lịch và công nghiệp</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Quảng Ninh là một trong những trung tâm kinh tế quan trọng của miền Bắc với GRDP đạt <strong>459,162,298 triệu đồng</strong>, xếp hạng <strong>8/34</strong> toàn quốc. Thu ngân sách đạt <strong>136,702,488 triệu đồng</strong>, xếp hạng <strong>8/34</strong>, thể hiện sức mạnh kinh tế của tỉnh.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>244.99 triệu đồng/năm</strong>, xếp hạng <strong>1/34</strong> toàn quốc - cao nhất cả nước. Với dân số <strong>1,429,841 người</strong> (xếp hạng <strong>15/34</strong>) và diện tích <strong>6,207.9 km²</strong> (xếp hạng <strong>18/34</strong>), Quảng Ninh có mức sống cao nhất Việt Nam.</p>

      <h3>Vị trí địa lý và du lịch</h3>
      <p>Quảng Ninh là tỉnh ven biển phía đông bắc Việt Nam, nổi tiếng với danh thắng Vịnh Hạ Long - Di sản thiên nhiên thế giới được UNESCO công nhận. Tỉnh giáp Trung Quốc về phía đông bắc và có đường bờ biển dài với nhiều đảo đẹp, tạo nên tiềm năng du lịch và thương mại biên giới lớn.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Quảng Ninh có vị trí chiến lược quan trọng, là cửa ngõ giao thương với Trung Quốc và trung tâm du lịch hàng đầu. Vịnh Hạ Long với hàng nghìn đảo đá vôi kỳ thú là điểm đến hàng đầu của du lịch Việt Nam. Tỉnh còn phát triển mạnh khai thác than đá và các ngành công nghiệp khác.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 459,162,298 triệu đồng (Xếp hạng 8/34)</li>
        <li>Thu ngân sách: 136,702,488 triệu đồng (Xếp hạng 8/34)</li>
        <li>Thu nhập bình quân: 244.99 triệu đồng/năm (Xếp hạng 1/34)</li>
        <li>Dân số: 1,429,841 người (Xếp hạng 15/34)</li>
        <li>Diện tích: 6,207.9 km² (Xếp hạng 18/34)</li>
        <li>Thủ phủ: Thành phố Hạ Long</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Quảng_Ninh" target="_blank">Wikipedia - Quảng Ninh</a></li>
        <li><a href="https://quangninh.gov.vn/" target="_blank">Cổng thông tin tỉnh Quảng Ninh</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 11,
    code: '24',
    name: 'Bắc Ninh',
    slug: 'bac-ninh',
    oldNames: ['Bắc Ninh', 'Bắc Giang'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 420, y: 180 },
    color: '#e17055',
    population: '3,619,433',
    area: '4,718.6 km²',
    description:
      'Bắc Ninh sau sáp nhập với Bắc Giang trở thành tỉnh có mật độ dân số cao, nổi tiếng với làng quan họ và các khu công nghiệp. Tỉnh có truyền thống văn hóa dân gian phong phú và là trung tâm công nghiệp quan trọng.',
    touristAttractions: [
      {
        name: 'Đền Đô',
        description: 'Đền thờ 8 vị vua nhà Lý, kiến trúc cổ kính và linh thiêng',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Bắc Ninh',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_%C4%90%C3%B4',
      },
      {
        name: 'Làng Quan họ Bắc Ninh',
        description: 'Nôi của dân ca quan họ - di sản văn hóa phi vật thể',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Gia Bình',
        url: 'https://vi.wikipedia.org/wiki/Quan_h%E1%BB%8D_B%E1%BA%AFc_Ninh',
      },
      {
        name: 'Chùa Dâu',
        description: 'Ngôi chùa cổ nhất Việt Nam, trung tâm Phật giáo',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Thuận Thành',
        url: 'https://vi.wikipedia.org/wiki/Ch%C3%B9a_D%C3%A2u',
      },
      {
        name: 'Đền Kiếp Bạc',
        description: 'Đền thờ Trần Hưng Đạo, anh hùng dân tộc',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Hiệp Hòa',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Ki%E1%BA%BFp_B%E1%BA%A1c',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Bắc Ninh - Trung tâm công nghiệp công nghệ cao</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Bắc Ninh là một trong những trung tâm công nghiệp hàng đầu với GRDP đạt <strong>504,513,894 triệu đồng</strong>, xếp hạng <strong>7/34</strong> toàn quốc. Thu ngân sách đạt <strong>151,043,775 triệu đồng</strong>, xếp hạng <strong>6/34</strong>, cho thấy hiệu quả kinh tế cao của tỉnh.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>106.25 triệu đồng/năm</strong>, xếp hạng <strong>7/34</strong> toàn quốc. Với dân số <strong>3,619,433 người</strong> (xếp hạng <strong>7/34</strong>) và diện tích <strong>4,718.6 km²</strong> (xếp hạng <strong>24/34</strong>), Bắc Ninh có mật độ dân số rất cao và là trung tâm công nghiệp tập trung.</p>

      <h3>Vị trí địa lý và văn hóa</h3>
      <p>Bắc Ninh được mệnh danh là "đất tổ" văn hóa Việt Nam, nổi tiếng với làng quan họ và nhiều di tích lịch sử quan trọng. Tỉnh có vị trí địa lý thuận lợi, gần Hà Nội, tạo điều kiện phát triển công nghiệp và dịch vụ. Sau sáp nhập với Bắc Giang, tỉnh trở thành một trung tâm kinh tế lớn.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Bắc Ninh là trung tâm công nghiệp công nghệ cao quan trọng với nhiều khu công nghiệp lớn, đặc biệt trong lĩnh vực điện tử và công nghệ thông tin. Tỉnh có hạ tầng phát triển và lực lượng lao động chất lượng cao, là điểm đến hấp dẫn cho các nhà đầu tư trong và ngoài nước.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 504,513,894 triệu đồng (Xếp hạng 7/34)</li>
        <li>Thu ngân sách: 151,043,775 triệu đồng (Xếp hạng 6/34)</li>
        <li>Thu nhập bình quân: 106.25 triệu đồng/năm (Xếp hạng 7/34)</li>
        <li>Dân số: 3,619,433 người (Xếp hạng 7/34)</li>
        <li>Diện tích: 4,718.6 km² (Xếp hạng 24/34)</li>
        <li>Thủ phủ: Thành phố Bắc Ninh</li>
        <li>Trước sáp nhập: Bắc Ninh + Bắc Giang</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/B%E1%BA%AFc_Ninh" target="_blank">Wikipedia - Bắc Ninh</a></li>
        <li><a href="http://bacninh.gov.vn/" target="_blank">Cổng thông tin tỉnh Bắc Ninh</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 12,
    code: '25',
    name: 'Phú Thọ',
    slug: 'phu-tho',
    oldNames: ['Phú Thọ', 'Hòa Bình', 'Vĩnh Phúc'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 360, y: 160 },
    color: '#0984e3',
    population: '4,022,638',
    area: '9,361.38 km²',
    description:
      "Phú Thọ được mệnh danh là 'đất tổ' của dân tộc Việt Nam với đền Hùng - nơi thờ các vua Hùng. Tỉnh có vị trí giao thông quan trọng, là cầu nối giữa Hà Nội và các tỉnh Tây Bắc. Sau sáp nhập với Hòa Bình và Vĩnh Phúc, Phú Thọ có tiềm năng phát triển kinh tế lớn.",
    touristAttractions: [
      {
        name: 'Đền Hùng',
        description: 'Nơi thờ tổ tiên dân tộc Việt Nam - các vua Hùng',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Phú Ninh',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_H%C3%B9ng',
      },
      {
        name: 'Khu di tích Hùng Vương',
        description: 'Khu vực linh thiêng với nhiều đền, đình, chùa cổ',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Phú Ninh',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_H%C3%B9ng',
      },
      {
        name: 'Xuân Sơn',
        description: 'Vườn quốc gia với hệ sinh thái đa dạng',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Tân Sơn',
        url: 'https://phutho.gov.vn/vi-VN/1/3034/17/231/tintuc/vuon-quoc-gia-xuan-son.aspx',
      },
      {
        name: 'Hồ Hòa Bình',
        description: 'Hồ nhân tạo lớn với cảnh quan thiên nhiên tuyệt đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Thành phố Hòa Bình',
        url: 'https://hoabinh.gov.vn/vi-VN/1/3034/17/231/tintuc/ho-hoa-binh.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Phú Thọ - Đất tổ dân tộc và trung tâm kinh tế quan trọng</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Phú Thọ là một trong những trung tâm kinh tế quan trọng với GRDP đạt <strong>449,336,598 triệu đồng</strong>, xếp hạng <strong>9/34</strong> toàn quốc. Thu ngân sách đạt <strong>61,799,876 triệu đồng</strong>, xếp hạng <strong>9/34</strong>, thể hiện tiềm lực kinh tế mạnh mẽ sau sáp nhập.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>85.10 triệu đồng/năm</strong>, xếp hạng <strong>11/34</strong> toàn quốc. Với dân số <strong>4,022,638 người</strong> (xếp hạng <strong>6/34</strong>) và diện tích <strong>9,361.38 km²</strong> (xếp hạng <strong>9/34</strong>), Phú Thọ là một trong những tỉnh có quy mô lớn sau sáp nhập.</p>

      <h3>Vị trí văn hóa và lịch sử</h3>
      <p>Phú Thọ được mệnh danh là "đất tổ" của dân tộc Việt Nam với đền Hùng - nơi thờ các vua Hùng, tổ tiên của dân tộc Việt. Tỉnh có vị trí giao thông quan trọng, là cầu nối giữa Hà Nội và các tỉnh Tây Bắc. Sau sáp nhập với Hòa Bình và Vĩnh Phúc, tỉnh có thêm nhiều tiềm năng phát triển.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Phú Thọ có vị trí địa lý thuận lợi, gần Hà Nội, với hạ tầng giao thông phát triển. Tỉnh có tiềm năng lớn về du lịch tâm linh với đền Hùng, công nghiệp chế biến và dịch vụ. Việc sáp nhập tạo ra một tỉnh có quy mô kinh tế lớn với nhiều lợi thế c경쟁 tranh.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 449,336,598 triệu đồng (Xếp hạng 9/34)</li>
        <li>Thu ngân sách: 61,799,876 triệu đồng (Xếp hạng 9/34)</li>
        <li>Thu nhập bình quân: 85.10 triệu đồng/năm (Xếp hạng 11/34)</li>
        <li>Dân số: 4,022,638 người (Xếp hạng 6/34)</li>
        <li>Diện tích: 9,361.38 km² (Xếp hạng 9/34)</li>
        <li>Thủ phủ: Thành phố Việt Trì</li>
        <li>Trước sáp nhập: Phú Thọ + Hòa Bình + Vĩnh Phúc</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Ph%C3%BA_Th%E1%BB%8D" target="_blank">Wikipedia - Phú Thọ</a></li>
        <li><a href="http://phuthe.gov.vn/" target="_blank">Cổng thông tin tỉnh Phú Thọ</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 13,
    code: '31',
    name: 'Thành phố Hải Phòng',
    slug: 'hai-phong',
    oldNames: ['Hải Phòng', 'Hải Dương'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 440, y: 200 },
    color: '#6c5ce7',
    population: '4,664,124',
    area: '3,194.72 km²',
    description:
      'Hải Phòng sau sáp nhập với Hải Dương trở thành thành phố trực thuộc Trung ương lớn nhất miền Bắc, là cảng biển quan trọng và trung tâm công nghiệp. Thành phố có lịch sử lâu đời và nhiều di tích văn hóa.',
    touristAttractions: [
      {
        name: 'Bãi Cháy',
        description: 'Bãi biển đẹp và sạch với nhiều hoạt động giải trí',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Quận Đồ Sơn',
        url: 'https://vi.wikipedia.org/wiki/B%C3%A3i_Ch%C3%A1y',
      },
      {
        name: 'Đảo Cát Bà',
        description: 'Đảo lớn nhất trong vịnh Lan Hạ với cảnh đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Cát Hải',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A3o_C%C3%A1t_B%C3%A0',
      },
      {
        name: 'Nhà hát lớn Hải Phòng',
        description: 'Kiến trúc Pháp cổ điển, trung tâm văn hóa nghệ thuật',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Quận Hồng Bàng',
        url: 'https://haiphong.gov.vn/vi-VN/1/3034/17/231/tintuc/nha-hat-lon-hai-phong.aspx',
      },
      {
        name: 'Cầu Bính',
        description: 'Cầu xoay độc đáo, biểu tượng của thành phố cảng',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Quận Lê Chân',
        url: 'https://haiphong.gov.vn/vi-VN/1/3034/17/231/tintuc/cau-binh.aspx',
      },
    ],
    fullPageContent: `
      <h2>Thành phố Hải Phòng</h2>
      <p>Hải Phòng là thành phố cảng lớn nhất miền Bắc Việt Nam sau khi sáp nhập với Hải Dương, là cửa ngõ ra biển quan trọng của cả nước với hệ thống cảng hiện đại.</p>
      
      <h3>Lịch sử và Sáp nhập</h3>
      <p>Theo quy hoạch mới, Hải Phòng sáp nhập với Hải Dương tạo thành thành phố với diện tích 3.194,72 km² và dân số 4.664.124 người, trở thành trung tâm kinh tế biển quan trọng.</p>
      
      <h3>Địa lý và Dân số</h3>
      <ul>
        <li>Diện tích: 3.194,72 km² (xếp hạng 33/34)</li>
        <li>Dân số: 4.664.124 người (xếp hạng 4/34)</li>
        <li>Bao gồm: Hải Phòng cũ + Hải Dương cũ</li>
      </ul>
      
      <h3>Kinh tế</h3>
      <p>Hải Phòng là trung tâm kinh tế biển mạnh với các chỉ số ấn tượng:</p>
      <ul>
        <li>GRDP 2024: 658,318,192 triệu đồng (xếp hạng 3/34)</li>
        <li>Thu ngân sách: 148,383,113 triệu đồng (xếp hạng 3/34)</li>
        <li>Thu nhập bình quân: 78.75 triệu đồng/năm</li>
      </ul>
      
      <h3>Cảng biển và Logistics</h3>
      <p>Cảng Hải Phòng là một trong những cảng container lớn nhất Đông Nam Á, đóng vai trò quan trọng trong thương mại quốc tế và logistics của Việt Nam.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/H%E1%BA%A3i_Ph%C3%B2ng" target="_blank">Wikipedia - Hải Phòng</a></li>
        <li><a href="https://haiphong.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Hải Phòng</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 14,
    code: '33',
    name: 'Hưng Yên',
    slug: 'hung-yen',
    oldNames: ['Hưng Yên', 'Thái Bình'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 400, y: 200 },
    color: '#fd79a8',
    population: '3,567,943',
    area: '2,514.81 km²',
    description:
      'Hưng Yên là tỉnh nằm trong vùng kinh tế trọng điểm Bắc Bộ, có nhiều làng nghề truyền thống. Tỉnh nổi tiếng với nhãn lồng Hưng Yên và các sản phẩm nông nghiệp chất lượng cao. Sau sáp nhập với Thái Bình, tỉnh có diện tích và dân số lớn hơn đáng kể.',
    touristAttractions: [
      {
        name: 'Đền Chu Đồng Tử',
        description: 'Đền thờ Chu Đồng Tử - người anh hùng trong truyền thuyết',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Văn Lâm',
        url: 'https://hungyen.gov.vn/vi-VN/1/3034/17/231/tintuc/den-chu-dong-tu.aspx',
      },
      {
        name: 'Phố Hiến',
        description: 'Phố cổ với kiến trúc truyền thống và lịch sử lâu đời',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Thành phố Hưng Yên',
        url: 'https://hungyen.gov.vn/vi-VN/1/3034/17/231/tintuc/pho-hien.aspx',
      },
      {
        name: 'Làng nghề Đức Hòa',
        description: 'Làng nghề truyền thống nổi tiếng về sản xuất đồ gỗ',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Kim Động',
        url: 'https://hungyen.gov.vn/vi-VN/1/3034/17/231/tintuc/lang-nghe-duc-hoa.aspx',
      },
      {
        name: 'Vườn nhãn Hưng Yên',
        description: 'Vườn nhãn lồng nổi tiếng với trái ngọt thơm đặc trưng',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Văn Giang',
        url: 'https://hungyen.gov.vn/vi-VN/1/3034/17/231/tintuc/vuon-nhan-hung-yen.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Hưng Yên - Trung tâm nông nghiệp và làng nghề</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Hưng Yên là một trong những trung tâm kinh tế quan trọng với GRDP đạt <strong>292,602,496 triệu đồng</strong>, xếp hạng <strong>12/34</strong> toàn quốc. Thu ngân sách đạt <strong>53,112,677 triệu đồng</strong>, xếp hạng <strong>10/34</strong>. Sau sáp nhập với Thái Bình, tỉnh có hiệu quả kinh tế cao với diện tích nhỏ nhất cả nước.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>69.93 triệu đồng/năm</strong>, xếp hạng <strong>6/34</strong> toàn quốc - trong top các tỉnh có thu nhập cao nhất. Với dân số <strong>3,567,943 người</strong> (xếp hạng <strong>16/34</strong>) và diện tích nhỏ nhất <strong>2,514.81 km²</strong> (xếp hạng <strong>34/34</strong>), Hưng Yên có mật độ dân số cao nhất cả nước.</p>

      <h3>Vị trí và sáp nhập</h3>
      <p>Hưng Yên nằm trong vùng kinh tế trọng điểm Bắc Bộ, có nhiều làng nghề truyền thống. Sau sáp nhập với Thái Bình, tỉnh mở rộng ra biển và có vị trí thuận lợi gần Hà Nội và Hải Phòng, tạo điều kiện phát triển công nghiệp và dịch vụ.</p>

      <h3>Đặc sản và làng nghề</h3>
      <p>Tỉnh nổi tiếng với nhãn lồng Hưng Yên và các sản phẩm nông nghiệp chất lượng cao. Nhiều làng nghề truyền thống như đúc đồng, chế biến nông sản, dệt may đã phát triển thành các ngành công nghiệp hiện đại.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Với vị trí địa lý thuận lợi, hạ tầng giao thông phát triển và nguồn nhân lực chất lượng cao, Hưng Yên có tiềm năng lớn phát triển thành trung tâm công nghiệp chế biến, logistics và dịch vụ của vùng kinh tế trọng điểm Bắc Bộ.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 292,602,496 triệu đồng (Xếp hạng 12/34)</li>
        <li>Thu ngân sách: 53,112,677 triệu đồng (Xếp hạng 10/34)</li>
        <li>Thu nhập bình quân: 69.93 triệu đồng/năm (Xếp hạng 6/34)</li>
        <li>Dân số: 3,567,943 người (Xếp hạng 16/34)</li>
        <li>Diện tích: 2,514.81 km² (Xếp hạng 34/34)</li>
        <li>Thủ phủ: Thành phố Hưng Yên</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/H%C6%B0ng_Y%C3%AAn" target="_blank">Wikipedia - Hưng Yên</a></li>
        <li><a href="http://hungyen.gov.vn/" target="_blank">Cổng thông tin tỉnh Hưng Yên</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 15,
    code: '37',
    name: 'Ninh Bình',
    slug: 'ninh-binh',
    oldNames: ['Ninh Bình', 'Hà Nam', 'Nam Định'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 380, y: 220 },
    color: '#00cec9',
    population: '4,412,264',
    area: '3,942.62 km²',
    description:
      'Ninh Bình được mệnh danh là "Hạ Long trên cạn" với cảnh quan sông núi hùng vĩ. Tỉnh có nhiều di tích lịch sử và thiên nhiên tuyệt đẹp, là điểm đến du lịch hấp dẫn.',
    touristAttractions: [
      {
        name: 'Tràng An',
        description: 'Di sản thiên nhiên và văn hóa thế giới với hang động kỳ thú',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Hoa Lư',
        url: 'https://vi.wikipedia.org/wiki/Tr%C3%A0ng_An',
      },
      {
        name: 'Tam Cốc - Bích Động',
        description: 'Du thuyền trên sông với cảnh núi đá vôi tuyệt đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Hoa Lư',
        url: 'https://vi.wikipedia.org/wiki/Tam_C%E1%BB%91c_-_B%C3%ADch_%C4%90%E1%BB%99ng',
      },
      {
        name: 'Cố đô Hoa Lư',
        description: 'Thủ đô cổ của Việt Nam thời Đinh - Lê',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Hoa Lư',
        url: 'https://vi.wikipedia.org/wiki/Hoa_L%C6%B0',
      },
      {
        name: 'Chùa Bái Đính',
        description: 'Chùa lớn nhất Việt Nam với kiến trúc hoành tráng',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Gia Viễn',
        url: 'https://vi.wikipedia.org/wiki/Ch%C3%B9a_B%C3%A1i_%C4%90%C3%ADnh',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Ninh Bình - Du lịch và di sản văn hóa</h2>
      <p>Ninh Bình được mệnh danh là 'Hạ Long trên cạn' với quần thể danh thắng Tràng An.</p>
    `,
  },
  {
    id: 16,
    code: '38',
    name: 'Thanh Hóa',
    slug: 'thanh-hoa',
    oldNames: ['Thanh Hóa'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 360, y: 260 },
    color: '#fdcb6e',
    population: '3,760,650',
    area: '11,114.7 km²',
    description:
      'Thanh Hóa là tỉnh có diện tích và dân số lớn nhất miền Bắc, có bờ biển dài với nhiều bãi tắm đẹp. Tỉnh là quê hương Chủ tịch Hồ Chí Minh với làng Sen - Kim Liên.',
    touristAttractions: [
      {
        name: 'Biển Sầm Sơn',
        description: 'Bãi biển nổi tiếng với cát trắng và sóng êm',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Thành phố Sầm Sơn',
        url: 'https://vi.wikipedia.org/wiki/Bi%E1%BB%83n_S%E1%BA%A7m_S%C6%A1n',
      },
      {
        name: 'Hố Chúa',
        description: 'Khe suối trong xanh giữa núi rừng nguyên sinh',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Cẩm Thủy',
        url: 'https://vi.wikipedia.org/wiki/H%E1%BB%91_Ch%C3%BAa',
      },
      {
        name: 'Đền Trần',
        description: 'Khu di tích lịch sử thờ các vua nhà Trần',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Đông Sơn',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Tr%C3%A2n',
      },
      {
        name: 'Công viên Quốc gia Bến En',
        description: 'Khu bảo tồn thiên nhiên với hồ và núi đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Nông Cống',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Tr%C3%A2n_Th%C3%A1i_B%C3%ACnh',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Thanh Hóa - Trung tâm kinh tế miền Trung Bắc</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Thanh Hóa là một trong những trung tâm kinh tế quan trọng của miền Trung Bắc với GRDP đạt <strong>331,899,568 triệu đồng</strong>, xếp hạng <strong>5/34</strong> toàn quốc. Thu ngân sách đạt <strong>60,479,569 triệu đồng</strong>, xếp hạng <strong>5/34</strong>, cho thấy tiềm lực kinh tế mạnh mẽ của tỉnh.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>67.25 triệu đồng/năm</strong>, xếp hạng <strong>22/34</strong> toàn quốc. Với dân số <strong>3,760,650 người</strong> (xếp hạng <strong>3/34</strong>) và diện tích <strong>11,114.7 km²</strong> (xếp hạng <strong>5/34</strong>), Thanh Hóa là tỉnh có quy mô dân số và diện tích lớn nhất miền Bắc.</p>

      <h3>Vị trí địa lý và lịch sử</h3>
      <p>Thanh Hóa có lịch sử lâu đời với nhiều di tích quan trọng. Đây là quê hương Chủ tịch Hồ Chí Minh với làng Sen - Kim Liên, nơi Người sinh ra và lớn lên. Tỉnh có cả miền núi và ven biển với đường bờ biển dài 102km, tạo điều kiện phát triển đa dạng các ngành kinh tế.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Thanh Hóa sở hữu vị trí địa lý thuận lợi, là cửa ngõ kết nối miền Bắc với miền Trung. Tỉnh có nhiều tiềm năng phát triển du lịch với biển Sầm Sơn, Hồ Hàm Rồng, động Hoa Tiên và các khu công nghiệp hiện đại. Đây là trung tâm công nghiệp, nông nghiệp và du lịch quan trọng của vùng Bắc Trung Bộ.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 331,899,568 triệu đồng (Xếp hạng 5/34)</li>
        <li>Thu ngân sách: 60,479,569 triệu đồng (Xếp hạng 5/34)</li>
        <li>Thu nhập bình quân: 67.25 triệu đồng/năm (Xếp hạng 22/34)</li>
        <li>Dân số: 3,760,650 người (Xếp hạng 3/34)</li>
        <li>Diện tích: 11,114.7 km² (Xếp hạng 5/34)</li>
        <li>Thủ phủ: Thành phố Thanh Hóa</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Thanh_H%C3%B3a" target="_blank">Wikipedia - Thanh Hóa</a></li>
        <li><a href="http://thanhhoa.gov.vn/" target="_blank">Cổng thông tin tỉnh Thanh Hóa</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 17,
    code: '40',
    name: 'Nghệ An',
    slug: 'nghe-an',
    oldNames: ['Nghệ An', 'Hà Tĩnh một phần'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 360, y: 300 },
    color: '#e84393',
    population: '3,470,988',
    area: '16,493.7 km²',
    description:
      'Nghệ An là tỉnh có diện tích lớn nhất cả nước, có cả miền núi và ven biển. Tỉnh là quê hương của nhiều danh nhân lịch sử và có truyền thống cách mạng lâu đời. Nghệ An nổi tiếng với các sản phẩm nông nghiệp đặc trưng và có tiềm năng du lịch sinh thái lớn.',
    touristAttractions: [
      {
        name: 'Làng Sen - Kim Liên',
        description: 'Quê hương của Chủ tịch Hồ Chí Minh',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Nam Đàn',
        url: 'https://vi.wikipedia.org/wiki/Kim_Li%C3%AAn',
      },
      {
        name: 'Biển Cửa Lò',
        description: 'Bãi biển đẹp với cát trắng và sóng xanh',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Thành phố Cửa Lò',
        url: 'https://nghean.gov.vn/vi-VN/1/3034/17/231/tintuc/bien-cua-lo.aspx',
      },
      {
        name: 'Công viên Quốc gia Pù Mát',
        description: 'Khu bảo tồn thiên nhiên với hệ sinh thái đa dạng',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Con Cuông',
        url: 'https://nghean.gov.vn/vi-VN/1/3034/17/231/tintuc/cong-vien-quoc-gia-pu-mat.aspx',
      },
      {
        name: 'Động Thần Phong',
        description: 'Hang động đá vôi với thạch nhũ tuyệt đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Anh Sơn',
        url: 'https://nghean.gov.vn/vi-VN/1/3034/17/231/tintuc/dong-than-phong.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Nghệ An - Vùng đất anh hùng và kinh tế quan trọng</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Nghệ An là một trong những trung tâm kinh tế lớn của miền Trung với GRDP đạt <strong>261,433,982 triệu đồng</strong>, xếp hạng <strong>6/34</strong> toàn quốc. Thu ngân sách đạt <strong>44,127,386 triệu đồng</strong>, xếp hạng <strong>7/34</strong>, thể hiện tiềm lực kinh tế đáng kể của tỉnh.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>57.38 triệu đồng/năm</strong>, xếp hạng <strong>29/34</strong> toàn quốc. Với dân số <strong>3,470,988 người</strong> (xếp hạng <strong>4/34</strong>) và diện tích <strong>16,493.7 km²</strong> (xếp hạng <strong>1/34</strong>), Nghệ An là tỉnh có diện tích lớn nhất và dân số đông thứ 4 cả nước.</p>

      <h3>Vị trí địa lý và lịch sử</h3>
      <p>Nghệ An có lịch sử lâu đời và vinh quang, là quê hương của nhiều danh nhân, anh hùng dân tộc. Đây là vùng đất có truyền thống cách mạng với nhiều phong trào đấu tranh anh dũng. Tỉnh có địa hình đa dạng từ miền núi cao đến ven biển, tạo điều kiện phát triển nhiều ngành kinh tế.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Với diện tích lớn nhất cả nước, Nghệ An có nhiều tiềm năng phát triển về nông nghiệp, công nghiệp và du lịch. Tỉnh có nhiều danh thắng như quê Bác, Khu di tích Kim Liên, biển Cửa Lò và các khu công nghiệp phát triển. Đây là trung tâm quan trọng của vùng Bắc Trung Bộ.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 261,433,982 triệu đồng (Xếp hạng 6/34)</li>
        <li>Thu ngân sách: 44,127,386 triệu đồng (Xếp hạng 7/34)</li>
        <li>Thu nhập bình quân: 57.38 triệu đồng/năm (Xếp hạng 29/34)</li>
        <li>Dân số: 3,470,988 người (Xếp hạng 4/34)</li>
        <li>Diện tích: 16,493.7 km² (Xếp hạng 1/34)</li>
        <li>Thủ phủ: Thành phố Vinh</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Ngh%E1%BB%87_An" target="_blank">Wikipedia - Nghệ An</a></li>
        <li><a href="http://nghean.gov.vn/" target="_blank">Cổng thông tin tỉnh Nghệ An</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 18,
    code: '42',
    name: 'Hà Tĩnh',
    slug: 'ha-tinh',
    oldNames: ['Hà Tĩnh'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 380, y: 320 },
    color: '#00b894',
    population: '1,622,901',
    area: '5,994.4 km²',
    description:
      'Hà Tĩnh là tỉnh ven biển miền Trung, có liên quan đến Chủ tịch Hồ Chí Minh qua quê ngoại của Người tại làng Hoàng Trù. Tỉnh có nhiều di tích lịch sử quan trọng và phong cảnh thiên nhiên đẹp. Hà Tĩnh đang phát triển mạnh về công nghiệp với khu kinh tế Vũng Áng.',
    touristAttractions: [
      {
        name: 'Làng Hoàng Trù',
        description: 'Quê ngoại của Chủ tịch Hồ Chí Minh',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Đức Thọ',
        url: 'https://vi.wikipedia.org/wiki/Ho%C3%A0ng_Tr%C3%B9',
      },
      {
        name: 'Biển Thiên Cầm',
        description: 'Bãi biển hoang sơ với cảnh đẹp tự nhiên',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Cẩm Xuyên',
        url: 'https://vi.wikipedia.org/wiki/Thi%C3%AAn_C%E1%BA%A7m',
      },
      {
        name: 'Hang Rái',
        description: 'Khu du lịch sinh thái với hang động và suối đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Thạch Hà',
        url: 'https://vi.wikipedia.org/wiki/Thi%C3%AAn_C%E1%BA%A7m',
      },
      {
        name: 'Đầm Nại',
        description: 'Phá đẹp với hệ sinh thái đa dạng',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Nghi Xuân',
        url: 'https://hatinh.gov.vn/vi-VN/1/3034/17/231/tintuc/dam-nai.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Hà Tĩnh - Vùng đất có liên quan đến Bác Hồ và trung tâm công nghiệp nặng</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Hà Tĩnh là tỉnh có tiềm lực kinh tế quan trọng với GRDP đạt <strong>112,855,090 triệu đồng</strong>, xếp hạng <strong>27/34</strong> toàn quốc. Thu ngân sách đạt <strong>17,972,968 triệu đồng</strong>, xếp hạng <strong>23/34</strong>. Tỉnh đang có sự phát triển mạnh mẽ về công nghiệp nặng.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>51.60 triệu đồng/năm</strong>, xếp hạng <strong>28/34</strong> toàn quốc. Với dân số <strong>1,622,901 người</strong> (xếp hạng <strong>27/34</strong>) và diện tích <strong>5,994.4 km²</strong> (xếp hạng <strong>27/34</strong>), Hà Tĩnh có quy mô trung bình nhưng tiềm năng phát triển lớn.</p>

      <h3>Vị trí lịch sử và văn hóa</h3>
      <p>Hà Tĩnh là tỉnh ven biển miền Trung, có mối liên hệ với Chủ tịch Hồ Chí Minh qua quê ngoại của Người tại làng Hoàng Trù (Đức Thọ). Tỉnh có nhiều di tích lịch sử quan trọng và phong cảnh thiên nhiên đẹp với bãi biển Thiên Cầm, vườn quốc gia Vũ Quang.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Hà Tĩnh đang phát triển mạnh về công nghiệp nặng với khu kinh tế Vũng Áng - một trong những khu kinh tế trọng điểm quốc gia. Tỉnh có cảng nước sâu, hạ tầng công nghiệp hiện đại và nhiều dự án đầu tư lớn từ trong và ngoài nước, hứa hẹn trở thành trung tâm công nghiệp quan trọng của miền Trung.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 112,855,090 triệu đồng (Xếp hạng 27/34)</li>
        <li>Thu ngân sách: 17,972,968 triệu đồng (Xếp hạng 23/34)</li>
        <li>Thu nhập bình quân: 51.60 triệu đồng/năm (Xếp hạng 28/34)</li>
        <li>Dân số: 1,622,901 người (Xếp hạng 27/34)</li>
        <li>Diện tích: 5,994.4 km² (Xếp hạng 27/34)</li>
        <li>Thủ phủ: Thành phố Hà Tĩnh</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/H%C3%A0_T%C4%A9nh" target="_blank">Wikipedia - Hà Tĩnh</a></li>
        <li><a href="http://hatinh.gov.vn/" target="_blank">Cổng thông tin tỉnh Hà Tĩnh</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 19,
    code: '44',
    name: 'Quảng Trị',
    slug: 'quang-tri',
    oldNames: ['Quảng Trị', 'Quảng Bình'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 400, y: 360 },
    color: '#a29bfe',
    population: '1,870,845',
    area: '12,700 km²',
    description:
      'Quảng Trị là vùng đất anh hùng với nhiều di tích lịch sử thời kỳ kháng chiến. Tỉnh có vị trí địa lý quan trọng ở vùng Bắc Trung Bộ. Sau sáp nhập với Quảng Bình, tỉnh có thêm các di sản thiên nhiên như động Phong Nha - Kẻ Bàng.',
    touristAttractions: [
      {
        name: 'Vườn Quốc gia Phong Nha - Kẻ Bàng',
        description: 'Di sản thiên nhiên thế giới với hang động lớn nhất thế giới',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Bố Trạch',
        url: 'https://vi.wikipedia.org/wiki/V%C6%B0%E1%BB%9Dn_qu%E1%BB%91c_gia_Phong_Nha-K%E1%BA%BB_B%C3%A0ng',
      },
      {
        name: 'Cửa khẩu Lao Bảo',
        description: 'Cửa khẩu quốc tế với Lào, có ý nghĩa lịch sử quan trọng',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Hướng Hóa',
        url: 'https://quangtri.gov.vn/vi-VN/1/3034/17/231/tintuc/cua-khau-lao-bao.aspx',
      },
      {
        name: 'Di tích Đường mòn Hồ Chí Minh',
        description: 'Tuyến đường vận chuyển quan trọng thời kháng chiến',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Hướng Hóa',
        url: 'https://quangtri.gov.vn/vi-VN/1/3034/17/231/tintuc/di-tich-duong-mon-ho-chi-minh.aspx',
      },
      {
        name: 'Hang Én',
        description: 'Hang động lớn thứ 3 thế giới với cảnh quan tuyệt đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Bố Trạch',
        url: 'https://phongnhakebang.com.vn/hang-en/',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Quảng Trị - Vùng đất anh hùng và di sản thiên nhiên</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Quảng Trị là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>113,687,549 triệu đồng</strong>, xếp hạng <strong>26/34</strong> toàn quốc. Thu ngân sách đạt <strong>12,082,370 triệu đồng</strong>, xếp hạng <strong>27/34</strong>. Sau sáp nhập với Quảng Bình, tỉnh có quy mô kinh tế lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>48.65 triệu đồng/năm</strong>, xếp hạng <strong>30/34</strong> toàn quốc. Với dân số <strong>1,870,845 người</strong> (xếp hạng <strong>23/34</strong>) và diện tích <strong>12,700 km²</strong> (xếp hạng <strong>10/34</strong>), Quảng Trị có diện tích lớn với nhiều tiềm năng phát triển.</p>

      <h3>Vị trí lịch sử và di sản</h3>
      <p>Quảng Trị là vùng đất anh hùng với nhiều di tích lịch sử thời kỳ kháng chiến như Vịnh Mốc, Thành cổ Quảng Trị, cầu Hiền Lương. Tỉnh có vị trí địa lý quan trọng ở vùng Bắc Trung Bộ, là cửa ngõ nối liền miền Bắc và miền Nam.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Sau sáp nhập với Quảng Bình, tỉnh có thêm các di sản thiên nhiên thế giới như động Phong Nha - Kẻ Bàng, tạo tiềm năng lớn cho du lịch. Quảng Trị còn có vị trí giao thông thuận lợi, cảng biển và nhiều tiềm năng phát triển công nghiệp, nông nghiệp và dịch vụ.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 113,687,549 triệu đồng (Xếp hạng 26/34)</li>
        <li>Thu ngân sách: 12,082,370 triệu đồng (Xếp hạng 27/34)</li>
        <li>Thu nhập bình quân: 48.65 triệu đồng/năm (Xếp hạng 30/34)</li>
        <li>Dân số: 1,870,845 người (Xếp hạng 23/34)</li>
        <li>Diện tích: 12,700 km² (Xếp hạng 10/34)</li>
        <li>Thủ phủ: Thành phố Đông Hà</li>
        <li>Trước sáp nhập: Quảng Trị + Quảng Bình</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Qu%E1%BA%A3ng_Tr%E1%BB%8B" target="_blank">Wikipedia - Quảng Trị</a></li>
        <li><a href="http://quangtri.gov.vn/" target="_blank">Cổng thông tin tỉnh Quảng Trị</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 20,
    code: '46',
    name: 'Thành phố Huế',
    slug: 'hue',
    oldNames: ['Thừa Thiên Huế'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 420, y: 380 },
    color: '#74b9ff',
    population: '1,432,986',
    area: '4,947.11 km²',
    description:
      'Huế là cố đô của Việt Nam thời phong kiến, di sản văn hóa thế giới với Hoàng thành Huế. Thành phố có nền văn hóa cung đình độc đáo và ẩm thực truyền thống phong phú.',
    touristAttractions: [
      {
        name: 'Hoàng Thành Huế',
        description:
          'Di sản văn hóa thế giới UNESCO, cung điện hoàng gia của 13 vị vua triều Nguyễn với kiến trúc cung đình độc đáo.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Phường Thuận Thành, TP Huế',
        url: 'https://vi.wikipedia.org/wiki/Ho%C3%A0ng_th%C3%A0nh_Hu%E1%BA%BF',
      },
      {
        name: 'Lăng Khải Định',
        description:
          'Lăng mộ vua Khải Định với kiến trúc pha trộn phương Đông và phương Tây độc đáo, nổi tiếng với nghệ thuật khảm sành.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Thủy Bằng, Hương Thủy, Huế',
        url: 'https://vi.wikipedia.org/wiki/L%C4%83ng_Kh%E1%BA%A3i_%C4%90%E1%BB%8Bnh',
      },
      {
        name: 'Chùa Thiên Mụ',
        description:
          'Ngôi chùa cổ nhất của Huế được xây dựng từ năm 1601, biểu tượng của cố đô với tháp Phước Duyên cao 21m.',
        imageUrl:
          'https://images.unsplash.com/photo-1551524164-6cf2ac240e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Kim Long, TP Huế',
        url: 'https://vi.wikipedia.org/wiki/Ch%C3%B9a_Thi%C3%AAn_M%E1%BB%A5',
      },
      {
        name: 'Sông Hương - Đầm Chuồn',
        description:
          'Dòng sông thơ mộng chảy qua Huế, nơi có du thuyền rồng nghe ca Huế và thưởng thức ẩm thực cung đình.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Trung tâm TP Huế',
        url: 'https://huecity.gov.vn/vi-VN/1/3034/17/231/tintuc/song-huong-dam-chuon.aspx',
      },
      {
        name: 'Lăng Tự Đức',
        description:
          'Lăng mộ lớn nhất và đẹp nhất trong các lăng tẩm triều Nguyễn, thể hiện tài năng kiến trúc và thơ văn của vua Tự Đức.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Thủy Xuân, Hương Thủy, Huế',
        url: 'https://vi.wikipedia.org/wiki/L%C4%83ng_T%E1%BB%B1_%C4%90%E1%BB%A9c',
      },
    ],
    fullPageContent: `
      <h2>Thành phố Huế - Cố đô di sản văn hóa thế giới</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Huế là thành phố trực thuộc trung ương với GRDP đạt <strong>80,966,514 triệu đồng</strong>, xếp hạng <strong>29/34</strong> toàn quốc. Thu ngân sách đạt <strong>12,787,196 triệu đồng</strong>, xếp hạng <strong>26/34</strong>. Tuy quy mô kinh tế còn khiêm tốn nhưng thành phố có tiềm năng lớn về du lịch văn hóa.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>62.80 triệu đồng/năm</strong>, xếp hạng <strong>15/34</strong> toàn quốc. Với dân số <strong>1,432,986 người</strong> (xếp hạng <strong>29/34</strong>) và diện tích <strong>4,947.11 km²</strong> (xếp hạng <strong>29/34</strong>), Huế có mật độ dân số vừa phải.</p>

      <h3>Di sản văn hóa UNESCO</h3>
      <p>Huế là cố đô của Việt Nam thời phong kiến, được UNESCO công nhận là di sản văn hóa thế giới năm 1993. Thành phố là kinh đô của triều Nguyễn từ 1802 đến 1945, nơi lưu giữ nhiều di sản văn hóa quý báu với Hoàng thành, các lăng tẩm của các vua triều Nguyễn, và hệ thống đền chùa cổ kính.</p>

      <h3>Văn hóa cung đình và ẩm thực</h3>
      <p>Huế có nền văn hóa cung đình độc đáo và ẩm thực truyền thống phong phú. Ẩm thực Huế mang đậm dấu ấn cung đình với các món ăn tinh tế như bún bò Huế, bánh khoái, chè Huế. Thành phố nằm ở miền Trung Việt Nam, bên bờ sông Hương thơ mộng với khí hậu nhiệt đới gió mùa.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Huế có tiềm năng lớn về du lịch văn hóa với di sản UNESCO, nhạc cung đình Huế, lễ hội truyền thống và ẩm thực đặc sắc. Thành phố đang phát triển thành trung tâm giáo dục, y tế và du lịch của miền Trung, kết hợp bảo tồn di sản với phát triển bền vững.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 80,966,514 triệu đồng (Xếp hạng 29/34)</li>
        <li>Thu ngân sách: 12,787,196 triệu đồng (Xếp hạng 26/34)</li>
        <li>Thu nhập bình quân: 62.80 triệu đồng/năm (Xếp hạng 15/34)</li>
        <li>Dân số: 1,432,986 người (Xếp hạng 29/34)</li>
        <li>Diện tích: 4,947.11 km² (Xếp hạng 29/34)</li>
        <li>Thủ phủ: Thành phố Huế</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Hu%E1%BA%BF" target="_blank">Wikipedia - Huế</a></li>
        <li><a href="https://huecity.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Huế</a></li>
        <li><a href="https://whc.unesco.org/en/list/678/" target="_blank">UNESCO - Complex of Huế Monuments</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 21,
    code: '48',
    name: 'Thành phố Đà Nẵng',
    slug: 'da-nang',
    oldNames: ['Đà Nẵng', 'Quảng Nam'],
    region: 'Nam Trung Bộ',
    coordinates: { x: 440, y: 400 },
    color: '#ff7675',
    population: '3,065,628',
    area: '11,859.59 km²',
    description:
      'Đà Nẵng là thành phố trực thuộc trung ương, cửa ngõ kinh tế của miền Trung. Sau sáp nhập với Quảng Nam, thành phố có thêm di sản văn hóa thế giới Hội An và thánh địa Mỹ Sơn.',
    touristAttractions: [
      {
        name: 'Phố Cổ Hội An',
        description:
          'Di sản văn hóa thế giới UNESCO với kiến trúc cổ kính độc đáo, là cảng thương mại quốc tế quan trọng từ thế kỷ 15-19.',
        imageUrl:
          'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Thành phố Hội An',
        url: 'https://vi.wikipedia.org/wiki/H%E1%BB%99i_An',
      },
      {
        name: 'Thánh Địa Mỹ Sơn',
        description:
          'Quần thể đền tháp Cham cổ từ thế kỷ 4-14, di sản văn hóa thế giới UNESCO thể hiện nền văn minh Champa cổ.',
        imageUrl:
          'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Huyện Duy Xuyên',
        url: 'https://vi.wikipedia.org/wiki/M%E1%BB%B9_S%C6%A1n',
      },
      {
        name: 'Bãi Biển Mỹ Khê',
        description:
          'Một trong những bãi biển đẹp nhất thế giới với cát trắng mịn và nước biển trong xanh, được Forbes bình chọn.',
        imageUrl:
          'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Ngũ Hành Sơn, Đà Nẵng',
        url: 'https://vi.wikipedia.org/wiki/B%C3%A3i_bi%E1%BB%83n_M%E1%BB%B9_Kh%C3%AA',
      },
      {
        name: 'Ngũ Hành Sơn',
        description:
          'Quần thể năm ngọn núi đá vôi với nhiều chùa chiền, động tự nhiên và điêu khắc nghệ thuật tinh xảo.',
        imageUrl:
          'https://images.unsplash.com/photo-1551524164-6cf2ac240e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Ngũ Hành Sơn, Đà Nẵng',
        url: 'https://vi.wikipedia.org/wiki/Ng%C5%A9_H%C3%A0nh_S%C6%A1n',
      },
      {
        name: 'Cầu Rồng',
        description:
          'Cây cầu biểu tượng của Đà Nẵng với thiết kế hình rồng độc đáo, có thể phun lửa và nước vào cuối tuần.',
        imageUrl:
          'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Hải Châu, Đà Nẵng',
        url: 'https://vi.wikipedia.org/wiki/C%E1%BA%A7u_R%E1%BB%93ng',
      },
      {
        name: 'Khu phố đèn lồng Hội An',
        description: 'Không gian lãng mạn với hàng nghìn chiếc đèn lồng đầy sắc màu vào buổi tối.',
        imageUrl:
          'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Phố cổ Hội An',
        url: 'https://www.hoianworldheritage.org.vn/',
      },
      {
        name: 'Rừng dừa Bảy Mẫu',
        description: 'Rừng dừa nguyên sinh với tour thúng chai độc đáo và ẩm thực miền Trung.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Hội An, Quảng Nam',
        url: 'https://quangnam.gov.vn/vi-VN/1/3034/17/231/tintuc/rung-dua-bay-mau.aspx',
      },
    ],
    fullPageContent: `
      <h2>Thành phố Đà Nẵng - Cửa ngõ kinh tế miền Trung và trung tâm du lịch</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Đà Nẵng là một trong những trung tâm kinh tế quan trọng của miền Trung với GRDP đạt <strong>279,926,325 triệu đồng</strong>, xếp hạng <strong>14/34</strong> toàn quốc. Thu ngân sách đạt <strong>54,916,707 triệu đồng</strong>, xếp hạng <strong>7/34</strong>, thể hiện hiệu quả kinh tế cao của thành phố.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>64.68 triệu đồng/năm</strong>, xếp hạng <strong>12/34</strong> toàn quốc. Với dân số <strong>3,065,628 người</strong> (xếp hạng <strong>19/34</strong>) và diện tích <strong>11,859.59 km²</strong> (xếp hạng <strong>11/34</strong>), Đà Nẵng có mức sống khá cao và phát triển cân bằng.</p>

      <h3>Vị trí chiến lược và sáp nhập</h3>
      <p>Đà Nẵng là thành phố trực thuộc trung ương, cửa ngõ kinh tế của miền Trung Việt Nam. Sau sáp nhập với Quảng Nam, thành phố trở thành một trung tâm du lịch và văn hóa quan trọng với di sản văn hóa thế giới Hội An và thánh địa Mỹ Sơn. Thành phố có cả vùng núi, đồng bằng và bờ biển đẹp.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Đà Nẵng có bãi biển Mỹ Khê được bình chọn là một trong những bãi biển đẹp nhất thế giới. Với việc sáp nhập, thành phố có thêm nhiều di sản văn hóa và tiềm năng du lịch lớn, đồng thời là trung tâm công nghệ thông tin và dịch vụ quan trọng của miền Trung.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 279,926,325 triệu đồng (Xếp hạng 14/34)</li>
        <li>Thu ngân sách: 54,916,707 triệu đồng (Xếp hạng 7/34)</li>
        <li>Thu nhập bình quân: 64.68 triệu đồng/năm (Xếp hạng 12/34)</li>
        <li>Dân số: 3,065,628 người (Xếp hạng 19/34)</li>
        <li>Diện tích: 11,859.59 km² (Xếp hạng 11/34)</li>
        <li>Trung tâm: Quận Hải Châu</li>
        <li>Trước sáp nhập: Đà Nẵng + Quảng Nam</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/%C4%90%C3%A0_N%E1%BA%B5ng" target="_blank">Wikipedia - Đà Nẵng</a></li>
        <li><a href="https://danang.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Đà Nẵng</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 22,
    code: '51',
    name: 'Quảng Ngãi',
    slug: 'quang-ngai',
    oldNames: ['Quảng Ngãi', 'Kon Tum'],
    region: 'Nam Trung Bộ',
    coordinates: { x: 420, y: 400 },
    color: '#74b9ff',
    population: '2,161,755',
    area: '14,832.55 km²',
    description:
      'Quảng Ngãi là tỉnh ven biển Nam Trung Bộ, nổi tiếng với đảo Lý Sơn và nhiều bãi biển đẹp. Tỉnh có lịch sử văn hóa lâu đời và là quê hương của nhiều danh nhân.',
    touristAttractions: [
      {
        name: 'Đảo Lý Sơn',
        description: 'Đảo núi lửa với cảnh quan độc đáo và tỏi Lý Sơn nổi tiếng',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện đảo Lý Sơn',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A3o_L%C3%BD_S%C6%A1n',
      },
      {
        name: 'Biển Sa Huỳnh',
        description: 'Bãi biển đẹp với cát trắng và nước biển trong xanh',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Thị xã Đức Phổ',
        url: 'https://quangngai.gov.vn/vi-VN/1/3034/17/231/tintuc/bien-sa-huynh.aspx',
      },
      {
        name: 'Di tích Mỹ Lai',
        description: 'Địa điểm lịch sử quan trọng với ý nghĩa giáo dục',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Sơn Tịnh',
        url: 'https://quangngai.gov.vn/vi-VN/1/3034/17/231/tintuc/di-tich-my-lai.aspx',
      },
      {
        name: 'Núi Thành',
        description: 'Núi thiêng với nhiều di tích lịch sử và cảnh đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Thị xã Đức Phổ',
        url: 'https://quangngai.gov.vn/vi-VN/1/3034/17/231/tintuc/nui-thanh.aspx',
      },
      {
        name: 'Nhà thờ chính tòa Kon Tum (Nhà thờ gỗ)',
        description: 'Kiến trúc Roman kết hợp nhà sàn Ba Na, xây dựng năm 1913, biểu tượng văn hóa Kon Tum.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh%C3%A0_th%E1%BB%9D_g%E1%BB%97_Kon_Tum.jpg',
        location: 'TP Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/Nh%C3%A0_th%E1%BB%9D_ch%C3%ADnh_t%C3%B2a_Kon_Tum',
      },
      {
        name: 'Tòa Giám mục Kon Tum',
        description: 'Tiểu Chủng viện Thừa sai, kiến trúc pha trộn bản địa và phương Tây, xây dựng 1935-1938.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/7/7e/Bishop_of_Kontum_Building%2C_Kon_Tum_City%2C_Viet_Nam.jpg',
        location: 'TP Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/T%E1%BA%A1p_tin:Bishop_of_Kontum_Building%2C_Kon_Tum_City%2C_Viet_Nam.jpg',
      },
      {
        name: 'Chùa Bác Ái',
        description: 'Chùa cổ xây năm 1932, được vua Bảo Đại ban biển Sắc tứ Bác Ái Tự năm 1933.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Bac_Ai_Pagoda_Kon_Tum.jpg',
        location: 'TP Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/T%E1%BA%A1p_tin:Bac_Ai_Pagoda_Kon_Tum.jpg',
      },
      {
        name: 'Khu di tích lịch sử cách mạng Ngục Kon Tum',
        description: 'Quần thể nhà lao giam giữ chiến sĩ cách mạng thời Pháp, bên bờ sông Đăk Bla.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Nguc_Kon_Tum.jpg',
        location: 'TP Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/Ng%E1%BB%A5c_Kon_Tum',
      },
      {
        name: 'Cầu treo Kon Klor',
        description: 'Cầu treo nổi tiếng bắc qua sông Đăk Bla, biểu tượng giao thông Kon Tum.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Cau_treo_Kon_Klor.jpg',
        location: 'TP Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/C%E1%BA%A7u_treo_Kon_Klor',
      },
      {
        name: 'Cầu Đăk Bla',
        description: 'Cầu lớn bắc qua sông Đăk Bla, điểm ngắm cảnh đẹp thành phố.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Cau_Dak_Bla_Kon_Tum.jpg',
        location: 'TP Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/C%E1%BA%A7u_%C4%90%C4%83k_Bla',
      },
      {
        name: 'Hồ thủy điện Yali',
        description: 'Hồ nước lớn phục vụ thủy điện, cảnh quan thiên nhiên hùng vĩ.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Yali_Dam_Kon_Tum.jpg',
        location: 'Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/H%E1%BB%93_th%E1%BB%A7y_%C4%91i%E1%BB%87n_Yali',
      },
      {
        name: 'Nhà rông Ba Na',
        description: 'Nhà rông truyền thống của người Ba Na, biểu tượng văn hóa Tây Nguyên.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Nha_rong_Ba_Na_Kon_Tum.jpg',
        location: 'Ven TP Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/Nh%C3%A0_r%C3%B4ng',
      },
      {
        name: 'Sông Đăk Bla',
        description: 'Dòng sông lớn uốn quanh thành phố Kon Tum, cảnh quan thơ mộng.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Dak_Bla_River_Kon_Tum.jpg',
        location: 'TP Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/S%C3%B4ng_%C4%90%C4%83k_Bla',
      },
      {
        name: 'Dãy núi Chư Hreng',
        description: 'Dãy núi nổi tiếng phía tây Kon Tum, điểm trekking và ngắm cảnh đẹp.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Chu_Hreng_Mountain_Kon_Tum.jpg',
        location: 'Phía tây TP Kon Tum',
        url: 'https://vi.wikipedia.org/wiki/Ch%C6%B0_Hreng',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Quảng Ngãi - Vùng đất anh hùng và đa dạng văn hóa</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Quảng Ngãi là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>173,526,456 triệu đồng</strong>, xếp hạng <strong>24/34</strong> toàn quốc. Thu ngân sách đạt <strong>33,685,093 triệu đồng</strong>, xếp hạng <strong>13/34</strong>. Sau sáp nhập với Kon Tum, tỉnh có quy mô kinh tế và tiềm năng lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>49.53 triệu đồng/năm</strong>, xếp hạng <strong>29/34</strong> toàn quốc. Với dân số <strong>2,161,755 người</strong> (xếp hạng <strong>22/34</strong>) và diện tích <strong>14,832.55 km²</strong> (xếp hạng <strong>5/34</strong>), Quảng Ngãi có diện tích lớn với nhiều tiềm năng phát triển.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Quảng Ngãi là tỉnh ven biển Nam Trung Bộ, có đảo Lý Sơn nổi tiếng với tỏi Lý Sơn và nhiều bãi biển đẹp. Sau sáp nhập với Kon Tum, tỉnh có địa hình đa dạng từ bờ biển đến vùng cao nguyên, tạo điều kiện phát triển đa dạng các ngành kinh tế và du lịch sinh thái.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Quảng Ngãi có nhiều tiềm năng phát triển với các di tích lịch sử, khu bảo tồn thiên nhiên, và sau sáp nhập có thêm văn hóa các dân tộc thiểu số từ Kon Tum. Tỉnh đang phát triển mạnh về du lịch biển và có tiềm năng lớn về năng lượng tái tạo, nông nghiệp và lâm nghiệp.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 173,526,456 triệu đồng (Xếp hạng 24/34)</li>
        <li>Thu ngân sách: 33,685,093 triệu đồng (Xếp hạng 13/34)</li>
        <li>Thu nhập bình quân: 49.53 triệu đồng/năm (Xếp hạng 29/34)</li>
        <li>Dân số: 2,161,755 người (Xếp hạng 22/34)</li>
        <li>Diện tích: 14,832.55 km² (Xếp hạng 5/34)</li>
        <li>Thủ phủ: Thành phố Quảng Ngãi</li>
        <li>Trước sáp nhập: Quảng Ngãi + Kon Tum</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Qu%E1%BA%A3ng_Ng%C3%A3i" target="_blank">Wikipedia - Quảng Ngãi</a></li>
        <li><a href="http://quangngai.gov.vn/" target="_blank">Cổng thông tin tỉnh Quảng Ngãi</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 23,
    code: '52',
    name: 'Gia Lai',
    slug: 'gia-lai',
    oldNames: ['Gia Lai', 'Bình Định'],
    region: 'Tây Nguyên',
    coordinates: { x: 440, y: 460 },
    color: '#00cec9',
    population: '3,583,693',
    area: '21,576.53 km²',
    description:
      'Gia Lai sau sáp nhập với Bình Định trở thành tỉnh có cả cao nguyên và ven biển, có thế mạnh về nông nghiệp và du lịch. Tỉnh nổi tiếng với văn hóa dân tộc đa dạng và cảnh quan thiên nhiên tuyệt đẹp.',
    touristAttractions: [
      {
        name: 'Biển Quy Nhơn',
        description: 'Bãi biển đẹp với cát vàng và nước trong xanh',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Thành phố Quy Nhơn',
        url: 'https://vi.wikipedia.org/wiki/Quy_Nh%C6%A1n',
      },
      {
        name: 'Tháp Đôi',
        description: 'Di tích Chăm cổ với kiến trúc độc đáo',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Quy Nhơn',
        url: 'https://vi.wikipedia.org/wiki/Th%C3%A1p_%C4%90%C3%B4i',
      },
      {
        name: 'Kon Tum',
        description: 'Vùng đất của các dân tộc thiểu số với văn hóa độc đáo',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Thành phố Kon Tum',
        url: 'https://kontum.gov.vn/vi-VN/1/3034/17/231/tintuc/kon-tum.aspx',
      },
      {
        name: 'Biển Kỳ Co',
        description: 'Vịnh đẹp như thiên đường với nước biển trong veo',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Nhơn Lý',
        url: 'https://binhdinh.gov.vn/vi-VN/1/3034/17/231/tintuc/bien-ky-co.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Gia Lai - Cao nguyên cà phê và đa dạng văn hóa</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Gia Lai là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>242,007,551 triệu đồng</strong>, xếp hạng <strong>19/34</strong> toàn quốc. Thu ngân sách đạt <strong>22,736,658 triệu đồng</strong>, xếp hạng <strong>19/34</strong>. Sau sáp nhập với Bình Định, tỉnh có quy mô kinh tế và diện tích lớn hơn đáng kể.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>47.93 triệu đồng/năm</strong>, xếp hạng <strong>31/34</strong> toàn quốc. Với dân số <strong>3,583,693 người</strong> (xếp hạng <strong>15/34</strong>) và diện tích <strong>21,576.53 km²</strong> (xếp hạng <strong>2/34</strong>), Gia Lai có diện tích lớn thứ 2 cả nước với mật độ dân số thưa.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Gia Lai là tỉnh cao nguyên với khí hậu mát mẻ quanh năm, nổi tiếng với cà phê Buôn Ma Thuột chất lượng cao. Tỉnh có nhiều thác nước đẹp và rừng nguyên sinh. Sau sáp nhập với Bình Định, tỉnh có thêm vùng ven biển, tạo sự đa dạng về địa hình từ cao nguyên đến bờ biển.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Gia Lai có tiềm năng lớn về nông nghiệp (đặc biệt là cà phê), du lịch sinh thái và văn hóa dân tộc thiểu số. Sau sáp nhập với Bình Định, tỉnh có thêm tiềm năng phát triển du lịch biển, công nghiệp chế biến thủy sản và logistics. Đây là trung tâm quan trọng của vùng Tây Nguyên với nhiều cơ hội phát triển.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 242,007,551 triệu đồng (Xếp hạng 19/34)</li>
        <li>Thu ngân sách: 22,736,658 triệu đồng (Xếp hạng 19/34)</li>
        <li>Thu nhập bình quân: 47.93 triệu đồng/năm (Xếp hạng 31/34)</li>
        <li>Dân số: 3,583,693 người (Xếp hạng 15/34)</li>
        <li>Diện tích: 21,576.53 km² (Xếp hạng 2/34)</li>
        <li>Thủ phủ: Thành phố Pleiku</li>
        <li>Trước sáp nhập: Gia Lai + Bình Định</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Gia_Lai" target="_blank">Wikipedia - Gia Lai</a></li>
        <li><a href="http://gialai.gov.vn/" target="_blank">Cổng thông tin tỉnh Gia Lai</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 24,
    code: '56',
    name: 'Khánh Hòa',
    slug: 'khanh-hoa',
    oldNames: ['Khánh Hòa', 'Ninh Thuận'],
    region: 'Nam Trung Bộ',
    coordinates: { x: 480, y: 480 },
    color: '#6c5ce7',
    population: '2,243,554',
    area: '8,555.86 km²',
    description:
      'Khánh Hòa là tỉnh ven biển nổi tiếng với Nha Trang - thành phố du lịch biển hàng đầu Việt Nam. Tỉnh có nhiều hòn đảo đẹp và các khu nghỉ dưỡng cao cấp. Sau sáp nhập với Ninh Thuận, Khánh Hòa có bờ biển dài hơn với nhiều bãi tắm đẹp.',
    touristAttractions: [
      {
        name: 'Bãi Biển Nha Trang',
        description:
          'Một trong những bãi biển đẹp nhất Việt Nam với cát trắng mịn, nước trong xanh và hạ tầng du lịch hiện đại.',
        imageUrl:
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'TP Nha Trang, Khánh Hòa',
        url: 'https://vi.wikipedia.org/wiki/Nha_Trang',
      },
      {
        name: 'Đảo Hòn Tre',
        description:
          'Hòn đảo lớn nhất vịnh Nha Trang với khu nghỉ dưỡng VinWonders và cáp treo vượt biển dài nhất thế giới.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'TP Nha Trang, Khánh Hòa',
        url: 'https://vi.wikipedia.org/wiki/H%C3%B2n_Tre',
      },
      {
        name: 'Tháp Bà Ponagar',
        description:
          'Quần thể tháp Chăm cổ được xây dựng từ thế kỷ 7-12, thờ nữ thần Thiên Y Thánh Mẫu của người Chăm.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'TP Nha Trang, Khánh Hòa',
        url: 'https://vi.wikipedia.org/wiki/Th%C3%A1p_B%C3%A0_Ponagar',
      },
      {
        name: 'Vinpearl Land',
        description:
          'Khu vui chơi giải trí lớn trên đảo Hòn Tre với nhiều trò chơi hiện đại và thế giới biển VinWonders.',
        imageUrl:
          'https://images.unsplash.com/photo-1551524164-6cf2ac240e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Đảo Hòn Tre, Nha Trang',
        url: 'https://vi.wikipedia.org/wiki/Vinpearl',
      },
      {
        name: 'Suối Nước Nóng Tháp Bà',
        description:
          'Khu du lịch nghỉ dưỡng với suối nước nóng tự nhiên, bùn khoáng và không gian thiên nhiên trong lành.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'TP Nha Trang, Khánh Hòa',
        url: 'https://nhatrang.gov.vn/vi-VN/1/3034/17/231/tintuc/suoi-nuoc-nong-thap-ba.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Khánh Hòa - Thiên đường du lịch biển Việt Nam</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Khánh Hòa là tỉnh có tiềm năng kinh tế du lịch với GRDP đạt <strong>191,357,151 triệu đồng</strong>, xếp hạng <strong>22/34</strong> toàn quốc. Thu ngân sách đạt <strong>25,880,100 triệu đồng</strong>, xếp hạng <strong>16/34</strong>. Sau sáp nhập với Ninh Thuận, tỉnh có quy mô kinh tế và tiềm năng du lịch lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>49.83 triệu đồng/năm</strong>, xếp hạng <strong>27/34</strong> toàn quốc. Với dân số <strong>2,243,554 người</strong> (xếp hạng <strong>21/34</strong>) và diện tích <strong>8,555.86 km²</strong> (xếp hạng <strong>17/34</strong>), Khánh Hòa có quy mô trung bình với thế mạnh về du lịch.</p>

      <h3>Vị trí địa lý và du lịch</h3>
      <p>Khánh Hòa là tỉnh ven biển nổi tiếng với Nha Trang - thành phố du lịch biển hàng đầu Việt Nam. Tỉnh có nhiều hòn đảo đẹp như Hòn Tre, Hòn Mun và các khu nghỉ dưỡng cao cấp. Sau sáp nhập với Ninh Thuận, tỉnh có bờ biển dài hơn với nhiều bãi tắm đẹp và văn hóa Chăm đặc sắc.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Khánh Hòa có tiềm năng rất lớn về du lịch biển, nghỉ dưỡng cao cấp và thể thao biển. Tỉnh là điểm đến ưa thích của khách du lịch quốc tế với hạ tầng du lịch phát triển. Sau sáp nhập, tỉnh có thêm tiềm năng về nông nghiệp, nuôi trồng thủy sản và văn hóa đa dạng.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 191,357,151 triệu đồng (Xếp hạng 22/34)</li>
        <li>Thu ngân sách: 25,880,100 triệu đồng (Xếp hạng 16/34)</li>
        <li>Thu nhập bình quân: 49.83 triệu đồng/năm (Xếp hạng 27/34)</li>
        <li>Dân số: 2,243,554 người (Xếp hạng 21/34)</li>
        <li>Diện tích: 8,555.86 km² (Xếp hạng 17/34)</li>
        <li>Thủ phủ: Thành phố Nha Trang</li>
        <li>Trước sáp nhập: Khánh Hòa + Ninh Thuận</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Kh%C3%A1nh_H%C3%B2a" target="_blank">Wikipedia - Khánh Hòa</a></li>
        <li><a href="http://khanhhoa.gov.vn/" target="_blank">Cổng thông tin tỉnh Khánh Hòa</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 25,
    code: '66',
    name: 'Đắk Lắk',
    slug: 'dak-lak',
    oldNames: ['Đắk Lắk', 'Phú Yên'],
    region: 'Tây Nguyên',
    coordinates: { x: 460, y: 500 },
    color: '#fdcb6e',
    population: '3,346,853',
    area: '18,096.40 km²',
    description:
      'Đắk Lắk sau sáp nhập với Phú Yên là tỉnh có cả cao nguyên và ven biển, nổi tiếng với cà phê Buôn Ma Thuột và văn hóa cồng chiêng. Tỉnh có nhiều thác nước đẹp và vườn quốc gia Yok Đôn.',
    touristAttractions: [
      {
        name: 'Thác Dray Nur',
        description: 'Thác nước hùng vĩ với ba tầng đẹp nhất Tây Nguyên',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Krông Ana',
        url: 'https://vi.wikipedia.org/wiki/Th%C3%A1c_Dray_Nur',
      },
      {
        name: 'Vườn quốc gia Yok Đôn',
        description: 'Khu bảo tồn thiên nhiên lớn nhất Việt Nam',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Krông Na',
        url: 'https://daklak.gov.vn/vi-VN/1/3034/17/231/tintuc/vuon-quoc-gia-yok-don.aspx',
      },
      {
        name: 'Làng cổ Ako Dhong',
        description: 'Làng văn hóa dân tộc Ede với nhà dài truyền thống',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Buôn Ma Thuột',
        url: 'https://daklak.gov.vn/vi-VN/1/3034/17/231/tintuc/lang-co-ako-dhong.aspx',
      },
      {
        name: 'Biển Tuy Hòa',
        description: 'Bãi biển đẹp với cát vàng và sóng êm',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Thành phố Tuy Hòa',
        url: 'https://phuyen.gov.vn/vi-VN/1/3034/17/231/tintuc/bien-tuy-hoa.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Đắk Lắk - Thủ đô cà phê và trung tâm Tây Nguyên</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Đắk Lắk là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>198,132,950 triệu đồng</strong>, xếp hạng <strong>21/34</strong> toàn quốc. Thu ngân sách đạt <strong>14,095,836 triệu đồng</strong>, xếp hạng <strong>25/34</strong>. Sau sáp nhập với Phú Yên, tỉnh có quy mô kinh tế và diện tích lớn hơn đáng kể.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>46.82 triệu đồng/năm</strong>, xếp hạng <strong>32/34</strong> toàn quốc. Với dân số <strong>3,346,853 người</strong> (xếp hạng <strong>17/34</strong>) và diện tích <strong>18,096.40 km²</strong> (xếp hạng <strong>3/34</strong>), Đắk Lắk có diện tích lớn thứ 3 cả nước với mật độ dân số thấp.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Đắk Lắk là tỉnh lớn nhất Tây Nguyên, được mệnh danh là "thủ đô cà phê" của Việt Nam. Tỉnh có nhiều vườn quốc gia và khu bảo tồn thiên nhiên quý hiếm như Vườn quốc gia Yok Đôn. Sau sáp nhập với Phú Yên, tỉnh có thêm bờ biển đẹp, tạo sự đa dạng về địa hình từ cao nguyên đến ven biển.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Đắk Lắk có tiềm năng rất lớn về nông nghiệp (đặc biệt là cà phê), du lịch sinh thái và văn hóa dân tộc thiểu số. Sau sáp nhập với Phú Yên, tỉnh có thêm tiềm năng về du lịch biển, thủy sản và logistics. Đây là trung tâm quan trọng của vùng Tây Nguyên với nhiều cơ hội phát triển đa dạng.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 198,132,950 triệu đồng (Xếp hạng 21/34)</li>
        <li>Thu ngân sách: 14,095,836 triệu đồng (Xếp hạng 25/34)</li>
        <li>Thu nhập bình quân: 46.82 triệu đồng/năm (Xếp hạng 32/34)</li>
        <li>Dân số: 3,346,853 người (Xếp hạng 17/34)</li>
        <li>Diện tích: 18,096.40 km² (Xếp hạng 3/34)</li>
        <li>Thủ phủ: Thành phố Buôn Ma Thuột</li>
        <li>Trước sáp nhập: Đắk Lắk + Phú Yên</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/%C4%90%E1%BA%AFk_L%E1%BA%AFk" target="_blank">Wikipedia - Đắk Lắk</a></li>
        <li><a href="http://daklak.gov.vn/" target="_blank">Cổng thông tin tỉnh Đắk Lắk</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 26,
    code: '68',
    name: 'Lâm Đồng',
    slug: 'lam-dong',
    oldNames: ['Lâm Đồng', 'Đắk Nông', 'Bình Thuận'],
    region: 'Tây Nguyên',
    coordinates: { x: 480, y: 520 },
    color: '#74b9ff',
    population: '3,872,999',
    area: '24,233.07 km²',
    description:
      'Lâm Đồng sau sáp nhập với Đắk Nông và Bình Thuận trở thành tỉnh có đa dạng địa hình từ cao nguyên đến ven biển. Tỉnh nổi tiếng với Đà Lạt - thành phố ngàn hoa và khí hậu mát mẻ quanh năm.',
    touristAttractions: [
      {
        name: 'Thành phố Đà Lạt',
        description: 'Thành phố ngàn hoa với khí hậu mát mẻ quanh năm',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Đà Lạt',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%C3%A0_L%E1%BA%A1t',
      },
      {
        name: 'Thác Pongour',
        description: 'Thác nước 7 tầng đẹp như tranh vẽ',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Đức Trọng',
        url: 'https://lamdong.gov.vn/vi-VN/1/3034/17/231/tintuc/thac-pongour.aspx',
      },
      {
        name: 'Biển Mũi Né',
        description: 'Bãi biển nổi tiếng với đồi cát bay và resort cao cấp',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Thành phố Phan Thiết',
        url: 'https://vi.wikipedia.org/wiki/M%C5%A9i_N%C3%A9',
      },
      {
        name: 'Hồ Tuyền Lâm',
        description: 'Hồ nhân tạo đẹp nhất Đà Lạt với cảnh sắc thơ mộng',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Thành phố Đà Lạt',
        url: 'https://lamdong.gov.vn/vi-VN/1/3034/17/231/tintuc/ho-tuyen-lam.aspx',
      },
      {
        name: 'Vịnh Vĩnh Hy',
        description: 'Vịnh biển đẹp nhất miền Trung với nước trong xanh và cảnh quan hoang sơ.',
        imageUrl:
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Ninh Thuận',
        url: 'https://ninhthuan.gov.vn/vi-VN/1/3034/17/231/tintuc/vinh-vinh-hy.aspx',
      },
      {
        name: 'Tháp Chăm Po Klong Garai',
        description: 'Quần thể tháp Chăm cổ nhất còn nguyên vẹn ở Việt Nam từ thế kỷ 13.',
        imageUrl:
          'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Phan Rang, Ninh Thuận',
        url: 'https://vi.wikipedia.org/wiki/Po_Klong_Garai',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Lâm Đồng - Cao nguyên ngàn hoa và diện tích lớn nhất cả nước</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Lâm Đồng là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>319,878,839 triệu đồng</strong>, xếp hạng <strong>8/34</strong> toàn quốc. Thu ngân sách đạt <strong>27,190,308 triệu đồng</strong>, xếp hạng <strong>14/34</strong>. Sau sáp nhập với Đắk Nông và Bình Thuận, tỉnh có quy mô kinh tế và diện tích lớn nhất cả nước.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>59.36 triệu đồng/năm</strong>, xếp hạng <strong>23/34</strong> toàn quốc. Với dân số <strong>3,872,999 người</strong> (xếp hạng <strong>12/34</strong>) và diện tích <strong>24,233.07 km²</strong> (xếp hạng <strong>1/34</strong>), Lâm Đồng có diện tích lớn nhất cả nước với mật độ dân số thấp.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Lâm Đồng là tỉnh cao nguyên với khí hậu mát mẻ, nổi tiếng với Đà Lạt - thành phố ngàn hoa. Tỉnh có nhiều thác nước đẹp, hồ nước trong xanh và là trung tâm sản xuất hoa, rau quả ôn đới. Sau sáp nhập với Đắk Nông và Bình Thuận, tỉnh có địa hình đa dạng từ cao nguyên đến bờ biển.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Lâm Đồng có tiềm năng rất lớn về du lịch nghỉ dưỡng với khí hậu Châu Âu thu nhỏ, nông nghiệp công nghệ cao và du lịch sinh thái. Sau sáp nhập, tỉnh có thêm tiềm năng về du lịch biển, năng lượng tái tạo và công nghiệp chế biển. Với diện tích lớn nhất cả nước, đây là tỉnh có nhiều cơ hội phát triển đa dạng.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 319,878,839 triệu đồng (Xếp hạng 8/34)</li>
        <li>Thu ngân sách: 27,190,308 triệu đồng (Xếp hạng 14/34)</li>
        <li>Thu nhập bình quân: 59.36 triệu đồng/năm (Xếp hạng 23/34)</li>
        <li>Dân số: 3,872,999 người (Xếp hạng 12/34)</li>
        <li>Diện tích: 24,233.07 km² (Xếp hạng 1/34)</li>
        <li>Thủ phủ: Thành phố Đà Lạt</li>
        <li>Trước sáp nhập: Lâm Đồng + Đắk Nông + Bình Thuận</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/L%C3%A2m_%C4%90%E1%BB%93ng" target="_blank">Wikipedia - Lâm Đồng</a></li>
        <li><a href="http://lamdong.gov.vn/" target="_blank">Cổng thông tin tỉnh Lâm Đồng</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 27,
    code: '75',
    name: 'Đồng Nai',
    slug: 'dong-nai',
    oldNames: ['Đồng Nai', 'Bình Phước'],
    region: 'Đông Nam Bộ',
    coordinates: { x: 500, y: 560 },
    color: '#00b894',
    population: '4,491,408',
    area: '12,737.18 km²',
    description:
      'Đồng Nai là tỉnh công nghiệp phát triển sau sáp nhập với Bình Phước, giáp ranh với TP.HCM. Tỉnh có nhiều khu công nghiệp lớn và là trung tâm sản xuất quan trọng.',
    touristAttractions: [
      {
        name: 'Vườn quốc gia Cát Tiên',
        description: 'Khu bảo tồn thiên nhiên lớn với hệ sinh thái đa dạng',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Tân Phú',
        url: 'https://dongnai.gov.vn/vi-VN/1/3034/17/231/tintuc/vuon-quoc-gia-cat-tien.aspx',
      },
      {
        name: 'Núi Dinh',
        description: 'Núi thiêng với cảnh quan đẹp và không khí trong lành',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Thành phố Bà Rịa',
        url: 'https://bariavungtau.gov.vn/vi-VN/1/3034/17/231/tintuc/nui-dinh.aspx',
      },
      {
        name: 'Làng gốm Thanh Hà',
        description: 'Làng nghề truyền thống sản xuất gốm sứ',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Huyện Long Thành',
        url: 'https://dongnai.gov.vn/vi-VN/1/3034/17/231/tintuc/lang-gom-thanh-ha.aspx',
      },
      {
        name: 'Khu du lịch Trảng Bom',
        description: 'Khu sinh thái với nhiều hoạt động giải trí',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Trảng Bom',
        url: 'https://dongnai.gov.vn/vi-VN/1/3034/17/231/tintuc/khu-du-lich-trang-bom.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Đồng Nai - Trung tâm công nghiệp miền Đông</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Đồng Nai là một trong những trung tâm công nghiệp hàng đầu với GRDP đạt <strong>609,176,602 triệu đồng</strong>, xếp hạng <strong>4/34</strong> toàn quốc. Thu ngân sách đạt <strong>73,458,454 triệu đồng</strong>, xếp hạng <strong>4/34</strong>. Sau sáp nhập với Bình Phước, tỉnh có tiềm lực kinh tế mạnh nhất miền Đông Nam Bộ.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>78.04 triệu đồng/năm</strong>, xếp hạng <strong>4/34</strong> toàn quốc - trong top các tỉnh có thu nhập cao nhất. Với dân số <strong>4,491,408 người</strong> (xếp hạng <strong>5/34</strong>) và diện tích <strong>12,737.18 km²</strong> (xếp hạng <strong>9/34</strong>), Đồng Nai có mật độ dân số vừa phải.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Đồng Nai là tỉnh công nghiệp phát triển sau sáp nhập với Bình Phước, giáp ranh với TP.HCM. Tỉnh có vị trí chiến lược trong vùng kinh tế trọng điểm phía Nam với nhiều khu công nghiệp lớn và là trung tâm sản xuất quan trọng.</p>

      <h3>Công nghiệp và sản xuất</h3>
      <p>Tỉnh có nhiều khu công nghiệp lớn như Amata, Long Thành, Nhơn Trạch, là trung tâm sản xuất ô tô, điện tử, dệt may và chế biến nông sản của cả nước. Sân bay quốc tế Long Thành đang được xây dựng sẽ tăng cường thêm lợi thế giao thông.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Với lợi thế gần TP.HCM, hạ tầng công nghiệp phát triển và sân bay Long Thành tương lai, Đồng Nai có tiềm năng trở thành trung tâm logistics và sản xuất hàng đầu Đông Nam Á. Tỉnh đang chuyển dịch cơ cấu sang các ngành công nghiệp công nghệ cao và dịch vụ.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 609,176,602 triệu đồng (Xếp hạng 4/34)</li>
        <li>Thu ngân sách: 73,458,454 triệu đồng (Xếp hạng 4/34)</li>
        <li>Thu nhập bình quân: 78.04 triệu đồng/năm (Xếp hạng 4/34)</li>
        <li>Dân số: 4,491,408 người (Xếp hạng 5/34)</li>
        <li>Diện tích: 12,737.18 km² (Xếp hạng 9/34)</li>
        <li>Thủ phủ: Thành phố Biên Hòa</li>
        <li>Trước sáp nhập: Đồng Nai + Bình Phước</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93ng_Nai" target="_blank">Wikipedia - Đồng Nai</a></li>
        <li><a href="http://dongnai.gov.vn/" target="_blank">Cổng thông tin tỉnh Đồng Nai</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 28,
    code: '79',
    name: 'Thành phố Hồ Chí Minh',
    slug: 'ho-chi-minh',
    oldNames: ['TP.HCM', 'Bà Rịa - Vũng Tàu', 'Bình Dương'],
    region: 'Đông Nam Bộ',
    coordinates: { x: 480, y: 580 },
    color: '#ff6b35',
    population: '14,002,598',
    area: '6,772.59 km²',
    description:
      'TP.HCM là thành phố lớn nhất Việt Nam, trung tâm kinh tế, tài chính của cả nước. Sau sáp nhập với Bà Rịa - Vũng Tàu và Bình Dương, TP.HCM trở thành đô thị đặc biệt lớn nhất Việt Nam.',
    touristAttractions: [
      {
        name: 'Dinh Độc Lập',
        description:
          'Cung điện Tổng thống Việt Nam Cộng Hòa, nơi diễn ra sự kiện lịch sử thống nhất đất nước ngày 30/4/1975.',
        imageUrl:
          'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận 1, TP.HCM',
        url: 'https://vi.wikipedia.org/wiki/Dinh_%C4%90%E1%BB%99c_L%E1%BA%ADp',
      },
      {
        name: 'Nhà Thờ Đức Bà Sài Gòn',
        description: 'Công trình kiến trúc Gothic nổi tiếng được xây dựng từ năm 1863-1880, biểu tượng của TP.HCM.',
        imageUrl:
          'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận 1, TP.HCM',
        url: 'https://vi.wikipedia.org/wiki/Nh%C3%A0_th%E1%BB%9D_%C4%90%E1%BB%A9c_B%C3%A0_S%C3%A0i_G%C3%B2n',
      },
      {
        name: 'Bưu Điện Trung Tâm Sài Gòn',
        description: 'Công trình kiến trúc Pháp độc đáo được thiết kế bởi Gustave Eiffel, vẫn hoạt động đến ngày nay.',
        imageUrl:
          'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận 1, TP.HCM',
        url: 'https://vi.wikipedia.org/wiki/B%C6%B0u_%C4%91i%E1%BB%87n_trung_t%C3%A2m_S%C3%A0i_G%C3%B2n',
      },
      {
        name: 'Chợ Bến Thành',
        description: 'Khu chợ truyền thống nổi tiếng với đồng hồ biểu tượng, trung tâm mua sắm và ẩm thực của TP.HCM.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận 1, TP.HCM',
        url: 'https://vi.wikipedia.org/wiki/Ch%E1%BB%A3_B%C3%AAn_Th%C3%A0nh',
      },
      {
        name: 'Địa Đạo Củ Chi',
        description: 'Hệ thống đường hầm lịch sử dài hơn 250km, là biểu tượng của ý chí kiên cường trong chiến tranh.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Huyện Củ Chi',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%8Ba_%C4%91%E1%BA%A1o_C%E1%BB%A7_Chi',
      },
      {
        name: 'Bãi Biển Vũng Tàu',
        description: 'Bãi biển gần TP.HCM với bãi Sau và bãi Trước nổi tiếng, điểm nghỉ dưỡng cuối tuần lý tưởng.',
        imageUrl:
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Thành phố Vũng Tàu',
        url: 'https://vi.wikipedia.org/wiki/V%C5%A9ng_T%C3%A0u',
      },
    ],
    fullPageContent: `
      <h2>Thành phố Hồ Chí Minh - Trung tâm kinh tế lớn nhất Việt Nam</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>TP.HCM là động lực kinh tế lớn nhất Việt Nam với GRDP đạt <strong>2,715,782,233 triệu đồng</strong>, xếp hạng <strong>1/34</strong> toàn quốc. Thu ngân sách đạt <strong>681,935,856 triệu đồng</strong>, xếp hạng <strong>1/34</strong>. Sau sáp nhập với Bà Rịa - Vũng Tàu và Bình Dương, TP.HCM trở thành đô thị đặc biệt lớn nhất Việt Nam.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>85.53 triệu đồng/năm</strong>, xếp hạng <strong>2/34</strong> toàn quốc - chỉ sau Hà Nội. Với dân số lớn nhất cả nước <strong>14,002,598 người</strong> (xếp hạng <strong>1/34</strong>) và diện tích <strong>6,772.59 km²</strong> (xếp hạng <strong>22/34</strong>), TP.HCM có mật độ dân số cao nhất.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>TP.HCM là thành phố lớn nhất Việt Nam, trung tâm kinh tế, tài chính của cả nước. Sau sáp nhập với Bà Rịa - Vũng Tàu và Bình Dương, thành phố có thêm cảng biển Vũng Tàu và các khu công nghiệp Bình Dương, tạo thành siêu đô thị hoàn chỉnh.</p>

      <h3>Kinh tế và thương mại</h3>
      <p>Thành phố đóng góp khoảng 23% GDP cả nước, là trung tâm tài chính, thương mại, công nghiệp và dịch vụ lớn nhất Việt Nam. Có cảng Sài Gòn, cảng Vũng Tàu và nhiều khu công nghiệp phát triển, sân bay quốc tế Tân Sơn Nhất.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Là trung tâm kinh tế - tài chính - thương mại hàng đầu Đông Nam Á, TP.HCM có tiềm năng trở thành thành phố toàn cầu. Với việc sáp nhập, thành phố có đủ các yếu tố của một siêu đô thị: trung tâm tài chính, cảng biển quốc tế, khu công nghiệp hiện đại và dịch vụ cao cấp.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 2,715,782,233 triệu đồng (Xếp hạng 1/34)</li>
        <li>Thu ngân sách: 681,935,856 triệu đồng (Xếp hạng 1/34)</li>
        <li>Thu nhập bình quân: 85.53 triệu đồng/năm (Xếp hạng 2/34)</li>
        <li>Dân số: 14,002,598 người (Xếp hạng 1/34)</li>
        <li>Diện tích: 6,772.59 km² (Xếp hạng 22/34)</li>
        <li>Trung tâm: Quận 1</li>
        <li>Trước sáp nhập: TP.HCM + Bà Rịa - Vũng Tàu + Bình Dương</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh" target="_blank">Wikipedia - TP.HCM</a></li>
        <li><a href="https://www.hochiminhcity.gov.vn/" target="_blank">Cổng thông tin điện tử TP.HCM</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 29,
    code: '80',
    name: 'Tây Ninh',
    slug: 'tay-ninh',
    oldNames: ['Tây Ninh', 'Long An'],
    region: 'Đông Nam Bộ',
    coordinates: { x: 460, y: 600 },
    color: '#a29bfe',
    population: '3,254,170',
    area: '8,536.44 km²',
    description:
      'Tây Ninh là tỉnh biên giới với Campuchia, nổi tiếng với núi Bà Đen và tòa thánh Cao Đài. Tỉnh có nhiều di tích lịch sử thời kỳ kháng chiến. Sau sáp nhập với Long An, Tây Ninh có thêm vùng đồng bằng sông Cửu Long với tiềm năng nông nghiệp lớn.',
    touristAttractions: [
      {
        name: 'Núi Bà Đen',
        description: 'Ngọn núi thiêng cao nhất Nam Bộ với tầm nhìn panorama',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Huyện Dương Minh Châu',
        url: 'https://vi.wikipedia.org/wiki/N%C3%BAi_B%C3%A0_%C4%90en',
      },
      {
        name: 'Tòa thánh Cao Đài',
        description: 'Trung tâm tâm linh của đạo Cao Đài tại Tây Ninh',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Tây Ninh',
        url: 'https://vi.wikipedia.org/wiki/T%C3%B2a_th%C3%A1nh_Cao_%C4%90%C3%A0i',
      },
      {
        name: 'Địa đạo Củ Chi',
        description: 'Hệ thống địa đạo lịch sử thời kháng chiến',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Củ Chi',
        url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%8Ba_%C4%91%E1%BA%A1o_C%E1%BB%A7_Chi',
      },
      {
        name: 'Khu di tích lịch sử Địa đạo Bến Đình',
        description: 'Di tích kháng chiến quan trọng với hệ thống hầm ngầm',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Bến Cầu',
        url: 'https://tayninh.gov.vn/vi-VN/1/3034/17/231/tintuc/khu-di-tich-lich-su-dia-dao-ben-dinh.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Tây Ninh - Vùng đất thiêng và cửa ngõ biên giới</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Tây Ninh là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>312,456,603 triệu đồng</strong>, xếp hạng <strong>10/34</strong> toàn quốc. Thu ngân sách đạt <strong>39,704,480 triệu đồng</strong>, xếp hạng <strong>12/34</strong>. Sau sáp nhập với Long An, tỉnh có quy mô kinh tế và tiềm năng lớn hơn đáng kể.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>58.54 triệu đồng/năm</strong>, xếp hạng <strong>24/34</strong> toàn quốc. Với dân số <strong>3,254,170 người</strong> (xếp hạng <strong>18/34</strong>) và diện tích <strong>8,536.44 km²</strong> (xếp hạng <strong>18/34</strong>), Tây Ninh có quy mô trung bình với tiềm năng phát triển tốt.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Tây Ninh là tỉnh biên giới với Campuchia, nổi tiếng với núi Bà Đen - đỉnh núi cao nhất Nam Bộ và tòa thánh Cao Đài. Tỉnh có nhiều di tích lịch sử thời kỳ kháng chiến và văn hóa tôn giáo đặc sắc. Sau sáp nhập với Long An, tỉnh có thêm vùng đồng bằng sông Cửu Long phì nhiêu.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Tây Ninh có tiềm năng lớn về thương mại biên giới, du lịch tâm linh và nông nghiệp. Sau sáp nhập với Long An, tỉnh có thêm tiềm năng về nông nghiệp công nghệ cao, chăn nuôi và logistics. Đây là cửa ngõ quan trọng nối liền Việt Nam với Campuchia và có nhiều cơ hội phát triển kinh tế biên giới.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 312,456,603 triệu đồng (Xếp hạng 10/34)</li>
        <li>Thu ngân sách: 39,704,480 triệu đồng (Xếp hạng 12/34)</li>
        <li>Thu nhập bình quân: 58.54 triệu đồng/năm (Xếp hạng 24/34)</li>
        <li>Dân số: 3,254,170 người (Xếp hạng 18/34)</li>
        <li>Diện tích: 8,536.44 km² (Xếp hạng 18/34)</li>
        <li>Thủ phủ: Thành phố Tây Ninh</li>
        <li>Trước sáp nhập: Tây Ninh + Long An</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/T%C3%A2y_Ninh" target="_blank">Wikipedia - Tây Ninh</a></li>
        <li><a href="http://tayninh.gov.vn/" target="_blank">Cổng thông tin tỉnh Tây Ninh</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 30,
    code: '82',
    name: 'Đồng Tháp',
    slug: 'dong-thap',
    oldNames: ['Đồng Tháp', 'Tiền Giang'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 420, y: 620 },
    color: '#fd79a8',
    population: '4,370,046',
    area: '5,938.64 km²',
    description:
      'Đồng Tháp sau sáp nhập với Tiền Giang là trung tâm nông nghiệp quan trọng của đồng bằng sông Cửu Long. Tỉnh nổi tiếng với vườn quốc gia Tràm Chim và cánh đồng hoa sen đẹp nhất Việt Nam.',
    touristAttractions: [
      {
        name: 'Vườn quốc gia Tràm Chim',
        description: 'Khu bảo tồn đa dạng sinh học với hệ thức vật đặc trưng',
        imageUrl: 'https://images.unsplash.com/photo-1520637836862-4d197d17c15a?w=600&h=400&fit=crop',
        location: 'Huyện Tam Nông',
        url: 'https://vi.wikipedia.org/wiki/V%C6%B0%E1%BB%9Dn_qu%E1%BB%91c_gia_Tr%C3%A0m_Chim',
      },
      {
        name: 'Cánh đồng hoa sen Đồng Tháp Mười',
        description: 'Cánh đồng sen đẹp nhất Việt Nam vào mùa nở hoa',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Huyện Tháp Mười',
        url: 'https://dongthap.gov.vn/vi-VN/1/3034/17/231/tintuc/canh-dong-hoa-sen-dong-thap-muoi.aspx',
      },
      {
        name: 'Làng hoa Sa Đéc',
        description: 'Làng trồng hoa nổi tiếng với nhiều loại hoa kiểng',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        location: 'Thành phố Sa Đéc',
        url: 'https://vi.wikipedia.org/wiki/Sa_%C4%90%C3%A9c',
      },
      {
        name: 'Chợ nổi Cái Răng',
        description: 'Chợ nổi lớn nhất miền Tây với văn hóa đặc trưng',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
        location: 'Thành phố Mỹ Tho',
        url: 'https://vi.wikipedia.org/wiki/Ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh Đồng Tháp - Vùng lúa gạo và sinh thái đồng bằng sông Cửu Long</h2>
      <h2>Tỉnh Đồng Tháp - Vựa lúa đồng bằng sông Cửu Long</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Đồng Tháp là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>249,534,461 triệu đồng</strong>, xếp hạng <strong>18/34</strong> toàn quốc. Thu ngân sách đạt <strong>21,630,027 triệu đồng</strong>, xếp hạng <strong>21/34</strong>. Sau sáp nhập với Tiền Giang, tỉnh có quy mô kinh tế lớn hơn với nền nông nghiệp phát triển.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>61.58 triệu đồng/năm</strong>, xếp hạng <strong>17/34</strong> toàn quốc. Với dân số <strong>4,370,046 người</strong> (xếp hạng <strong>7/34</strong>) và diện tích <strong>5,938.64 km²</strong> (xếp hạng <strong>28/34</strong>), Đồng Tháp có mật độ dân số cao.</p>

      <h3>Vị trí và sáp nhập</h3>
      <p>Đồng Tháp là tỉnh đồng bằng sông Cửu Long, nổi tiếng với vườn quốc gia Tràm Chim - khu dự trữ sinh quyển thế giới. Sau sáp nhập với Tiền Giang, tỉnh có vị trí giao thông quan trọng gần TP.HCM với hệ thống sông ngòi chằng chịt.</p>

      <h3>Nông nghiệp và sinh thái</h3>
      <p>Tỉnh có nền nông nghiệp phát triển với sản lượng lúa cao, là một trong những vựa lúa lớn nhất đồng bằng sông Cửu Long. Vườn quốc gia Tràm Chim bảo tồn hệ sinh thái đất ngập nước và các loài chim quý hiếm.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Với lợi thế về nông nghiệp, du lịch sinh thái và vị trí gần TP.HCM, Đồng Tháp có tiềm năng phát triển công nghiệp chế biến nông sản, du lịch sinh thái và logistics. Tỉnh đang chuyển dịch cơ cấu kinh tế theo hướng hiện đại hóa nông nghiệp.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 249,534,461 triệu đồng (Xếp hạng 18/34)</li>
        <li>Thu ngân sách: 21,630,027 triệu đồng (Xếp hạng 21/34)</li>
        <li>Thu nhập bình quân: 61.58 triệu đồng/năm (Xếp hạng 17/34)</li>
        <li>Dân số: 4,370,046 người (Xếp hạng 7/34)</li>
        <li>Diện tích: 5,938.64 km² (Xếp hạng 28/34)</li>
        <li>Thủ phủ: Thành phố Cao Lãnh</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93ng_Th%C3%A1p" target="_blank">Wikipedia - Đồng Tháp</a></li>
        <li><a href="https://xaydungchinhsach.chinhphu.vn/chi-tiet-34-don-vi-hanh-chinh-cap-tinh-tu-12-6-2025-119250612141845533.htm" target="_blank">Chi tiết 34 ĐƠN VỊ HÀNH CHÍNH CẤP TỈNH</a></li>
        <li><a href="http://dongthap.gov.vn/" target="_blank">Cổng thông tin tỉnh Đồng Tháp</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 31,
    code: '86',
    name: 'Vĩnh Long',
    slug: 'vinh-long',
    oldNames: ['Vĩnh Long', 'Bến Tre', 'Trà Vinh'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 460, y: 640 },
    color: '#fd79a8',
    touristAttractions: [
      {
        name: 'Chợ nổi Cái Bè',
        description: 'Chợ nổi truyền thống với các sản phẩm địa phương đa dạng',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        location: 'Cái Bè, Vĩnh Long',
        url: 'https://vinhlong.gov.vn/vi-VN/1/3034/17/231/tintuc/cho-noi-cai-be.aspx',
      },
      {
        name: 'Cồn Tân Phong',
        description: 'Đảo sinh thái với vườn cây trái và làng nghề truyền thống',
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400',
        location: 'An Bình, Vĩnh Long',
        url: 'https://vinhlong.gov.vn/vi-VN/1/3034/17/231/tintuc/con-tan-phong.aspx',
      },
      {
        name: 'Làng nghề kẹo dừa Bến Tre',
        description: 'Làng nghề sản xuất kẹo dừa truyền thống nổi tiếng',
        imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400',
        location: 'Bến Tre, Vĩnh Long',
        url: 'https://bentre.gov.vn/vi-VN/1/3034/17/231/tintuc/lang-nghe-keo-dua-ben-tre.aspx',
      },
      {
        name: 'Cánh đồng sen Đồng Tháp Mười',
        description: 'Cánh đồng sen tuyệt đẹp với màu hồng rực rỡ',
        imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0ace2a4d5f8?w=400',
        location: 'Trà Vinh, Vĩnh Long',
      },
    ],
    population: '4,257,581',
    area: '6,296.20 km²',
    description:
      'Vĩnh Long là tỉnh nằm giữa lòng đồng bằng sông Cửu Long, có hệ thống sông ngòi chằng chịt. Tỉnh nổi tiếng với du lịch sinh thái sông nước và các sản phẩm nông nghiệp đặc trưng. Sau sáp nhập với Bến Tre và Trà Vinh, Vĩnh Long trở thành trung tâm nông nghiệp quan trọng của ĐBSCL.',
    fullPageContent: `
      <h2>Tỉnh Vĩnh Long - Trung tâm du lịch sinh thái sông nước</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Vĩnh Long là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>254,479,941 triệu đồng</strong>, xếp hạng <strong>17/34</strong> toàn quốc. Thu ngân sách đạt <strong>21,789,629 triệu đồng</strong>, xếp hạng <strong>20/34</strong>. Sau sáp nhập với Bến Tre và Trà Vinh, tỉnh có quy mô kinh tế lớn hơn với thế mạnh về nông nghiệp và du lịch sinh thái.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>50.75 triệu đồng/năm</strong>, xếp hạng <strong>22/34</strong> toàn quốc. Với dân số <strong>4,257,581 người</strong> (xếp hạng <strong>9/34</strong>) và diện tích <strong>6,296.20 km²</strong> (xếp hạng <strong>25/34</strong>), Vĩnh Long có mật độ dân số khá cao.</p>

      <h3>Vị trí và sáp nhập</h3>
      <p>Vĩnh Long nằm giữa lòng đồng bằng sông Cửu Long, có hệ thống sông ngòi chằng chịt. Sau sáp nhập với Bến Tre và Trà Vinh, tỉnh mở rộng ra biển và có thêm các sản phẩm đặc trưng như dừa, muối và các sản phẩm thủy sản.</p>

      <h3>Du lịch sinh thái và nông nghiệp</h3>
      <p>Tỉnh nổi tiếng với du lịch sinh thái sông nước, các vườn cây trái, làng nghề truyền thống và các sản phẩm nông nghiệp đặc trưng. Du lịch miệt vườn, chợ nổi và văn hóa đồng bằng sông Cửu Long là những điểm mạnh của tỉnh.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Với lợi thế về du lịch sinh thái, nông nghiệp và thủy sản, Vĩnh Long có tiềm năng phát triển du lịch văn hóa, công nghiệp chế biến nông sản và thủy sản. Tỉnh đang tập trung phát triển du lịch bền vững và nông nghiệp công nghệ cao.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 254,479,941 triệu đồng (Xếp hạng 17/34)</li>
        <li>Thu ngân sách: 21,789,629 triệu đồng (Xếp hạng 20/34)</li>
        <li>Thu nhập bình quân: 50.75 triệu đồng/năm (Xếp hạng 22/34)</li>
        <li>Dân số: 4,257,581 người (Xếp hạng 9/34)</li>
        <li>Diện tích: 6,296.20 km² (Xếp hạng 25/34)</li>
        <li>Thủ phủ: Thành phố Vĩnh Long</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/V%C4%A9nh_Long" target="_blank">Wikipedia - Vĩnh Long</a></li>
        <li><a href="http://vinhlong.gov.vn/" target="_blank">Cổng thông tin tỉnh Vĩnh Long</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 32,
    code: '91',
    name: 'An Giang',
    slug: 'an-giang',
    oldNames: ['An Giang', 'Kiên Giang'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 420, y: 660 },
    color: '#00cec9',
    population: '4,952,238',
    area: '9,888.91 km²',
    description:
      'An Giang là tỉnh biên giới với Campuchia sau sáp nhập với Kiên Giang, có núi Sam và nhiều di tích Phật giáo cổ. Tỉnh có thêm vùng ven biển với đảo Phú Quốc nổi tiếng.',
    touristAttractions: [
      {
        name: 'Đảo Phú Quốc',
        description:
          'Hòn đảo ngọc lớn nhất Việt Nam với bãi biển đẹp, rừng nguyên sinh và nhiều khu nghỉ dưỡng cao cấp.',
        imageUrl:
          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Phú Quốc, Kiên Giang',
        url: 'https://vi.wikipedia.org/wiki/Ph%C3%BA_Qu%E1%BB%91c',
      },
      {
        name: 'Núi Sam',
        description:
          'Ngọn núi thiêng với nhiều đền chùa cổ, là trung tâm tín ngưỡng của người dân An Giang và vùng ĐBSCL.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Châu Đốc, An Giang',
        url: 'https://vi.wikipedia.org/wiki/N%C3%BAi_Sam',
      },
      {
        name: 'Cáp Treo Hòn Thơm',
        description:
          'Cáp treo dài nhất thế giới băng qua biển với chiều dài 7.899m, kết nối Phú Quốc với đảo Hòn Thơm.',
        imageUrl:
          'https://images.unsplash.com/photo-1551524164-6cf2ac240e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Phú Quốc, Kiên Giang',
        url: 'https://phuquoc.gov.vn/vi-VN/1/3034/17/231/tintuc/cap-treo-hon-thom.aspx',
      },
      {
        name: 'Rừng Quốc Gia Phú Quốc',
        description: 'Khu rừng nguyên sinh với hệ sinh thái đa dạng, là nơi bảo tồn nhiều loài động thực vật quý hiếm.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Phú Quốc, Kiên Giang',
        url: 'https://vi.wikipedia.org/wiki/V%C6%B0%E1%BB%9Dn_qu%E1%BB%91c_gia_Ph%C3%BA_Qu%E1%BB%91c',
      },
      {
        name: 'Chợ Nổi Long Xuyên',
        description: 'Chợ nổi truyền thống trên sông Hậu với không khí mua bán sầm uất và đặc sản miền Tây.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Long Xuyên, An Giang',
        url: 'https://angiang.gov.vn/vi-VN/1/3034/17/231/tintuc/cho-noi-long-xuyen.aspx',
      },
    ],
    fullPageContent: `
      <h2>Tỉnh An Giang - Trung tâm biên giới và du lịch biển đảo</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>An Giang là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>271,345,883 triệu đồng</strong>, xếp hạng <strong>16/34</strong> toàn quốc. Thu ngân sách đạt <strong>26,279,135 triệu đồng</strong>, xếp hạng <strong>15/34</strong>. Sau sáp nhập với Kiên Giang, tỉnh có quy mô kinh tế lớn với thế mạnh về du lịch biển và nông nghiệp.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>55.22 triệu đồng/năm</strong>, xếp hạng <strong>24/34</strong> toàn quốc. Với dân số <strong>4,952,238 người</strong> (xếp hạng <strong>3/34</strong>) và diện tích <strong>9,888.91 km²</strong> (xếp hạng <strong>13/34</strong>), An Giang có dân số đông thứ 3 cả nước.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>An Giang là tỉnh biên giới với Campuchia sau khi sáp nhập với Kiên Giang. Tỉnh có núi Sam và nhiều di tích Phật giáo cổ, cùng với vùng ven biển và đảo Phú Quốc nổi tiếng. Việc sáp nhập mang lại vùng ven biển với tiềm năng du lịch lớn và đa dạng địa hình từ đồng bằng đến biển đảo.</p>

      <h3>Du lịch và văn hóa đa dân tộc</h3>
      <p>Tỉnh nổi tiếng với lễ hội Ok Om Bok của đồng bào Khmer, núi Sam với nhiều di tích Phật giáo cổ. Đảo Phú Quốc là điểm đến du lịch hàng đầu Việt Nam với biển đẹp, rừng nguyên sinh và các resort cao cấp, được mệnh danh là "đảo ngọc".</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Với lợi thế về du lịch biển đảo, vị trí biên giới quan trọng và nền nông nghiệp phát triển, An Giang có tiềm năng lớn phát triển du lịch nghỉ dưỡng cao cấp, thương mại biên giới và chế biến nông thủy sản. Đảo Phú Quốc đang trở thành trung tâm du lịch quốc tế hàng đầu.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 271,345,883 triệu đồng (Xếp hạng 16/34)</li>
        <li>Thu ngân sách: 26,279,135 triệu đồng (Xếp hạng 15/34)</li>
        <li>Thu nhập bình quân: 55.22 triệu đồng/năm (Xếp hạng 24/34)</li>
        <li>Dân số: 4,952,238 người (Xếp hạng 3/34)</li>
        <li>Diện tích: 9,888.91 km² (Xếp hạng 13/34)</li>
        <li>Thủ phủ: Thành phố Long Xuyên</li>
        <li>Trước sáp nhập: An Giang + Kiên Giang</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/An_Giang" target="_blank">Wikipedia - An Giang</a></li>
        <li><a href="http://angiang.gov.vn/" target="_blank">Cổng thông tin tỉnh An Giang</a></li>
        <li><a href="https://vi.wikipedia.org/wiki/Ph%C3%BA_Qu%E1%BB%91c" target="_blank">Wikipedia - Phú Quốc</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 33,
    code: '92',
    name: 'Thành phố Cần Thơ',
    slug: 'can-tho',
    oldNames: ['Cần Thơ', 'Hậu Giang', 'Sóc Trăng'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 440, y: 680 },
    color: '#6c5ce7',
    population: '4,199,824',
    area: '6,360.83 km²',
    description:
      'Cần Thơ là thành phố trực thuộc trung ương, trung tâm kinh tế của đồng bằng sông Cửu Long. Sau sáp nhập với Hậu Giang và Sóc Trăng, Cần Thơ trở thành đô thị lớn nhất ĐBSCL.',
    touristAttractions: [
      {
        name: 'Chợ Nổi Cái Răng',
        description: 'Chợ nổi lớn nhất miền Tây, nơi giao thương sầm uất trên sông với đặc sản trái cây ĐBSCL.',
        imageUrl:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Cái Răng, Cần Thơ',
        url: 'https://vi.wikipedia.org/wiki/Ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng',
      },
      {
        name: 'Vườn Cò Bằng Lăng',
        description:
          'Khu du lịch sinh thái với hàng nghìn con cò trắng về đậu, tạo cảnh quan độc đáo giữa cánh đồng xanh.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Huyện Thốt Nốt, Cần Thơ',
        url: 'https://cantho.gov.vn/vi-VN/1/3034/17/231/tintuc/vuon-co-bang-lang.aspx',
      },
      {
        name: 'Nhà Cổ Bình Thủy',
        description: 'Ngôi nhà cổ 100 tuổi kiến trúc Pháp - Việt kết hợp, nơi quay phim "Người Tình".',
        imageUrl:
          'https://images.unsplash.com/photo-1551524164-6cf2ac240e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Quận Bình Thủy, Cần Thơ',
        url: 'https://cantho.gov.vn/vi-VN/1/3034/17/231/tintuc/nha-co-binh-thuy.aspx',
      },
      {
        name: 'Vườn Trái Cây Mỹ Khánh',
        description: 'Khu du lịch sinh thái với vườn trái cây nhiệt đới, trải nghiệm đời sống nông thôn ĐBSCL.',
        imageUrl:
          'https://images.unsplash.com/photo-1551524164-6cf2ac240e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Huyện Phong Điền, Cần Thơ',
        url: 'https://cantho.gov.vn/vi-VN/1/3034/17/231/tintuc/vuon-trai-cay-my-khanh.aspx',
      },
      {
        name: 'Cồn Sơn',
        description: 'Đảo nhỏ giữa sông Hậu với làng nghề truyền thống, du lịch cộng đồng độc đáo.',
        imageUrl:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        location: 'Huyện Thốt Nốt, Cần Thơ',
        url: 'https://cantho.gov.vn/vi-VN/1/3034/17/231/tintuc/con-son.aspx',
      },
    ],
    fullPageContent: `
      <h2>Thành phố Cần Thơ - Trung tâm kinh tế đồng bằng sông Cửu Long</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Cần Thơ là trung tâm kinh tế quan trọng với GRDP đạt <strong>281,674,628 triệu đồng</strong>, xếp hạng <strong>13/34</strong> toàn quốc. Thu ngân sách đạt <strong>24,788,357 triệu đồng</strong>, xếp hạng <strong>18/34</strong>. Sau sáp nhập với Hậu Giang và Sóc Trăng, thành phố có quy mô kinh tế lớn và vai trò trung tâm vùng ĐBSCL.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>59.56 triệu đồng/năm</strong>, xếp hạng <strong>22/34</strong> toàn quốc. Với dân số <strong>4,199,824 người</strong> (xếp hạng <strong>10/34</strong>) và diện tích <strong>6,360.83 km²</strong> (xếp hạng <strong>24/34</strong>), Cần Thơ có mật độ dân số cao và là đô thị lớn nhất ĐBSCL.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Cần Thơ là thành phố trực thuộc trung ương, trung tâm kinh tế của đồng bằng sông Cửu Long. Thành phố nằm trong vùng trung tâm ĐBSCL với hệ thống sông ngòi chằng chịt. Sau sáp nhập với Hậu Giang và Sóc Trăng, Cần Thơ trở thành đô thị lớn nhất và quan trọng nhất của vùng.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Cần Thơ có vị trí chiến lược là trung tâm giao thông, thương mại và dịch vụ của ĐBSCL. Thành phố có sân bay quốc tế, cảng sông lớn và là trung tâm giáo dục, y tế của vùng. Sau sáp nhập, thành phố có thêm tiềm năng về nông nghiệp, nuôi trồng thủy sản và du lịch sinh thái sông nước.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 281,674,628 triệu đồng (Xếp hạng 13/34)</li>
        <li>Thu ngân sách: 24,788,357 triệu đồng (Xếp hạng 18/34)</li>
        <li>Thu nhập bình quân: 59.56 triệu đồng/năm (Xếp hạng 22/34)</li>
        <li>Dân số: 4,199,824 người (Xếp hạng 10/34)</li>
        <li>Diện tích: 6,360.83 km² (Xếp hạng 24/34)</li>
        <li>Trung tâm: Quận Ninh Kiều</li>
        <li>Trước sáp nhập: Cần Thơ + Hậu Giang + Sóc Trăng</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/C%E1%BA%A7n_Th%C6%A1" target="_blank">Wikipedia - Cần Thơ</a></li>
        <li><a href="https://cantho.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Cần Thơ</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
  {
    id: 34,
    code: '96',
    name: 'Cà Mau',
    slug: 'ca-mau',
    oldNames: ['Cà Mau', 'Bạc Liêu'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 460, y: 720 },
    color: '#e17055',
    touristAttractions: [
      {
        name: 'Mũi Cà Mau',
        description: 'Điểm cực Nam của đất liền Việt Nam với cột mốc chủ quyền và cảnh quan tuyệt đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        location: 'Ngọc Hiển, Cà Mau',
        url: 'https://vi.wikipedia.org/wiki/M%C5%A9i_C%C3%A0_Mau',
      },
      {
        name: 'Rừng U Minh Hạ',
        description: 'Khu rừng ngập nước độc đáo với hệ sinh thái đa dạng và quý hiếm',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
        location: 'Trần Văn Thời, Cà Mau',
        url: 'https://camau.gov.vn/vi-VN/1/3034/17/231/tintuc/rung-u-minh-ha.aspx',
      },
      {
        name: 'Trang trại gió Bạc Liêu',
        description: 'Cánh đồng quạt gió hiện đại tạo năng lượng sạch cho vùng đất cực Nam',
        imageUrl: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=400',
        location: 'Bạc Liêu, Cà Mau',
        url: 'https://baclieu.gov.vn/vi-VN/1/3034/17/231/tintuc/trang-trai-gio-bac-lieu.aspx',
      },
      {
        name: 'Vườn chim Bạc Liêu',
        description: 'Khu bảo tồn với hàng ngàn loài chim quý hiếm và cảnh quan thiên nhiên tuyệt đẹp',
        imageUrl: 'https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400',
        location: 'Bạc Liêu, Cà Mau',
        url: 'https://baclieu.gov.vn/vi-VN/1/3034/17/231/tintuc/vuon-chim-bac-lieu.aspx',
      },
    ],
    population: '2,606,672',
    area: '7,942.39 km²',
    description:
      'Cà Mau là tỉnh cực Nam của Việt Nam, có vị trí địa lý đặc biệt ở mũi Cà Mau. Tỉnh có rừng U Minh Hạ và nhiều khu bảo tồn thiên nhiên quý hiếm. Sau sáp nhập với Bạc Liêu, Cà Mau có thêm tiềm năng phát triển năng lượng gió và du lịch sinh thái.',
    fullPageContent: `
      <h2>Tỉnh Cà Mau - Vùng đất cực Nam và năng lượng tái tạo</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Cà Mau là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>279,735,681 triệu đồng</strong>, xếp hạng <strong>15/34</strong> toàn quốc. Thu ngân sách đạt <strong>10,481,971 triệu đồng</strong>, xếp hạng <strong>29/34</strong>. Sau sáp nhập với Bạc Liêu, tỉnh có quy mô kinh tế lớn với thế mạnh về năng lượng tái tạo và thủy sản.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>59.35 triệu đồng/năm</strong>, xếp hạng <strong>21/34</strong> toàn quốc. Với dân số <strong>2,606,672 người</strong> (xếp hạng <strong>20/34</strong>) và diện tích <strong>7,942.39 km²</strong> (xếp hạng <strong>21/34</strong>), Cà Mau có mật độ dân số thấp.</p>

      <h3>Vị trí địa lý đặc biệt</h3>
      <p>Cà Mau là tỉnh cực Nam của Việt Nam, có vị trí địa lý đặc biệt ở mũi Cà Mau - điểm cực Nam của đất liền Việt Nam. Tỉnh có rừng U Minh Hạ và nhiều khu bảo tồn thiên nhiên quý hiếm, là nơi giao thoa giữa nước ngọt và nước mặn.</p>

      <h3>Tiềm năng năng lượng và sinh thái</h3>
      <p>Sau sáp nhập với Bạc Liêu, Cà Mau có thêm tiềm năng lớn phát triển năng lượng gió với các trang trại gió lớn. Tỉnh có hệ sinh thái đa dạng với rừng ngập mặn, khu bảo tồn sinh quyển và các sản phẩm thủy sản đặc trưng.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Với lợi thế về năng lượng tái tạo, thủy sản và du lịch sinh thái, Cà Mau có tiềm năng phát triển thành trung tâm năng lượng sạch của miền Nam. Tỉnh đang đầu tư mạnh vào các dự án năng lượng gió, nuôi trồng thủy sản và du lịch sinh thái đặc thù vùng cực Nam.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 279,735,681 triệu đồng (Xếp hạng 15/34)</li>
        <li>Thu ngân sách: 10,481,971 triệu đồng (Xếp hạng 29/34)</li>
        <li>Thu nhập bình quân: 59.35 triệu đồng/năm (Xếp hạng 21/34)</li>
        <li>Dân số: 2,606,672 người (Xếp hạng 20/34)</li>
        <li>Diện tích: 7,942.39 km² (Xếp hạng 21/34)</li>
        <li>Thủ phủ: Thành phố Cà Mau</li>
        <li>Trước sáp nhập: Cà Mau + Bạc Liêu</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/C%C3%A0_Mau" target="_blank">Wikipedia - Cà Mau</a></li>
        <li><a href="http://camau.gov.vn/" target="_blank">Cổng thông tin tỉnh Cà Mau</a></li>
        <li><a href="https://vi.wikipedia.org/wiki/M%C5%A9i_C%C3%A0_Mau" target="_blank">Wikipedia - Mũi Cà Mau</a></li>
      </ul>

      <p><em>Nguồn: <a href="https://vi.wikipedia.org/wiki/S%C3%A1p_nh%E1%BA%ADp_t%E1%BB%89nh,_th%C3%A0nh_Vi%E1%BB%87t_Nam_2025" target="_blank">Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</a></em></p>
    `,
  },
];

// Region data with slugs and metadata
export interface Region {
  name: string;
  slug: string;
  description: string;
  cities: string[];
}

export const regionsData: Region[] = [
  {
    name: 'Bắc Bộ',
    slug: 'bac-bo',
    description: 'Vùng Bắc Bộ bao gồm Hà Nội, Hải Phòng và các tỉnh phía Bắc',
    cities: citiesData.filter((c) => c.region === 'Bắc Bộ').map((c) => c.slug),
  },
  {
    name: 'Tây Bắc',
    slug: 'tay-bac',
    description: 'Vùng Tây Bắc với địa hình núi non hùng vĩ và văn hóa dân tộc đa dạng',
    cities: citiesData.filter((c) => c.region === 'Tây Bắc').map((c) => c.slug),
  },
  {
    name: 'Đông Bắc',
    slug: 'dong-bac',
    description: 'Vùng Đông Bắc với cảnh quan thiên nhiên tuyệt đẹp và nhiều di sản văn hóa',
    cities: citiesData.filter((c) => c.region === 'Đông Bắc').map((c) => c.slug),
  },
  {
    name: 'Đồng bằng Bắc Bộ',
    slug: 'dong-bang-bac-bo',
    description: 'Đồng bằng sông Hồng với nền nông nghiệp phát triển và văn hóa lúa nước',
    cities: citiesData.filter((c) => c.region === 'Đồng bằng Bắc Bộ').map((c) => c.slug),
  },
  {
    name: 'Bắc Trung Bộ',
    slug: 'bac-trung-bo',
    description: 'Vùng Bắc Trung Bộ với nhiều di sản thế giới và cảnh quan thiên nhiên',
    cities: citiesData.filter((c) => c.region === 'Bắc Trung Bộ').map((c) => c.slug),
  },
  {
    name: 'Nam Trung Bộ',
    slug: 'nam-trung-bo',
    description: 'Vùng Nam Trung Bộ với bờ biển dài và tiềm năng du lịch',
    cities: citiesData.filter((c) => c.region === 'Nam Trung Bộ').map((c) => c.slug),
  },
  {
    name: 'Tây Nguyên',
    slug: 'tay-nguyen',
    description: 'Cao nguyên Tây Nguyên với đất đỏ bazan màu mỡ và văn hóa Cồng chiêng',
    cities: citiesData.filter((c) => c.region === 'Tây Nguyên').map((c) => c.slug),
  },
  {
    name: 'Đông Nam Bộ',
    slug: 'dong-nam-bo',
    description: 'Vùng Đông Nam Bộ là trung tâm kinh tế lớn nhất cả nước',
    cities: citiesData.filter((c) => c.region === 'Đông Nam Bộ').map((c) => c.slug),
  },
  {
    name: 'Đồng bằng sông Cửu Long',
    slug: 'dong-bang-song-cuu-long',
    description: 'Đồng bằng sông Cửu Long - vựa lúa của cả nước với hệ thống kênh rạch chằng chịt',
    cities: citiesData.filter((c) => c.region === 'Đồng bằng sông Cửu Long').map((c) => c.slug),
  },
];

export default citiesData;
