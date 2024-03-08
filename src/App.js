export default function App() {
  return (
    <div>
      <h3>Danh sách hoa</h3>
      <table border="1px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên hoa</th>
            <th>Loại hoa</th>
            <th>Hình ảnh</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hoa Phong Lan</td>
            <td>Khai trương</td>
            <td>
              <img src="/images/hoa1.jpg" alt="hoa1.jpg" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hoa tỷ muội</td>
            <td>Khai trương</td>
            <td>
              <img src="/images/hoa2.jpg" alt="hoa2.jpg" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hoa Violet</td>
            <td>Hoa kỷ niệm</td>
            <td>
              <img src="/images/hoa3.jpg" alt="hoa3.jpg" />
            </td>
          </tr>
        </tbody>
      </table>
      <p>Copyright 2013</p>
    </div>
  )
}
